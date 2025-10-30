import {useParams, Link} from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { getSinglePost } from '../services/postService';

export default function PostPage(){
    const {id}=useParams();
    const {data:post,loading,error}=useFetch(()=>getSinglePost(id),[id]);
console.log('post:',post);

    if (loading) {
        return <p>Loading....</p>
    }
    if (error) {
        return <p>Failed to Load post</p>
    }

    return (
<div className=' bg-white p-6 rounded shadow'>
    <h1 className=' text-gray-600 text-3xl text-underline font-bold mb-2'>{post.title}</h1>
    <p className='text-gray-600 text-lg '> {post.content}</p>
    <p className='text-blue-400 text-lg '> {post.excerpt}</p>
<div className='mt-4'>
    <Link to={`/edit/${id}`} className='bg-yellow-500 text-white px-3 py-2 rounded mr-2'> Edit</Link>
    <Link to={'/'} className=' bg-gray-300 px-3 py-2 rounded'> Back</Link>
</div>
</div>
    );
}