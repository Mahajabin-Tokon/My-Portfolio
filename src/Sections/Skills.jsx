import { AiOutlineHtml5 } from "react-icons/ai";
import Skill from "../Components/Skill";
import { FaCss3Alt, FaNode, FaPhp, FaPython, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { SiExpress, SiJquery, SiMongodb, SiMysql } from "react-icons/si";

export default function Skills() {
  return (
    <>
      {/*<!-- Component: Four and Eight uneven columns layout --> */}
      <section>
        <div className="container px-6 m-auto">
          <h2 className="text-3xl text-center my-10">Skills</h2>
          {/* Confident */}
          <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12 mb-10 border border-gray-300 shadow-lg p-6 bg-white rounded-lg">
            <div className="col-span-4">Confident</div>
            <div className="col-span-4 lg:col-span-8">
              <div className="flex flex-wrap gap-5 grow">
                <Skill icon={<AiOutlineHtml5 size={22} />} text="HTML"></Skill>
                <Skill icon={<FaCss3Alt size={22} />} text="CSS"></Skill>
                <Skill
                  icon={<RiTailwindCssFill size={22} />}
                  text="Tailwind"
                ></Skill>
                <Skill
                  icon={<IoLogoJavascript size={22} />}
                  text="JavaScript"
                ></Skill>
                <Skill icon={<FaReact size={22} />} text="React"></Skill>
                <Skill icon={<FaPython size={22} />} text="Python"></Skill>
              </div>
            </div>
          </div>
          {/* Comfortable */}
          <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12 mb-10 border border-gray-300 shadow-lg p-6 bg-white rounded-lg">
            <div className="col-span-4">Comfortable</div>
            <div className="col-span-4 lg:col-span-8">
              <div className="flex flex-wrap gap-5 grow">
                <Skill icon={<FaNode />} text="Node"></Skill>
                <Skill icon={<SiExpress />} text="Express"></Skill>
                <Skill icon={<SiMongodb />} text="MongoDB"></Skill>
              </div>
            </div>
          </div>
          {/* Familiar */}
          <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12 mb-10 border border-gray-300 shadow-lg p-6 bg-white rounded-lg">
            <div className="col-span-4">Familiar</div>
            <div className="col-span-4 lg:col-span-8">
              <div className="flex flex-wrap gap-5 grow">
                <Skill icon={<SiMysql />} text="MySQL"></Skill>
                <Skill icon={<FaPhp />} text="PHP"></Skill>
                <Skill icon={<SiJquery />} text="jQuery"></Skill>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*<!-- End Four and Eight uneven columns layout --> */}
    </>
  );
}
