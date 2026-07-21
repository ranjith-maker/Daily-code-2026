
import {

LuLayoutDashboard,
LuUsers,
LuClipboardCheck,
LuSquarePlus,
LuLogOut

} from 'react-icons/lu'


export const SIDE_MENU_DATA = [

{
id: '01',
label: 'Dashboard',
icon: LuLayoutDashboard,
path: '/admin/dashboard'
},


{
id: '02',
label: 'Manage Tasks',
icon: LuClipboardCheck,
path: '/admin/tasks'
},


{
id: '03',
label: 'Create Tasks',
icon: LuSquarePlus,
path: '/admin/create-task'
},


{
id: '04',
label: 'Team Members',
icon: LuUsers,
path: '/admin/users'
},


{
id: '05',
label: 'Logout',
icon: LuLogOut,
path: '/logout'
}

]


export const SIDE_MENU_USER_DATA = [

{
id:  '01',
label : 'Dashboard',
icon : LuLayoutDashboard,
path : '/user/dashboard'
},

{
id:  '02',
label : 'My Tasks',
icon : LuClipboardCheck,
path : '/user/tasks'
},

{
id:  '05',
label: 'Logout',
icon: LuLogOut,
path: '/logout'
},

]





export const PRIORITY_DATA = [

{label : 'Low', value : 'low' },
{label : 'Medium' , value  : 'medium'},
{label : 'High' , value : 'high'  }

]



export const STATUS_DATA = [

{ label : 'Pending', value : 'pending' },
{ label : 'In Progress' , value : 'inprogress'},
{label : 'Completed' , value : 'completed'  }

]








export default function Input({
  type,
  value,
  onChange,
  label,
  placeholder,
  name,
}) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <label className="text-lg text-center text-white">
        {label}
      </label>

      <div className="input-box">
        <input
          name={name}
          type={
            type === 'password' ? showPassword ? "text" : "password" : type }
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full bg-transparent text-center outline-none text-lg "
        />

        {type === 'password' &&
          (showPassword ? (
            <FaRegEye
              size={22}
              onClick={() => setShowPassword(false)}
              className="text-primary cursor-pointer"
            />
          ) : (
            <FaRegEyeSlash
              size={22}
              onClick={() => setShowPassword(true)}
              className="text-black/55 cursor-pointer"
            />
          ))}
      </div>
    </div>
  );
}


import React, { useEffect, useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaYoutube } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { setMenuOpen } from '../utils/store/appSlice';
import { YOUTUBE_SEARCH } from '../utils/contant';


export default function Header() {

const dispatch = useDispatch()

const [searchInp, setSearchInp ] = useState('')

// console.log(searchInp);

//if the diff between 2 api call is less than 200ms then decline the api call 


async function getSuggestions() {
    
const response = await fetch(YOUTUBE_SEARCH+searchInp)
const data = response.json()
console.log(data);
}

useEffect(()=>{

    const timer = setTimeout(() => {
        console.log('called now');
        
     getSuggestions()     
    }, 2000);

    return ()=>{
        clearTimeout(timer)
    }

},[searchInp])

    return (

    <div className=' bg-white h-20 w-full  grid grid-flow-col items-center shadow-lg shadow-black  rounded-b-xl text-black py-2 px-5' >
   
    <div className=' flex gap-5 col-span-3  items-center  ' >    
       <GiHamburgerMenu 
       onClick={()=> dispatch(setMenuOpen()) }
       size={30} 
       className='cursor-pointer'
       /> 
       <FaYoutube  size={30}  className='text-red-700'  />
       <p className='text-xl font-semibold ' >Youtube</p> 
    </div>

   <div className=' flex  col-span-8 ' >
    <input type="text"
    value={searchInp}
    onChange={({target})=> setSearchInp(target.value)  }

    className='w-1/2 h-10  outline-none border-2 border-black rounded-l-xl text-center text-lg font-medium '
    />
    <button className='bg-black px-5 py-2 text-white rounded-r-xl   active:scale-95 cursor-pointer                         ' >
        Search
    </button>

    </div>         
            
   <div className='col-span-1  ' >    
    
    <img src="https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png" alt="" 
    className=' w-14 h-14 '
    
    />

    </div>


    </div>

    )

}


