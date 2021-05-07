<template>
  <el-card class="micro-item-card link" @click="jumpToDetails">
    <img :src="itemUrl">
    <div class="profile">
      <p class="title">
        {{ itemTitle }}
      </p>
      <o class="intro">
        {{ itemIntro }}
      </o>
    </div>
  </el-card>
</template>

<script>
export default {
  name: 'MicroItem',
  data() {
    return {
      itemUrl: '',
      itemTitle: '',
      itemIntro: ''
    }
  },
  props: ['itemId'],
  methods: {
    jumpToDetails() {
      this.$router.push({
        name: 'ItemDetail',
        params: {
          itemId: this.itemId
        }
      });
      console.log(this.itemId);
    }
  },
  beforeMount() {
    if (this.itemId == 1) {
      this.itemUrl = 'https://g-search1.alicdn.com/img/bao/uploaded/i4/i3/859515618/O1CN01dPR9731rN5iZZaHar_!!0-item_pic.jpg_460x460Q90.jpg_.webp';
      this.itemTitle = '线性代数';
      this.itemIntro = '线性代数(科学出版社十三五普通高等教育本科规划教材)/大学数学系列教学丛书 博库网';
    }
    if (this.itemId == 2) {
      this.itemUrl = 'https://g-search2.alicdn.com/img/bao/uploaded/i4/i1/1049653664/O1CN01WYr3tO1cw9korMjp8_!!0-item_pic.jpg_460x460Q90.jpg_.webp';
      this.itemTitle = '高等数学';
      this.itemIntro = '当当网 正版包邮 高等数学(第七版)上下册 习题全解指南(第七版)上下册 同济大学 全套共4册 数学类考研用书';
    }
  }
}
</script>

<style>
.micro-item-card {
  width: 350px;
  border-radius: 10px;
}

.micro-item-card .el-card__body {
  padding: 0;
}

.micro-item-card img {
  width: 100%;
  object-fit: cover;
}

.micro-item-card .profile {
  padding: 20px 20px 30px;
  text-align: left;
}

.micro-item-card .title {
  margin: 0 0 15px 0;
  font-size: 24px;
}

.micro-item-card .intro {
  margin: 0;
  font-size: 16px;
}
</style>