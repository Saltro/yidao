<template>
  <div class="shopping-single-item">
    <el-checkbox v-model="isChoosed"></el-checkbox>
    <img>
    <div class="profile">
      <p class="title">{{ itemTitle }}</p>
      <p class="intro">{{ itemIntro }}</p>
    </div>
    <div class="choices">
      <div class="choice">
        <p>样式：</p>
        <el-select v-model="kind" placeholder="选择样式">

        </el-select>
      </div>
      <div class="choice">
        <p>数量：</p>
        <el-input-number v-model="number" :min="1" :max="maxNum" controls-position="right"></el-input-number>
      </div>
    </div>
    <p class="price">￥ {{ price }}</p>
  </div>
</template>

<script>
export default {
  name: 'ShoppingSingleItem',
  data() {
    return {
      isChoosed: false,
      itemTitle: '',
      itemIntro: '',
      price: 0,
      number: 1,
      maxNum: 10
    }
  }
}
</script>

<style>
.shopping-single-item {
  display: flex;
  align-items: center;
}

.shopping-single-item .el-checkbox {
  margin: 0 30px 0;
}

.shopping-single-item img {
  width: 120px;
  margin: 0 30px 0 0;
}

.shopping-single-item .profile {
  width: 260px;
}

.shopping-single-item .profile .title {
  font-size: 24px;
}

.shopping-single-item .profile .intro {
  font-size: 14px;
}

.shopping-single-item .choices {
  margin: 0 50px 0 0;
}

.shopping-single-item .choice {
  width: 180px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.shopping-single-item .choice .el-select {
  width: 110px;
  height: 30px;
}

.shopping-single-item .choice .el-input__inner {
  height: 30px;
}

.shopping-single-item .choice .el-input-number, .shopping-single-item .choice .el-input-number .el-input {
  width: 110px;
  height: auto;
}

.shopping-single-item .choice .el-input-number .el-input-number__decrease, .shopping-single-item .choice .el-input-number .el-input-number__increase {
  height: 15px;
}

.shopping-single-item .price {
  font-size: 24px;
}
</style>