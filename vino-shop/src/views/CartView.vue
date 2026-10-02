<script setup>
import { useCartStore } from '../stores/cart'
const cart = useCartStore()
</script>
<template>
<section class="container page-section">
<div class="page-heading">
<p class="eyebrow">Objednávka</p>
<h1>Nákupní košík</h1>
</div>
<div v-if="cart.items.length" class="cart-layout">
<div class="cart-items">
<article
v-for="item in cart.items"
:key="item.id"
class="cart-item"
>
<img :src="item.image" :alt="item.name" />
<div>
<h2>{{ item.name }}</h2>
<p>{{ item.price }} Kč / láhev</p>
<input
:value="item.quantity"
type="number"
min="1"
@change="
cart.changeQuantity(
item.id,
Number($event.target.value)
)
"
/>
</div>
<strong>
{{ item.price * item.quantity }} Kč
</strong>
<button
class="remove-button"
@click="cart.removeFromCart(item.id)"
>
Odebrat
</button>
</article>
</div>
<aside class="order-summary">
<h2>Souhrn objednávky</h2>
<p>
Mezisoučet:
<strong>{{ cart.subtotal }} Kč</strong>
</p>
<p>
Doprava:
<strong>
{{ cart.shipping ? `${cart.shipping} Kč` : 'Zdarma' }}
</strong>
</p>
<hr />
<p class="total">
Celkem:
<strong>{{ cart.total }} Kč</strong>
</p>
<button class="button button-full">
Pokračovat k objednávce
</button>
</aside>
</div>
<div v-else class="empty-state">
<p>Košík je zatím prázdný.</p>
<RouterLink to="/vina" class="button">
Vybrat víno
</RouterLink>
</div>
</section>
</template>
