import { defineStore, acceptHMRUpdate } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    counter: 0
  }),

  getters: {
    doubleCount: (state) => state.counter * 2
  },

  actions: {
    increment() {
      this.counter++
    }
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCounterStore, import.meta.hot))
}


// ------ setup version -------
// import { defineStore } from 'pinia';
// import { ref } from 'vue';

// export const useMyStore = defineStore('myStore', () => {
//   const message = ref('Viel Erfolg!');

//   return { message };
// });

// ------ option version -------
// import { defineStore } from 'pinia';
//
// export const useMyStore = defineStore('myStore', {
//   state: () => ({ message: 'Viel Erfolg!' }),
//   getters: {},
//   actions: {},
// });