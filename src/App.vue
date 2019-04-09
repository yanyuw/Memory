<template>
  <div id="app">
    <Header :category="category" />
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
      category: '拾取你的记忆'
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
  overflow: scroll;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
