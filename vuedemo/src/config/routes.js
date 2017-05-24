/**
 * Created by panchong on 17/5/18.
 */
// 引用模板
import index from '../page/index.vue'
import content from '../page/content.vue'
// 配置路由
export default [
  {
    path: '/',
    component: index
  },
  {
    path: '/content',
    component: content
  }
]
