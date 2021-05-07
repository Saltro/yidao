<template>
  <navigator></navigator>
  <div class="item-detail-header">
    <img :src="itemUrl">
    <div class="profile">
      <p class="title highlight">{{ itemTitle }}</p>
      <p class="intro">{{ itemIntro }}</p>
      <p class="price highlight">￥ {{ price }}</p>
      <p class="rest-num">当前有 {{ restNum }} 件</p>
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
      <div class="buttons">
        <el-button>加入购物车</el-button>
        <el-button type="primary">立即购买</el-button>
      </div>
    </div>
  </div>
  <el-tabs v-model="activeTab" type="card" class="item-detail-tabs">
    <el-tab-pane label="详情" name="one">
      {{ itemDetails }}
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import Navigator from '../components/Navigator.vue'
export default {
  name: 'ItemDetail',
  components: {
    Navigator
  },
  data() {
    return {
      itemTitle: '',
      itemIntro: '',
      price: 0,
      restNum: 0,
      kind: '',
      number: 0,
      itemDetails: '',
      activeTab: 'one'
    }
  },
  beforeMount() {
    let itemId = this.$route.params.itemId;
    if (itemId == 1) {
      this.itemUrl = 'https://g-search1.alicdn.com/img/bao/uploaded/i4/i3/859515618/O1CN01dPR9731rN5iZZaHar_!!0-item_pic.jpg_460x460Q90.jpg_.webp';
      this.itemTitle = '线性代数';
      this.itemIntro = '线性代数(科学出版社十三五普通高等教育本科规划教材)/大学数学系列教学丛书 博库网';
      this.price = 28;
      this.restNum = 2;
      this.itemDetails = '线性代数是研究线性空间和线性变换的理论,是处理线性问题的重要工具.本书是依据 颁发的教学大纲,参考大量 外相关教材,并结合编委会成员多年来在线性代数教学中的实践经验编写而成本书共六章,内容包括:矩阵、行列式、线性方程组、矩阵的特征值与特征向量、二次型、线性空间与线性变换.每节配有适量习题,每章配有复习题,书末附有习题参考答案.本书脉络清晰以矩阵为线索并贯穿全书始末,内容深入浅出,简洁易懂本书可供高等院校理工类专业学生使用,也可供自学者和科技工作者阅读。';
    }
    if (itemId == 2) {
      this.itemUrl = 'https://g-search2.alicdn.com/img/bao/uploaded/i4/i1/1049653664/O1CN01WYr3tO1cw9korMjp8_!!0-item_pic.jpg_460x460Q90.jpg_.webp';
      this.itemTitle = '高等数学';
      this.itemIntro = '当当网 正版包邮 高等数学(第七版)上下册 习题全解指南(第七版)上下册 同济大学 全套共4册 数学类考研用书';
      this.price = 140;
      this.restNum = 4;
      this.itemDetails = '品牌名称：高等教育出版社 产品参数：产品名称：【4本套】高等数学(第7版...品牌: 高等教育出版社ISBN编号: 9787040396638书名: 【4本套】高等数学(第7版)(上)（下）+（北理工）高等数学辅导（同济七版）上，下册作者: 同济大学数学系定价: 159.50元书名: 【4本套】高等数学(第7版)(上)（下）+（北理工）高等数学辅导（同济七版）上，下册是否是套装: 是出版社名称: 高等教育出版社'
    }
  }
}
</script>

<style>
.item-detail-header {
  margin: auto;
  display: flex;
  justify-content: center;
  text-align: left;
}

.item-detail-header img {
  width: 480px;
}

.item-detail-header .profile {
  margin: 0 0 0 60px;
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.item-detail-header .profile .title {
  margin: 0 0 15px;
  font-size: 48px;
}

.item-detail-header .profile .intro {
  margin: 0 0 20px;
}

.item-detail-header .profile .price {
  margin: 0 0 20px;
  font-size: 72px;
}

.item-detail-header .profile .rest-num {
  margin: 0 0 20px;
  font-size: 12px;
}

.item-detail-header .choice {
  margin: 0 0 20px;
  width: 270px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.item-detail-header .choice .el-select {
  width: 180px;
  height: 40px;
}

.item-detail-header .choice .el-input__inner {
  height: 40px;
}

.item-detail-header .choice .el-input-number, .item-detail-header .choice .el-input-number .el-input {
  width: 180px;
  height: auto;
}

.item-detail-header .choice .el-input-number .el-input-number__decrease, .item-detail-header .choice .el-input-number .el-input-number__increase {
  height: 20px;
}

.item-detail-header .profile .buttons {
  margin: 15px 0 30px;
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.item-detail-header .profile .buttons .el-button {
  width: 110px;
}

.item-detail-tabs {
  margin: 85px auto;
  width: 860px;
  text-align: left;
}
</style>