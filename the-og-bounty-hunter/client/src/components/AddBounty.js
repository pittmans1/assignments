import React, { useState } from "react"


export default function AddBountyForm(props){
    const intiInputs = { firstName: props.firstName || "", lastName: props.lastName || "", bounty: props.bounty || "", type: props.type || false, living: props.living || false }
    const [ inputs, setInputs] = useState(intiInputs)
    function handleChange(e){
        const {name, value} = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value }))
    }
    function handleSubmit(e){
        e.preventDefault()
        props.submit(inputs, props._id)
        setInputs(intiInputs)
    }
    return(
        <form onSubmit={handleSubmit}> 
        <input type="text" placeholder="First Name" name="firstName" value={inputs.firstName} onChange={handleChange}/>    
        <input type="text" placeholder="Last Name"name="lastName" value={inputs.lastName} onChange={handleChange}/>    
        <input type="number" placeholder="bounty value" name="bounty" value={inputs.bounty} onChange={handleChange}/>
        <select name="living" value={inputs.living} onChange={handleChange}> 
            <option value= {true}>Alive</option>
            <option value = {false}>Dead</option>
        </select>
        <select name = "type" value={inputs.type} onChange={handleChange}>
            <option value={true}>Jedi</option>
            <option value={false}>Sith</option>
        </select>
        <button >{props.btnText}</button>
        </form>
    )
}