'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = 'hi, egg';
  }

  async add() {
    const ctx = this.ctx;
    const telNum = ctx.params.telNum;
    const user = await ctx.service.mysql.find(telNum);  
    // console.log(user.user);
    const User = user.user;
    var userTel = [];
    for (var i = 0; i < User.length; i++) {
      userTel.push(User[i].telNum);
    }
    // console.log(userTel);    
    if (userTel.length !== 0) {
      ctx.body = {
        success: false,
        data: '用户名已存在'
      }
    } else {
      const users = await ctx.service.mysql.add();
      ctx.body = {
        success: true,
        data: '注册成功'
      }
    }
  }

  async adds() {
    const ctx = this.ctx;
    const telNum = ctx.params.telNum;
    const password = ctx.params.password;    
    const inputPass = ctx.request.body.password;

    const user = await ctx.service.mysql.find(telNum);

    const User = user.user;
    var userTel = [];
    var userPass = [];

    for (var i = 0; i < User.length; i++) {
      userTel.push(User[i].telNum);
      userPass.push(User[i].password);
    }

    if (userPass[0] === inputPass) {
      ctx.body = {
        success: true,
        data: '登录成功'
      }
    } else {
      ctx.body = {
        success: false,
        data: '用户未注册或用户名/密码输入错误'
      }
    }
  }

  async searchBus() {
    const ctx = this.ctx;
    const setout = ctx.params.setout;
    const arrive = ctx.params.arrive;
    
    const tickets = await ctx.service.mysql.searchBus();
    const Tickets = tickets.tickets;
    // console.log(Tickets);
    if (Tickets.length !== 0) {
      ctx.body = {
        success: true,
        data: '查询成功'
      }
    } else {
      ctx.body = {
        success: false,
        data: '未查询到当前车次'
      }
    }
  }

  async showBus() {
    const ctx = this.ctx;
    var setout = ctx.request.body.setout;
    var arrive = ctx.request.body.arrive;
    const tickets = await ctx.service.mysql.searchBus();
    const Tickets = tickets.tickets;
    ctx.body = Tickets;
  }

  async payNumFind() {
    const ctx = this.ctx;
    var telNum = ctx.params.telNum;
    const user = await ctx.service.mysql.find(telNum);
    const User = user.user;
    var userTel = [];
    for (var i = 0; i < User.length; i++) {
      userTel.push(User[i].telNum);
    }   
    if (userTel.length !== 0) {
      ctx.body = {
        success: true,
        data: '已注册用户'
      }
    } else {
      ctx.body = {
        success: false,
        data: '未注册用户'
      }
    }
  }

  async addNum() {
    const ctx = this.ctx;
    const result = await ctx.service.mysql.updateInfo();
    ctx.body = result;
  }

  async findTicket() {
    const ctx = this.ctx;
    var telNum = ctx.params.telNum;
    const user = await ctx.service.mysql.findTicket(telNum);
    const User = user.user;
    ctx.body = User;
  }

  async usualAddress() {
    const ctx = this.ctx;
    var telNum = ctx.params.telNum;
    const user = await ctx.service.mysql.findTicket(telNum);
    const User = user.user;
    ctx.body = User;
  }

  async searchBuses() {
    const ctx = this.ctx;
    const setout = ctx.params.setout;
    const arrive = ctx.params.arrive;
    
    const tickets = await ctx.service.mysql.searchBus();
    const Tickets = tickets.tickets;
    // console.log(Tickets);
    if (Tickets.length !== 0) {
      ctx.body = {
        success: true,
        data: '查询成功'
      }
    } else {
      ctx.body = {
        success: false,
        data: '未查询到当前车次'
      }
    }
  }
  // async addBus() {
  //   const ctx = this.ctx;
  //   const buses = await ctx.service.mysql.addBus();
  //   ctx.body = buses;
  // }
}

module.exports = HomeController;
