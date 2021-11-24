<template>
    <div class="dashboard-content-wrap db-main">
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
                <div class="col-xl-12">
                    <div class="main-content-title">
                        <h1>Overview</h1>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xl-4">
                    <div class="db-info-wrap card">
                        <div class="db-info-head info-head">
                            <h2>Impressions</h2>
                            <ul>
                                <li><a class="active" href="">Week</a></li>
                                <li><a href="">Month</a></li>
                                <li><a href="">Year</a></li>
                                <li><a href="">All Time</a></li>
                            </ul>
                        </div>
                        <div class="db-info-body">
                            <img src="images/db-info-img-1.png" class="img-fluid" alt="dashboard infographics">
                        </div>
                        <div class="db-info-ftr">
                            <p>Total impressions this week: <span>63</span></p>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4">
                    <div class="db-info-wrap card">
                        <div  class="db-info-head info-head">
                            <h2>Requests</h2>
                            <ul>
                                <li><a class="active" href="">Week</a></li>
                                <li><a href="">Month</a></li>
                                <li><a href="">Year</a></li>
                                <li><a href="">All Time</a></li>
                            </ul>
                        </div>
                        <div class="db-info-body">
                            <img src="images/db-info-img-2.png" class="img-fluid" alt="dashboard infographics">
                        </div>
                        <div class="db-info-ftr">
                            <p>Total Request this week: <span>1.200</span></p>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4">
                    <div class="db-info-wrap card">
                        <div class="db-info-head">
                            <div class="db-info-head-inner">
                                <h2>Balance</h2>
                                <p>€ 100,00</p>
                            </div>
                            <div class="db-info-head-btns">
                                <div class="db-info-head-btn-single">
                                    <span>Deposit</span><a href="">+</a>
                                </div>
                                <div class="db-info-head-btn-single">
                                    <span>Withdraw</span><a href="">-</a>
                                </div>
                            </div>
                        </div>
                        <div class="db-info-body">
                            <div class="db-info-body-inner">
                                <h3>Money in circulation</h3>
                                <p>€ 59,99</p>
                            </div>
                        </div>
                        <div class="db-info-ftr button">
                            <a href="">Start Campaign</a>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4">
                    <div class="db-info-wrap card coming-soon">
                        <div class="db-info-head">
                            <h4>Coming Soon</h4>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4">
                    <div class="db-info-wrap card coming-soon">
                        <div class="db-info-head">
                            <h4>Coming Soon</h4>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4">
                    <div class="db-info-wrap card coming-soon">
                        <div class="db-info-head">
                            <h4>Coming Soon</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "Home"
}
</script>

<style scoped>

</style>
