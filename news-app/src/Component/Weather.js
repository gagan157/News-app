import React, { useEffect, useState } from 'react'
import createwcontext from './context/weather/createWcontext'
import { useContext } from 'react'


export default function Weather(props) {
  const context = useContext(createwcontext)
  const { searchcurrentdata, isweather,forcastdata,forcast} = context
  const { sname, sdate, stz_id, stemp_c, stemp_f, swind_kph, swind_mph, sicon, sico_text } = isweather
  const {locationf,currentf} = forcast
  const {name,tz_id,localtime} = locationf || {}
  const {temp_c,wind_kph,condition} = currentf || {}
  const {text,icon} = condition || {}
  const [serachval, setSearchval] = useState('')

  const onchange = (e) => {
    setSearchval(e.target.name = e.target.value)
  }

  const handleserch = () => {
    if (serachval) {
      searchcurrentdata(serachval)
    }
    else {
      console.log('this filed required')
    }
  }
  useEffect(() => {
    forcastdata()
  },[])
  
  return (
    <>
      <div style={{ backgroundImage: "url('https://cdn.pixabay.com/photo/2015/07/05/10/18/tree-832079_960_720.jpg')" }} className='bg-cover bg-no-repeat bg-center w-full h-screen bg-fixed'>
        <div className='flex flex-col justify-around items-center my-auto w-full h-full mx-auto filter backdrop-brightness-50 gap-5'>
          <div className='w-1/3 -mt-20 text-center relative overflow-hidden shadow-md shadow-black rounded-md '>
            <input onChange={onchange} className='w-full h-10 rounded-lg  outline-none text-lg px-2 border-2' type="text" name="" id="" value={serachval} placeholder='Enter City' />
            <button onClick={handleserch} type='button' className='absolute bg-navbg right-0 h-full w-20 text-white '>Search</button>
          </div>
          <div className='w-2/5 -mt-20 bg-white bg-opacity-30 filter text-white backdrop-blur-lg  min-h-1/2 shadow-lg shadow-navbg rounded-md p-5'>
            <div className='flex justify-between items-center'>
              <h1 className='text-2xl font-semibold capitalize'>{sname?sname:name}</h1>
              <h1>{sdate?sdate:localtime}</h1>
            </div>
            <div className='flex flex-col justify-center items-center my-10'>
              <h1 className='text-6xl font-extrabold'>{stemp_c?stemp_c:temp_c}°C</h1>
              <div className='flex items-center'>
              <img src={sicon?sicon:icon} alt="" />
              <p className='capitalize text-lg tracking-widest'>{sico_text?sico_text:text}</p>
              </div>
            </div>
            <div className='flex justify-between'>
              <div className='flex '>
                <h1 className='text-sm font-semibold capitalize'>wind: {swind_kph?swind_kph:wind_kph} km/h</h1>                
              </div>
              <h1>{stz_id?stz_id:tz_id}</h1>
            </div>
          </div>
        </div>
      </div>
       
    </>
  )
}
