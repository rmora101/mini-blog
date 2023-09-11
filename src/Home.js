import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState(null);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id); //i dont understand this
        setBlogs(newBlogs); // set blogs is set to newblogs w this
    } // handle delete in home file to update the state set blogs. not blogs so that org data not messed

    useEffect(() => {
        fetch('http://localhost:8000/blogs')
            .then(res => {
                return res.json();
            })
            .then((data)=>{
                setBlogs(data);
            })

    }, []); // runs on every render but empty array only renders once. do not put usestate in useeffect. will have infinate loop.
    // or put function that should trigger useefect
    return ( 
        <div className="home">
            { blogs && <BlogList blogs={blogs} title='All Posts' handleDelete={handleDelete}/> } 
            {/* conditional so that doesnt run until there is data */}
            {/* <BlogList blogs={blogs.filter(() => blogs === 'mario')} title='All Posts' /> ''' .filter will return only author that are true for mario */}
        </div>
    );
}

export default Home;