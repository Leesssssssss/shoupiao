<template>
  <div>
    <x-header title="支付中心"></x-header>

    <divider style="margin-top:10%;margin-left:5%;margin-right:5%">{{ ('扫描下方二维码完成支付') }}</divider>
    <qrcode style="text-align:center;margin-top:25%;" value="https://vux.li?x-page=demo_qrcode" type="img"></qrcode>

    <div style="position:absolute; bottom:10%;width:90%;margin: 0 5%;">
      <x-button @click.native="submit" plain link='/paySuccess'>支付完成后点击</x-button>
      <br>
      <x-button plain link='/'>取消支付</x-button>
    </div>
    
  </div>
</template>



<script>
import { XHeader, Qrcode, Divider, XButton } from 'vux'
import axios from 'axios'

export default {
  components: {
    XHeader,
    Qrcode,
    Divider,
    XButton
  },
  methods: {
    submit: function() {
      var ticketInfo = {
        name: localStorage.name,
        telNum: localStorage.telNum,
        setout: localStorage.setout,
        arrive: localStorage.arrive,
        time: localStorage.time,
        setoutData: localStorage.Data
      };
      axios.post('http://localhost:7001/addNum', ticketInfo).then((response) => {
        console.log(response.data);
      });

    }
  }
}
</script>