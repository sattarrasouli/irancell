import { Button, Divider, FormControl, Grid, IconButton, InputLabel, NativeSelect, Stack, Typography } from '@mui/material';
import irancellLogo from '../assets/img/ir.svg'
import * as React from 'react';
import { makeStyles } from '@mui/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import LanguageIcon from '@mui/icons-material/Language';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PersonIcon from '@mui/icons-material/Person';
import { ArrowDownward } from '@mui/icons-material';

const useStyles = makeStyles({
    btn: {
        color: '#000 !important',
        fontFamily: 'IranSans  !important',
        fontSize: '1vw  !important',
        fontWeight: '500 !important',
    },
})
function Header() {
    const classes = useStyles()
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Grid sx={{ backgroundColor: '#fc0', padding: '10px', height: '70px', display: 'flex', flexDirection: 'row', justifyContent: "space-between", alignItems: 'center' }}>
            <Stack direction="row" spacing={2}>
                <a href='https://shop.irancell.ir/fa'>
                    <img src={irancellLogo} width="50px" style={{ margin: '10px' }} />
                </a>
                <Button variant='text' className={classes.btn} >صفحه اصلی</Button>
                <Button variant="text" className={classes.btn}>دستگاه&zwnj;ها</Button>
                <Button variant="text" className={classes.btn}>سیم کارت</Button>
                <Button variant="text" className={classes.btn}>خدمات</Button>
                <Button variant="text" className={classes.btn}>بسته&zwnj;ها</Button>
                <Button variant="text" className={classes.btn}>حراج شماره&zwnj;های رند</Button>
                <Button variant="text" className={classes.btn}>تخفیف و پیشنهادات</Button>
            </Stack>
            <Stack direction="row" alignItems="center">
                <Badge badgeContent={4} color="error">
                    <ShoppingCartIcon color="action" sx={{ color: "#000" }} />
                </Badge>
                <Divider orientation="vertical" flexItem sx={{ margin: '10px' }} />
                <IconButton
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >
                    <PersonIcon />
                </IconButton>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
                <Divider orientation="vertical" flexItem sx={{ margin: '10px' }} />
                <Button className={classes.btn} variant="text" startIcon={<LanguageIcon sx={{ margin: '8px' }} />}>
                    En
                </Button>
                <Button className={classes.btn} sx={{ width: '180px', backgroundColor: '#fee067', borderRadius: '32px' }} variant="contained" endIcon={<ArrowBackIcon sx={{ margin: '8px' }} />}>
                    مشترکان تجاری
                </Button>
            </Stack>
        </Grid>
    )
}

export default Header