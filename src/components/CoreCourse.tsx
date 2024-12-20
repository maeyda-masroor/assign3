import Image from "next/image";
import Link from "next/link";
type Category = {
    id: number;
    title: string;
    image:string;
    desc:string;
  };
  const courses: Category[] = [
      { id:1 ,title:'Programming Fundamental', image: "https://res.cloudinary.com/di1kessdw/image/upload/v1734594772/gov_sindh/coreCourses/c3_ayeqry.jpg" , desc:'We will start the program by learning the fundamentals of Object-Oriented programming using JavaScript and TypeScript. We will also understand the latest Web trends i.e. Web 3.0 and Metaverse concepts and try to understand their working from the perspective of the users.'},
      { id:2 ,title:'Web2 using Nextjs', image: "https://res.cloudinary.com/di1kessdw/image/upload/v1734594772/gov_sindh/coreCourses/c2_rsc9e3.jpg" , desc:'The objective of this course is to teach participants to develop customer-facing planet-scale Websites, Full-Stack Apps and templates, Dashboards, and Muti-Cloud Serverless APIs. By the end of the quarter, the participants will be able to develop and deploy web platforms like Facebook, Shopify, etc. The technologies covered in this course will include Next.js 13, Figma, Tailwind CSS, Chakra UI, tRPC, QraphQL, Prisma, Cockroachdb Serverless (PostgreSQL Compatible), AWS Serverless Technologies, and Cloud Development Kit for Terraform (CDKTF).'},
      { id:3 ,title:'Earn As you learn', image: "https://res.cloudinary.com/di1kessdw/image/upload/v1734594772/gov_sindh/coreCourses/c1_flhr7k.jpg" , desc:'The purpose of this course is to make dollars. You will build Full-Stack Next.js 13 Jamstack Templates and GraphQL APIs.      '},
];

export default function AdvancedCourses(){
    return  <section className="bg-white py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left lg:text-center">
        <h1 className="text-4xl text-black "> Core Course
        </h1>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 items-center lg:pl-56 lg:pr-56">
        {courses.map((c) => (
            <div key={c.id}  className="shadow-lg w-[300px] h-[250px] items-center p-10">
              <div className="">
                <Image src={c.image} alt="c" width={200} height={200}/>
                <Link href={`courses/${c.id}`}><h1 className="font-extrabold text-black">{c.title}</h1></Link>
            </div>
            </div>
        ))}
        </div>
    </section>
}
