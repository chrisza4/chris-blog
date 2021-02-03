---
title: Code to reflect of truth
---

Let say you are building an ERP application with a role-based authorization system.

Let say we are building this for a company. In this company, we have Jane. Jane is a long-time employee with a lot of influence. What she has to say is pretty important.

After some sprints passed, she looked into our demonstration, and she wanted to hide a specific menu in the main menu screen, as it is not relevant to her workflow.

Usually, the system would display a different set of menus for each role. So we considered if we should hide this menu for Jane's role? In this case, the specific menu is relevant to every employee in Jane's role, but not Jane (for some reason).

After a long negotiation, we concluded that we need to work on Jane's change request.

Now, we might go with this:

```CSharp
if (this.context.currentUser.email == "jane@thecompany.com") {
  this.settingMenus.hide();
}
```

But wait, I can see some programmer scream at this line of code. We should not be hardcoding the stuff. It is a bad practice. Sloppy work!

---

Now, if we get back to the requirement, what are the options to implement this?

I can see three options.

1. Create a preference system where everyone can configure what they want to see in the main menu
2. Make a specific role for Jane and hide the menu according to the role
3. Hardcoding

And let's evaluate each option:

The first option seems to be overkill for just one person's request. It will blow out the budget and timeline.

In the second option, we create a role to conform to the current structure of the application. We might be able to create `ACCOUTANT_BUT_FOR_JANE`, which is another role. We can copy all the role configuration and permission from `ACCOUNTANT`. But then whenever the requirement for role `ACCOUNTANT` change, we need to make sure that `ACCOUNTANT_BUT_FOR_JANE` will be in sync and does not accidentally show Jane that disgusting menu.

In the third option, it is simply a bad practice. Any good programmer should not be going around doing things the easy way and hardcoding stuff. They should implement everything in the right way.

But is it? Is hardcoding is an easy way out of this?

I would argue that since this request is a personal request from Jane herself, the hardcoding would reflect the truth in the most honest way.

```CSharp
if (this.context.currentUser.email == "jane@thecompany.com") {
  this.settingMenus.hide();
}
```

This code tells us that we hide this menu just for Jane. We don't want to hide the menu because it appropriates some kind of new role `ACCOUNTANT_BUT_NOT_JANE` in the company that emerges from business need. It just simply Jane's needs.

It is a clear message to developers as well. If two years from now: Jane retired and `jane@thecompany.com` become reserved, this code will be dead, and we can simply remove the code.

If we follow the unit test practices, we will even have a unit test:

```CSharp
[Test]
public void ShouldHideComplicatedSettingMenuForJane() {

}
```

---

So I think that when we code, reflecting the truth and nature of the requirement is way more important than conforming to the structure and "best practices".

Yes, you might leave a weird code but with some comment to explain the context. In this case, we hardcode it because it is Jane's personal request, and she refuses to work with the system unless we hide the menu. We can put that into the comment.

Sometimes, we don't be totally honest with the requirement. And we put some fancy stuff and abstraction over it. We might disdain the practice of hardcoding to just "Jane" so we might put an abstraction over it to make it seems more likable, more consistent, better structured, etc. That structure might be some role, configuration, or whatsoever.

I think those abstractions will blur the real truth and nature of the requirement. And make the system even harder to maintain.

I think we should be honest with the requirement, reflect it truthfully no matter how messy it is.

And the truth shall set you free.
