# multi-page-application
基于vue多页面应用模板

### 项目运行

- 启动
```
npm run serve
```

- 构建
```
npm run serve
```

### 添加新页面

- 在 vue.config.js 配置文件的 pages 内添加新的页面配置

```javascript
		module.exports = {
			pages: {
				// 页面名称
				page: {
					// 入口文件
					entry: 'src/pages/page/main.js',
					// 模板页面 可以自定义模板
					template: 'public/index.html',
					// 输出文件名
					filename: 'page.html'
					// 页面标题
					title: '标题'
				}
			}
		}
```

- 在 src/pages 目录下新建对应页面的配置文件，并在 src/app 目录下新建自己的 vue 相关目录

- 如果有路由需求，可在 src/router 下配置