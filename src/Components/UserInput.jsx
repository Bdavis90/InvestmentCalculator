export default function UserInput({onChangeInput, userInput}) {    
    
    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label htmlFor="">Initial Investment</label>
                    <input value={userInput.initialInvestment} onChange={(e) => onChangeInput("initialInvestment", e.target.value)} type="number" required/>
                </p>
                <p>
                    <label htmlFor="">Annual Investment</label>
                    <input value={userInput.annualInvestment} onChange={(e) => onChangeInput("annualInvestment", e.target.value)} type="number" required/>
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor="">Expected Return</label>
                    <input value={userInput.expectedReturn} onChange={(e) => onChangeInput("expectedReturn", e.target.value)} type="number" required/>
                </p>
                <p>
                    <label htmlFor="">Duration</label>
                    <input value={userInput.duration} onChange={(e) => onChangeInput("duration", e.target.value)} type="number" required/>
                </p>
            </div>
        </section>
    )
}