<template>
	<section class="bg-gray-100 flex items-center justify-center min-h-screen">
		<div class="bg-white p-8 max-w-7xl rounded shadow-md">
			<h4 class="text-xl mb-2">Random number change</h4>
			<div class="border-b w-full h-px mb-4 border-gray-300"></div>
			<number-flip :value="randowNum" />

			<h4 class="text-xl mt-8 mb-2">Manually set a number</h4>
			<div class="border-b w-full h-px mb-4 border-gray-300"></div>
			<number-flip :value="manuallyNumber" />
			<div class="mb-2"></div>
			<input
				v-model="newManuallyNumber"
				type="number"
				class="border rounded-sm px-2 py-1 mb-2 mr-2 border-gray-300"
				placeholder="Number"
			/>
			<button
				id="button-2"
				class="bg-blue-500 text-white px-4 py-1 rounded-sm hover:bg-blue-600"
				@click="manuallyNumber = newManuallyNumber"
			>Set number</button>

			<h4 class="text-xl mt-8 mb-2">Manually set a number with formattig function</h4>
			<div class="border-b w-full h-px mb-4 border-gray-300"></div>
			<number-flip
				:value="formatNumber"
				:formatter="addCommas"
			/>
			<div class="mb-2"></div>
			<input
				v-model="newFormatNumber"
				type="number"
				class="border rounded-sm px-2 py-1 mr-2 border-gray-300"
				placeholder="Number"
			/>
			<button
				class="bg-blue-500 text-white px-4 py-1 rounded-sm hover:bg-blue-600"
				@click="formatNumber = newFormatNumber"
			>Set number</button>

			<h4 class="text-xl mt-8 mb-2">Gradient number</h4>
			<div class="border-b w-full h-px mb-4 border-gray-300"></div>
			<div class="gradient">
				<number-flip :value="randowNum" />
			</div>

			<h4 class="text-xl mt-8 mb-2">Custom numerical values</h4>
			<div class="border-b w-full h-px mb-4 border-gray-300"></div>
			<div class="gradient">
				<number-flip
					:value="randowNum"
					:numbers="['玖', '捌', '柒', '陆', '伍', '肆', '叁', '贰', '壹', '零']"
				/>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import { shallowRef } from 'vue';
import NumberFlip from '../index';

const randowNum = shallowRef(0);
function setRandomNumber() {
	randowNum.value = Math.floor(Math.random() * 1000000);
}
setRandomNumber();
setInterval(setRandomNumber, 3000);

const manuallyNumber = shallowRef(0);
const newManuallyNumber = shallowRef(0);

const formatNumber = shallowRef(0)
const newFormatNumber = shallowRef(0)
function addCommas(x: number): string {
	const parts = x.toFixed(6).split('.');
	return parts[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, '$1,') + (parts.length > 1 ? '.' + parts[1] : '');
}
</script>

<style>
@import "tailwindcss";

.gradient {
	font-size: 40px;
	font-weight: bold;
}

.gradient .number-flip-digit-value span,
.gradient .number-flip-negative {
	color: #fff;
	background: linear-gradient(0deg, #00b96b, #1677ff);
	background-clip: text;
	-webkit-text-fill-color: transparent;
}
</style>
