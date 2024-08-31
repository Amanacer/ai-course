import Image from 'next/image'
import React from 'react'
// import {  TiHomeOutline,HiOutlineSquare3Stack3D , FaShieldAlt, IoMdLogOut } from "react-icons/hi2";

function SideBar() {
    // const Menu=[
        

    //     {
    //         id:1,
    //         name : 'Home',
    //         icon:<TiHomeOutline />,
    //         path:'/dashboard'
    //     },

    //     {
    //         id:1,
    //         name : 'Explore',
    //         icon:<HiOutlineSquare3Stack3D />,
    //         path:'/dashboard'
    //     },

    //     {
    //         id:1,
    //         name : 'Upgrade',
    //         icon:<FaShieldAlt />,
    //         path:'/dashboard'
    //     },

    //     {
    //         id:1,
    //         name : 'Logout',
    //         icon:<IoMdLogOut />,
    //         path:'/dashboard'
    //     }
    // ]
  return (
    <div className='fixed h-full md:w-64 p-5 shadow-md'>
        <Image src={'/next.svg'} width={160} height={100}/>
        <hr className='my-5'/>

        {/* <ul>
            {Menu.map((item,index)=>(
                <div>
                    <div>
                        {item.icon}
                    </div>
                </div>
            ))}
        </ul> */}
    </div>
  )
}

export default SideBar