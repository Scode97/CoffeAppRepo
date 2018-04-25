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
            }
    )
    }
}
export default new myStore()