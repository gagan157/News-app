
import React, { Component } from 'react'


export default class Newsview extends Component {
  getdate =() =>{
    let dat =  this.props.publishedAt
    let  d = new Date(dat)
    return d.toUTCString()
  }
  handlebacktohome =()=>{
    this.props.backdata(false,undefined)
  }
  render() {
    return (
      <div className='w-9/12 mx-auto'>
        <button onClick={this.handlebacktohome} className='bg-navbg hover:bg-navhover rounded-lg text-white px-4 my-1'>Back</button>       
        
          <div className=''>
              <div className='relative group'>
                <img className='w-full rounded-md' src={this.props.img} alt="" />      
                <div className='absolute bottom-3 text-white text-center mx-10'>
                  <h1 className='text-3xl text-center tracking-widest'>{this.props.title}</h1>
                  <p className='text-justify'>{this.props.dec}</p>
                </div>
                <span className='absolute top-0 w-full bg-gradient-to-b from-navbg h-full rounded-md opacity-40 transition-all group-hover:opacity-0'></span>
              </div>
              <div className='flex justify-between font-semibold text-sm text-gray-700'>
                <div className='flex gap-1'>
                  <label htmlFor="">Published:</label>
                  <p>{this.getdate()}</p>
                </div>
                <div className='flex gap-1'>
                  <label htmlFor="">Author:</label>
                  <p>~{this.props.author}</p>
                </div>
              </div>
              <div className='text-lg my-5 leading-relaxed'>
               {this.props.content}
                <a target='_blank' className='underline text-navhover font-mono font-bold text-lg decoration-red-500' href={this.props.url}>Read More.</a>
              </div>
              

            </div> 
       
      </div>
    )
  }
}
