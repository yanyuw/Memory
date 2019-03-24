<template>
  <div class="note">
    <div class="note-title">{{this.title}}</div>
    <div class="note-content">{{this.content}}</div>
    <div class="note-tags">
      <div class="tags-box">
        <span v-for="tag in tagsFilter" :key="tag.id" >{{tag}}</span>
      </div>
      <svgIcon name="tag"></svgIcon>
    </div>
  </div>
</template>
<script>
import svgIcon from './SvgIcon.vue';
export default {
  name: 'Note',
  props:{
    title: String,
    content: String,
    tags: Array
  },
  components: {
    svgIcon
  },
  data () {
    return {
      
    }
  },
  computed: {
    tagsFilter: function() {
      return this.tags.filter((tag, index) => {
        return index < 3;
      })
    }
  }
}
</script>
<style scope lang="scss">
.note{
  width: 240px;
  height: 340px;
  background-color: #ffffff;
  box-shadow: 0px 2px 15px 0px rgba(0, 0, 0, 0.15);
  padding: 25px 35px;
  box-sizing: border-box;
  display: inline-block;
  margin: 45px;
  .note-title{
    text-align: center;
    font-size: 18px;
    height: 24px;
  }
  .note-content{
    height: 215px;
    width: 170px;
    margin-top: 16px;
    overflow: hidden;
    position:relative;
    &::after{
      content:"...";
      font-weight:bold;
      position:absolute;
      bottom: 0;
      right:0;
      padding:0 5px 5px 45px;
      background: url(http://css88.b0.upaiyun.com/css88/2014/09/ellipsis_bg.png) repeat-y;
    }
  }
  .note-tags{
    margin-top: 20px;
    .tags-box{
      display: inline-block;
      width: 150px;
      height: 20px;
      overflow: hidden;
    }
    span{
      padding: 0 5px;
      margin: 0 5px;
      font-size: 14px;
      border: 1px solid #BBBBBB;
      color: #a2a2a2;
    }
  }
  .svg-icon{
    // vertical-align: middle;
    width: 20px;
    height: 20px;
  }
}

</style>
