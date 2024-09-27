import React from "react";
import "./_Video.scss";
import {AiFillEye} from 'react-icons/ai'

const Video  =()=>{
    return (
        <div className="video">
                <div className="video__top">
                    <img src="https://i9.ytimg.com/vi/xNnuUqZnW9M/hq720_custom_3.jpg?sqp=COjN27cG-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLByzovLiFfocu6b3lwoIAr_D6Lf-g" alt="" />
                    <span>05:23</span>
                </div>
                <div className="video__title">
                    Lorem Ipsum is simply dummy text of the pri
                </div>
                <div className="video__details">
                 <span><AiFillEye/></span> 5M views •
                 <span>5 days ago</span>
                </div>
                <div className="video__channel">
                    <img src="https://yt3.ggpht.com/7E0QBIEjad-_M3l_E4GChWnxdDJd_j6UIhk8hQUhBanSvnVAIO3MYMLE9Rz4Q7ldfFdEznsXZQ=s68-c-k-c0x00ffffff-no-rj" alt="" />
                    <p>Radirona</p>
                </div>

        </div>
    )
}

export default Video ;