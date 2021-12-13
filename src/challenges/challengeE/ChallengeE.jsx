import React, { useState, useEffect } from 'react'
import B from './B'

// didn't fugure out the solution without passing props

const ChallengeE = () => {

    const [a, setA]=useState({value:0})

    return (
        <div>
            
            <B  a={a.value} />           
       
        </div>
    )
}
export default ChallengeE 




