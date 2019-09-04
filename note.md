# Redux

1. store 是唯一的
2. 只有 store 能够改变自己的内容
3. Reducer 必须是纯函数（纯函数指的是，给定固定的输入，就一定会有固定的输出，而且不会有任何副作用）
4. 如果 Reducer 返回出了一个 new Date()的时间，那么这个函数就不是纯函数，因为你的返回值受到时间的影响，时间是不固定的，那么你的返回就不固定，这样就不是一个纯函数
5. 副作用指的是：对给定的参数进行直接的修改，不要对 store 中的数据做直接的修改，违背了状态管理的原则，如果都可以直接修改了，那么 reducer 就没有存在的意义了。正确做法应该是拷贝一份副本进行修改后返回出去

## Redux 核心 API

- createStore 创建一个 store，传入 reducer，将要管理的数据统一起来
- store.dispatch 派发 action,简单讲就是调用 reducer 中定义好的方法对 state 中的数据进行修改
- store.getState 获取 store 中的所有 state
- store.subscribe 订阅 store 中的改变，只要 store 发生改变，那么 store.subscribe 中传入的回调函数就会被执行
