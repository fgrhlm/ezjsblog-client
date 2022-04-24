import { useEffect, useState } from "react";
import axios from "axios";

import Post from "../components/Post";
import History from "../components/History";
import HomeButton from "../components/HomeButton"

import {
  _statePost,
  _statePostHistory,
  _stateLoading,
  _stateNextId,
  _stateBlogInfo,
  AppContext
} from "../context";

const App = () => {
  // Get query params
  const params = new URLSearchParams(window.location.search);
  const paramId = params.get("id");

  // State
  const [post, setPost] = useState(_statePost)
  const [postHistory, setPostHistory] = useState(_statePostHistory);
  const [blogInfo, setBlogInfo] = useState(_stateBlogInfo);
  const [loading, setLoading] = useState(_stateLoading);
  const [nextId,setNextId] = useState(_stateNextId);

  // Object to pass provider
  const toProvider = {
    post,         setPost,
    postHistory,  setPostHistory,
    loading,      setLoading,
    nextId,       setNextId,
    blogInfo,     setBlogInfo
  }

  // Initial API call to populate history and show newest post
  useEffect(()=>{
    setLoading(true);

    // Get post titles and dates for population of the History Component
    const getPosts = async () => {
      let req = await axios.get("http://localhost:8080/posts");
      let infoReq = await axios.get("http://localhost:8080/info");
      
      setPostHistory(req.data);
      setBlogInfo(infoReq.data);

      if(paramId){
        let preq = await axios.get(`http://localhost:8080/posts/${paramId}`);
        setPost(preq.data);
      }else if (nextId){
        let nreq = await axios.get(`http://localhost:8080/posts/${nextId}`);
        setPost(nreq.data)
      }else{
        let dreq = await axios.get(`http://localhost:8080/posts/${req.data[0].id}`);
        setPost(dreq.data);
      }
    }

    getPosts();
    setLoading(false);
  },[nextId]);

  return (
    <AppContext.Provider value={toProvider}>
      <div className="App">
        { !loading && 
          <>
            <HomeButton />
            <Post /> 
            <History />
          </>
        }
      </div>
    </AppContext.Provider>
  );
}

export default App;
