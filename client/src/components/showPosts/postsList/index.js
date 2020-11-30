import React from 'react'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

const PostsList = ({post}) => {
  return (
    <Grid container>
      <Grid item>
        <List>
          <ListItem>
            <ListItemText primary={post}/>
          </ListItem>
        </List>
      </Grid>
    </Grid>
  )
}

export default PostsList