import SmallTextBanner from "@/components/Banner/SmallTextBanner";
import FeaturedProduct from "@/components/Featured_Product/FeaturedProduct";
import HightLightCollection from "@/components/Highlight_Collection/HightLightCollection";
import CategorySlider from "@/components/Product_Category/CategorySlider";
import Slider from "@/components/Slider/Slider";
import Image from 'next/image'
export default function Home() {

  return (
    <div className="bg-slate-100">
      <Slider />

      <div className="relative mt-16 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-3xl mb-4 font-semibold text-center">Featured Products</h1>
        <div className="relative asp w-full h-96">
          <Image
            src="https://cdn.pixabay.com/photo/2024/05/08/10/05/women-8747913_1280.jpg"
            alt=""
            fill
            sizes="1000vw"
            className="absolute object-cover rounded-md"
          />
        </div>

        {/* Move FeaturedProduct slightly up */}
        <div className="-mt-10 relative">
          <FeaturedProduct />
        </div>
      </div>
      <div className="mt-16 px-4 ">
        <h1 className="text-3xl mb-4 font-semibold text-center">Categories</h1>
        <CategorySlider />
      </div>

      <div className="mt-20 px-4">
        <HightLightCollection/>
      </div>

      <div className="mt-20">
        <SmallTextBanner/>
      </div>


    </div>

  );
}
