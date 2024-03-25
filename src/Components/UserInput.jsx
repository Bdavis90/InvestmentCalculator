import { useState } from "react"

export default function UserInput() {

    const [userInput, setUserInput] = useState({
        initialInvestment: 20000,
        annualInvestment: 1000,
        expectedReturn:  6,
        duration: 10,
    })

    const handleChange = (inputIdentifier, newValue)=> {
        setUserInput(prevUserInput => {
          return { ...prevUserInput,
            [inputIdentifier]: newValue
          }
         })
    }
    
    
    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label htmlFor="">Initial Investment</label>
                    <input value={userInput.initialInvestment} onChange={(e) => handleChange("initialInvestment", e.target.value)} type="number" required/>
                </p>
                <p>
                    <label htmlFor="">Annual Investment</label>
                    <input value={userInput.annualInvestment} onChange={(e) => handleChange("annualInvestment", e.target.value)} type="number" required/>
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor="">Expected Return</label>
                    <input value={userInput.expectedReturn} onChange={(e) => handleChange("expectedReturn", e.target.value)} type="number" required/>
                </p>
                <p>
                    <label htmlFor="">Duration</label>
                    <input value={userInput.duration} onChange={(e) => handleChange("duration", e.target.value)} type="number" required/>
                </p>
            </div>
        </section>
    )
}