<template>
  <h1>Student GPA</h1>
  <div class="student">
    <StudentCard
      v-for="student in students"
      :key="student.id"
      :student="student"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import StudentCard from '@/components/StudentCard.vue'
import StudentService from '@/services/StudentService.js'

export default {
  name: 'StudentView',
  components: {
    StudentCard
  },
  data() {
    return {
      students: null
    }
  },
  created() {
    StudentService.getEvents()
      .then((response) => {
        this.events = response.data
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
</script>

<style scoped>
.student {
  display: flex;
  flex-direction: column;
  align-items: center;
}
h4 {
  font-size: 20px;
}
</style>
