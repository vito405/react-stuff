import { useState } from "react";
import MenuList from "./menu-list";
import {FaArrowDown, FaArrowUp} from 'react-icons/fa'


export default function MenuItem({item}){

    const [currentChildren, setCurrentChildren] = useState({})


    function handleToggleChildren(getCurrentId){
        setCurrentChildren({
            ...currentChildren,
            [getCurrentId] : !currentChildren[getCurrentId]
        })
    }

    return<li >
        <div className="menu-item"> 
        <p>{item.title}</p>
        {
            item && item.children && item.children.length 
            ? <span onClick={() =>handleToggleChildren(item.id)}>
                {currentChildren[item.id] ? <FaArrowUp size={25} color="white"/> : <FaArrowDown size={25} color="white"/>}
            </span>
            : null

        }
        </div>
        {
            item && item.children && item.children.length > 0 && currentChildren[item.id]
            ? <MenuList list={item.children}/> 
            : null
        }
    </li>
}