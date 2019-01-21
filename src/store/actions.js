import Vue from 'vue'

export const setTradeResult = ({ state, commit }, tradeResult) => {
    commit("updateTradeResult", tradeResult);
    let tradeData = {
        purchase : state.purchase,
        sale : state.sale
    }
    Vue.http.put("https://urun-islemleri-b53aa.firebaseio.com/trade-result.json", tradeData)
        .then(response => {

        })
}

export const getTradeResult = ({ commit }) => {

    Vue.http.get("https://urun-islemleri-b53aa.firebaseio.com/trade-result.json")
        .then(response => {
            commit("updateTradeResult", response.body);
        })
}