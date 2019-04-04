<template>
  <div class="category" >
    <div class="sideBar box">
      <router-link 
        v-for="tag in tags" 
        :key="tag.id" 
        :to="{ name: 'home', params: { tid: tag.tag_id }}"
      >
        <div class="category-name" @click="selectTag(tag)" :class="select === tag.tag_id ? 'selected': ''">
          {{tag.tag_name}}
        </div>
      </router-link>
    </div>
    <div class="underBar box">
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'Category',
  props: {
    open: Boolean,
  },
  data () {
    return {
      tags: [{
        tag_id: 1,
        tag_name: "背诵"
      },{
        tag_id: 2,
        tag_name: "语文"
      },{
        tag_id: 3,
        tag_name: "诗词"
      }],
      select: 0,
    }
  },
  mounted () {
    // fetch('/api/tags/', {
    //   method: 'GET',
    //   headers: {
    //     "Content-Type":"application/json",
    //     Token: cookie.getCookie('userId')
    //   },
    // }).then(res => {
    //   if(res.ok){
    //     return res.json()
    //   }
    // }).then(res => {
    //   this.tags = res.tags;
    // })
  },
  methods: {
    selectTag (tag) {
      this.select = tag.tag_id;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.category{
    .box{
      width: 260px;
      height: 1000px;
    }
    .sideBar{
      background-color: #ffffff;
      position: fixed;
      margin-top: 50px;
      padding-top: 30px;
      .category-name{
        width: 100%;
        height: 50px;
        // background: #cccccc;
        text-align: center;
        font-size: 18px;
        line-height: 50px;
      }
      .selected{
        background: #DDF0ED;
      }
    }
    .underBar{
      float:left;
    }
}

</style>
