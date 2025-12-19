'use client';

import { XIcon } from "lucide-react";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { addAddress } from "@/lib/features/address/addressSlice";
import { useUser } from "@clerk/nextjs";

const AddressModal = ({ setShowAddressModal }) => {
  const dispatch = useDispatch();
  const { user } = useUser();

  const [address, setAddress] = useState({
    name: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    phone: "",
  });

  const handleChange = e =>
    setAddress({ ...address, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();

    const res = await fetch("/api/address", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...address,
        userId: user?.id || null,
      }),
    });

    if (!res.ok) throw new Error("Failed");

    const saved = await res.json();
    dispatch(addAddress(saved));
    setShowAddressModal(false);
  };

  return (
    <form
      onSubmit={e =>
        toast.promise(handleSubmit(e), {
          loading: "Saving address...",
          success: "Address saved",
          error: "Failed to save",
        })
      }
      className="fixed inset-0 z-50 bg-white/60 backdrop-blur flex items-center justify-center"
    >
      <div className="w-full max-w-sm bg-white p-6 rounded space-y-3">
        {Object.keys(address).map(key => (
          <input
            key={key}
            name={key}
            value={address[key]}
            onChange={handleChange}
            placeholder={key}
            className="w-full border p-2 rounded"
            required
          />
        ))}
        <button className="w-full bg-slate-800 text-white py-2 rounded">
          Save Address
        </button>
      </div>

      <XIcon
        className="absolute top-5 right-5 cursor-pointer"
        onClick={() => setShowAddressModal(false)}
      />
    </form>
  );
};

export default AddressModal;
