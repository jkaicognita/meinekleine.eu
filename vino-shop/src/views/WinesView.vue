<script setup>
import { computed, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { wines } from '../data/wines'
import ProductCard from '../components/ProductCard.vue'
const selectedType = ref('Všechna')
const maxPrice = ref(1000)
const search = ref('')
const filteredWines = computed(() => {
return wines.filter((wine) => {
const matchesType =
selectedType.value === 'Všechna' ||
wine.type === selectedType.value
const matchesPrice = wine.price <= maxPrice.value
const query = search.value.toLowerCase()
const matchesSearch =
!query ||
wine.name.toLowerCase().includes(query) ||
wine.variety.toLowerCase().includes(query) ||
wine.region.toLowerCase().includes(query)
return matchesType && matchesPrice && matchesSearch
})
})
</script>
<template>
<section class="container page-section">
<div class="page-heading">
<p class="eyebrow">Naše nabídka</p>
<h1>Vyberte si své víno</h1>
</div>
<div class="filters">
<input
v-model="search"
type="search"
placeholder="Hledat víno nebo odrůdu..."
/>
<select v-model="selectedType">
<option>Všechna</option>
<option>Bílé víno</option>
<option>Červené víno</option>
<option>Růžové víno</option>
<option>Sekt</option>
</select>
<label>
Cena do {{ maxPrice }} Kč
<input v-model="maxPrice" type="range" min="100" max="1000" />
</label>
</div>
<div class="product-grid">
<RouterLink
v-for="wine in filteredWines"
:key="wine.id"
:to="`/vino/${wine.id}`"
class="product-link"
>
<ProductCard :wine="wine" />
</RouterLink>
</div>
<p v-if="!filteredWines.length" class="empty-state">
Žádnému vínu neodpovídají zadané filtry.
</p>
</section>
</template>
