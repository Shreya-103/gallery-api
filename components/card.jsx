const Cards = ()=>{

let printUserData = "Loading..."
    if(userData.length>0){
      printUserData = userData.map(function(elem, idx){
        return <div key={idx} className="images">
          <a href={elem.url} target="_blank">
          <img src={elem.download_url} alt="elem.author" />
          <h5>{elem.author}</h5>
          </a>
        </div>
      });
    }
}

export default Cards