<template>
  <div>
    <div>
      <span>count 点击次数: </span>
      <span>{{ count }}</span>
      <button @click="addCount">点击增加</button>
    </div>
    <div>
      <span>num 点击次数: </span>
      <span>{{ num }}</span>
      <button @click="addNum">点击增加</button>
    </div>
  </div>
</template> 
<script>
import { reactive, ref, toRefs } from "vue";
export default {
  name: "Test",
  setup() {
    const state = reactive({
      count: 0,
    });
    const num = ref(0);

    const addCount = function () {
      state.count++;
    };
    const addNum = function () {
      num.value++;
    };
    return {
      // 这样展开后state property会失去响应式，因为是取值返回，不是引用
      // ...state,
      ...toRefs(state),
      num,
      addCount,
      addNum,
    };
  },
};
</script>
<style scoped></style>
