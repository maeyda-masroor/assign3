import Image from "next/image";
import i1 from '../public/i1.jpg';
import i2 from '../public/i2.jpg';
import i3 from '../public/i3.jpg';
export default function Courses(){
    return <section className="bg-white py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl text-black text-center">
        Certified Cloud Applied Generative AI Engineer (GenEng) and Solopreneur Developing Billion-Dollar Valued Developers and Solopreneurs
        </h1> 
        <p className="text-sm text-black text-left">
        The pace of technological change is accelerating, big players like Microsoft, Amazon, Google, and OpenAI are winning by providing infrastructure, large AI foundation models, frameworks, 3D Metaverse experiences, and massive distribution networks. Solopreneurs trained in this program will win by automating work typically outsourced to employees, by directly connecting to customers by eliminating the middleman, and by developing vertical metaverses, thus paving the way for the first billion-dollar valued solopreneur businesses. This program has the objective to train this new breed of billion-dollar solopreneurs. These solopreneurs will adopt the ultra-lean business model and work independently and will not need to hire employees or other team members.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-center">
            <Image src={i1} alt="x" width={300} height={200}/>
            <Image src={i2} alt="x2" width={300} height={200}/>
            <Image src={i3} alt="x3" width={300} height={200}/>
        </div>
    </div>
    </section>

}