<template>
	<div class="group">
		<MyHeader txt="小组">
			<img slot="leftImg" class="leftImg" src="../../assets/images/ic_group_search.png"/>
			<img slot="rightImg" class="rightImg" src="../../assets/images/ic_chat_green.png"/>
		</MyHeader>
	</div>
</template>

<script>
	//引入header.vue组件
	import MyHeader from "@/components/Header"
	export default{
		components:{
			MyHeader
		}
	}
</script>