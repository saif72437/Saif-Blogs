import React, {useEffect, useState} from 'react'
import appwriteService from "../appwrite/config";
import {Container, PostCard} from '../components'
import { useNavigate } from 'react-router-dom';
import {Loading} from '../components/index';

function Home() {
    const navigate = useNavigate();
  const  handleLoginClick = () => {
        navigate("/login")
    }
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            setLoading(false)
            if (posts) {
                setPosts(posts.documents)
            }
        }).finally(()=>{
            setLoading(false)
        })
    }, [])
    if (loading) {
        return <Loading/>
    }

    if (posts.length === 0) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 onClick={handleLoginClick} className="cursor-pointer text-2xl text-slate-100 font-bold hover:text-gray-500">
                                Login to read posts
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
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

export default Home
