<template>
  <div class="navigator">
    <p class="link title highlight" @click="this.$router.push('/')">易岛</p>
    <div class="search-bar">
      <el-dropdown>
        <el-button class="dropdown-button">
          商品
          <i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>订单</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <el-input v-model="search" class="input-bar"></el-input>
      <el-button class="search-button" type="primary">搜一搜</el-button>
    </div>
    <div class="links">
      <p class="link highlight" @click="this.$router.push('/applying')">卖家中心</p>
      <p class="link highlight" @click="this.$router.push('/')">订单</p>
      <p class="link highlight" @click="this.$router.push('/shopping')">购物车</p>
      <p class="link highlight" @click="this.$router.push('/')">消息</p>
      <p class="link highlight" @click="this.$router.push('/login')">登录</p>
      <p class="link highlight" @click="this.$router.push('/')">客服帮助</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navigator',
  data() {
    return {
      search: ''
    }
  },
  props: ['userId']
}
</script>

<style>
.navigator {
  margin: 0px auto 30px;
  width: 100%;
  height: 48px;
  background-color: #ECDC47;
  display: flex;
  align-items: center;
  justify-content: center;
}

.navigator .title {
  margin: 0 40px;
  font-size: 28px;
}

.navigator .search-bar {
  margin: 0 40px;
  height: 32px;
  display: inherit;
  align-items: center;
}

.navigator .search-bar .el-dropdown {
  height: 100%;
}

.navigator .search-bar .dropdown-button {
  height: 100%;
  min-height: 100%;
  width: 80px;
  padding: 0;
  text-align: center;
  border-radius: 14px 0px 0px 14px;
}

.navigator .search-bar .search-button {
  height: 100%;
  min-height: 100%;
  width: 64px;
  padding: 0;
  text-align: center;
  border-radius: 0px 14px 14px 0px;
}

.navigator .search-bar .input-bar {
  width: auto;
}

.navigator .search-bar .input-bar .el-input__inner {
  height: 32px;
  width: 200px;
  border-radius: 0px;
}

.navigator .links {
  display: flex;
  font-size: 16px;
}

.navigator .links p {
  margin: 0px 16px 0px;
}

</style>