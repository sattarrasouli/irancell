import { Container } from '@mui/material'
import React from 'react'
import NotifBanner from '../components/NotifBanner'
import ListProduct from '../components/Table'

function Cart() {
    return (
        <div>
            <NotifBanner btn={true} text=' مشترکین گرامی باتوجه به اجباری شدن رمز پویا از ابتدای دی ماه لطفا به منظور فعال سازی رمز یکبار مصرف کارت بانکی و تایید شماره تلفن همراه خود، به سایت یا شعبه بانک صادر کننده کارت خود مراجعه کنید.' />
            <Container>
                <ListProduct />
            </Container>

        </div>
    )
}

export default Cart