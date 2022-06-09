import React from 'react'
import classes from '../styles/formcard.module.css'

const FormCard = ({ children }: any) => {
    return (
        <div className={classes.card}>
            {children}
        </div>
    )
}

export default FormCard
