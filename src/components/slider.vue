<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="slide in swiperSlides"><img :src='slide.src'></swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>
 
<script>
  export default {
    name: 'carrousel',
    data () {
      return {
        swiperOption: {
          autoplay: 3500,
          setWrapperSize : true,
          pagination : '.swiper-pagination',
          paginationClickable : true,
          mousewheelControl : true,
          observeParents: true
        },
        swiperSlides: [
          { id : 1, src : '/static/img/carousel_1.jpg'}, 
          { id : 2, src : '/static/img/carousel_2.jpg'}
          ]
      }
    },
    mounted() {
      setInterval(() => {
        console.log('simulate async data')
        let swiperSlides = this.swiperSlides
        if (swiperSlides.length < 1) swiperSlides.push(swiperSlides.length + 1)
      }, 3000)
    }
  }
</script>
<style>
.swiper-slide>img{
	width: 100%
}

	
</style>
