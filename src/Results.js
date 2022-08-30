import React from "react";
import Meaning from "./Meaning";
import './Results.css';

export default function Results(props){
if(props.definition){
return (
<div className="Results">
   <h2><strong>{props.definition.word}</strong></h2>
   {props.definition.meanings.map(function(meaning,index){
    return(
        <div key={index}>
            <Meaning meaning={meaning}/>
</div>
);
})}
</div>
);
}else{
    return null;
}
}