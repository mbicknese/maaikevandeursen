import client from './client'
// import { parseEntries } from 'contentful'

export default {
  getBlogPosts () {
    return client
      .getEntries({ 'content_type': 'blogPost' })
      .then(response => response.items)
  },
  getBlogPost (id) {
    return client
      .getEntry(id, 'blogPost')
      .then(response => response.fields)
  }
}
