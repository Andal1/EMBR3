import React,{useState} from 'react';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import './OralSyrup.css'
import CardContent from '@mui/material/CardContent';
import ProductDetails from './ProductDetails';

import OralSyruppage2 from './OralSyruppage2';


import DispensingofRawMaterials from './DispensingofRawMaterials';
import Masterformula from './Masterformula';
import Manufacturing from './Manufacturing';


  
  const StyledTabs = styled((props) => (
    <Tabs
      {...props}
      TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
    />
  ))({
    '& .MuiTabs-indicator': {
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: 'transparent',
    },
    '& .MuiTabs-indicatorSpan': {
      maxWidth: 40,
      width: '100%',
      backgroundColor: '#635ee7',
    },
  });
  
  const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
    ({ theme }) => ({
      textTransform: 'none',
      fontWeight: theme.typography.fontWeightRegular,
      fontSize: theme.typography.pxToRem(15),
      marginRight: theme.spacing(1),
      color: '#141414',
      '&.Mui-selected': {
        color: '#635ee7',
      },
      '&.Mui-focusVisible': {
        backgroundColor: '#30c1d1',
      },
    }),
  );
function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
export default function OralSyruptabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  const [orderId,setOrderId]= useState('')
  
  const handleClick =()=>{
    setOrderId(document.getElementById('orderId').value);
  }
  return (
    <div>
      <h1>Batch Manufacturing Records</h1>
      <label htmlFor="orderId">Order Id : </label>
      <input type="text" id="orderId" name="orderId" /> 
      <button onClick={handleClick}>
        Submit</button>
      <Card sx={{ minHeight: 98 + "vh" }}>
        <CardContent>
          <Box sx={{ maxWidth: { xs: 320, sm: 1050 }, bgcolor: 'background.paper' }}>
            <Box sx={{ width: '100%' }}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <StyledTabs
                  value={value}
                  onChange={handleChange}
                  variant="scrollable"
                  scrollButtons="auto"
                  aria-label="scrollable auto tabs example"
                >

                  <StyledTab label="Product Details" {...a11yProps(0)} />
                  <StyledTab label="Item Three" {...a11yProps(1)} />
                  <StyledTab label="Master Formula" {...a11yProps(2)} />
                  <StyledTab label="Dispensing of Raw Materials" {...a11yProps(3)} />
                  <StyledTab label="Manufacturing" {...a11yProps(4)} />
                  <StyledTab label="Attatchments" {...a11yProps(5)} />
                </StyledTabs>
              </Box>


              <CustomTabPanel value={value} index={0}>
                <ProductDetails orderId={orderId} />
              </CustomTabPanel>
              <CustomTabPanel value={value} index={1}>
                <OralSyruppage2 />
              </CustomTabPanel>
              <CustomTabPanel value={value} index={2}>
                <Masterformula />
              </CustomTabPanel>
              <CustomTabPanel value={value} index={3}>
                <DispensingofRawMaterials orderId={orderId}/>
              </CustomTabPanel>
              <CustomTabPanel value={value} index={4}>
                <Manufacturing />
              </CustomTabPanel>

            </Box>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
}