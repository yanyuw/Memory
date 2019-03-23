<template>
  <div class="landing">
      <div class="mask">
        <div class="login-wrapper">
          <div class="login-container">
            <Login class="login"></Login>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Login from '@/components/Login.vue'

export default {
  name: 'landing',
  components: {
    Login
  }
}
</script>
<style scoped lang="scss">
.mask{
  background-color: rgba(0, 0, 0, .5);
  position: fixed;
  width: 100%;
  height:100%;
  top:0;
  left: 0;
  z-index: 99;
  display: table;
}
.login-wrapper{
  display: table-cell;
  vertical-align: middle;
}
</style>
