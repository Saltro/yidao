<template>
  <navigator></navigator>
  <div class="home-body">
    <div class="aside">
      <el-menu default-active="1-1" v-for="itemMenu in itemMenus" :key="itemMenu.index">
        <el-submenu :index="itemMenu.index">
          <template v-slot:title>{{ itemMenu.title }}</template>
          <el-menu-item-group v-for="subMenu in itemMenu.submenu" :key="subMenu.index">
            <el-menu-item :index="subMenu.index">{{ subMenu.title }}</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </div>
    <div class="main">
      <div class="col" v-for="(item, index) in items" :key="item.id">
        <micro-item v-if="! (index % 2)" :itemId="item.id"></micro-item>
      </div>
      <div class="col" v-for="(item, index) in items" :key="item.id">
        <micro-item v-if="index % 2" :itemId="item.id"></micro-item>
      </div>
    </div>
  </div>
</template>

<script>
import MicroItem from '../components/MicroItem.vue'
import Navigator from '../components/Navigator.vue'

export default {
  name: 'Home',
  components: {
    Navigator,
    MicroItem
  },
  data() {
    return {
      itemMenus: [
        {
          index: '1',
          title: '图书',
          submenu: [
            {
              index: '1-1',
              title: '教材'
            },
            {
              index: '1-2',
              title: '文学'
            }
          ]
        },
        {
          index: '2',
          title: '食品',
          submenu: []
        },
        {
          index: '3',
          title: '资料',
          submenu: []
        }
      ],
      items: [
        {
          id: '1'
        },
        {
          id: '2'
        }
      ]
    }
  }
}
</script>

<style>
.home-body {
  display: flex;
  justify-content: center;
}

.home-body .aside {
  margin: 0px 55px 0px 0px;
  width: 150px;
}

.home-body .main {
  width: 740px;
  height: auto;
  display: flex;
  justify-content: space-between;
}

.home-body .main .micro-item-card {
  margin: 0 0 30px 0;
}
</style>