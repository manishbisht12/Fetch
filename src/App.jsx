import React from 'react'
import './App.css'
import { useState } from 'react'
import { useEffect } from 'react'

function App() {

  const[Posts , setPosts] = useState([]);
  const[loading, setLoading] = useState(true); 
  const[error, setError] = useState(null);

 useEffect(()=>{
  const fetchQuotes = async() => {
    try{
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      if(!response.ok){
          throw new Error('network not ok');
      }
      const data = await response.json();
      setPosts(data);
      console.log(data)
    }
    catch(err){
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };


fetchQuotes();
 },[]);

 console.log(Posts)


  return (
    <div>
             {Posts.map((post) => (
                <div key={post.id} style={{ margin: '10px 0' }}>
                  <p>{post.id}</p>
                  <h2>{post.title}</h2>
                  <p>{post.body}</p>
                </div>
      ))}

      working

    </div>
       
  )
}

export default App
