import Image from "next/image";
type Category = {
    id: number;
    title: string;
    image:string;
    desc:string;
  };
  const courses: Category[] = [
      { id:1 ,title:'w3 metawerse', image: "https://res.cloudinary.com/di1kessdw/image/upload/v1734594786/gov_sindh/advancedcourse/a6_q274he.jpg" , desc:''},
      { id:2 ,title:'Artificial intelliegence', image: "https://res.cloudinary.com/di1kessdw/image/upload/v1734594785/gov_sindh/advancedcourse/a4_t2uhvg.jpg" , desc:'This course will focus on learning the basics of the networking and preparing for the new Cisco Certified Network Associate (CCNA) exam. This comprehensive course focuses on the solutions and technologies needed to implement and administer a broad range of modern networking and IT infrastructure.'},
      { id:3 ,title:'cloud native', image: "https://res.cloudinary.com/di1kessdw/image/upload/v1734594785/gov_sindh/advancedcourse/a5_ds9mea.jpg" , desc:'This course will focus on learning the basics of the Python programming language through genomics examples.      '},
      { id:4 ,title:'Ambient it', image: "https://res.cloudinary.com/di1kessdw/image/upload/v1734594785/gov_sindh/advancedcourse/a3_wwo0tx.jpg" , desc:'n this course you will learn how to develop Web 3.0 DApps, create a project, deploy it in production, write smart contracts, unit test them, and create user interfaces for them. We will also learn to develop ERC-20 and NFT tokens, DAOs, Oracles, etc. Please note that in order to develop Web 3 applications you also need to build on top of Web 2.0 technologies which we have already covered in the previous quarters.'},
      { id:5 ,title:'Bioinformat', image: "https://res.cloudinary.com/di1kessdw/image/upload/v1734594785/gov_sindh/advancedcourse/a2_b6da15.jpg" , desc:'rtificial intelligence is the simulation of human intelligence processes by machines, especially computer systems. The AI and Deep Learning Specialization is a foundational program that will aid in your comprehension of deep learnings potential, difficulties, and effects as well as equip you to take part in the creation of cutting-edge AI technology.We will start this course by understanding the fundamentals and use cases for AI and move on to building next-gen intelligent apps using OpenAI’s powerful models and Next.js 13.Well conclude the course by learning about basic programming concepts using Python, such as lists, dictionaries, classes, functions, and loops, and practice writing clean and readable code with exercises for each topic. Well also learn how to make your programs interactive and how to test your code safely before adding it to a project. It is a fast-paced, thorough introduction to programming with Python 3.10+ that will have you writing programs, solving problems, and making things that work in no time. In this quarter we will also learn Git, the distributed version control system. We will also review Git-based GitHub services.'},
      { id:6 ,title:'Networking', image: "https://res.cloudinary.com/di1kessdw/image/upload/v1734594784/gov_sindh/advancedcourse/a1_oqnmbs.jpg" , desc:'Cloud-native architecture and technologies are an approach to designing, constructing, and operating workloads that are built in the cloud and take full advantage of the cloud computing model. Cloud-native technologies empower organizations to build and run scalable applications in modern, dynamic environments such as public, private, and hybrid clouds. Containers, service meshes, microservices, immutable infrastructure, and declarative APIs exemplify this approach.These techniques enable loosely coupled systems that are resilient, manageable, and observable. Combined with robust automation, they allow engineers to make high-impact changes frequently and predictably with minimal toil.Kubernetes is an open-source system for automating the deployment, scaling, and management of containerized applications. In this course, you will learn how to develop cloud applications using cloud-native technologies like Containers, Kubernetes, and CDK for Kubernetes.'},
   
];
export default function AdvancedCourses(){
    return  <section className="bg-white py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left lg:text-center">
        <h1 className="text-4xl text-black "> Advanced Course
        </h1>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 items-center lg:pl-56 lg:pr-56">
        {courses.map((c) => (
            <div key={c.id}>
                <div className="">
                <Image src={c.image} alt="c" width={200} height={200}/>
                <h1 className="font-extrabold text-black">{c.title}</h1>
            </div>
            </div>
        ))}
        </div>
    </section>
}
