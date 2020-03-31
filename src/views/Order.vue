<template>
  <v-app>
    <v-container class="grey lighten-5">
      <template v-for="(item, index) in items">
        <v-row
          v-if="item.header"
          :key="index"
          no-gutters
          class="blue lighten-4"
          :style="hidden ? 'display:none' : ''"
        >
          <v-col>
            <v-subheader>
              <p
                :id="item.header"
                style="margin-top: -80px; padding-top: 80px;"
              >
                {{ item.header }}
              </p>
            </v-subheader>
          </v-col>
        </v-row>
        <v-row
          v-else
          :key="index"
          no-gutters
          align="center"
          :class="item.value ? 'grey lighten-3' : ''"
          :style="item.text != 'セット' && !item.value && hidden ? 'display:none' : ''"
        >
          <v-col cols="4">
            <v-checkbox
              :label="item.text"
              :value="item.value"
              dense="false"
              @change="onChange(item);"
            />
          </v-col>
          <v-col cols="3">
            <v-card-text class="text-right">
              {{ item.price.toLocaleString() }} 円
            </v-card-text>
          </v-col>
          <v-col cols="2">
            <v-card-text class="text-right">
              {{ item.unit }} 個
            </v-card-text>
          </v-col>
          <v-col cols="3">
            <div>
              <v-btn
                icon
                color="primary"
                @click="plus(item)"
              >
                <v-icon>
                  mdi-plus-circle
                </v-icon>
              </v-btn>
              <v-btn
                icon
                color="primary"
                @click="minus(item)"
              >
                <v-icon>
                  mdi-minus-circle
                </v-icon>
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </template>
    </v-container>
  </v-app>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      items: [],
      navi_list: [],
      navi_index: 0,
      total: 0,
      hidden: false
    }
  },
  created() {
    axios.get("menu.json")
      .then(response => {this.items = response.data})
  },
  methods: {
    onClear() {
      for (let item of this.items) {
        item.value = false
        item.unit = 0
      }
      this.total = 0
      this.hidden = false
      this.navi_index = 0
      window.location.href = "#top"
      this.$emit('updated', this.total)
    },
    onChange(item) {
      item.value = !item.value
      if (item.value) {
        this.total += item.price
        item.unit = 1
      } else {
        this.total -= item.price * item.unit
        item.unit = 0
      }
      this.$emit('updated', this.total)
    },
    reduce() {
      if (this.total == 0) {
        return
      }
      this.hidden = !this.hidden
      this.navi_index = 0
      window.location.href = "#top"
    },
    navigation() {
      if (this.navi_list.length == 0) {
        for (let item of this.items) {
          if (item.header) {
            this.navi_list.push("#" + item.header)
          }
        }
      }
      this.navi_index = this.navi_index + 1 < this.navi_list.length ? ++this.navi_index : 0
      window.location.href = this.navi_list[this.navi_index]
    },
    plus(item) {
      if (item.unit > 0) {
        this.total += item.price
        ++item.unit
        this.$emit('updated', this.total)
      }
    },
    minus(item) {
      if (item.unit > 1) {
        this.total -= item.price
        --item.unit
        this.$emit('updated', this.total)
      }
    },
    saveData(index) {
      localStorage.setItem('page-'+index, JSON.stringify(this.items))
    },
    loadData(index) {
      var items = localStorage.getItem('page-'+index) || this.items
      this.onClear()
      this.items = JSON.parse(items)
      for (let item of this.items) {
        if (item.value) {
          this.total += item.price * item.unit
        }
      }
      this.hidden = this.total == 0 ? fase : true
      this.$emit('updated', this.total)
    },
    removeData(index) {
      localStorage.removeItem('page-'+index)
      this.onClear()
    }
  }
}
</script>
