import React, { useState, useEffect } from "react";


export default function ProceduresView(){
    const [values, setValues] = useState([]);

    const fetchProcedures = async() => {
        const data = await fetch('/api/getDelegatedProcedures')
        const procedures = await data.json();
        setValues(procedures);
    }


    useEffect(() => {
        fetchProcedures();
    
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

      const showProcedures = () => {
       let proceduresCards = []
       for(let i = 0; i < values.length; i++) {
        proceduresCards.push(
            <div className='procedureCard' key={i}>
                <h1 className='procedureCardText' key={i*2}>Procedure : {values[i].name}</h1>
                <h3 className='procedureCardText' key={i*3}>From user {values[i].petOwner}</h3>
                <h3 className='procedureCardText' key={i*5}>Pet name : {values[i].pet}</h3>
                <h3 className='procedureCardText' key={i*4}>Delegated employee : {values[i].procedureWorker}</h3>
            </div>
        )
       }
       return proceduresCards;
      }

      return(
        <div className='pageContainer'>
        {showProcedures()}
        </div>
      );
}