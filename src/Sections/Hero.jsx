import { AiOutlineCloudDownload } from "react-icons/ai";
import myPhoto from "../assets/Mahajabin_Tokon.jpeg";
import Button from "../Components/Button";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

export default function Hero() {
  return (
    <>
      {/*<!-- Component: Three columns even layout --> */}
      <section>
        <div className="container px-6 md:px-0 m-auto">
          <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
            {/* My Photo */}
            <div className="col-span-4">
              <figure>
                <img
                  src={myPhoto}
                  alt="My Photo"
                  className="rounded-full w-96 h-96 object-cover"
                />
              </figure>
            </div>
            {/* Description */}
            <div className="col-span-4 flex flex-col justify-between md:pl-8 py-16">
              <header className="mb-4">
                <h3 className="text-3xl font-medium text-slate-700">
                  Mahajabin Tokon, a Front End Developer
                </h3>
                <p className="text-lg text-slate-400"> Edmonton, AB</p>
              </header>
              <p className="text-sm">
                I am a Computer Science graduate from the University of Alberta,
                with a strong passion for front-end web development and a solid
                foundation in React. Below, you can explore some of my projects
                that showcase my skills and dedication to creating responsive
                and dynamic user experiences.
              </p>
            </div>
            <div className="col-span-4 flex flex-col justify-center items-center gap-5">
              <Button
                icon={<AiOutlineCloudDownload size={22} />}
                text={"Resume"}
              ></Button>
              <Button icon={<FaGithub size={22} />} text={"GitHub"}></Button>
              <Button
                icon={<FaLinkedin size={22} />}
                text={"LinkedIn"}
              ></Button>
              <Button
                icon={<MdOutlineEmail size={22} />}
                text={"Email"}
              ></Button>
            </div>
          </div>
        </div>
      </section>
      {/*<!-- End Three columns even layout --> */}
    </>
  );
}
