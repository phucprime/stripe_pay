# stripe - A fully integrated suite of payments products

## Payments infrastructure for the internet

Did you ever want to create an e-commerce platform and earn through it?

Millions of companies of all sizes—from startups to Fortune 500s—use Stripe’s software and APIs to accept payments, send payouts, and manage their businesses online.

![gif](https://github.com/phucprime/stripe_pay/blob/main/assets/tripe.gif)

I'm using the next Image so I have to whitelist it in `next.config.js` also add the env key contain public and secret Stripe's API key:
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

Type of object which Stripe expects to receive:
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


