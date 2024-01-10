<template>
    <div class="q-pa-md q-gutter-sm">

        <q-dialog v-model="props.modelValue" transition-show="rotate" transition-hide="rotate">
            <q-card>
                <q-card-section class="flex justify-between">
                    <div class="text-h6">{{ props.title }}</div>
                    <q-btn icon="close" color="red" dense @click="CloseDigalog" />
                </q-card-section>

                <q-card-section class="q-pt-none">
                    <q-form class="min-w-[400px]">
                        <q-input v-model="product.title" type="text" label="Mahsulot sahlavhasi" />
                        <q-input v-model="product.price" type="number" label="Mahsulot narxi" />
                        <q-input v-model="product.stock" type="number" label="Mahsulot miqdori" />
                        <q-input v-model="product.description"  type="textarea" label="Mahsulot haqida" />

                    </q-form>
                </q-card-section>

                <q-card-actions align="right">
                    <q-btn flat label="Saqlash" color="primary" @click="AddProduct(product)" />
                </q-card-actions>
            </q-card>
        </q-dialog>

    </div>
</template>
  
<script setup>
import { ref, reactive } from 'vue'

const props = defineProps({
    modelValue: {
        type: Boolean,
        default: true
    },

    title: {
        type: String,
        default: ""
    },

    product: {
        type: Object,
        default: {}
    }
});

const emits = defineEmits(["update:modelValue", "update-product"])


const AddProduct = (product) => {
    emits("update-product", product)
    emits('update:modelValue', false)

}


const CloseDigalog = () => {
    emits('update:modelValue', false)

}
</script>
  