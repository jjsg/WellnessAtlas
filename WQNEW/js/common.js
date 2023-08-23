function publicNavigation(activePage) {

    if (activePage) {
        $('#' + activePage).addClass('active');
    }
}

function platinumNavigation(activePage) {
    var user = sessionStorage.getItem("userType");
    if (user == "platinum") {} else {

        if (activePage) {
            $('#' + activePage).addClass('active');
        }
    }
}

/*function iboNavigation(activePage) {
    var user = sessionStorage.getItem("userType");
    if (user == "ibo") {
        $('#wqmenu').html('<li><a id="Dashboard" href="/WQNEW/ibo/ibodashboard.html"><i class="bx bx-grid-alt"></i><span class="link_name">Dashboard</span></a></li>\
            <li><a id="Engage" href="/WQNEW/ibo/coursesalesreport.html"><i class="bx bxs-badge-dollar"></i><span class="link_name">Engage</span></a></li>\
            <li><a id="Customers" href="/WQNEW/viewcustomers_wq.html"><i class="bx bx-group"></i><span class="link_name">Customers</span></a></li>\
            <li><a id="Resources" href="/WQNEW/resourceList.html"><i class="bx bx-link"></i><span class="link_name">Resources</span></a></li>\
            <li><a id="Social" href="#"><i class="bx bx-shape-polygon"></i><span class="link_name">Social</span></a><i class="bx bxs-chevron-down arrow"></i>\
            <ul class="sub-menu"><li><a href="/WQNEW/social/testimonial.html">Submit Testimonial</a></li>\
            <li><a href="/WQNEW/social/mytestimonial.html">My Testimonial</a></li><li><a href="/WQNEW/social/viewalltestimonial.html">View Testimonial</a></li>\
            <li><a href="/WQNEW/social/approvetestimonials.html">Approve Testimonial</a></li>\
            </ul></li>\
            <li><a id="Profile" href="/WQNEW/iboprofileupdate.html"><i class="bx bx-user-pin"></i><span class="link_name">Profile</span></a></li>\
            <li><a id="Logout" href="https://c0hcv782.caspio.com/folderlogout"><i class="bx bx-log-out"></i><span class="link_name">Logout</span></a></li>');
    } else {

        $('#wqmenu').html('<li><a id="Dashboard" href="/WQNEW/platinum/platinumdashboard.html"><i class="bx bx-grid-alt"></i><span class="link_name">Dashboard</span></a></li>\
            <li><a id="Engage" href="/WQNEW/platinum/coursesalesreportPlatinum.html"><i class="bx bxs-badge-dollar"></i><span class="link_name">Engage</span></a></li>\
            <li><a id="Customers" href="/WQNEW/viewcustomers_wq.html"><i class="bx bx-group"></i><span class="link_name">Customers</span></a></li>\
            <li><a id="Resources" href="/WQNEW/resourceList.html"><i class="bx bx-link"></i><span class="link_name">Resources</span></a></li>\
            <li><a id="Social" href="#"><i class="bx bx-shape-polygon"></i><span class="link_name">Social</span></a><i class="bx bxs-chevron-down arrow"></i>\
            <ul class="sub-menu"><li><a href="/WQNEW/social/testimonial.html">Submit Testimonial</a></li>\
            <li><a href="/WQNEW/social/mytestimonial.html">My Testimonial</a></li><li><a href="/WQNEW/social/viewalltestimonial.html">View Testimonial</a></li>\
            <li><a href="/WQNEW/social/approvetestimonials.html">Approve Testimonial</a></li>\
            </ul></li>\
            <li><a id="Profile" href="/WQNEW/iboprofileupdate.html"><i class="bx bx-user-pin"></i><span class="link_name">Profile</span></a></li>\
            <li><a id="Logout" href="https://c0hcv782.caspio.com/folderlogout"><i class="bx bx-log-out"></i><span class="link_name">Logout</span></a></li>');

    }
    if (activePage) {
        $('#' + activePage).addClass('active');
    }
}*/

