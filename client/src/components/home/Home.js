import React from 'react'
import { CssBaseline, Toolbar, Typography } from '@material-ui/core'
import HomeHeader from './HomeHeader'
import Cards from '../CardPage.js/Cards'
import {getallpost} from '../redux/post/postAction'
import {useSelector,useDispatch} from 'react-redux'
import { useEffect } from 'react'
const Home = () => {
    const {allpost} = useSelector(state => state.postData)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getallpost())
    },[])
    console.log('home page....')
    return (
        <>
        <HomeHeader/>
        <Cards
        posts={allpost}
        />
        </>
    )
}

export default Home


