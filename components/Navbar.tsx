"use client";


import { useCartStore } from "@/store/cart-store";
import { ShoppingCartIcon, Bars3Icon, XMarkIcon} from "@heroicons/react/24/outline";
import Link from "next/link";  
import { useEffect, useState } from "react";
import { Button } from "./ui/button";



export const Navbar = () => {
  const [mobileOpen,setMobileOpen] = useState<boolean>(false);
  const {items} = useCartStore();
  const cartCount = items.reduce((acc,item) => acc + item.quantity, 0);

  useEffect(() => {
  const handleResize = () => {
    if( window.innerWidth >= 768){
       setMobileOpen(false);
    }
  };
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
  }, []);
    return (<nav className="sticky top-0 z-50 bg-white shadow" >
     <div className="container !text-[#C14C87] mx-auto flex items-center justify-between !px-6 !py-4">
      <Link href="/" className="hover:text-blue-600 ">
      Aurora skin
      </Link>
    
     <div className="hidden md:flex gap-8 space-x-6">
        <Link href="/">Home</Link>
        <Link href="/products" className="hover:text-blue-600 mr-20px" >Products</Link>
        <Link href="/Checkout" className="hover:text-blue-600">Checkout</Link>
     </div>
     <div className="flex items-center space-x-4">
      <Link href="/Checkout" className="relative" >
      <ShoppingCartIcon  className="h-6 w-6 !mr-10"/>
      {cartCount > 0 && <span className="absolute -top-2 -right-3.2 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs text-white"
      >{cartCount}</span>}
      </Link>
      <Button variant="ghost"
      className="md:hidden"
      onClick={() => setMobileOpen((prev) => !prev)}>
        { mobileOpen ? <XMarkIcon className="h-6 w-6"/> : <Bars3Icon  className="h-6 w-6 "/>}
        </Button>
     </div>
      </div>
      {mobileOpen && (
        <nav className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col p-4 space-y-2 !text-[#C14C87]">
            <li>
              <Link href="/"  className="block hover:text-blue-600"> Home</Link>
            </li>
            <li>
              <Link href="/products"  className="block hover:text-blue-600"> Products</Link>
            </li>
            <li>
              <Link href="/Checkout"  className="block hover:text-blue-600"> Checkout</Link>
            </li>
          </ul>
        </nav>
      )}
    </nav>
    );
};