<template>
  <div class="login">
      <div class="login-title">{{ifSignUp ? '注册' : '登录'}}</div>
      <div>
        <svgIcon name="username"></svgIcon>
        <input v-model="username" placeholder="用户名"/>
      </div>
      <div>
        <svgIcon name="password"></svgIcon>
        <input type="password" v-model="password" placeholder="密码"/>
      </div>
      <div v-if="ifSignUp">
        <svgIcon name="email"></svgIcon>
        <input v-model="email" placeholder="邮箱" />
        <div class="login-button" @click="signUp()">注册</div>
      </div>
      <div v-if="!ifSignUp">
          <div class="login-info">没有账号？快来<span @click="changeSignUp()">注册</span>吧！</div>
          <div class="login-button" @click="signIn()">登录</div>
      </div>
      <div class="input-none" v-if="none">*任何一项不能为空！</div>
  </div>
</template>

<script>
import svgIcon from './SvgIcon.vue'

export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: '',
      email: '',
      ifSignUp: false,
      none: false
    }
  },
  components: {
    svgIcon
  },
  methods: {
    changeSignUp () {
      this.ifSignUp = true;
      this.none = false;
    },
    signUp () {
      if(this.username != '' && this.password != '' && this.email != ''){
          
      } else {
        this.none = true;
      }

    },
    signIn () {
      if(this.username != '' && this.password != ''){
      
      } else {
        this.none = true;
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.login{
    width: 350px;
    padding: 30px 60px;
    color: #101010;
    background-color: #ffffff;
    font-size: 14px;
    text-align: center;
    box-shadow: 0px 2px 15px 0px rgba(0, 0, 0, 0.15);
    border: 1px solid rgba(255, 255, 255, 0);
    border-radius: 10px;
    margin: 0 auto;
    input{
        width: 200px;
        height: 30px;
        padding: 2px 5px;
        margin: 10px 0;
        border-radius: 10px;
        border: 1px solid #c5c5c5;
        outline: none;
    }
    span{
        margin: 2px;
        font-weight: bold;
        cursor: pointer;
    }
    .login-title{
        font-size: 18px;
        height: 60px;
    }
    .login-info{
        margin-top: 36px;
    }
    .login-button{
        background-color: #DDF0ED;
        width: 90px;
        height: 40px;
        line-height: 40px;
        margin: 30px auto 0 auto;
        box-shadow: 0px 2px 15px 0px rgba(0, 0, 0, 0.15);
        cursor: pointer;
    }
    .svg-icon{
      vertical-align: middle;
      padding-right: 15px;
    }
}

</style>
