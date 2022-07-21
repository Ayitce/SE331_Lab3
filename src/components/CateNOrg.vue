<template>
  <div class="categories-and-organizer">
    <h3>{{ event.category }}</h3>
    <h3>{{ event.organizer }}</h3>
  </div>
</template>

<script>
export default {
  name: 'CateNOrg',
  props: {
    event: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.categories-and-organizer {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
  text-align: right;
}
</style>
