import { useEffect, useState } from "react";
import axios from "axios";

import Post from "../components/Post";
import Actions from "../components/Actions";
import History from "../components/History";

import {
  _stateCurrentPost,
  _statePostHistory,
  _stateLoading,
  _stateNextId,
  AppContext
} from "../context";

const App = () => {
  // Get query params
  const params = new URLSearchParams(window.location.search);
  const paramId = params.get("id");

  // State
  const [currentPost, setCurrentPost] = useState(_stateCurrentPost)
  const [postHistory, setPostHistory] = useState(_statePostHistory);
  const [loading, setLoading] = useState(_stateLoading);
  const [nextId,setNextId] = useState(_stateNextId);

  // Object to pass provider
  const toProvider = {
    currentPost,  setCurrentPost,
    postHistory,  setPostHistory,
    loading,      setLoading,
    nextId,       setNextId
  }

  // Initial API call to populate history and show newest post
  useEffect(()=>{
    setLoading(true);

    // Get post titles and dates for population of the History Component
    const getPosts = async () => {
      let req = await axios.get("http://localhost:8080/posts");
      setPostHistory(req.data);
    
      if(paramId){
        let preq = await axios.get(`http://localhost:8080/posts/${paramId}`);
        setCurrentPost(preq.data);
      }else if (nextId){
        let nreq = await axios.get(`http://localhost:8080/posts/${nextId}`);
        setCurrentPost(nreq.data)
      }else{
        let dreq = await axios.get(`http://localhost:8080/posts/${req.data[0].id}`);
        setCurrentPost(dreq.data);
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
            <Post data={currentPost || _stateCurrentPost} /> 
            <Actions />
            <History data={postHistory}/>
          </>
        }
      </div>
    </AppContext.Provider>
  );
}

export default App;
