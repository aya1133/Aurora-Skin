"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function CheckoutInfoPage(){
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const router = useRouter();
    
    const handleSubmit = () => {
        if(!name || !phone || !address){
            alert("please fill all fields");
            return;
        }
        
        localStorage.setItem("customerInfo",JSON.stringify({name,phone,address}));
        router.push("/Checkout");

        router.push("/checkout-confirm")
    };
    return(
        

        <div className=" min-h-screen  flex flex-col items-center justify-center px-4 py-8 bg-[#FFF8F9]">
           <Card className="w-90  max-w-md h-100 shadow-lg border border-pink-200">
            <CardHeader>
                <CardTitle className="text-2xl font-bold !mb-3 text-center !mt-10 text-[#A91B60]"> your informaiton
                </CardTitle>
            </CardHeader >
             <CardContent className="!space-y-4 !px-4">
           
                <input  
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)} 
                className="bg-white border border-pink-300 focus:ring-pink-400 !w-full !mb-5 !p-1 rounded-full " required/>
                
                <input placeholder="Your Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="bg-white border border-pink-300 focus:ring-pink-400  w-full !mb-5 !p-1 rounded-full" required/>
                
                <input placeholder="Your Addres" 
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className=" bg-white border border-pink-300  focus:ring-pink-400 w-full !mb-5 !p-1 rounded-full" required/>
                
                <button type="submit"  
                className="bg-pink-500 text-white px-4 !py-3 rounded-full w-50  !ml-15 !mt-10"
                onClick={handleSubmit}
                >Continue To  Checkout</button>
            
            </CardContent>
            </Card>
        </div>

    );
}