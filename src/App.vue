<template>
    <div>
        <div style="width:200px">
            <api-select v-model="value" :api="getApi"></api-select>
        </div>
    </div>
</template>

<script lang="ts" setup>
import axios from 'axios'
import { ref } from 'vue';
const value = ref('')

const getApi = () => {
    axios.interceptors.response.use((res) => {
        const { data } = res;
        console.log(`(╯‵□′)╯︵┻━┻`, data)
        
        return data;
    })
    return axios.get('/static/data.json')
}
</script>

<script lang="ts">
export default {
    name: 'App',
}
</script>
