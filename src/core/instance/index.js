import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'
// new vue()
function Vue (options) {
  // !(this instanceof Vue) 只能通过new创建实例使用
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  // 构造函数仅执行了_init
  this._init(options)
}
// 实现vue的实例方法和属性

initMixin(Vue) // 定义Vue原型上的init方法 Vue.prototype._init，实现一系列初始化过程
stateMixin(Vue) // 状态相关api $data,$props,$set,$delete,$watch
eventsMixin(Vue) // 事件相关api $on,$once,$off,$emit
lifecycleMixin(Vue) // 生命周期api _update,$forceUpdate,$destroy
renderMixin(Vue) // 渲染api _render,$nextTick

export default Vue
