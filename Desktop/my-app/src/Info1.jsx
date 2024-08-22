import React from 'react'

const Info1 = () => {
    let name = "Emmanuel";
    let age =30;
    let isMarried = false;
    let a = <p>hello</p> 
    let ar1 = [1 , 2 , 3]
    let details = {address : nakkhu}
  return (
    <div>
        <p>name: {name}</p>
        <p>age: {age}</p>
        <p>1+1 = {1 + 1}</p>
        <p>isMarried = {isMarried}</p>      
        <p>{a}</p>
        <p>{ar1}</p>
        {/* <p>{details}</p>   */}
        {/* boolean are not displayed in the browser */}
        {/* objects  are not valid as react child */}
    </div>
  )
}

export default Info1
