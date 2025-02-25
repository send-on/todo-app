// Exercise 1:
// Add todo list functionality to the frontend (Add and Delete) 
// Style the todo list to look similar to the following: https://imgur.com/a/dNiZhTU

import React from 'react';   
const App = () => { 
    return ( 
      <div >
        <div >
          To-DO List
        </div>
          <div >
            <input
              className='border border-gray-400 p-2'
              type='text'
            />
            <button
              className='bg-blue-400 p-2 text-white'
              onClick={()=>console.log('added')}
            >
              Add
            </button>
          </div>
          <div>
          <ul>
            <Item />
            <Item />
            <Item />
          </ul>
          </div>
          <div className=''>
            <button
              className='bg-blue-400 p-2 text-white'
              > Get Weather</button>
          </div>
          <div className='text-black'>
            Hows the weather?
          </div>
      </div>
    ); 
}; 
  
export default App;

const Item = () => (
  <div >
    <div >Item Name</div>
    <div>
      <button 
        onClick={() => console.log('deleted')}
        className='bg-red-400 p-2 text-white'>Delete</button>
    </div>
  </div>
)