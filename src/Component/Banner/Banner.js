import React from 'react'
import bannerimg from "../../Assets/Banner/banner.jpg"
import "./Banner.css"
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';


const Banner = () => {

    const toTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'auto'
        });
    }

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
                        <p>
                            <Link to="/site-visit" onClick={toTop}>
                                Enquire Now <FaArrowRightLong />
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner
