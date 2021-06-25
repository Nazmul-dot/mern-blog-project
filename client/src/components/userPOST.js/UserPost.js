import React from 'react'
import HomeHeader from '../home/HomeHeader'
import Cards from '../CardPage.js/Cards'
import {useSelector,useDispatch} from 'react-redux'
import { useParams } from 'react-router-dom'
const UserPost = () => {
    const {allpost} = useSelector(state => state.postData)
    // const {name} = useSelector(state => state.userData.userDetail)
    const {name}=useParams()
    const userPost=allpost.filter((post)=>post.creator===name);
    console.log(userPost)
    return (
        <>
            <HomeHeader />
            <Cards
             posts={userPost}
            />
        </>
    )
}

export default UserPost
