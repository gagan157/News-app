import React, { useEffect, useState } from 'react'
import { createContext } from 'react'

export const NewsContext = createContext();
const host ='https://newsapi.org/v2/top-headlines?'
const api_key = process.env.REACT_APP_NEWS_API
function NewsState(props) {
    const [newsdata,setNewdata] = useState([])
    const url = `${host}country=in&category=general&apiKey=${api_key}&page=1&pageSize=10`

    const fetchnews = async()=>{
        const response = await fetch(url)
        const data = await response.json()
         setNewdata(data.articles)
    }
    useEffect(()=>{
        fetchnews()
    },[])
  return (
    <NewsContext.Provider value={newsdata}>
        {props.children}
    </NewsContext.Provider>
  )
}

export default NewsState