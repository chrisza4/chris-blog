---
title: Common misconception of dependency inversion
date: "2021-12-26T12:00:00.000"
---

Dependency inversion is widely misunderstood. I will explain why.

According to the definition: the principle itself consists of two rules

1. High-level modules should not depend on low-level modules. Both should depend on abstractions.
2. Abstractions should not depend on details. Details should depend on abstractions.

In this context, high-level modules mean domain logic and low-level modules mean technology stack. For example: If you are working on an accounting system. All tax formulas are high-level modules, and the database which you fetch invoices and receipts to calculate tax refunds is a low-level module

You can imply that the gran idea is to decouple business or domain logic from the technology used. If you look back into Robert Martin (the originator of the principle) works on software architecture, you will find that the idea of decoupling business logic out of the technology stack is always his theme. If you want to have a quick look: here is his idea of [Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html).

# Common understanding

Back from the idea world to the actual world. Technically speaking, every system heavily depends on a low-level technology stack to perform.

For example: If a user want see an amount of taxes for invoice number INV001, here is what you normally need to do

1. Fetch invoice INV001 from the database
2. Apply tax calculation
3. Send the calculation result to the client, probably via HTTPS protocol and internet

You can see that we depend on database implementation, HTTPS and the whole internet to work exactly and consistently as we expected to implement this feature.

Let say you have to implement a method `CalculateTax(string invoiceNumber)`, you need to at least be able to fetch invoice data from the database. How can we make this "de-coupled" from the database implementation? At a first glance, this seems to be impossible.

The common understanding is that you can achieve this by using a technique called dependency injection. Instead of depending on concrete implementation

There are many frameworks out there such as Spring or C# MVC which implement something called dependency injection framework and IoC container. So we can globally register services like this:

```CSharp
using ConfigSample.Options;
using Microsoft.Extensions.DependencyInjection.ConfigSample.Options;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddScoped<IInvoiceRepository, InvoiceRepository>();
builder.Services.AddScoped<IMyDependency2, MyDependency2>();

var app = builder.Build();
```

and this is where I think the idea become misunderstood.

Let's get back to our tax calculation on invoice example, let say you have

```Csharp
public class TaxCalculator {
  private IInvoiceRepository invoiceRepository;

  public TaxCalculator(IInvoiceRepository invoiceRepository) {
    this.invoiceRepository = invoiceRepository;
  }

  public double CalculateTax(String invoiceNumber) {
    Invoice thisInvoice = this.invoiceRepository.getById(invoiceNumber);
    // Calculate tax
  }
}
```

At a first glance, this seems to be a normal dependency inversion principle implemented using dependency injection and IoC container. We seem to be able to decouple a concrete database implementation out of tax calculation by making `TaxCalculator` depending on just an interface.

I want to step back from the code and get back to the main idea. All the main idea of this dependency injection and framework stuff is to make high-level modules independent of low-level modules right.

My question is: What does it mean to be independent?

# What does it mean to be independent?

Well, it depends.

To answer this question in a precise manner, I need to bring an extreme situation that will make the dependency graph clear: High bureaucracy, low-trusted environment.

Let say there are two vendors binding by just contract and neither of them is willing to expose their code. One is working on a class `TaxCalculator` class, which is a high-level module. Another one is working on `InvoiceRespository` class, which is low-level module.

Let's call the first team as Tax team and the second team as Repo team.

In the spirit of dependency inversion principle, the Tax team should be independent of the Repo team while the Repo team can still depend on the Tax team, right? That's mean any changes from the Repo team should not affect the Tax team, but some changes from the Tax team might affect the Repo team.

That's one way to make the dependency graph clear.

In a real Java or C# codebase, we usually see the repository interface that looks like this

```Csharp
interface IInvoiceRepository {
  Invoice getById(String invoiceId);
  List<Invoice> findAllByUserId(String userId);
  List<Invoice> findAllByEmail(String email);
  void AddInvoiceItem(InvoiceItem item);
  // And more methods
}
```

This is a clear signal that the interface is not owned by the Tax team. First of all, the interface has many methods unrelated to what Tax team need. Second of all, according to my experience, the interface changes is likely to be dictated by either database implementation or global system requirement.

Does the Tax team is independent and decoupled from database implementation, in this case, the Repo team?

I highly doubt that.

Assuming that dependency inversion is about making high-level modules independent of low-level modules, it safe to say that just using dependency injection and IoC container that the most famous framework provided does not automatically make the codebase achieve dependency inversion principle yet.

This is where I believe most of the misconception happens. Many people see that dependency inversion must be done using dependency injection (which make sense). The common implementation of dependency injection is using a global IoC container. Hence, most people believe that by just using Spring or C# MVC IoC container, they achieve dependency inversion.

