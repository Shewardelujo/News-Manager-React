import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchTopStories } from "./topStoriesSlice";
import HorizontalCard from "../../components/HorizontalCard";
import VerticalCard from "../../components/VerticalCard";

const Index = () => {
  const dispatch = useAppDispatch();
  const topStories = useAppSelector(
    (state: any) => state.topStories?.topStories
  );
  const status = useAppSelector((state: any) => state.topStories.status);
  const error = useAppSelector((state: any) => state.topStories.error);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchTopStories());
    }
  }, [dispatch, status, topStories]);

  return <div className="col-12 container">
    {topStories.length !== 0 && <h4 className="mt-4 mb-3">Top Stories</h4>}
      <div className="my-5">
          {topStories.length == 0 && <h4 className="justify-content-center">Top Stories not available</h4>}
      </div>
      <div className="specifics">
          {
            topStories.map((topStory: any) => (

                // <HorizontalCard key={Date.now() + Math.random()} source={topStory.source.name} url={topStory.url} title={topStory.title}
                // publishedAt={topStory.publishedAt} urlToImage={topStory.urlToImage}/> 
                <VerticalCard key={Date.now() + Math.random()} source={topStory.source.name} url={topStory.url} title={topStory.title}
                publishedAt={topStory.publishedAt} urlToImage={topStory.urlToImage}/>
            ))
            }
    </div>
  </div>;
};

export default Index;
