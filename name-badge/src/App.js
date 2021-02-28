import React from "react"
import "./style.css"
import Form from "./Form";
import Badge from "./Badge";

class App extends React.Component {
   constructor() {
      super()
      this.state = {
         firstName: "",
         lastName: "",
         email: "",
         birthPlace: "",
         phone: "",
         favFood: "",
         about: "",
         badgeList: []
      }

      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
   }

   handleChange(event) {
      const {name, value} = event.target
      this.setState({[name]: value})
   }

   handleSubmit(e) {
      e.preventDefault()
      

     /* newBadge.push(this.state)
      this.setState({
         badgeList: newBadge
      })*/

      // badgeList is an array of name badges 
      // it's an array of objects [{namebadge}, {nameBadge}]
      // each object is a name badge {firstName: "jane", lastName: "doe"}

      const newEntry = { 
         firstName: this.state.firstName,
         lastName: this.state.lastName,
         email: this.state.email,
         birthPlace: this.state.birthPlace,
         phone: this.state.phone,
         favFood:this.state.favFood,
         about: this.state.about
      }
      this.setState(prevState => {
         return { 
            badgeList: [...prevState.badgeList, newEntry]
            
         }
      })

      Array.from(document.querySelectorAll("input")).forEach(
         input => (input.value = "")
      );
      this.setState({
         firstName: "",
         lastName: "",
         email: "",
         birthPlace: "",
         phone: "",
         favFood: ""
      })

      Array.from(document.querySelectorAll("textarea")).forEach(
         textarea => (textarea.value = "")
      );
      this.setState({
         about: ""
      })

   }

   render() {
      let badges = this.state.badgeList.map((badge) => <Badge info={badge} />)
      return (
        <div className="App">
           <h1>Name Badge</h1>
         <Form
            state={this.state}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
         />

          {badges}
        </div>
      )
   }

}

export default App;