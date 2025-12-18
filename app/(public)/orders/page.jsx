'use client'

import PageTitle from "@/components/PageTitle";
import OrderItem from "@/components/OrderItem";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import toast from "react-hot-toast";

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const searchParams = useSearchParams();

  /* ---------- Fetch orders from MongoDB ---------- */
  const fetchOrders = async () => {
    try {
      const res = await fetch("/api/orders");
      const data = await res.json();
      setOrders(data);
    } catch (error) {
      console.error("Failed to fetch orders", error);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  /* ---------- Stripe success alert ---------- */
  useEffect(() => {
    if (searchParams.get("success") === "1") {
      toast.success("Order placed successfully 🎉");
    }
  }, [searchParams]);

  return (
    <div className="min-h-[70vh] mx-6">
      {orders.length > 0 ? (
        <div className="my-20 max-w-7xl mx-auto">
          <PageTitle
            heading="My Orders"
            text={`Showing total ${orders.length} orders`}
            linkText="Go to home"
          />

          <table className="w-full max-w-5xl text-slate-500 table-auto border-separate border-spacing-y-12 border-spacing-x-4">
            <thead>
              <tr className="max-sm:text-sm text-slate-600 max-md:hidden">
                <th className="text-left">Product</th>
                <th className="text-center">Total Price</th>
                <th className="text-left">Address</th>
                <th className="text-left">Status</th>
              </tr>
            </thead>

            <tbody>
              {orders.map((order) => (
                <OrderItem key={order._id} order={order} />
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="min-h-[80vh] mx-6 flex items-center justify-center text-slate-400">
          <h1 className="text-2xl sm:text-4xl font-semibold">
            You have no orders
          </h1>
        </div>
      )}
    </div>
  );
}
