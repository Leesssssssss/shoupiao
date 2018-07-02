<template>
  <div>
    <x-header title="支付成功"></x-header>

    <msg :title="('购票成功！')" :description="description" :buttons="buttons"></msg>
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
      description: '车票信息稍后会显示在我的订单中便于您的查询与取票。',
      buttons: [{
        type: 'primary',
        text: '返回首页',
        link: '/'
      }]
    }
  }
}
</script>