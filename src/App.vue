<template>
  <div id="app">
    <Header :categoryName="categoryName" />
    <router-view/>
  </div>
</template>
<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'

export default {
  components: {
    Header
  },
  data () {
    return {
      // category: localStorage.category
      categoryName: '拾取你的记忆'
    }
  }
}
</script>
<style lang="scss">
*{
  padding: 0;
  margin: 0
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background: #f2f2f2;
}
a {
  color: inherit;
  cursor: pointer;
  text-decoration: none;
}
</style>
