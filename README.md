# learn-vue2

## vue-cli 安装

```
npm install -g @vue/cli
```

## 创建项目

```
vue init webpack project-name
```

## basic

1.  `{{}}` 插值绑定
2.  `v-bind:title` 绑定元素特性
3.  `v-if="seen"` 条件
4.  `v-for="todo in todos"` 循环
5.  `v-on:click` 绑定事件 @click
6.  `v-model` 双向绑定

## 模版

```
<div id="app">
<!-- 文本插值 -->
<p>{{ name }}</p>
<!-- 表达式 -->
{{ ok ? 'YES' : 'NO' }}
<!-- v-html 用于输出html代码 -->
<div v-html="message"></div>
<!-- 指令-->
<!-- 指令是带有v-前缀的特殊属性-->
<!-- v-bind指令用于属性绑定 -->
<div v-bind:class="{'class1': class1}"> directiva v-bind:class </div>
<!-- v-on指令用于监听DOM事件 -->
<button v-on:click="reverseMessage">反转字符串</button>
<button v-on:click="say('what')">Say what</button>
<!-- 修饰符 -->
<form v-on:submit.prevent="onSubmit"></form>
<!-- 双向绑定 v-model -->
<input v-model="message">
<!-- 过滤器也叫管道，常用做文本格式化 -->
{{ message | capitalize }}
<!-- 缩写 -->
<!-- 完整语法 -->
<a v-bind:href="url"></a>
<!-- 缩写 -->
<a :href="url"></a>
</div>
<!-- 完整语法 -->
<a v-on:click="doSomething"></a>
<!-- 缩写 -->
<a @click="doSomething"></a>
</div>
<script>
new Vue({
    el: '#app',
    data: {
        ok: true,
        name: 'hello',
        message: '<h1>菜鸟教程</h1>' ,
        class1: false,
        seen: true
    } ,
    methods: {
         reverseMessage: function () {
             this.message = this.message.split('').reverse().join('')
         }
         say: function (message) {
             alert(message)
         }
    },
    filters: {
        capitalize: function (value) {
            if (!value) return ''
            value = value.toString()
            return value.charAt(0).toUpperCase() + value.slice(1)
        }
    }
})
</script>
```

## 条件语句 v-if

```
<div id="app">
<!-- 条件判断使用v-if指令-->
<p v-if="seen">现在你看到我了</p>
<template v-if="ok">
 <h1>菜鸟教程</h1>
 <p>学的不仅是技术，更是梦想！</p>
 <p>哈哈哈，打字辛苦啊！！！</p>
</template>

<div v-if="type === 'A'">
 A
</div>
<div v-else-if="type === 'B'">
 B
 </div>
 <div v-else-if="type === 'C'">
 C
</div>
 <div v-else>
 Not A/B/C
 </div>
<!-- v-show指令根据条件展示元素-->
<h1 v-show="ok">Hello!</h1>
</div>
<script>
new Vue({
    el: '#app',
    data: {
        seen: true,
        ok: true,
        type: 'C'
    }
})
</script>
```

## 循环语句 v-for

```
<div id="app">

<!-- v-for指令-->

<ol>
<li v-for="site in sites">
 {{ site.name }}
</li>
</ol>

<!-- 模版中使用v-for指令-->

<ul>
<template v-for="site in sites">
<li>{{ site.name }}</li>
 <li>--------------</li>
 </template>
</ul

<!-- v-for指令迭代对象-->

<ul>
<li v-for="value in object">
 {{ value }}
</li>
</ul>

<!-- v-for指令迭代对象,第二个参数为键名-->

<ul>
<li v-for="(value, key) in object">
 {{ key }} : {{ value }}
</li>
</ul>

<!-- v-for指令迭代对象,第二个参数为键名， 第三个参数为索引-->

<ul>
 <li v-for="(value, key, index) in object">
 {{ index }}. {{ key }} : {{ value }}
</li>
</ul>

</div>
<script>
new Vue({
    el: '#app',
    data: {
       sites: [
            { name: 'Runoob' },
            { name: 'Google' },
            { name: 'Taobao' }
       ],
       object: {
             name: '菜鸟教程',
             url: 'http://www.runoob.com',
             slogan: '学的不仅是技术，更是梦想！'
       }
    }
})
</script>
```

