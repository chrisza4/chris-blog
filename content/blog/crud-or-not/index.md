---
title: CRUD is simple until it's not
date: "2022-01-16T12:00:00.000"
---

Every app is just a glorified CRUD app with extra steps.

There are a lot of debates happening in the dev community between using complex architecture (such as CQRS) and viewing everything as a CRUD.

I want to clarify when CRUD is simple enough for the job, and when it is not.

Let say you want to create an accounting system. You have an invoice. Invoice can be created, read, updated and deleted.

Sounds like a CRUD app.

So you start with a simple Rails-style framework with REST-style API surface, where everything is just a resource that can be CRUDed.

The code can look like this (simplified version)

```Ruby
def update
  invoice = Invoice.get(request.body[:id])
  invoice.update_by(request.body)
  invoice.save()
end
```

# Fit everything to CRUD

Let say that your invoice can be approved. You added `status` field to the model. The status can be `Draft`, `Confirmed`, `Approved`, `Commented` and `Rejected`.

And then you some business requirement

1. When an invoice is approved, send a notification to someone so they can proceed to pay.
2. When an invoice is commented or rejected, send a notification to the creator so they can be revised.
3. When a confirmed invoice has a total of more than 100,000 USD, send a notification to the director level.

If we still model by CRUD, we need a code that looks like this:

```Ruby
def update
  invoice = Invoice.get(request.body[:id])
  old_status = invoice.status
  invoice.update_by(request.body)
  invoice.save()
  new_status = invoice.status

  # Send notification to payment department if status changed to approved
  if old_status != :Approved and new_status == :Approved
    Notification.send_to(:payment_department)
  end

  # Send notification to invoice owner if invoice was commented or rejected
  if old_status == :Confirmed and [:Commented, :Rejected].included?(new_status)
    Notification.send_to(invoice.owner)
  end

  # Send notification to management board if invoice exceed particular amount
  if old_status == :Draft and new_status == :Confirmed and invoice.total > 100000
    Notification.send_to(:C_level)
  end
end
```

So now we can generalize everything as CRUD.

Six months later, we want to add functionality to the invoice approval step.

1. We want to ensure that any invoice exceeding 100,000 USD must be approved by someone with a proper level of authorization
2. We want to lock any invoice that has been rejected more than 3 times.

If we wrote code as CRUD, to implement these requirements you must:

1. Carefully read through update hoops and see which line is related to which.
2. If 2 programmers work in parallel, they might need to resolve to merge conflict.

# Use business intent

Another type of implementation is to put a business intent into our model.

Instead of update, we have these:

```Ruby
def approve
  invoice = Invoice.get(request.body[:id])
  invoice.status = :Approved
  invoice.save
  Notification.send_to(:payment_department)
end

def reject
  invoice = Invoice.get(request.body[:id])
  invoice.status = :Reject
  invoice.save
  Notification.send_to(:invoice.owner)
end

# And so-on
```

Instead of translating business intention such as approve to be like: approval is just an update with extra steps. We instead embedded business intention directly into our method.

When the business what to modify the approval process, we can search for `approve` method.
When the business what to modify the confirmation process, we can search for `confirm` method.

Even if this contains more code, it's become easier to modify and reason about.

This is the power of moving away from CRUD based modelling.

# It's not black and white

CRUD is a simple model. There are only four concepts and it can handle almost every requirement imaginable.

Everything can be viewed as "CRUD with extra steps". Even network communication can be viewed as "CRUD of network packet with extra steps".

It is a simple and powerful model. But it has its own limitation.

CRUD based method works well until collaboration break.

You can fit nearly every app into the CRUD model, but at what cost?

The question is here is not can you, it's should you.

If your software grows based on some particular business process, such as if your accounting module is famous for a world-class approval system, it's worth you putting a highlight to those business intent rather than generalize it to "just CRUD with extra steps".

I don't have a clear line between when to model the app as CRUD and when to do the domain event-based app.

But I know that if communication starts to break down. If a requirement needs 2 days of dev assessment just to translate the requirement into codebase modelling, check where to change, what is the impact.

Your model might not be sufficient.

And that's when you might need to move on from the simple CRUD model.
