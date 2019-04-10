<template>
  <div class="home">
    <div class="notes" ref="notesBox">
      <div class="notes-none" v-if="!notes.length" >
        暂无碎片，快来创建属于你的记忆碎片吧！
      </div>
      <Note v-for="note in notes" :key="note.id" :title="note.title" :content="note.content" :tags="note.tags"/>
      <Note class="invisibleNotes" v-for="n in invisibleNotes" :key="n.id" />
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import Note from '@/components/Note.vue'
import cookie from '../cookie.js'

export default {
  name: 'home',
  components: {
    Note
  },
  data () {
    return {
      notes: [{
        title: '定风波·苏轼',
        content: '三月七日，沙湖道中遇雨。雨具先去，同行皆狼狈，余独不觉，已而遂晴，故作此词。莫听穿林打叶声，何妨吟啸且徐行。竹杖芒鞋轻胜马，谁怕？一蓑烟雨任平生。料峭春风吹酒醒，微冷，山头斜照却相迎。回首向来萧瑟处，归去，也无风雨也无晴。 ',
        tags: ['语文', '诗词hhhhh', '背诵', '苏东坡']
      },{
        title: '定风波·苏轼',
        content: '三月七日，沙湖道中遇雨。雨具先去，同行皆狼狈，余独不觉，已而遂晴，故作此词。莫听穿林打叶声，何妨吟啸且徐行。竹杖芒鞋轻胜马，谁怕？一蓑烟雨任平生。料峭春风吹酒醒，微冷，山头斜照却相迎。回首向来萧瑟处，归去，也无风雨也无晴。 ',
        tags: ['语文', '诗词', '背诵', '苏东坡']
      },{
        title: '定风波·苏轼',
        content: '三月七日，沙湖道中遇雨。雨具先去，同行皆狼狈，余独不觉，已而遂晴，故作此词。莫听穿林打叶声，何妨吟啸且徐行。竹杖芒鞋轻胜马，谁怕？一蓑烟雨任平生。料峭春风吹酒醒，微冷，山头斜照却相迎。回首向来萧瑟处，归去，也无风雨也无晴。 ',
        tags: ['语文', '诗词', '背诵', '苏东坡']
      },{
        title: '定风波·苏轼',
        content: '三月七日，沙湖道中遇雨。雨具先去，同行皆狼狈，余独不觉，已而遂晴，故作此词。莫听穿林打叶声，何妨吟啸且徐行。竹杖芒鞋轻胜马，谁怕？一蓑烟雨任平生。料峭春风吹酒醒，微冷，山头斜照却相迎。回首向来萧瑟处，归去，也无风雨也无晴。 ',
        tags: ['语文', '诗词', '背诵', '苏东坡']
      }],
      invisibleNotes: 3,
    }
  },
  mounted () {
    if(!cookie.checkCookie('userId')){
      this.$router.push('/');
    }
    const tid = this.$route.params.tid
    if(!tid){
      tid = ''
    }
    fetch(`/api/fragments/${tid}`, {
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
      this.notes = res.fragments;
    })
    this.box = this.$refs.notesBox;
    const n = this.box.clientWidth / 330 - (this.notes.length % 4);
    this.invisibleNotes = n;
  }
}
</script>
<style lang="scss" scoped>
.home{
  .notes{
    margin: 0 auto;
    text-align: center;
    padding-top: 100px;
    max-width: 1320px;
    min-height: 900px;  
    .notes-none{
      color: #cccccc;
      font-size: 22px;
      padding-top: 100px;
      position: fixed;
      margin:0 auto;
      left:0;
      right:0;
    }
  }
  .invisibleNotes{
    visibility: hidden;
  }

}

</style>

