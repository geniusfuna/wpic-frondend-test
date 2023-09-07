<template>
  <div class="import">
    <el-card shadow="never">
      <div class="form">
        <el-form inline="true">
          <!-- shop select -->
          <el-form-item label="Shop">
            <el-select v-model="value" filterable placeholder="Please Select Shop" @change="shopSlectCallback">
              <el-option v-for="item in shop_options" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <!-- sku select -->
          <el-form-item label="SKU">
            <el-select v-model="value" filterable placeholder="Please Select Sku" @change="skuSlectCallback">
              <el-option v-for="item in shop_options" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <!--  product stock location-->
          <el-form-item label="location">
            <el-select v-model="value" filterable placeholder="Please Select Location" @change="storageSlectCallback">
              <el-option v-for="item in shop_options" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="Unit Price">
            <el-input v-model="input" placeholder="please input price"></el-input>
          </el-form-item>

          <el-form-item label="QTY">
            <el-input v-model="input" placeholder="please input quantity"></el-input>
          </el-form-item>
        </el-form>
        <!-- 
        <el-card shadow="never">
          <el-form-item>
            <div class="product-image">
              <img src="https://img.alicdn.com/bao/uploaded/i2/TB11d_KGXXXXXbTXXXXXXXXXXXX_!!0-item_pic.jpg" alt=""
                style="width: 80px; height: 80px" />
            </div>
          </el-form-item>
          <el-form-item>
            <div class="product-name">
              <span>澳洲Bellroy羊皮长款男士钱包Take Out男女钱包拉链包钱包男长款</span>
            </div>
          </el-form-item>
          <el-form-item>
            <div class="shop-link">
              <a href="https://detail.tmall.com/item.htm?id=40715768132&amp;skuId=61014621865" target="_blank">
                Tmall;</a>
            </div>
          </el-form-item>
          <el-form-item>
            <div class="localtion"><span>CaiNiao Bonded</span></div>
          </el-form-item>
          <el-form-item> </el-form-item>
          <el-form-item> </el-form-item>
          <el-form-item> </el-form-item>
        </el-card> -->
      </div>
    </el-card>
  </div>
</template>

<script>
import User from '@/api/user';

export default {
  data() {
    return {
      shop_options: [
        { label: 'shop1', value: 'shop1_db_id' },
        { label: 'shop2', value: 'shop2_db_id' },
        { label: 'shop3', value: 'shop3_db_id' },
        { label: 'shop4', value: 'shop4_db_id' },
      ],
      formState: [],
    };
  },
  computed: {},
  created() {
    this.login();
  },
  methods: {
    async login() {
      const res = await User.login(this.username, this.password);
      console.log(res);
    },
    shopSlectCallback() {
      // fetch sku data from remote
      console.log('shopSelect');
    },
    skuSlectCallback() {
      // fetch product online desc detail from remote
      console.log('shopSelect');
    },
    storageSlectCallback() {
      // fetch product stock from remote
      console.log('storageSelect');
    },
  },
};
</script>

<style lang="less">

</style>
