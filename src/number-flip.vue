<template>
	<div class="number-flip">
		<span
			v-if="value < 0"
			class="number-flip-negative"
		>-</span>
		<div
			v-for="(translateY, index) in translates"
			:key="index"
			class="number-flip-digit-container"
		>
			<span style="visibility: hidden;">0</span>
			<div
				class="number-flip-digit-value"
				:style="{ transform: translateY }"
			>
				<span
					v-for="i in 10"
					:key="i"
				>{{ 10 - i }}</span>
				<span>{{ decimalSeparator }}</span>
				<span>{{ thousandSeparator }}</span>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import type { Ref } from 'vue';
import { ref, watch } from 'vue';

defineOptions({
	name: 'NumberFlip'
})

const props = defineProps({
	value: {
		type: Number,
		default: 0,
	},
	decimalSeparator: {
		type: String,
		default: '.',
	},
	thousandSeparator: {
		type: String,
		default: ',',
	},
	formatter: {
		type: Function,
		default: (num: number) => num.toString()
	},
	immediate: {
		type: Boolean,
		default: true
	}
})

const translates: Ref<string[]> = ref([])

function getDigits(num: number): number[] {
	const digits: string[] = props.formatter(Math.abs(num)).split('')
	return digits.map(d => {
		if (d === props.decimalSeparator) {
			return -1
		} else if (d === props.thousandSeparator) {
			return -2
		}
		return parseInt(d, 10)
	})
}

function calcTranslateY(num: number): string {
	const heightOfSpan = 100 / 12
	return (-10 * heightOfSpan + (num + 1) * heightOfSpan).toString()
}

function generateNumber(value: number) {
	const digits = getDigits(value)
	for (let i = translates.value.length; i < digits.length; i++) {
		translates.value.push('translateY(-100%)')
	}
	for (let i = digits.length; i < translates.value.length; i++) {
		translates.value.pop()
	}
	setTimeout(() => {
		translates.value = digits.map((d) => `translateY(${calcTranslateY(d)}%)`)
	}, 0)
}

watch(
	() => props.value,
	(val) => {
		generateNumber(val)
	},
	{ immediate: props.immediate }
)

</script>

<style>
.number-flip {
	display: inline-flex;
}

.number-flip-digit-container {
	display: flex;
	position: relative;
	overflow: hidden;
}

.number-flip-digit-value {
	position: absolute;
	display: flex;
	flex-direction: column;
	transition: transform 1s cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
