'use client';

import { XIcon } from "lucide-react";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { addAddress } from "@/lib/features/address/addressSlice";

const AddressModal = ({ setShowAddressModal }) => {
  const dispatch = useDispatch();

  const [address, setAddress] = useState({
    fullName: "",
    phone: "",
    addressLine: "",
    city: "",
    state: "",
    pincode: "",
    country: "",
  });

  const handleChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/address", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(address),
    });

    if (!res.ok) throw new Error("Save failed");

    const data = await res.json();
    dispatch(addAddress(data.address));
    setShowAddressModal(false);
  };

  return (
    <form
      onSubmit={(e) =>
        toast.promise(handleSubmit(e), {
          loading: "Saving address...",
          success: "Address saved successfully ✅",
          error: "Failed to save address",
        })
      }
      className="fixed inset-0 z-50 bg-black/40 backdrop-blur flex items-center justify-center"
    >
      <div className="bg-white p-6 rounded-lg w-full max-w-sm space-y-3">
        <h2 className="text-xl font-semibold">Add Address</h2>

        <input name="fullName" placeholder="Full Name" onChange={handleChange} required className="border p-2 w-full rounded" />
        <input name="phone" placeholder="Phone" onChange={handleChange} required className="border p-2 w-full rounded" />
        <input name="addressLine" placeholder="Address Line" onChange={handleChange} required className="border p-2 w-full rounded" />
        <input name="city" placeholder="City" onChange={handleChange} required className="border p-2 w-full rounded" />
        <input name="state" placeholder="State" onChange={handleChange} className="border p-2 w-full rounded" />
        <input name="pincode" placeholder="Pincode" onChange={handleChange} className="border p-2 w-full rounded" />
        <input name="country" placeholder="Country" onChange={handleChange} className="border p-2 w-full rounded" />

        <button className="w-full bg-slate-800 text-white py-2 rounded">
          Save Address
        </button>
      </div>

      <XIcon
        size={28}
        className="absolute top-5 right-5 text-white cursor-pointer"
        onClick={() => setShowAddressModal(false)}
      />
    </form>
  );
};

export default AddressModal;
