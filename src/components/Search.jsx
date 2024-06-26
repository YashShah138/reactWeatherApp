import React, { useState } from 'react'

function Search({ fetchWeatherData, handleUseMyLocation }) {
    const [city, setCity] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        fetchWeatherData(city)
    }

    return (
        <div className="search">
            <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter city"
            />
            <button type="submit" onClick={handleSubmit}>Search</button>
            {/* <button type="button" onClick={handleUseMyLocation} className="location-button">Use my location</button> */}
        </div>
    )
}

export default Search