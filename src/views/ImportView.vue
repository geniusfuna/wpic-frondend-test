<script>
import SalesImportFormFieldsets from '@/components/SalesImportFormFieldsets.vue';

export default {
  components: {
    SalesImportFormFieldsets,
  },
  data() {
    return {
      salesImportModalVisibility: false,
    };
  },
  computed: {},
  created() {
    // do something here! like fetch remote data
  },
  methods: {
    addNewFieldset() {
      this.$store.commit('salesImport/addNew');
    },
    swicthImportModal() {
      this.salesImportModalVisibility = !this.salesImportModalVisibility;
    },
  },
};
</script>

<template>
  <div class="section">
    <p style="background-color: white; display: block; padding: 20px">
      salesImportModalVisibility: <span style="margin-left: 20px; color: red">{{ salesImportModalVisibility }}</span>
    </p>

    <div class="import-button" @click="swicthImportModal">
      <i class="el-icon-upload2"></i>
    </div>

    <div class="import">
      <el-dialog
        title="Import offline orders"
        :visible.sync="salesImportModalVisibility"
        :custom-class="'importModal'"
        :width="'80%'"
      >
        <el-card shadow="never">
          <div class="form">
            <!-- <el-form :inline="true"> -->
            <el-form label-position="top">
              <div v-for="item in $store.state.salesImport.data" :key="item.index" class="fieldsets">
                <SalesImportFormFieldsets :index="item.index" :data="item"></SalesImportFormFieldsets>
              </div>

              <div class="add-new">
                <el-tooltip class="item" effect="dark" content="Add another record" placement="top">
                  <i class="el-icon-circle-plus-outline" @click="addNewFieldset"></i>
                </el-tooltip>
              </div>
            </el-form>
          </div>
        </el-card>

        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">Cancel</el-button>
          <el-button type="primary" @click="dialogVisible = false">Submit</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>

<style lang="less">
.import-button {
  cursor: pointer;
  position: absolute;
  top: 900px;
  right: 90px;
  font-size: 16px;
  padding: 4px 18px;
  background-color: white;
  border: 1px solid #cfd7e0;
  border-radius: 4px;

  &:hover {
    background-color: #f3f9ea;
    border-color: #daeec1;
    color: #85c531;
  }

  i {
    color: #4f5b7e;
  }
}

.importModal {
  .el-dialog__header {
    // padding-bottom: 10px;
    // border: 1px solid #dbdbdb;
    text-align: center;
    background-color: #f4f6fe;
  }

  .fieldsets {
    border-top: 1px dashed #ccc;
    padding-top: 1.5rem;
    padding-bottom: 0.5rem;

    &:first-child {
      border-top: none;
    }
  }
}

.add-new {
  cursor: pointer;
  text-align: center;
}
</style>
