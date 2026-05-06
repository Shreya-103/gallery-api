const Cards = (props)=>{
       <div>
          <a href={props.elem.url} target="_blank">
          <img src={props.elem.download_url} alt="elem.author" />
          <h5>{props.elem.author}</h5>
          </a>
      </div>
      };

export default Cards