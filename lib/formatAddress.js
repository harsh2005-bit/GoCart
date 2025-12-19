export function formatAddress(address) {
    if (!address) return "";
  
    const name =
      address.name || address.fullName || "";
  
    const street =
      address.street || address.addressLine || "";
  
    const city = address.city || "";
    const state = address.state || "";
    const country = address.country || "India";
    const zip = address.zip || address.pincode || "";
  
    const full = `${name}, ${street}, ${city}, ${state}, ${zip}, ${country}`;
  
    // Trim + prevent "undefined"
    return full.replace(/undefined/g, "").replace(/,\s*,/g, ",").trim();
  }
  