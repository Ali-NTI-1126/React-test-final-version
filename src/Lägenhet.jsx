import React from "react"
import 'bulma/css/bulma.css';
import { useState } from "react";

function Lägenhet() {
    

    const [Inköpspris, setInköpspris] = useState(0);
    const [Kontantinsats, setKontantinsats] = useState(0);
    const [Ränta, setRänta] = useState(0);
    const [Amortering, setAmortering] = useState(30); 
    const [Avgift, setAvgift] = useState(0);
    const [Övrigt, setOvrigt] = useState(0);
    const [message, setWarning] = useState("");
    
    
    const begränsning = (e) => {
        const newValue = e.target.value;
        if (newValue < (Inköpspris * 0.15)) {
            setKontantinsats(Inköpspris * 0.15);
            setWarning("Kontantinstatsen måste vara minst 15% av inköpspriset")
        } else {
            setKontantinsats(newValue);
            setWarning("")
          }
        }
        
        function pris(){

          let summa = Math.max(((Ränta /100) * (Inköpspris - Kontantinsats)) / 12) + ((Inköpspris - Kontantinsats) / (12 * Amortering));
          let totalaKostnaden = parseInt(summa) + parseInt(Avgift) + parseInt(Övrigt);
          return totalaKostnaden;

          // let summa = (Inköpspris - Kontantinsats);
          // let kostnadPerMånad = (((Ränta / 100) * summa) + (summa / (Amortering / 12)));
          // let totalakostnaden = parseInt((kostnadPerMånad) + parseInt(Avgift) + parseInt(Övrigt));
          // return totalakostnaden;
        }
        
        

    
    return (
      <div className='has-text-centered box'>
        <h1 className='title'>Vad kommer ditt hem att kosta?</h1>
        <h1 className="has-background-danger-light">{message}</h1>

        <input
        type="range"
        min={Kontantinsats}
        max={20000000}
        step={25000}
        value={Inköpspris}
        onChange={e => setInköpspris(e.target.value)}
        />
        <p>Inköpspris: {Inköpspris}kr</p>
      <br />
        
        <input
        type="range"
        min={0}
        max={5000000}
        step={10000}
        value={Kontantinsats}
        onChange={begränsning}
        />
        <p>Kontantinstats: {Kontantinsats}kr</p>
        <br />

        
        <input
        type="range"
        min={0}
        max={15}
        step={0.1}
        value={Ränta}
        onChange={e => setRänta(e.target.value)}
        />
        <p>Ränta: {Ränta}%</p>    
        <br />

        
        <input
        type="range"
        min={2}
        max={50}
        step={1}
        value={Amortering}
        onChange={e => setAmortering(e.target.value)}
        />
        <p>Amortering: {Amortering}år</p>
        <br />

        
        
        <input
        type="range"
        min={0}
        max={1000}
        step={100}
        value={Avgift}
        onChange={e => setAvgift(e.target.value)}
        />
        <p>Avgift: {Avgift}kr/mån</p>
        <br />

        
        <input
        type="range"
        min={0}
        max={1000}
        step={100}
        value={Övrigt}
        onChange={e => setOvrigt(e.target.value)}
        />
        <p>Övrigt: {Övrigt}kr/mån</p>
        <br />

        
        
        <div>
      <hr />
      <h2 className='is-size-1'>Den slutliga kostnaden: {pris()}kr/mån</h2>

      </div>
      </div>
    );
  }

  export default Lägenhet;
