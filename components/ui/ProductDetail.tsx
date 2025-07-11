"use client";

import Stripe from "stripe";
import Image from "next/image";
import { Button } from "./button";
import { useCartStore } from "@/store/cart-store";


interface Props{
    product: Stripe.Product;
}

export const ProductDetail = ({product}: Props) => {
const {items, addItem, removeItem} = useCartStore();
const price =product.default_price as Stripe.Price | null;
const cartItem = items.find((item) => item.id === product.id);
const quantity = cartItem ? cartItem.quantity : 0 ;

const onAddItem = () => {
  addItem({
    id: product.id,
    name: product.name,
    price: price?.unit_amount as number,
    image:product.images ? product.images[0] : null,
    quantity: 1,
  });
};
return (
<div className="container mx-auto px-4 py-8 flex flex-col md:flex-row gap-8 items-center">
{product.images && product.images[0] && (
  
            
            <div className="relative h-80 sm:h-60 w-full  lg:h-80 md:w-1/2 rounded-lg overflow-hidden">
                           
                            <Image
                              src={product.images[0]}
                              alt={product.name}
                              layout="fill"
                              objectFit="cover"
                              className="transition duration-300 hover:opacity-90 !mt-5"
                            />
                            </div>
)}
<div className="md:w-1/2 !pl-4 !space-y-4">
    <h1 className="text-3xl font-bold  !text-[#C14C87] " >{product.name}</h1>
    {product.description && (<p className="text-gray-700 "
    >{product.description}</p>
    )}

    {price && price.unit_amount && (price?.unit_amount && (
                    <span className="text-lg font-semibold !text-[#C14C87]" >
                      ${(price.unit_amount / 100).toFixed(2)}
                    </span>)
                )}
                <div className="flex items-center space-x-4">
                  <Button variant="outline"
                  onClick={() => removeItem(product.id)}
                  className="!px-3 !py-1 rounded-full font-bold hover:bg-[#ffd3e9] !mr-2"> - </Button>
                  <span className="text-lg font-semibold"> {quantity}</span>
                  <Button onClick={onAddItem} variant="outline" className=" !ml-2 !px-3 !py-1 rounded-full font-bold hover:bg-[#ffd3e9]"> + </Button>
                </div>
</div>
</div>
);
};
