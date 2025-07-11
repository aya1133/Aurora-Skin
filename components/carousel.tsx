"use client";

import Stripe from "stripe";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Card, CardContent, CardTitle } from "./ui/card";

interface Props {
  products: Stripe.Product[];
}

export const Carousel = ({ products }: Props) => {
  const [start, setStart] = useState(0);      
  const VISIBLE = 4;                   

  
  useEffect(() => {
    const id = setInterval(
      () => setStart((p) => (p + 1) % products.length),
      5000
    );
    return () => clearInterval(id);
  }, [products.length]);

  
  const visible = Array.from({ length: VISIBLE }, (_, i) =>
    products[(start + i) % products.length]
  );

  return (
    <section className="w-40 lg:w-full py-5 bg-[#FFF8F9]">
      
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex gap-8 !mt-30 !mb-30">
          {visible.map((prod) => {
            const price = prod.default_price as Stripe.Price | null;

            return (
              <Card
                key={prod.id}
                
                className=" aspect-[4/5] flex-shrink-0 w-full sm:w-[100%] md:w-[45%] lg:w-[23%] bg-white rounded-2xl shadow-md border border-pink-100 overflow-hidden"
              >
                
                <div className="relative h-55 sm:h-50 md:h-56 lg:h-75 w-full">
                  {prod.images?.[0] && (
                    <Image
                      src={prod.images[0]}
                      alt={prod.name}
                      fill
                     
                      className="!object-cover "
                    />
                  )}
                </div>

              
                <CardContent className="flex flex-col items-center py-4 space-y-2 ">
                  <CardTitle className="text-center text-pink-800  font-semibold !mb-4 ">
                    {prod.name}
                  </CardTitle>

                  {price?.unit_amount && (
                    <span className="text-pink-800 text-sm px-3 py-1 rounded-full !mb-4">
                      ${(price.unit_amount / 100).toFixed(2)}
                    </span>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
