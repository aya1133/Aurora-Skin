import Stripe from "stripe";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "./card";
import Image from "next/image";
import { Button } from "./button";

interface props{
    product:Stripe.Product;
}


export const ProductCard = ({ product }:props) => {
     const price = product.default_price as Stripe.Price | null;
return(
    <Link href={`/products/${product.id}`}
    className="block h-full" >
        <Card className="group hover:shadow-2xl transition duration-300 py-0 h-full w-80 flex flex-col border-gray-300 gap-0 !lg:w-150">
           
           
           
            {product.images && product.images[0] && (
   
            <div className="relative h-55  lg:h-70 lg:w-full !sm:w-50">
                          
                            <Image
                              src={product.images[0]}
                              alt={product.name}
                              layout="fill"
                              objectFit="cover"
                              className="group-hover:opacity-90 transition-opacity duration-300 rounded-t-lg"
                            />
                            </div>
            )}
            <CardHeader className="p-0">
                <CardTitle  className="text-lg font-bold text-[#C14C87] !mt-3 !ml-3">{product.name}</CardTitle>
                </CardHeader>
                <CardContent  className="p-0 flex-grow flex flex-col !justify-between" > 
                    {price && price.unit_amount && (price?.unit_amount && (
                    <span className="text-pink-800 text-base font-semibold mb-3 !mt-3 !ml-3 ">
                      ${(price.unit_amount / 100).toFixed(2)}
                    </span>)
                )}
                <Button className=" !mb-5 !mt-2  rounded-full !px-4 !py-2 bg-[#FCDDEC] hover:bg-[#ffd3e9] text-[#A91B60] w-60 text-sm font-medium !ml-10 !sm:ml-40">View detalis</Button>
                </CardContent>
            
                        </Card>
    </Link>
);
}