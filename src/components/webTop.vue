<template>
    <div class="site-main spimes-container">
        <div class="top-bar" :class="theme">
            <!-- 手机端显示 -->
            <div class="container clearnav secnav">
                <nav class="navbar navbar-inverse navbar-static-top">
                    <div class="container">
                        <!-- 手机端菜单 -->
                        <div class="navbar-header">
                            <div class="m_nav-list" @click="showMenu">
                                <a href="javascript:" data-toggle="offcanvas" class="lines js-m-navlist">
                                    <span class="line first-line"></span>
                                    <span class="line second-line"></span>
                                    <span class="line third-line"></span>
                                </a>
                            </div>
                        </div>
                        <!-- 手机端菜单内容 -->
                        <div id="navbar"  :class="isShow ? ' navbar-collapse' : 'collapse sidebar-offcanvas'">
                            <input class="wb-switch wb-yes" id="J_themesSwitchBtn" type="checkbox"
                                onclick="javascript:switchNightMode()">
                            <div class="mobile-sidebar-column">
                                <ul class="mobile-sidebar-menu ultop">
                                    <li class="nav-s" >
                                <router-link to="/home" class="top-icon" activeClass="active" @click="showMenu">
                                    <img class="img" src="@/assets/images/icon/gift.svg" alt="">
                                    首页
                                </router-link>
                            </li>
                            <li class="nav-s" >
                                <router-link to="/navigation" class="top-icon" activeClass="active" @click="showMenu">
                                    <img class="img" src="@/assets/images/icon/snowmap.svg" alt="">
                                    导航页
                                </router-link>
                            </li>
                            <li class="nav-s" >
                                <router-link to="/expression" class="top-icon" activeClass="active" @click="showMenu">
                                    <img class="img" src="@/assets/images/icon/bingjiling.svg" alt="">
                                    表情包
                                </router-link>
                            </li>
                            <li class="nav-s" >
                                <router-link to="/bullet" class="top-icon" activeClass="active" @click="showMenu">
                                    <img class="img" src="@/assets/images/icon/wancan.svg" alt="">
                                    弹幕墙
                                </router-link>
                            </li>


                                    <li class="menu-item">
                                        <a>
                                            <img class="img" src="@/assets/images/icon/milu.svg" alt="">
                                            小工具
                                            <div class="dropdown-sub-menu">
                                                <span class="ri-arrow-down-s-line ri-lg"></span>
                                            </div>
                                        </a>
                                        <ul class="sub-menu">
                                            <li class="menu-item">
                                                <a href="https://game.eean.cn/pc/game7/" title="小游戏">小游戏</a>
                                            </li>
                                            <li class="menu-item">
                                                <a href="https://weeklyreport.avemaria.fun/zh" title="周报生成">周报生成</a>
                                            </li>
                                        </ul>
                                    </li>


                                    <li>
                                        <router-link to="/family" class="a-no-bottom">
                                            <img class="img" src="@/assets/images/icon/snow.svg" alt="">
                                            我们
                                        </router-link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
                <div v-if="scrollDistance < 100" class="back-to-top" @click="backToTop">

                    <!-- logo与名称 -->
                    <div class="top-bar-left pull-left navlogo">
                        <router-link to="/home" class="logo box">
                            <img src="@/assets/images/logo1.png" class="logo-light" id="logo-light" alt="乙未极客" />
                            <b class="shan"></b>
                        </router-link>
                    </div>
                    <!-- 搜索功能 -->
                    <div class=" clearfix" :class="isSeacher ? '' : 'search-warp'">
                        <form method="get" action="">
                            <div class="search-area">
                                <input class="search-input" placeholder="搜索感兴趣的知识和文章" type="text" name="s"
                                    autocomplete="off" id="soblur">
                                <ul class="dropdown-menu top_so"></ul>
                            </div>
                            <!-- <button class="showhide-search search-form-input" type="submit">
                                <img class="img" src="@/assets/images/icon/snow.svg" alt="">搜索
                            </button> -->
                        </form>
                    </div>
                    <!-- 右侧搜索登录菜单 -->
                    <div class="top-bar-right pull-right text-right mobs">
                        <div class="top-admin">
                            <a href="javascript:;" id="soStats" class="sostats_click" @click="showSeacher">
                                <i id="soico" class="ri-search-2-line ri-lg"></i>
                                搜索
                            </a>
                            <router-link to="/login" href="https://www.yvii.cn/logon.html">
                                <i class="ri-login-circle-line ri-lg"></i>
                                登录
                            </router-link>
                            <div class="navbar-search socollapse sostats" id="navbar-search" style="">
                                <div class="container">
                                    <form method="get" role="search" id="searchform" class="searchform shadow"
                                        action="">
                                        <div class="input-group">
                                            <input type="text" name="s" id="s" placeholder="请输入搜索关键词并按回车键…"
                                                class="form-control" required="">
                                            <div class="input-group-append">
                                                <button class="btn btn-nostyle" type="submit">
                                                    <i class="ri-search-2-line"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <input class="wb-switch wb-no" id="J_themesSwitchBtn" type="checkbox"
                                @click="setTheme('dark')">
                        </div>
                    </div>
                </div>
            </div>
            <!-- 电脑端显示 -->
            <div class="new_header container clearnav">
                <div class="top-bar-left pull-left navs">
                    <nav class="top-bar-navigation">
                        <ul class="top-bar-menu">
                            <li class="nav-s" >
                                <router-link to="/home" class="top-icon" activeClass="active">
                                    <img class="img" src="@/assets/images/icon/gift.svg" alt="">
                                    首页
                                </router-link>
                            </li>
                            <li class="nav-s" >
                                <router-link to="/navigation" class="top-icon" activeClass="active">
                                    <img class="img" src="@/assets/images/icon/snowmap.svg" alt="">
                                    导航页
                                </router-link>
                            </li>
                            <li class="nav-s" >
                                <router-link to="/expression" class="top-icon" activeClass="active">
                                    <img class="img" src="@/assets/images/icon/bingjiling.svg" alt="">
                                    表情包
                                </router-link>
                            </li>
                            <li class="nav-s" >
                                <router-link to="/bullet" class="top-icon" activeClass="active">
                                    <img class="img" src="@/assets/images/icon/wancan.svg" alt="">
                                    弹幕墙
                                </router-link>
                            </li>
                            <li class="nav-s" >
                                <router-link to="/MapContainer" class="top-icon" activeClass="active">
                                    <img class="img" src="@/assets/images/icon/wancan.svg" alt="">
                                    地图测试
                                </router-link>
                            </li>

                            <li class="drop-down">
                                <!-- <i class="msg_remind" style="display: inline;"></i> -->
                                <div class="top-icon" style="line-height: 50px;">
                                    <img class="img" src="@/assets/images/icon/milu.svg" alt="">小工具
                                </div>
                                <ul class="aui-nav-dow">
                                    <li>
                                        <router-link to="/chat" title="热量">查热量</router-link>
                                    </li>
                                    <li>
                                        <a href="https://game.eean.cn/pc/game7/" target="_blank" title="小游戏">小游戏</a>
                                    </li>
                                    <li>
                                        <a href="https://weeklyreport.avemaria.fun/zh" target="_blank"
                                            title="周报生成">周报生成</a>
                                    </li>
                                </ul>
                            </li>

                          
                        </ul>
                        <div id="sidebar-toggle" class="sidebar-toggle">
                            <span></span>
                        </div>
                    </nav>
                </div>
                <div class="top-bar-right pull-right text-right">
                    <div class="top-admin">
                        &nbsp;&nbsp;
                        <!-- <a href="" target="blank" class="top-icon">
                            <img class="img" src="@/assets/images/icon/qiqiu.svg" alt="">
                            开往
                        </a> -->
                        &nbsp;&nbsp;
                        <router-link to="/swiper" class="top-icon right">
                            <img class="img" src="@/assets/images/icon/mei.svg" alt="">
                            照片墙
                        </router-link>
                        &nbsp;&nbsp;
                        <router-link to="/family" class="top-icon right">
                            <img class="img" src="@/assets/images/icon/tree.svg" alt="">
                            我们
                        </router-link>
                        &nbsp;&nbsp;
                        <router-link to="/about" class="top-icon right">
                            <img class="img" src="@/assets/images/icon/wazi.svg" alt="">
                            关于
                        </router-link>
                        &nbsp;&nbsp;
                        <!-- <a href="javascript:;" id="mStats" class="stats_click top-icon">
                            <img class="img" src="@/assets/images/icon/wazi.svg" alt="">
                            关于
                            <div class="stats">
                                <ul>
                                    <li>文章总数：231 篇</li>
                                    <li>评论总数：584 条</li>
                                    <li>分类总数：7 个</li>
                                    <li>最后更新：4天前</li>
                                </ul>
                            </div>
                        </a> -->
                        <div class="login avt_tl top-icon">
                            <img class="img" src="@/assets/images/icon/bear.svg" alt="">
                            <span>
                                登录
                                <div class="header__dropdown">
                                    <div class="login-div notlogin">
                                        <div class="info">
                                            <div class="info-thumb">
                                                <i class="thumb"
                                                    style="background-image:url(https://api.yviii.com/bing/uhd_302.php);"></i>
                                            </div>
                                            <!-- <h4 class="user-info">登录体验更多功能</h4> -->
                                            <router-link to="/login" class="modal-open btn btn-orange info-btn">
                                                <i class="ri-login-circle-line ri-lg"></i>
                                                立即登录
                                            </router-link>
                                        </div>
                                    </div>

                                </div>
                            </span>
                        </div>
                        <input class="wb-switch" id="J_themesSwitchBtn" type="checkbox" @click="setTheme(theme)">
                    </div>
                </div>
            </div>
            <div id="percentageCounter"></div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const isShow = ref(false)
const isSeacher = ref(false)
const theme = ref('pink')
const showMenu = () => {
    isShow.value = !isShow.value
}
const showSeacher = () => {
    isSeacher.value = !isSeacher.value
}
// 主题切换
const setTheme = (theme1) => {
    if (theme1 === 'dark') {
        theme.value = 'pink'
    }
    if (theme1 === 'pink') {
        theme.value = 'dark'
    }
}

// 计算距离顶部的距离
const scrollDistance = ref(0);
window.addEventListener('scroll', () => {
    scrollDistance.value = document.documentElement.scrollTop || document.body.scrollTop;
    console.log(scrollDistance.value)

})
</script>

<style scoped>
.active {
    color: var(--theme);
}

.logo-light {
    /* width: 176px; */
    height: 58px;
    object-fit: cover;
}

.top-icon {
    display: flex;
    align-items: center;
    /* margin-right: 12px; */
}

.img {
    margin-right: 4px;
    width: 16px;
    height: 16px;
    vertical-align: middle;
}
.right{
    margin-right: 16px;
}
</style>
