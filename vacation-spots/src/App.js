import React from "react"
import vacationSpots from "./VacationSpots"
import Spots from "./Spots"
function App (){
     const vacations = vacationSpots.map(item => <Spots key={item.index} spots={item} /> )
    return (
        <div>
          {vacations}
        </div>
    )
}





export default App