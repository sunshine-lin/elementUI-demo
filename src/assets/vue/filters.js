/**
 * vue公共组件js
 * @authors Your Name (you@example.org)
 * @date    2017-08-08 11:03:08
 * @version $Id$
 */
import Vue from 'vue'

// 前面加个0 用于时间比较合适
Vue.filter("fillZero", function(value) {
	if (value < 10) {
		return "0" + value
	} else {
		return value
	}
});

// 保留小数点2位 默认
Vue.filter("toFixed", (value,arg) => {
	if (arg) {
		return value.toFixed(args)
	} else {
		return value.toFixed(2)
	}
});

