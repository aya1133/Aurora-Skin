import Image from "next/image";
import { stripe } from "@/lib/Stripe";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Carousel } from "@/components/carousel";


export default async function Home() {
  const Products = await stripe.products.list({
    expand: ["data.default_price"],
    limit: 5,
  });
  console.log(Products);
  return (
    <div>
      <section className="rounded bg-[#FFF6F9] py-8 sm:py-12">
           <div className="mx-au to grid grid-cols-1 items-center justify-items-center gap-8 px-8 sm:px-16 md:grid-cols-2">
           <div className="max-w-md space-y-4" >
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl !text-[#C14C87]">welcome to Aurora Skin</h2>
            <p className="!text-[#4B4B4B] !mt-8">welcome to Aurora skin ..Where Myth meets radiance</p>
            <Button asChild variant="default"
             className="inline-flex items-center justify-center rounded-full !px-8 !py-4 bg-[#FCDDEC] hover:bg-[#ffd3e9] !text-[#A91B60] md:text-lg font-medium !mt-6"
             >
              <Link href="/products"
              className="inline-flex items-center justify-center rounded-full px-6 py-3 "
              > See Our Products</Link>
            </Button>
          </div>
          <Image  alt="product1 image"
           width={450}
           height={450}
           src={Products.data[3].images[0]}/>
        </div>
      </section>
      <section className="py-8">
        <Carousel products={Products.data}/>
      </section>
      </div> 
  );
}
