<template>
	<div class="banner">
		<div class="swiper-container">
			<div class="swiper-wrapper">
				<slot name="swiper-con"></slot>
			</div>
			<div class="swiper-pagination" :style="{'text-align': destination}"></div>
		</div>
	</div>
</template>

<script>
	//引入js文件
	import "../assets/libs/swiper/js/swiper.js"
	export default {
		props:{
			autoplay:{
				type:Number,
				default:2000
			},
			loop:{
				type:Boolean,
				default:true
			},
			destination:{
				type:String,
				default:"center"
			},
			effect:{
				type:String,
				default:"slide"
			},
			paginationType:{
				type:String,
				default:"bullets"
			}
		},
		mounted:function(){
			var that = this;
			new Swiper(".swiper-container",{
				loop:that.loop,
				autoplay:that.autoplay,
				pagination:".swiper-pagination",
				paginationType:that.paginationType,
				effect:that.effect,
				autoplayDisableOnInteraction:false,
			});
		}
	}
	
</script>

<style>
	/*引入css文件 注意后面必须带分号！！*/
	@import "../assets/libs/swiper/css/swiper.css";
	.banner{
		width:100%;
		height:128px;
	}
	.banner img{
		width:100%;
	}
	.swiper-pagination-bullet-active{
		background: #fff;
	}
	
	.swiper-pagination-progressbar {
    	background: #b36e6e!important;
    }
</style>