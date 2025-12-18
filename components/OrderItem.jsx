'use client'

import Image from "next/image";
import { DotIcon } from "lucide-react";

const OrderItem = ({ order }) => {
  const currency = process.env.NEXT_PUBLIC_CURRENCY_SYMBOL || "$";

  return (
    <>
      {/* Desktop */}
      <tr className="text-sm">
        <td className="text-left">
          <div className="flex flex-col gap-6">
            {order.items?.map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-20 aspect-square bg-slate-100 flex items-center justify-center rounded-md">
                  {item.images?.[0] && (
                    <Image
                      className="h-14 w-auto"
                      src={item.images[0]}
                      alt="product_img"
                      width={50}
                      height={50}
                    />
                  )}
                </div>

                <div className="flex flex-col justify-center text-sm">
                  <p className="font-medium text-slate-600 text-base">
                    {item.name}
                  </p>
                  <p>
                    {currency}
                    {item.price} × {item.quantity}
                  </p>
                  <p className="mb-1">
                    {new Date(order.createdAt).toDateString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </td>

        <td className="text-center max-md:hidden">
          {currency}
          {order.total}
        </td>

        <td className="text-left max-md:hidden">
          <p>
            {order.address.name}, {order.address.street}
          </p>
          <p>
            {order.address.city}, {order.address.state},{" "}
            {order.address.zip}, {order.address.country}
          </p>
          <p>{order.address.phone}</p>
        </td>

        <td className="text-left max-md:hidden">
          <div className="flex items-center justify-center gap-1 rounded-full p-1 bg-slate-100 text-slate-600">
            <DotIcon size={10} className="scale-150" />
            {order.status.toLowerCase()}
          </div>
        </td>
      </tr>

      {/* Mobile */}
      <tr className="md:hidden">
        <td colSpan={5}>
          <p>
            {order.address.name}, {order.address.street}
          </p>
          <p>
            {order.address.city}, {order.address.state}, {order.address.zip}
          </p>
          <p>{order.address.phone}</p>

          <div className="flex justify-center mt-2">
            <span className="px-6 py-1.5 rounded bg-green-100 text-green-700">
              {order.status.toLowerCase()}
            </span>
          </div>
        </td>
      </tr>

      <tr>
        <td colSpan={4}>
          <div className="border-b border-slate-300 w-6/7 mx-auto" />
        </td>
      </tr>
    </>
  );
};

export default OrderItem;
