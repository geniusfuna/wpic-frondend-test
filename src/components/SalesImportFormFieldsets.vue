<script>
export default {
  name: 'SalesImportFormFieldsets',
  props: {
    index: Number,
  },
  data() {
    return {
      shop_options: [
        { label: 'shop1', value: 'shop1_db_id' },
        { label: 'shop2', value: 'shop2_db_id' },
        { label: 'shop3', value: 'shop3_db_id' },
        { label: 'shop4', value: 'shop4_db_id' },
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
    // do something at init!
  },
  methods: {
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
    removeCurrentFiledSet() {
      console.log('remove self');
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
  <div class="fieldsets">
    <p>{{ fieldsetState.index }}</p>

    <el-form-item label="Shop">
      <el-select v-model="fieldsetState.sid" filterable placeholder="Please Select Shop" @change="shopSlectCallback">
        <el-option v-for="item in shop_options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
      </el-select>
    </el-form-item>
    <!-- sku select -->
    <el-form-item label="SKU">
      <el-select v-model="fieldsetState.sku" filterable placeholder="Please Select Sku" @change="skuSlectCallback">
        <el-option v-for="item in shop_options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
      </el-select>
    </el-form-item>
    <!--  product stock location-->
    <el-form-item label="location">
      <el-select
        :value="fieldsetState.location"
        filterable
        placeholder="Please Select Location"
        @change="(value) => fieldUpdate({ location: value })"
      >
        <el-option v-for="item in shop_options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
      </el-select>
    </el-form-item>

    <!--  product stock location-->
    <!-- <el-form-item label="location">
      <el-select
        v-model="fieldsetState.location"
        filterable
        placeholder="Please Select Location"
        @change="storageSlectCallback"
      >
        <el-option v-for="item in shop_options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
      </el-select>
    </el-form-item> -->

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
    <i class="el-icon-remove-outline"></i>
  </div>
</template>

<style lang="less"></style>
