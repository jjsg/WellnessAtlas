function publicNavigation(activePage) {
    $('nav:not([aria-label="breadcrumb"])').html('<div class="container"> \
    <a href="./index.html" id="siteTitle"><h5>IBO Dashboard</h5></a> \
        <ul id="portalNavbar"> \
            <li><a href="./ibodashboard.html" id="dashboard"><i class="fas fa-users"></i> Dashboard</a></li> \<li><a href="../viewcustomers_wq_mfm.html" id="customers"><i class="fas fa-users"></i> Customers</a></li> \<li><a href="../iboprofileupdate.html" id="patientRegistration"><i class="fas fas fa-user-alt"></i> Profile</a></li> \<li><a href="https://c0hcv782.caspio.com/folderlogout" id="patientRegistration"><i class="fas fa-users"></i> Logout</a></li> \
        </ul> \
    <button type="button" class="btn btn-sm navbar-toggler" id="navbarToggle"><span class="navbar-toggler-icon"></span></button>  \
    </div> \
    ');

    if (activePage) {
        $('#' + activePage).addClass('active');
    }
}

function platinumNavigation(activePage) {
    var user = sessionStorage.getItem("userType");
    if (user == "platinum") {
        $('nav:not([aria-label="breadcrumb"])').html('<div class="container"> \
		<a href="./platinumdashboard.html" id="siteTitle"><h5>Platinum Dashboard</h5></a> \
			<ul id="portalNavbar"> \
				<li><a href="./platinumdashboard.html" id="dashboard"><i class="fas fa-users"></i> Dashboard</a></li> \<li><a href="../viewcustomers_wq_mfm.html" id="customers"><i class="fas fa-users"></i> Customers</a></li> \<li><a href="../iboprofileupdate.html" id="patientRegistration"><i class="fas fas fa-user-alt"></i> Profile</a></li>\<li><a href="../platinum/leadmanagement.html" id="patientRegistration"><i class="fas fas fa-user-alt"></i>Lead Management</a></li>\<li><a href="https://c0hcv782.caspio.com/folderlogout" id="patientRegistration"><i class="fas fa-users"></i> Logout</a></li> \
			</ul> \
		<button type="button" class="btn btn-sm navbar-toggler" id="navbarToggle"><span class="navbar-toggler-icon"></span></button>  \
		</div> \
		');
    } else {
        $('nav:not([aria-label="breadcrumb"])').html('<div class="container"> \
    <a href="./platinumdashboard.html" id="siteTitle"><h5>Platinum Dashboard</h5></a> \
        <ul id="portalNavbar"> \
            <li><a href="../ibo/ibodashboard.html" id="dashboard"><i class="fas fa-users"></i> Dashboard</a></li>\<li><a href="../viewcustomers_wq_mfm.html" id="customers"><i class="fas fa-users"></i> Customers</a> </li> \<li><a href="../iboprofileupdate.html" id="patientRegistration"><i class="fas fas fa-user-alt"></i> Profile</a></li>\<li><a href="../leads.html" id="patientRegistration"><i class="fas fas fa-user-alt"></i>Leads</a></li>\<li><a href="https://c0hcv782.caspio.com/folderlogout" id="patientRegistration"><i class="fas fa-users"></i> Logout</a></li> \
        </ul> \
    <button type="button" class="btn btn-sm navbar-toggler" id="navbarToggle"><span class="navbar-toggler-icon"></span></button>  \
    </div> \
    ');
    }
    if (activePage) {
        $('#' + activePage).addClass('active');
    }
}


