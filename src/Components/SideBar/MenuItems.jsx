import React,{useState} from 'react'
import { NavLink } from 'react-router-dom';


const MenuItems = (props) => {
    const { name ,subMenus,iconClassName,onClick,to} = props;
    const[expand,setExpand] = useState(false);
  return (
    <li onClick={props.onClick}>
        <NavLink to={to} onClick={() => setExpand(!expand)} className="MenuItem">
            <div className='MenuIcon'>
            <i class={iconClassName}></i>
            </div>
            <span>{name}</span>
        </NavLink>
            {
            subMenus && subMenus.length > 0 ? (
                <ul className={`SubMenu ${expand ?  "active" : ""}`}>
                    {subMenus.map((menu, index) => (
                    <li key={index}> 
                        <NavLink to={menu.to}> 
                        {menu.name}
                        </NavLink>
                    </li>))}
                        
                </ul> 
                ): null
            }
    </li>
  )
}

export default MenuItems