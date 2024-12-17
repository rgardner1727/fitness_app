const Pricing = () => {
    return (
        <div className="pricing-container">
            <div className="pricing-option">
                <h2 className="pricing-label">Basic</h2>
                <h1 className="price">$9.99<span className="per-month">/month</span></h1>
                <ul className="package-items">
                    <li>Some information</li>
                    <li>Some information</li>
                    <li>Some information</li>
                </ul>
                <button className="pricing-button">JOIN NOW</button>
            </div> 
            <div className="pricing-option">
                <h2 className="pricing-label">Standard</h2>
                <h1 className="price">$19.99<span className="per-month">/month</span></h1>
                <ul className="package-items">
                    <li>Some information</li>
                    <li>Some information</li>
                    <li>Some information</li>
                </ul>
                <button className="pricing-button">JOIN NOW</button>
            </div> 
            <div className="pricing-option">
                <h2 className="pricing-label">Premium</h2>
                <h1 className="price">$29.99<span className="per-month">/month</span></h1>
                <ul className="package-items">
                    <li>Some information</li>
                    <li>Some information</li>
                    <li>Some information</li>
                </ul>
                <button className="pricing-button">JOIN NOW</button>
            </div> 
        </div>
    )
}

export default Pricing;