import React from "react"

function Form(props) {
   return (
      <div className="badge">

         <form onSubmit={props.handleSubmit}>
            <input
               type="text"
               placeholder="First Name"
               name="firstName"
               minlength="3"
               required
               value={props.firstName}
               onChange={props.handleChange}
               autoComplete="on"
            />

            <input
               type="text"
               placeholder="Last Name"
               name="lastName"
               minlength="3"
               required
               value={props.lastName}
               onChange={props.handleChange}
               autoComplete="on"
            />

            <input
               type="text"
               placeholder="Email"
               name="email"
               minlength="3"
               required
               value={props.email}
               onChange={props.handleChange}
               autoComplete="on"
            />

            <input
               type="text"
               placeholder="Place of Birth"
               name="birthPlace"
               minlength="3"
               required
               value={props.birthPlace}
               onChange={props.handleChange}
               autoComplete="on"
            />

            <input
               placeholder="Phone"
               type="number"
               name="phone"
               minlength="3"
               required
               value={props.phone}
               onChange={props.handleChange}
               autoComplete="on"
            />

            <input
               type="text"
               placeholder="Favorite Food"
               name="favFood"
               minlength="3"
               required
               value={props.favFood}
               onChange={props.handleChange}
            />

            <textarea
               name="about"
               minlength="3"
               required
               onChange={props.handleChange}
               placeholder="Tell us about yourself"
               autoComplete="on"
            />

            <br />

            <button>Submit</button>
         </form>
      </div>
   )
}


export default Form

