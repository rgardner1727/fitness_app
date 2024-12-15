const Location = () => {
    return (
        <div className="location">
            <h4 className="location-h4">Closest Gym</h4>
            <h2 className="location-h2">Your Local Flex: <span className="gym-location">McKnight</span></h2>
            <div className="location-button-container">
                <button className="gym-details-btn" onClick={() => console.log('Clicked')}>GET GYM DETAILS</button>
                <button className="join-btn" onClick={() => console.log('Clicked')}>JOIN NOW</button>
            </div>
        </div>
    )
}

export default Location;