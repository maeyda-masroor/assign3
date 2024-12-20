"use client"; // Next.js 14 client component
import Image from "next/image";
import i1 from '../public/cover.png'
export default function HeroSection() {
  return (
    <section className="bg-blue-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Column (Image or Content) */}
          
          {/* Right Column (Text Content) */}
          <div className="text-center lg:text-left">
            <h1 className="text-6xl  text-blue mb-4 font-extrabold">
            Governor Sindh
            </h1>
            <h1 className="text-4xl text-blue font-medium">
            Kamran Khan Tessori
            </h1>
            <h1 className="text-4xl text-black">
            Certified Cloud
            Applied Generative AI
            Engineer (GenEng)
            </h1>
            <h3 className="font-2xl text-black">
            Earn up to $5,000 / month
            <br/>
            Now admissions are open in Hyderabad
            </h3>
            <div className="flex gap-7">
            <button className="bg-blue text-white px-6 py-3 rounded-lg hover:bg-blue-700">
              Apply Now
            </button>
            <div className="">
            <h1 className="text-blue font-extrabold"> 562,143</h1>
            <h1 className="text-blue font-medium"> Accepted Application</h1>
            </div>
            </div>
          </div>
          <div className="flex justify-center">
            <Image src={i1} alt="iamge"/>
          </div>

        </div>
      </div>
    </section>
  );
}