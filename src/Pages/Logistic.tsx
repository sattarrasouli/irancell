import { Button, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import NotifBanner from '../components/NotifBanner'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import { useStyles } from './Payment';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { useNavigate } from 'react-router-dom';
function Logistic() {
    const classes = useStyles()
    const navigate = useNavigate()
    return (
        <Grid container sx={{ display: 'flex', justifyContent: 'center' }}>
            <Grid item xs={8} sx={{ paddingX: '20px', display: 'flex', justifyContent: 'center', flexDirection: 'column' }} >
                <Typography sx={{ color: 'rgba(0, 0, 0, 0.26)', marginY: '20px' }}> تعیین نحوه ارسال</Typography>
                <Grid item sx={{ backgroundColor: 'rgb(171, 217, 255)', padding: '15px', borderRadius: '8px', display: 'flex', alignItems: 'center' }}>
                    <Typography sx={{ fontFamily: 'inherit', fontSize: '16px' }}>
                        آیا مایل به دریافت صورتحساب فیزیکی میباشید؟
                    </Typography>
                    <FormControl sx={{ marginLeft: '30px' }} >
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                        >
                            <FormControlLabel value="female" control={<Radio />} label="خیر نیازی نیست." />
                            <FormControlLabel value="male" control={<Radio />} label="بله، نیاز دارم!" />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid className={classes.secTwo} sx={{
                    display: 'flex',
                    flexDirection: 'column'
                    , marginTop: '20px'
                }}>
                    <Grid sx={{ padding: '10px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Typography sx={{ display: 'flex', alignItems: 'center' }}>
                            تعیین آدرس ارسال
                        </Typography>
                        <Button variant='outlined'>ویرایش آدرس</Button>
                    </Grid>
                    <Grid sx={{ borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px', backgroundColor: '#f0eff5', width: '100%', display: 'flex', justifyContent: 'center', borderTop: '1px solid #ebeaef' }}>
                        <FormControl fullWidth style={{ width: '90%' }}>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="first"
                                name="radio-buttons-group"
                            >
                                <Grid sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: '5px', borderRadius: '8px', margin: "25px 10px", backgroundColor: 'white', width: "100%", boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px' }}>
                                    <FormControlLabel value="first" control={<Radio />} label={
                                        <Grid sx={{ width: '100%', marginX: '20px' }}>
                                            <Grid sx={{ display: 'flex' }}>
                                                <Typography sx={{ margin: '10px', borderRadius: '10px', padding: "10px 18px", backgroundColor: '#f0eff5', fontSize: '12px', fontWeight: '400' }}>کد پستی: <span style={{ fontSize: '14px' }}>889898787</span></Typography>
                                                <Typography sx={{ margin: '10px', borderRadius: '10px', padding: "10px 18px", backgroundColor: '#f0eff5', fontSize: '12px', fontWeight: '400' }}>استان: <span style={{ fontSize: '14px' }}>تهران</span></Typography>
                                                <Typography sx={{ margin: '10px', borderRadius: '10px', padding: "10px 18px", backgroundColor: '#f0eff5', fontSize: '12px', fontWeight: '400' }}>شهرستان: <span style={{ fontSize: '14px' }}>شهریار</span></Typography>

                                            </Grid>
                                            <Typography sx={{ margin: '10px', borderRadius: '10px', padding: "10px 18px", backgroundColor: '#f0eff5', fontSize: '12px', fontWeight: '400' }}>آدرس: <span style={{ fontSize: '14px' }}>تهران، اتوبان آزادگان، شهرک احمدآباد مستوفی</span></Typography>
                                            <Grid sx={{ display: 'flex' }}>
                                                <Typography sx={{ margin: '10px', borderRadius: '10px', padding: "10px 18px", backgroundColor: '#f0eff5', fontSize: '12px', fontWeight: '400' }}>کد پستی: <span style={{ fontSize: '14px' }}>889898787</span></Typography>
                                                <Typography sx={{ margin: '10px', borderRadius: '10px', padding: "10px 18px", backgroundColor: '#f0eff5', fontSize: '12px', fontWeight: '400' }}>استان: <span style={{ fontSize: '14px' }}>تهران</span></Typography>
                                                <Typography sx={{ margin: '10px', borderRadius: '10px', padding: "10px 18px", backgroundColor: '#f0eff5', fontSize: '12px', fontWeight: '400' }}>شهرستان: <span style={{ fontSize: '14px' }}>شهریار</span></Typography>

                                            </Grid>
                                        </Grid>
                                    } />

                                </Grid>
                                <Grid sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: '5px', borderRadius: '8px', margin: "25px 10px", backgroundColor: 'white', width: "100%", boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px' }}>
                                    <FormControlLabel value="second" control={<Radio />} label={
                                        <Grid sx={{ width: '100%', marginX: '20px' }}>
                                            <Grid sx={{ display: 'flex' }}>
                                                <Typography sx={{ margin: '10px', borderRadius: '10px', padding: "10px 18px", backgroundColor: '#f0eff5', fontSize: '12px', fontWeight: '400' }}>کد پستی: <span style={{ fontSize: '14px' }}>889898787</span></Typography>
                                                <Typography sx={{ margin: '10px', borderRadius: '10px', padding: "10px 18px", backgroundColor: '#f0eff5', fontSize: '12px', fontWeight: '400' }}>استان: <span style={{ fontSize: '14px' }}>تهران</span></Typography>
                                                <Typography sx={{ margin: '10px', borderRadius: '10px', padding: "10px 18px", backgroundColor: '#f0eff5', fontSize: '12px', fontWeight: '400' }}>شهرستان: <span style={{ fontSize: '14px' }}>شهریار</span></Typography>

                                            </Grid>
                                            <Typography sx={{ margin: '10px', borderRadius: '10px', padding: "10px 18px", backgroundColor: '#f0eff5', fontSize: '12px', fontWeight: '400' }}>آدرس: <span style={{ fontSize: '14px' }}>تهران، اتوبان آزادگان، شهرک احمدآباد مستوفی</span></Typography>
                                            <Grid sx={{ display: 'flex' }}>
                                                <Typography sx={{ margin: '10px', borderRadius: '10px', padding: "10px 18px", backgroundColor: '#f0eff5', fontSize: '12px', fontWeight: '400' }}>کد پستی: <span style={{ fontSize: '14px' }}>889898787</span></Typography>
                                                <Typography sx={{ margin: '10px', borderRadius: '10px', padding: "10px 18px", backgroundColor: '#f0eff5', fontSize: '12px', fontWeight: '400' }}>استان: <span style={{ fontSize: '14px' }}>تهران</span></Typography>
                                                <Typography sx={{ margin: '10px', borderRadius: '10px', padding: "10px 18px", backgroundColor: '#f0eff5', fontSize: '12px', fontWeight: '400' }}>شهرستان: <span style={{ fontSize: '14px' }}>شهریار</span></Typography>

                                            </Grid>
                                        </Grid>
                                    } />                                </Grid>
                            </RadioGroup>
                            <Button fullWidth sx={{ border: "2px dashed darkBlue", backgroundColor: 'white', margin: '20px' }}> افزودن آدرس جدید</Button>
                        </FormControl>
                    </Grid>
                </Grid>
                <Grid className={classes.secTwo} sx={{
                    display: 'flex',
                    flexDirection: 'column'
                    , marginTop: '30px'
                }}>
                    <Grid sx={{ padding: '10px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Typography sx={{ display: 'flex', alignItems: 'center' }}>
                            <LocalShippingIcon color='disabled' className={classes.icon} />
                            شیوه ارسال
                        </Typography>
                    </Grid>
                    <Grid sx={{ borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px', backgroundColor: '#f0eff5', width: '100%', display: 'flex', justifyContent: 'center', borderTop: '1px solid #ebeaef' }}>
                        <FormControl fullWidth style={{ width: '90%' }}>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="first"
                                name="radio-buttons-group"
                            >
                                <Grid sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: '5px', borderRadius: '8px', margin: "25px 10px", backgroundColor: 'white', width: "100%", boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px' }}>
                                    <FormControlLabel value="female" control={<Radio />} label={<Typography sx={{ margin: '10px', borderRadius: '10px', padding: "10px 18px", fontSize: '12px', fontWeight: '400' }}>آدرس: <span style={{ fontSize: '14px' }}>تحویل در محل نمایندگی</span></Typography>
                                    } />
                                    <Typography sx={{ fontSize: '14px', backgroundColor: "lightGreen", padding: '10px', borderRadius: '10px' }}> هزینه ارسال:   رایگان</Typography>
                                </Grid>
                                <Grid sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: '5px', borderRadius: '8px', margin: "25px 10px", backgroundColor: 'white', width: "100%", boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px' }}>
                                    <FormControlLabel value="Male" control={<Radio />} label={<Typography sx={{ margin: '10px', borderRadius: '10px', padding: "10px 18px", fontSize: '12px', fontWeight: '400' }}>آدرس: <span style={{ fontSize: '14px' }}>تهران، اتوبان آزادگان، شهرک احمدآباد مستوفی</span></Typography>
                                    } />
                                    <Typography sx={{ fontSize: '14px', backgroundColor: "#f0eff5", padding: '10px', borderRadius: '10px' }}> هزینه ارسال :  29000 تومان</Typography>
                                </Grid>
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                </Grid>
                <Typography sx={{ margin: '20px 0', fontSize: '12px' }}>زمان تحویل سفارشات 7 روز کاری میباشد</Typography>
                <Grid className={classes.buttonContainer}>
                    <Button onClick={() => navigate('/Cart')} variant='contained' sx={{ padding: '8px 50px', margin: '30px', fontFamily: 'inherit', color: '#000', backgroundColor: 'rgba(0, 0, 0, 0.26)', borderRadius: '40px' }} >بازگشت به اطلاعات خرید</Button>
                    <Button onClick={() => navigate('/RegistrationForm')} variant='contained' sx={{ padding: '8px 50px', margin: '30px', fontFamily: 'inherit', color: '#000', backgroundColor: '#fc0', borderRadius: '40px' }} >ثبت و ادامه</Button>
                </Grid>
            </Grid>

        </Grid >
    )
}

export default Logistic