function iboNavigation(activePage) {
    var user = sessionStorage.getItem("userType");
    if (user == "ibo") {
        $('#wqmenu').html('<li><a id="Dashboard" href="ibo/ibodashboard.html"><i class="bx bx-grid-alt"></i><span class="link_name">Dashboard</span></a></li>\
            <li><a id="Engage" href="ibo/coursesalesreport.html"><i class="bx bxs-badge-dollar"></i><span class="link_name">Engage</span></a></li>\
            <li><a id="Customers" href="viewcustomers_wq.html"><i class="bx bx-group"></i><span class="link_name">Customers</span></a></li>\
            <li><a id="Resources" href="resourceList.html"><i class="bx bx-link"></i><span class="link_name">Resources</span></a></li>\
            <li><a id="Social" href="#"><i class="bx bx-shape-polygon"></i><span class="link_name">Social</span></a><i class="bx bxs-chevron-down arrow"></i>\
            <ul class="sub-menu"><li><a href="social/testimonial.html">Submit Testimonial</a></li>\
            <li><a href="social/mytestimonial.html">My Testimonial</a></li><li><a href="social/viewalltestimonial.html">View Testimonial</a></li>\
            <li><a href="social/approvetestimonials.html">Approve Testimonial</a></li>\
            </ul></li>\
            <li><a id="Profile" href="iboprofileupdate.html"><i class="bx bx-user-pin"></i><span class="link_name">Profile</span></a></li>\
            <li><a id="Logout" href="https://c0hcv782.caspio.com/folderlogout"><i class="bx bx-log-out"></i><span class="link_name">Logout</span></a></li>');
    } else {

        $('#wqmenu').html('<li><a id="Dashboard" href="platinum/platinumdashboard.html"><i class="bx bx-grid-alt"></i><span class="link_name">Dashboard</span></a></li>\
            <li><a id="Engage" href="platinum/coursesalesreportPlatinum.html"><i class="bx bxs-badge-dollar"></i><span class="link_name">Engage</span></a></li>\
            <li><a id="Customers" href="viewcustomers_wq.html"><i class="bx bx-group"></i><span class="link_name">Customers</span></a></li>\
            <li><a id="Resources" href="resourceList.html"><i class="bx bx-link"></i><span class="link_name">Resources</span></a></li>\
            <li><a id="Social" href="#"><i class="bx bx-shape-polygon"></i><span class="link_name">Social</span></a><i class="bx bxs-chevron-down arrow"></i>\
            <ul class="sub-menu"><li><a href="social/testimonial.html">Submit Testimonial</a></li>\
            <li><a href="social/mytestimonial.html">My Testimonial</a></li><li><a href="social/viewalltestimonial.html">View Testimonial</a></li>\
            <li><a href="social/approvetestimonials.html">Approve Testimonial</a></li>\
            </ul></li>\
            <li><a id="Profile" href="iboprofileupdate.html"><i class="bx bx-user-pin"></i><span class="link_name">Profile</span></a></li>\
            <li><a id="Logout" href="https://c0hcv782.caspio.com/folderlogout"><i class="bx bx-log-out"></i><span class="link_name">Logout</span></a></li>');

    }
    if (activePage) {
        $('#' + activePage).addClass('active');
    }
}

function copyWellness() {
    // Get the text field
    var copyText = document.getElementById("wellnessProfileLinkVal");

    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
}

function loginNavigationIBO(activePage) {
    /* $('nav:not([aria-label="breadcrumb"])').html('<div class="container"> \
    <a href="./index.html" id="siteTitle"><h5>Dashboard</h5></a> \
    <ul id="portalNavbar"> \
    <li><a href="./registration.html" id="registration"><i class="fas fa-users"></i> Registration</a></li> \
    </ul> \
    <button type="button" class="btn btn-sm navbar-toggler" id="navbarToggle"><span class="navbar-toggler-icon"></span></button>  \
    </div> \
    ');*/

    if (activePage) {
        $('#' + activePage).addClass('active');
    }
}

function wqquestionnaireNavigation(activePage) {
    $('nav:not([aria-label="breadcrumb"])').html('<div class="container"> \
        <a href="#" id="siteTitle"><h5>Wellness Profile</h5></a> \
        <ul id="portalNavbar"> \
        <li><a href="#" id="registration"><i class="fas fa-users"></i> </a></li> \
        </ul> \
        <button type="button" class="btn btn-sm navbar-toggler" id="navbarToggle"><span class="navbar-toggler-icon"></span></button>  \
        </div> \
        ');

    if (activePage) {
        $('#' + activePage).addClass('active');
    }
}

function weeklyfollowupNavigation(activePage) {
    $('nav:not([aria-label="breadcrumb"])').html('<div class="container"> \
        <a href="#" id="siteTitle"><h5>Weekly Followup</h5></a> \
        <ul id="portalNavbar"> \
        <li><a href="#" id="registration"><i class="fas fa-users"></i> </a></li> \
        </ul> \
        <button type="button" class="btn btn-sm navbar-toggler" id="navbarToggle"><span class="navbar-toggler-icon"></span></button>  \
        </div> \
        ');

    if (activePage) {
        $('#' + activePage).addClass('active');
    }
}

function myFunction() {
    var copyText = document.getElementById("myInput");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
}

function outFunc() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy to clipboard";
}

function doctorNavigation(activePage) {
    $('nav:not([aria-label="breadcrumb"])').html('<div class="container"> \
        <a href="./index.html" id="siteTitle"><h5>Doctor Portal</h5></a> \
        <ul id="portalNavbar"> \
        <li><a href="./dashboard.html" id="dashboard"><i class="fas fa-chart-line"></i> Dashboard</a></li> \
        <li><a href="./manage-patients.html" id="managePatients"><i class="fas fa-users"></i> Manage Patients</a></li> \
        <li><a href="./profile.html" id="profile"><i class="fas fa-user"></i> Profile</a></li> \
        <li><a href="https://c0hcv782.caspio.com/folderlogout"><i class="fas fa-sign-out-alt"></i> Logout</a></li> \
        </ul> \
        <button type="button" class="btn btn-sm navbar-toggler" id="navbarToggle"><span class="navbar-toggler-icon"></span></button>  \
        </div> \
        ');

    if (activePage) {
        $('#' + activePage).addClass('active');
    }
}

var interval = setInterval(function() {
    $('nav:not([aria-label="breadbrumb"]) #navbarToggle').on('click', function() {
        if ($('ul#portalNavbar').hasClass('active')) {
            $('ul#portalNavbar').removeClass('active');
        } else {
            $('ul#portalNavbar').addClass('active');
        }
    });
    clearInterval(interval);
}, 500);

$(window).on('resize', function(e) {
    $('ul#portalNavbar').removeClass('active');
});

$(document).ready(function() {
    $('#testimoniesmenu').on('click', function() {
        $('#testimoniesSubmenu').toggleClass('show');
    });
});

function getUrlVars() {
    var vars = [],
        hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');

    for (var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        hash[1] = unescape(hash[1]);
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }

    return vars;
}