<template>
  <ul role="list" class="divide-y divide-gray-100">
    <li
      v-for="item in data.list.data"
      :key="item.id"
      class="flex justify-between gap-x-6 py-5"
    >
      <div class="flex gap-x-4">
        <div class="min-w-0 flex-auto">
          <p class="text-sm font-semibold leading-6 text-gray-900">
            {{ item.name }}
          </p>
          <p class="mt-1 truncate text-xs leading-5 text-gray-500">
            {{ item.email }}
          </p>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    data: Object,
  },
};
</script>
