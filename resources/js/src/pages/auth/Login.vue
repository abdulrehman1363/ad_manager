<template>
    <main>

        <!-- dashboard -->
        <section class="dashboard-outer-wrap">
            <div class="container-fluid">
                <div class="row">
                    <div class="dashboard-sidebar-wrap">
                        <div class="sidebar-brand">
                            <a class="brand-logo-single" href="index.html"><img src="images/logo.png" alt=""></a>
                            <a class="brand-logo" href="index.html">CoinX AdManager</a>
                        </div>
                        <div class="dashboard-sidebar-links">
                            <a class="dashboard-sidebar-link-single" href="login.html">
                                <img src="images/login-icon.svg" alt="login icon">
                                <span>Login</span>
                            </a>
                            <a class="dashboard-sidebar-link-single" href="about.html">
                                <img src="images/about-n-support-icon.svg" alt="about us icon">
                                <span>About Us</span>
                            </a>
                            <a class="dashboard-sidebar-link-single" href="support.html">
                                <img src="images/about-n-support-icon.svg" alt="help and support icon">
                                <span>Help & Support</span>
                            </a>
                        </div>
                        <div class="sidebar-website-link">
                            <a class="dashboard-sidebar-link-single" href="login.html">
                                <img src="images/black-bold-arrow.svg" alt="back to site arrow">
                                <span>CoinX Website</span>
                            </a>
                        </div>
                    </div>
                    <div class="dashboard-content-wrap">
                        <div class="sidebar-toggle-btn" id="side-toggle-btn">
                            <i class="fa fa-bars" aria-hidden="true"></i>
                        </div>
                        <div id="side-close-btn">
                            <div class="sidebar-close-btn">
                                <img src="images/close-button.svg" alt="close button">
                            </div>
                        </div>
                        <div class="main-content-inner">
                            <div class="row">
                                <LoginJWT></LoginJWT>
                                <div class="col-xl-7">
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="content-about db-card">
                                                <div class="content-about-head">
                                                    <h1>About Us</h1>
                                                </div>
                                                <div class="content-about-wrap">
                                                    <div class="content-about-text">
                                                        <p>Earn money with the AdManager of CoinX. The paltform is growing Exponentionally, On this platform, well all have one thing in comment.</p>
                                                        <p>We all are into cryptocurrencies. Introduce your product and help our crypto community to achieve the maximum out of their being.</p>
                                                    </div>
                                                    <div class="content about-image">
                                                        <img src="images/content-about-img.png" class="img-fluid" alt="about our platform images">
                                                    </div>
                                                </div>
                                                <div class="content-about-features">
                                                    <div class="content-feature-single">
                                                        <span></span>
                                                        <h2>50K+ <br> Active users</h2>
                                                        <span></span>
                                                    </div>
                                                    <div class="content-feature-single">
                                                        <span></span>
                                                        <h2>Crypto <br> Enthousiastics</h2>
                                                        <span></span>
                                                    </div>
                                                    <div class="content-feature-single">
                                                        <span></span>
                                                        <h2>Low <br> Costs Options</h2>
                                                        <span></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="content-support db-card">
                                                <div class="content-support-head">
                                                    <h1>Help & Support</h1>
                                                </div>
                                                <div class="content-support-wrap">
                                                    <div class="content-support-chat-box-wrap">
                                                        <a href="https://wa.me/0000000000" class="content-support-chat-box">
                                                            <div class="content-support-chat">
                                                                <i class="fa fa-whatsapp" aria-hidden="true"></i>
                                                                <h2>Chat with Support</h2>
                                                            </div>
                                                        </a>
                                                        <p>Available</p>
                                                    </div>
                                                    <div class="content-support-email-box-wrap">
                                                        <a href="contact.html" class="content-support-email-box">
                                                            <div class="content-support-email">
                                                                <i class="fa fa-envelope-o" aria-hidden="true"></i>
                                                                <h2>Send an Email</h2>
                                                            </div>
                                                        </a>
                                                        <p>Available</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    </main>
</template>
<script>
import LoginJWT from './LoginJWT.vue'
    export default {
        components: {
            LoginJWT
        }
    }
</script>
