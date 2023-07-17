import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: 'Ruth mora site', body: 'fhfeiuw fhusifgrh ...', author: 'me', id:1},
        {title: 'mini site', body: 'fhfeiuw fhusifgrh ...', author: 'u', id:2}
    ]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }
    // useEffect(() => {

    // });
    return ( 
        <div className="home">
            <BlogList blogs={blogs} title='All Posts' handleDelete={handleDelete}/>
            {/* <BlogList blogs={blogs.filter(() => blogs === 'mario')} title='All Posts' /> */}
        </div>
    );
}

export default Home;