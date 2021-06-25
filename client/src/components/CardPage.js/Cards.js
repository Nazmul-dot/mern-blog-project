import React from 'react'
import SideCard from './SideCard'
import CardItem from './CardItem'
const Cards = ({ posts }) => {
    console.log(posts)
    return (
        <>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-9 col-6 mx-auto border mb-3'>
                        <div className='row mt-4'>
                            {
                                posts ? (
                                    posts.map((post) => {
                                        return (
                                            <CardItem 
                                            post={post}
                                            />
                                        )
                                    })
                                ) : ''

                            }
                        </div>
                    </div>
                    <div className='col-md-3 col-6 mx-auto border'>
                        <SideCard />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards
