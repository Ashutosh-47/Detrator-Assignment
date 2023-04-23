import { useEffect, useState } from 'react';
import './App.css';
import Post from './Post';

function App() {

  const [ arr , setA ] =  useState ( [] )        // Create Variable so that to store API data in array

  useEffect ( () => {
    
    // Code to Fetch data

    fetch ( `https://dummyjson.com/posts` ).then ( ( res ) => res.json()
    ).then ( ( data ) => setA ( data.posts ) )

  } , [] )
  

  return (
    <div className="App">
    {             // Create only Post.js File to render and Post.css file for designing
    
    arr.map ( ( e ) => {
     
          return (
            <Post title = { e.title }  body = { e.body } />
          )
       
    })

    }

    </div>
  );
}

export default App;
