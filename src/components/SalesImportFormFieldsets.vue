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
      product: null,
    };
  },
  computed: {
    fieldsetState: {
      get() {
        return this.$store.state.salesImport.data.find((el) => el.index === this.index);
      },
    },

    sku_placeholder: () => {
      return this.sku_select_loading ? 'loading ...' : 'Please Select Sku';
    },
  },
  created() {
    // axios fetch user target shops options from remote
    Shop.getShopOptions(10).then((res) => {
      this.shop_options = res.data;
    });
  },
  methods: {
    shopSelectCallback(val) {
      // fetch sku data from remote
      const commit_data = {
        index: this.index,
        value: { sid: val, sku: null },
      };
      this.$store.commit('salesImport/updateFieldset', commit_data);
      this.sku_select_loading = true;

      Shop.getSkuOptions(1).then((res) => {
        console.log(res);
        this.sku_select_loading = false;
        this.sku_options = res.data;
      });
    },
    skuSlectCallback(val) {
      this.warehouse_select_loading = true;

      const commit_data = {
        index: this.index,
        value: { sku: val, location: null },
      };

      this.$store.commit('salesImport/updateFieldset', commit_data);

      Shop.getProductData(1).then((res) => {
        console.log('pd', res);
        if (res.code === 0) {
          this.product = res.data[val];
        }
      });

      Shop.getWarehouseOptions(1).then((res) => {
        console.log(res);
        this.warehouse_select_loading = false;
        this.warehouse_options = res.data;
      });
    },
    storageSlectCallback(val) {
      const commit_data = {
        index: this.index,
        value: { location: val },
      };

      this.$store.commit('salesImport/updateFieldset', commit_data);

      // fetch product stock from remote and build the modal for check compare
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
      <el-form-item label="Shop" class="shop-item">
        <el-select
          :value="fieldsetState.sid"
          filterable
          placeholder="Please Select Shop"
          class="shop-select"
          @change="shopSelectCallback"
        >
          <el-option v-for="item in shop_options" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <!-- sku select -->
      <el-form-item label="SKU" class="sku-item">
        <el-select
          :value="fieldsetState.sku"
          filterable
          :placeholder="sku_select_loading ? 'loading ...' : 'Please Select Sku'"
          class="sku-select"
          @change="skuSlectCallback"
        >
          <el-option v-for="item in sku_options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
        </el-select>

        <div v-if="product" class="product-info">
          <div class="product-image">
            <img :src="product.img" :alt="product.name" />
          </div>
          <div class="product-name">
            <span>{{ product.name }}</span>
          </div>
        </div>
      </el-form-item>
      <!--  product stock location-->
      <el-form-item label="Warehouse" class="warehouse-item">
        <el-select
          :value="fieldsetState.location"
          filterable
          :placeholder="warehouse_select_loading ? 'loading ...' : 'Please Select Warehouse'"
          class="warehouse-select"
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

.el-form-item {
  margin-right: 1rem;
  flex-grow: 1;
}

.shop-item {
  .shop-select {
    width: 100%;
  }
}

.sku-item {
  flex-basis: 30%;

  .sku-select {
    width: 100%;
  }
}

.product-info {
  margin-top: 1rem;
  margin-bottom: 1rem;
  display: flex;
  height: 60px;

  .product-image {
    flex: 0 0 auto;
    width: 60px;
    height: 60px;
    border: 1px solid #eee;
    border-radius: 4px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .product-name {
    padding-left: 1rem;
    padding-right: 1rem;
    height: 60px;
    line-height: 2;
    span {
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }
}

.warehouse-item {
  .warehouse-select {
    width: 100%;
  }
}

.summary {
  display: block;
  clear: both;
  text-align: right;
  margin-right: 3rem;
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
