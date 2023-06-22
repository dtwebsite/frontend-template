<template>
  <table class="divide-y divide-gray-200">
    <thead>
      <th v-for="(title, index) in titles" :key="index">{{ title }}</th>
    </thead>
    <tr class="py-4 flex" v-for="team in teams" :key="team.id">
      <td>
        <img :src="team.image" alt="" />
      </td>
      <td>
        <p>{{ team.name }}</p>
      </td>
      <td>
        <p>{{ team.email }}</p>
      </td>
    </tr>
  </table>
</template>

<script>
export default {
  props: {
    teams: Array,
    titles: Array,
  },
};
</script>
