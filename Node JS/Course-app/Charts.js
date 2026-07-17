
export default function CustomBarChart({data}) {
  
   const getBarColor = (entry) =>{
      switch(entry?.priority?.toLowerCase()){
        case 'low':
            return '#00BC7D'
        case 'medium':
            return '#FFA500'          
        case 'high':
            return '#FF1F57'
        default :
          return '#00BC7D'    
      }
}

const CustomToolTip = ({active , payload}) =>{

if(active && payload && payload.length ){
    return (
        <div className='bg-white shadow-md rounded-lg p-2 border border-gray-300 ' >
            <p className='text-xs font-semibold text-purple-800 mb-1 ' >
            {payload[0].payload.priority}
            </p>
            <p className='text-sm text-gray-600 ' >
              Count:{' '}
              <span className='text-sm font-medium text-gray-900  ' >  {payload[0].payload.count}  </span>
            </p>
        </div>
  
)}

return null
}
  

    return (

        <div className='bg-white  mt-6   ' >
            <ResponsiveContainer width='100%'  height={300}>
                <BarChart data={data} >
                <CartesianGrid stroke='none'  />
                <XAxis
                dataKey='priority'
                tick={{ fontSize:12, fill: '#555' }}
                stroke='none'
                />
                <YAxis     tick={{ fontSize:12, fill: '#555' }}  stroke='none' />
                <Tooltip content={CustomToolTip} cursor={{fill : 'transparent'}} />
                <Bar
                dataKey='count'   nameKey='priority'
                fill='#FF8042' radius={[10,10,10,10]}
                activeDot={{r:8 , fill :'yellow'}}
                activeStyle={{ fill : 'green' }}
                >
                    {data.map((entry, index)=>(
                        <Cell key={index}  fill={getBarColor(entry)}/>
                         
                    ))}

                </Bar>
                </BarChart>
            </ResponsiveContainer>

        </div>

    )
}
import React from 'react'
import {HiOutlineXMark} from 'react-icons/hi2'


export default function Modal({children,title, isOpen,onClose,hideHeader}) {
 
   if(!isOpen) return null

    return (
 <div className='fixed inset-0 z-50 flex justify-center items-center bg-black/40 w-full h-full    ' >
    {/* Modal content */}
         <div className={`relative flex flex-col rounded-lg bg-white  overflow-hidden `} >
                 {/* Modal Header */}
         {!hideHeader && (
            <div className='  flex items-center justify-between p-4 border-b border-gray-200         ' >
                <h3 className='md:text-lg font-medium text-gray-900 ' > {title} </h3>
            </div>

         ) }
        <button 
        onClick={onClose}
        className=' flex justify-center items-center absolute  top-3.5 right-3.5 cursor-pointer text-gray-400 bg-transparent hover:bg-orange-100 hover:text-gray-900 rounded-lg text-sm w-8 h-9           '
        type='button'
        >
          <HiOutlineXMark className="w-6 h-6    " />  

        </button>
        {/* Modal body scrollable */}
         <div className='' >
                  {children}         
          </div>
          
         </div>
 </div>
        
 
    )

}

