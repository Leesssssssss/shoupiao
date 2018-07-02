<template>
  <div>
    <x-header title="车票信息"></x-header>
    <group v-for='ticket in tickets' @click.native="pay(ticket)">
      <datetime v-model="valueReadonly" :readonly="readonly" :title="('出发日期')"></datetime>
      <cell style="font-size: 24px; color: black;" :title="ticket.time +' 发车'" :value="'￥' + ticket.price"></cell>
      <cell-form-preview :list="list"></cell-form-preview>
    </group>
  </div>
</template>

<script>
import { XHeader, FormPreview, Datetime, Group, CellFormPreview, Cell } from "vux";
import axios from "axios";

export default {
  components: {
    XHeader,
    FormPreview,
    Datetime,
    Group,
    CellFormPreview,
    Cell
  },
  data() {
    return {
      list: [
        {
          label: "始发站： " + localStorage.setout,
          value: "余票： " + parseInt(Math.random() * 30) + "张"
        },
        {
          label: "终点站： " + localStorage.arrive,
          value: "普通座"
        }
      ],
      tickets: [],
      readonly: true,
      valueReadonly: localStorage.Data
    };
  },
  methods: {
    pay: function(ticket) {
      localStorage.time = ticket.time;
      localStorage.price = ticket.price;      
      location.href = "/#/ticketInfo";
    }
  },
  async mounted() {
    var setout = localStorage.setout;
    var arrive = localStorage.arrive;
    var bus = {
      setout: setout,
      arrive: arrive
    };
    axios.post("http://localhost:7001/showBus", bus).then(response => {
      this.tickets = response.data;
    });
  }
};
</script>