function swasthyaIboNavigation(activePage) {
    var user = sessionStorage.getItem("leadertype");
    var commType = sessionStorage.getItem("commType");
    var dashboardReportTabs = '';
    var authorised = false;

    if (user == 'platinum' || user == 'emerald') {
        dashboardReportTabs = '<li><a href="../platinum/platinumdashboard.html" id="Dashboard"><i class="bx bx-grid-alt"></i><span class="link_name">Dashboard</span></a></li> \
				 <li><a href="../challenges/viewchallenges.html" id="Transactions"><i class="bx bxs-dice-6"></i><span class="link_name">Challenges</span></a></li> \
                 <li><a href="../platinum/coursesalesreportPlatinum.html" id="Transactions"><i class="bx bxs-badge-dollar"></i><span class="link_name">Transactions</span></a></li>'
        authorised = true;
    } else if (user == 'member') {
        dashboardReportTabs = '<li><a href="../ibo/ibodashboard.html" id="Dashboard"><i class="bx bx-grid-alt"></i><span class="link_name">Dashboard</span></a></li> \
				<li><a href="../challenges/viewchallenges.html" id="Transactions"><i class="bx bxs-dice-6"></i><span class="link_name">Challenges</span></a></li> \
                 <li><a href="../ibo/coursesalesreport.html" id="Transactions"><i class="bx bxs-badge-dollar"></i><span class="link_name">Transactions</span></a></li>'
        authorised = true;
    }
    else if (user == 'diamond') {
        dashboardReportTabs = '<li><a href="../platinum/platinumdashboard.html" id="Dashboard"><i class="bx bx-grid-alt"></i><span class="link_name">Dashboard</span></a></li> \
				 <li><a href="../challenges/viewchallenges.html" id="Transactions"><i class="bx bxs-dice-6"></i><span class="link_name">Challenges</span></a></li> \
                 <li><a href="../platinum/coursesalesreportPlatinum.html" id="Transactions"><i class="bx bxs-badge-dollar"></i><span class="link_name">Transactions</span></a></li>'
        authorised = true;
    }

    var communitySpecificTabs = '';
    if (commType == 'HWL') {
        communitySpecificTabs = '<li><a href="../viewcustomers.html" id="Customers"><i class="bx bx-group"></i><span class="link_name">Customers</span></a></li>\
                <li><a id="Leads" href="../leadmanagement/leadmanagement.html"><i class="bx bx-body"></i><span class="link_name">Leads</span></a></li>'
    } else if (commType == 'GENERIC') {
        communitySpecificTabs = '<li><a href="../viewcustomers_wq_mfm.html" id="Customers"><i class="bx bx-group"></i><span class="link_name">Customers</span></a></li>'
    }
    var commonTabs = '';
    if (authorised) {
        commonTabs = '<li><a href="../resourceList.html" id="Resources"><i class="bx bx-link"></i><span class="link_name">Resources</span></a></li>\
                <li><a id="Social" href="..//social/testimonial.html"><i class="bx bx-shape-polygon"></i><span class="link_name">Social</span></a></li>\
                <li><a href="../iboprofileupdate.html" id="Profile"><i class="bx bx-user-pin"></i><span class="link_name">Profile</span></a></li>\
                <li><a href="https://c0hcv782.caspio.com/folderlogout" id="Logout"><i class="bx bx-log-out"></i><span class="link_name">Logout</span></a></li>'
    }
    if(document.getElementById("addcustomer")){
	document.getElementById("addcustomer").value = document.getElementById("addcustomer").value + sessionStorage.getItem('iboid');
    }
    var htmlString = dashboardReportTabs + communitySpecificTabs + commonTabs;
    $('#wqmenu').html(htmlString);


    /*if (activePage == "customers" && commType == "HWL") {
        var custId = sessionStorage.getItem("customerID");
        $(".stepper-wrapper").eq(0).html('<div id="step-1" class="stepper-item completed">\
                  <div class="step-counter"><a id="stage-1" href="./customerdetails.html?custid=' + custId + '">1</a></div>\
                  <div class="step-name">Contact Details</div>\
                </div>\
                <div  id="step-2" class="stepper-item ">\
                  <div class="step-counter"><a id="stage-2" href="./customerdetails2.html?custrefid=' + custId + '">2</a></div>\
                  <div class="step-name">Lifestyle Assessment</div>\
                </div>\
                <!--div id="step-3" class="stepper-item ">\
                  <div class="step-counter"><a id="stage-3" href="./productorderlist.html?custid=' + custId + '">3</a></div>\
                  <div class="step-name">Old Product Order List</div>\
                </div-->\
                <div id="step-3" class="stepper-item ">\
                  <div class="step-counter"><a id="stage-3" href="./orderList.html?custid=' + custId + '">3</a></div>\
                  <div class="step-name">New Order List</div>\
                </div>\
                <div id="step-4" class="stepper-item ">\
                  <div class="step-counter"><a id="stage-4" href="./interactionlist.html?custid=' + custId + '">4</a></div>\
                  <div class="step-name">Interaction List</div>\
                </div>\
                <!--div id="step-5" class="stepper-item ">\
                  <div class="step-counter"><a id="stage-5" href="./resourceList.html?custid=' + custId + '">5</a></div>\
                  <div class="step-name">Resource List</div>\
                </div-->')
    }*/

    if (activePage) {
        $('#' + activePage).addClass('active');
    }
}


