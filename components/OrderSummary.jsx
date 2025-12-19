'use client';

import { PlusIcon, SquarePenIcon, XIcon } from 'lucide-react';
import React, { useState } from 'react';
import AddressModal from './AddressModal';
import { useSelector, useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { clearCart } from '@/lib/features/cart/cartSlice';

const OrderSummary = ({ totalPrice, items }) => {
  const currency = process.env.NEXT_PUBLIC_CURRENCY_SYMBOL || '$';
  const router = useRouter();
  const dispatch = useDispatch();

  const addressList = useSelector(state => state.address.list || []);

  const [paymentMethod, setPaymentMethod] = useState('COD');
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [showAddressModal, setShowAddressModal] = useState(false);
  const [couponCodeInput, setCouponCodeInput] = useState('');
  const [coupon, setCoupon] = useState('');

  const handleCouponCode = async (e) => {
    e.preventDefault();
  };

  /* =========================
     PLACE ORDER (FIXED)
  ========================== */
  const handlePlaceOrder = async (e) => {
    e.preventDefault();

    if (!selectedAddress) {
      toast.error('Please select an address');
      return;
    }

    try {
      /* ---------- STRIPE FLOW ---------- */
      if (paymentMethod === 'STRIPE') {
        if (totalPrice < 0.50) {
          toast.error('Minimum order amount for Stripe is $0.50');
          return;
        }
        const res = await fetch('/api/create-checkout-session', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            items: items.map(item => ({
              name: item.name,
              price: Number(item.price),
              quantity: item.quantity || 1,
              image: item.images?.[0]?.src ? `${window.location.origin}${item.images[0].src}` : item.images?.[0] || '',
            })),
            successUrl: `${window.location.origin}/orders?success=1`,
            cancelUrl: `${window.location.origin}/cart`,
          }),
        });

        // 🚨 Important: Stripe route must return JSON
        const text = await res.text();

        let data;
        try {
          data = JSON.parse(text);
        } catch {
          console.error('Non-JSON response:', text);
          throw new Error('Stripe API returned invalid response');
        }

        if (!res.ok || !data.url) {
          console.error('Stripe error:', data);
          throw new Error(data.error || 'Stripe session creation failed');
        }

        // Store order data for saving after successful payment
        localStorage.setItem('pendingOrder', JSON.stringify({
          items,
          total: totalPrice,
          address: selectedAddress,
          paymentMethod: 'STRIPE'
        }));

        window.location.href = data.url;
        return;
      }

      /* ---------- COD FLOW ---------- */
      const res = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items,
          total: totalPrice,
          address: selectedAddress,
          paymentMethod: 'COD',
        }),
      });

      if (!res.ok) throw new Error('COD order failed');

      toast.success('Order placed successfully');
      dispatch(clearCart());
      router.push('/orders');

    } catch (err) {
      console.error(err);
      toast.error(err.message || 'Order failed');
    }
  };

  return (
    <div className='w-full max-w-lg lg:max-w-[340px] bg-slate-50/30 border border-slate-200 text-slate-500 text-sm rounded-xl p-7'>
      <h2 className='text-xl font-medium text-slate-600'>Payment Summary</h2>

      <p className='text-slate-400 text-xs my-4'>Payment Method</p>

      <div className='flex gap-2 items-center'>
        <input
          type='radio'
          id='COD'
          checked={paymentMethod === 'COD'}
          onChange={() => setPaymentMethod('COD')}
          className='accent-gray-500'
        />
        <label htmlFor='COD'>COD</label>
      </div>

      <div className='flex gap-2 items-center mt-1'>
        <input
          type='radio'
          id='STRIPE'
          checked={paymentMethod === 'STRIPE'}
          onChange={() => setPaymentMethod('STRIPE')}
          className='accent-gray-500'
        />
        <label htmlFor='STRIPE'>Stripe Payment</label>
      </div>

      {/* ADDRESS */}
      <div className='my-4 py-4 border-y border-slate-200 text-slate-400'>
        <p>Address</p>

        {selectedAddress ? (
          <div className='flex gap-2 items-center'>
            <p>
              {selectedAddress.name}, {selectedAddress.city},{' '}
              {selectedAddress.state}, {selectedAddress.zip}
            </p>
            <SquarePenIcon
              size={18}
              className='cursor-pointer'
              onClick={() => setSelectedAddress(null)}
            />
          </div>
        ) : (
          <div>
            {addressList.length > 0 && (
              <select
                className='border border-slate-400 p-2 w-full my-3 rounded'
                onChange={(e) =>
                  setSelectedAddress(addressList[e.target.value])
                }
              >
                <option value=''>Select Address</option>
                {addressList.map((a, i) => (
                  <option key={i} value={i}>
                    {a.name}, {a.city}, {a.state}, {a.zip}
                  </option>
                ))}
              </select>
            )}

            <button
              className='flex items-center gap-1 text-slate-600 mt-1'
              onClick={() => setShowAddressModal(true)}
            >
              Add Address <PlusIcon size={18} />
            </button>
          </div>
        )}
      </div>

      {/* TOTAL */}
      <div className='flex justify-between py-4'>
        <p>Total:</p>
        <p className='font-medium'>
          {currency}
          {coupon
            ? (totalPrice - (coupon.discount / 100) * totalPrice).toFixed(2)
            : totalPrice.toLocaleString()}
        </p>
      </div>

      <button
        onClick={(e) =>
          toast.promise(handlePlaceOrder(e), {
            loading: 'Placing order...',
          })
        }
        className='w-full bg-slate-700 text-white py-2.5 rounded hover:bg-slate-900'
      >
        Place Order
      </button>

      {showAddressModal && (
        <AddressModal setShowAddressModal={setShowAddressModal} />
      )}
    </div>
  );
};

export default OrderSummary;