## 计算属性 computed

```
<div id="app">
<p>原始字符串: {{ message }}</p>
 <p>计算后反转字符串: {{ reversedMessage }}</p>
</div>
<script>
new Vue({
    el: '#app',
    data: {
        message: 'Runoob!'
    },
    computed: {
        // 计算属性的 getter
        reversedMessage: function () {
          // `this` 指向 vm 实例
          return this.message.split('').reverse().join('')
        }
    },
})
</script>
```

## 监听属性 watch

```
<div id = "computed_props">
千米 : <input type = "text" v-model = "kilometers">
 米 : <input type = "text" v-model = "meters">
</div>
<script>
new Vue({
    el: '#app',
    data: {
       kilometers : 0,
       meters:0
    },
    watch : {
        kilometers:function(val) {
            this.kilometers = val;
            this.meters = val * 1000;
        },
        meters : function (val) {
            this.kilometers = val/ 1000;
            this.meters = val;
        }
     }
})
</script>
```

## Vue 全局组件

```
Vue.component('my-component', {
    template: '<div>this is my demo</div>'
})

// 组件间通信 props ->数组
Vue.component('child', {
    props: ['message'],
    template: '<span>{{ message }}</span>'
})

// 组件间通信 props ->对象
Vue.component('child', {
    props: {
        age: {
            type: Number,
            default: 24
        }
    },
    template: '<span>{{ age }}</span>'
})

// 父组件 向 子组件 传递数据
<child message="hello!"></child>
//传递参数
<child v-bind:my-message="message"></child>
//传递对象
<child v-bind="userInfo"></child>

//不能直接对 父组件向子组件传递的数据进行处理， 需要在子组件的 data 中定义一个变量，然后将传递的值赋给你定义的变量
Vue.component('child', {
    props: ['date'],
    data: function () {
        return {
            nowDate: this.date
        }
    }
    template: '<span>{{ message }}</span>'
})

// 子组件如何与父组件进行通讯

Vue.component('button-counter', {
    template: '<button v-on:click="incrementCounter">{{ counter }}</button>',
    data: function () {
         return { counter: 0 }
    },
    methods: {
        incrementCounter: function () {
            this.counter += 1
             this.$emit('increment')
         }
    },
})

<div id="counter-event-example">
<p>{{ total }}</p>
<button-counter v-on:increment="incrementTotal"></button-counter>
<button-counter v-on:increment="incrementTotal"></button-counter>
</div>

new Vue({
    el: '#counter-event-example',
    data: { total: 0 },
    methods: {
        incrementTotal: function () {
        this.total += 1
        console.log('第'+this.total+'次点击') }
    }
})
```

# vue 路由

## 安装

```
npm install vue-router
```

## 基本导航

### 声明式

```
<router-link :to="..."> // 相当于 router.push(...)
```

### 编程式

router.push(...)

```
// 字符串
router.push('home')

// 对象
router.push({ path: 'home' })

// 命名的路由
router.push({ name: 'user', params: { userId: 123 }})

// 带查询参数，变成 /register?plan=private
router.push({ path: 'register', query: { plan: 'private' }})
```

注意： 如果提供了 path，params 会被忽略,上述例子中的 query 并不属于这种情况。取而代之的是下面例子的做法，你需要提供路由的 name 或手写完整的带有参数的 path：

```
const userId = 123
router.push({ name: 'user', params: { userId }}) // -> /user/123
router.push({ path: `/user/${userId}` }) // -> /user/123
// 这里的 params 不生效
router.push({ path: '/user', params: { userId }}) // -> /user
```

