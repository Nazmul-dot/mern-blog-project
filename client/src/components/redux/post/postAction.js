import {
    ALL_POST, POST_CREATE, POST_DELETE, POST_ERROR, POST_LIKE,
     POST_UPDATE,POST_SELECT,POST_FILTER,POST_SORT,SINGLE_POST,SINGLE_POST_UPDATE,SINGLE_POST_DELETE
} from './postType'
import axios from 'axios'

//get all post 

export const getallpost = () => {
    return async dispatch => {
        try {
            const result = await axios.get('/getpost')
            dispatch({ type: ALL_POST, payload: result.data })
        } catch (error) {
            dispatch({ type: POST_ERROR, payload: error.message })
        }
    }
}

//creat post in data base

export const creatpost = (data) => {
    return async dispatch => {
        try {
            const {title, message, cetagory, image } = data
            console.log(data)
            const formdata = new FormData()
            formdata.append('title', title);
            formdata.append('message', message);
            formdata.append('cetagory', cetagory);
            formdata.append('image', image);
            const result = await axios.post('/createpost', formdata)
            console.log(result)
            dispatch({ type: POST_CREATE, payload: result.data })
        } catch (error) {
            dispatch({ type: POST_ERROR, payload: error.message })
        }
    }
}

export const singlePost=(id)=>{
    return async dispatch=>{
        // alert(id)
        const result=await axios.post('/singlePost',{id:id})
        console.log(result.data[0])
        dispatch({type:SINGLE_POST,payload:result.data[0]})
    }
}
export const singlepostUpdate=(_id,data)=>{
    return async dispatch=>{
        console.log(_id,data)
        const result=await axios.patch(`/updatepost/${_id}`,data)
        console.log(result.data)
        dispatch({type:SINGLE_POST,payload:result.data})
    }
}
export const singlepostDelete=(_id)=>{
    return async dispatch=>{
        const result =await axios.delete(`/deletepost/${_id}`)
        dispatch({type:SINGLE_POST_DELETE,payload:result.data})
    }
}

export const selectItem=(item)=>{
    return async dispatch=>{
        dispatch({type:POST_SELECT,payload:item})
    }
}

export const updatepost=(data)=>{
    return async dispatch=>{
     try {
        const { creator, title, message, tag, image } = data
        const formdata = new FormData()
        formdata.append('creator', creator);
        formdata.append('title', title);
        formdata.append('message', message);
        formdata.append('tag', tag);
        formdata.append('image', image);
        console.log(creator, title, message, tag, image)
        const result=await axios.patch(`/updatepost/${data._id}`,formdata)
        console.log(result.data)
     } catch (error) {
        dispatch({ type: POST_ERROR, payload: error.message })
     }
    }
}
export const deleteCart = (id) => {
    return async dispatch => {
        try {
            // alert(id)
            await axios.delete(`/deletepost/${id}`)
            dispatch({ type: POST_DELETE, payload:id})
        } catch (error) {
            dispatch({ type: POST_ERROR, payload: error.message })
        }

    }
}

export const likePost=(id)=>{
    return async dispatch=>{
        try {
            const result=await axios.post(`/like`,{id})
            console.log(result)
            dispatch({type:POST_LIKE,payload:result.data})
        } catch (error) {
            dispatch({ type: POST_ERROR, payload: error.message })
        }
    }
}

export const filterPost=(data)=>{
    return async dispatch=>{
        dispatch({type:POST_FILTER,payload:data})
        dispatch({type:POST_SORT})
    }
}