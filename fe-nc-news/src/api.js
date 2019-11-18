import axios from 'axios'

export const getAllArticles = (topicName,  authorName, sort_by) => {
  return axios.get('https://naomi-be-news.herokuapp.com/api/articles', {
    params: {
      topic: topicName,
      author: authorName,
      sort_by: sort_by
    }
  })
}

export const getSingleArticle = (article_id) => {
  return axios.get(`https://naomi-be-news.herokuapp.com/api/articles/${article_id}`)
}