function loginNavigationIBO(activePage) {
   
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

function loginNavigation() {
    $('nav:not([aria-label="breadcrumb"])').html('<div class="container"> \
    <a href="./index.html" id="siteTitle"><h5>Healthcare</h5></a> \
    <ul id="portalNavbar"> \
    <li><a href="../patient-registration.html" id="patientRegistration"><i class="fas fa-users"></i> New Patients</a></li> \
    <li><div class="dropdown"> \
            <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="fas fa-sign-in-alt"></i> Login</a> \
            <div class="dropdown-menu"> \
                <a class="dropdown-item" href="../doctor/login.html">Doctor Login</a> \
                <a class="dropdown-item" href="../patient/login.html">Patient Login</a> \
            </div> \
        </div> \
    </li> \
    </ul> \
    <button type="button" class="btn btn-sm navbar-toggler" id="navbarToggle"><span class="navbar-toggler-icon"></span></button>  \
    </div> \
    ');
}

function patientNavigation(activePage) {
    $('nav:not([aria-label="breadcrumb"])').html('<div class="container"> \
    <a href="./index.html" id="siteTitle"><h5>Patient Portal</h5></a> \
    <ul id="portalNavbar"> \
        <li><a href="./visits.html" id="visits"><i class="fas fa-home"></i> My Visits</a></li> \
        <li><a href="./messages.html" id="messages"><i class="fas fa-envelope"></i> Messages</a></li> \
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

$(document).ready(function() {
    $('#leadmenu').on('click', function() {
        $('#leadSubmenu').toggleClass('show');
    });
    // logic for groupc colour theme bands;
    var defaultColor = '#F0E9D4';
    var greencoach = '#69A864';
    var bluecoach ='#3D8CFF';
    var yellowcoach = '#FCD701';
    var orangeleader= '#FFA503';
    var redleader = '#DD143B';
    var purpleleader= '#810181';
    var coachColor  = "";
    var rgb = "";
    var contrastFontColor = "#212529";
    var groupCP = Number.parseInt(sessionStorage.getItem("group_cp"));
    var r = document.querySelector(':root');
    if(groupCP <=0){
              coachColor = defaultColor;
                rgb = 'rgb(240,233,212)';
    }else{
        switch (groupCP > 0) {
            case groupCP >= 20:
                coachColor = purpleleader;
                rgb = 'rgb(129,1,129)';
                contrastFontColor = '#fff';
              break;
            case groupCP >= 15:
                coachColor = redleader;
                rgb = 'rgb(221,20,59)';
                contrastFontColor = '#fff';
              break;
            case  groupCP >= 10:
                coachColor = orangeleader;
                rgb = 'rgb(255,165,3)';
              break;
            case groupCP >= 6:
                coachColor = yellowcoach;
                rgb = 'rgb(252,215,1)';
              break;
            case groupCP >= 3:
                coachColor = bluecoach;
                rgb = 'rgb(61,140,255)';
                contrastFontColor = '#fff';
              break;
            case groupCP >= 1:
                coachColor = greencoach;
                rgb = 'rgb(105,168,100)';
              break;
            default:
                coachColor = defaultColor;
                rgb = 'rgb(240,233,212)';
          }

    }
    r.style.setProperty('--caochtheme', coachColor); 
    setTimeout(function() {
        $("table > thead > tr >th").css('background',rgb);
        $("table > thead > tr >th .cbResultSetLabelLink").css('color' , contrastFontColor);
        $('.home-section').css('background',rgb);
        $('.home-section .text').css('color' , contrastFontColor);
    },2000); // css applied for cp after 2 sec. 
    
     
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

function copyWellness(event) {
    // Get the text field
    var copyText = document.getElementById("addcustomer");

    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
    event.value = "Copied";
}
