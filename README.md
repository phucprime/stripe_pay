# stripe - A payment product suite that is completely integrated

## The internet's payment infrastructure

Have you ever wanted to build an e-commerce platform and earn money from it?

Stripe's software and APIs are used by millions of businesses of all sizes, from startups to Fortune 500s, to take payments, deliver payouts, and manage their businesses online.

![gif](https://github.com/phucprime/stripe_pay/blob/main/assets/tripe.gif)

I'm using the Next Image, thus I need to whitelist it in `next.config.js`. Also, include the following `env` key, which contains both the public and secret Stripe API keys:

```javascript
module.exports = {
  images: {
    domains: ["domain.com"],
  },
  env: {
    stripe_public_key: process.env.STRIPE_PUBLIC_KEY,
  },
};
```

Stripe expects receiving the following object types:

```json
{
    description: "description",
    quantity: 1,
    price_data: {
      currency: "vnd",
      unit_amount: 99999,
      product_data: {
        name: "name",
        image: ["url"],
      },
    },
}
```

[Learn more](https://stripe.com/docs)

Enjoy!


