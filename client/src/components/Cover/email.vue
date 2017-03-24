<template>
    <alert :show.sync="showRight" placement="top-right" duration="3000" type="success" width="400px" dismissable>
        <span class="icon-ok-circled alert-icon-float-left"></span>
        <strong>Well Done!</strong>
        <p>You successfully read this important alert message.</p>
    </alert>
</template>
<style>
    
</style>
<script>
    import { alert } from 'vue-strap'
    export default {
        name:'v-email',
        components:{
            
        }
    }
</script>