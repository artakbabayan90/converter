import {createStore} from "vuex";
import currency from "@/store/modules/currency";

const store = createStore({
    modules:{
        currency
    }
})
export default store;