import {
  FaHome,
  FaServicestack,
  FaProjectDiagram,
  FaInfoCircle,
  FaBlogger,
  FaEnvelope,
} from "react-icons/fa";

const NavbarData = [
  {
    id: 1,
    title: "Home",
    path: "/",
    cName: "nav-item",
    icon: <FaHome />, // Home icon
  },
  {
    id: 2,
    title: "Blog",
    path: "/blog",
    cName: "nav-item",
    icon: <FaBlogger />, // Blog icon
  },
  {
    id: 3,
    title: "Portfolio",
    path: "https://slickdigitalagency.com",
    cName: "nav-item",
    icon: <FaProjectDiagram />, // Projects icon
  },
  {
    id: 4,
    title: "About",
    path: "/about",
    cName: "nav-item",
    icon: <FaInfoCircle />, // About icon
  },

  {
    id: 5,
    title: "Contact",
    path: "/contact",
    cName: "nav-item",
    icon: <FaEnvelope />, // Contact icon
  },
];

export default NavbarData;
