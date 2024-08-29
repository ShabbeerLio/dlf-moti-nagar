import React from 'react'
import "./Overview.css"
import Form from '../Form/Form'

const Overview = () => {

    return (
        <div className="overview">
            <div className="about-main">
                <div className="overview-item">
                    <div className="overview-left">
                        <div className="overview-form">
                            <Form />
                        </div>
                    </div>
                    <div className="overview-right">
                        <div className="overview-title">
                            <h3>Overview</h3>
                        </div>
                        <div className="overview-detail">
                            <p>This wiki is developed for DLF Andheri Mumbai, an elite residential development project developed in Mumbai. This new modern complex brings prestige, elegance, comfort and all the amenities required in today’s societies.</p>
                            <p>Specially developed to fulfill the requirements of the modern city inhabitants, DLF Andheri Mumbai is developed to offer customers only the highest quality of living, completed with state-of-the-art options that may be accessed 24/7.</p>
                        </div>
                        
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Overview
