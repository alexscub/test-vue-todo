<template>
  <popup @close="close">
    <form class="form">
      <span>Title:</span>
      <input
        class="input input__title mb mt"
        v-model="title"
        type="text"
        placeholder="input note title"
      />

      <div class="form__group mb" v-for="(todo, index) in todos" :key="todo.id">
        <input class="form__checkbox" v-model="todo.done" type="checkbox" />
        <input
          class="input"
          v-model="todo.text"
          type="text"
          placeholder="input todo"
        />
        <button type="button" class="form__delButton" @click="del(index)">Delete todo</button>
      </div>
      <button type="button" class="mb" @click="add()">Add todo</button>
    </form>
    <button @click="addNote()">Add note</button>
  </popup>
</template>

<script>
import popup from "@/components/Popup.vue";

export default {
  data: () => ({
    title: "",
    todos: []
  }),
  methods: {
    del(index) {
      this.todos.splice(index, 1);
    },
    addNote() {
      this.$store.commit("addNote", {
        id: Date.now(),
        title: this.title,
        todos: this.todos
      });
      this.close();
    },
    add() {
      const id = Date.now();
      this.todos.push({ id, done: false, text: "" });
    },
    close() {
      this.$root.isPopUpOpen = false;
      document.body.classList.remove("modal-open");
    }
  },
  components: {
    popup
  }
};
</script>