<template>
  <div>
    <x-header title="常用地址"></x-header>

    <group :title="('快速查询购票')">
      <popup-picker title="出发城市" :data="setoutCity" v-model="setout" style="height: 50px;"></popup-picker>
      <popup-picker title="到达城市" :data="setoutCity" v-model="arrive" style="height: 50px;"></popup-picker>
    </group>
    <br>
    <x-button @click.native="search" style="width:98%" type="primary">查询</x-button>
  </div>
</template>



<script>
import { XHeader, PopupPicker, Group, XButton } from 'vux'
import axios from 'axios'

export default {
  components: {
    XHeader,
    PopupPicker,
    Group,
    XButton
  },
  data() {
    return {
      setoutCity: [
        [
          "安居区",
          "安岳县",
          "璧山县",
          "白玉县",
          "北川县",
          "巴中市",
          "重庆市",
          "成都市"
        ]
      ],
      setout: [],
      arrive: []
    };
  },
  async mounted() {
    var telNum = { telNum: localStorage.telNum };
    axios.post("http://localhost:7001/usualAddress", telNum).then(response => {
      this.tickets = response.data;
      this.setout.push(this.tickets[0].setout);
      this.arrive.push(this.tickets[0].arrive);      
    });
  },
  methods: {
    search: function() {
      console.log(this.setout);
      var bus = {
        setout: this.setout[0],
        arrive: this.arrive[0]
      }
      axios.post('http://localhost:7001/searchBuses', bus).then(function(response) {
        if (response.data.data === '查询成功') {
          location.href = '/#/ticket';
          return;
        }
        if (response.data.data === '未查询到当前车次') {
          alert(response.data.data);
        }
      });
    }
  },
}
</script>