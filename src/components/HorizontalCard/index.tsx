import { useState } from "react";
import { Link } from "react-router-dom";
import NewsImage from "../../assets/Images/newsIm.jpg";

interface HorizontalStoriesProps {
  source: any;
  url: string;
  title: string;
  publishedAt: any;
  urlToImage: string;
}

const Index = (horizontalStory: HorizontalStoriesProps) => {
  const { source, url, title, publishedAt, urlToImage } = horizontalStory;
  const [btnText, setBtnText] = useState("Read Later");

  const storeNews = (item: any) => {
    setBtnText("To be Read Later..");

    let readLaterList = localStorage.getItem("readLaterList") || "";
    let list: any;

    if (readLaterList == (null || "")) {
      list = [];
      localStorage.setItem("readLaterList", JSON.stringify(list));
    } else {
      list = JSON.parse(readLaterList);
      let itemArray = [item];
      let updatedTotalList = [...list, ...itemArray];
      localStorage.setItem("readLaterList", JSON.stringify(updatedTotalList));
    }
  };

  const handleClick: React.MouseEventHandler<HTMLAnchorElement> = (event) => {
    event.preventDefault();
    storeNews(horizontalStory);
  };

  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-8">
          <div className="card-body">
            <p className="text-muted mb-1">{source.name}</p>
            <h5 className="card-title">
              <Link
                // to={ "/" }
                to={url}
                className="text-dark text-decoration-none text-underline-hover"
              >
                {title}
              </Link>
            </h5>

            <p className="card-text my-3 text-muted">{publishedAt}</p>
            <Link to={"#"} className="btn btnColor" onClick={handleClick}>
              {btnText}
            </Link>
          </div>
        </div>
        <div className="col-md-4">
          <img
            src={urlToImage ? urlToImage : NewsImage}
            className="img-fluid rounded-start"
            alt="..."
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
