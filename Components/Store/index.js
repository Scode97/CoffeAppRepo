import { extendObservable } from "mobx";
class myStore {
    constructor() {
        extendObservable(this, 
            {
                list: [],
                currentCoffeShop: {},
                cart: [],
                currentCartFrom: {
                    name: "",
                },
                get amount(){
                    let myamount = 0;
                    this.cart.map(
                        (item) => myamount = myamount + item.quantity
                    )
                    return myamount
                }
            }
    )
    }
}
export default new myStore()