<template>
  <div class="todo">
    <router-link :to="'/notes/' + todos.id">
      <h3 class="title">{{ todos.title }}</h3>
    </router-link>
    <ul class="mb">
      <li v-for="todo in noteToShow" :key="todo.id">
        <input type="checkbox" :checked="todo.done" disabled />
        <span class="todo__text">{{ todo.text }}</span>
      </li>
    </ul>
    <div class="button__group">
      <router-link class="button" :to="'/notes/' + todos.id">
        Edit Note
      </router-link>
      <button @click="togleDelPopup()">Delete Note</button>
    </div>
    <popup @close="togleDelPopup()" v-if="deletePopUpOpen">
      <p class="title">Are you sure?</p>
      <div class="button__group">
        <button @click="deleteNote(todos)">Yes</button>
        <button @click="togleDelPopup()">No</button>
      </div>
    </popup>
  </div>
</template>

<script>
import popup from "@/components/Popup.vue";
export default {
  props: {
    todos: Object
  },
  data() {
    return {
      deletePopUpOpen: false
    };
  },
  computed: {
    noteToShow() {
      return this.todos.todos.filter((el, i) => i < 3);
    }
  },
  methods: {
    deleteNote(note) {
      this.$store.commit("deleteNote", note.id);
      this.togleDelPopup();
    },
    togleDelPopup() {
      this.deletePopUpOpen = !this.deletePopUpOpen;
      document.body.classList.toggle("modal-open");
    }
  },
  components: {
    popup
  }
};
</script>