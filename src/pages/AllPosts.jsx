import React, {useState, useEffect} from 'react'
import { Container, PostCard } from '../components'
import appwriteService from "../appwrite/config";
import {Loading} from "../components/index"

function AllPosts() {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {}, [])
    appwriteService.getPosts([]).then((posts) => {
        
        if (posts) {
            setPosts(posts.documents)
        }
    }).finally(()=>{setLoading(false)})
    if (loading) {
        return <Loading/> 
    }
  return (
    <div className='w-full py-8'>
        <Container>
            <div className='flex flex-col sm:flex-row items-start flex-wrap'>
                {posts.map((post) => (
                    <div key={post.$id} className='p-2 sm:w-1/4 w-full'>
                        <PostCard {...post} />
                    </div>
                ))}
            </div>
            </Container>
    </div>
  )
}

export default AllPosts
