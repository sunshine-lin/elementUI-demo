<template>
	<div id="SearchBox">

		<el-input placeholder="请输入内容" v-model="input5">
			<el-select v-model="select" slot="prepend" placeholder="请选择">
				<el-option v-for="(item,index) in optionArr" :key="index"
				label="item.label" value="1"></el-option>
			</el-select>
			<el-button slot="append" icon="search"></el-button>
		</el-input>
		<div class="tagBox">
			<el-tag v-for="(item,index) in tagArr" :key="index">{{item}}</el-tag>
		</div>

	</div>
</template>
<script>
	export default {
		props: {
			optionArr: Array
		},
		data() {
			return {
				input3: '',
				input4: '',
				input5: '',
				select: ''
			}
		}
	}
</script>
<style rel="stylesheet" lang="scss">
	#SearchBox{
		max-width: 450px;
	}
</style>