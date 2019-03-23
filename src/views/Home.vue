<template>
  <div class="home">
    <!-- <div v-for="note in notes" :key="note.id">
      <Note title="note.title"/>
    </div> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import Note from '@/components/Note.vue'

export default {
  name: 'home',
  components: {
    // Note
  },
  data () {
    notes: [{
      title: "hhhhh",
      content: "hhhhhhhhhhhhhhhhh",
      tags:['1', '2', '3']
    }]
  },
  // mounted () {

  // }
  
}
</script>
