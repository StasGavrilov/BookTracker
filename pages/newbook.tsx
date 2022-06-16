import React, { useRef, useState, useEffect } from 'react'
import FormCard from '../src/components/FormCard'
import classes from '../src/styles/newbook.module.css'

const NewBook = () => {
    const [newBooks, setNewBooks] = useState<object[]>([])
    const titleInputRef = useRef<HTMLInputElement | null>(null)
    const imageInputRef = useRef<HTMLInputElement | null>(null)
    const pagesInputRef = useRef<HTMLInputElement | null>(null)
    const chaptersInputRef = useRef<HTMLInputElement | null>(null)
    const descriptionInputRef = useRef<HTMLTextAreaElement | null>(null)

    useEffect(() => {
        const bookJSON = localStorage.getItem('books')
        if (bookJSON != null) {
            return setNewBooks(JSON.parse(bookJSON))
        }
    }, [])

    function submitHandler(event: any) {
        event.preventDefault()

        const titleInput: string | undefined = titleInputRef?.current?.value
        const imageInput: string | undefined = imageInputRef?.current?.value
        const pagesInput: string | undefined = pagesInputRef?.current?.value
        const chaptersInput: string | undefined = chaptersInputRef?.current?.value
        const descriptionInput: string | undefined = descriptionInputRef?.current?.value

        const newBookData = {
            title: titleInput,
            image: imageInput,
            pages: pagesInput,
            chapters: chaptersInput,
            description: descriptionInput
        }

        setNewBooks([...newBooks, newBookData])
        localStorage.setItem('books', JSON.stringify(newBooks))
    }
    console.log(newBooks)

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