<template>
  <div>
    <div class="card">
      <div>
        <svgIcon name="back" class='back'></svgIcon>
        <div class="detail-title">{{title}}</div>
        <button class="detail-button" @click="finish()">完成</button>
         <div class='quill-editor'>
          <div class="ql-container">
            <div class='ql-editor detail-content' v-html="content"></div>
         </div>
        </div>
      </div>
    </div>
  </div>
 
</template>

<script>
import svgIcon from './SvgIcon.vue'

export default {
  name: 'recall',
    components: {
    svgIcon
  },
  data(){
    return {
        title: '',
        content: '<p><span style="color: rgb(0,0,0);">sdf</span></p>',
        options: {
            modules: {
              toolbar: false
            },
            theme: 'snow',
            readOnly:true,
        }
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
</style>