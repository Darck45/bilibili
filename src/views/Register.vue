<template>
  <div>
    <login-tap middleTop="注册bilibili" />
    <login-text label="姓名" style="margin:4.167vw 0" placeholder="请输入姓名" rule="^.{6,16}" @inputChange="res => name = res" />
    <login-text label="账号" placeholder="请输入账号" rule="^.{6,16}" @inputChange="res => username = res" />
    <login-text label="密码" type="password" placeholder="请输入密码" rule="^.{6,16}" @inputChange="res => password = res" />
    <login-btn @registerSubmit="registerSubmit" btntext="注册" />
  </div>
</template>

<script>
import LoginTap from "../components/common/LoginTap";
import LoginText from "../components/common/LoginText";
import LoginBtn from "../components//common//LoginBtn";
export default {
  name: "Register",
  data() {
    return {
      name: "",
      username: "",
      password: ""
    };
  },
  components: {
    LoginTap,
    LoginText,
    LoginBtn
  },
  methods: {
    registerSubmit() {
      if (this.name && this.username && this.password) {
        this.$http
          .post("/register", {
            name: this.name,
            username: this.username,
            password: this.password
          })
          .then(res => {
            console.log(res);
          });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
