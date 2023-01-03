import React, { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import { api } from '../constants';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Articles = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const getFetchArticles = async () => {
    setLoading(true);
    try {
      const response = await fetch(api);
      if (response.ok) {
        const data = await response.json();
        setArticles(data)
      }
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    // fetch(api)
    //   .then((res) => res.json())
    //   .then((data) => setArticles(data))
    // getFetchArticles()
  }, [])

  return (
    <>
      <h2>Articles</h2>
      <Button 
        variant="contained" 
        color="success"
        onClick={getFetchArticles}
      >
        Get API
      </Button>
      {loading && (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <CircularProgress />
        </Box>
      )}
          {!loading && articles.map((article) => (
            <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
            <Card sx={{ maxWidth: 345 }} key={article.id}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={article.imageUrl}
                  alt="img"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {article.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {article.summary}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
        </Box>
      ))}
      {error && <p sryle={{color: 'red'}}>{error}</p>}
    </>
  )
}

export default Articles;