import React, { Fragment, useEffect, useState } from "react";
import CreatePost from "./components/createPost";
import axios from 'axios'
import ShowPosts from "./components/showPosts";

const App = () => {
  const [posts, setPosts] = useState([])
  const baseUrl = `http://${window.location.hostname}:3001/posts`
  const submitPost = (postInput) => {
    axios({
      method: 'post',
      url: baseUrl,
      data: {
        post: postInput
      }
    })
    .then(({data}) => setPosts([...posts, data]))
  }
  
  useEffect(() => {
    axios({
      method: 'get',
      url: baseUrl
    })
    .then(({data}) => setPosts(data))
  }, [])

  return (
    <Fragment>
      <CreatePost {...{submitPost}}/>
      <ShowPosts {...{posts}}/>
    </Fragment>
  );
};

export default App;