## 动态路由

```
const User = {
  template: '<div>User {{ $route.params.id }}</div>'
}

const router = new VueRouter({
  routes: [
    // 动态路径参数 以冒号开头
    { path: '/user/:id', component: User }
  ]
})
```

## 嵌套路由

```
const User = {
  template: `
    <div class="user">
      <h2>User {{ $route.params.id }}</h2>
      <router-view></router-view>
    </div>
  `
}

const router = new VueRouter({
  routes: [
    { path: '/user/:id', component: User,
      children: [
        // 当 /user/:id 匹配成功，
        // UserHome 会被渲染在 User 的 <router-view> 中
        { path: '', component: UserHome },
        {
          // 当 /user/:id/profile 匹配成功，
          // UserProfile 会被渲染在 User 的 <router-view> 中
          path: 'profile',
          component: UserProfile
        },
        {
          // 当 /user/:id/posts 匹配成功
          // UserPosts 会被渲染在 User 的 <router-view> 中
          path: 'posts',
          component: UserPosts
        }
      ]
    }
  ]
})
```

## 命名路由

有时候，通过一个名称来标识一个路由显得更方便一些，特别是在链接一个路由，或者是执行一些跳转的时候。你可以在创建 Router 实例的时候，在 routes 配置中给某个路由设置名称。

```
const router = new VueRouter({
  routes: [
    {
      path: '/user/:userId',
      name: 'user',
      component: User
    }
  ]
})
```

要链接到一个命名路由，可以给 router-link 的 to 属性传一个对象：

```
<router-link :to="{ name: 'user', params: { userId: 123 }}">User</router-link>
```

## 命名视图

有时候需要同级展示多个视图，不是嵌套展示，例如创建一个布局， 有 sibebar 和 main。

如果 `router-view` 没有设置名字，那么默认为 `default`。

```
<router-view class="view one"></router-view>
<router-view class="view two" name="a"></router-view>
<router-view class="view three" name="b"></router-view>
```

一个视图使用一个组件渲染，因此对于同个路由，多个视图就需要多个组件。

```
const router = new VueRouter({
  routes: [
    {
      path: '/',
      components: {
        default: Foo,
        a: Bar,
        b: Baz
      }
    }
  ]
})
```

## 重定向

当用户访问 /a 时，URL 将会被替换成 /b，然后匹配路由为 /b

```
const router = new VueRouter({
  routes: [
    {
      path: '/a',
      redirect: '/b'
    }
  ]
})
```

## 别名

/a 的别名是 /b，意味着，当用户访问 /b 时，URL 会保持为 /b，但是路由匹配则为 /a，就像用户访问 /a 一样。

```
const router = new VueRouter({
  routes: [
    { path: '/a', component: A, alias: '/b' }
  ]
})
```

## 路由组件传参数

在组件中使用 $route 会使之与其对应路由形成高度耦合，从而使组件只能在某些特定的 URL 上使用，限制了其灵活性。
使用 props 将组件和路由解耦：

```
const User = {
  props: ['id'],
  template: '<div>User {{ id }}</div>'
}
const router = new VueRouter({
  routes: [
    { path: '/user/:id', component: User, props: true },

    // 对于包含命名视图的路由，你必须分别为每个命名视图添加 `props` 选项：
    {
      path: '/user/:id',
      components: { default: User, sidebar: Sidebar },
      props: { default: true, sidebar: false }
    }
  ]
})
```

## HTML5 Histoyr 模式

`vue-router`默认 hash 模式，使用 URL 的 hash 来模拟一个完整的 URL，于是当 URL 改变时，页面不会重新加载。
如果不想要很丑的 hash，我们可以用路由的 history 模式，这种模式充分利用 history.pushState API 来完成 URL 跳转而无须重新加载页面。

```
const router = new VueRouter({
  mode: 'history',
  routes: [...]
})
```

## 路由懒加载

