<template>
  <div>
    <x-header title="订单信息"></x-header>

    <group title="确认车票信息">
      <datetime v-model="valueReadonly" :readonly="readonly" :title="('出发日期')"></datetime>
      <cell style="font-size: 24px; color: black;" :title="ticketTime" :value="ticketPrice"></cell>
      <cell-form-preview :list="list"></cell-form-preview>
    </group>

    <group title="填写乘客信息" label-width="5.5em" label-margin-right="2em" label-align="justify">
      <x-input title="姓名" v-model="name" placeholder="请输入姓名" is-type="china-name"></x-input>
      <popup-picker title="乘车人类型" :data="list1" v-model="people" value-text-align="left"></popup-picker>
      <popup-picker title="证件类型" :data="list2" v-model="card" value-text-align="left"></popup-picker>
      <x-input title="证件号码" v-model="idNum" placeholder="请输入证件号码" keyboard="number"></x-input>
      <x-input title="手机号码" v-model="telNum" placeholder="请输入手机号码" keyboard="number" is-type="china-mobile"></x-input>
      <x-switch title="需要发票"></x-switch>
    </group>

    <x-button @click.native="toPay" style="position:absolute;bottom: 0px" type="warn">立即购票</x-button>
  </div>
</template>

<script>
import { XHeader, Group, XInput, PopupPicker, XSwitch, XButton, Datetime, CellFormPreview, Cell } from "vux"
import axios from 'axios'

export default {
  components: {
    XHeader,
    Group,
    XInput,
    PopupPicker,
    XSwitch,
    XButton,
    Datetime,
    CellFormPreview,
    Cell
  },
  methods: {
    toPay: function() {
      if (this.name !== '' && this.idNum !== '' && this.telNum !== '') {
        var telNum = { telNum: this.telNum };
        axios.post('http://localhost:7001/payNumFind', telNum).then((response) => {
          if (response.data.data === '已注册用户') {
            localStorage.name = this.name;
            // localStorage.telNum = this.telNum;
            location.href = '/#/pay'; 
          }
          if (response.data.data === '未注册用户') {
            alert(response.data.data);
          }
        });
      } else {
        alert('请将乘客信息填写完整！');
      }
    }
  },
  data() {
    return {
      name: '',
      idNum: '',
      telNum: '',
      people: ['成人票（12岁以上）'],
      card: ['身份证'],
      list1: [['成人票（12岁以上）', '儿童票']],
      list2: [['身份证', '军官证', '护照']],
      list: [
        {
          label: "始发站： " + localStorage.setout,
          value: "有票"
        },
        {
          label: "终点站： " + localStorage.arrive,
          value: "普通座"
        }
      ],
      readonly: true,
      valueReadonly: localStorage.Data,
      ticketTime: localStorage.time + ' 发车',
      ticketPrice: '￥' + localStorage.price
    }
  }
}
</script>

