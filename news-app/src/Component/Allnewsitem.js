import React, { memo ,useContext,useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faComment } from '@fortawesome/free-regular-svg-icons'
import {NewsContext} from './context/fetchnews/NewsState'

function Allnewsitem() {
    const context = useContext(NewsContext)
    const {fetchnews,newsdata} = context || []

    console.log(newsdata)
    
    return (
        <div className='w-full h-full flex flex-row flex-wrap justify-around py-5 gap-5'>
            <div className='carditem flex flex-col gap-3 max-w-sm my-5'>
                <div className='w-full h-full'>
                    <img className='object-cover w-full h-72' src="https://cdn.pixabay.com/photo/2019/04/18/19/41/animal-4137865_960_720.jpg" alt="" />
                </div>
                <div className='flex flex-col gap-1 text-justify'>
                    <h1 className='uppercase font-medium text-rose-800 text-lg'>catageory</h1>
                    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim autem optio perferendis facere dolorum accusantium cumque cupiditate eum veniam odit ab ex praesentium, sunt iure obcaecati neque vel, a excepturi.</h1>
                </div>
                <div className='flex items-center gap-5 text-rose-800'>
                    <div className='flex justify-center items-center gap-3 text-lg '>
                        <FontAwesomeIcon className='' icon={faThumbsUp} />
                        <h1 className=''>34</h1>
                    </div>
                    <div className='flex justify-center items-center gap-3 text-lg'>
                        <FontAwesomeIcon icon={faComment} />
                        <h1 className=''>5</h1>
                    </div>
                </div>
            </div>
            <div className='carditem flex flex-col gap-3 max-w-sm my-5'>
                <div className='w-full h-full'>
                    <img className='object-cover w-full h-72' src="https://cdn.pixabay.com/photo/2019/04/18/19/41/animal-4137865_960_720.jpg" alt="" />
                </div>
                <div className='flex flex-col gap-1 text-justify'>
                    <h1 className='uppercase font-medium text-rose-800 text-lg'>catageory</h1>
                    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim autem optio perferendis facere dolorum accusantium cumque cupiditate eum veniam odit ab ex praesentium, sunt iure obcaecati neque vel, a excepturi.</h1>
                </div>
                <div className='flex items-center gap-5 text-rose-800'>
                    <div className='flex justify-center items-center gap-3 text-lg '>
                        <FontAwesomeIcon className='' icon={faThumbsUp} />
                        <h1 className=''>34</h1>
                    </div>
                    <div className='flex justify-center items-center gap-3 text-lg'>
                        <FontAwesomeIcon icon={faComment} />
                        <h1 className=''>5</h1>
                    </div>
                </div>
            </div>
            <div className='carditem flex flex-col gap-3 max-w-sm my-5'>
                <div className='w-full h-full'>
                    <img className='object-cover w-full h-72' src="https://cdn.pixabay.com/photo/2019/04/18/19/41/animal-4137865_960_720.jpg" alt="" />
                </div>
                <div className='flex flex-col gap-1 text-justify'>
                    <h1 className='uppercase font-medium text-rose-800 text-lg'>catageory</h1>
                    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim autem optio perferendis facere dolorum accusantium cumque cupiditate eum veniam odit ab ex praesentium, sunt iure obcaecati neque vel, a excepturi.</h1>
                </div>
                <div className='flex items-center gap-5 text-rose-800'>
                    <div className='flex justify-center items-center gap-3 text-lg '>
                        <FontAwesomeIcon className='' icon={faThumbsUp} />
                        <h1 className=''>34</h1>
                    </div>
                    <div className='flex justify-center items-center gap-3 text-lg'>
                        <FontAwesomeIcon icon={faComment} />
                        <h1 className=''>5</h1>
                    </div>
                </div>
            </div>
            <div className='carditem flex flex-col gap-3 max-w-sm my-5'>
                <div className='w-full h-full'>
                    <img className='object-cover w-full h-72' src="https://cdn.pixabay.com/photo/2019/04/18/19/41/animal-4137865_960_720.jpg" alt="" />
                </div>
                <div className='flex flex-col gap-1 text-justify'>
                    <h1 className='uppercase font-medium text-rose-800 text-lg'>catageory</h1>
                    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim autem optio perferendis facere dolorum accusantium cumque cupiditate eum veniam odit ab ex praesentium, sunt iure obcaecati neque vel, a excepturi.</h1>
                </div>
                <div className='flex items-center gap-5 text-rose-800'>
                    <div className='flex justify-center items-center gap-3 text-lg '>
                        <FontAwesomeIcon className='' icon={faThumbsUp} />
                        <h1 className=''>34</h1>
                    </div>
                    <div className='flex justify-center items-center gap-3 text-lg'>
                        <FontAwesomeIcon icon={faComment} />
                        <h1 className=''>5</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default memo(Allnewsitem)