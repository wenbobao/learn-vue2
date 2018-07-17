<template>
  <div>
    <item type="item"></item>
  </div>
</template>
<script>
import item from "@/components/item";

export default {
  name: "item",
  components: {
    item
  },
  data() {
    return {};
  },
  methods: {},
  created() {
    this.$store.commit("REMBER_TIME");
  }
};
</script>
<style scoped>
</style>
