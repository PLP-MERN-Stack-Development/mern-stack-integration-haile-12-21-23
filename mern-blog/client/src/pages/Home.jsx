import {Link} from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { getPosts } from '../services/postService';

export default function HomePage(){
    const {data:posts, loading, error}=useFetch(getPosts,[]);

console.log('Posts:',posts['items']);

    if (loading) {
        return <p>Loading</p>
    }
    if (error) {
        return <p>Failed to load posts</p>
    }
    return (
        <div>
        <div className='flex justify-between items-center mb-4'>
            <h1 className='text-2xl font-bold'> All Posts </h1>
            <Link to='/create' className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 hover:text-white'>
            + New Post
            </Link>
        </div>
        <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
{ posts['items'].map((post)=>(
    <div key={post._id} className='bg-white shadow- p-4 rounded'>
        <h2 className='text-xl font-semibold'>{post.title}</h2>
        <p className='text-gray-600 text-sm'>{post.category?.name}</p>
        <p className='text-gray-700'>{post.content.slice(0,100)}...</p>
        <Link to={`/posts/${post._id}`}  className='text-blue-500 mt-2 inline-block'> Read more</Link>
    </div>
))}
        </div>
        </div>
    );
}