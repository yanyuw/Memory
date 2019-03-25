<template>
  <div class="container">
    <div class="header">
        <!-- <img class="menu" src="../assets/logo.png" /> -->
        <svgIcon name="menu" @click="openCategory()"></svgIcon>
        <div>
          <img class="logo" src="../assets/logo.png"/>
          <div id="category">{{category}}</div>
        </div>
        <img class="person" src="../assets/logo.png"/>
    </div>
    <!-- <Category /> -->
  </div>
</template>

<script>
import svgIcon from './SvgIcon.vue'
// import Category from './Category.vue'

export default {
  name: 'Header',
  props: {
    category: String
  },
  components: {
    svgIcon,
    // Category
  },
  methods: {
    openCategory () {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
    z-index: 99;
    .svg-icon--menu{
      margin-left: 20px;
      cursor: pointer;
    }
    img {
      width: 24px;
      height: 24px;
      vertical-align: middle;
    }
    #category{
      width:120px;
      display: inline-block;
    }
}

</style>
