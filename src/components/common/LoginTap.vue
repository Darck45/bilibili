<template>
  <div>
    <div class="LoginTop">
      <div></div>
      <div>{{middleTop}}</div>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["middleTop"],
};
</script>

<style lang="less" scoped>
.LoginTop {
  height: 12.5vw;
  background-color: white;
  display: flex;
  div {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 4.44vw;
  }
}
</style>
