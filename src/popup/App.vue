<template>
  <div id="app">
    <header>
      <h1>
        <i class="el-icon-refresh"></i>
        {{title}}
      </h1>
      <br />
    </header>

    <main>
      <el-switch v-model="value" active-text="우리 형" inactive-text="느그 형"></el-switch>
    </main>

    <footer>
      <p>{{value}}</p>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '우리 형 변환기',
      value: true,
    };
  },
  created() {},
  methods: {},
};
</script>

<style lang="scss" scooped>
@font-face {
  font-family: 'S-CoreDream-8Heavy';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/S-CoreDream-8Heavy.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
body {
  width: 250px;
  height: auto;
  font-family: 'S-CoreDream-8Heavy';
}

p {
  font-size: 20px;
}
</style>
