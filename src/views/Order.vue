<template>
  <v-app>
    <v-app-bar
      color="primary"
      dark
      app
      :style="hidden ? 'display:none' : ''"
    >
      <template>
        <v-tabs
          show-arrows
        >
          <v-tab
            v-for="i in navi_list.length"
            :key="i"
            @click="jump('#' + navi_list[i-1])"
          >
            {{ navi_list[i-1] }}
          </v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
    <v-container class="grey lighten-5">
      <template>
        <v-row
          class="blue lighten-4"
          :style="total == 0 && hidden ? '' : 'display:none'"
        >
          <v-col>
            <p
              class="text-center"
            >
              余白
            </p>
          </v-col>
        </v-row>
      </template>
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
                :id="item.tab"
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
          :style="(item.text != 'セット' || total == 0) && !item.value && hidden ? 'display:none' : ''"
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
      total: 0,
      hidden: false
    }
  },
  created() {
    axios.get("menu.json")
      .then(response => {
        this.items = response.data
        for (let item of this.items) {
          if (item.header) {
            this.navi_list.push(item.tab)
          }
        }
      })
  },
  methods: {
    onClear() {
      for (let item of this.items) {
        item.value = false
        item.unit = 0
      }
      this.total = 0
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
    jump(name) {
      window.location.href = name
    },
    reduce() {
      this.hidden = !this.hidden
      window.location.href = "#top"
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
      this.hidden = true
      this.$emit('updated', this.total)
    },
    removeData(index) {
      localStorage.removeItem('page-'+index)
      this.onClear()
    }
  }
}
</script>
