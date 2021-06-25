import React from 'react'
import { Card, CardActionArea, CardMedia, CardContent,Button } from '@material-ui/core'
import {Link} from 'react-router-dom'
import cartPic from '../image/images (29).jpg'
const CardItem = ({post}) => {
    return (
        <>
            <div className='col-md-6 col-lg-4 mx-auto border d-flex justify-content-center my-3'>
                <div class="card" style={{ maxWidth: "18rem" }}>
                    <img  src={post.image} class="card-img-top" alt="" />
                    <div class="card-body">
                        <h5  class="card-title">{post.title}</h5>
                        <p class="card-text">{post.message}</p>
                    </div>
                    <Button variant='contained' component={Link} to={`/single/${post._id}`} >see more</Button>
                </div>
            </div>
        </>
    )
}

export default CardItem
