<template>
  <main>
    <h1>Maaike van Deursen</h1>
    <ul>
      <li v-for="post in posts" :key="post.id">
        {{ post.fields.title }}
      </li>
    </ul>
  </main>
</template>

<script>
import contentful from '../content'

export default {
  name: 'hello',
  data: () => ({
    posts: []
  }),
  mounted () {
    contentful.getBlogPosts().then(this.setPosts)
  },
  methods: {
    setPosts (posts) {
      this.posts = posts
    }
  }
}
</script>
