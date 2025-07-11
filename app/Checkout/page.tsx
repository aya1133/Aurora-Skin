"use client";

import { useCartStore } from "@/store/cart-store"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import  Link  from "next/link";
import { useRouter } from "next/navigation";

export default function CheckoutPage(){

const {items, removeItem, addItem,claerCart} = useCartStore();
const total = items.reduce((acc,item) => acc + item.price * item.quantity, 0 );
const router = useRouter();
if(items.length === 0){
    return(
        <div className="container mx-auto px-4 py-8 text-center">
            <h1 className="text-2xl font-bold !mt-10 text-[#A91B60] !justify-center">Your Cart is empty</h1>
        </div>
    );
   }
    return (
        <div className="min-h-screen flex items-center justify-center px-2 py-4 bg-[#FFF8F9]">
        <Card className="w-250  max-w-md shadow-lg border border-pink-200 ">
            <CardHeader >
                <CardTitle className="text-xl font-bold text-center text-[#A91B60] !mt-5 ">Your Order</CardTitle>
            </CardHeader>
            <CardContent>
                <ul className="space-y-4">
                    {items.map((item) => (
                        <li key={item.id} className="flex items-center justify-between gap-4 border-b pb-4">
                          {item.image && (

                          
                            <div className="relative w-20 h-20 !m-4 ">
                                <Image
                                 src={item.image}
                                alt={item.name}
                                fill
                                className="object-cover rounded"
                                
                                ></Image>
                                
                            </div>
                          )}
                            <div className="flex-1">
                                <div className="flex justify-between">

                                
                            
                            <span className="font-medium text-[#A91B60] ">{item.name}</span>
                            <span className="font-semibold !mr-5 text-[#A91B60]" >
                        
                      ${((item.price * item.quantity) / 100).toFixed(2)}
                    </span>
                    </div>
                          
                          <div className="flex items-center gap-2 !mt-2">
                  <Button variant="outline"
                  size="sm"
                  className="!px-3 !py-1 rounded-full hover:bg-[#ffd3e9]"
                  onClick={() => removeItem(item.id)}
                  > - </Button>
                  <span className="text-lg font-semibold"> {item.quantity}</span>
                  <Button className="!px-3 !py-0 rounded-full hover:bg-[#ffd3e9]" onClick={() => addItem({ ...item, quantity: 1})} variant="outline" size= "sm"> + </Button>
                </div>
                </div>
                        </li>
                    ))}
                </ul>
                <div className="mt-4 border-t pt-2 text-lg font-semibold text-center text-[#A91B60]">
                    Total: ${(total /100).toFixed(2)}
                </div>
               
                <Button
                onClick={() => router.push("/checkout-info")} type="submit" variant="default" className="!mt-5 !mb-5 inline-flex items-center justify-center rounded-full !px-8 !py-4 bg-[#FCDDEC] hover:bg-[#ffd3e9]  text-[#A91B60] w-50 !ml-30">
          Confirm Order 
        </Button>
        
            </CardContent>
        </Card>
    </div>
    )
}