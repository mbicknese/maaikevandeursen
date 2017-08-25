<template>
  <main>
    <h1>Maaike van Deursen</h1>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <router-link :to="{ name: 'BlogPost', params: { id: post.sys.id }}">{{ post.fields.title }}</router-link>
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
