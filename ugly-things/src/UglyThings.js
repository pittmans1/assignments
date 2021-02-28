import React, { Component } from "react"
const { Provider, Consumer } = React.createContext();

class UglyThingsProvider extends Component{
   state={
       UglyList: []
   }
   componentDidMount(){
       fetch("https://api.vschool.io/scottpittman/thing")
       .then(response => response.json())
       .then(data => this.setState({UglyList: data}))
   }
   

   addU = (ugl) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            title: ugl.title,
            imgUrl: ugl.img,
            description: ugl.description
        })
    }
    fetch('https://api.vschool.io/scottpittman/thing', requestOptions)
        .then(response => response.json())
        .then(() => window.location.reload());    
}

deleteU = (uglyId) => {
    fetch('https://api.vschool.io/scottpittman/thing/' + uglyId, { method: 'DELETE' })
    .then(() => window.location.reload());
}

editU = (uglyId) => {
    let [ug] = this.state.UglyList.filter( (l) => { return l._id === uglyId });
    let title = prompt("Please enter a new title", ug.title);
    let description = prompt("Please enter a new description", ug.description);

    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
            title: title,
            description: description 
        })
    };
    fetch('https://api.vschool.io/scottpittman/thing/' + uglyId, requestOptions)
        .then(response => response.json())
        .then(() => window.location.reload());
}
    render(){
            const { UglyList } = this.state;
            return (
                <Provider value={{
                    UglyList,
                    addU: this.addU,
                    deleteU: this.deleteU,
                    editU: this.editU
                }}>
                    {this.props.children}
                </Provider>
        )
    }
}


export {UglyThingsProvider, Consumer as UglyThingsConsumer}