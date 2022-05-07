import { Grid, IconButton, Typography } from '@mui/material'
import React from 'react'
import CountPrice from './CountPrice'
import modem from '../assets/img/modem.jpg'
import { makeStyles } from '@mui/styles'
import ClearIcon from '@mui/icons-material/Clear';
const useStyles = makeStyles({
    text: {
        fontFamily: 'IranSans !important',
        fontSize: '16px !important',
        margin: '5px !important'
    },
    textSecond: {
        fontFamily: 'IranSans !important',
        fontSize: '12px !important',
        margin: '5px !important',
        color: '#a1a0a6 !important'
    }
})


function ListProduct() {
    const classes = useStyles()
    return (
        <Grid container sx={{ display: 'flex', marginY: '40px' }}>
            <table style={{ width: '75%', borderBottom: '#000', marginTop: '5px' }}>
                <thead>
                    <tr style={{ padding: '5px', height: '15px' }}>
                        <th style={{ borderBottom: "2px solid #f8f8f8", }}>لیست محصولات</th>
                        <th style={{ borderBottom: "2px solid #f8f8f8", }}>تعداد</th>
                        <th style={{ borderBottom: "2px solid #f8f8f8", }}>قیمت</th>
                        <th style={{ borderBottom: "2px solid #f8f8f8", }}></th>

                    </tr>
                </thead>
                <tbody>
                    <tr style={{ height: '100px' }}>
                        <td style={{ display: 'flex', flexDirection: "row", margin: '20px' }}>
                            <img src={modem} width="100px" />
                            <Grid item>
                                <Typography className={classes.text}>مودم TD-LTE KP-283 </Typography>
                                <Typography className={classes.textSecond}>سیم کارت اعتباری + بسته ماهانه </Typography>
                            </Grid>
                        </td>
                        <td align='center'>2</td>
                        <td align='center'>2500000</td>
                        <td align='center'>
                            <IconButton>
                                <ClearIcon />
                            </IconButton>
                        </td>
                    </tr>
                    <tr style={{ height: '100px' }}>
                        <td style={{ display: 'flex', flexDirection: "row", margin: '20px' }}>
                            <img src={modem} width="100px" />
                            <Grid item>
                                <Typography className={classes.text}>مودم TD-LTE KP-283 </Typography>
                                <Typography className={classes.textSecond}>سیم کارت اعتباری + بسته ماهانه </Typography>
                            </Grid>
                        </td>
                        <td align='center'>4</td>
                        <td align='center'>3330000</td>
                        <td align='center'>
                            <IconButton>
                                <ClearIcon />
                            </IconButton>
                        </td>
                    </tr>
                </tbody>
            </table >
            <CountPrice />
        </Grid>
    )
}

export default ListProduct