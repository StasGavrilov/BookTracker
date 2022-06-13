import React from 'react'

const AllBooks = () => {
    function timeCount() {
        let day = new Date().getDate()
        let month = new Date().getMonth()
        let year = new Date().getFullYear()
        const date = `${day},${month},${year}`
    }

    return (
        <>
            <h1>All Books!</h1>
        </>
    )
}

export default AllBooks