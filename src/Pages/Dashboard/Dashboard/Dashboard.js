import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
// import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// // import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';
import './Dashboard.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useRouteMatch
} from "react-router-dom";
import MyOrders from '../MyOrders/MyOrders';
import Payment from '../Payment/Payment';
import Review from '../Review/Review';
import ManageAllOrders from '../Admin/ManageAllOrders/ManageAllOrders';
import AddProducts from '../Admin/AddProducts/AddProducts';
import MakeAdmin from '../Admin/MakeAdmin/MakeAdmin';
import ManageProducts from '../Admin/ManageProducts/ManageProducts'
import useAuth from '../../../hooks/useAuth';
import Success from '../Payment/Success';
import { Helmet } from 'react-helmet';



const drawerWidth = 200;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    let { path, url } = useRouteMatch();

    const { user, logOut, admin } = useAuth();


    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            {/* <Divider /> */}
            <List sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textDecoration: 'none', position: 'relative' }}>

                <NavLink to='/home' className="dashLink">Home</NavLink>
                <NavLink to={`${url}`} className="dashLink" >Dashboard</NavLink>

                {admin ?
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <NavLink to={`${url}/manageOrders`} className="dashLink" activeClassName='dashActive'>Manage All Orders</NavLink>
                        <NavLink to={`${url}/addProduct`} className="dashLink" activeClassName='dashActive'>Add a Product</NavLink>
                        <NavLink to={`${url}/makeAdmin`} className="dashLink" activeClassName='dashActive'>Make an Admin</NavLink>
                        <NavLink to={`${url}/manageProducts`} className="dashLink" activeClassName='dashActive'>Manage Products</NavLink>



                    </Box> :

                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <NavLink to={`${url}/myOrders`} className="dashLink" activeClassName='dashActive'>My Orders</NavLink>
                        {/* <NavLink to={`${url}/payment`} className="dashLink" activeClassName='dashActive'>Payment</NavLink> */}
                        <NavLink to={`${url}/addReview`} className="dashLink" activeClassName='dashActive'>Review</NavLink>
                    </Box>
                }
                <NavLink onClick={logOut} to='/home' className="dashLink logOut" activeClassName='dashActive '>Log Out</NavLink>
            </List>

        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            {/* react helmet for dynamic tab name */}
            <Helmet>
                <title>Welcome to Dashboard | Watch Station</title>
            </Helmet>

            <CssBaseline />
            <AppBar
                position="fixed"

                sx={{

                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    zIndex: '999',
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar sx={{ width: "100%", zIndex: '1000' }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Switch>

                    <Route exact path={path}>
                        <Box sx={{ textAlign: 'center' }}>
                            <h3>Welcome to Dashboard.</h3>
                            <p>Please select an Option for details</p>
                        </Box>
                    </Route>
                    <Route path={`${path}/myOrders`}>
                        <MyOrders />
                    </Route>
                    <Route path={`${path}/payment/:payId`}>
                        <Payment />
                    </Route>
                    <Route path={`${path}/payment/success`}>
                        <Success />
                    </Route>
                    <Route path={`${path}/addReview`}>
                        <Review />
                    </Route>
                    <Route path={`${path}/manageOrders`}>
                        <ManageAllOrders />
                    </Route>
                    <Route path={`${path}/addProduct`}>
                        <AddProducts />
                    </Route>
                    <Route path={`${path}/makeAdmin`}>
                        <MakeAdmin />
                    </Route>
                    <Route path={`${path}/manageProducts`}>
                        <ManageProducts />
                    </Route>

                </Switch>

            </Box>
        </Box >
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;