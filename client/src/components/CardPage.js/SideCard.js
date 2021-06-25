import { Paper, Divider } from '@material-ui/core'
import React from 'react'
import sidepic from '../image/1e3f587572a7a7b20bbf1828595a1786--holiday-party-themes-holiday-gift-guide.jpg'
const SideCard = () => {
    return (
        <>
            <Paper className='mt-5 mb-5' elevation={5}  style={{position:'sticky',top:'80px'}}>
                <div>
                    <div className='pt-3 text-center'>
                        <p className='mx-auto' style={{ borderTop: '1px solid #a7a4a4', borderBottom: '1px solid #a7a4a4', width: '80%' }}>About</p>
                    </div>
                    <div className='border d-flex justify-content-center'>
                        <img
                            className='my-3 text-center'
                            style={{maxWidth:'200px'}}
                            src={sidepic}
                            alt="" />
                    </div>

                    <p className='mx-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate qui necessitatibus nostrum illum reprehenderit.</p>
                    <div className='pt-3 text-center py-2 border'>
                        <p className='mx-auto' style={{ borderTop: '1px solid #a7a4a4', borderBottom: '1px solid #a7a4a4', width: '25%' }}>Cetagory</p>
                    </div>
                    <div className='pt-3 text-center py-2 border'>
                        <p className='mx-auto' style={{ borderTop: '1px solid #a7a4a4', borderBottom: '1px solid #a7a4a4', width: '50%' }}>Follwer</p>
                        <div>
                            <i className=" m-1 sidebarIcon fab fa-facebook-square"></i>
                            <i className=" m-1 sidebarIcon fab fa-twitter-square"></i>
                            <i className=" m-1 sidebarIcon fab fa-pinterest-square"></i>
                            <i className=" m-1 sidebarIcon fab fa-instagram-square"></i>
                        </div>
                    </div>

                </div>

            </Paper>
        </>
    )
}

export default SideCard
