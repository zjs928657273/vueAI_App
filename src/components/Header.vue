<template>
	<div class="header" :class="{green:isGreen}">
		<span class="txt">{{txt}}</span>
		<slot name="leftImg"></slot>
		<slot name="rightImg"></slot>
		<slot name="search"></slot>
	</div>
</template>

<script>
	export default {
		props:["txt","isGreen"]
	}
</script>

<style>
	.header{
		height:44px;
		line-height:44px;
		border-bottom: 1px solid #666;
		text-align: center;
		position: relative;
		background: #f7f7f7;
	}
	.header .txt{
		color:#333;
	}
	.header img{
		width:25px;
	}
	.header .leftImg{
		position: absolute;
		right:70px;
		top:10px;
	}
	.header .rightImg{
		position:absolute;
		top:10px;
		right:20px;
	}
	
	.green{
		background: #7de67d!important;
	}
	
	/*首页home的search*/
	.header .search{
		width:80%;
		height:30px;
		position: absolute;
		top:5px;
		left:5px;
	}
	.header .search input{
		border:none;
		position: absolute;
		left:3px;
		height:30px;
		width:100%;
		text-indent: 2em;
		border-radius: 5px;
	}
	.header .search img{
		width:16px;
		position: absolute;
	}
	.header .search .search_small{
		left:7px;	
		top:8px;
	}
	.header .search .scan_small{
		right:10px;
		top:8px;
	}
</style>