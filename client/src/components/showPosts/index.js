import React from 'react'
import PostsList from './postsList'

const ShowPosts = ({posts}) => {
  return posts ? posts.map(post => {
    console.log(post)
    return <PostsList key={post._id} {...post}/>
  })  
  : null
}

export default ShowPosts