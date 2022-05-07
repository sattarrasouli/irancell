import { Grid, Typography, Button, Divider, FormControl, TextField } from '@mui/material'
import React from 'react'
import { makeStyles } from '@mui/styles';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useNavigate } from 'react-router-dom';

export const useStyles = makeStyles({
    text: {
        fontFamily: 'IranSans !important',
        color: '#a1a0a6'
    },
    secOne: {
        border: "2px solid #f8f8f8",
        borderRadius: '10px',
        padding: '10px',
        width: "100%",
        marginTop: '10px',
        display: 'flex',
        justifyContent: 'space-between'
        , "& p, button": {
            fontFamily: 'IranSans !important',
        }
    },
    secTwo: {

        border: "2px solid #f8f8f8",
        borderRadius: '10px',
        width: "100%",
        marginTop: '10px',
        "& p, button": {
            fontFamily: 'IranSans !important',
        }
    },
    icon: {
        marginLeft: '5px', border: '2px solid #f8f8f8', backgroundColor: '#f8f8f8', borderRadius: '50%', padding: "3px"
    },
    input: {
        [`& fieldset`]: {
            borderTopRightRadius: '30px',
            borderBottomRightRadius: '30px',
            borderTopLeftRadius: '0',
            borderBottomLeftRadius: '0',
            borderLeft: ' none'
        },
    },
    buttonContainer: {
        display: ' flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        paddingX: '30px !important',
        paddingY: '5px',
        color: 'yellow'
    },
    inputForm: {
        backgroundColor: 'white',
        "& .css-1wc848c-MuiFormHelperText-root": {
            color: "red !important",
            fontFamily: "inherit",
            lineHeight: 1,
        },
    },
})

function Payment() {
    const classes = useStyles()
    const navigate = useNavigate()
    return (
        <Grid container sx={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
            <Grid item xs={8}>
                <Grid>
                    <Typography className={classes.text} >بازبینی و پرداخت</Typography>
                    <Grid className={classes.secOne}>
                        <Typography sx={{ display: 'flex', alignItems: 'center' }}>
                            <ShoppingCartIcon color='disabled' className={classes.icon} />
                            بازبینی سفارش
                        </Typography>
                        <Button variant='contained' color="primary" endIcon={<KeyboardArrowDownIcon sx={{ marginRight: '15px' }} />} >مشاهده سفارش</Button>
                    </Grid>
                </Grid>
                <Grid className={classes.secTwo} sx={{
                    display: 'flex',
                    flexDirection: 'column',
                }}>
                    <Grid sx={{ padding: '10px' }}>
                        <Typography sx={{ display: 'flex', alignItems: 'center' }}>
                            <AccountBalanceWalletIcon color='disabled' className={classes.icon} />
                            نحوه پرداخت
                        </Typography>
                    </Grid>
                    <Grid sx={{ borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px', backgroundColor: '#f0eff5', width: '100%', display: 'flex', justifyContent: 'center', borderTop: '1px solid #ebeaef' }}>
                        <FormControl fullWidth style={{ width: '80%' }}>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="female"
                                name="radio-buttons-group"
                            >
                                <Grid sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: '5px', borderRadius: '8px', margin: "25px 10px", backgroundColor: 'white', width: "100%", boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px' }}>
                                    <FormControlLabel value="female" control={<Radio />} label="پرداخت از طریق اعتبار" />
                                    <Typography sx={{ fontSize: '14px', backgroundColor: "#fff9d9", padding: '7px', borderRadius: '40px' }}>اعتبار شما:  29000 تومان</Typography>
                                </Grid>
                                <Grid sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: '5px', borderRadius: '8px', margin: "25px 10px", backgroundColor: 'white', width: "100%", boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px' }}>
                                    <FormControlLabel value="Male" control={<Radio />} label="پرداخت اینترنتی" />
                                    <Typography sx={{ fontSize: '14px', backgroundColor: "#fff9d9", padding: '7px', borderRadius: '40px' }}> مبلغ پرداختی:  29000 تومان</Typography>
                                </Grid>
                            </RadioGroup>
                            <Grid sx={{ width: '50%', display: 'flex', flexDirection: 'row', alignSelf: 'end', marginY: '40px' }}>
                                <TextField sx={{ display: 'flex', width: "70%" }} className={classes.input} placeholder="کد تخفیف را وارد کنید" />
                                <a href="#" style={{ borderTopLeftRadius: '30px', borderBottomLeftRadius: '30px', backgroundColor: '#fc0', padding: '10px', display: 'flex', width: '30%', alignItems: 'center', textDecoration: 'none', color: '#000' }}> اعمال تخفیف</a>
                            </Grid>
                        </FormControl>
                    </Grid>
                </Grid>
                <Grid className={classes.buttonContainer}>
                    <Button onClick={() => navigate('/Cart')} variant='contained' sx={{ padding: '8px 50px', margin: '30px', fontFamily: 'inherit', color: '#000', backgroundColor: 'rgba(0, 0, 0, 0.26)', borderRadius: '40px' }} >بازبینی سبد خرید</Button>
                    <Button onClick={() => navigate('/Logistic')} variant='contained' sx={{ padding: '8px 50px', margin: '30px', fontFamily: 'inherit', color: '#000', backgroundColor: '#fc0', borderRadius: '40px' }} >پرداخت و خرید</Button>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Payment