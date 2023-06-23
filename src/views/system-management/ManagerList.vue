<template>
  <Main />
  <UserItem :data="data" />
</template>

<script>
import { ref } from "vue";
import axios from "axios";
import { onMounted } from "vue";
import Main from "@/views/layouts/Main.vue";
import UserItem from "@/components/UserItem.vue";
export default {
  components: { Main, UserItem },
  setup() {
    const apiUrl = "users";
    const data = ref({
      title: [],
      list: [],
    });
    const api = () => {
      axios.get(apiUrl).then((response) => {
        data.value.title = response.data.title;
        data.value.list = response.data.list;
      });
    };

    onMounted(() => {
      api();
    });
    return { api, data };
  },
};
</script>
