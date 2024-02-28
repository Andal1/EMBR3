import React,{useEffect, useState} from 'react'
import user from '../Assets/user.jpg'
import MenuItems from './MenuItems';
import Elogo from '../Assets/Elogo.png'



const SidebarData =[
    {
    name: "Home",
    to:'/',
    iconClassName:'bi bi-house',
},
{
    name: "BMRS",
    to:'/bmrs',
    iconClassName: 'bi bi-journal-text', 
    subMenus:[
        {
            name: "Bulk" ,
            to:"/"
        },
        {
            name: "Api" ,
            to:"/"
        },
        {
            name: "Tablet" ,
            to:"/"
        },
        {
            name: "OralSyrup" ,
            to:"/OralSyruptabs"
        },
    ]
},
{
    name: "BPRS",
    to:`/bprs`,
    iconClassName: 'bi bi-journal-text'
},
{
    name: "Product List",
    to:`/productlist`,
    iconClassName: 'bi bi-list-task'
},
{
    name: "Settings",
    to:`/settings`,
    iconClassName: 'bi bi-gear'
},
]
const SideMenu = (props) => {
    const [inactive, setInactive] = useState(false);
    useEffect(() => {
        if(inactive){
            document.querySelectorAll('.SubMenu').forEach(el =>{
                el.classList.remove("active");
            })
        }
        props.onCollapse(inactive)
    },[inactive])
  return (
    <div className={`SideMenu ${inactive ? "inactive" : ""}`}>
        <div className="top-section">
            <div onClick={() => setInactive(!inactive)} className='logo'>
            
          <img src={Elogo} alt="Elogo" />
        
            </div>
            
        </div>
        <div className="divider"></div>
        <div className="MainMenu">
            <ul>
                {
                    SidebarData.map((menuItem, index) => 
                    (<MenuItems 
                    key={index}
                    name={menuItem.name}
                    to={menuItem.to}
                    subMenus={menuItem.subMenus || []}
                    iconClassName = {menuItem.iconClassName}
                    onClick={() =>{
                        if(inactive){
                            setInactive(false);
                        }
                    } }
                    />
                    ))
                }
                {/*
                <li>
                <a className="MenuItem">
                <div className='MenuIcon'>
                <i class="bi bi-house"></i>
                    </div>
                    <span>Home</span>
                </a>
                </li>
                <MenuItems
                name={"BMRS"}
                subMenus={
                [
                    {name: "Bulk"},
                    {name: "Api"},
                    {name: "Tablet"},
                    {name: "OralSyrup"},]}
                />*/}
                {/*
                <MenuItems 
                    key={index}
                    name={menuItem.name}
                    to={menuItem.to}
                    subMenus={menuItem.subMenus || []}
                    icon = {menuItem.icon}
                    onClick={() =>{
                        if(inactive){
                            setInactive(false);
                        }
                    } }
                />
                <li>
                    <a className="MenuItem">
                    <div className='MenuIcon'>
                    <i class="bi bi-journal-text"></i>
                        </div>
                        <span>BPR</span>
                    </a>
                </li>
                <li>
                    <a className="MenuItem">
                    <div className='MenuIcon'>
                    <i class="bi bi-list-task"></i>
                        </div>
                        <span>Product List</span>
                    </a>
                </li>
                <li>
                    <a className="MenuItem">
                    <div className='MenuIcon'>
                    <i class="bi bi-gear"></i>
                        </div>
                        <span>Settings</span>
                    </a>
                </li>*/}
            </ul>
        </div>
        <div className='SideMenuFooter'>
            <div className='avatar'>
               <img src={user} alt='user'/>
            </div>
            <div className='userInfo'> 
            <h5>Alice</h5>
            <p>alice@gmail.com</p>

            </div>

        </div>
    </div>
  )
}

export default SideMenu