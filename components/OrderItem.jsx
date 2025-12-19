// components/OrderItem.jsx
export default function OrderItem({ order }) {
  const item = order.items[0];

  return (
    <div className="flex justify-between items-center border-b pb-6">
      <div className="flex gap-4">
        <img
          src={item.images?.[0]?.src || item.images?.[0] || item.image || ''}
          alt={item.name}
          className="w-20 h-20 object-cover rounded"
        />

        <div>
          <p className="font-medium">{item.name}</p>
          <p className="text-sm text-gray-500">
            ${item.price} × {item.quantity}
          </p>
          <p className="text-xs text-gray-400">
            {new Date(order.createdAt).toDateString()}
          </p>
        </div>
      </div>

      <div className="text-right">
        <p className="font-medium">${order.total}</p>
        <span className="text-xs px-3 py-1 bg-gray-100 rounded-full">
          placed
        </span>
      </div>
    </div>
  );
}
