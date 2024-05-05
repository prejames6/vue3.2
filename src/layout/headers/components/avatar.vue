<template>
  <el-dropdown>
    <span class="el-dropdown-link">
      <el-avatar shape="square" :size="40" :src="squareUrl" />
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="logout">退出</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const squareUrl = ref(
  'https://img1.baidu.com/it/u=2910066181,3478000399&fm=253&app=53&size=f60,60&n=0&g=0n&f=jpeg&fmt=auto?sec=1717393867&t=70971efa8ac5c3d471f6b58fb2e38d92'
)

const logout = () => {
  store.dispatch('ap/logout')
}
</script>

<style lang="scss" scoped>
::v-deep .el-dropdown-menu__item {
  white-space: nowrap;
}
</style>
