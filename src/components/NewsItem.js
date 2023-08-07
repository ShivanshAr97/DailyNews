import React, { useEffect, useState } from 'react'

const NewsItem = () => {

  const [articles, setArticles] = useState([])
  const list=[]
  async function fetchMovies() {
    const resp = await fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=85dcd9cf406f461c818565d0d0be1c40&pageSize=100');
    const data = await resp.json()
    setArticles(data.articles);
    console.log(data);

  }

  useEffect(() => {
    fetchMovies()
  }, [])

  return (
    <div className='grid grid-cols-3'>
      {articles.map((article, index) => (
        <div className='flex flex-col text-center my-4 border rounded-lg m-4 px-4 py-2'>

          {article.urlToImage && article.urlToImage !== '' ? <img className='mb-2' key={index} src={article.urlToImage} /> : <img className='mb-2' key={index} src='https://www.euractiv.com/wp-content/uploads/sites/2/2014/03/news-default.jpeg' />}
          <p className='mb-2' key={index}>{article.title}</p>
          {article.author && article.author !== '' ? <p className='mb-2' key={index}>{article.author.split(' ')[0]}  {article.author.split(' ')[1]}</p> : <p>Anonymous</p>
          }
          <p>{article.description}</p>
        </div>
      ))}
    </div>
  )
}

export default NewsItem