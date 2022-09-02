import React, {useState} from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary(props){
    let [keyword, setKeyword]=useState(props.defaultKeyword);
    let [definition, setDefinition]=useState(null);
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos]=useState([]);

function handleImages(response) {
    setPhotos(response.data.photos);
  }

  function handleResponse(response) {
    setDefinition(response.data[0]);
let apiKey = "563492ad6f91700001000001efeb45a99ade4d74ad800e399e1765b1";

let apiUrl =`https://api.pexels.com/v1/search?query=${response.data[0].word}&per_page=6`;

axios
.get(apiUrl, { headers: { Authorization: `Bearer ${apiKey}` } })
.then(handleImages);
}


function load(){
    setLoaded(true);
    search();
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
<Photos photos={photos}/>
    </div>
    );
} else {
    load();
    return "Loading"
}
}