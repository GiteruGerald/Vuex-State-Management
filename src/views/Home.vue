<template>
  <div class="home">
      <product-list />
  </div>
</template>

<script>
// @ is an alias to /src
import ProductList from "../components/ProductList"
export default {
  name: 'Home',
  components: {
    ProductList
  }
}
</script>

