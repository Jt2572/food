import React from 'react';
import { NavLink } from "react-router-dom";
// import background from '../../assets/bg-landing.png'


const navbarData = [
  {
    id: 1,
    title: "Home",
    to: "/home",
  },
  {
    id: 2,
    title: "Create Recipe",
    to: "/createrecipe",
  },
];

const Navbar = () => {

  // const navigate = useNavigate();

  return (

    <div>
      <nav className="sticky lg:border-none md:border-none border-b border-t mt-2 w-96 flex justify-center">
        <ul className="flex flex-wrap ">
          {navbarData.map((el, id) => (
              <LinkItem el={el} key={id} />
          ))}
        </ul>
      </nav>


    </div>

  )
}



const LinkItem = (props) => {
  const { title, to } = props.el;
  return (
    <li className="m-3 border border-white lg:mx-1  hover:bg-amber-100 hover:border-none rounded-full ">
      <NavLink
        to={to}
        activeClassName="text-blue-400 "
        className=" p-2.5 text-amber-50 text-medium hover:text-yellow-900 "
      >
        {title}
      </NavLink>
    </li>
  );
};  

export default Navbar