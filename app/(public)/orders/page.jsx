'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import OrderItem from '@/components/OrderItem';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { clearCart } from '@/lib/features/cart/cartSlice';

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const searchParams = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchOrders = async () => {
      const res = await fetch('/api/orders');
      const data = await res.json();
      setOrders(data || []);
    };

    fetchOrders();

    // Handle Stripe success
    if (searchParams.get('success') === '1') {
      const pendingOrder = localStorage.getItem('pendingOrder');
      if (pendingOrder) {
        const order = JSON.parse(pendingOrder);
        fetch('/api/orders', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(order),
        }).then(() => {
          localStorage.removeItem('pendingOrder');
          dispatch(clearCart());
          toast.success('Order placed successfully');
          fetchOrders(); // Refetch orders
        }).catch(err => {
          console.error('Failed to save Stripe order:', err);
          toast.error('Failed to save order');
        });
      }
    }
  }, [searchParams]);

  return (
    <div className="px-6 py-10">
      <h1 className="text-2xl font-semibold mb-2">My Orders</h1>
      <p className="text-sm text-slate-500 mb-8">
        Showing total {orders.length} orders{' '}
        <a href="/" className="text-green-600 ml-2">
          Go to home →
        </a>
      </p>

      <div className="space-y-6">
        {orders.map(order => (
          <OrderItem key={order._id} order={order} />
        ))}
      </div>
    </div>
  );
}
