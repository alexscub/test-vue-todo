<template>
  <div>
    <button class="mb" @click="addNote()">Add note</button>
    <ul>
      <li class="mb" v-for="note in notes" :key="note.id">
        <Note :todos="note" />
      </li>
    </ul>
    <addNotePopup v-if="$root.isPopUpOpen" />
  </div>
</template>

<script>
import Note from "@/components/Note.vue";
import addNotePopup from "@/components/AddNotePopup.vue";

export default {
  data() {
    return {
      notes: this.$store.state.notes
    };
  },
  methods: {
    addNote() {
      this.$root.isPopUpOpen = true;
      document.body.classList.add("modal-open");
    }
  },
  components: {
    Note,
    addNotePopup
  }
};
</script>