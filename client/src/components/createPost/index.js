import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'
import { Button, Grid } from '@material-ui/core';

const CreatePost = ({submitPost}) => {
  const classes = useStyles()
  const [postInput, setPostInput] = useState('')
  const handleInputChange = (event) => {
    setPostInput(event.target.value)
  }
  const handleSubmitClick = () => {
    submitPost(postInput)
    setPostInput('')
  }
  return (
    <Grid container alignItems='center' justify='center' spacing={3} className={classes.container}>
      <Grid item xs={8} align='center'>
        <TextField 
          value={postInput} 
          fullWidth 
          id="outlined-basic" 
          label="Write your post" 
          variant="outlined" 
          onChange={handleInputChange}
        />
      </Grid>
      <Grid item xs={4}>
      <Button variant="contained" color="secondary" onClick={handleSubmitClick}>
        Submit
      </Button>
      </Grid>
    </Grid>
  )
}

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 10,
  }
}))

export default CreatePost