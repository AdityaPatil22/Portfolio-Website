import Heading from "../../components/heading/Heading";
import { Timeline } from "../../components/ui/timeline";
import Redhat from "../../assets/experience-images/Red_Hat-Logo.wine.svg"
import Rework from "../../assets/experience-images/reworkai_logo.jpeg"
import Infosys from "../../assets/experience-images/infosys-3.svg"
import Zensar from "../../assets/experience-images/zensar-technologies-vector-logo.png"
import "./Experience.css";

function Experience() {
  const data = [
    {
      title: "Associate Software Engineer",
      content: (
        <div>
          <ul className="list-disc list-outside font-normal mb-8 ">
            <li className="mb-2">
              Contributing as a Frontend Engineer to the Digital engineering
              team, driving innovative solutions and enhancing user experiences.
            </li>
            <li>
              Collaborating closely with cross-functional teams to deliver
              seamless, responsive, and visually appealing web applications that
              align with business goals.
            </li>
          </ul>

          <div className="grid grid-cols-3 gap-4 ">
            <img
              src={Redhat}
              alt="startup template"
              className="rounded-lg object-fit h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Frontend Engineer",
      content: (
        <div>
          <ul className="list-disc list-outside font-normal mb-8">
            <li className="mb-2">
              Developing and maintaining full-stack applications as a Full Stack
              Engineer on the MERN team at Rework AI. Leveraged React.js to
              create a responsive Rework web interface, driving a 15% user
              engagement increase.
            </li>
            <li>
              Integrated key features such as pitch feature, JD upload, and bulk
              file upload with Amazon S3, slashing upload times by 30% and
              boosting storage efficiency by 15%
            </li>
          </ul>
          <div className="grid grid-cols-3 gap-4">
            <img
              src={Rework}
              alt="hero template"
              className="rounded-lg object-fit h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Full Stack Developer",
      content: (
        <div>
          <ul className="list-disc list-outside font-normal mb-8">
            <li className="mb-2">
              Worked as a Full Stack Angular Developer on an e-commerce project,
              handling both front-end and back-end development.
            </li>
            <li>
              Implemented various functionalities, including login, sign-up,
              add-to-cart, payment gateway, and order tracking, using
              technologies such as Express.js, MongoDB, Node.js, and the Google
              Maps API.
            </li>
          </ul>
          <div className="grid grid-cols-3 gap-4">
            <img
              src={Infosys}
              alt="hero template"
              className="rounded-lg object-fit h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Student Traniee",
      content: (
        <div>
          <ul className="list-disc list-outside font-normal mb-8">
            <li className="mb-2">
              Gained hands-on experience in Structured Query Language (SQL) and
              Procedural Language extensions to SQL (PL/SQL).
            </li>
            <li>
              Optimized real-time data processing using relational databases.
            </li>
          </ul>
          <div className="grid grid-cols-3 gap-4">
            <img
              src={Zensar}
              alt="startup template"
              className="rounded-lg object-fit h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <>
      <div id="experience">
        <Heading title="Experience" />
      </div>

      <div className="exp-main-container">
        <Timeline data={data} />
      </div>
    </>
  );
}

export default Experience;
