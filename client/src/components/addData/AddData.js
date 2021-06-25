import React from 'react'
import sidepic from '../image/1e3f587572a7a7b20bbf1828595a1786--holiday-party-themes-holiday-gift-guide.jpg'
import { makeStyles } from '@material-ui/core/styles'
import { Toolbar, TextField, Button, IconButton } from '@material-ui/core'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { useState } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import {creatpost} from '../redux/post/postAction'
import {useSelector,useDispatch} from 'react-redux'
const useStyle = makeStyles(() => ({
    imgbox: {
        marginTop: '20px',
        width: '100%',
        height:'40vh',
        borderRadius: '13px',
        position: 'relative'
    },
    img: {
        height: '100%',
        width: '100%',
        objectFit: 'cover',
        borderRadius: '13px'
    },
    closeIcon: {
        position: 'absolute',
        right: '10px',
        top: 0
    },
    btndiv: {
        position: 'relative',
    },
    btn: {
        position: 'absolute',
        right: 0,
    },
    icon: {
        fontSize: '40px'
    },
    input: {
        display: 'none'
    }
}))

const initial = {
    title: '',
    image: '',
    message: '',
    cetagory: '',
}
const AddData = () => {
    const classes = useStyle()
    const dispatch = useDispatch()
    const [data, setdata] = useState(initial)
    const handlechange = (e) => {
        var name = e.target.name;
        var value;
        if (name === 'image') {
            value = e.target.files[0];
        }
        else {
            value = e.target.value;
        }
        setdata({ ...data, [name]: value })
    }
    const { title, message, cetagory, image } = data;
    const submit = (e) => {
        e.preventDefault();
        console.log(data)
        dispatch(creatpost(data))
        setdata(initial)
    }
    return (
        <>
            <Toolbar />
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-10 mx-auto'>
                        {
                            image ? (
                                <div className={classes.imgbox}>
                                    <img className={classes.img} src={image ? URL.createObjectURL(image) : ''} alt="" />
                                    <IconButton className={classes.closeIcon} onClick={() => setdata({ ...data, 'image': '' })}>
                                        <CloseIcon />
                                    </IconButton>
                                </div>
                            ):''
                        }
                        <form className='row' style={{ marginTop: '25px' }}>
                            <div className='col-12'>
                                <div className='row'>
                                    <div className='col-1'>
                                        <input accept="image/*" className={classes.input} id="icon-button-file"
                                            onChange={handlechange} name='image' type="file"
                                        />
                                        <label htmlFor="icon-button-file">
                                            <IconButton color="primary" aria-label="upload picture" component="span">
                                                <AddCircleOutlineIcon className={classes.icon} />
                                            </IconButton>
                                        </label>
                                    </div>
                                    <div className='col-8'>
                                        <TextField
                                            fullWidth
                                            onChange={handlechange}
                                            name='title'
                                            value={title}
                                            variant='outlined'
                                            margin='dense'
                                            placeholder='Title'
                                        />
                                    </div>
                                    <div className='col-3'>
                                        <TextField
                                            fullWidth
                                            onChange={handlechange}
                                            name='cetagory'
                                            value={cetagory}
                                            variant='outlined'
                                            margin='dense'
                                            placeholder='Cetagory'
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='col-12'>
                                <TextField
                                    fullWidth
                                    onChange={handlechange}
                                    name='message'
                                    value={message}
                                    placeholder='message'
                                    variant='outlined'
                                    multiline
                                    margin='dense'
                                    rows='7'
                                />
                            </div>
                            <div style={{marginTop:'20px'}} className={classes.btndiv}>
                                <Button onClick={submit} variant='contained' color='secondary' className={classes.btn}>Publish</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddData
