import React, {useState} from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary(props){
    let [keyword, setKeyword]=useState(props.defaultKeyword);
    let [definition, setDefinition]=useState(null);
    let [loaded, setLoaded] = useState(false);

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

function load(){
    setLoaded(true);
    search();
}

if (loaded){
    return (
    <div className="Dictionary">
        <section>
<form onSubmit={handleSubmit}>
<h3>What word do you want to look up?</h3>
    <input type="search" onChange={handleKeywordChange} defaultValue={props.defaultKeyword}/>
</form>
</section>
<Results definition={definition}/>
    </div>
    );
} else {
    load();
    return "Loading"
}
}