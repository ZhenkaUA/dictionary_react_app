import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props){
  if(props.meaning){
    return (
    <div className="Meaning">
    <h3><small>{props.meaning.partOfSpeech}</small></h3>
    {props.meaning.definitions.map(function(definition,index)
    {
        return(
    <div key={index}>
    <p>{definition.definition}
    <br/>
    <em>{definition.example}</em>
    <Synonyms synonyms={definition.synonyms} />
    </p>
    </div>
);
})}
</div>
    );
 } else { 
    return null;
 }}