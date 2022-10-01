import React from 'react'
import Posts from '../posts/Posts'
import PostShare from '../postShare/PostShare'
import { FeedContainer,  } from './styledComponents/styledFeed'

function Feed() {
  return (
    <FeedContainer flex={4} p={2}>
      <PostShare/>
      <Posts/>
    </FeedContainer>
  )
}

export default Feed