<template>
  <div>
    <div class="card">
      <div>
        <svgIcon name="back" class='back'></svgIcon>
        <div class="detail-title">{{title}}</div>
        <button class="detail-button">编辑</button>
      </div>
      <!-- <div class="detail-content">{{content}}</div> -->
      <div class="ql-container ql-snow">
        <div class="ql-editor">{{content}}</div>
      </div>
    </div>
    <div class="recall">溯</div>
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
        content: '<p>bosdf</p>'
      }
  },
  mounted(){
    // var html=this.content//这个是通过quill获取到的html
    // var quill= new Quill('css selecotr',{options})  //在想显示的地方新建一个编辑器
    // quill.root.innerHTML=html  //将编辑器的内容替换成自己获得的内容
    // quill.enable(false)  //禁用编辑器的编辑功能
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

</style>
