<template>
  <div>
    <div class="card">
      <div>
        <svgIcon name="back" class='back'></svgIcon>
        <div class="detail-title">{{title}}</div>
        <button class="detail-button" @click="toEdit()">编辑</button>
         <div class='quill-editor'>
          <div class="ql-container">
            <div class='ql-editor detail-content' v-html="content"></div>
         </div>
        </div>
      </div>
      <div class="note-tags">
        <svgIcon name="tag"></svgIcon>
        <div class="tags-box">
          <span v-for="tag in tagsFilter" :key="tag.id" >{{tag}}</span>
        </div>
      </div>
    </div>
    <div class="recall" @click="toRecall()">溯</div>
  </div>
</template>

<script>
import svgIcon from '../components/SvgIcon.vue'

export default {
  name: 'detail',
  components: {
    svgIcon
  },
  data () {
      return {
        title: '',
        content: '<p><span style="color: rgb(0,0,0);">sdf</span></p>',
        tags: [],
        options: {
            modules: {
              toolbar: false
            },
            theme: 'snow',
            readOnly:true,
        }
      }
  },
  mounted(){
    const { match } = this.props;
    fetch(`/api/fragments/detail/${match.params.tid}`, {
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
      this.title = res.title,
      this.content = res.content,
      this.tags = res.tags
    })
  },
  methods:{
    toEdit(){
      const { match } = this.props;
      this.$router.push(`/edit/${match.params.id}`);
    },
    toRecall(){
      const { match } = this.props;
      this.$router.push(`/recall/${match.params.id}`);
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
.card{
  width: 800px;
  min-height: 650px;
  background-color: #ffffff;
  box-shadow: 0px 2px 15px 0px rgba(0, 0, 0, 0.15);
  padding: 25px 35px;
  box-sizing: border-box;
  margin: 100px auto 50px auto;
  .back{
    width: 40px;
    height: 40px;
    display: inline-block;
    vertical-align: middle; 
    margin-left: 10px; 
  }
  .detail-title{
    height: 32px;
    font-size: 20px;
    width: 500px;
    color: gray;
    margin-left: 20px;
    display: inline-block;
    vertical-align: bottom;  
    outline:none;
    white-space: nowrap;
    overflow: auto;
    animation: 15s wordsLoop linear infinite normal; 
  }
  .detail-button{
    margin-left: 50px;
    width: 80px;
    height: 35px;
    background-color: rgba(221, 240, 237, 1);
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.15);
    outline:none;
    border-style: none;
    display: inline-block;
    vertical-align: middle;
  }
  .detail-content{
    margin: 30px 20px;
    min-height: 500px;
  }
}
.recall{
  color: white;
  font-size: 35px;
  width: 68px;
  height: 68px;
  font-weight: bold;
  border-radius: 50%;
  background-color:#CAE6E2; 
  text-align: center;
  line-height: 68px;
  float: right;
  margin: -150px 130px 100px 0;
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

</style>
