import { stripe } from "@/lib/Stripe"
import { ProductsList } from "@/components/ProductsList";
export default async function ProductsPage(){
   
    const Products = await stripe.products.list({
        expand: ["data.default_price"],
         
    });

        return (<div className="pb-8" >
            <h1 className="text-3xl font-bold leading-none tracking-tight  text-center text-[#C14C87] mb-8 !mt-8 "> All Products </h1>
            <ProductsList products={Products.data} />
        </div>
        );

}