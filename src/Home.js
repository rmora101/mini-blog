import { useState } from "react";

const Home = () => {
    
    const [name, setName]= useState('msrio');
    const [age, Setage] = useState(25);

    const handleClick = () =>{
        setName('luigi');
        Setage(15);
    }

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p>{name} {age}</p>
            <button onClick={handleClick}>Click me</button>
        </div>
    );
}
 
export default Home;