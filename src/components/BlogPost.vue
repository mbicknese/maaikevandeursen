<template>
<article>
  <h1>{{ title }}</h1>
  {{ content }}
</article>
</template>

<script>
import contentful from '../content'

export default {
  props: {
    id: { required: true, type: String }
  },
  data: () => ({
    title: '',
    content: ''
  }),
  mounted () {
    contentful.getBlogPost(this.id).then(this.setFields)
  },
  methods: {
    setFields (fields) {
      this.title = fields.title
      this.content = fields.content
    }
  }
}
</script>
