import React, { Component } from 'react'



export default class Newsitems extends Component {
    // constructor(props){
    //     super(props)
    //     this.handlereadmore = this.handlereadmore.bind(this);
    // }
    handlereadmore = (e) => {
        let id = e.target.id        
        this.props.showdata(true ,id)
    }
    render() {    
        let {title,dec,image,url,source} = this.props    
        return (
            <>
                <div className="card mx-auto flex shadow-lg shadow-navbg flex-col lg:flex-row xl:flex-col w-[350px] xl:w-[350px] lg:w-auto h-auto box-border rounded-lg cursor-text transition-all overflow-hidden">
                    {image?<img className='w-[350px] lg:w-[40%] lg:h-auto xl:w-auto xl:h-[170px] h-[170px]  hover:scale-105 rounded-sm' src={image} alt="" srcSet="" />: <h1 className='bg-gray-300 h-[150px] flex justify-center items-center uppercase tracking-widest text-xl font-bold text-black/40'>no image</h1> }
                    <span className='absolute text-white bg-navhover px-2 rounded-lg font-serif'>{source}</span>
                    <div className="content flex flex-col gap-2 p-3">
                        <h1 className="title font-bold tracking-wide text-lg line-clamp-3">{title}</h1>
                        <p className="description text-justify inline-block relative leading-1 line-clamp-3">{dec}</p>

                        <button id={url} className='bg-navbg hover:bg-navhover py-1 rounded-md text-white' onClick={this.handlereadmore}>Read more</button>
                        
                    </div>
                </div>
            </>
        )
    }
}
