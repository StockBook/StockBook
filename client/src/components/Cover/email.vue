<template>
    <section class="section-features">
        <div class="row">
            <h2>我想訂閱免費資訊</h2>
        </div>
        <div class="row">
            <div class="col span-4-of-4 box">
               <input type="text">
            </div>
            <div class="col span-1-of-4 box">
                <i class="ion-ios-flame icon-big"></i>
                <p>Youtube影片</p>
            </div>
            <div class="col span-1-of-4 box">
                <i class="ion-ios-flame icon-big"></i>
                <p>Line群組</p>
            </div>
            <div class="col span-1-of-4 box">
                <i class="ion-ios-flame icon-big"></i>
                <p>部落格文章</p>
            </div>
        </div>
    </section>
</template>
<style scoped>
    .section-features{
        /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#fceabb+0,fccd4d+64,fbdf93+100 */
        background: #fceabb; /* Old browsers */
        background: -moz-linear-gradient(top, #fceabb 0%, #fccd4d 64%, #fbdf93 100%); /* FF3.6-15 */
        background: -webkit-linear-gradient(top, #fceabb 0%,#fccd4d 64%,#fbdf93 100%); /* Chrome10-25,Safari5.1-6 */
        background: linear-gradient(to bottom, #fceabb 0%,#fccd4d 64%,#fbdf93 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#fceabb', endColorstr='#fbdf93',GradientType=0 ); /* IE6-9 */
    }
</style>
<script>
    import { alert } from 'vue-strap'
    export default {
        name:'v-email',
        components:{
            
        }
    }
</script>