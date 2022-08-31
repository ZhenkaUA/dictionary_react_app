import React from "react";
import Meaning from "./Meaning";
import './Results.css';
import Phonetic from "./Phonetic";

export default function Results(props){
if(props.definition){
return (
<div className="Results">
   <h2><strong>{props.definition.word}</strong></h2>
   {props.definition.phonetics.map(function(phonetic,index){
    return (
<div key={index}>
    <Phonetic phonetic={phonetic}/>
    </div>
    );
    })}
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