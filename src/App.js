import React, { useState, useEffect } from 'react'
import Search from './components/Search'
import Location from './components/Location'
import Data from './components/Data'
import Aux from './components/Aux'
import './App.css'

function App() {
    const [weatherData, setWeatherData] = useState(null)

    const fetchWeatherData = async (location) => {
        const API_KEY = process.env.REACT_APP_API_KEY
        const API_HOST = process.env.REACT_APP_API_HOST
        const url = `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${location}`

        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': API_KEY,
                'x-rapidapi-host': API_HOST
            }
        }

        try {
            const response = await fetch(url, options)
            if (!response.ok) {
                throw new Error('Something went wrong!')
            }
            const data = await response.json()
            setWeatherData(data)
            console.log(data)
        } catch (error) {
            console.log('There was an error fetching your weather data!', error)
        }
    }

    // eslint-disable-next-line
    const handleUseMyLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords
                    const location = `${latitude},${longitude}`
                    fetchWeatherData(location)
                },
                (error) => {
                    console.error('Error getting location', error)
                    // Fallback to a default location if geolocation fails
                    fetchWeatherData('San Diego')
                }
            )
        } else {
            console.error('Geolocation is not supported by this browser.')
            // Fallback to a default location
            fetchWeatherData('San Diego')
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            const API_KEY = process.env.REACT_APP_API_KEY
            const API_HOST = process.env.REACT_APP_API_HOST
            const url = `https://weatherapi-com.p.rapidapi.com/forecast.json?q=san%20diego`
            const options = {
                method: "GET",
                headers: {
                    "x-rapidapi-key": API_KEY,
                    "x-rapidapi-host": API_HOST
                }
            }

            try {
                const response = await fetch(url, options)
                if (!response.ok) {
                    throw new Error("Something went wrong!")
                }
                const data = await response.json()
                setWeatherData(data)
                console.log(data)
            } catch (error) {
                console.log("There was an error fetching you weather data!", error)
            }
        }

        fetchData()
    }, [])

    return (
        <div className="App">
            <div className="container">
                <Search fetchWeatherData={fetchWeatherData} />
                <button className="userLocation" onClick={handleUseMyLocation}>Use my location</button>
                <Location data={weatherData} />
                <Data data={weatherData} />
                <Aux data={weatherData} />
            </div>
        </div>
    )
}

export default App
