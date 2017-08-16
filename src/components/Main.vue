<template>
    <div id="main">
        <transition name="slide-fade">
            <router-view></router-view>
        </transition>
        <div class="container-footer">
            <ul class="footer_bar clearfix">
                <li>
                    <router-link :to="{ name : 'home'}" active-class="active" exact><i class="icon icon-home"> 
    
        </i><span class="bar-text">主页</span></router-link>
                </li>
                <li>
                    <router-link :to="{ name : 'explorer'}" active-class="active">
                        <i class="icon icon-selected"></i><span class="bar-text">精选</span></router-link>
                </li>
                <li>
                    <router-link :to="{ name : 'cart'}" active-class="active"><i class="icon icon-photo">
    
        </i><span class="bar-text">相册</span></router-link>
                </li>
                <li>
                    <router-link :to="{ name : 'me'}" active-class="active"><i class="icon icon-mine">
    
        </i><span class="bar-text">我的</span></router-link>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {

  name: 'main'

}
</script>
<style>
.slide-fade-enter-active {
    transition: all .3s ease;
}

.slide-fade-leave-active {
    transition: all .3s 
}

.slide-fade-enter,
.slide-fade-leave-active {
    opacity: 0;
}

.container-footer {
    position: fixed;
    bottom: 0;
    background: #10C5CF;
    height: 2.4rem;
    width: 100%;
    padding: 0.25rem 0.5rem;
    box-sizing: border-box;
    z-index: 4;
}

.active {
    opacity: 1 !important;
}

.container-footer .footer_bar li {
    display: inline-block;
    height: 100%;
    width: 25%;
    float: left;
}

.container-footer .footer_bar li a {
    display: block;
    text-align: center;
    color: #fff;
    opacity: .6;
}

.container-footer .footer_bar li i {
    display: block;
    width: 1.2rem;
    height: 1rem;
    margin: 0 auto;
}

.container-footer .footer_bar .bar-text {
    font-size: 0.5rem;
    display: block;
}

@font-face {
    font-family: "iconfont";
    src: url('/static/icon/iconfont.eot?t=1499065357468');
    /* IE9*/
    src: url('/static/icon/iconfont.eot?t=1499065357468#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('/static/icon/iconfont.woff?t=1499065357468') format('woff'), /* chrome, firefox */
    url('/static/icon/iconfont.ttf?t=1499065357468') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
    url('/static/icon/iconfont.svg?t=1499065357468#iconfont') format('svg');
    /* iOS 4.1- */
}

.icon {
    font-family: "iconfont" !important;
    font-size: 1rem;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.icon-selected:before {
    content: "\e601";
}

.icon-mine:before {
    content: "\e502";
}

.icon-home:before {
    content: "\e610";
}

.icon-photo:before {
    content: "\e60e";
}
</style>
