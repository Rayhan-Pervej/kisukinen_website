import ProductPage from "@/components/Temporary/ProductPage";
import React from "react";

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
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
    const [resolvedParams, setResolvedParams] = React.useState<{ slug: string } | null>(null);

    React.useEffect(() => {
        params.then(setResolvedParams);
    }, [params]);

    if (!resolvedParams) {
        return <div>Loading...</div>;
    }

    return <ProductPage slug={resolvedParams.slug} />
}