Understandable, but not true.

# Real world is messy, but we can make it better

At this point, you might argue that it is impossible to make the Tax team truly independent of the technical implementation of the database. And I agree.

Let's say Tax team want to have a GUID-based invoice id but the database only supports an integer-based id, what realistically can we do.

Many hard technical limitations make it impractical to be idealistic and dogmatic about the dependency inversion principle. Some tax calculations might be impractical to do without the help of database-level aggregation.

However, we can still be better by simply asking ourselves

How about we let Tax team decide what interface they want?

```CSharp
namespace TaxModule {
  interface IGetInvoiceById {
    Invoice getById(String invoiceId);
  }
  public class TaxCalculator {
    private IGetInvoiceById getInvoiceById;

    public TaxCalculator(IGetInvoiceById getInvoiceById) {
      this.getInvoiceById = invoiceRepository;
    }

    public double CalculateTax(String invoiceNumber) {
      Invoice thisInvoice = this.IGetInvoiceById.get(invoiceNumber);
      // Calculate tax
    }
  }
}
```

Hence, the Tax team and `TaxModule` defined what interface they want instead of relying on either.

It's a matter of who owns the interface.

If high-level modules own all the interfaces. This means high-level modules dictate changes, and low-level modules need to adhere to what high-level modules define.

This makes high-level modules truly independent of changes made by low-level modules or global requirements.

This is better aligned with a vision of dependency inversion.

And in case the Repo team need to change the interface because of technical limitation, they need to inform the Tax team and ask for them to neither change their interface nor implement some kind of anti-corruption layer. Collaboration still needs to happen. But at least, all Tax team objects depends on the code in `TaxModule`, including all required interfaces. The team become more independent.

Simply put:

**I suggest that to truly invert dependency, we should let high-level modules define required interfaces instead of global interface or worse, interface dictate by low-level code.**

# Language limitation

The problem with this approach is that, sadly, the global interface approach is endorsed by IoC container design of the most common framework in practice.

If you are using Java, Kotlin or C# we don't have type-inference.

```Csharp
interface IGetInvoiceById
{
    Invoice getById(String invoiceId);
}

interface IInvoiceRepository
{
    Invoice getById(String invoiceId);
}
```

In this case, the interface `IInvoiceRepository` cannot be used as `IGetInvoiceById`. What we can only do is to have

```CSharp
interface IInvoiceRepository: IGetInvoiceById
{
}
```

And in a large system, you can imagine an explosion of small interfaces

```CSharp
interface IInvoiceRepository: IGetInvoiceById, ISetInvoiceId, IAddInvoiceItem, IGetInvoiceByUsername // ... and 8 more
{
}
```

This is where I think GoLang did a good job on type-inference and [defining Go interface philosophy](https://github.com/golang/go/wiki/CodeReviewComments#interfaces).

> Go interfaces generally belong in the package that uses values of the interface type, not the package that implements those values. The implementing package should return concrete (usually pointer or struct) types: that way, new methods can be added to implementations without requiring extensive refactoring.

Anyway, we need to be aware of a language limitation and why are we not doing this yet.

As a polyglot developer, I believe we need to be aware of both sides of the coin

1. What the ideal principle looks like, and how is it helpful?
2. What is the language and framework limitation. Is it practical to adhere with the principle to the letter based on the limitation we have?

There are two extremes stances. One is to dismiss the purity just because of current limitations ie. "Stupid. We don't do that here.". Another one is to be a purist and make a codebase become an unmaintainable mess.

Both stances are unproductive.

In Golang, I would obviously adhere to the principle of letting high-level modules define required interfaces instead of global interfaces.

In C# or Java in a current version, I might not. In the future, who knows?

# Last note

I think the wide misconception occurred because the famous concrete implementation of DI is to use IoC container.

But that's just a form, born out of many limitations and legacies.

The principle itself should be language independent.

The implementation still depends on the language and framework you use.

You cannot understand principle from the eyes of just "C# Developer", "Java developer" or "React Developer". You need to understand what's out there in the programming world.

And you might disagree with the principle. But at least, to be a better programmer, you need to understand

1. Ideal situation of programming. Such as principles,
2. Current state of programming. Such as technical limitations.

Adhere to the ideal, you become a purist. Adhere to the current state, you become stagnant.

What I try to say in this article are

1. Current implementation of Dependency Inversion principle on some famous frameworks is not really inverting dependency.
2. Ideal situation is to make high-level module code does not affect by low-level module change at all.
3. We might get closer to the ideal once we have a better language or framework. For example, type-inference is one killer feature that I hope to have in enterprise-focus programming languages.

That's one way to consolidate between the ideal and the practical side of programming.

That's all for today. Thanks for reading this far!
