# learn-vue2

## basic 

1. `{{}}` 插值绑定
2. `v-html` 用于输出html代码
3. `v-bind` 用于绑定属性的值
4. `v-bind:title` 绑定元素特性
5. `v-if="seen"` 条件
6. `v-for="todo in todos"` 循环
7. `v-on:click` 绑定事件
8. `v-model` 双向绑定
9. 缩写

```
<!-- 完整语法 -->
<a v-bind:href="url"></a>
<!-- 缩写 -->
<a :href="url"></a>
<!-- 完整语法 -->
<a v-on:click="doSomething"></a>
<!-- 缩写 -->
<a @click="doSomething"></a>
```

