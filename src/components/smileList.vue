<template>
  <div>
    <v-row>
      <v-con
        v-for="(counter, index) in counters"
        :key="index"
        class="d-flex flex-column justify-center align-center pa-6"
      >
        <v-btn @click="incrementCounter(index)">
          <v-icon size="x-large">{{ counter.smile }}</v-icon>
        </v-btn>
        <span>{{ counter.number }}</span>
      </v-con>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counters: [
        {
          number: 0,
          smile: 'mdi-emoticon-cool-outline'
        },
        {
          number: 0,
          smile: 'mdi-emoticon-wink-outline'
        },
        {
          number: 0,
          smile: 'mdi-emoticon-happy-outline'
        },
        {
          number: 0,
          smile: 'mdi-emoticon-excited-outline'
        },
        {
          number: 0,
          smile: 'mdi-emoticon-neutral-outline'
        }
      ]
    }
  },
  methods: {
    incrementCounter(index) {
      this.counters[index].number += 1
    }
  }
}
</script>
