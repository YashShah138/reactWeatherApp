import React from 'react'

function Aux({ data }) {
    console.log(data)
    return (
        <div className="auxData">
            {data ? (
                <>
                    <div className="auxRow">
                        <div className="col">
                            <p>Humidity: {data.current.humidity}%</p>
                            <p>Wind: {data.current.wind_mph} MPH {data.current.wind_dir}</p>
                        </div>
                        <br></br>
                        <div className="col">
                            <p>Sunrise: {data.forecast.forecastday[0].astro.sunrise}</p>
                            <p>Sunset: {data.forecast.forecastday[0].astro.sunset}</p>
                        </div>
                    </div>
                </>
            ) : (
                <></>
            )}
        </div>
    )
}

export default Aux

