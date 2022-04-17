function publicNavigation(activePage) {
    $('nav:not([aria-label="breadcrumb"])').html('<div class="container"> \
    <a href="./index.html" id="siteTitle"><h5>IBO Dashboard</h5></a> \
        <ul id="portalNavbar"> \
            <li><a href="./ibodashboard.html" id="dashboard"><i class="fas fa-users"></i> Dashboard</a></li> \ <li><a href="../viewcustomers.html" id="customers"><i class="fas fa-users"></i> Customers</a></li> \<li><a href="../iboprofileupdate.html" id="patientRegistration"><i class="fas fas fa-user-alt"></i> Profile</a></li> \<li><a href="../productslinkscode.html" id="patientRegistration"><i class="fas fas fa-user-alt"></i> Resources</a></li> \<li><a href="https://c0hcv782.caspio.com/folderlogout" id="patientRegistration"><i class="fas fa-users"></i> Logout</a></li> \
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
 	if(user == "platinum"){
		 $('nav:not([aria-label="breadcrumb"])').html('<div class="container"> \
		<a href="./platinumdashboard.html" id="siteTitle"><h5>Platinum Dashboard</h5></a> \
			<ul id="portalNavbar"> \
				<li><a href="./platinumdashboard.html" id="dashboard"><i class="fas fa-users"></i> Dashboard</a></li> \ <li><a href="../viewcustomers.html" id="customers"><i class="fas fa-users"></i> Customers</a></li> \<li><a href="../iboprofileupdate.html" id="patientRegistration"><i class="fas fas fa-user-alt"></i> Profile</a></li> \<li><a href="../productslinkscode.html" id="patientRegistration"><i class="fas fas fa-user-alt"></i> Resources</a></li> \<li><a href="https://c0hcv782.caspio.com/folderlogout" id="patientRegistration"><i class="fas fa-users"></i> Logout</a></li> \
			</ul> \
		<button type="button" class="btn btn-sm navbar-toggler" id="navbarToggle"><span class="navbar-toggler-icon"></span></button>  \
		</div> \
		');
	}
	else{
		 $('nav:not([aria-label="breadcrumb"])').html('<div class="container"> \
    <a href="./platinumdashboard.html" id="siteTitle"><h5>Platinum Dashboard</h5></a> \
        <ul id="portalNavbar"> \
            <li><a href="../ibo/ibodashboard.html" id="dashboard"><i class="fas fa-users"></i> Dashboard</a></li> \ <li><a href="../viewcustomers.html" id="customers"><i class="fas fa-users"></i> Customers</a></li> \<li><a href="../iboprofileupdate.html" id="patientRegistration"><i class="fas fas fa-user-alt"></i> Profile</a></li> \<li><a href="../productslinkscode.html" id="patientRegistration"><i class="fas fas fa-user-alt"></i> Resources</a></li> \<li><a href="https://c0hcv782.caspio.com/folderlogout" id="patientRegistration"><i class="fas fa-users"></i> Logout</a></li> \
        </ul> \
    <button type="button" class="btn btn-sm navbar-toggler" id="navbarToggle"><span class="navbar-toggler-icon"></span></button>  \
    </div> \
    ');
	}
    if (activePage) {
        $('#' + activePage).addClass('active');
    }
}

function iboNavigation(activePage) {
    var user = sessionStorage.getItem("userType");
    if(user == "platinum"){
    $('nav:not([aria-label="breadcrumb"])').html('<div class="container"> \
    <a href="./index.html" id="siteTitle"><h5>Platinum Dashboard</h5></a> \
        <ul id="portalNavbar"> \
            <li><a href="./platinum/platinumdashboard.html" id="dashboard"><i class="fas fa-users"></i> Dashboard</a></li> \ <li><a href="../viewcustomers.html" id="customers"><i class="fas fa-users"></i> Customers</a></li> \<li><a href="../iboprofileupdate.html" id="patientRegistration"><i class="fas fas fa-user-alt"></i> Profile</a></li> \<li><a href="../productslinkscode.html" id="patientRegistration"><i class="fas fas fa-user-alt"></i> Resources</a></li> \<li><a href="https://c0hcv782.caspio.com/folderlogout" id="patientRegistration"><i class="fas fa-users"></i> Logout</a></li> \
        </ul> \
    <button type="button" class="btn btn-sm navbar-toggler" id="navbarToggle"><span class="navbar-toggler-icon"></span></button>  \
    </div> \
    ');
    }else{
          $('nav:not([aria-label="breadcrumb"])').html('<div class="container"> \
    <a href="./index.html" id="siteTitle"><h5>IBO Dashboard</h5></a> \
        <ul id="portalNavbar"> \
            <li><a href="./ibo/ibodashboard.html" id="dashboard"><i class="fas fa-users"></i> Dashboard</a></li> \ <li><a href="../viewcustomers.html" id="customers"><i class="fas fa-users"></i> Customers</a></li> \<li><a href="../iboprofileupdate.html" id="patientRegistration"><i class="fas fas fa-user-alt"></i> Profile</a></li> \<li><a href="../productslinkscode.html" id="patientRegistration"><i class="fas fas fa-user-alt"></i> Resources</a></li> \<li><a href="https://c0hcv782.caspio.com/folderlogout" id="patientRegistration"><i class="fas fa-users"></i> Logout</a></li> \
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
    var user = sessionStorage.getItem("userType");
    $('nav:not([aria-label="breadcrumb"])').html('<div class="container"> \
    <h5 style="color:white">Swasthya</h5> \
        <ul id="portalNavbar"> \
            <li><a href="../viewcustomers.html" id="customers"><i class="fas fa-users"></i> Customers</a></li> \<li><a href="../iboprofileupdate.html" id="patientRegistration"><i class="fas fas fa-user-alt"></i> Profile</a></li> \<li><a href="https://c0hcv782.caspio.com/folderlogout" id="patientRegistration"><i class="fas fa-users"></i> Logout</a></li> \
        </ul> \
    </div> \
    ');

    if (activePage) {
        $('#' + activePage).addClass('active');
    }
}

function loginNavigationIBO(activePage) {
    $('nav:not([aria-label="breadcrumb"])').html('<div class="container"> \
    <a href="./index.html" id="siteTitle"><h5>Dashboard</h5></a> \
        <ul id="portalNavbar"> \
            <li><a href="./registration.html" id="registration"><i class="fas fa-users"></i> Registration</a></li> \
        </ul> \
    <button type="button" class="btn btn-sm navbar-toggler" id="navbarToggle"><span class="navbar-toggler-icon"></span></button>  \
    </div> \
    ');

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

function getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');

    for (var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        hash[1] = unescape(hash[1]);
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }

    return vars;
}

// document.addEventListener('DataPageReady', function(event) {
//     $('div[data-cb-name="MultiSelectListBox"]').css('width', '300px');
// });