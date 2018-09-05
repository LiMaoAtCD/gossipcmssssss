<template>
    <div class="login">
        <div class="login-bg"></div>
        <div class="login-main">
            <div class="login-title">登录</div>
            <form>
                用户名
                <input type="text" name="username" value=""><br>
                密码
                <input type="password" name="password" value=""><br>
                <input type="submit" value="提交">
            </form>
        </div>
    </div>
</template>


<script>
export default {
  name: 'Login',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
    margin: 0;
    padding: 0;
}

.login {
    background-color: black;
    width: 100%;
    height: 100%;
    position: absolute;
}
.login-bg {
    background-color: gray;
    width: 100%;
    height: 100%;
}
.login-main {
    background-color: whitesmoke;
    width: 500;
    margin: 0 auto;
    position: relative;
    height: 400;
}

h1, h2 {
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