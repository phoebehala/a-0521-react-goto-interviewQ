import React, { useState, useEffect } from 'react'
import B from './B'
import C from './C'

const ChallengeE = () => {

    const [a, setA]=useState({value:0})

    return (
        <div>
            
            <B  a={a.value} />           
       
        </div>
    )
}
export default ChallengeE 




