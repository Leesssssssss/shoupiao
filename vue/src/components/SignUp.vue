<template>
  <div>

    <x-header title="用户注册"></x-header>

    <group>
      <x-input v-model="telNum" title="手机号码：" name="mobile" placeholder="请输入手机号码" keyboard="number" is-type="china-mobile"></x-input>
    </group>
    <group>
      <x-input v-model="password" title="密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码：" type="password" placeholder="请输入密码"></x-input>
    </group>

    <br>
    <x-button @click.native="signUp" style="width:98%" type="primary">注册</x-button>

    <div class="box">提示：请输入正确的手机号码，忘记密码可以通过手机号码找回</div>

  </div>
</template>

<script>
import { XHeader, XInput, Group, XButton } from "vux";
import axios from "axios";

export default {
  components: {
    XHeader,
    XInput,
    Group,
    XButton
  },
  methods: {
    signUp: function() {
      var data = {
        telNum: this.telNum,
        password: this.password
      };
      axios.post("http://localhost:7001/add", data).then(function(response) {
        if (response.data.data === '注册成功') {
            location.href = '/#/success';
            return;
        } else {
          alert('用户名已存在！');
        }
      });
    }
  },
  data() {
    return {
      telNum: "",
      password: ""
    };
  }
};
</script>

<style scoped>
.box {
  margin: 30px 5px;
  padding: 10px;
  border-radius: 5px;
  color: #d8dee5;
  background-color: #a4b2c3;
}
</style>
