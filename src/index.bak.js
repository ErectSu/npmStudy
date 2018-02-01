/**
 * Created by ty on 18/1/31.
 */
"use strict";
import 'babel-polyfill'

/* 引入Vue相关 */
import Vue from 'vue'

import App from './app.vue';

/* 加载vue状态管理器 */
import store from './vuex'

new Vue({
    el: '#app',
    store,
    render: h => h(App)
});
