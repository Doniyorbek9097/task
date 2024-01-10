<template>
    <q-page class="q-pa-sm">
        <q-table flat bordered :loading="loading" :filter="filter" :rows="result.products" :columns="columns"
            virtual-scroll>
            <template #top>
                <div class="row justify-between items-center w-full h-[50px]">
                    <div class="text-h5">Products</div>
                    <q-input class="sm:min-w-[200px] md:min-w-[500px]" outlined dense debounce="300" v-model="filter"
                        placeholder="Search">
                        <template v-slot:append>
                            <q-icon name="search" />
                        </template>
                    </q-input>
                    <q-btn color="primary" icon="add" fab-mini @click="ShowAddDialog" />
                </div>
            </template>
            <template #body-cell-thumbnail="props">
                <q-tr :props="props">
                    <q-td class="flex gap-2">
                        <q-img :src="props.row.thumbnail" width="70px"></q-img>
                    </q-td>
                </q-tr>
            </template>
            <template #body-cell-action="props">
                <q-tr :props="props">
                    <q-td class="flex gap-2">
                        <q-btn icon="edit" dense color="blue" @click="ShowEditDialog(props.row)"/>
                        <q-btn icon="delete" dense color="red" @click="DelProduct(props.row.id)" />
                    </q-td>
                </q-tr>
            </template>
        </q-table>
        
        <Dialog v-model="showAddProduct" title="Mahsulot qo'shish" :product="product" @update-product="AddProduct"></Dialog>
        <Dialog v-model="showEditProduct" title="Mahsulotni yangilash" :product="product" @update-product="EditProduct"></Dialog>
        
    </q-page>
</template>
  
<script setup>
import { ref, onMounted, reactive } from "vue"
import { useQuasar } from "quasar";
import Dialog from "../../components/Dialog.vue"
//   import GirdList from "../../components/GirdList.vue";
import { api } from "../../api";
const $q = useQuasar();
const result = ref([]);
const filter = ref("");
const loading = ref(false);
const showAddProduct = ref(false);
const showEditProduct = ref(false);

//   const pagination = ref({ rowsPerPage: 100 })
//   const grid = ref(JSON.parse(localStorage.isGrid));

onMounted(async () => {
    try {
        loading.value = true;
        const { data: data } = await api("/products");
        result.value = data;
        loading.value = false;
    } catch (error) {
        console.log(error);
    }
})

const product = ref({
    title: "",
    price: null,
    discription: "",
    stock: 1
})


const columns = [

    {
        name: 'id',
        field: "id",
        label: '#',
        align: 'center',
        required: true
    },

    {
        name: 'thumbnail',
        field: "thumbnail",
        label: 'Image',
        align: 'center',
        required: true
    },
    {
        name: 'title',
        field: "title",
        label: 'Title',
        align: 'center',
        required: true
    },

    {
        name: 'brand',
        field: "brand",
        label: 'Brand',
        align: 'center',
        required: true
    },

    {
        name: 'price',
        field: "price",
        label: 'Price',
        align: 'center',
        required: true
    },

    {
        name: 'discountPercentage',
        field: "discountPercentage",
        label: 'Discount Percent',
        align: 'center',
        required: true
    },
    {
        name: 'stock',
        field: "stock",
        label: 'Stock',
        align: 'center',
        required: true
    },

    {
        name: 'action',
        label: 'Action',
        align: "center",
        field: 'action'
    },

];

const ShowAddDialog = () => {
    product.value = {};
    showAddProduct.value = true;
}

const AddProduct = async (product) => {
    try {
        fetch('https://dummyjson.com/products/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                result.value.products.unshift(data);
            });
    } catch (error) {
        console.log(error);
    }
}


const ShowEditDialog = (item) => {
    product.value = item;
    showEditProduct.value = true;
}

const EditProduct = (item) => {
    console.log(item);
 fetch(`https://dummyjson.com/products/${item.id}`, {
  method: 'PUT', /* or PATCH */
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(item)
})
.then(res => res.json())
.then(data => console.log(data));
            

}


const DelProduct = async (id) => {
    try {
        const index = result.value.products.findIndex(product => product.id === id);
        result.value.products.splice(index, 1);
        const deleted = await api.delete(`https://dummyjson.com/products/${id}`)

    } catch (error) {
        console.log(error);
    }
}






</script>
  
<style lang="scss" scoped></style>
  