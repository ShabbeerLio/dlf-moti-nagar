import React from 'react'
import bannerimg from "../../Assets/Banner/banner.jpg"
import "./Banner.css"
import { FaArrowRightLong } from "react-icons/fa6";


const Banner = () => {

    return (
        <>
            <div className="banner">
                <div className="banner-image">
                    <img src={bannerimg} alt="DLF Andheri Mumbai" />
                </div>
                <div className="banner-stick">
                    <div className="banner-stick-box">
                        <span>New Launch</span>
                        <h2>DLF Moti Nagar</h2>
                        <h5>Stunning architecture influenced by the timeless elegance of European design.</h5>
                        {/* <span>Premium 3 / 4 BHK Residence | Price Starts <span> ₹ 4.95 Cr*</span> </span> */}
                        <p>Enquire Now <FaArrowRightLong /></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner
