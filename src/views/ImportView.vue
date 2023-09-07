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
      <el-card shadow="never">
        <div class="form">
          <el-form :inline="true">
            <div v-for="item in $store.state.salesImport.data" :key="item.index">
              <SalesImportFormFieldsets :index="item.index" :data="item"></SalesImportFormFieldsets>
            </div>

            <div class="add-new">
              <i class="el-icon-circle-plus-outline" @click="addNewFieldset"></i>
            </div>
          </el-form>
        </div>
      </el-card>
    </div>
  </div>
</template>

<style lang="less">
.import-button {
  cursor: pointer;
  position: absolute;
  top: 370px;
  right: 90px;
  font-size: 18px;
  padding: 2px 8px;
  background-color: white;
  border: 1px solid #cfd7e0;
  border-radius: 50%;

  &:hover {
    background-color: #f3f9ea;
    border-color: #daeec1;
    color: #85c531;
  }
}
</style>
