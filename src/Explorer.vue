<template>
    <div id="explorer">
        <div class="selected" multiple>
            <ul class="container-selected clearfix">
                <li class="container-selected-item">
                    <router-link :to= "{name:'details',params: { id:1}}"  class="selected-item-box"><img src="/static/img/selected1.jpg"><span class="selected-item-text">百天宝宝</span></router-link>
                </li>
                <li class="container-selected-item">
                    <router-link :to= "{name:'details',params: { id:2}}" class="selected-item-box"><img src="/static/img/selected2.jpg"><span class="selected-item-text">衬衣少年</span></router-link>
                </li>
                <li class="container-selected-item">
                    <a class="selected-item-box"><img src="/static/img/selected3.jpg"><span class="selected-item-text">小男孩</span></a>
                </li>
                <li class="container-selected-item">
                    <a class="selected-item-box"><img src="/static/img/selected4.jpg"><span class="selected-item-text">时尚女孩</span></a>
                </li>
                <li class="container-selected-item">
                    <a class="selected-item-box"><img src="/static/img/selected5.jpg"><span class="selected-item-text">百天宝宝</span></a>
                </li>
                <li class="container-selected-item">
                    <a class="selected-item-box"><img src="/static/img/selected6.jpg"><span class="selected-item-text">美国队长</span></a>
                </li>
                <li class="container-selected-item">
                    <a class="selected-item-box"><img src="/static/img/selected7.jpg"><span class="selected-item-text">小可爱</span></a>
                </li>
                <li class="container-selected-item">
                    <a class="selected-item-box"><img src="/static/img/selected8.jpg"><span class="selected-item-text">甜美系</span></a>
                </li>
                <li class="container-selected-item">
                    <a class="selected-item-box"><img src="/static/img/selected9.jpg"><span class="selected-item-text">帅气男孩</span></a>
                </li>
                <li class="container-selected-item">
                    <a class="selected-item-box"><img src="/static/img/selected4.jpg"><span class="selected-item-text">时尚女孩</span></a>
                </li>
                <li class="container-selected-item">
                    <a class="selected-item-box"><img src="/static/img/selected5.jpg"><span class="selected-item-text">百天宝宝</span></a>
                </li>
                <li class="container-selected-item">
                    <a class="selected-item-box"><img src="/static/img/selected6.jpg"><span class="selected-item-text">美国队长</span></a>
                </li>
                 <li class="container-selected-item">
                    <a class="selected-item-box"><img src="/static/img/selected9.jpg"><span class="selected-item-text">帅气男孩</span></a>
                </li>
                <li class="container-selected-item">
                    <a class="selected-item-box"><img src="/static/img/selected5.jpg"><span class="selected-item-text">百天宝宝</span></a>
                </li>
                <li class="container-selected-item">
                    <a class="selected-item-box"><img src="/static/img/selected6.jpg"><span class="selected-item-text">美国队长</span></a>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
  name: 'explorer'
}
</script>
<style>
.selected {
    padding-bottom: 2.4rem
}

.container-selected {
    box-sizing: border-box;
    width: 100%;
    padding: 0.4rem 0.16rem 0.4rem 0.16rem;
}

.container-selected .container-selected-item {
    box-sizing: border-box;
    float: left;
    font-size: 0.5rem;
    width: 33.333%;
    padding: 0.05rem;
}

.container-selected .container-selected-item .selected-item-box {
    position: relative;
    display: block;
    width: 100%;
}

.container-selected .container-selected-item .selected-item-box img {
    width: 100%;
}

.container-selected .container-selected-item .selected-item-box .selected-item-text {
    display: block;
    color: #fff;
    padding: 0.025rem 0.05rem;
    text-align: center;
    position: absolute;
    bottom: 0.1rem;
    border-radius: 0.1rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 0.6rem;
    width: 100%;
}
</style>
