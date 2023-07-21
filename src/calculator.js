import React, { useState } from 'react'


export default function Calculator() {
    const [state, setState] = useState({
        principal: '',
        years: '',
        rate: ''
    });

    const [monthlyPayment, setMonthlyPayment] = useState(0);
    const handleInputChange =(e) =>{
        const {name, value} = e.target;
        if(value){
            setState({
                ...state,
                [name]: value
            })
        }
    }

    const calculatePayment= (principal,years,rate) => {
        const monthlyRate= rate/ 100 / 12;
        // const monthlyPayment=principal* monthlyRate / (1 - (Math.paw(1/(1 + monthlyRate),years * 12)));
        const monthlyPayment = principal  * monthlyRate /(1 - 1 / Math.pow(1 + monthlyRate, years * 12));
        let balance= principal;
        //for year 
        for (var y=0; y<years; y++) {
        let interestY=0;
        let principalY=0;
        //for month 
        for (var m=0; m<12; m++) {
            var interestM= balance * monthlyRate;
            var principalM= monthlyPayment - interestM;
            interestY= interestY + interestM;
            principalY= principalY + principalM;
            balance= balance - principalM;
            
        }
        
        }
        return{monthlyPayment: monthlyPayment};
    
    };

    const calculateMortage = () => {
        const payment = calculatePayment(state.principal, state.years, state.rate);
        if(payment){
            setMonthlyPayment(payment.monthlyPayment)
        }
        
    }

    return (
    <div>
    <div className="content">
    <div className="form">
    <div>
    <label >principal:</label>
    <input type="text" name="principal" value={state.principal} onChange={handleInputChange} />
    </div>
    <div>
    <label>Years:</label>
    <input type="text" name="years" value={state.years}  onChange={handleInputChange}/>
    </div>
    <div>
    <label>Rate:</label>
    <input type="text" name="rate" value={state.rate} onChange={handleInputChange} />
    </div>

    </div>
    <button onClick={calculateMortage}>Calculate Mortage</button>
    <h2>monthly Payment: <span className='currency'>{Number(monthlyPayment.toFixed(2)).toLocaleString()}</span></h2>
    
    </div>
    </div>
    )
}






  