import React, { useState } from 'react'
import { Toolbar, Typography, IconButton,TextField,Button } from '@material-ui/core'
import { useParams } from 'react-router-dom'
import sidepic from '../image/1e3f587572a7a7b20bbf1828595a1786--holiday-party-themes-holiday-gift-guide.jpg'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { useEffect } from 'react'
import { singlePost,singlepostUpdate,singlepostDelete } from '../redux/post/postAction'
import { useSelector, useDispatch } from 'react-redux'
const useStyle = makeStyles(() => ({
    imgdiv: {
        width: '100%',
        height: '45vh',
        marginTop: '20px',
    },
    img: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        borderRadius: '13px',
    },
    athur: {
        textDecoration: 'none',
        color: '#A9A9A9'
    },
    deletIcon: {
        color: '#DC143C'
    },
    editIcon: {
        color: '#008B8B',
    }
}))
const Single = () => {
    const classes = useStyle()
    const { id } = useParams()
    const dispatch = useDispatch()
    const { name } = useSelector(state => state.userData.userDetail)
    const { singlepost } = useSelector(state => state.postData)
    const { title, image, creator, message, createdAt,_id } = singlepost
    const [toggle, settoggle ] = useState(false)
    console.log(singlepost)
    useEffect(() => {
        dispatch(singlePost(id))
    }, [])
    // alert(id)

    const [data,setdata]=useState({
        title:'',
        message:'',
    })
    const update=()=>{
        settoggle(true)
        setdata({['title']:title,['message']:message})
    }
    const handlechange=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setdata({...data,[name]:value})
    }
    const submit=()=>{
        console.log('submit')
        dispatch(singlepostUpdate(_id,data))
        setdata({
            title:'',
            message:'',
        })
        settoggle(false)
    }
    const deletepost=()=>{
        dispatch(singlepostDelete(_id))
    }
    return (
        <>
            <Toolbar />
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-10 mx-auto'>
                        <div className={classes.imgdiv}>
                            <img className={classes.img} src={image} alt="" />
                        </div>
                    </div>
                    <div className='col-md-10 mx-auto'>
                        {
                            toggle ? 
                            (
                            <TextField
                            margin='dense'
                            fullWidth
                            variant='standard'
                            value={data.title}
                            autoFocus
                            name='title'
                            onChange={handlechange}
                            />
                            ) : ((
                                <div className='d-flex justify-content-between mt-2'>
                                    <Typography variant='h5'>{title}</Typography>
                                    {
                                        name === creator ?
                                            (
                                                <div>
                                                    <IconButton onClick={update} >
                                                        <EditIcon className={classes.editIcon}  />
                                                    </IconButton>
                                                    <IconButton component={Link} to='/' onClick={deletepost}>
                                                        <DeleteIcon className={classes.deletIcon} />
                                                    </IconButton>
                                                </div>
                                            ) : ''
                                    }

                                </div>
                            ))
                        }

                        <div className='d-flex justify-content-between mt-2'>
                            <Typography className={classes.athur} component={Link} to={`/userpost/${creator}`} variant='subtitle1'>Author: {creator}</Typography>
                            <div style={{ color: '#A9A9A9' }}>
                                {new Date(createdAt).toDateString()}
                            </div>
                        </div>
                        <div>
                            {
                                toggle?(
                                    <>
                                    <TextField
                                    fullWidth
                                    margin='dense'
                                    multiline
                                    rows={5}
                                    variant='outlined'
                                    color='secondary'
                                    value={data.message}
                                    name='message'
                                    onChange={handlechange}
                                    />
                                    <div className='d-flex justify-content-end'>
                                         <Button color='primary' variant='contained' onClick={submit}>update</Button>
                                    </div>
                                   
                                    </>
                                ):(
                                     <p>{message}</p>
                                )
                            }
                           
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Single
