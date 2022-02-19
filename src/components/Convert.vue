<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-2">
        <select class="form-select" v-model="this.selectedLeft">
          <option value="RUB" selected="selected">RUB</option>
          <option v-for="valute in this.valutes" :key="valute.ID" :value="valute.CharCode">{{
              valute.CharCode
            }}
          </option>
        </select>
      </div>
      <div class="col-md-3">
        <input type="number" class="form-control" v-model="leftValue">
      </div>
      <div class="col-md-2">
        <div class="circle">
          <font-awesome-icon icon="arrows-h" class="arrows-h" size="2x" @click="change"/>
        </div>
      </div>
      <div class="col-md-2">
        <select class="form-select" v-model="selectedRight">
          <option>RUB</option>
          <option v-for="valute in this.valutes" :key="valute.ID" :value="valute.CharCode">{{
              valute.CharCode
            }}
          </option>
        </select>
      </div>
      <div class="col-md-3">
        <input type="number" class="form-control" :value="this.currentValue" readonly>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: "Convert",
  data() {
    return {
      selectedLeft: 'RUB',
      selectedRight: 'RUB',
      leftValue: 1
    }
  },
  methods: {
    change() {
      localStorage.selectedLeft = this.selectedLeft
      this.selectedLeft = this.selectedRight
      this.selectedRight = localStorage.selectedLeft
    }
  },
  computed: {
    ...mapGetters(['currencies']),
    valutes() {
      return this.currencies.Valute
    },
    currentValue() {
      let leftRUB;
      let rightRub;
      if (this.selectedLeft !== "RUB" && this.selectedRight !== "RUB") {
        leftRUB = (this.valutes[this.selectedLeft].Value / this.valutes[this.selectedLeft].Nominal);
        rightRub = (this.valutes[this.selectedRight].Value / this.valutes[this.selectedRight].Nominal);
      } else if (this.selectedLeft === "RUB" && this.selectedRight !== "RUB") {
        leftRUB = 1;
        rightRub = (this.valutes[this.selectedRight].Value / this.valutes[this.selectedRight].Nominal);
      } else if (this.selectedRight === "RUB" && this.selectedLeft !== "RUB") {
        leftRUB = (this.valutes[this.selectedLeft].Value / this.valutes[this.selectedLeft].Nominal);
        rightRub = 1;
      } else {
        leftRUB = 1;
        rightRub = 1;
      }
      return Math.round((this.leftValue * (leftRUB / rightRub)) * 10000) / 10000;
    }
  }
}
</script>

<style scoped>
.container-fluid {
  margin: auto;
  max-width: 650px;
  min-height: 120px;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type=number] {
  border: none;
  border-bottom: 1px solid;
  -moz-appearance: textfield;
}
</style>