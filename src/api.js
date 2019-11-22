import axios from 'axios'

const baseURL = 'https://naomi-be-news.herokuapp.com/api'

export const getAllArticles = (topicName,  authorName, sort_by, order) => {
  return axios.get(`${baseURL}/articles`, {
    params: {
      topic: topicName,
      author: authorName,
      sort_by,
      order
    }
  })
}

export const getSingleArticle = (article_id) => {
  return axios.get(`${baseURL}/articles/${article_id}`)
}

export const getComments = (article_id, sort_by, order) => {
  return axios.get(`${baseURL}/articles/${article_id}/comments`, {
    params: {
      sort_by,
      order
    }
  })
}

export const updateCommentVotes = (comment_id, number) => {
  return axios.patch(`${baseURL}/comments/${comment_id}`, {
      inc_votes: number
  })
}

export const updateArticleVotes = (article_id, number) => {
  return axios.patch(`${baseURL}/articles/${article_id}`, {
      inc_votes: number
  })
}

export const updateVotes = (type, article_id, number) => {
  return axios.patch(`${baseURL}/type/${article_id}`, {
      inc_votes: number
  })
}

export const getUser = (user_id) => {
  return axios.get(`${baseURL}/users/${user_id}`,)
}

export const getAllUsers = () => {
  return axios.get(`${baseURL}/users`)
}

export const addComment = (article_id, username, body) => {
  return axios.post(`${baseURL}/articles/${article_id}/comments`,{
    username,
    body
  })
}

export const deleteComment = (comment_id) => {
  return axios.delete(`${baseURL}/comments/${comment_id}`)
}