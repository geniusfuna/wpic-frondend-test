<template>
  <div class="about">
    <h1>This is an about page</h1>

    <div class="form">
      <el-form>
        <el-card>
          <!-- shop select -->
          <el-form-item></el-form-item>
          <!-- sku select -->
          <el-form-item> </el-form-item>
          <!--  product fieldset-->
          <el-card>
            <el-form-item> </el-form-item>
            <el-form-item> </el-form-item>
            <el-form-item> </el-form-item>
            <el-form-item> </el-form-item>
            <el-form-item> </el-form-item>
            <el-form-item> </el-form-item>
            <el-form-item> </el-form-item>
          </el-card>
        </el-card>
      </el-form>
    </div>
  </div>
</template>

<script>
import User from '@/api/user';

export default {
  data() {
    return {
      form: [],
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
  },
};
</script>

<style lang="less">
@media (min-width: 1024px) {
  .about {
    display: flex;
    align-items: center;
    min-height: 100vh;

    h1 {
      color: red;
    }
  }
}
</style>
