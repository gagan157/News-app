import React, { useState } from 'react'
import CreateWcontext from './createWcontext'


export default function WeatherState(props) {
    let host = 'http://api.weatherapi.com/v1/current.json?key=25511df554c34746997162946222303';

    const [isweather,setWeather] = useState({sname:'',sdate:'',stz_id:'',stemp_c:'',stemp_f:"",swind_kph:'',swind_mph:'',sicon:'',sico_text:''})
    const [forcast,setForcast] = useState({})
    
    
    //get weather api 
    const searchcurrentdata = async(val)=>{       
        let url = `&q=${val}&aqi=yes`
        let newurl = `${host}${url}`
        const response =  await fetch(newurl)
        const jsons = await response.json()
        const location_name = jsons.location.name
        const location_date = jsons.location.localtime
        const location_tz_id = jsons.location.tz_id
        const current_condition_text = jsons.current.condition.text
        const current_condition_icon = jsons.current.condition.icon
        const current_temp_c = jsons.current.temp_c
        const current_temp_f = jsons.current.temp_f
        const current_wind_kph = jsons.current.wind_kph
        const current_wind_mph = jsons.current.wind_mph
        setWeather({sname:location_name,sdate:location_date,stz_id:location_tz_id,stemp_c:current_temp_c,stemp_f:current_temp_f,swind_kph:current_wind_kph,swind_mph:current_wind_mph,sicon:current_condition_icon,sico_text:current_condition_text})
    }

    //get forcast data
    const forcastdata = async()=>{
        const url = 'http://api.weatherapi.com/v1/forecast.json?key=25511df554c34746997162946222303 &q=new delhi&days=10&aqi=no&alerts=no'
        const response = await fetch(url);
        const json = await response.json();
        const locationf =  json.location
        const currentf =  json.current
        const forecastf =  json.forecast
        console.log(json)
        setForcast({locationf,currentf,forecastf})
    }




  return (
    <CreateWcontext.Provider value={{searchcurrentdata,isweather,forcastdata,forcast}}>
        {props.children}
    </CreateWcontext.Provider>
  )
}
