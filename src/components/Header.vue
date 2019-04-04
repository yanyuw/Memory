<template>
  <div class="container">
    <div class="header">
        <!-- <img class="menu" src="../assets/logo.png" /> -->
        <svgIcon name="menu" @click.native="openCategory()"></svgIcon>
        <div>
          <img class="logo" src="../assets/logo.png"/>
          <div id="category-name">{{categoryName}}</div>
        </div>
        <img class="person" :src="avatar"/>
    </div>
    <transition name="fade">
      <Category v-if="open" />
    </transition>
  </div>
</template>

<script>
import svgIcon from './SvgIcon.vue'
import Category from './Category.vue'
import cookie from '../cookie.js'

export default {
  name: 'Header',
  props: {
    categoryName: String
  },
  data () {
    return {
      open: false,
      avatar: ""
    }
  },
  components: {
    svgIcon,
    Category
  },
  mounted(){
    fetch('/api/myinfo/', {
      method: 'GET',
      headers: {
        "Content-Type":"application/json",
        Token: cookie.getCookie('userId')
      },
    }).then(res => {
      if(res.ok){
        return res.json()
      }
    }).then(res => {
      this.avatar = res.avatar
      cookie.setCookie('avatar', this.avatar);
    })
  },
  methods: {
    openCategory () {
      this.open = !this.open;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container{
  .header{
      width: 100%;
      height: 50px;
      line-height: 50px;
      background-color: rgba(221, 240, 237, 1);
      text-align: center;
      box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.15);
      border: 1px solid rgba(255, 255, 255, 0);
      display: flex;
      display: -webkit-flex;
      justify-content:space-between;
      align-items: center;
      position: fixed;
      top: 0;
      left: 0;
      font-size: 18px;
      z-index: 99;
      .svg-icon--menu{
        margin-left: 20px;
        cursor: pointer;
      }
      img {
        width: 30px;
        height: 30px;
        border-radius: 100%;
        vertical-align: middle;
        margin-right: 10px;
      }
      #category-name{
        width:120px;
        display: inline-block;
      }
  }
  .fade-enter-active, .fade-leave-active {
    transition: all .3s ease;
  }
  .fade-enter, .fade-leave-to
  /* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateX(-70px);
    opacity: 0;
  }
}

</style>
