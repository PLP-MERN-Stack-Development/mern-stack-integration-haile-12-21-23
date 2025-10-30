import { useEffect } from "react";
import {useForm} from 'react-hook-form';
import { useNavigate, useParams } from "react-router-dom";

import { createPost, getSinglePost, updatePost } from "../services/postService";


export default function PostFromPage(){
const {id}=useParams();
const navigate=useNavigate();
const {register,reset}=useForm();
let {handlePost}=useForm();
useEffect(()=>{
    if (id) {
        getSinglePost(id).then((res)=>reset(res.data));
    }
},[id, reset]);

 handlePost = async (data) => {
    if (id) await updatePost(id, data);
    else await createPost(data);
    navigate('/');
  };
// const onSubmitPost= async (data)=>{
//     if (id) {
//         await updatePost(id,data);
//     }
//     else{
//         await createPost(data);
//         navigate('/');
//     }
// };
return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded shadow">
<h2 className="text-xl font-bo' mb-4">{id?'Edit Post':'Create Post'} </h2>
 <form onSubmit={handlePost} className="space-y-3">
{/* <form onSubmit={handlePost(onSubmitPost)} className="space-y-3"> */}
    <input {...register('title')} placeholder="Title" className="w-full border p-2 rounded" />
    <textarea {...register('content')} placeholder="Content" rows='5' className="w-full border p-2 rounded" />
    <input {...register('category')} placeholder="Category ID" className="w-full border p-2 rounded" />
    <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded"> {id?'Update':'Create'}</button>
</form>
    </div>
);
}
