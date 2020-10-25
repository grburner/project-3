import React from 'react';

const DateFomatter = (in_date, daysDelta = 0) => {
    const copy = new Date(in_date)
    const deltaDate = copy.setDate(copy.getDate() + daysDelta)
    console.log(deltaDate)
    const date = new Date(deltaDate)
    const formattedDate = `${date.getMonth()} - ${date.getDate()} - ${date.getFullYear()}`
    console.log(formattedDate)

    return formattedDate
}

export default DateFomatter;