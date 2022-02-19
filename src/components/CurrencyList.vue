<template>
  <div class="container-fluid">
    <div class="row">
      <input type="text" v-model="search" class="form-control" placeholder="Search ...">
    </div>
    <div v-for="valute in this.valutes" :key="valute.id">
      <currency :valute="valute"></currency>
    </div>
  </div>
</template>

<script>
import Currency from "@/components/Currency";
import {mapGetters} from "vuex";

export default {
  name: "CurrencyList",
  components: {Currency},
  data() {
    return {
      search: "",
    }
  },
  watch: {
    search() {
      if(!localStorage.allValutes){
        localStorage.allValutes = JSON.stringify(this.valutes)
      }else{
        this.valutes = JSON.parse(localStorage.allValutes)
      }
      this.valutes = Object.fromEntries(
          Object.entries(this.valutes).filter(item => {
            if (item[0].toLowerCase().search(this.search.toLowerCase()) > -1
                || item[1]['Name'].toLowerCase().search(this.search.toLowerCase()) > -1) {
              return item
            }
          })
      )
    }
  },
  computed: {
    ...mapGetters(['currencies']),
    valutes: {
      get() {
        return this.currencies.Valute
      },
      set(newValue) {
        this.currencies.Valute = newValue
      }
    }
  }
}
</script>

<style scoped>
.form-control {
  max-width: 500px;
  margin: auto;
}
</style>