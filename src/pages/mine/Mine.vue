<template>
	<div class="mine">
		<MyHeader txt="我的">
			<img slot="rightImg" class="rightImg" src="../../assets/images/ic_settings.png"/>
		</MyHeader>
	</div>
</template>

<script>
	import MyHeader from "@/components/Header"
	export default{
		components:{
			MyHeader
		}
	}
</script>