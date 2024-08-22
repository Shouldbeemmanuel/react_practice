import React from 'react'

const Practice1 = () => {
  let name = "Emmanuel"

  // let fun = () =>{
  //   let error = new Error("Error has occoured.")
  //   throw error;
  // }

  // // fun();

  // try {
  //   console.log("Hello")
  //   fun()    
  //   console.log("Hello again!!")
  // } catch (error) {
  //   console.log("Error!")
  // }

  let [a,b,c] = [1,2,3]

  console.log(a)
  console.log(b)
  console.log(c)

  return (
    <div>
      <p>My name is {name}</p>
    </div>
  )
}

export default Practice1
