<template>
    <div>
     <header class="video-background">
        
            <nav>
                <div class="row">
                    <img :src="logo" class="logo" alt="logo">
                    <ul class="main-nav">
                        <li><a href="#">首頁</a></li>
                        <li><a href="#">最新課程</a></li>
                        <li><a href="#">聯絡我們</a></li>
                        <li><a href="#">登入</a></li>
                    </ul>
                </div>
            </nav>
            <div class="hero-text-box">
                <h1>價值投資教練<br>超越大盤的獲利</h1>
                <a class="btn btn-full" href="">免費訂閱我們</a>
                <span style="color:white;margin:10px;">或</span>
                <a class="btn btn-ghost" href="">加入BETA測試</a>   
            </div>
        </header>
        <v-section></v-section>
        <v-section2></v-section2>
        <v-section3></v-section3>
        <v-email></v-email>
    </div>
</template>


<style>
    
/*
 BASIC SETUP
*/

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    background: #fff;
    color: #555;
    font-family: 'Playfair Display', serif;
    font-size: 20px;
    font-weight: 300;
    text-rendering: optimizeLegibility;
}

.row {
    max-width: 1140px;
    margin: 0 auto;
}

header {
    background-image: linear-gradient(rgba(0, 0, 0, .7), rgba(0, 0, 0, .7));
    background-size: cover;
    background-position: center;
    height: 100vh;
}

.hero-text-box {
    position: absolute;
    width: 1140px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%)
}

h1,
h2,
h3 {
    font-weight: 300;
    text-transform: uppercase;
}
h1 {
    margin-top: 0;
    margin-bottom: 20px;
    color: #fff;
    font-size: 240%;
    word-spacing: 4px;
    letter-spacing: 1px;
}

h2 {
    font-size: 180%;
    word-spacing: 2px;
    text-align:center;
    margin-bottom: 30px;
    letter-spacing: 1px;
    color: #00a0e9;
}
h3{
    font-size: 110%;
    margin-bottom: 15px;
    color: #00a0e9;   
}

h2:after {
    display: block;
    height: 2px;
    background: #e67e22;
    content: " ";
    width:100px;
    margin:0 auto;
    margin-top: 30px;
}
.btn:link,
.btn:visited {
    display: inline-block;
    padding: 10px 30px;
    font-weight: 300;
    text-decoration: none;
    border-radius: 200px;
    transition: background-color 0.2s, border 0.2s, color 0.2s;
}

.btn:hover,
.btn:active {
    background: #438edb;
}

.btn-full:link,
.btn-full:visited {
    border: 1px solid #e67e22;
    background: #e67e22;
    color: #fff;
    margin-right: 7.5px;
}

.btn-ghost:link,
.btn-ghost:visited {
    border: 1px solid #7e88d7;
    color: #fff;
    margin-left:7.5px;
}

.btn-full:hover,
.btn-full:active {
    border: 1px solid #cf6d17;
    color: #fff;
}

.btn-ghost:hover,
.btn-ghost:active {
    border: 1px solid #7e88d7;
    color: #fff;
}

.logo {
    height: 100px;
    width: auto;
    float: left;
    margin-top: 20px;
}

.main-nav {
    float: right;
    list-style: none;
    margin-top: 60px;
}

.main-nav li {
    text-decoration: none;
    display: inline-block;
    margin-left: 40px;
}

.main-nav li a:link,
.main-nav li a:visited {
    padding: 8px 0;
    color: #fff;
    text-decoration: none;
    text-transform: uppercase;
    border-bottom:2px solid transparent;
    transition: boder-bottom .2s;
    font-size: 90%;
}

.main-nav li a:hover,
.main-nav li a:active {
    border-bottom:2px solid #e67e22;
}
.video-background {
    
}
</style>

<script>
    import logo from '../../../static/img/logo-white.png'
    import vSection from './section.vue'
    import vSection2 from './section2.vue'
    import vSection3 from './section3.vue'
    import vEmail from './email.vue'
    export default{
        name:'v-cover',
        components:{
            vSection,
            vSection2,
            vSection3,
            vEmail
        },
        data () {
            return {
                logo
            }    
        },
        method: {   
        }
    }
</script>