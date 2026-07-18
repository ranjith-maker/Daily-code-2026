
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


