import React from 'react';

const Item = () => (
  <div style={{
    border: 'solid black 1px'
  }}>
    <div>Item</div>
    <button
      type="button"
      onClick={() => { console.log('Delete') }}
      style={{ backgroundColor: 'red', padding: '10px', color: 'white' }}
    >
      Delete
    </button>
  </div>
)

const App = () => {
  // For Next.js reference, you can use the following as the urls:
  const weatherURL = '/api/generateWeather';
  const webhookUrl = '/api/sendData';

  const handleGetWeatherClick = async () => {
    console.log('Get Weather');
  }

  const handleAddItemClick = () => {
    console.log('Add Item');
  }

  const handleDeleteItemClick = () => {
    console.log('Delete Item');
  }

  return (
    <div style={{ color: 'black' }}>

      <div>
        To-Do List
      </div>

      <div >
        <input
          aria-label='input'
          style={{
            border: '1px solid black',
            padding: '8px'
          }}
          type='text'
          onChange={(e) => console.log(e.target.value)}
        />
        <button
          type="button"
          style={{
            backgroundColor: 'blue',
            color: 'white',
            marginLeft: '4px',
            padding: '9px',
          }}
          onClick={handleAddItemClick}
        >
          Add
        </button>
      </div>

      <Item />
      <Item />
      <Item />

      <button
        type="button"
        style={{
          color: 'white',
          backgroundColor: 'blue',
          padding: '10px',
        }}
        onClick={handleGetWeatherClick}
      >
        Get Weather
      </button>

      <div>
        Hows the weather?
      </div>

    </div >
  );
};

export default App;
