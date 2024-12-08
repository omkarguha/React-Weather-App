import React from 'react'
import { useState, useEffect } from 'react';
import { getWeatherDataForCity } from '../api';

function Box(props) {

    const [data, setData] = useState(null);

    useEffect(()=>{
        const fetchData= async()=>{
            const res= await getWeatherDataForCity(props.city);
            setData(res);
        }
        fetchData();
    },[]);
    
  return (
    <div className='box'>
        <img src={data?.current?.condition?.icon} alt="" srcset="" />
        <h3>{data?.current?.temp_c} °C</h3>
        <p>{data?.location?.name}, {data?.location?.region}</p>
    </div>
  )
}

export default Box;