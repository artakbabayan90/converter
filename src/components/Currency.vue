<template>
  <div>
    <div class="row">
      <h6 class="name">
        {{ valute.Name }}
      </h6>
      <div class="col-md-8">
        <span class="valute">1 {{ this.valuteChar }}</span>
        <font-awesome-icon icon="arrows-h" class="arrows-h" size="2x" @click="this.current = this.current?false:true"/>
        <span class="valute">{{ this.valuteValue }} {{ this.currentValute }}</span>
      </div>
      <div class="col-md-4">
        <p class="previous">
          <font-awesome-icon :icon="previousValue.icon" :class="previousValue.icon"/>
          {{ this.previousValue.value }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Currency",
  props: {
    valute: {}
  },
  data() {
    return {
      current: true
    }
  },
  computed: {
    valuteValue() {
      let value = this.current ? Math.round((this.valute.Value / this.valute.Nominal) * 100) / 100 : Math.round((1 / this.valuteValue) * 100) / 100;
      return value
    },
    previousValue() {
      let previousValue = Math.round((this.valute.Value - this.valute.Previous) * 10000) / 10000;
      let icon = previousValue > 0 ? "arrow-up" : "arrow-down";
      return {
        "value": Math.abs(previousValue),
        "icon": icon
      }
    },
    currentValute() {
      return this.current ? "RUB" : this.valute.CharCode
    },
    valuteChar() {
      return this.current ? this.valute.CharCode : "RUB"
    }
  }
}
</script>

<style scoped>
.row {
  max-width: 500px;
  margin: 10px auto;
  text-align: left;
  border: 1px solid;
  border-radius: 10px;
  padding: 5px;
  box-shadow: 5px 5px #888888;
}

.arrows-h {
  color: #888888;
  cursor: pointer;
}

.valute, .previous {
  font-size: 24px;
  margin: 5px 10px;
}

.arrow-up {
  color: green;
}

.arrow-down {
  color: red;
}

.name {
  color: #888888;
}
</style>