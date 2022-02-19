<template>
  <currency></currency>
</template>

<script>
import {mapActions,mapGetters} from 'vuex'
import Currency from "@/components/Currency";
export default {
  name: 'Home',
  components:{
    Currency
  },
  methods:mapActions(['fetchCurrencies']),
  computed:mapGetters(['currencies']),
  async mounted() {
    this.fetchCurrencies()
    console.log(this.currencies)
  }
}
</script>
