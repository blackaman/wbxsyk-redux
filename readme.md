#### 相生一课（新浪微博版）

v1.0 实现课程购买，播放（播放需求依据实现效果可取舍）

#### Build

- npm run dev
- npm run build

#### libs

authorization 授权

#### 名词

- 课程 course
- 章节 chapter
- 个人中心 my-*
- 缩略图 thumb
- 列表项 item

#### Dir

- pages 页面入口
- template 页面模板
- view 最顶层组件，静态组件
- component 最底层组件，静态组件
- container 动态组件，含逻辑
- actions 行为
- reducers 行为的响应
- model 模型

#### Method

- assets/libs/login 判断登录状态
- assets/libs/query-string 提取URL查询字段

#### Pages

- index.html 首页（课程列表）
- lesson.html 课程详情（包含付费和未付费状态）
- chapter.html 章节详情

#### Components
- bl-loading 块级加载模板
- sl-loading 全局加载模板
- empty 空模板 (type:'')
- unpublish 下架模板 (type:'')
- course-item 我的订阅课程块
- my-course 我的订阅列表
- order-item 我的订单课程块
- my-orders 我的订单列表
- index-item 首页课程块
- index-list 首页列表
- logo-area 关于我们的相生一课logo
- lesson-list 常规课程列表
- lesson-list-updown 上图下字课程列表
- lesson-avatar 课程头图区
- lesson-intro 课程介绍
- lesson-detail 课程富文本区域
- law-declare 免责声明
- chapter-list 章节列表
- chapter-introduction 章节简介
- pay-button 支付操作
- √ avatar-box 带用户头像和昵称的容器（avatar:头像, nickname:昵称）
- √ menu 菜单列表
- √ menu-item 菜单项（title:菜单标题,icon:菜单图标（不设置属性则不显示图标）,redirect: 菜单跳转地址,className:菜单附加class）
- banner 头部轮播
- audio-thumb 音频缩略图（带无图效果）
- video-thumb 视频缩略图（带无图效果）
- toolbar 底部工具栏
- video-player 视频播放器
- audio-player 音频播放器
- sl-loading 全屏刷新
- bl-loading 局部加载
