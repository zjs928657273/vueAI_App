<template>
	<div class="audio">
		<MyHeader txt="书影音">
			<img slot="leftImg" class="leftImg" src="../../assets/images/ic_group_search.png"/>
			<img slot="rightImg" class="rightImg" src="../../assets/images/ic_chat_green.png"/>
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