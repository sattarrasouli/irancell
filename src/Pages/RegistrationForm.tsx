import { Button, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useStyles } from './Payment';
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";

function RegistrationForm() {
    const classes = useStyles()
    const { handleSubmit, register, formState: { errors }, } = useForm()
    const formSubmit = (data: any) => {
        console.log('data', data)
    }
    const navigate = useNavigate()
    return (
        <>
            <form onSubmit={handleSubmit(formSubmit)}>
                <Grid container sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Grid item xs={8} sx={{ backgroundColor: '#f0eff5', padding: '20px', borderRadius: '10px' }} >
                        <Grid item sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Typography color="gray">فرم ثبت نام والدین</Typography>
                            <Button endIcon={<KeyboardArrowDownIcon sx={{ marginRight: '10px' }} />} sx={{ width: '48%', fontFamily: 'inherit', fontSize: '14px' }} variant='contained'>استفاده از اطلاعات کاربری</Button>
                        </Grid>
                        <Grid item sx={{ marginY: '20px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <TextField
                                className={classes.inputForm}
                                {...register("firstname", {
                                    required: "نام الزامی است",
                                    minLength: {
                                        value: 3,
                                        message: "نام وارد شده کمتر از 3 کاراکتر است",
                                    },
                                })}
                                helperText={errors.firstname && errors.firstname.message}
                                placeholder='نام' sx={{ width: '48%' }} />
                            <TextField
                                className={classes.inputForm}
                                {...register("lastname", {
                                    required: "نام خانوادگی الزامی است",
                                    minLength: {
                                        value: 3,
                                        message: "نام خانوادگی وارد شده کمتر از 3 کاراکتر است",
                                    },
                                })}
                                helperText={errors.lastname && errors.lastname.message}
                                placeholder='نام خانوادگی' sx={{ width: '48%' }} />
                        </Grid>
                        <Grid item sx={{ marginY: '20px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <TextField
                                className={classes.inputForm}
                                {...register("fathername", {
                                    required: "نام پدر الزامی است",
                                    minLength: {
                                        value: 3,
                                        message: "نام پدر وارد شده کمتر از 3 کاراکتر است",
                                    },
                                })}
                                helperText={errors.fathername && errors.fathername.message}
                                placeholder='نام پدر' sx={{ width: '48%' }} />
                            <TextField
                                className={classes.inputForm}
                                {...register("birthdate", {
                                    required: " تاریخ تولد الزامی است",

                                })}
                                helperText={errors.birthdate && errors.birthdate.message}
                                type='date' placeholder='تاریخ تولد' sx={{ width: '48%' }} />
                        </Grid>
                        <Grid item sx={{ marginY: '20px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <FormControl>
                                <RadioGroup
                                    row

                                    sx={{ display: 'flex', alignItems: 'center', color: "gray" }}
                                >
                                    <Typography >جنسیت : </Typography>
                                    <FormControlLabel value="female" control={<Radio />} label="زن" />
                                    <FormControlLabel value="male" control={<Radio />} label="مرد" />

                                </RadioGroup>
                            </FormControl>
                            <FormControl sx={{ width: '48%' }}>
                                <InputLabel id="demo-simple-select-label">ملیت</InputLabel>
                                <Select
                                    className={classes.inputForm}
                                >
                                    <MenuItem value={10}>ایران</MenuItem>
                                    <MenuItem value={20}>تایوان</MenuItem>
                                    <MenuItem value={30}>کره</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item sx={{ marginY: '20px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <TextField
                                className={classes.inputForm}
                                {...register("nationalId", {
                                    required: " شماره شناسنامه الزامی است",

                                })}
                                helperText={errors.nationalId && errors.nationalId.message}
                                placeholder='شماره شناسنامه' sx={{ width: '48%' }} />
                            <TextField
                                className={classes.inputForm}
                                {...register("nationaCode", {
                                    required: " شماره ملی الزامی است",

                                })}
                                helperText={errors.nationaCode && errors.nationaCode.message}
                                placeholder="کد ملی" sx={{ width: '48%' }} />
                        </Grid>
                        <Grid item sx={{ marginY: '20px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <TextField
                                className={classes.inputForm}
                                {...register("Email", {
                                    required: " ایمیل الزامی است",
                                })}
                                helperText={errors.Email && errors.Email.message}
                                placeholder='آدرس ایمیل' sx={{ width: '48%' }} />
                            <TextField
                                className={classes.inputForm}
                                {...register("phoneno", {
                                    required: " شماره همراه الزامی است",
                                })}
                                helperText={errors.phoneno && errors.phoneno.message}
                                placeholder="شماره همراه" sx={{ width: '48%' }} />
                        </Grid>
                        <Grid item sx={{ marginY: '20px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <TextField
                                className={classes.inputForm}
                                {...register("landLine", {
                                    required: " شماره تلفن الزامی است",
                                })}
                                helperText={errors.landLine && errors.landLine.message}
                                placeholder='تلفن ثابت' sx={{ width: '48%' }} />
                            <TextField
                                className={classes.inputForm}
                                {...register("postalCode", {
                                    required: "  کد پستی الزامی است",
                                })}
                                helperText={errors.postalCode && errors.postalCode.message}
                                placeholder="کد پستی" sx={{ width: '48%' }} />
                        </Grid>
                        <Grid item sx={{ marginY: '20px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <FormControl sx={{ width: '48%' }}>
                                <InputLabel id="demo-simple-select-label">استان</InputLabel>
                                <Select
                                    className={classes.inputForm}
                                >
                                    <MenuItem value={10}>تهران</MenuItem>
                                    <MenuItem value={20}>قزوین</MenuItem>
                                    <MenuItem value={30}>زنجان</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl sx={{ width: '48%' }}>
                                <InputLabel id="demo-simple-select-label">شهر</InputLabel>
                                <Select
                                    className={classes.inputForm}
                                >
                                    <MenuItem value={10}>تهران</MenuItem>
                                    <MenuItem value={20}>رشت</MenuItem>
                                    <MenuItem value={30}>ساری</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item sx={{ marginY: '20px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <TextField
                                className={classes.inputForm}
                                {...register("address", {
                                    required: "آدرس  الزامی است",
                                })}
                                helperText={errors.address && errors.address.message}
                                placeholder='آدرس کامل' sx={{ width: '100%' }} />
                        </Grid>
                        <Grid item sx={{ marginY: '20px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <TextField
                                className={classes.inputForm}
                                {...register("number", {
                                    required: "پلاک  الزامی است",
                                })}
                                helperText={errors.number && errors.number.message}
                                placeholder='پلاک' sx={{ width: '48%' }} />
                            <FormControl sx={{ width: '48%' }}>
                                <InputLabel id="demo-simple-select-label">انتخاب زبان</InputLabel>
                                <Select
                                    className={classes.inputForm}
                                >
                                    <MenuItem value={10}>فارسی</MenuItem>
                                    <MenuItem value={20}>انگلیسی</MenuItem>
                                    <MenuItem value={30}>چینی</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>

                    <Grid item xs={8} sx={{ backgroundColor: '#f0eff5', padding: '20px', marginY: '20px', borderRadius: '10px' }} >
                        <Grid item sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Typography color="gray">فرم ثبت نام فرزند</Typography>
                        </Grid>
                        <Grid item sx={{ marginY: '20px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <TextField
                                className={classes.inputForm}
                                {...register("childName", {
                                    required: "نام فرزند الزامی است",
                                    minLength: {
                                        value: 3,
                                        message: "نام فرزند وارد شده کمتر از 3 کاراکتر است",
                                    },
                                })}
                                helperText={errors.childName && errors.childName.message}
                                placeholder='نام فرزند' sx={{ width: '48%' }} />
                            <TextField
                                className={classes.inputForm}
                                {...register("childLastName", {
                                    required: "نام خانوادگی فرزند الزامی است",
                                    minLength: {
                                        value: 3,
                                        message: "نام خانوادگی فرزند وارد شده کمتر از 3 کاراکتر است",
                                    },
                                })}
                                helperText={errors.childLastName && errors.childLastName.message}
                                placeholder="نام خانوادگی فرزند" sx={{ width: '48%' }} />
                        </Grid>
                        <Grid item sx={{ marginY: '20px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <TextField
                                className={classes.inputForm}
                                {...register("fName", {
                                    required: "نام پدر فرزند الزامی است",
                                    minLength: {
                                        value: 3,
                                        message: "نام پدر فرزند وارد شده کمتر از 3 کاراکتر است",
                                    },
                                })}
                                helperText={errors.fName && errors.fName.message}
                                placeholder='نام پدر' sx={{ width: '48%' }} />
                            <TextField
                                className={classes.inputForm}
                                {...register("bDate", {
                                    required: "تاریخ تولد فرزند الزامی است",

                                })}
                                helperText={errors.bDate && errors.bDate.message}
                                type='date' placeholder='تاریخ تولد' sx={{ width: '48%' }} />
                        </Grid>
                        <Grid item sx={{ marginY: '20px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <TextField
                                className={classes.inputForm}
                                {...register("childNationalCode", {
                                    required: " کد ملی فرزند فرزند الزامی است",

                                })}
                                helperText={errors.childNationalCode && errors.childNationalCode.message}
                                placeholder=" کد ملی فرزند" sx={{ width: '48%' }} />
                        </Grid>
                        <Grid className={classes.buttonContainer}>
                            <Button onClick={() => navigate('/Cart')} variant='contained' sx={{ width: '48%', padding: '8px 50px', margin: '30px', fontFamily: 'inherit', color: '#000', backgroundColor: 'rgba(0, 0, 0, 0.26)', borderRadius: '40px' }} > بازگشت به لیست محصولات </Button>
                            <Button type='submit' variant='contained' sx={{ width: '48%', padding: '8px 50px', margin: '30px', fontFamily: 'inherit', color: '#000', backgroundColor: '#fc0', borderRadius: '40px' }} >ثبت و ادامه</Button>
                        </Grid>
                    </Grid>
                </Grid >
            </form>
        </>
    )
}

export default RegistrationForm