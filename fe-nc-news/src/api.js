import axios from 'axios'

export const getAllArticles = (topicName,  authorName, /*sort_by,*/
  /*order*/) => {
  return axios.get('https://naomi-be-news.herokuapp.com/api/articles', {
    params: {
      topic: topicName,
      author: authorName,
      /*sort_by,*/
      /*order*/
    }
  })
}

export const getSingleArticle = (article_id) => {
  return axios.get(`https://naomi-be-news.herokuapp.com/api/articles/${article_id}`)
}

export const getComments = (article_id) => {
  return axios.get(`https://naomi-be-news.herokuapp.com/api/articles/${article_id}/comments`)
}

export const updateCommentVotes = (comment_id, number) => {
  return axios.patch(`https://naomi-be-news.herokuapp.com/api/articles/${comment_id}/comments`, {
    data: {
      inc_votes: number
    }
  })
}