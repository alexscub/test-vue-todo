import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    notes: [
    ]
  },
  mutations: {
    addNote: function (state, newNote) {
      state.notes.push(newNote)
    },
    deleteNote: function (state, noteId) {
      let noteIndex = state.notes.indexOf(
				this.getters.findNote(noteId)
			);
      state.notes.splice(noteIndex, 1);
    },
    updateNote: function (state, note) {
      let noteIndex = state.notes.indexOf(
				this.getters.findNote(note.id)
			);
      state.notes[noteIndex].title=note.title;
      state.notes[noteIndex].todos=note.todos;
    },
  },
  getters: {
    findNote: state => noteId => {
      return state.notes.find(note => note.id === noteId);
    },
  },
  actions: {},
  modules: {},
  plugins: [createPersistedState()],
})