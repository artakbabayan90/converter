export default {
    actions: {
        async fetchCurrencies(c) {
            try {
                const response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');
                const currencies = await response.json();
                c.commit('updateCurrencies', currencies)
            } catch (e) {
                console.error(e);
            }
        }
    },
    mutations: {
        updateCurrencies(state, currencies) {
            state.currencies = currencies
        }
    },
    state: {
        currencies: {}
    },
    getters: {
        currencies(state) {
            return state.currencies
        }
    }
}