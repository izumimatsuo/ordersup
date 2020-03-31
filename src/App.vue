<template>
  <v-app>
    <v-app-bar
      color="primary"
      dark
      app
    >
      <v-toolbar-title><v-icon>mdi-calculator</v-icon>注文票</v-toolbar-title>
      <v-spacer />
      <v-icon
        v-for="n in pages.length"
        :key="n"
      >
        mdi-numeric-{{ n }}-circle{{ pages[n-1] ? "" : "-outline" }}
      </v-icon>
      <v-spacer />
      <v-btn
        outlined
        small
        @click="reset"
      >
        リセット
      </v-btn>
    </v-app-bar>
    <v-content>
      <router-view
        ref="order"
        @updated="commit"
      />
    </v-content>
    <v-footer
      color="primary"
      dark
      app
    >
      <v-col class="text-left">
        合計 {{ (total + (total * tax)).toLocaleString() }} 円<br>（{{ total }}+{{ (total*tax) }}）
      </v-col>
      <v-spacer />
      <v-btn
        x-large
        icon
        @click="reduce"
      >
        <v-icon>mdi-check-circle-outline</v-icon>
      </v-btn>
      <v-btn
        icon
        @click="prev"
      >
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <v-btn
        x-large
        icon
        @click="down"
      >
        <v-icon>mdi-arrow-down</v-icon>
      </v-btn>
      <v-btn
        icon
        @click="next"
      >
        <v-icon>mdi-arrow-right</v-icon>
      </v-btn>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      tax: 0.1,
      total: 0,
      pages: [true, false, false, false, false]
    }
  },
  methods: {
    commit(newValue) {
      this.total = newValue
    },
    reset() {
      this.$refs.order.onClear()
      for (var index = 0; index < this.pages.length; index++) {
        this.$set(this.pages, index, false)
        this.$refs.order.removeData(index)
      }
      this.$set(this.pages, 0, true)
    },
    reduce() {
      this.$refs.order.reduce()
    },
    prev() {
      var index = this.pages.indexOf(true)
      if (index > 0 ) {
        this.$set(this.pages, index, false)
        this.$set(this.pages, index-1, true)
        this.$refs.order.saveData(index)
        this.$refs.order.loadData(index-1)
      }
    },
    down() {
      this.$refs.order.navigation()
    },
    next() {
      var index = this.pages.indexOf(true)
      if (index < 4 ) {
        this.pages[index] = false
        this.$set(this.pages, index, false)
        this.$set(this.pages, index+1, true)
        this.$refs.order.saveData(index)
        this.$refs.order.loadData(index+1)
      }
    }
  }
};
</script>
