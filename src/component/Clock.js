import React, { useEffect, useState } from 'react';
function Clock(props) {
    const [time, setTime] = useState([]);

    useEffect(() => {
      console.log(props)
        var gmt = props?.gmt?parseInt(props?.gmt):7
        var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        var time = (today.getUTCHours()+gmt)+ ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date+' '+time;

        console.log(gmt)
    
        const intervalId = setInterval(() => {
          setTime(dateTime)
        }, 1000) // in milliseconds
        return () => clearInterval(intervalId)
      }, [time]);
    
  
    return (
       <div>
            {time}
       </div>
    );
}

export default Clock;