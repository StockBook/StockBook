<template>
    <section class="section-features">
        <div class="row">
            <h2>價值投資 &mdash; 教練投資</h2>
            <p class="long-copy">
               你好，這裡是價值投資教練的課程，我們會為您找到最適合投資的股票。我們也知道您的時間寶貴，沒有太多時間搜尋股票。我們也為您提供四項保證：
            </p>
        </div>
        <div class="row">
            <div class="col span-1-of-4 box">
                <i class="ion-ios-flame icon-big"></i>
                <h3>最詳細的價值投資資訊</h3>
                <p>提供最完整的價值投資資訊給您，讓您不必花費大量時間看盤，節省更多的時間！</p>
            </div>
            <div class="col span-1-of-4 box">
                <i class="ion-ios-cart icon-big"></i>
                <h3>詳細的價值投資教學</h3>
                <p>您可以隨時隨地收看我們的線上課程，掌握所有價值投資的訣竅，創造更好的獲利！</p>
            </div>
            <div class="col span-1-of-4 box">
                <i class="ion-ios-heart icon-big"></i>
                <h3>獲得更多優惠資訊</h3>
                <p>我們會針對您想要訂閱的資訊將資料寄到您的電子信箱，讓你隨時掌握動態訊息！</p>
            </div>
            <div class="col span-1-of-4 box">
                <i class="ion-ios-star-outline icon-big"></i>
                <h3>15天全額退貨保證</h3>
                <p>在這段時間裡，有任何不滿意的地方，您隨時都可以無條件退貨，並退出訂閱！</p>
            </div>
        </div>
    </section>
</template>

<style>
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
    }
    .box p {
        font-size: 90%;
        line-height: 145%;
    }

    /*------  Icons  -------*/
    .icon-big {
        font-size: 350%;
        
        display: block;
        color: #e67e22;
        margin-bottom: 10px;
    }
    /*------  Buttons  -------*/
</style>

<script>
    export default{
        name:'v-section'
    }
</script>