import Head from "next/head";
import Image from "next/image";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.stripe_public_key);

export default function Home() {
  const items = [
    {
      id: 1,
      title: "Apple Macbook Pro",
      description: "Apple M1 Chip 32GB RAM, 1TB Storage",
      image: "https://macone.vn/wp-content/uploads/2020/11/macbook-pro-silver-m1-2020.jpeg",
      price: 49000000,
    },
    {
      id: 2,
      title: "Apple Macbook Pro",
      description: "Apple M1 Chip 16GB RAM, 512GB Storage",
      image: "https://macone.vn/wp-content/uploads/2020/05/macbookpro2020-silver-768x714.jpeg",
      price: 39000000,
    },
    {
      id: 3,
      title: "Apple Macbook Pro",
      description: "Apple M1 Chip 8GB RAM, 256GB Storage",
      image: "https://macone.vn/wp-content/uploads/2019/06/Pro-2019-mv962-1.jpg",
      price: 29000000,
    },
  ];

  const createCheckOutSession = async ({item}) => {
    const stripe = await stripePromise;

    const checkoutSession = await axios.post("/api/create-checkout-session", {
      items: item,
      email: "test@gmail.com",
    });

    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });

    if (result.error) {
      alert(result.error.message);
    }
  };

  const priceFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'VND'
  });

  return (
    <div className="flex flex-row space-x-3 items-center justify-center min-h-screen  bg-green-400">
      <Head>
        <title>Next Stripe</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {items?.map((item) => (
        <div
          key={item.title}
          className="bg-white rounded-2xl h-[500px] w-[400px] p-3 shadow-xl flex flex-col justify-center items-center"
        >
          <Image
            width={300}
            height={300}
            objectFit="contain"
            src={item.image}
            alt={item.title}
          />
          <h2 className="text-center font-semibold">{item.title}</h2>
          <h2 className="text-center">{item.description}</h2>
          <h3>{priceFormatter.format(item.price)}</h3>
          <button
            onClick={() => createCheckOutSession(item)}
            role="link"
            className="bg-green-400 px-4 py-2 rounded-lg"
          >
            Buy now
          </button>
        </div>
      ))}
    </div>
  );
}
