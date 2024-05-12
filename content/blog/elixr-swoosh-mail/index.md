---
title: "Phoenix Elixir Swoosh (Email sending module) issue in OTP 26"
date: "2024-05-12T12:00:00.000"
---

TLDR; When you try to use Swoosh SMTP adapter to send an email, you must configure SSL manually and properly.

Source: https://github.com/swoosh/swoosh/issues/785

## Cause

Somehow, Swoosh is depend on some type or Erlang module [gen_smtp](https://github.com/gen-smtp/gen_smtp).

When you connect to SMTP that required SSL, normally you will use trusted certificate authorithy provide by OS. But the default behavior of the module does not include doing that, so you need to provide that manually.

## Solution

1. (Recommended) Use module `tls_certificate_check` to get proper trusted CA and TLS option based on url you provde, and put that into Swoosh option manually.

```Elixir
defmodule YourApp.Mailer do
  use Swoosh.Mailer, otp_app: :your_app

  ## Use this instead of deliver normally
  def deliver_email(email) do
    ## Original Config
    original_config = Application.get_env(:your_app, YourApp.Mailer)

    my_config =
      original_config ++
        [
          tls_options: :tls_certificate_check.options(original_config[:relay])
        ]

    deliver(email, my_config)
  end
end
```

2. Manually set cert and TLS option

```Elixir
config :your_app, YourApp.Mailer,
  adapter: Swoosh.Adapters.SMTP,
  # adapter: Swoosh.Adapters.Local

  relay: "smtp.gmail.com",
  username: System.get_env("EMAIL_USERNAME"),
  password: System.get_env("EMAIL_PASSWORD"),
  ssl: false,
  tls: :always,
  auth: :always,
  port: 587,
  retries: 2,
  no_mx_lookups: false,
  tls_options: [
    ## You need to figure these options out based on your smtp server.... So frustrating
    versions: [:"tlsv1.3"],
    verify: :verify_peer,
    cacerts: :certifi.cacerts(),
    server_name_indication: ~c"smtp.gmail.com",
    depth: 99
  ]
```

At the end of the day, it is quite frustrating to provide this manually since Erlang OTP 26 for whatever reason. But it is what it is.
