import ProductPage from "@/components/Temporary/ProductPage";

interface PageProps {
    params: {
        slug: string;
    };
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
    return [
        { slug: 'product1' },
        { slug: 'product2' },
        { slug: 'product3' },
    ];
}


export default function ProductPageWrapper({ params }: PageProps) {
    return <ProductPage slug={params.slug} />;
}
