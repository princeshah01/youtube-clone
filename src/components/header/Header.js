import React from "react";
import "./_header.scss";
import { FaBars } from 'react-icons/fa';
import { AiOutlineSearch } from 'react-icons/ai';
import { MdNotifications, MdApps } from 'react-icons/md';
import YouTubeLogo from "../asset/YouTubeLogo";
import Avatar  from '../asset/Avatar.png'
import { IoMicCircle } from "react-icons/io5";




const Header  =({togglesidebar})=>{
    return (
        <div className=" Header">
            <FaBars className="Header__menu " size={26}
            onClick={()=>{
                togglesidebar();
            }}
            />
            <div className="Header__logo">
                <YouTubeLogo/>
            </div>
            <div className="Header__form">

            <form>
                <input type="text" placeholder="Search" />
                <button type="submit">
                    <AiOutlineSearch size={22} />
                </button>
            </form>
            <IoMicCircle  size={42} className="mic"/>
            </div>

            <div className="Header__icons">
                <MdNotifications size={28}/>
                <MdApps size={28}/>
                <img src={Avatar } alt="" />
            </div>
        </div>
    )
}

export default Header ;