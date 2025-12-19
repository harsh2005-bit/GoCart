'use client';

const categories = [
  'Headphones',
  'Speakers',
  'Watch',
  'Earbuds',
  'Mouse',
  'Decoration',
];

export default function Categories() {
  return (
    <div className="w-full py-6 flex flex-wrap gap-3 justify-center">
      {categories.map((cat, i) => (
        <button
          key={i}
          className="px-4 py-2 rounded-lg bg-slate-100 text-slate-600 text-sm hover:bg-slate-200 transition"
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
