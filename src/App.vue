<template>
    <div class="p-5">
        TASK 1
        <tree-collapse :data="treeData"/>
    </div>

    <div class="p-5">
        TASK 2
        <table-component :data="tableData" :columns="tableColumns"/>
    </div>
</template>

<script setup>
import TreeCollapse from './components/TreeCollapse.vue'
import TableComponent from './components/TableComponent.vue'


/* DATA FOR TASK 1 */

const treeData = [
    {
        'name': 'item1',
        'child': [
            {
                'name': 'sub-item1',
                'child': [
                    {
                        'name': 'sub-sub-item1'
                    }
                ]
            }
        ]
    },
    {
        'name': 'item2',
        'child': [
            {
                'name': 'sub-item2',
                'child': [
                    {
                        'name': 'sub-sub-item2'
                    }
                ]
            }
        ]
    }
]

/* DATA FOR TASK 2 */

const tableData = [
    { id: 1, name: 'John Doe', age: 25 },
    { id: 2, name: 'Jane Doe 2', age: 30 },
]


const tableColumns = [
    { key: 'id', title: 'ID' },
    { key: 'name', title: 'Name' },
    { key: 'age', title: 'Age' },
]

</script>

<style>

html, body {
    font-family: sans-serif;
}

</style>