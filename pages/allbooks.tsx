import React, { useEffect, useState } from 'react'
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material'

interface IBook {
    chapters: string
    description: string
    image: string
    pages: string
    title: string
}

const AllBooks = () => {
    const [allBooks, setAllBooks] = useState<IBook[]>([])

    useEffect(() => {
        const bookJSON = localStorage.getItem('books')
        if (bookJSON != null) {
            return setAllBooks(JSON.parse(bookJSON))
        }
    }, [])

    function timeCount() {
        let day = new Date().getDate()
        let month = new Date().getMonth()
        let year = new Date().getFullYear()
        const date = `${day},${month},${year}`
    }

    return (
        <>
            <h1>All Books!</h1>

            <div>
                {allBooks.map((book, index) => {
                    return (
                        <Card sx={{ maxWidth: 345, marginBottom: 1 }}>
                            <CardMedia component="img" height="140" image={book.image} />

                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {book.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {book.description}
                                </Typography>
                            </CardContent>

                            <CardActions>
                                <Button size="small">like</Button>
                                <Button size="small">read</Button>
                            </CardActions>
                        </Card>
                    )
                })}
            </div>


        </>
    )
}

export default AllBooks