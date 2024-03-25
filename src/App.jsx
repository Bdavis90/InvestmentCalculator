import { useState } from "react"
import Header from "./Components/Header"
import UserInput from "./Components/UserInput"
import Results from "./Components/Results"

function App() {

  const [userInput, setUserInput] = useState({
    initialInvestment: 20000,
    annualInvestment: 1000,
    expectedReturn:  6,
    duration: 10,
})

const inputIsValid = userInput.duration >= 1;

const handleChange = (inputIdentifier, newValue)=> {
  setUserInput(prevUserInput => {
    return { ...prevUserInput,
      // + forces it to be a number
      [inputIdentifier]: +newValue
    }
   })
}

  return (
    <>
      <Header />
      <UserInput onChangeInput={handleChange} userInput={userInput} />
      { !inputIsValid && <p className="center">Please enter a duration greater than zero.</p>}
      { inputIsValid && <Results userInput={userInput}/>}
    </>
  )
}

export default App
