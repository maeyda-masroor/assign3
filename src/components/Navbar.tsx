// components/Navbar.tsx
import Image from "next/image";
import Logo from '../public/logo.png';
import Link from "next/link";
export default function Navbar() {
    return (
      <nav className="bg-blue p-8 text-black lg:pl-56 lg:pr-56 relative h-12">
        <div className="grid grid-cols-[1fr_2fr_1fr] gap-2 md:gap-8">
          {/* Logo */}
          <div className="relative hidden md:block">
            <Image src={Logo} alt="logo"  className="absolute top-1/2 -translate-y-1/2 h-20 w-20 transform -translate-x-4"/> 
          </div>
          {/* Heading */}
          <div className="text-sm text-white text-left">
          Tuition Free Education Program on Latest Technologies
          </div>
          {/* List */}
          <div className="flex justify-end space-x-4 text-sm text-white">
            <Link href="#home" className="hover:text-blue-500">
              Home
            </Link>;
            <Link href="/Apply" className="hover:text-blue-500">
              Apply
            </Link>
            <a href="#contact" className="hover:text-blue-500">
              Job
            </a>
            <a href="#contact" className="hover:text-blue-500">
              Results
            </a>
            <a href="#contact" className="hover:text-blue-500">
              Courses
            </a>

          </div>
        </div>
      </nav>
    );
  }
  