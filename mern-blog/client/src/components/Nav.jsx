import {Link} from 'react-router-dom';
export default  function Navbar(){
    return (
        <nav bg-white shadow mb-6>
        <div className='container mx-auto px-4 py-3 flex justify-between '>
<Link to={'/'} className='font-bold text-xl tet-blue-600'>
MyBlog
</Link>
<div className='space-x-4'>
<Link to={"/"}>
Home</Link>
<Link to={"/create"}>
Create</Link>
</div>
        </div>
        </nav>
    );
}