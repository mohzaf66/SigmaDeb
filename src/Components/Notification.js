import ".././App.css"
import { useState } from "react";

const Notification = () => {
    const[isHidden, setIsHidden] = useState(false)
    const handleClick=()=>{
       setTimeout(() =>{
           setIsHidden(true)
       },800)
    }
    return ( 
    <>
           { !isHidden &&
               
               <div className="notification">
                   <marquee>This is a beta version of the application and is not fully functional. stable version is coming soon you can sign up for getting the notification of stable version release of application.</marquee>
               <button onClick={handleClick}>X</button>
               </div>
            } 
            </>
     );
}
 
export default Notification;