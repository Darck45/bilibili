<template>
  <div>
    <van-field :label="label" :type="type" :rule="rule" :placeholder="placeholder" v-model="content" />
  </div>
</template>

<script>
export default {
  props: ["label", "type", "rule", "placeholder"],
  data() {
    return {
      content: ""
    };
  },
  methods: {
    handlerulg() {
      const rue = new RegExp(this.rule);
      if (rue.test(this.content)) {
        this.$emit("inputChange", this.content);
      }
    }
  },
  watch: {
    content() {
      this.handlerulg();
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
