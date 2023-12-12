<template>
    <div>
        <div v-for="tree in data" class="border-black border-2 p-3 mb-5">
            <div class="flex justify-between">
                {{ tree.name }}
            </div>

            <div>
                <tree-collapse :data="tree.child" @click.stop="setStatus(tree.child)" class="border-black border-b-0"/>
            </div>
        </div>
    </div>
</template>

<script setup>

defineProps(['data'])

</script>