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
  - 支持外接 OpenAI 兼容接口（Endpoint / Model / API Key）
  - API 配置保存在浏览器本地（localStorage）

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

进入页面底部 `AI Concierge` 模块后填写：

- API Endpoint（例如 OpenAI 兼容接口地址）
- Model（例如 `gpt-4.1-mini`）
- API Key

点击“保存 API 配置”后，本地浏览器会缓存配置。  
随后可围绕当前景点继续追问路线、时段、交通、购票与避峰建议。

## 已完成的改进任务

以下改进已落地：

- 景点卡片按钮改为跳转 AI 对话区，并围绕该景点发问
- 城市介绍与景点介绍改为读取 `景点` 文件夹文本
- 城市页面接入景点购票链接（含 `网址.txt` / `网站.txt` 兼容）
- 文案定位从 `international students` 调整为 `international friends`
- 地图在语种切换时同步更新语言显示策略
- 页面新增导览导航（地图 / 地陪 / 美食 / AI）
- 网站品牌从 `WanderChina` 升级为 `HelloChina`，并更新左上角简洁徽标


