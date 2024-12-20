"use client"
import Link from "next/link";
import MultiStep from 'react-multistep';
const steps = [
    { name: "Facebook", component: <div>Facebook</div> },
    { name: "Instagram", component: <div>Instagram</div> },
    { name: "Linkedin", component: <div>linkedin</div> },
    { name: "Twitter", component: <div>Twitter</div> },
    { name: "Apply", component: <div>Apply</div> },
];

export default function CenteredDiv() {
    return (
      <div>
      <div className="flex items-center justify-center mt-11 mb-11 text-black">
        {/* Main Container */}
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md text-center">
          {/* Heading */}
          <h1 className="text-2xl font-bold mb-4">Before continuing to the application please subscribe on these social media platforms.</h1>
          {/* Button */}
          <button className="bg-blue text-white py-2 px-4 rounded-full hover:bg-blue mb-4">
            F
          </button>
          {/* Link */}
          <br/>
          <button className="bg-black text-white py-2 px-4 rounded-full hover:bg-blue mb-4">
            Continue
          </button>
          
          <p>Already Applied<Link
            href="/admitcard"
            className="text-blue-500 hover:underline"
          >
            Get Admit card
            
          </Link></p>
        </div>
        </div>
        <div className="flex items-center justify-center mt-10 mb-10 text-black">
        <MultiStep steps={steps} />
        </div>
        </div>
    );
  }
  