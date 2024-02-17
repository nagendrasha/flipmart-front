import { Grid, Typography } from '@mui/material'
import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import { YouTube } from '@mui/icons-material';

const Footer = () => {

    const quicklinks = [
        {
            name: 'About Us'

        },
        {
            name: 'Conatct Us'
        },
        {
            name: 'Career'
        },
        {
            name: 'Privacy Policy'
        }
    ]

    return (
        <>
            <Grid container sx={{ backgroundColor: 'pink' }}>
                <Grid item lg={4} sx={{ p: 5 }}>
                    <Typography variant='h6' sx={{ color: 'black',fontWeight:'800',mb:1 }}>About Company</Typography>
                    <span>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio, ullam ipsa qui dolore odio natus fugiat eos, quisquam alias dicta voluptate harum libero quidem at perspiciatis magnam? Tempore, reiciendis laboriosam.
                    </span>
                </Grid>
                <Grid item lg={4} sx={{ p: 5 }}>
                    <Typography variant='h6' sx={{ color: 'black',fontWeight:'800',mb:1 }}>Quick Links</Typography>
                    {quicklinks.map((ele)=>{
                        return(
                            <Typography sx={{'&:hover':{color:'blue'}}} >
                                {ele.name}
                            </Typography>
                        )
                    })}
                </Grid>
                <Grid item lg={4} sx={{ p: 5 }}>
                    <Typography variant='h6' sx={{ color: 'black',fontWeight:'800',mb:1}}>Follow Us</Typography>
                    <FacebookIcon sx={{color:'blue',fontSize:'30px','&:hover':{color:'red'},mr:'3px'}}/>
                    <InstagramIcon sx={{color:'red',fontSize:'30px','&:hover':{color:'orange'},mr:'3px'}}/>
                    <XIcon sx={{color:'black',fontSize:'30px','&:hover':{color:'gray'},mr:'3px'}}/>
                    <YouTube sx={{color:'red',fontSize:'30px','&:hover':{color:'orange'}}}/>
                </Grid>
            </Grid>
        </>
    )
}

export default Footer
