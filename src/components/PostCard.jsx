import React from 'react'
import appwriteService from "../appwrite/config"
import {Link} from 'react-router-dom'

function PostCard({$id, title, featuredImage}) {
    
  return (
    <Link to={`/post/${$id}`}>
        <div className='w-full bg-gray-100 rounded-xl p-4 shadow-md shadow-slate-400'>
            <div className='w-full  justify-center mb-4 overflow-hidden'>
                <img src={appwriteService.getFilePreview(featuredImage)} alt={title}
                className='rounded-xl hover:scale-125' />

            </div>
            <h2
            className='text-xl font-bold'
            >{title}</h2>
        </div>
    </Link>
  )
}


export default PostCard