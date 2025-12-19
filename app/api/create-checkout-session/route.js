import Stripe from "stripe";
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  try {
    const { items, successUrl, cancelUrl } = await req.json();

    console.log('Received items:', items);

    if (!items || !Array.isArray(items) || items.length === 0) {
      return NextResponse.json(
        { error: "No items provided or invalid format" },
        { status: 400 }
      );
    }

    // Validate each item
    for (const item of items) {
      if (!item.name || typeof item.name !== 'string' || item.name.trim() === '') {
        return NextResponse.json(
          { error: "Invalid item name" },
          { status: 400 }
        );
      }
      if (!item.price || typeof item.price !== 'number' || item.price <= 0) {
        return NextResponse.json(
          { error: "Invalid item price" },
          { status: 400 }
        );
      }
      if (!item.quantity || typeof item.quantity !== 'number' || item.quantity <= 0) {
        return NextResponse.json(
          { error: "Invalid item quantity" },
          { status: 400 }
        );
      }
    }

    const line_items = items.map(item => ({
      price_data: {
        currency: "usd",
        product_data: {
          name: item.name.substring(0, 100), // Limit name to 100 chars
          images: item.image ? [item.image] : [],
        },
        unit_amount: Math.round(item.price * 100),
      },
      quantity: item.quantity,
    }));

    console.log('Line items:', line_items);

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items,
      success_url: successUrl,
      cancel_url: cancelUrl,
    });

    console.log('Session created:', session.id);

    return NextResponse.json({ url: session.url });

  } catch (error) {
    console.error("Stripe error:", error);
    return NextResponse.json(
      { error: error.message || "Stripe session creation failed" },
      { status: 500 }
    );
  }
}
