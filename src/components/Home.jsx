import React, { useEffect, useState } from 'react'
import Header from './Header'
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import Carosel from './Carosel'
import p1 from '../assets/p1.jpeg'
import axios from 'axios'
import Footer from './Footer'

const Home = () => {

  const [api, setApi] = useState([])

  const apiData = async () => {
    try {
      const datas = await axios.get('https://2ndlappy.shop/api/products');
      // console.log(datas)
      if(datas.data.message=="Products Fetch Successfully"){
        setApi(datas.data.allproduct)
      }     
    } catch (err) {
      console.log(err);
      alert(err.message)
    }
  }
  useEffect(() => {
    apiData()
  }, [])
  return (
    <>
      <Header />
      <Carosel/>
      <Typography variant='h4' sx={{ fontWeight: 'bold',mt:5,ml:5 }}>Best Quality Laptops</Typography>
      <Grid container sx={{ mt: '0px', mb: '40px', ml: '20px' }}>
        {api.map((ele)=>{
          return (
            <Grid item lg={3} sx={{ mt: 10 }}>
            <Card sx={{ maxWidth: 300 }}>
              <CardMedia
                sx={{ height: 300 }}
                image={p1}
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {ele.name}
                </Typography>
                <Typography variant='h6'>Price: <span><del style={{paddingRight:'20px'}}>{ele.mrp}</del>{ele.s_price}</span></Typography>
                <Typography variant='h6'>Category: {ele.category}</Typography>
              </CardContent>
              <CardActions>
                <Button size="small" variant='contained'>Add To Cart</Button>
                <Button size="small" variant='outlined'>Buy Now</Button>
              </CardActions>
            </Card>
          </Grid>
          )
        })}
      </Grid>

      <Typography variant='h4' sx={{ fontWeight: 'bold',mt:5,ml:5 }}>Cheapest Smartphones</Typography>
      <Grid container sx={{ mt: '0px', mb: '40px', ml: '20px' }}>
        {api.filter((ele)=>{
          if(ele.category=="phone"){
            console.log(ele)
          }
        })}
      </Grid>
      <Footer/>
    </>
  )
}

export default Home
