<template>
  <div class="note">
    <div class="note-title">{{this.title}}</div>
    <div class="note-content">{{this.content}}</div>
    <div class="note-tags">
      <span v-for="tag in tags" :key="tag.id" >{{tag}}</span>
    </div>
  </div>
</template>
<script>
export default {
  components: {
    Note
  },
  props:{
    title: String,
    content: String,
    tags: Array
  },
  data () {
    return {
      
    }
  }
}
</script>
<style scope lang="scss">

</style>
