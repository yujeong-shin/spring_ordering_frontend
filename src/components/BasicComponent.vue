<template>
  <div>
    <h1>hello world {{ myLang }}</h1>
    <input type="text" value="myValue" />
    <!-- :value는 v-bind:value의 약어 -->
    <!-- v-bind는 input박스에서 많이 사용하는 단방향 데이터 바인딩 방식 -->
    <input type="text" :value="inputValue1" />
    <!-- v-model 양방향 데이터 바인딩 모델이라는 차이점 -->
    <input type="text" v-model="inputValue2" />
    <!-- onclick == @click -->
    <button @click="showValue">변수 변경사항 확인</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      myLang: "python",
      inputValue1: "python2",
      inputValue2: "python3",
    };
  },
  // vue 생명주기에서 인스턴스가 생성되는 시점을 created라고 하고, 화면이 열리기 전에 실행되는 함수 ⭐⭐⭐
  // 특정 시점에 vue가 hooking해감. created, mounted(), ... 시점에 따라 여러 함수가 있음
  created() {
    this.myLang = "java";
  },
  methods: {
    showValue() {
      alert(this.inputValue2);
    },
  },
};
</script>
