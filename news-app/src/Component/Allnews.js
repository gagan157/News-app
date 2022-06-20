// ---------------Functionbase Component----------------------------------
//---------------Not work ---------------------------------------
import React, { useState, useEffect } from 'react'
import Allnewsitem from './Allnewsitem';


function Allnews(props) {
    let [articles, setArticles] = useState([]);
    let [category, setCategory] = useState([]);
    let [rndmurls, setRndmurls] = useState([])




    let getdata = async (urls) => {
        let dataurls = urls
        // console.log('getdata running',dataurls)
        let allartical = []
        for (let url of dataurls) {
            // console.log('url' , url)
            let data = await fetch(url)
            let parsedata = await data.json()
            let len = await parsedata.articles.length
            let rnd = Math.floor(Math.random() * len)
            // setArticles(articles => [...articles,onearticless])

            if (parsedata.articles[rnd].author !== null && parsedata.articles[rnd].title !== null && parsedata.articles[rnd].urlToImage !== null) {
                let onearticless = await parsedata.articles[rnd]
                allartical.push(onearticless)

            }
            else {
                let onearticless = await parsedata.articles[rnd + 1]
                allartical.push(onearticless)
            }
        }
        setArticles(allartical)


    }
    let getrandomcat = () => {
        // console.log('cat fun render')
        let newcatlist = [];
        while (newcatlist.length < 4) {
            let cat = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology']
            let rand = Math.floor(Math.random() * cat.length)
            if (!newcatlist.includes(cat[rand])) {
                newcatlist.push(cat[rand])
            }
        }
        setCategory(newcatlist)
    }


    const getnewsapi = (cat) => {
        // console.log('getnewspi running')
        let lis = cat
        let get4url = []
        for (let catgory of lis) {
            get4url.push(`https:newsapi.org/v2/top-headlines?country=in&category=${catgory}&apiKey=${props.apikey}`)
        }
        setRndmurls(get4url);
    }


    useEffect(() => {
        getrandomcat()
    }, [])

    useEffect(() => {
        if (category.length > 0) {
            getnewsapi(category)
        }
    }, [category])

    useEffect(() => {
        if (rndmurls.length > 0) {
            getdata(rndmurls)
        }
    }, [rndmurls])

    console.log('allnews render')

    return (
        <>

            <div className='flex flex-col justify-center items-center mx-[10%]'>
                <div className='flex justify-between w-full items-center my-5'>
                    <h1 className='text-2xl capitalize font-semibold'>Trending now</h1>
                    <div className='w-1/4 text-right relative'>
                        <input className='border-2 w-full rounded-full p-2 outline-none focus:ring-offset-2 focus:ring-2 px-4 focus:ring-navhover' type="search" name="" id="" placeholder='Search' />
                        <span className='absolute text-2xl right-10 bottom-1 cursor-pointer text-gray-400'><ion-icon name="search-outline"></ion-icon></span>
                    </div>
                </div>


                <div className='grid grid-rows-1 grid-cols-2 w-full gap-1 my-2 h-[500px]'>
                    {/* -----------------------------------Left side------------------------------------------- */}
                    <div className='relative bg-slate-500'>
                        {articles.length > 0 && articles.map((item, index) => index === 0 ?
                            <div key={index} className='h-full'>
                                <div className='h-full relative'>
                                    <div className='w-full h-full absolute top-0 bg-black/30'></div>
                                    {item.urlToImage?<img className='h-full w-full object-cover' src={item.urlToImage}
                                     alt="" />: <h1>NoImage</h1> }
                                </div>
                                <div className='absolute bottom-0 text-white w-full pl-10 mb-5'>
                                    <button className='p-1 ring-2 ring-white my-1 capitalize'>{category[0]}</button>
                                    <h1 className='text-3xl my-2'>{item.title}</h1>
                                    <small className='text-sm text-center my-5'>{item.author}</small>
                                </div>
                            </div>

                            : null)}
                    </div>
                    {/* -----------------------------------right side------------------------------------------- */}
                    <div className='grid grid-rows-2 gap-1'>

                        <div className='relative bg-slate-500'>
                            {articles.length > 0 && articles.map((item, index) => index === 1 ?
                                <div key={index} className='h-full'>
                                    <div className='relative h-full'>
                                        <div className='w-full h-full absolute top-0 bg-black/30'></div>
                                        <img className='w-full h-full object-cover' src={item.urlToImage} alt="" />
                                    </div>
                                    <div className='absolute bottom-0 text-white w-full pl-10 mb-5'>
                                        <button className='p-1 ring-2 ring-white my-1 capitalize'>{category[1]}</button>
                                        <h1 className='text-2xl my-2'>{item.title}</h1>
                                    </div>
                                </div>
                                : null)}
                        </div>
                        <div className='grid grid-cols-2 gap-1 '>
                            <div className='relative bg-slate-500 h-full'>
                                {articles.length > 0 && articles.map((item, index) => index === 2 ?
                                    <div key={index} className='h-full'>
                                        <div className='h-full relative'>
                                            <div className='w-full h-full absolute top-0 bg-black/30'></div>
                                            <img className='w-full h-full object-cover' src={item.urlToImage} alt="" srcSet="" />
                                        </div>

                                        <div className='absolute bottom-0 text-white w-full pl-10 mb-3'>
                                            <button className='p-1 ring-2 ring-white my-1 capitalize'>{category[2]}</button>
                                            <h1 className='text-lg my-1'>{item.title}</h1>
                                        </div>
                                    </div>
                                    : null)}
                            </div>
                            <div className='relative bg-slate-500'>
                                {articles.length > 0 && articles.map((item, index) => index === 3 ?
                                    <div key={index} className='h-full'>
                                        <div className='h-full relative'>
                                            <div className='w-full h-full absolute top-0 bg-black/30'></div>
                                            <img className='w-full h-full object-cover' src={item.urlToImage} alt="" srcSet="" />
                                        </div>
                                        <div className='absolute bottom-0 text-white w-full pl-10 mb-3'>
                                            <button className='p-1 ring-2 ring-white my-1 capitalize'>{category[3]}</button>
                                            <h1 className='text-lg my-1'>{item.title}</h1>
                                        </div>
                                    </div>
                                    : null)}
                            </div>
                        </div>
                    </div>
                </div>


                <div className='grid grid-rows-1 grid-cols-4 w-full gap-10 my-10 h-full'>
                    {/* ---------------------------------left------------------------------------------------------ */}
                    <div className='w-full col-span-3'>
                        <div className='w-full border-b-4 border-l-4 border-l-navbg flex gap-5 items-center border-navhover justify-between pr-6'>
                            <h1 className='text-lg bg-navhover p-2 text-white'>Don't Miss</h1>
                            <ul className='flex gap-10 capitalize flex-wrap'>
                                <li>business</li>
                                <li>entertainment</li>
                                <li>general</li>
                                <li>health</li>
                                <li>science</li>
                                <li>More</li>
                            </ul>
                        </div>
                        <div className='w-full'>
                            <Allnewsitem/>
                        </div>

                    </div>
                    {/* ----------------------------------right--------------------------------------------------- */}
                    <div className='w-full col-span-1'>
                        <div className='w-full border-b-4 flex '>
                            <h1 className='bg-navbg1 p-2 text-lg text-white capitalize'>stay Connected</h1>
                        </div>
                        <div className='w-full p-5'>
                            <ul className='flex flex-col gap-3 capitalize '>
                                <li>
                                    <div className='flex justify-between items-center flex-wrap'>
                                        <div className='flex items-center gap-3'>
                                            <span className='bg-blue-600 text-white px-1 rounded-md'><ion-icon name="logo-facebook"></ion-icon></span>
                                            <h1>Facebook</h1>
                                        </div>
                                        <h1>like</h1>
                                    </div>
                                </li>
                                <li>
                                    <div className='flex justify-between items-center flex-wrap'>
                                        <div className='flex items-center gap-3'>
                                            <span className='text-white bg-blue-500 rounded-md px-1'><ion-icon name="logo-twitter"></ion-icon></span>
                                            <h1>twitter</h1>
                                        </div>
                                        <h1>twite</h1>
                                    </div>
                                </li>
                                <li>
                                    <div className='flex justify-between items-center flex-wrap'>
                                        <div className='flex justify-center items-center gap-3'>
                                            <span className='bg-gradient-to-t from-pink-600 to-red-400 text-white rounded-md px-1'><ion-icon name="logo-instagram"></ion-icon></span>
                                            <h1>instagram</h1>
                                        </div>
                                        <h1>Follow</h1>
                                    </div>
                                </li>
                                <li>
                                    <div className='flex justify-between items-center flex-wrap'>
                                        <div className='flex justify-center items-center gap-3'>
                                            <span className='bg-red-600 text-white rounded-md px-1'><ion-icon name="logo-youtube"></ion-icon></span>
                                            <h1>youtube</h1>
                                        </div>
                                        <h1>Subscibe</h1>
                                    </div>
                                </li>

                            </ul>
                        </div>
                        <div className="mt-5 h-fit bg-slate-50">
                            <div className='filter flex bg-slate-200 justify-between items-center px-1'>
                                <h1 className='uppercase  text-xl font-bold'>filter</h1>
                                <h1 className='underline capitalize text-sm cursor-pointer'>clear all</h1>
                            </div>
                            <div className="date my-2 p-2 flex flex-col gap-1 border-b-2">
                                <h1 className='text-lg text-center font-semibold'>Date</h1>
                                <div className='flex items-center justify-around flex-wrap'>
                                    <label htmlFor="">From:</label>
                                    <input className='rounded-lg p-2' type="date" name="" id="" />
                                </div>
                                <div className='flex items-center justify-around flex-wrap'>
                                    <label htmlFor="">To:</label>
                                    <input className='rounded-lg p-2' type="date" name="" id="" />
                                </div>
                            </div>
                            <div className="language border-b-2 p-2">
                                <h1 className='text-lg text-center font-semibold'>language</h1>
                                <div className='flex p-3 flex-wrap gap-3 capitalize'>
                                    <option className='border-2 rounded-md p-1 cursor-pointer' value="en">en</option>
                                    <option className='border-2 rounded-md p-1 cursor-pointer' value="ar">ar</option>
                                    <option className='border-2 rounded-md p-1 cursor-pointer' value="de">de</option>
                                    <option className='border-2 rounded-md p-1 cursor-pointer' value="es">es</option>
                                    <option className='border-2 rounded-md p-1 cursor-pointer' value="he">he</option>
                                    <option className='border-2 rounded-md p-1 cursor-pointer' value="it">it</option>
                                    <option className='border-2 rounded-md p-1 cursor-pointer' value="nl">nl</option>
                                    <option className='border-2 rounded-md p-1 cursor-pointer' value="no">no</option>
                                    <option className='border-2 rounded-md p-1 cursor-pointer' value="pt">pt</option>
                                    <option className='border-2 rounded-md p-1 cursor-pointer' value="ru">ru</option>
                                    <option className='border-2 rounded-md p-1 cursor-pointer' value="se">se</option>
                                    <option className='border-2 rounded-md p-1 cursor-pointer' value="ud">ud</option>
                                    <option className='border-2 rounded-md p-1 cursor-pointer' value="zh">zh</option>
                                </div>
                            </div>
                            <div className='shorby border-b-2 p2 pb-2 pt-2'>
                                <h1 className='text-lg text-center font-semibold'>sortBy</h1>
                                <div className='capitalize flex gap-2 p-3 flex-col'>
                                    <option className='border-2 rounded-md p-1 tracking-widest text-center cursor-pointer hover:bg-slate-100' value="relevancy">relevancy</option>
                                    <option className='border-2 rounded-md p-1 tracking-widest text-center cursor-pointer hover:bg-slate-100' value="popularity">popularity</option>
                                    <option className='border-2 rounded-md p-1 tracking-widest text-center cursor-pointer hover:bg-slate-100' value="publishedAt">publishedAt</option>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Allnews







