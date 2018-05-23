<template>
	<div class="home">
		<MyHeader isGreen="true">
			<img slot="rightImg" class="rightImg" src="../../assets/images/ic_chat_green.png"/>
			<div slot="search" class="search">
				<input type="text" placeholder="请输入搜索内容..." />
				<img class="search_small"  src="../../assets/images/ic_group_search_small.png" alt="" />
				<img class="scan_small" src="../../assets/images/ic_scan_gray.png" alt="" />
			</div>
		</MyHeader>
		
		<Banner paginationType="progress" effect="fade" destination="right">
			<div class='swiper-slide' slot="swiper-con">
				<img src="../../assets/images/banner/01.jpg" alt="" />
			</div>
			<div class='swiper-slide' slot="swiper-con">
				<img src="../../assets/images/banner/02.jpg" alt="" />
			</div>
			<div class='swiper-slide' slot="swiper-con">
				<img src="../../assets/images/banner/03.jpg" alt="" />
			</div>
		</Banner>
	</div>
</template>

<script>
	/*引入header*/
	import MyHeader from "@/components/Header"
	/*引入banner*/
	import Banner from "@/components/Banner"
	export default{
		components:{
			MyHeader,
			Banner
		}
	}
</script>

<style>
	
</style>