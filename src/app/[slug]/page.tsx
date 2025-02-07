'use client'
import ProductDescription from '@/components/Product_Description/ProductDescrtiption';
import SelectQuantity from '@/components/Product_Description/SelectQuantity';
import SelectSize from '@/components/Product_Description/SelectSize';
import ProductImages from '@/components/Product_Images/ProductImges';
import { useParams } from 'next/navigation';

// Function to generate static params
export async function generateStaticParams() {
    // Replace this with your actual data fetching logic or static slugs
    const products = [
        { slug: 'product1' },
        { slug: 'product2' },
        { slug: 'product3' },
    ];

    return products.map((product) => ({
        slug: product.slug,
    }));
}

const ProductPage = () => {
    const params = useParams();
    const { slug } = params;
    if (!slug) {
        return <div>Loading...</div>;
    }
    return (
        <div className='px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col md:flex-row gap-6 md:gap-10'>
            {/* Image */}

            <div className=" w-full md:w-1/2 md:static top-20 h-max">
                <ProductImages />
            </div>

            {/* Text */}
            <div className='w-full md:w-1/2 flex flex-col gap-6'>
                <h1 className='font-base text-lg md:text-xl lg:text-2xl'>Fabrilife Mens Premium Designer Edition T-Shirt </h1>

                <div className='flex gap-2 items-center'>
                    <h3 className='font-semibold text-gray-500 text-md md:text-lg lg:text-xl line-through  '>$1500</h3>
                    <h3 className='font-semibold text-lg md:text-xl lg:text-2xl '>$1000</h3>
                </div>
                <SelectSize />
                <SelectQuantity />
                <div className='py-[0.5px] bg-gray-500' />
                <ProductDescription />
            </div>
        </div>
    );
}

export default ProductPage
