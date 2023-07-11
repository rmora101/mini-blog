import { useState } from "react";

const Home = () => {
    
    const [blogs, setBlogs] = useState([
        {title: 'Ruth mora site', body: 'fhfeiuw fhusifgrh ...', author: 'me', id:1},
        {title: 'mini site', body: 'fhfeiuw fhusifgrh ...', author: 'u', id:2}
    ])

    return ( 
        <div className="home">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p> written by {blog.author}</p>
                </div>
            ))}
        </div>
    );
}
 
export default Home;