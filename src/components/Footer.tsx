export default function Footer(){
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-black lg:pl-56 lg:pr-56 p-4 bg-gray-300">
             <div className="text-center lg:text-left">
             Core Courses
            <ul>
                <li>Programming Fundamentals</li>
                <li>Web2 Using NextJS</li>
                <li>Earn as You Learn
                </li>
            </ul>
            </div>
            <div className="text-center lg:text-left">
             Core Courses
            <ul>
                <li>Web 3 and Metaverse</li>
                <li>Cloud-Native Computing</li>
                <li>Artificial Intelligence (AI) and Deep Learning</li>
                <li>Ambient Computing and IoT</li>
                <li>Genomics and Bioinformatics</li>
                <li>Network Programmability and Automation</li>
              </ul>
            </div>
            <div className="text-center lg:text-left">
             Social links
            <div className="flex gap-3">
               <div className="">F</div>
               <div className="">In</div>
               <div className="">tw</div>
               <div className="">ln</div>
               

            </div>
            </div>
        </div>
        
    )
}