<template>
  <div>
    <x-header :left-options="{showBack: false}" >汽车票务系统平台<a slot="right" @click="signIn">登录</a></x-header>
    <group title="请选择出发日期" label-width="5em" style="margin-top: 15px;">
      <inline-calendar
        ref="calendar"
        class="inline-calendar-demo"
        :show-last-month="showLastMonth"
        :show-next-month="showNextMonth"
        v-model="data"
        start-date="2018-03-16"
        highlight-weekend
        >
      </inline-calendar>
      <div style="margin-top: 10px;"></div>
      <popup-picker title="出发城市" :data="setoutCity" v-model="setout" style="height: 50px;"></popup-picker>
      <popup-picker title="到达城市" :data="setoutCity" v-model="arrive" style="height: 50px;"></popup-picker>
      
      <br>
      <x-button @click.native="search" style="width:98%" type="primary">查询</x-button>
      <!-- <cell title='公告' class="notice" value='如果你在使用被产品市出现任何问题，请拨打电话：12345678901'></cell> -->
        
    </group>
    <marquee class="notice">公告:如果你在使用本产品时出现任何问题，请拨打电话：12345678901</marquee>
    <tabbar>
      <tabbar-item link='/myTicket'>
        <span slot="label">我的订单</span>
      </tabbar-item>
      <tabbar-item link='/address'>
        <span slot="label">常用地址</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import {
  XHeader,
  PopupPicker,
  Group,
  Calendar,
  InlineCalendar,
  Tabbar,
  TabbarItem,
  XButton,
  Cell
} from "vux";
import axios from 'axios'

export default {
  components: {
    XHeader,
    PopupPicker,
    Group,
    Calendar,
    InlineCalendar,
    Tabbar,
    TabbarItem,
    XButton,
    Cell
  },
  methods: {
    signIn: function() {
      // location.href = '../#/SignIn';
      this.$router.push('/SignIn');
    },
    search: function() {
      var bus = {
        setout: this.setout[0],
        arrive: this.arrive[0]
      }
      localStorage.setout = this.setout[0];
      localStorage.arrive = this.arrive[0];
      localStorage.Data = this.data;
      axios.post('http://localhost:7001/searchBus', bus).then(function(response) {
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
  // async mounted() {
  //   var buses = axios.get('http://localhost:7001/addBus').data;
  //   console.log(buses);
  // },
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
      setout: ["安居区"],
      arrive: ["安岳县"],
      data: "TODAY",
      showLastMonth: true,
      showNextMonth: true
    };
  }
};
</script>

<style>
.overwrite-title-demo {
  margin-top: 5px;
}
.inline-calendar-demo {
  background: rgba(255, 255, 255, 0.9);
}
.notice{
    position: absolute;
    bottom: 50px;
    left: 5px;
    right: 5px;
    height: 30px;
    color: #ccc;
}
</style>

