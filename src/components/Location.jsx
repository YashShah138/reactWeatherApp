import React from 'react'

function Location({ data }) {

    const formatDate = (dateString) => {
        const [datePart] = dateString.split(' ')  // Get the date part only
        const date = new Date(datePart)  // Parse date part only

        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        const dayOfWeek = daysOfWeek[date.getUTCDay()]

        const months = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ]
        const month = months[date.getUTCMonth()]
        const day = date.getUTCDate()
        const year = date.getUTCFullYear()

        return `${dayOfWeek}, ${month} ${day}, ${year}`
    }

    const newDate = data ? formatDate(data.location.localtime) : ''

    return (
        <div className="weather-location">
            {data ? (
                <>
                    <h1>{data.location.name}, {data.location.region}</h1>
                    <em><p>{newDate}</p></em>
                </>
            ) : (
                <></>
            )}
        </div>
    )
}

export default Location
