import "./index.css"
import { AiOutlineSun } from "react-icons/ai";
import { IoMoonOutline } from "react-icons/io5";
import { useState } from "react";
function NavbarSection(prpos) {

const {theme, changeTheme } = prpos;
const navbar = theme === 'light' ? 'navbar' : 'navbar-dark';
const icons = theme === 'light' ? 'icons' : 'icons-dark';
const navlink = theme === 'light' ? 'nav-link' : 'nav-link-dark';
const name = theme === 'light' ? 'name' : 'name-dark';



    return <>
        <nav className={navbar}>

            <div className="left">
                <h2 className={name}>Vishal Munagalashetty</h2>
            </div>
            <div className="right">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item ">
                        <a className={navlink} href="#home">Home</a>

                    </li>
                    <li className="nav-item ">
                        <a  className={navlink}  href="#about" >About</a>

                    </li>
                    <li className="nav-item ">
                        <a  className={navlink}  href="#skills">Skills</a>

                    </li>
                    <li className="nav-item ">
                        <a  className={navlink}  href="#projects">Projects</a>

                    </li>
                    <li className="nav-item ">
                        <a  className={navlink}  href="#certifications">Certifications</a>

                    </li>
                    <li className="nav-item ">
                        <a className={navlink}  href="#contactus">Contact</a>

                    </li>
                </ul>

                <button className="theme" onClick={changeTheme}>
                    {theme === 'light' ? <AiOutlineSun fontSize={18} className={icons} /> : <IoMoonOutline fontSize={18} className={icons} />}

                </button>
            </div>
        </nav>
    </>
}
export default NavbarSection;