当打包构建应用时，Javascript 包会变得非常大，影响页面加载。如果我们能把不同路由对应的组件分割成不同的代码块，然后当路由被访问的时候才加载对应组件，这样就更加高效了。

# vuex

## 安装

```
npm install vuex --save
```

## 使用

```
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  },
  actions: {
    increment (context) {
      context.commit('increment')
    }
  }
})

new Vue({
  router,
  store
}).$mount('#app')
```

通过 `store.state` 来获取对象，通过 `store.commit` 方法触发状态变更

```
console.log(store.state.count) // -> 1
store.commit('increment') // 同步触发状态变更
store.dispatch('increment') // 异步触发状态变更
```

## State

如何在 Vue 组件中展示状态呢？

```
// 创建一个 Counter 组件
const Counter = {
  template: `<div>{{ count }}</div>`,
  computed: {
    count () {
      return this.$store.state.count
    }
  }
}
```

### 辅助函数 mapState

当一个组件需要获取多个状态时候，将这些状态都声明为计算属性会有些重复和冗余。为了解决这个问题，我们可以使用 mapState 辅助函数帮助我们生成计算属性，让你少按几次键：

```
import { mapState } from 'vuex'

// 方法一
// 当映射的计算属性的名称与 state 的子节点名称相同时，我们也可以给 mapState 传一个字符串数组
export default {
  computed: mapState([
    // 映射 this.count 为 store.state.count
    'count'
  ])
}

// 方法二

export default {
  computed: (
    localComputed () { /* ... */ },
    // 使用对象展开运算符将此对象混入到外部对象中
    ...mapState({
      // ...
    })
  )
}
```

## Mutation

更改 Vuex 的 store 中的状态的唯一方法是提交 mutation。

Mutation 必须是同步函数

```
mutations: {
  increment (state) {
    // 变更状态
    state.count++
  }
}
store.commit('increment')
```

Payload

```
mutations: {
  increment (state, n) {
    // 变更状态
    state.count += n
  }
}
store.commit('increment', 10)

mutations: {
  increment (state, payload) {
    state.count += payload.amount
  }
}

store.commit('increment', {
  amount: 10
})
```

### 在组件中提交 Mutation

在组件中使用 `this.$store.commit('xxx')` 提交 `mutation`，或者使用 `mapMutations` 辅助函数将组件中的 methods 映射为 `store.commit` 调用

```
import { mapMutations } from 'vuex'

export default {
  // ...
  methods: {
    ...mapMutations([
      'increment', // 将 `this.increment()` 映射为 `this.$store.commit('increment')`

      // `mapMutations` 也支持载荷：
      'incrementBy' // 将 `this.incrementBy(amount)` 映射为 `this.$store.commit('incrementBy', amount)`
    ]),
    ...mapMutations({
      add: 'increment' // 将 `this.add()` 映射为 `this.$store.commit('increment')`
    })
  }
}s
```

## Action

Action 类似于 mutation，不同在于：

- Action 提交的是 mutation，而不是直接变更状态。
- Action 可以包含任意异步操作。

```
actions: {
  incrementAsync ({ commit, state }, payload) {
    setTimeout(() => {
      commit('increment')
    }, 1000)
  }
}
```

### 在组件中分发 Action

在组件中使用 this.$store.dispatch('xxx') 分发 action，或者使用 mapActions 辅助函数将组件的 methods 映射为 store.dispatch 调用（需要先在根节点注入 store:

```
import { mapActions } from 'vuex'

export default {
  // ...
  methods: {
    ...mapActions([
      'increment', // 将 `this.increment()` 映射为 `this.$store.dispatch('increment')`

      // `mapActions` 也支持载荷：
      'incrementBy' // 将 `this.incrementBy(amount)` 映射为 `this.$store.dispatch('incrementBy', amount)`
    ]),
    ...mapActions({
      add: 'increment' // 将 `this.add()` 映射为 `this.$store.dispatch('increment')`
    })
  }
}
```
