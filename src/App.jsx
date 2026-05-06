import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Cards from "./components/card";

const App = () =>{
    const [userData, setUserData] = useState([]);
    const [index, setIndex] = useState(1);
    const getData = async () =>{
      const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=30`);
      setUserData(response.data);
    }

    useEffect(function(){
      getData()
    }, [index]);

    let printUserData = "Loading..."
    if(userData.length>0){
      printUserData = userData.map(function(elem, idx){
        return <div key={idx} className="images">
          <Cards elem={elem}/>
        </div>
      });
    }


  return(
    <>
    <div className="container">
      {printUserData}
    </div>
    <div className="btn">
    <button
    onClick={
      ()=>{
        if(index>1){
        setIndex(index-1);
        setUserData([]);
        }
      }
    }
    >Prev</button>
    <button
    onClick={()=>{
      setUserData([]);
      setIndex(index+1);
    }}>Next</button>
    </div>

    <p>{index}</p>
</>

  )
}

export default App