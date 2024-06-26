useEffect(() => {
    const fetchData = async () => {
        const API_KEY = process.env.REACT_APP_API_KEY
        const API_HOST = process.env.REACT_APP_API_HOST
        const url = `https://weatherapi-com.p.rapidapi.com/forecast.json?q=san%20diego&days=1`
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