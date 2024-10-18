import { useState } from 'react';

function Counter() {
  // Define the state for the count
  let [count, setCount] = useState(0);

  return (
    <div className='text-center'>
      <div className='flex justify-center items-center'>
        {/* Button with hover effect */}
        <button
          className='bg-blue-500 text-white py-2 px-4 rounded mr-4 hover:bg-blue-700'
          onClick={() => setCount(count + 1)}
        >
          CLICK ME
        </button>
        {/* Display the count */}
        <p className='text-2xl'>{count}</p>
      </div>
    </div>
  );
}

export default Counter;
