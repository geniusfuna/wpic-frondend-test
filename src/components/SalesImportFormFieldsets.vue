<script>
import Shop from '@/api/shop';

export default {
  name: 'SalesImportFormFieldsets',
  props: {
    index: Number,
  },
  data() {
    return {
      shop_options: [],
      sku_options: [
        { label: 'sku1', value: 'sku1_db_id' },
        { label: 'sku2', value: 'sku2_db_id' },
        { label: 'sku3', value: 'sku3_db_id' },
        { label: 'sku4', value: 'sku4_db_id' },
      ],
    };
  },
  computed: {
    fieldsetState: {
      get() {
        return this.$store.state.salesImport.data[this.index];
      },
    },
  },
  created() {
    // axios fetch user target shops options from remote

    Shop.getShopOptions(10).then((res) => {
      console.log(res);
      this.shop_options = res.data;
    });
  },
  methods: {
    shopSlectCallback() {
      // fetch sku data from remote
      console.log('shopSelect');
    },
    pullShopOptions() {
      console.log('blue call');
    },
    skuSlectCallback() {
      // fetch product online desc detail from remote
      console.log('shopSelect');
    },
    storageSlectCallback() {
      // fetch product stock from remote
      console.log('storageSelect');
    },
    removeCurrentFiledSet(index) {
      if (this.$store.state.salesImport.data.length === 1) {
        this.$message({
          message:
            "Sorry, your can't move the last import item. Please consider to close this form to cancel the import work.",
          type: 'warning',
        });
        return;
      }
      console.log('removeCurrentFiledSet', index);
      this.$store.commit('salesImport/removeCurrent', index);
    },
    // @attention commit() 方法调用，如果是模块化方式，这需要携带模块化名称，形如 "模块名/state_name"
    // @attention commit() 方法中只可以传递一个参数，如果有多个参数，需要传递对象或数据，然后在 mutations 方法中做解包处理
    // @attention data 参数使用回调方式传递，其中需要构造为 { field_name: field_value} 的形式
    fieldUpdate(data) {
      this.$store.commit('salesImport/updateFieldset', { index: this.$props.index, value: data });
    },
  },
};
</script>

<template>
  <div class="fieldset-inner">
    <div class="fieldsets-item">
      <!-- <p>{{ fieldsetState.index }}</p> -->

      <el-form-item label="Shop">
        <el-select
          v-model="fieldsetState.sid"
          filterable
          :remote-method="remoteMethod"
          placeholder="Please Select Shop"
          @change="shopSlectCallback"
        >
          <el-option v-for="item in shop_options" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <!-- sku select -->
      <el-form-item label="SKU">
        <el-select v-model="fieldsetState.sku" filterable placeholder="Please Select Sku" @change="skuSlectCallback">
          <el-option v-for="item in sku_options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
        </el-select>
      </el-form-item>
      <!--  product stock location-->
      <el-form-item label="Warehouse">
        <el-select
          :value="fieldsetState.location"
          filterable
          placeholder="Please Select Location"
          @change="(value) => fieldUpdate({ location: value })"
        >
          <el-option v-for="item in sku_options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="Unit Price">
        <el-input
          :value="fieldsetState.unit_price"
          placeholder="please input price"
          @input="(value) => fieldUpdate({ unit_price: value })"
        ></el-input>
      </el-form-item>

      <el-form-item label="QTY">
        <el-input
          :value="fieldsetState.qty"
          placeholder="please input quantity"
          @input="(value) => fieldUpdate({ qty: value })"
        ></el-input>
      </el-form-item>

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
        </el-card> -->
      <span class="remove-button">
        <i class="el-icon-remove-outline" @click="removeCurrentFiledSet(index)"></i>
      </span>
    </div>

    <div v-if="fieldsetState.unit_price && fieldsetState.qty" class="summary">
      Sub Total Amount - ¥ {{ fieldsetState.unit_price * fieldsetState.qty }}
    </div>
  </div>
</template>

<style lang="less">
.fieldsets-item {
  width: 100%;
  display: flex;
}

.summary {
  display: block;
  clear: both;
}

.el-form-item {
  margin-right: 1rem;
}

.remove-button {
  font-size: 16px;
  padding: 2px;
  cursor: pointer;
}
</style>
