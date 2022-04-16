import {
    MdOutlineDashboard,
    MdOutlineAnalytics,
    MdOutlinedFlag,
    MdPeopleOutline,
    MdOutlineMessage,
    MdOutlineLogout,
    MdOutlineFlag,
} from "react-icons/md";
import { IoMdLogIn } from "react-icons/io";
import { FaReact, FaTimes } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { VscDashboard } from "react-icons/vsc";


export const getListSideBar = [
    {
        id : 1 ,
        url : "/" ,
        icon : <MdOutlineDashboard /> ,
        title : "Dashboard" ,
    },
    {
        id : 2 ,
        url : "/analytics" ,
        icon : <MdOutlineAnalytics /> ,
        title : "Analytics" ,
    },
    {
        id : 3 ,
        url : "/campaigns" ,
        icon : <MdOutlineFlag /> ,
        title : "Campaigns" ,
    },
    {
        id : 4 ,
        url : "/mess" ,
        icon : <MdOutlineMessage /> ,
        title : "Messages" ,
    },
    {
        id : 5 ,
        url : "/d" ,
        icon : <MdOutlineFlag /> ,
        title : "Campaigns" ,
    },
    {
        id : 6 ,
        url : "/m" ,
        icon : <MdOutlineMessage /> ,
        title : "Messages" ,
    },
    {
        id : 7 ,
        url : "/messages" ,
        icon : <MdOutlineMessage /> ,
        title : "Messages" ,
    },
]