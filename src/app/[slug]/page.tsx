import ProductPage from "@/components/Temporary/ProductPage";


export async function generateStaticParams() {
    const products = [
        { slug: 'product1' },
        { slug: 'product2' },
        { slug: 'product3' },
    ];

    return products.map((product) => ({
        slug: product.slug,
    }));
}

export default function ProductPageWrapper({ params }: { params: { slug: string } }) {
    return <ProductPage slug={params.slug} />;
}
