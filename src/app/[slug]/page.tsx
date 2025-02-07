import ProductPage from "@/components/Temporary/ProductPage";

interface PageProps {
    params: {
        slug: string;
    };
}

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

export default function ProductPageWrapper({ params }: PageProps) {
    return <ProductPage slug={params.slug} />;
}
