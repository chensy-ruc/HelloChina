# WanderChina

为在华留学生打造的静态旅游网站示例，当前版本包含：

- 中国地图上的 5 个城市入口：北京、上海、西安、成都、杭州
- 点击中国地图城市后，直接联动城市地图、景点列表和推荐路线
- 完整接入 `景点图片` 文件夹中的全部景点与本地图片
- 选中景点后显示本地图片画廊、景点说明、地图联动和卡片定位
- 支持 `EN / 中文 / JA / KO / ES / FR / AR`
- 浅色高活力主题，视觉方向参考 Google 风格的清爽卡片与高亮色点缀

## 运行

在当前目录启动静态服务器：

```bash
python3 -m http.server 8000
```

然后打开：

```text
http://localhost:8000
```

## 文件

- `index.html`：页面结构
- `styles.css`：主题样式、响应式布局与动效
- `app.js`：城市/景点数据、地图逻辑、语言切换和交互联动
- `vercel.json`：Vercel 静态部署配置
- `.github/workflows/pages.yml`：GitHub Pages 自动部署工作流
- `.nojekyll`：让 GitHub Pages 直接按静态文件发布

## 部署准备

这个项目已经整理成适合静态托管的平台结构：

- 页面资源全部使用相对路径，适合直接部署到 Vercel 或 GitHub Pages
- `景点图片` 文件夹会和页面一起发布，不需要额外图床
- 已经补好 `vercel.json`
- 已经补好 GitHub Pages 的 Actions 工作流

## 方案一：部署到 Vercel

适合想要最快拿到一个可分享链接的人。这个项目是纯静态站点，上传后不需要构建命令。

### 第一步：把项目传到 GitHub

如果你还没有 Git 仓库，在项目根目录执行：

```bash
git init
git add .
git commit -m "Prepare WanderChina for deployment"
```

然后在 GitHub 网页上新建一个仓库，例如 `wanderchina`，再执行：

```bash
git branch -M main
git remote add origin https://github.com/你的GitHub用户名/wanderchina.git
git push -u origin main
```

### 第二步：导入到 Vercel

1. 打开 `https://vercel.com`
2. 登录后点击 `Add New...` -> `Project`
3. 选择你刚才的 GitHub 仓库
4. Framework Preset 保持默认或选 `Other`
5. `Build Command` 留空
6. `Output Directory` 留空
7. 点击 `Deploy`

部署成功后，Vercel 会给你一个域名，类似：

```text
https://wanderchina.vercel.app
```

### 第三步：发给别人

直接把 Vercel 生成的网址发给别人即可。可以通过微信、QQ、邮件、飞书、钉钉直接发送这个链接。

## 方案二：部署到 GitHub Pages

适合想把代码和网站都托管在 GitHub 上。这个项目已经带好了 Pages workflow，推送到 `main` 分支后就可以自动部署。

### 第一步：把项目推到 GitHub

如果你还没推送，使用上面的 Git 命令把整个项目上传到 GitHub。

### 第二步：开启 GitHub Pages

1. 打开你的 GitHub 仓库
2. 进入 `Settings` -> `Pages`
3. 在 `Build and deployment` 下，把 `Source` 设为 `GitHub Actions`
4. 保持仓库默认分支为 `main`

此后每次你 push 到 `main`，GitHub 都会自动部署。

部署成功后，链接通常会是：

```text
https://你的GitHub用户名.github.io/wanderchina/
```

如果你的仓库名不是 `wanderchina`，最后一段会变成你的真实仓库名。

### 第三步：发给别人

直接把 GitHub Pages 链接发给别人即可。

## 我建议你怎么选

- 想最快上线并直接分享：选 `Vercel`
- 想代码托管和网站发布都放在 GitHub：选 `GitHub Pages`

对你这个项目来说，我更推荐 `Vercel`，因为流程更短，拿链接更快。

## 注意

- 部署时一定要把整个项目一起上传，包括 `景点图片` 文件夹
- 如果你后面改了内容，只要重新 `git add .`、`git commit`、`git push`，线上网站就会更新
- GitHub Pages 首次部署通常需要等几十秒到几分钟
