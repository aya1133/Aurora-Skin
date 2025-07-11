import { stripe } from "@/lib/Stripe";
import { ProductDetail } from "@/components/ui/ProductDetail";


export default async function ProductPage({
    params,
}:{
        params: Promise<{ id :string }>;
    }) {
    const { id } = await params;
    const product = await stripe.products.retrieve(id, {
        expand: ["default_price"],
    });

    const plainProduct = JSON.parse(JSON.stringify(product));
    return <ProductDetail product={plainProduct} />;
}