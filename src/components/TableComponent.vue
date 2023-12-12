<template>
    <table border="1">
        <thead>
            <tr class="border border-black bg-gray-200">
                <th v-for="column in columns" :key="column.key">{{ column.title }}</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in data" :key="item.id">
                <td class="border border-black px-3" v-for="column in columns" :key="column.key">{{ item[column.key] }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script setup>

defineProps(['data', 'columns'])

</script>