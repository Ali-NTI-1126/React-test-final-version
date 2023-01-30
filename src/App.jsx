import 'bulma/css/bulma.css';
import React, { useState } from 'react';
import Lägenhet from './Lägenhet';
import Vila from './Vila';


function BostadstypSelector() {
  const [bostadsType, setBostadsType] = useState('Bostadsrätt');

  function handleChange(event) {
    setBostadsType(event.target.value);
  }

  return (
    <div className='container'>
      <br></br>
      <label>Bostadstyp: </label>
      <select className='select is-info' value={bostadsType} onChange={handleChange}>
        <option value="Bostadsrätt">Bostadsrätt</option>
        <option value="Vila">Vila</option>
      </select>
      <hr></hr>
      {bostadsType === 'Bostadsrätt' && <Lägenhet />
}
      {bostadsType === 'Vila' && <Vila />
}
    </div>
  );
}

export default BostadstypSelector;
