import HeroSection from "@/components/HeroSection";
import Courses from "@/components/Description";
import Crosuel from '../components/Crousel';
import AdvancedCourses from "../components/AdvancedCourses";
import Core from '../components/CoreCourse';
export default function Home() {
  return (
    <div>
      <HeroSection/>
      <Courses/>
      <Crosuel/>
      <AdvancedCourses/>
      <Core/>
    </div>
  );
}
