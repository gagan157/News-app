import React, { Component } from 'react'

export default class Loading extends Component {
    render() {
        return (
            <div className="absolute top-2/4 left-2/4 bg-transparent border-2 w-52 h-52 rounded-full text-center leading-[190px] tracking-widest font-serif uppercase text-xl text-navbg   
      before:content=[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:border-navbg before:border-t-4 before:border-r-4 before:rounded-full before:animate-spin before:shadow-lg before:shadow-navbg
      ">
                Loading
                <span className="absolute bg-transparent w-1/2 h-1 top-1/2 left-0
          origin-right animate-spin 
          before:content='' before:absolute before:w-6 before:h-6 before:bg-navbg before:-top-3 before:-left-3 before:rounded-full before:shadow-md before:shadow-navbg
          "></span>
            </div>
        )
    }
}
