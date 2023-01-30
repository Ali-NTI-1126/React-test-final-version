import React from "react"
import 'bulma/css/bulma.css';
import { useState } from "react";

function Vila() {
    

    const [Inköpspris, setInköpspris] = useState(0);
    const [Kontantinsats, setKontantinsats] = useState(0);
    const [Ränta, setRänta] = useState(0);
    const [Amortering, setAmortering] = useState(30); 
    const [Vatten, setVatten] = useState(400);
    const [El, setEl] = useState(1400);
    const [Sopor, setSopor] = useState(500);
    const [Värme, setVärme] = useState(1000);
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
          let totalaKostnaden = parseInt(summa) + parseInt(Vatten) + parseInt(El) + parseInt(Sopor) + parseInt(Värme);
          return totalaKostnaden;


            // let summa = parseInt((Inköpspris - Kontantinsats)/(Amortering*12)) * (1 + Ränta/100);
            // let totalakostnaden = parseInt(summa + parseInt(Vatten) + parseInt(El) + parseInt(Sopor) + parseInt(Värme));
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
        value={Vatten}
        onChange={e => setVatten(e.target.value)}
        />
        <p>Vatten: {Vatten}kr/mån</p>
        <br />

        
        <input
        type="range"
        min={0}
        max={10000}
        step={100}
        value={El}
        onChange={e => setEl(e.target.value)}
        />
        <p>El: {El}kr/mån</p>
        <br />

        <input
        type="range"
        min={0}
        max={1000}
        step={100}
        value={Sopor}
        onChange={e => setSopor(e.target.value)}
        />
        <p>Sopor: {Sopor}kr/mån</p>
        <br />
        
        <input
        type="range"
        min={0}
        max={3000}
        step={100}
        value={Värme}
        onChange={e => setVärme(e.target.value)}
        />
        <p>Värme: {Värme}kr/mån</p>
        <br />
        
        <div>
      <hr />
      <h2 className='is-size-1'>Den slutliga kostnaden: {pris()}kr/mån</h2>

      </div>
      </div>
    );
  }

  export default Vila;
