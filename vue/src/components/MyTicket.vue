<template>
  <div>
    <x-header title="我的订单"></x-header>
    <group v-for="ticket in tickets">
      <datetime :readonly="readonly" :title="ticket.setoutData"></datetime>
      <cell style="font-size: 24px; color: black;" :title="ticket.time + ' 发车'" :value="'￥' + ticket.price"></cell>
      <cell-form-preview :list="[{label: '乘车人：' + ticket.name, value: '联系电话：' + ticket.telNum},
      {label: '始发站：' + ticket.setout, value: '已付款'},
      {label: '终点站：' + ticket.arrive, value: '普通座'}]"></cell-form-preview>
      <x-button style="background-color:white;border-color:white" link="/assess">评价</x-button>
    </group>
  </div>
</template>

<script>
import { XHeader, FormPreview, Datetime, Group, CellFormPreview, Cell, XButton} from "vux";
import axios from "axios";

export default {
  components: {
    XHeader,
    FormPreview,
    Datetime,
    Group,
    CellFormPreview,
    Cell,
    XButton
  },
  data() {
    return {
      tickets: [],
      readonly: true
    };
  },
  async mounted() {
    var telNum = { telNum: localStorage.telNum };
    axios.post("http://localhost:7001/findTicket", telNum).then(response => {
      this.tickets = response.data;
    });
  }
};
</script>
