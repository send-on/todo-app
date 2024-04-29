import React, { useState } from 'react'; 
  
const App = () => { 
  const [value, setValue] = useState('');
  
    return ( 
      <div className='m-4'>
        <div className='flex justify-center'>
          To-DO List
        </div>
          <div className='flex justify-center'>
            <input
              className='border border-gray-400 p-2'
              type='text'
              value={value}
              onChange={(e) => setValue(e.target.value)}
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
      </div>
    ); 
}; 
  
export default App;

const Item = () => (
  <div className='flex justify-center'>
    <div className='border border-gray-400 p-2 m-2'>
      <div className='flex justify-between'>
        <div className='mr-4'>Item</div>
        <div>
          <button 
            onClick={() => console.log('deleted')}
            className='bg-red-400 p-2 text-white'>Delete</button>
        </div>
      </div>
    </div>
  </div>
)
