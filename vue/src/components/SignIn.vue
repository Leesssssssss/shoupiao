<template>
  <div>

    <x-header title="用户登录"></x-header>

    <group>
      <x-input v-model="telNum" title="账&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;号：" name="mobile" placeholder="请输入账号" keyboard="number" is-type="china-mobile"></x-input>
    </group>
    <group>
      <x-input v-model="password" title="密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码：" type="password" placeholder="请输入密码"></x-input>
    </group>

    <br>
    <x-button @click.native="signIn" style="width:98%" type="primary">登录</x-button>

    <br>
    <flexbox class="btn">
      <flexbox-item>
        <x-button type="primary" link="/signUp">注册</x-button>
      </flexbox-item>
    </flexbox>

    <div class="box">登录账号后可以保存常用路线，更加方便快捷</div>

  </div>
</template>

<script>
import { XHeader, XInput, Group, XButton, Flexbox, FlexboxItem } from 'vux'
import axios from 'axios'

export default {
  components: {
    XHeader,
    XInput,
    Group,
    XButton,
    Flexbox,
    FlexboxItem
  },
  methods: {
    signIn: function() {
      var data = {
        telNum: this.telNum,
        password: this.password
      };
      axios.post("http://localhost:7001/adds", data).then((response) => {
        if (response.data.data === '登录成功') {
          localStorage.telNum = this.telNum;
          location.href = '/';
          return;
        } 
        if (response.data.data === '用户未注册或用户名/密码输入错误') {
          alert (response.data.data);
          return;
        }
      });
    }
  },
  data () {
    return {
      telNum: '',
      password: ''
    }
  }
}
</script>

<style scoped>
  .box {
    margin: 30px 5px;
    padding: 10px;
    border-radius: 5px;
    color: #d8dee5;
    background-color: #a4b2c3;
  }
  .btn {
    width: 98%;
    margin: 0 5px;
  }
</style>
