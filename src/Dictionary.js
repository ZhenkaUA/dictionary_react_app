import React, {useState} from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary(props){
    let [keyword, setKeyword]=useState(props.defaultKeyword);
    let [definition, setDefinition]=useState(null);

function handleResponse(response){
setDefinition(response.data[0]);
}

function search(){
let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
axios.get(apiUrl).then(handleResponse);
}

function handleSubmit(event){
    event.preventDefault();
    search();
}

function handleKeywordChange(event){
    setKeyword(event.target.value);  
}
    return (<div className="Dictionary">
<form onSubmit={handleSubmit}>
    <input type="search" onChange={handleKeywordChange}/>
</form>
<Results definition={definition}/>
    </div>
    );
}