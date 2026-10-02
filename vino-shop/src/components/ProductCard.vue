<script setup>
import { useCartStore } from '../stores/cart'
defineProps({
wine: {
type: Object,
required: true
}
})
const cart = useCartStore()
</script>
<template>
<article class="product-card">
<img :src="wine.image" :alt="wine.name" />
<div class="product-card-content">
<p class="product-type">{{ wine.type }}</p>
<h2>{{ wine.name }}</h2>
<p>{{ wine.winery }}</p>
<div class="product-footer">
<strong>{{ wine.price }} Kč</strong>
<button
class="button button-small"
@click="cart.addToCart(wine)"
>
Do košíku
</button>
</div>
</div>
</article>
</template>

