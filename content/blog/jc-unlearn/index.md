---
title: Things Java (and C#) developer should unlearn when start learning new languages (Part 1)
date: "2023-03-11T12:00:00.000"
---

Java and C# are very famous for being good programming languages for enterprise work. It's pretty stable. Patterns and practices are known and well-established. They are [good boring technology](https://boringtechnology.club/) that works.

However, since the community and developer of these languages usually work in enterprise development. Enterprise love having a standard. Enterprise love having design patterns. Enterprise love having best practices. In Java and C# world, there are established patterns and best practices for almost everything. Many developers are rigidly thought that there is only one single best way to achieve something, and every alternative is undesirable. This belief is embedded in the culture of the community.

For the sake of future reference, I will call these developer JC developer.

That culture well in the enterprise environment. It's not good to have every single developer invent their own pattern and make every part of a big codebase become weirdly unique.

However, I found many JC developers struggle to learn a new programming language.

Other programming languages such as Go, Elixir, Python, Javascript, TypeScript, Clojure, Ruby, Scala or Rust have a different style, semantic and idiomatic which looks and feels different from JC. I've seen many
JC developers try to force JC-ish code into other programming languages and it usually does not end well.

There are many patterns, best practices and beliefs that JC developer should let go of while learning other programming language. I'm here to talk about it.

## Dependency Injection (or IoC container) isn't always necessary to make code testable

This is the most common one. JC developer usually asked where is dependency injection and where is IoC container that I can config dependencies.

In many programming language, you don't need IoC container in order to switch between test double and actual code.

Assuming you have to call `PaymentGateway` to pay for things. If the result is success, you need to save some data in response into transaction database.

In Ruby, you can just switch test and code using `Mocha`. The language allow us to do a simple monkey patching. Here are some examples.

Ruby

```Ruby
class Pay
  def pay(payment)
    response = PaymentService.new.pay(payment)
    transaction = Transaction.new
    transaction.amount = response[:amount]
    transaction.ref = response[:ref]
    raise 'Cannot save' unless transaction.save

    transaction
  end
end

class PayTest < ActiveSupport::TestCase
  test 'pay when success' do
    payment = { amount: 500 }
    Transaction.any_instance.stubs(:save).returns(true)
    PaymentService.any_instance.expects(:pay).with(payment).returns({ amount: 500, ref: 'super' })
    t = Pay.new.pay(payment)
    assert_equal 500, t.amount
    assert_equal 'super', t.ref
  end

  test 'raise when pay failed' do
    Transaction.any_instance.stubs(:save).returns(false)
    PaymentService.any_instance.stubs(:pay).returns({ amount: 500, ref: 'super' })
    exception = assert_raise(StandardError) do
      Pay.new.pay({ amount: 500 })
    end
    assert_equal 'Cannot save', exception.message
  end
end
```

In Ruby, even though class `Pay` require `PaymentService` object to connect to payment gateway and `Transaction` object to connect to database. We don't really need dependency injection or IoC container in order to make this code testable. Ruby allows us to simply say: For every transaction instance, `save` will return true and `PaymentService` will return our particular result without connecting to an actual third-party.

```Ruby
Transaction.any_instance.stubs(:save).returns(true)
PaymentService.any_instance.expects(:pay).with(payment).returns({ amount: 500, ref: 'super' })
```

Javascript/TypeScript also have same monkey-patch approach. But since class isn't even necessary, we can even reduce `PaymentService` and `Transaction` to be mere functions.

```Javascript
// Implementation
const transaction = require("./transaction");
const paymentService = require("./paymentService");

async function pay(payment) {
  const response = await paymentService.pay(payment);

  const newTransaction = await transaction.save({
    amount: response.amount,
    ref: response.ref,
  });

  if (!newTransaction) {
    throw new Error("Cannot save");
  }
  return newTransaction;
}

// ----------------- Test file -----------------
jest.mock("./transaction");
jest.mock("./paymentService");

const transaction = require("./transaction");
const paymentService = require("./paymentService");
const pay = require("./pay");

describe("pay", () => {
  it("should be able to pay with correct amount", async () => {
    const payment = { amount: 300 };
    paymentService.pay.mockResolvedValue({ amount: 300, ref: "myref" });
    transaction.save.mockResolvedValue({ amount: 300, ref: "myref" });

    const result = await pay.pay(payment);
    expect(transaction.save).toHaveBeenCalledWith({
      amount: 300,
      ref: "myref",
    });
    expect(result.amount).toEqual(300);
    expect(result.ref).toEqual("myref");
  });

  it("should be throw when cannot saved", async () => {
    const payment = { amount: 300 };
    paymentService.pay.mockResolvedValue({ amount: 300, ref: "myref" });
    transaction.save.mockResolvedValue(null);

    await expect(() => pay.pay(payment)).rejects.toThrowError("Cannot save");
  });
});

```

First of all, in Javascript, you don't always need an object or class to do a simple thing (I will emphasize this later). Second, you can use `jest.mock` to force return value and even implementation of a class or function. This means you don't need a dependency injection or IoC container to create a testable code.

While there might be some merit to using IoC and dependency injection anyway, I have seen many JC developers who insist that you can't write testable code without dependency injection and IoC container. That is not true for many other languages.

If all you need is testable code, mocking and monkey-patching (like `jest.mock` and `stub`) can be simpler and more direct to achieve the effect. You don't need to bring the whole IoC container library into the equation.

In Go, dependency injection in general is still a common way to write a test. However, since Go does not confine you to a class system, dependency injection can be done at a function level. Here is an example from [gitbook Learn Go with test](https://quii.gitbook.io/learn-go-with-tests/go-fundamentals/mocking).

```Golang
package main

import (
	"fmt"
	"io"
)

type Sleeper interface {
	Sleep()
}

const finalWord = "Go!"
const countdownStart = 3

func Countdown(out io.Writer, sleeper Sleeper) {
	for i := countdownStart; i > 0; i-- {
		fmt.Fprintln(out, i)
		sleeper.Sleep()
	}

	fmt.Fprint(out, finalWord)
}

// ----------------- Test -------------------
type SpySleeper struct {
	Calls int
}

func (s *SpySleeper) Sleep() {
	s.Calls++
}

func TestCountdown(t *testing.T) {
	buffer := &bytes.Buffer{}
	spySleeper := &SpySleeper{}

	Countdown(buffer, spySleeper)

	got := buffer.String()
	want := `3
2
1
Go!`

	if got != want {
		t.Errorf("got %q want %q", got, want)
	}

	if spySleeper.Calls != 3 {
		t.Errorf("not enough calls to sleeper, want 3 got %d", spySleeper.Calls)
	}
}
```

Notice that the `SpySleeper` is injected directly into the function. You can see that in other languages it isn't necessary to inject dependency via an object constructor.

---

I have demonstrated how you can write unit testable code via different method aside from what you usually do in JC world, a constructor-based dependency injection with IoC container in framework.

There are many ways to make code testable in other languages. Dependency injection isn't the only option and even with Go, dependency injection isn't necessarily about the constructor.

So the first thing I suggest JC developer unlearn is the fixation toward dependency injection and IoC container. A good code should be testable and it's true that in JC environment, you should use always use dependency injection to write good code. That's the only way in JC.

However, when you start learning other languages, you can write testable code without them.

When JC developer learn new language, I suggest to stay open-minded about testing approach. I know many were thought that "you must use DI and never instantiate anything directly because you need to be able to test your code". Again, it is 100% correct for JC but not necessary true in other languages.

I have a mixed feeling in how many TypeScript framework adopt IoC container approach. I understand it helps JC developer to be at ease with TypeScript, but at the same time I always think it is unnecessary if all you want to do is just write a testable code.

This [talk](https://www.youtube.com/watch?v=PTE4VJIdHPg&t=650s) also convey a great message on why explicitly using constructor can have benefit over delegated constructor to DI container.

Stay tuned for part 2: Everything don't need to be an object.
