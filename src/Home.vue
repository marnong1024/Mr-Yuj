<template>
  <div id="home">
   <div class="header">
<div class="logo"></div>
<div class="search-input">
    <img src="/static/img/search-bg.png" class="search-input-img">
    <div class="search-input-text">搜索照片、品牌</div>
</div>
    <div class="category-menu"></div>
    <div class="my-info ">登录</div>
</div>
<div class="scroll-empty"></div>
<div class="main-explorer">
    <div class="container-multiColumn">
        <div class="container-multiColumn-line clearfix">
            <div class="container-multiColumn-item"><img src="/static/img/icon-item1.jpg" class="icon-img"></div>
            <div class="container-multiColumn-item2">
                <div class="item-list">
                    <img src="/static/img/icon-item2.jpg" class="icon-img">
                    <div class="main">
                        <h1>亲子照</h1>
                        <h2>纯美时光</h2>
                        <h3>美萌时光</h3>
                        <span>最in全家福</span>
                    </div>
                </div>
                <div class="item-list">
                    <img src="/static/img/icon-item3.jpg" class="icon-img">
                    <div class="main">
                        <h1>满月,百天</h1>
                        <h2>美萌时光</h2>
                        <h3>纯美时光</h3>
                        <span>最in成长照</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container-multiColumn">
        <div class="container-carousel">
           <carrousel></carrousel>
        </div>
    </div>
</div>

  </div>
</template>

<script>
import carrousel from '@/components/slider'
export default {
  name: 'home',
  components:{carrousel}
}
</script>

<style>
.header {
    position: fixed;
    top: 0;
    z-index: 4;
    width: 16rem;
    background: #10C5CF;
    background-size: 100%;
    border-bottom: 0.0074128984rem solid rgba(255, 255, 255, 0.2)
}

.header .logo {
    width: 4.5rem;
    height: 1.375rem;
    background-image: url(/static/img/logo.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    margin: 0 auto;
    display: block;
    transition: height .2s;
}

.header .search-input {
    width: 14.75rem;
    height: 1.5rem;
    margin: 0.25rem auto;
    line-height: 1.5rem;
    transition: width .2s;
    background-color: #fff;
}

.header .search-input .search-input-text {
    font-size: 0.6rem;
    padding: 0 0 0 1.25rem;
    vertical-align: text-top;
    opacity: .3;
    letter-spacing: 0;
}

.header .search-input .search-input-img {
    width: 0.625rem;
    height: 0.625rem;
    float: left;
    margin: 0.4rem 0 0 0.4rem;
    background-color: inherit;
}

.header .category-menu {
    height: 1.125rem;
    width: 1.25rem;
    text-indent: -1000em;
    background: url(/static/img/menu.png) no-repeat;
    background-size: 1rem;
    position: absolute;
    top: 0.35rem;
    margin-left: 0.5rem;
    left: 0.125rem;
}

.header .my-info {
    height: 1rem;
    line-height: 1.25rem;
    padding-top: 0;
    color: #fff;
    font-size: 0.5rem;
    position: absolute;
    top: 0.3rem;
    right: 0.625rem;
}

.scroll-empty {
    margin-top: 3.4rem;
    width: 0.025rem;
    height: 0.025rem;
    display: block;
}
.main-explorer {
}

.main-explorer .container-multiColumn {
    width: 15.68rem;
    padding: 0.4rem 0.16rem 0.4rem 0.16rem;
}

.main-explorer .container-multiColumn .container-multiColumn-item {
    display: inline-block;
    width: 6.272rem;
    text-align: center;
    float: left;
    height: 9rem;
    background-color: #ED5565;
    margin-right: 0.05rem;
}

.main-explorer .container-multiColumn .container-multiColumn-item2 {
    display: inline-block;
    width: 9.358rem;
    text-align: center;
    float: left;
    height: 9rem;
}

.icon-img {
    width: 100%;
    height: 100%;
    display: block;
}

.item-list {
    width: 100%;
    height: 4.475rem;
    background-color: #10c55b;
    position: relative;
}

.container-multiColumn-item2 .item-list:first-child {
    margin-bottom: 0.05rem;
}

.container-multiColumn-item2 .item-list:first-child span {
    background-color: #87CDE1;
}

.container-multiColumn-item2 .item-list:last-child span {
    background-color: #A9ACD7;
}

.container-multiColumn-item2 .item-list .main {
    position: absolute;
    z-index: 3;
    width: 3.5rem;
    height: 100%;
    top: 0;
    left: 0.6rem;
}

.item-list .main h1 {
    color: #333;
    max-width: 6em;
    margin-top: 1.375rem;
    font-weight: 500;
    font-size: 0.35rem;
}

.item-list .main h2 {
    color: #666;
    max-width: 6em;
    margin-top: 0.125rem;
    font-weight: 400;
    font-size: 0.3rem;
}

.item-list .main h3 {
    color: #87CDE1;
    max-width: 6em;
    margin-top: 0.125rem;
    font-size: 0.3rem;
    font-weight: 400;
}

.item-list .main span {
    display: block;
    color: #fff;
    padding: 0.025rem 0.05rem;
    text-align: center;
    position: absolute;
    left: 0.225rem;
    top: 0.175rem;
    border-radius: 0.1rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 100%;
    font-size: 0.6rem;
}
.container-carousel{
    height: 7.5rem;
}
</style>
