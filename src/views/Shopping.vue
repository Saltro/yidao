<template>
  <navigator></navigator>
  <div class="shopping">
    <div class="header">
      <p class="title highlight">购物车</p>
      <p class="title highlight">￥ {{ total }}</p>
      <p class="pay">支付</p>
    </div>
    <div class="items">
      <shopping-single-item></shopping-single-item>
    </div>
    <div class="footer">
      <p class="title highlight">￥ {{ total }}</p>
      <p class="pay">支付</p>
    </div>
  </div>
</template>

<script>
import Navigator from '../components/Navigator.vue'
import ShoppingSingleItem from '../components/ShoppingSingleItem.vue'

export default {
  name: 'Shopping',
  components: {
    Navigator,
    ShoppingSingleItem
  },
  data() {
    return {
      total: 0
    }
  }
}
</script>

<style>
.shopping {
  margin: auto;
  width: 786px;
}

.shopping .header {
  margin: 0px 0px 20px 0px;
  padding: 0px 0px 20px 0px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid grey;
}

.shopping .title {
  margin: 0;
  font-size: 36px;
}

.shopping .pay {
  margin: 0;
  font-size: 36px;
}

.shopping .pay:hover {
  color: #F96C1F;
}

.shopping .items .shopping-single-item {
  margin: 0px 0px 20px 0px;
  padding: 0px 0px 20px 0px;
  border-bottom: 1px solid grey;
}

.shopping .footer {
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
</style>