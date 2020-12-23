<template>
  <div>
    <div id="hello-vue">
      <p>{{ message }}</p>
       <input v-model="message" />
       <button v-on:click="reverseMessage">Reverse Message</button>
    </div>

    <span v-bind:title="message">
      Hover your mouse over me for a few seconds to see my dynamically bound
      title!
    </span>
    <div id="list-rendering">
      <ol>
        <li v-for="(todo, index) in todos" :key="index">
          key{{ index }}
          text:
          {{ todo.text }}
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloVue',
  data() {
    return {
      message: 'Hello Vue!',
      todos: [
        { text: 'Learn JavaScript' },
        { text: 'Learn Vue' },
        { text: 'Build something awesome' },
      ],
    };
  },
  methods: {
    reverseMessage() {
      this.message = this.message
        .split('')
        .reverse()
        .join('')
    }
  }
};
</script>
