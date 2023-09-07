<script>
import SalesImportFormFieldsets from '@/components/SalesImportFormFieldsets.vue';

export default {
  components: {
    SalesImportFormFieldsets,
  },
  computed: {},
  created() {
    // do something here! like fetch remote data
  },
  methods: {
    addNewFieldset() {
      this.$store.commit('salesImport/addNew');
    },
  },
};
</script>

<template>
  <div class="import">
    <el-card shadow="never">
      <div class="form">
        <el-form :inline="true">
          <div v-for="item in $store.state.salesImport.data" :key="item.index">
            <SalesImportFormFieldsets :index="item.index" :data="item"></SalesImportFormFieldsets>
          </div>

          <div class="add-new"><i class="el-icon-circle-plus-outline" @click="addNewFieldset"></i></div>
        </el-form>
      </div>
    </el-card>
  </div>
</template>

<style lang="less"></style>
