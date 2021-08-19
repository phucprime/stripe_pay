const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async (req, res) => {
  
  const { items, email, itemID } = req.body;

  const transformedItems = items.map((item) => item.id === itemID && ({
    price_data: {
      currency: "vnd",
      product_data: {
        images: [item.image],
        name: item.title,
      },
      unit_amount: item.price,
    },
    description: item.description,
    quantity: 1,
  }));

  const filteredItem = transformedItems.filter((item) => item !== false);

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    shipping_address_collection: {
      allowed_countries: ["VN"],
    },
    line_items: filteredItem,
    mode: "payment",
    success_url: "http://localhost:3000/success",
    cancel_url: "http://localhost:3000/cancel",
    metadata: {
      email,
      images: JSON.stringify(items.map((item) => item.image)),
    },
  });

  res.status(200).json({ id: session.id });
};
