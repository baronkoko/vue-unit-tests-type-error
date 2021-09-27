<template>
  <div class="hello">
    <h1>{{ fullName }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { FakeUtil } from "fake-utils-lib/src/fake-util";

export default defineComponent({
  name: "HelloWorld",
  props: {
    firstName: {
      type: String,
      default: "",
    },
    lastName: {
      type: String,
      default: "",
    },
  },
  computed: {
    fullName() {
      const util = new FakeUtil();

      return util.getFullName(this.firstName, this.lastName);
    },
  },
});
</script>
