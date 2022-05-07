import { Grid, Typography } from '@mui/material'
import React from 'react'

function NotifBanner(props: any) {
    return (
        <Grid container sx={{ display: 'flex', justifyContent: 'center' }} >
            <Grid item xs={9} sx={{ backgroundColor: 'rgb(171, 217, 255)', padding: '15px', borderRadius: '8px', }}>
                <Typography sx={{ fontFamily: 'inherit', fontSize: '12px' }}>
                    {props.text}
                    {props.btn ? (<a style={{ cursor: 'pointer' }}>اطلاعات بیشتر</a>) : ""}
                </Typography>
            </Grid>
        </Grid>
    )
}

export default NotifBanner