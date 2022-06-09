import React, { Children } from 'react'
import classes from '../src/styles/newbook.module.css'
import FormCard from '../src/components/FormCard'

const NewBook = () => {
    let day = new Date().getDate()
    let month = new Date().getMonth()
    let year = new Date().getFullYear()

    const date = `0${day},0${month},${year}`

    return (
        <>
            <h1>New Book:</h1>

            <FormCard>
                <div>
                    <form className={classes.form}>
                        <div className={classes.control}>
                            <label htmlFor='title'>Book name</label>
                            <input type='text' id='title' required />
                        </div>
                        <div className={classes.control}>
                            <label htmlFor='image'></label>
                            <input type='url' id='image' required />
                        </div>
                        <div className={classes.control}>
                            <label htmlFor='address'></label>
                            <input type='text' id='address' required />
                        </div>
                        <div className={classes.control}>
                            <label htmlFor='description'></label>
                            <textarea id='description' rows={5} required />
                        </div>
                        <div className={classes.actions}>
                            <button></button>
                        </div>
                    </form>
                </div>
            </FormCard>
        </>
    )
}

export default NewBook