import React from 'react'

const HeatMap = () => {

    function getDaysInMonth(year, month) {
        return new Date(year, month, 0).getDate();
    }

    const daysStr = [
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat"
    ]

    const date = new Date();
    const firstDayOfTheYear = new Date(date.getFullYear(), 0, 1);
    const currentYear = date.getFullYear();
    const currentMonth = date.getMonth() + 1; // 👈️ months are 0-based

    // 👇️ Current Month
    const daysInCurrentMonth = getDaysInMonth(currentYear, currentMonth);
    console.log(daysInCurrentMonth);
    console.log("First day of the year: " + daysStr[firstDayOfTheYear.getDay()])

    const daysInMonths = [...Array(12)].map((_, i) => (
        { test: i + 1 }
    ))

    console.log(daysInMonths);



    return (
        <div>

            {[...Array(5)].map((_, i) => (
                <div key={i} className="ua-feed-container__pin">
                    <img
                        src="https://i.pinimg.com/236x/72/bb/68/72bb68c77715a96264a3d410e06a7741.jpg"
                        alt=""
                    />
                </div>
            ))}

        </div>
    )
}

export default HeatMap