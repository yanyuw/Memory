<template>
    <div class="card">  
        <svgIcon name="back" class='back'></svgIcon>
        <input placeholder=" 笔记标签" class="edit-title" />
        <button class="edit-button">保存</button>
        <quill-editor v-model="content"
                    ref="myQuillEditor"
                    :options="editorOption"
                    class='editor'>
        </quill-editor>
        <svgIcon name="tag" class='tag'></svgIcon>
        <input class="input-tags" placeholder="                请用分号隔开不同的标签" />
    </div>
</template>

<script>
import svgIcon from '../components/SvgIcon.vue'
import { quillEditor } from 'vue-quill-editor'
  
  export default {
    components:{
        svgIcon
    },
    data () {
      return {
        content: '',
        editorOption: {
          modules: {
            toolbar: [
              ['bold', 'italic', 'underline', 'strike'],
              ['blockquote', 'code-block'],
              [{ 'header': 1 }, { 'header': 2 }],
              [{ 'list': 'ordered' }, { 'list': 'bullet' }],
              [{ 'script': 'sub' }, { 'script': 'super' }],
              [{ 'indent': '-1' }, { 'indent': '+1' }],
              [{ 'direction': 'rtl' }],
              [{ 'size': ['small', false, 'large', 'huge'] }],
              [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
              [{ 'font': [] }],
              [{ 'color': [] }],
              [{ 'align': [] }],
              ['clean'],
              ['link', 'image'],
              [{ 'background': "rgba(221, 240, 237, 1)"}],
            ],
            syntax: {
              highlight: text => hljs.highlightAuto(text).value
            }
          }
        }
      }
    },
    methods: {
    },
    computed: {
      // editor() {
      //   return this.$refs.myQuillEditor.quill
      // }
    },
    mounted() {
    },
    updated(){
      console.log(this.content);
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
  margin: 100px auto 70px auto;
  .back{
    width: 40px;
    height: 40px;
    display: inline-block;
    vertical-align: middle; 
    margin-left: 10px;
  }
  .edit-title{
    height: 32px;
    font-size: 16px;
    width: 500px;
    margin-left: 20px;
    display: inline-block;
    vertical-align: middle;  
    outline:none;
  }
  .edit-button{
    margin-left: 50px;
    width: 80px;
    height: 35px;
    background-color: rgba(221, 240, 237, 1);
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.15);
    outline:none;
    border-style: none;
    display: inline-block;
    vertical-align: middle 
  }
  .editor{
      width:700px;
      min-height: 500px;
      margin-top: 10px;
      margin: 10px auto;
  }
  .tag{
    width: 20px;
    height: 20px;
    display: inline-block;
    vertical-align: middle; 
    margin-top: 30px;
    margin-left: 10px
  }
  .input-tags{
    height: 20px;
    display: inline-block;
    vertical-align: middle; 
    margin-top: 30px;
    margin-left: 10px;
    width: 250px;
  }
}

</style>