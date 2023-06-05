import { useState } from "react";
import { Link } from "react-router-dom"
import NewsImage from "../../assets/Images/newsIm.jpg";


interface VerticalStoriesProps {
  source: any,
  url: string,
  title: string
  publishedAt: any,
  urlToImage: string
}

const Index = (verticalStory: VerticalStoriesProps) => {
  const { source, url, title, publishedAt, urlToImage } = verticalStory;
  const [btnText, setBtnText] = useState("Read Later");

  const storeNews = (item: any) => {
    
    setBtnText('To be Read Later..');

    let readLaterList = localStorage.getItem('readLaterList') || "";
    let list: any;

    if (readLaterList == (null || "")) {
      list = []
      localStorage.setItem('readLaterList', JSON.stringify(list))
     }
    else {
      list = JSON.parse(readLaterList);
      let itemArray = [item]
      let updatedTotalList = [...list, ...itemArray];
      localStorage.setItem('readLaterList', JSON.stringify(updatedTotalList));
    }
  }

  const handleClick: React.MouseEventHandler<HTMLAnchorElement> = (event) => {
  event.preventDefault();
  storeNews(verticalStory);
};

  return (      
    <div className="card h-100">
  <img
    src={urlToImage ? urlToImage : NewsImage}
    className="card-img-top"
    alt="..."
  />
  <div className="card-body">
    <p className="text-muted mb-1">
      {source.name }
    </p>
    <h5 className="card-title">
      <a
        href= {url }
        className="text-dark text-decoration-none text-underline-hover"
      >
        {title}
        {/* {{ item.title | truncate }} */}
      </a>
    </h5>

    <p className="card-text">{title }</p>
    <p className="card-text my-3 text-muted">
      {publishedAt}
      {/* {{ item.publishedAt | date : "short" }} */}
    </p>
  </div>
  <div className="card-footer bg-white border-top-0">
          <Link to={"#"} className="btn btnColor" onClick={handleClick}> {btnText} </Link>
  </div>
</div>


  )
}

export default Index