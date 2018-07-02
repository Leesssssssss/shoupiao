<template>
  <div>
    <x-header title="用户注册"></x-header>

    <msg :title="('注册成功！')" :buttons="buttons"></msg>
  </div>
</template>



<script>
import { XHeader, Msg, Divider, XButton } from 'vux'

export default {
  components: {
    XHeader,
    Msg,
    Divider,
    XButton
  },
  data () {
    return {
      buttons: [{
        type: 'primary',
        text: '登录',
        link: '/signIn'
      }]
    }
  }
}
</script>