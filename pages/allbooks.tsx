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
            <div className="container">
                <h1>All Books!</h1>
            </div>
        </>
    )
}

export default AllBooks