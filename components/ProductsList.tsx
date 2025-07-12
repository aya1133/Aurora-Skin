"use client"
import Stripe from "stripe";
import { ProductCard } from "./ui/productCard";
import { useState } from "react";


interface props{
    products:Stripe.Product[];
}


export const ProductsList = ({ products }:props) => {
    const[searchTerm, setSearchTerm]= useState<string>("");
    const filteredProduct = products.filter((product)=>{
        const term = searchTerm.toLowerCase();
        const nameMatch = product.name.toLowerCase().includes(term);
        const descriptionMatch = product.description
        ?product.description.toLowerCase().includes(term)
        : false;

        return nameMatch || descriptionMatch;
    })
return(
    <div >
        <div  className="mb-6 flex justify-center">
            <input type="text" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Serach products..."
            className="w-full max-w-md rounded-full border border-gray-300 px-4 py-2 !p-2 focus:outline-none focus:ring-2 focus:ring-pink-500 !mt-10 !mb-10"/>
        </div>
        <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 !ml-10">
           
            {filteredProduct.map((product, key) => {
                return <li key={key}> 
                    <ProductCard product={product}/>
                    </li>
            })}
        </ul>
        </div>
);
}