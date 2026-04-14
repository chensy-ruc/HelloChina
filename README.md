# HelloChina

面向在华国际友人的多语言中国旅行导览网站（静态前端项目）。

`HelloChina` 采用“地图优先 + 内容联动 + AI问答”的结构：  
先在中国地图选城市，再进入城市地图查看景点位置、景点介绍、购票信息、推荐路线、美食建议，并可直接进入 AI 对话继续深挖某个景点的细节。

## 核心功能

- 中国地图总览（5个城市入口）
  - 北京、上海、西安、成都、杭州
  - 点击城市后联动城市地图、景点列表、路线和内容区

- 城市地图与景点联动
  - 景点在城市地图中编号标注
  - 点击地图、快捷入口、景点卡片会同步切换焦点景点

- 本地素材接入
  - 使用 `景点图片/` 的本地图片作为景点展示素材
  - 使用 `景点/` 文件夹中的文本与链接：
    - `城市介绍/城市介绍.txt`
    - `景点名/介绍.txt`
    - `景点名/网址.txt` 或 `景点名/网站.txt`

- 购票链接接入
  - 景点焦点区提供“购票/预约”入口
  - 景点卡片支持展示购票入口或免票说明

- AI 对话助手
  - 点击“向AI咨询这个景点”可跳转到 AI 对话区
  - 页面仅保留对话界面，不再提供页面内 API 配置输入框
  - API Endpoint / Model / API Key 在 `app.js` 脚本中手工配置

- 多语种界面
  - 支持 `EN / 中文 / JA / KO / ES / FR / AR`
  - 界面按钮、模块标题、路线文本等会随语种切换

- 地图语言联动
  - 语种切换后地图底图与标注策略同步更新
  - 城市与景点标签按当前语言显示

- 顶部导览导航（扩展入口）
  - 地图（Map）
  - 地陪（Local Guide）
  - 美食（Food）
  - AI 助手（AI Assistant）

## 目录结构

- [index.html](/Users/chen/Desktop/JD%20Cup/index.html)：页面结构
- [styles.css](/Users/chen/Desktop/JD%20Cup/styles.css)：视觉样式、响应式布局、动画
- [app.js](/Users/chen/Desktop/JD%20Cup/app.js)：数据、地图逻辑、语言切换、AI 对话逻辑
- `景点图片/`：景点图片素材
- `景点/`：景点介绍文本、城市介绍文本、购票链接文本
- [vercel.json](/Users/chen/Desktop/JD%20Cup/vercel.json)：Vercel 配置
- [.github/workflows/pages.yml](/Users/chen/Desktop/JD%20Cup/.github/workflows/pages.yml)：GitHub Pages 自动部署

## 本地运行

```bash
cd "/Users/chen/Desktop/JD Cup"
python3 -m http.server 8000
```

浏览器打开：

```text
http://localhost:8000
```

## AI 接口配置说明

在 [app.js](/Users/chen/Desktop/JD%20Cup/app.js) 中找到：

```js
const SCRIPT_AI_CONFIG = Object.freeze({
  endpoint: "https://api.openai.com/v1/chat/completions",
  model: "gpt-4.1-mini",
  apiKey: ""
});
```

将 `apiKey`（以及需要的话 `endpoint`、`model`）改成你自己的配置后，刷新页面即可。  
页面底部 `AI Concierge` 只负责聊天展示与提问，不再显示接口配置表单。
同一套配置也会用于“城市介绍 / 景点介绍”的多语种精确翻译映射；未配置时，非中文界面会优先展示中文原文，确保内容不偏离源文。

## 已完成的改进任务

以下改进已落地：

- 景点卡片按钮改为跳转 AI 对话区，并围绕该景点发问
- 城市介绍与景点介绍改为读取 `景点` 文件夹文本
- 城市页面接入景点购票链接（含 `网址.txt` / `网站.txt` 兼容）
- 文案定位从 `international students` 调整为 `international friends`
- 地图在语种切换时同步更新语言显示策略
- 页面新增导览导航（地图 / 地陪 / 美食 / AI）
- 网站品牌从 `WanderChina` 升级为 `HelloChina`，并更新左上角简洁徽标
- 城市介绍与景点介绍新增“中文源文 -> 多语种”翻译映射缓存（localStorage 持久化），非中文界面与中文文本内容对齐度提升
- “五座城市，一站式地图导览”右侧城市介绍支持滚动浏览，长文本不再被遮挡
- 非中文界面的地图底图改为带地名标注的详细底图（CARTO Voyager），不再只显示轮廓
- AI 区块改为纯聊天界面，API 参数改为在脚本中手动配置
- 城市介绍与景点介绍在非中文界面优先使用“中文源文直译结果”，无译文时先展示中文原文，避免内容偏离
- 城市工作区右上角介绍改为简短版文案，突出节奏与定位
- 景点列表卡片与地图弹窗介绍改为与中文源文同源的多语种内容
- 中国地图与城市地图的交互标注（名称、弹窗、提示）均随界面语言切换，地图信息不裁剪

## 下一步的改进任务
- 当前版本暂无新增待办。后续如有新需求，可继续在此节追加。
