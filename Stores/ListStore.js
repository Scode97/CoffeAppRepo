import { observable, decorate, action, computed } from "mobx";

import list from "../Components/CoffeList/list";

class ListStore {
  constructor() {
    this.list = list;

    this.orders = [];
    this.totalQuan = 0;
    // (this.currentShop = list[0]) .... or
    this.currentShop = null;
    this.index = 0;
  }

  // if (item.drink === drink && item.option === option) {
  //   quantity += 1;
  // } else {
  //   push(obj);
  // }
  // let obj = {
  //   drink: drink,
  //   option: option,
  //   quantity: 1
  // };

  // createOrder = (drink, option, i) => {
  //   //array
  //   let index = this.orders.findIndex(
  //     order => order.drink === drink && order.option === option
  //   );

  //   this.currentShop = i;
  //   if (index >= 0) {
  //     this.orders[index].quantity += 1;
  //     this.totalQuan++;
  //   } else {
  //     this.orders.push({
  //       drink: drink,
  //       option: option,
  //       quantity: 1
  //     });
  //     this.totalQuan++;
  //   }
  // };

  createOrder = (drink, option, i) => {
    //array
    let index = this.orders.findIndex(
      order => order.drink === drink && order.option === option
    );

    this.currentShop = i;

    let obj = {
      drink: drink,
      option: option,
      quantity: 1
    };

    if (i === this.index) {
      if (index >= 0) {
        this.orders[index].quantity += 1;
        this.totalQuan++;
      } else {
        this.orders.push(obj);
        this.totalQuan++;
      }
    } else {
      this.orders = [];
      this.totalQuan++;
      this.orders.push(obj);
      // this.totalQuan = [];
      this.index = i;
    }
  };

  get getTotal() {
    let total = 0;
    this.orders.forEach(item => (total = item.quantity + total));
    return total;
  }
  get Current() {
    // console.log(this.list[this.currentShop]);
    return this.list[this.currentShop];
  }
}

decorate(ListStore, {
  list: observable,
  orders: observable,
  currentShop: observable,
  createOrder: action,
  Current: computed,
  getTotal: computed
});

export default new ListStore();
