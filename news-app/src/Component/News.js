import React, { Component } from 'react'
import Newsitems from './Newsitems'
import Loading from './Loading'
import './Style/Navbar.css'
import Newsview from './Newsview'
import { Link, useMatch } from 'react-router-dom'



class news extends Component {
  constructor(props) {
    super(props)
    this.state = {
      articles: [],
      totalitem: 0,
      page: 1,
      pageSize: 10,
      category: 'general',
      country: 'in',
      sortBy: 'publishedAt',
      language: 'en',
      Loading: false,
      isShow: false,
      uniqekey: null,
      
    }
  }
 
  cate = ['general','business','entertainment','health','science','sports','technology'];
  //fetch news data using function and mount
  async componentDidMount() {
    this.handelurl();

  }
  //function given argument with default parameters this function fetch data
  handelurl = (page = this.state.page, pagesize = this.state.pageSize, category = this.state.category) => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.state.country}&category=${category}&apiKey=${this.props.apikey}&page=${page}&pageSize=${pagesize}`
    this.props.setprog(10)
    this.fetchurl(url)
  }
  fetchurl = async (url) => {
    this.setState({ Loading: true })
    this.props.setprog(30)
    let data = await fetch(url)
    if (data.status !== 429) {
      this.props.setprog(60)
      let parsedata = await data.json()
      this.props.setprog(100)
      this.setState({ articles: parsedata.articles, totalitem: parsedata['totalResults'], Loading: false })
    }
    else {
      console.log("Url Request Limit Finished Come back 12 hour or 24 hour")
    }
  }

  // this function work go to previes page
  handleprev = () => {
    let prevactiveno = this.state.page - 1
    this.handleactivepagination('btn' + prevactiveno);
    this.handelurl(this.state.page - 1)
    this.setState({ Loading: true })
    this.setState({ page: this.state.page - 1 })
  }
  //this function work go to Nex page
  handlenext = () => {
    let nextactiveno = this.state.page + 1
    this.handleactivepagination('btn' + nextactiveno);
    this.handelurl(this.state.page + 1)
    this.setState({ Loading: true })
    this.setState({ page: this.state.page + 1 })
  }

  //this function return pagination buttons
  totalbtn = () => {
    //math.ceil ---total number of news data(news lenght) divided by total number of visible news(1 page mein kitne news(data) dikana hai)
    let totalnum = Math.ceil(this.state.totalitem / this.state.pageSize)
    let btnno = []
    for (var i = 1; i <= totalnum; i++) {
      btnno.push(i)
    }
    return btnno.map((item, index) => { return index === 0 ? <button key={item} id={`${'btn' + item}`} className={`pagination text-white px-4 py-2 rounded-md hover:bg-navhover activepagi bg-navbg`} onClick={this.handlepageno}>{item}</button> : <button key={item} id={`${'btn' + item}`} className={`pagination text-white px-4 py-2 rounded-md hover:bg-navhover bg-navbg`} onClick={this.handlepageno}>{item}</button> })
  }

  //handle to going to page no 
  handlepageno = (e) => {
    let id = e.target.id
    this.handleactivepagination(id);
    let idslice = parseInt(id.slice(3))
    this.handelurl(idslice);
    this.setState({ Loading: true })
    this.setState({ page: idslice })
  }

  //this function is active add or remove pagination
  handleactivepagination = (id) => {
    let allbtn = document.getElementsByClassName('pagination')
    Array.from(allbtn).forEach(element => {
      element.classList.remove('activepagi')
    });
    document.getElementById(id).classList.add('activepagi')

  }

  //this function update to 1 page mein kitni news dikhani hai 
  handlepagesize = (e) => {
    let getpagesize = e.target.value;
    if (getpagesize !== "") {
      this.handelurl(undefined, getpagesize);
      this.setState({ pageSize: getpagesize })
    }
  }

  handlenewscatg = (e) => {
    let val = e.target.value;
    document.getElementById('textcategory').innerText = val;
    this.handelurl(undefined, undefined, val);
    this.setState({ category: val });
  }
  hadndleshow = (item, id) => {
    this.setState({ isShow: item, uniqekey: id })
  }
  
  render() {

    return (
      <>
       
        {!this.state.isShow && <div className='container relative mb-5 mx-auto sm:mx-auto'>
          {this.state.Loading && <Loading />}
          <h1 className="capitalize font-serif text-center relative font-bold text-5xl my-10 tracking-wide z-[50]
        before:content-[''] before:absolute before:-top-1 before:w-20 before:bg-navhover before:h-2  
        before:rounded-tl-md before:rounded-bl-md "><span className='relative'>top heading</span></h1>
          <small id='textcategory' className='absolute top-10 text-center text-lg tracking-[4px] ml-[47%] w-[13%] font-mono text-navbg font-extrabold before:content:"" before:absolute before:w-full before:h-8 before:-z-10 before:top-0 before:left-0 text-white before:border-l-8 before:border-navbg before:bg-gradient-to-b before:from-navhover uppercase'>{this.state.category}</small>
          {/* -------------------------------------------------DropDown---------------------------------------- */}
          <div className='mx-7 my-7 relative flex justify-between'>
            <div className="dropdown relative group z-50 ">
              <button className='bg-gray-200 p-2 px-4 rounded-lg capitalize cursor-default'>page size</button>
              <span className='absolute bg-red-400 rounded-xl px-2 text-white -top-3 -right-3'>{this.state.pageSize}</span>
              <div className="dropdown-content rounded-md bg-gray-100 shadow-lg absolute w-full opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500">
                <option onClick={this.handlepagesize} className='cursor-pointer hover:bg-gray-200 p-1 hover:rounded-t-md hover:shadow-lg hover:font-bold border-b-2' value="10">10</option>
                <option onClick={this.handlepagesize} className='cursor-pointer hover:bg-gray-200 p-1 hover:shadow-lg hover:font-bold border-b-2' value="20">20</option>
                <option onClick={this.handlepagesize} className='cursor-pointer hover:bg-gray-200 p-1 hover:shadow-lg hover:font-bold border-b-2' value="50">50</option>
                <option onClick={this.handlepagesize} className='cursor-pointer hover:bg-gray-200 p-1 hover:rounded-b-md hover:shadow-lg hover:font-bold ' value="100">100</option>
              </div>
            </div>
            <div className="dropdown relative group z-50">
              <button className='bg-gray-200 p-2 px-4 rounded-lg capitalize cursor-default'>Category</button>
              <div className="dropdown-content rounded-md bg-gray-100 shadow-lg absolute w-[150px] top-10 right-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 text-center uppercase ">
                {this.cate.map((cat,index)=> 
                 <option key={index} onClick={this.handlenewscatg} className='cursor-pointer hover:bg-gray-200 py-2 hover:rounded-t-md hover:shadow-lg hover:font-bold border-b-2'>{cat}</option>
                  )}
                {/* <option onClick={this.handlenewscatg} className='cursor-pointer hover:bg-gray-200 py-2 hover:rounded-t-md hover:shadow-lg hover:font-bold border-b-2' value="business">business</option>
                 */}
              </div>
            </div>

          </div>

          {/* -----------------------------------------Main-------------------------------- */}
          <div className="mx-auto grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 transition-all">
            {!this.state.Loading && this.state.articles.map((element) => {
              return <div key={element.url}>
                <Newsitems title={element.title} dec={element.description} image={element.urlToImage} url={element.url} source={element.source.name} showdata={this.hadndleshow} />
              </div>
            })}
          </div>


          {!this.state.Loading && <div className="button flex justify-between items-center p-5 gap-1">
            <button disabled={this.state.page <= 1} onClick={this.handleprev} className='bg-navbg text-white p-3 rounded-md hover:bg-navhover disabled:opacity-40 disabled:hover:bg-navbg'>&larr; Prev</button>
            <div className='btnno flex justify-center items-center gap-5'>
              {this.totalbtn()}
            </div>
            <button disabled={this.state.page >= Math.ceil(this.state.totalitem / this.state.pageSize)} onClick={this.handlenext} className='bg-navbg text-white p-3 rounded-md hover:bg-navhover
            disabled:opacity-40 disabled:hover:bg-navbg'>Next &rarr;</button>
          </div>}

        </div>}
        {this.state.isShow && this.state.articles.map((element) => {
          return element.url === this.state.uniqekey ?
            <Newsview backdata={this.hadndleshow} title={element.title} img={element.urlToImage} url={element.url} dec={element.description} publishedAt={element.publishedAt} content={element.content} author={element.author} />

            : null
        })}


      </>
    )
  }
}

export default news;