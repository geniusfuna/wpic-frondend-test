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
      sku_options: [],
      sku_select_loading: false,
      warehouse_options: [],
      warehouse_select_loading: false,
    };
  },
  computed: {
    fieldsetState: {
      get() {
        return this.$store.state.salesImport.data[this.index];
      },
    },

    sku_placeholder: () => {
      return this.sku_select_loading ? 'loading ...' : 'Please Select Sku';
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

      this.sku_select_loading = true;

      Shop.getSkuOptions(1).then((res) => {
        console.log(res);
        this.sku_select_loading = false;
        this.sku_options = res.data;
      });
    },
    skuSlectCallback() {
      this.warehouse_select_loading = true;

      Shop.getWarehouseOptions(1).then((res) => {
        console.log(res);
        this.warehouse_select_loading = false;
        this.warehouse_options = res.data;
      });
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

    fieldUpdate(data) {
      this.$store.commit('salesImport/updateFieldset', { index: this.$props.index, value: data });
    },
  },
};
</script>

<template>
  <div class="fieldset-inner">
    <div class="fieldsets-item">
      <el-form-item label="Shop">
        <el-select v-model="fieldsetState.sid" filterable placeholder="Please Select Shop" @change="shopSlectCallback">
          <el-option v-for="item in shop_options" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <!-- sku select -->
      <el-form-item label="SKU">
        <!-- <el-select v-model="fieldsetState.sku" filterable placeholder="sku_placeholder" @change="skuSlectCallback"> -->
        <el-select
          v-model="fieldsetState.sku"
          filterable
          :placeholder="sku_select_loading ? 'loading ...' : 'Please Select Sku'"
          @change="skuSlectCallback"
        >
          <el-option v-for="item in sku_options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
        </el-select>
      </el-form-item>
      <!--  product stock location-->
      <el-form-item label="Warehouse">
        <el-select
          :value="fieldsetState.location"
          filterable
          :placeholder="warehouse_select_loading ? 'loading ...' : 'Please Select Warehouse'"
          @change="(value) => fieldUpdate({ location: value })"
        >
          <el-option v-for="item in warehouse_options" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
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

      <el-form-item class="op-item" label="OP">
        <el-tooltip class="item" effect="dark" content="Remove this record" placement="top">
          <i class="el-icon-remove-outline remove-button" @click="removeCurrentFiledSet(index)"></i>
        </el-tooltip>
      </el-form-item>
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
  text-align: right;
  margin-right: 3rem;
}

.el-form-item {
  margin-right: 1rem;
  flex-grow: 1;
}

.remove-button {
  font-size: 16px;
  padding: 2px;
  cursor: pointer;
}

.op-item {
  text-align: center;
}
</style>
