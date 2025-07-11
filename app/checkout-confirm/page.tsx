 "use client";
 
import { useCartStore } from "@/store/cart-store";
import { useEffect } from "react";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

import Link from "next/link";

export default function ConfirmPage(){
    const {claerCart} = useCartStore();

    useEffect(() => {
    claerCart();
  }, []);
    return(
<div className="min-h-screen flex flex-col justify-center items-center bg-[#FFF8F9] px-4">
    <CheckCircleIcon className="w-16 h-16 text-green-500 mb-6" />
    <h1  className="text-2xl font-bold text-[#A91B60] !mb-6 text-center">  Thank you for your order!</h1>
    <p className="text-gray-700 !mb-6 text-center max-w-md" >We've received your information and your order is being processed. You'll be contacted shortly by our team.</p>

<Link href="/">
        <button className="bg-[#FCDDEC] hover:bg-[#ffd3e9] text-[#A91B60] font-semibold !px-6 !py-3 rounded-full shadow">
          Continue Shopping
        </button>
      </Link>
</div>
    );
}