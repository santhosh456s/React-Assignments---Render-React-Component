import React from "react"

export default function City(props){
   const {city} = props;
return(
<div className="container">

  <div className="num">{city.id}</div>
  <div className="con">
  <div>{city.name}</div>
  <div>{city.country}</div>
 </div>
</div>
  

);

}
