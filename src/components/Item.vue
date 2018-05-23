<template>
	<div class="itemWrap" @click="fn">
		<span v-show="bol"><slot name="normalImg"></slot><br/></span>
		<span v-show="!bol"><slot name="activeImg"></slot><br/></span>
		<span :class="{txt:true,active:!bol}">{{txt}}</span>
	</div>
</template>

<script>
	export default {
		props:["txt","mark","sel"],
		computed:{
			bol:function(){
				if(this.mark==this.sel){
					return false;
				}
				return true;
			}
		},
		methods:{
			fn:function(){
				//抛出自定义事件
				this.$emit("change",this.mark);
				//切换路由
				this.$router.push("/"+this.mark);
			}
		}
	}
</script>

<style>
	.itemWrap{
		width:20%;
		float:left;
	}
	.itemWrap img{
		width:30px;
	}
	.itemWrap{
		text-align: center;
	}
	.itemWrap .txt{
		color:#666;
		font-size: 14px;
	}
	.itemWrap .active{
		color:green;
	}
</style>