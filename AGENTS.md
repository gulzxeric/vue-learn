# AGENTS.md

## 学员画像
- 有 HTML/CSS/JS/Node.js 基础
- **Vue 3 纯新手**，第一次接触框架
- 学习方式：项目驱动 + 官方文档查漏补缺
- 讲解方式：喜欢比喻+对比，不喜欢一次性塞太多概念
- 每天可投入 1-2 小时

## 当前进度

路线图位置：**第二阶段第 4 周**（参考 `学习计划.md`）

已学完 ✅：
- `ref` / `v-if` / `v-else` / `v-show` / `v-for` + `:key`
- `v-model` 双向绑定 / `@click` 事件 / `:style` `:class` 动态绑定
- `computed` 计算属性 / `watch` 侦听器
- 组件拆分、Props（父传子）、emit（子传父）
- 插槽 Slot（默认 + 后备内容 + 具名 Slot #header/#footer）
- 生命周期 `onMounted` / `onUnmounted`（Clock 时钟练习）
- Vue Router：安装配置、`<router-link>` / `<router-view>`、动态路由 `:id`、嵌套路由 `children`、导航守卫 `beforeEach`、Query 参数 `?q=`
- 练习项目：计数器、待办列表、星星评价、用户卡片、Card 容器组件、Clock 时钟组件、Search 搜索页

## 曾遇到的难点（新 agent 注意，这里容易卡住）
- **Props 为什么只读**：单向数据流的概念需要比喻辅助理解
- **`:key` 的作用**：纯文本列表看不出区别，需要带 input 的 demo 实验才能理解
- **emit 事件参数**：`@事件="函数"` Vue 自动传参 vs `@事件="(val) => 函数(val)"` 手动传参的区别
- **组件数据归属**：数据自己管就不用 props，多个组件共享才提给父组件
- **Slot vs Props 的区别**：Props 传数据，Slot 传模板
- **挂载（Mount）概念**：组件 DOM 插入页面的瞬间；`onMounted` 之后才能安全操作 DOM
- **`onUnmounted` 清理资源**：计时器等后台任务必须在卸载时清理，否则内存泄漏

## 下一阶段待学
- Pinia 状态管理
- 进阶方向（可先选修）：
  - 作用域插槽
  - `reactive` / `watchEffect`
  - `provide` / `inject`

## 已知的组件文件
| 文件 | 功能 |
|------|------|
| `src/components/StarRating.vue` | 星星评价，接收 `rating`/`max` props，emit `update-rating` |
| `src/components/TodoList.vue` | 待办列表，接收 `todos`/`doneCount` props，emit `toggle-todo` |
| `src/components/userCard.vue` | 用户卡片列表。（命名不规范，但功能正常） |
| `src/components/Card.vue` | 通用卡片容器，`title` prop + 默认 slot + 具名 slot（#header/#footer） |
| `src/components/clock.vue` | 实时时钟，用 `onMounted` 启动计时器、`onUnmounted` 清理计时器 |

## 项目命令
```sh
npm run dev      # 启动开发服务器
npm run build    # 生产构建
npm run preview  # 预览构建结果
```

## 项目约定
- Vue 3 `<script setup>`，纯 JS（无 TS）
- `@/` 别名指向 `src/`
- VSCode 需装 `Vue.volar` 插件
- Prettier tabWidth: 2
- `App00.vue` / `App01.vue` 是废弃快照，不用管
