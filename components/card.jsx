const Cards = ()=>{

return(
<div key={idx} className="images">
          <a href={elem.url} target="_blank">
          <img src={elem.download_url} alt="elem.author" />
          <h5>{elem.author}</h5>
          </a>
        </div>
)
}

export default Cards