# AGENTS.md

## 学员画像
- 有 HTML/CSS/JS/Node.js 基础
- **Vue 3 纯新手**，第一次接触框架
- 学习方式：项目驱动 + 官方文档查漏补缺
- 讲解方式：喜欢比喻+对比，不喜欢一次性塞太多概念
- 每天可投入 1-2 小时

## 当前进度

路线图位置：**第三阶段第 7 周**（参考 `学习计划.md`）

已学完 ✅：
- `ref` / `v-if` / `v-else` / `v-show` / `v-for` + `:key`
- `v-model` 双向绑定 / `@click` 事件 / `:style` `:class` 动态绑定
- `computed` 计算属性 / `watch` 侦听器
- 组件拆分、Props（父传子）、emit（子传父）
- 插槽 Slot（默认 + 后备内容 + 具名 Slot #header/#footer）
- 生命周期 `onMounted` / `onUnmounted`（Clock 时钟练习）
- Vue Router：安装配置、`<router-link>` / `<router-view>`、动态路由 `:id`、嵌套路由 `children`、导航守卫 `beforeEach`、Query 参数 `?q=`
- Pinia：Store 定义、Actions（同步/异步）、Getter
- axios 封装 + 环境变量 `.env` + `import.meta.env`
- Composition API：`ref` vs `reactive`、`watch`、`watchEffect`、`provide`/`inject`（概念）
- 练习项目：计数器、待办列表、星星评价、用户卡片、Card 容器组件、Clock 时钟组件、Search 搜索页、Pinia 计数器、用户列表、博客（列表+详情+评论）、WatchDemo

## 曾遇到的难点（新 agent 注意，这里容易卡住）
- **Props 为什么只读**：单向数据流的概念需要比喻辅助理解
- **`:key` 的作用**：纯文本列表看不出区别，需要带 input 的 demo 实验才能理解
- **emit 事件参数**：`@事件="函数"` Vue 自动传参 vs `@事件="(val) => 函数(val)"` 手动传参的区别
- **组件数据归属**：数据自己管就不用 props，多个组件共享才提给父组件
- **Slot vs Props 的区别**：Props 传数据，Slot 传模板
- **挂载（Mount）概念**：组件 DOM 插入页面的瞬间；`onMounted` 之后才能安全操作 DOM
- **`onUnmounted` 清理资源**：计时器等后台任务必须在卸载时清理，否则内存泄漏
- **Reactive vs Responsive**："响应式"在 Vue 里是数据变→页面自动更新，和手机适配不是一回事
- **`ref` vs `reactive`**：功能一样，`ref` 更通用。`ref` 在 `<script>` 里要 `.value`，`reactive` 不用
- **路由组件复用不刷新**：同一组件跳转（如 `/user/1` → `/user/2`）不会重新挂载，需用 `computed` 追踪 `route.params`
- **`watch` vs `watchEffect`**：`watch` 手动指定监听谁（有新旧值）；`watchEffect` 自动追踪依赖（立即执行，无新旧值）
- **Props vs provide/inject vs Pinia**：Props 父子传参（清晰接口），provide/inject 祖孙传递（局部配置），Pinia 全局共享（大面积影响）
- **`provide` / `inject` 滥用问题**：比 Props 更方便但让依赖变隐式、组件难复用、难追踪。适合主题/语言等局部配置，不适合主要数据流

## 下一阶段待学
- 作用域插槽（实操）
- `provide` / `inject` 练习巩固（主题色切换、权限标记等）
- 自定义 Composables
- TypeScript 入门

## 已知的组件文件
| 文件 | 功能 |
|------|------|
| `src/components/StarRating.vue` | 星星评价，接收 `rating`/`max` props，emit `update-rating` |
| `src/components/TodoList.vue` | 待办列表，接收 `todos`/`doneCount` props，emit `toggle-todo` |
| `src/components/userCard.vue` | 用户卡片列表。（命名不规范，但功能正常） |
| `src/components/Card.vue` | 通用卡片容器，`title` prop + 默认 slot + 具名 slot（#header/#footer） |
| `src/components/clock.vue` | 实时时钟，用 `onMounted` 启动计时器、`onUnmounted` 清理计时器 |
| `src/components/CountDisplay.vue` | 显示 Pinia Store 的 count 值 |
| `src/components/CountControls.vue` | ±1 按钮，调用 Pinia Action |

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
