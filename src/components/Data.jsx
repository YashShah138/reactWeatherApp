import React from 'react'

function Data({ data }) {
    const formatIcon = (str) => {
        return str.substring(2)
    }

    const formattedIcon = data ? formatIcon(data.current.condition.icon) : ''
    console.log(formattedIcon)

    const temp_f = data ? Math.floor(data.current.temp_f) : ''

    return (
        <div className="weather-data">
            {data ? (
                <>
                    <div className="col1">
                        <img src={`https://${formattedIcon}`} alt="weather icon" />
                        <div className="temp">
                            <p>{temp_f}°F</p>
                            {/* <p>{data.current.temp_c}°C</p> */}
                        </div>
                    </div>
                    <div className="conditionText">
                        <p>{data.current.condition.text}</p>
                    </div>

                    {/* <div className="avgTemp">
                        <p>{data.forecast.forecastday[0].day.mintemp_f}°F <b>/</b> {data.forecast.forecastday[0].day.maxtemp_f}°F</p>
                        <p>Max Temp °C: {data.forecast.forecastday[0].day.maxtemp_c}°C <b>/</b> Min Temp °C: {data.forecast.forecastday[0].day.mintemp_c}°C</p>
                    </div> */}
                </>
            ) : (
                <></>
            )}
        </div>
    )
}

export default Data