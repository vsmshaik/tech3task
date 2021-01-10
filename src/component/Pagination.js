import React,{useState,useEffect} from 'react';
import { Button, Tooltip } from 'antd';

const Pagination = ({showPerPage,onPaginationChange,total}) => {
    const[counter , setCounter] = useState(1);
    useEffect(() => {
        const value = showPerPage*counter;
        console.log("start", value-showPerPage);
        console.log("end", value);
        onPaginationChange(value-showPerPage , value);
    } , [counter]);

    const onButtonClick = (type) =>{
        if(type === "prev"){
            if(counter === 1){
                setCounter(1)
            }else{
                setCounter(counter-1)
            }
        }else if(type === "next"){
            if(Math.ceil(total/showPerPage) === counter){
                setCounter(counter);
            }else{
                setCounter(counter+1);
            }
        }

    }
    return (
        <div style={{justifyContent:"space-between",display:'flex'}}>
            <Button type="primary" shape="circle" onClick={() => onButtonClick("prev")}>
     Prev
    </Button>
    <Button type="primary" shape="circle" onClick={() => onButtonClick("next")}>
      Next
    </Button>
        </div>
    )
}

export default Pagination
