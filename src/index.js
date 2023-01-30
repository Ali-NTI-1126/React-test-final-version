import React from 'react';
import ReactDOM from 'react-dom';
import BostadstypSelector from './App';


const htmlRoot = document.getElementById('root');

const Testing =  () => {
  return (
    <div>
      <BostadstypSelector />

    </div>
  );
};

ReactDOM.render(<Testing/>, htmlRoot);