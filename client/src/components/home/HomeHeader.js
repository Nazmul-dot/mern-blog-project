import React from 'react'
import { Toolbar, Typography } from '@material-ui/core'
const HomeHeader = () => {
    return (
        <>
            <div>
                <Toolbar />
                <div className='mt-5'>
                    <Typography variant='body1' className='text-center mb-5'>React AND Node</Typography>
                    <div className='position-relative' style={{ height: '64vh'}}>
                        <img
                            src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                            style={{ width: '100%', height: '100%', objectFit: 'cover'}} alt="" />
                        <div className='position-absolute text-center' style={{ top: '-50px', left: '44%' }}>
                            <Typography variant='h1' className='text-center'>Blog</Typography>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default HomeHeader