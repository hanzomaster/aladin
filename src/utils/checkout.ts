import { loadStripe } from "@stripe/stripe-js";

export async function checkout({ lineItems }: { lineItems: any }) {
  let stripePromise: any = null;

  const getStripe = () => {
    if (!stripePromise) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_API_KEY!);
    }
    return stripePromise;
  };

  const stripe = await getStripe();

  await stripe.redirectToCheckout({
    mode: "payment",
    lineItems,
    successUrl: `${window.location.origin}/checkoutsuccess/success`,
    cancelUrl: `${window.location.origin}/checkoutsuccess/cancel`,
  });
}
