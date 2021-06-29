<template>
  <EditNote :id="id" />
</template>

<script>
// @ is an alias to /src
import EditNote from "@/components/EditNote.vue";

export default {
  props: ["id"],
  components: {
    EditNote
  }
};
</script>