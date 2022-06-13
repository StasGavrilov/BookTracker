import React, { useRef, useState, useEffect } from 'react'
import FormCard from '../src/components/FormCard'
import classes from '../src/styles/newbook.module.css'

const NewBook = () => {
    const [newBooks, setNewBooks] = useState([])
    const titleInputRef = useRef()
    const imageInputRef = useRef()
    const pagesInputRef = useRef()
    const chaptersInputRef = useRef()
    const descriptionInputRef = useRef()

    useEffect(() => {
        const todoJSON = localStorage.getItem('books')
        if (todoJSON != null) {
            return setNewBooks(JSON.parse(todoJSON))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('books', JSON.stringify(newBooks))
    }, [newBooks])


    function submitHandler(event: any) {
        event.preventDefault()

        const titleInput: string = titleInputRef.current.value
        const imageInput: string = imageInputRef.current.value
        const pagesInput: number = pagesInputRef.current.value
        const chaptersInput: number = chaptersInputRef.current.value
        const descriptionInput: string = descriptionInputRef.current.value

        const newBookData = {
            title: titleInput,
            image: imageInput,
            pages: pagesInput,
            chapters: chaptersInput,
            description: descriptionInput
        }

        setNewBooks([...newBooks, newBookData])
    }

    return (
        <>
            <FormCard>
                <div>
                    <form className={classes.form} onSubmit={submitHandler}>
                        <div className={classes.control}>
                            <label htmlFor='title'>Book name</label>
                            <input type='text' id='title' ref={titleInputRef} required />
                        </div>

                        <div className={classes.control}>
                            <label htmlFor='image'>Book image</label>
                            <input type='url' id='image' ref={imageInputRef} required />
                        </div>

                        <div className={classes.control}>
                            <label htmlFor='page'>Pages</label>
                            <input type='text' id='page' ref={pagesInputRef} required />
                        </div>

                        <div className={classes.control}>
                            <label htmlFor='chapter'>Chapters</label>
                            <input type='text' id='chapter' ref={chaptersInputRef} required />
                        </div>

                        <div className={classes.control}>
                            <label htmlFor='description'>Notes</label>
                            <textarea id='description' rows={5} ref={descriptionInputRef} />
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