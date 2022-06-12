import React, { Children, useRef } from 'react'
import classes from '../src/styles/newbook.module.css'
import FormCard from '../src/components/formCard'

const NewBook = () => {
    const titleInputRef = useRef()
    const imageInputRef = useRef()
    const pagesInputRef = useRef()
    const chaptersInputRef = useRef()
    const descriptionInputRef = useRef();

    function submitHandler(event: any) { // TODO:
        event.preventDefault()

        const titleInput = titleInputRef.current.value
        const imageInput = imageInputRef.current.value
        const pagesInput = pagesInputRef.current.value
        const chaotersInput = chaptersInputRef.current.value
        const descriptionInput = descriptionInputRef.current.value

    }

    console.log(titleInputRef.current.value)

    return (
        <>
            <h1>New Book</h1>

            <FormCard>
                <div>
                    <form className={classes.form}>
                        <div className={classes.control}>
                            <label htmlFor='title'>Book name</label>
                            <input type='text' id='title' ref={titleInputRef} required />
                        </div>

                        <div className={classes.control}>
                            <label htmlFor='image'>Book image</label>
                            <input type='url' id='image' required />
                        </div>

                        <div className={classes.control}>
                            <label htmlFor='page'>Pages</label>
                            <input type='text' id='page' required />
                        </div>

                        <div className={classes.control}>
                            <label htmlFor='chapter'>Chapters</label>
                            <input type='text' id='chapter' required />
                        </div>

                        <div className={classes.control}>
                            <label htmlFor='description'>Notes</label>
                            <textarea id='description' rows={5} />
                        </div>

                        <div className={classes.actions}>
                            <button>Submit</button>
                        </div>
                    </form>
                </div>
            </FormCard>
        </>
    )
}

export default NewBook