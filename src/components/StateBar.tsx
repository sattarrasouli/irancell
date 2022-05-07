import { Button, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { makeStyles } from '@mui/styles';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import { Link, useLocation } from 'react-router-dom';

const useStyles = makeStyles({
    text: {
        color: 'RGB(220,220,220) !important',
        fontFamily: 'IranSans  !important',
        fontSize: '13px  !important',
        display: "flex",
        alignItems: "end",
        padding: '12px',
        "&:focus": {
            color: '#000 !important',
            backgroundColor: '#fc0 !important',
        }
    },
    active: {
        backgroundColor: '#fc0  !important',
        borderRadius: '8px',
        fontFamily: 'IranSans  !important',
        fontSize: '14px  !important',
        fontWeight: '500 !important',
        display: "flex",
        alignItems: "end",
        padding: '12px',
        textDecoration: 'none',
        color: '#000 !important',
        "&:active": {
            color: '#000 !important',
            backgroundColor: '#fc0 !important',

        }
    }
})

function StateBar() {
    const classes = useStyles()
    const location = useLocation()
    console.log('location', location)
    return (
        <Grid item xs={7} sx={{ display: 'flex', justifyContent: 'center', marginY: '30px' }}>
            <Stack direction="row" sx={{ boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px', borderRadius: "5px" }}>
                <Link to="/Cart" style={{ textDecoration: 'none' }}>
                    <Button className={location.pathname.includes("/Cart") ? classes.active : classes.text} >
                        <ShoppingBasketIcon sx={{ marginX: '5px' }} />
                        سبد خرید
                    </Button>
                </Link>
                <Link to="/Payment" style={{ textDecoration: 'none' }}>
                    <Button className={location.pathname.includes("/Payment") ? classes.active : classes.text} >
                        <AccountBalanceWalletIcon sx={{ marginX: '5px' }} />
                        بازبینی پرداخت
                    </Button>
                </Link>
                <Link to="/Logistic" style={{ textDecoration: 'none' }}>
                    <Button className={location.pathname.includes("/Logistic") ? classes.active : classes.text} >
                        <LocalShippingIcon sx={{ marginX: '5px' }} />
                        نحوه ارسال
                    </Button>
                </Link>
                <Link to="/RegistrationForm" style={{ textDecoration: 'none' }}>
                    <Button className={location.pathname.includes("/RegistrationForm") ? classes.active : classes.text} >
                        <TextSnippetIcon sx={{ marginX: '5px' }} />
                        ثبت&zwnj;نام سیم&zwnj;کارت
                    </Button>
                </Link>
            </Stack>
        </Grid >
    )
}

export default StateBar