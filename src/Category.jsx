import { MdBorderAll } from "react-icons/md";
import { MdFreeBreakfast } from "react-icons/md";
import { MdSoupKitchen } from "react-icons/md";
import { GiNoodles } from "react-icons/gi";
import { CiForkAndKnife } from "react-icons/ci";
import { FaPizzaSlice } from "react-icons/fa";
import { GiHamburger } from "react-icons/gi";

export const categories=[
    {
        id:1,
        name:"All",
        icon:<MdBorderAll className="text-green-600 w-10 h-10"/>
    },
    {
        id:2,
        name:"Breakfast",
        icon:<MdFreeBreakfast className="text-green-600 w-10 h-10" />
    },
    {
        id:3,
        name:"Soup",
        icon:<MdSoupKitchen className="text-green-600 w-10 h-10" />
    },
    {
        id:4,
        name:"Pasta",
        icon:<GiNoodles className="text-green-600 w-10 h-10" />
    },
    {
        id:5,
        name:"Main_course",
        icon:<CiForkAndKnife className="text-green-600 w-10 h-10" />
    },
    {
        id:6,
        name:"Pizza",
        icon:<FaPizzaSlice className="text-green-600 w-10 h-10" />
    },
    {
        id:7,
        name:"Burger",
        icon:<GiHamburger className="text-green-600 w-10 h-10" />
    }
    
]


export default categories