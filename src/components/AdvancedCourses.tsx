import Image from "next/image";
type Category = {
    id: number;
    title: string;
    image:string;
    desc:string;
  };
  const courses: Category[] = [
      { id:1 ,title:'Category title 1', image: "https://res.cloudinary.com/di1kessdw/image/upload/v1734594786/gov_sindh/advancedcourse/a6_q274he.jpg" , desc:''},
      { id:2 ,title:'Category title 1', image: "https://res.cloudinary.com/di1kessdw/image/upload/v1734594785/gov_sindh/advancedcourse/a4_t2uhvg.jpg" , desc:''},
      { id:3 ,title:'Category title 1', image: "https://res.cloudinary.com/di1kessdw/image/upload/v1734594785/gov_sindh/advancedcourse/a5_ds9mea.jpg" , desc:''},
      { id:4 ,title:'Category title 1', image: "https://res.cloudinary.com/di1kessdw/image/upload/v1734594785/gov_sindh/advancedcourse/a3_wwo0tx.jpg" , desc:''},
      { id:5 ,title:'Category title 1', image: "https://res.cloudinary.com/di1kessdw/image/upload/v1734594785/gov_sindh/advancedcourse/a2_b6da15.jpg" , desc:''},
      { id:6 ,title:'Category title 1', image: "https://res.cloudinary.com/di1kessdw/image/upload/v1734594784/gov_sindh/advancedcourse/a1_oqnmbs.jpg" , desc:''},
   
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
