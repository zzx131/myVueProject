<template>
  <div class="login">
    <form name="form" action>
      <input id="username" type="text" placeholder="请输入手机号码或用户名" />
      <input id="pwd" type="password" placeholder="请输入密码" />
      <button onclick="login()">登录</button>
    </form>
    <div class="account">
      <p class="forget" style="float:right">忘记密码?</p>
      <div class="register">
        <span>还没有账号?</span>
        <a href="#">手机注册</a>
      </div>
    </div>
    <el-button>默认按钮</el-button>
    <el-button type="primary">主要按钮</el-button>
    <el-button type="text">文字按钮</el-button>
  </div>
</template>

<script>
export default {
  name: 'MyHello',
  mounted () {
    debugger
    this.$axios.get('/api/index/2').then((response) => {
      console.log(response.data)
    }).catch(function (error) {
      console.log(error)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
