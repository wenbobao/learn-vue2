<template>
  <div>
    <topic type="item"></topic>
  </div>
</template>
<script>
import topic from "@/components/topic";

export default {
  name: "item",
  components: {
    topic
  },
  data() {
    return {};
  },
  created() {
    this.$store.commit("REMBER_TIME");
  }
};
</script>
<style scoped>
</style>
