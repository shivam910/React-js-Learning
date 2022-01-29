import React,{useState,useEffect} from 'react';
import axios from "axios";

function DataFetching() {

    const [posts, setPosts] = useState([]);
    const [id, setId] = useState(1);
    const [idFromButtonClick, setIdFromButtonClick] = useState([]);
    
    const handleClick = () =>{
        setIdFromButtonClick(id)
    }

    useEffect(() =>{
        
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
        .then(res =>{
            console.log(res);
            setPosts(res.data) //renders in the browser
        })
        .catch(err =>{
            console.log(err)
        })
    },[idFromButtonClick])

    return (
        <div>
            <input type="text" value={id} onChange={e => setId(e.target.value)} />
            <button type="button" onClick={handleClick} >Fetch id</button>
            <div>{posts.title}</div>
            {/* <ul>
                {
                    posts.map(post => <li key={post.id}>{post.title}</li>)
                }
            </ul> */}
        </div>
    )
}

export default DataFetching 