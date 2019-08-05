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
      <el-switch @change="changeSwitch()" v-model="value" active-text="우리 형" inactive-text="느그 형"></el-switch>
    </main>

    <footer>
      <p v-if="value">활성화</p>
      <p v-else>비활성화</p>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '우리 형 변환기',
      value: false,
    };
  },
  created() {
    chrome.storage.sync.get(null, result => {
      this.value = result.value;
    });
  },
  methods: {
    saveStorage: function() {
      chrome.storage.sync.set({
        value: this.value,
      });
    },
    changeSwitch: function() {
      this.saveStorage();
      if (this.value) {
        chrome.tabs.executeScript(
          {
            code: 'document.body.innerHTML = document.body.innerHTML.replace(/호/g, "메");',
          },
          result => {}
        );
      } else {
        chrome.tabs.executeScript(
          {
            code: '',
          },
          result => {}
        );
      }
    },
  },
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
