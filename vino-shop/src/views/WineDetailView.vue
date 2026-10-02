<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { wines } from '../data/wines'
import { useCartStore } from '../stores/cart'
const route = useRoute()
const cart = useCartStore()
const wine = computed(() =>
wines.find((item) => item.id === Number(route.params.id))
)
</script>
<template>
<section v-if="wine" class="container detail-layout">
<img :src="wine.image" :alt="wine.name" class="detail-image" />
<div class="detail-content">
<p class="eyebrow">{{ wine.type }}</p>
<h1>{{ wine.name }}</h1>
<p class="winery">{{ wine.winery }}</p>
<p class="description">
{{ wine.description }}
</p>
<dl class="wine-properties">
<div>
<dt>Odrůda</dt>
<dd>{{ wine.variety }}</dd>
</div>
<div>
<dt>Oblast</dt>
<dd>{{ wine.region }}</dd>
</div>
<div>
<dt>Ročník</dt>
<dd>{{ wine.year }}</dd>
</div>
<div>
<dt>Alkohol</dt>
<dd>{{ wine.alcohol }}</dd>
</div>
<div>
<dt>Objem</dt>
<dd>{{ wine.volume }}</dd>
</div>
</dl>
<div class="detail-purchase">
<strong>{{ wine.price }} Kč</strong>
<button class="button" @click="cart.addToCart(wine)">
Přidat do košíku
</button>
</div>
</div>
</section>
<section v-else class="container page-section">
<h1>Víno nebylo nalezeno</h1>
</section>
</template>
