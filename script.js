

// variables for navigation 
var navID = ['part1', 'part2', 'part3', 'part4', 'part5'];
var subID = ['sub1', 'sub2', 'sub3', 'sub4', 'sub5'];
// onject days in a week
var times = {
  'monday': 0,
  'tuesday': 0,
  'wednesday': 0,
  'thursday': 0,
  'friday': 0,
  'saturday': 0,
  'sunday': 0
};

function loading() {
  var year = new Date().getFullYear();
  var option = '';
  for (var i = year; i > 2000; i--)
    option = option + '<option value="' + 'Spring ' + i + '">' + 'Spring ' + i + '</option>' + '<option value="' + 'Summer ' + i + '">' + 'Summer ' + i + '</option>' + '<option value="' + 'Fall ' + i + '">' + 'Fall ' + i + '</option>';
  document.getElementById('semester').innerHTML += option;
  document.getElementById('semester').value = '';
  document.getElementById('degree').value = '';
  document.getElementById('cgrade').value = '';
  document.getElementById('major').value = '';
  var table = document.getElementById('forSchedule');
  for (var i = 7; i <= 22; i++) {
    var row = table.insertRow(table.rows.length);
    row.insertCell(0).innerHTML = '<div Align="center" id="hour" style="background-color:#003300;color:White"><strong>' + i + ':00</strong></div>';
    row.insertCell(1).innerHTML = '<button id ="getHour" type="button" onclick="getTimeSchedule(this,' + i + ',\'monday\');"></button>';
    row.insertCell(2).innerHTML = '<button id ="getHour" type="button" onclick="getTimeSchedule(this,' + i + ',\'tuesday\')"></button>';
    row.insertCell(3).innerHTML = '<button id ="getHour" type="button" onclick="getTimeSchedule(this,' + i + ',\'wednesday\')"></button>';
    row.insertCell(4).innerHTML = '<button id ="getHour" type="button" onclick="getTimeSchedule(this,' + i + ',\'thursday\')"></button>';
    row.insertCell(5).innerHTML = '<button id ="getHour" type="button" onclick="getTimeSchedule(this,' + i + ',\'friday\')"></button>';
    row.insertCell(6).innerHTML = '<button id ="getHour" type="button" onclick="getTimeSchedule(this,' + i + ',\'saturday\')"></button>';
    row.insertCell(7).innerHTML = '<button id ="getHour" type="button" onclick="getTimeSchedule(this,' + i + ',\'sunday\')"></button>';
  }
};

// sumit form collect all info such as fullname, major, degree, id,....
function submitForm(form) {
  location.href = "#";
  location.href = "#" + subID[0];
  var errorStr = '';
  var count = 0;
  var firstname = document.getElementById('firstname');
  var lastname = document.getElementById('lastname');
  var idnumber = document.getElementById('idnumber');
  var degree = document.getElementById('degree');
  var major = document.getElementById('major');
  var other = document.getElementById('other');
  var email = document.getElementById('email');
  var phone = document.getElementById('phone');
  if (!firstname.value) {
    errorStr += 'First Name\n';
    count++;
  }
  if (!lastname.value) {
    errorStr += 'Last Name\n';
    count++;
  }
  if (!idnumber.value) {
    errorStr += 'Student ID Number\n';
    count++;
  }
  if (!degree.value) {
    errorStr += 'Degree\n';
    count++;
  }
  if (!major.value) {
    errorStr += 'Major\n';
    count++;
  }
  if (!email.value) {
    errorStr += 'Email\n';
    count++;
  }
  if (!phone.value) {
    errorStr += 'Phone\n';
    count++;
  }
  if (count == 0) {
    alert("Thank you " + firstname.value + " for submitting the information.");
    return true;
  } else {
    alert('Please complete the following field(s):\n' + errorStr);
    return false;
  }
}

// get time schedule  method
function getTimeSchedule(form, hour, date) {
  if (form.style.backgroundColor == '') {
    form.style.backgroundColor = '#000066';
    times[date] += 1;
  } else {
    form.style.backgroundColor = '';
    times[date] -= 1;
  }
  document.getElementById(date).value = times[date];
};

//direct to school home page when clicking on top logo
function logoClick() {
  window.location.href = "http://gmu.edu";
};

//other option method
function selectOther(select, where) {
  console.log(where);
  if (select.value == 'Other') {
    console.log('Im here');
    document.getElementById(where).style.display = 'block';
  } else
    document.getElementById(where).style.display = 'none';
};

// navigation bar on click
function navClick(index) {
  location.href = "#";
  location.href = "#" + subID[index];
};

//navigation bar on enter
function navEnter(index) {
  document.getElementById(navID[index]).style.backgroundColor = "#606060";
};

//navigation bar on leave
function navLeave(index) {
  document.getElementById(navID[index]).style.backgroundColor = "#282828";
};

//add course method
function addCourse() {
  var errorStr = '';
  var count = 0;
  var cname = document.getElementById('cname');
  var csemester = document.getElementById('semester');
  var cgrade = document.getElementById('cgrade');
  if (cname.value == '') {
    count = count + 1;
    errorStr = errorStr + 'Course Name\n';
  }
  if (csemester.value == '') {
    count = count + 1;
    errorStr = errorStr + 'Semester Taken\n';
  }
  if (cgrade.value == '') {
    count = count + 1;
    errorStr = errorStr + 'Grade\n';
  }
  if (count == 0) {
    var row = document.getElementById('Courses').insertRow(document.getElementById('Courses').rows.length);
    row.onmouseover = function() {
      document.getElementById("Courses").clickedRowIndex = this.rowIndex
    };
    row.innerHTML = "<td>" + document.getElementById('cname').value + "<input type='hidden' name='coursename[]' value='" + document.getElementById('cname').value + "'/></td>" +
      "<td>" + document.getElementById('semester').value + "<input type='hidden' name='semester[]' value='" + document.getElementById('semester').value + "'/></td>" +
      "<td>" + document.getElementById('cgrade').value + "<input type='hidden' name='coursegrade[]' value='" + document.getElementById('cgrade').value + "'/></td>" +
      "<td><i class='fa fa-trash' onclick='deleteCourse()'></i></td>";
    document.getElementById('hiddenCourse').style.display = 'none';
    cname.value = '';
    csemester.value = '';
    cgrade.value = '';
  } else {
    alert('Please complete the following field(s):\n' + errorStr);
  }
};

// remove course method
function deleteCourse() {
  document.getElementById("Courses").deleteRow(document.getElementById("Courses").clickedRowIndex);
  if (document.getElementById('Courses').rows.length == 2)
    document.getElementById('hiddenCourse').style.display = 'table-row';
};

//add job method
function addJob() {
  var original = document.getElementById("work");
  var newJob = original.cloneNode(true);
  newJob.innerHTML += '<button type="button" id = "remove" style="font-size:15px" onclick="removeJob(this)"><i class="fa fa-trash"></i>&nbspRemove</button>';
  original.parentNode.appendChild(newJob);
};

// remove job method
function removeJob(form) {
  console.log(form.parentNode);
  var remove = form.parentNode;
  remove.parentNode.removeChild(remove);
};
