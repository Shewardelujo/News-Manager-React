import { useEffect } from "react";
import HorizontalCard from "../../components/HorizontalCard";
import { fetchHealth } from "./healthSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

const Index = () => {
  const dispatch = useAppDispatch();
  const health = useAppSelector(
    (state: any) => state.health?.health
  );
  const status = useAppSelector((state: any) => state.health.status);
  const error = useAppSelector((state: any) => state.health.error);

useEffect(() => {
    if (status === "idle") {
      dispatch(fetchHealth("health"));
    }
  }, [dispatch, status, health]);
  return (
     <div className="col-12 container"> 
    {health.length !== 0 && <h4 className="mt-4 mb-3">Health News</h4>}
      <div className="my-5">
              {/* {health.length == 0 && <h4 className="justify-content-center">Health News not available</h4>} */}
              {error && <h4 className="justify-content-center">Health News not available</h4>}
      </div>
      <div className="specifics">
          {
            health.map((healthStory: any) => (
                <HorizontalCard key={Date.now() + Math.random()} source={healthStory.source.name} url={healthStory.url} title={healthStory.title}
                publishedAt={healthStory.publishedAt} urlToImage={healthStory.urlToImage}/> 
            ))
            }
    </div>
  </div>
  )
}

export default Index;