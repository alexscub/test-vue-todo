<template>
  <div>
    <form class="form">
      <span>Title:</span>
      <input
        class="input input--title mb mt"
        v-model="title"
        type="text"
        placeholder="input note title"
      />
      <div v-for="(todo, index) in todos" :key="todo.id">
        <div class="form__group mb">
          <input class="form__checkbox" v-model="todo.done" type="checkbox" />
          <input
            class="input"
            v-model="todo.text"
            type="text"
            placeholder="input todo"
          />
          <button class="form__delButton" @click="del(index)">
            Delete todo
          </button>
        </div>
      </div>
      <button class="mb" @click="add()">Add todo</button>
      <div class="button__group mb">
        <button @click="cancelUpdate()">cancel update</button>
        <button @click="restoreUpdate()">restore update</button>
        <button @click="updateNote()">Update note</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data: () => ({
    title: "",
    todos: [],
    canceled: null
  }),
  computed: {
    note() {
      return this.$store.getters.findNote(+this.id);
    }
  },
  mounted() {
    if (this.note) {
      this.title = this.note.title;
      this.todos = this.note.todos.map(el => {
        return { ...el };
      });
    }
  },
  methods: {
    del(index) {
      this.todos.splice(index, 1);
    },
    updateNote() {
      this.$store.commit("updateNote", {
        id: +this.id,
        title: this.title,
        todos: this.todos
      });
      this.$router.push("/");
    },
    cancelUpdate() {
      this.canceled = { title: this.title, todos: this.todos };
      this.title = this.note.title;
      this.todos = [...this.note.todos];
    },
    restoreUpdate() {
      this.title = this.canceled.title;
      this.todos = [...this.canceled.todos];
    },
    add() {
      const id = Date.now();
      this.todos.push({ id, done: false, text: "" });
    }
  }
};
</script>