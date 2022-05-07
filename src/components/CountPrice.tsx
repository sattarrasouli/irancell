import { Button, Grid, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function CountPrice() {
    const navigate = useNavigate()
    return (
        <Grid item xs={3} sx={{ backgroundColor: '#f0eff5', borderRadius: '8px', padding: '20px 30px' }}>
            <PriceCount title="مبلغ کل:" amount="280000" color="#000" />
            <PriceCount title=" تخفیف:" amount="20000" color="red" />
            <PriceCount title=" مالیات بر ارزش افزوده:" amount="7000" color="#a1a0a6" />
            <PriceCount title="مبلغ کل:" amount="900000" color="#000" fontSize="20px" />
            <Button onClick={() => navigate('/Payment')} variant='contained' fullWidth sx={{ margin: '20px 0 ', backgroundColor: '#fc0', color: '#000', borderRadius: "50px", fontFamily: "inherit" }}>ادامه خرید</Button>
        </Grid>
    )
}

export default CountPrice


const PriceCount = (props: any) => {
    return (
        <Grid container sx={{ display: 'flex', justifyContent: 'space-between', margin: '10px 0' }}>
            <Typography sx={{ fontFamily: "IranSans", fontSize: `${props.fontSize ? props.fontSize : '14px'}`, color: `${props.color}` }}>
                {props.title}
            </Typography>
            <Typography sx={{ fontFamily: "IranSans", fontSize: `${props.fontSize ? props.fontSize : '14px'}`, color: `${props.color}` }}>
                {props.amount}
            </Typography>
        </Grid>
    )
}