

import {
    FaNodeJs,
    FaReact,
    FaGithub,
    FaLinkedinIn,
    FaTwitter,
} from "react-icons/fa";
import { SiPostgresql, SiExpress, SiSequelize, SiTailwindcss } from "react-icons/si";



const socials = [

    {
        id: 1,
        icon: <FaLinkedinIn size={'1.25em'} />,
        link: "https://www.linkedin.com/in/jairo-torres-04161a227",
    },
    {
        id: 2,
        icon: <FaGithub size={'1.25em'} />,
        link: "https://github.com/Jt2572",
    },

    {
        id: 3,
        icon: <FaTwitter size={'1.25em'} />,
        link: "https://twitter.com/JairoTorres2572",
    },
]

const techs = [

    {
        id: 1,
        icon: <FaReact size={'2em'} />,
    },
    {
        id: 2,
        icon: <FaNodeJs size={'2em'} />,
    },

    {
        id: 6,
        icon: <SiExpress size={'2em'} />,
    },

    {
        id: 3,
        icon: <SiPostgresql size={'2em'} />,
    },

    {
        id: 4,
        icon: <SiSequelize size={'2em'} />,
    },

    {
        id: 5,
        icon: <SiTailwindcss size={'2em'} />,
    }
]



export default function Footer() {


    return (


        <div name="footer" className='text-xs p-4 text-slate-300  flex  flex-col justify-center items-center bg-slate-900 h-auto w-full'>


            <div className=' h-auto  w-10/12  border-slate-500 border-t border-b  p-4  flex flex-wrap justify-center lg:justify-around  '>

                <table class="table-auto w-80 text-center mb-4 ">
                    <thead   >
                        <tr>
                            <th className='w-28 p-1'>PI Project</th>
                            <th>User</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Food</td>
                            <td>Jt2572</td>
                            <td>September, 2022</td>
                        </tr>

                    </tbody>
                </table>

                <div className='flex flex-col justify-center items-center   w-56 h-16 mb-4'>
                    <th className='p-1'>Technologies</th>
                    <ul className="flex flex-wrap justify-center  ">
                        {techs.map((social, id) => (
                            <TechsIcon social={social} key={id} target='_blank' rel="" />
                        ))}
                    </ul>
                </div>



                <div className='flex flex-col justify-center items-center   w-48 h-16'>
                    <th className='p-1'>My Social Media</th>
                    <ul className="flex flex-wrap justify-center ">
                        {socials.map((social, id) => (
                            <SocialIcon social={social} key={id} target='_blank' rel="" />
                        ))}
                    </ul>
                </div>

            </div>
        </div>
    )


}


const SocialIcon = (props) => {
    const { icon, link } = props.social;
    return (
        <li className="m-2">
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-5 h-5 bg-blue-100 rounded text-slate-900  flex items-center justify-center hover:text-white hover:bg-blue-600"
            >
                {icon}
            </a>
        </li>
    );
};

const TechsIcon = (props) => {
    const { icon, link } = props.social;
    return (
        <li className="m-2">
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-5 h-5 rounded text-slade-200 flex items-center justify-center hover:text-white hover:bg-blue-600"
            >
                {icon}
            </a>
        </li>
    );
};
