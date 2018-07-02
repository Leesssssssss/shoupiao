const Service = require('egg').Service;

class UserService extends Service {
  async add() {
    const ctx = this.ctx;
    var telNum = ctx.request.body.telNum;
    var password = ctx.request.body.password;
    const users = await this.app.mysql.insert('users', { telNum: telNum, password: password });
    return { users };
    const insertSuccess = users.affectedRows === 1;
  }

  async find(tel) {
    const ctx = this.ctx;
    var telNum = ctx.request.body.telNum;
    const user = await this.app.mysql.select('users',{ where: { telNum: telNum } });
    return { user };
  }

  async searchBus() {
    const ctx = this.ctx;
    var setout = ctx.request.body.setout;
    var arrive = ctx.request.body.arrive;
    const tickets = await this.app.mysql.select('buses', { where: { setout: setout, arrive: arrive } });
    return { tickets };
  }

  async updateInfo() {
    const ctx = this.ctx;
    var telNum = ctx.request.body.telNum;
    var name = ctx.request.body.name;
    var setoutData = ctx.request.body.setoutData;
    var setout = ctx.request.body.setout;
    var arrive = ctx.request.body.arrive;
    var time = ctx.request.body.time;
    const row = {
      name: name,
      telNum: telNum,
      setoutData: setoutData
    };
    const options = {
      where: {
        setout: setout,
        arrive: arrive,
        time: time
      }
    };
    const result = await this.app.mysql.update('buses', row, options);
    return { result };
  }

  async findTicket(tel) {
    const ctx = this.ctx;
    var telNum = ctx.request.body.telNum;
    const user = await this.app.mysql.select('buses',{ where: { telNum: telNum } });
    return { user };
  }

  // async addBus() {
  //   const ctx = this.ctx;
  //   const bus1 = await this.app.mysql.insert('buses', { setout: '安岳县', arrive: '白玉县', time: '9:00', price: 24.00 });
  //   const bus2 = await this.app.mysql.insert('buses', { setout: '重庆市', arrive: '璧山县', time: '8:00', price: 88.00 });
  //   const bus3 = await this.app.mysql.insert('buses', { setout: '安居区', arrive: '璧山县', time: '7:00', price: 29.80 });
  //   const bus4 = await this.app.mysql.insert('buses', { setout: '安居区', arrive: '巴中市', time: '7:30', price: 58.00 });
  //   const bus5 = await this.app.mysql.insert('buses', { setout: '璧山县', arrive: '安岳县', time: '11:00', price: 34.00 });
  //   const bus6 = await this.app.mysql.insert('buses', { setout: '白玉县', arrive: '安岳县', time: '10:10', price: 43.00 });
  //   const bus7 = await this.app.mysql.insert('buses', { setout: '重庆市', arrive: '成都市', time: '12:30', price: 96.50 });
  //   const bus8 = await this.app.mysql.insert('buses', { setout: '重庆市', arrive: '巴中市', time: '13:14', price: 108.00 });
  //   const bus9 = await this.app.mysql.insert('buses', { setout: '成都市', arrive: '巴中市', time: '16:40', price: 70.00 });
  //   const bus10 = await this.app.mysql.insert('buses', { setout: '成都市', arrive: '重庆市', time: '15:20', price: 96.50 });
  //   const bus11 = await this.app.mysql.insert('buses', { setout: '成都市', arrive: '重庆市', time: '12:00', price: 96.50 });  
  //   const bus12 = await this.app.mysql.insert('buses', { setout: '成都市', arrive: '北川县', time: '20:30', price: 33.00 });            
    
  //   const buses = [];
  //   buses.push(bus1,bus2,bus3,bus4,bus5,bus6,bus7,bus8,bus9,bus10,bus11,bus12);
  //   return { buses };
  //   const insertSuccess = buses.affectedRows === 1;
  // }
  
}

module.exports = UserService;