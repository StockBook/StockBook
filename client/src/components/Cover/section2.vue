<template>
    <section class="section-features">
        <div class="row">
            <h2>加入我們的社群</h2>
        </div>
        <div class="row">
            <div class="col span-1-of-4 box">
                <i class="ion-ios-flame icon-big"></i>
                <p>臉書粉絲團</p>
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
    *{
        background: #eeeeee;
    }
    section {
        padding:80px 0;
    }
    box {
        padding: 1%;
    }
    /*------  paragraphs  -------*/
    .long-copy {
        line-height: 145%;
        width: 70%;
        margin-left: 15%;
        margin-bottom: 30px;
    }
    .box p {
        font-size: 90%;
        line-height: 145%;
    }

    /*------  Icons  -------*/
    .icon-big {
        font-size: 1000%;
        
        display: block;
        color: #00a0e9;
        margin-bottom: 10px;
    }
    .icon-big:hover {
        
    }
    /*------  Buttons  -------*/
</style>

<script>
    export default{
        name:'v-section2'
    }
</script>