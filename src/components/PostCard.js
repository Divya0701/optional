import React from 'react'
import { Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap'

export default function PostCard({title, author, num_comments, url}) {
    return (
        <Card className='my-2'>
            <CardBody>
            <CardTitle tag="h5">
                {title}
            </CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
                {author}
            </CardSubtitle>
            <CardText>
                No.of comments {num_comments}
            </CardText>
            <a href={url} target='_blank' className='btn btn-primary'>
                Visit
            </a>
            </CardBody>
        </Card>
    )
}
