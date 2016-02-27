var bio = {
  "name": "Game Boy A",
  "role": "Web Developer",
  "contacts": {
    "mobile": "0710-XXXX",
    "email": "XXX@XXX",
    "github": "rubygba",
    "location": "China"
  },
  "welcomeMessage": "abc bb bb bb bb bb bla bla bla.",
  "skills": [
    "s1", "s2", "s3", "s4", "s5"
  ],
  "bioPic": "images/fry.jpg"
};

var education = {
  "schools": [
    {
      "name": "Southeastern University",
      "location": "Nanjing",
      "degree": "BA",
      "dates": 2010,
      "url": "http://example.com"
    },
    {
      "name": "Xiang Fan No.3 High School",
    }
  ],
  "skills": [
    {
      "title": "Program Languages",
      "name": ["C++", "JavaScript", "HTML", "CSS"],
      "level": "Familiar"
    }
  ]
};

var work = {
  "jobs": [
    {
      "employer": "Udacity",
      "title": "Course Developer",
      "location": "Udacity, OL",
      "dates": "Feb 2016 - Current",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    }
  ]
};

var projects = {
	"project" : [{
		"title" : "The Hobbit: The Desolation of Smaug ",
		"dates" : "2013",
		"description" : "The dwarves, along with Bilbo Baggins and Gandalf the Grey, continue their quest to reclaim Erebor, their homeland, from Smaug. Bilbo Baggins is in possession of a mysterious and magical ring.",
		"images" : ["images/1.jpg","images/2.jpg","images/3.jpg","images/4.jpg"]
	},
	{
		"title" : "The Hobbit: The Battle of the Five Armies",
		"dates" : "2014",
		"description" : "Bilbo and Company are forced to engage in a war against an array of combatants and keep the Lonely Mountain from falling into the hands of a rising darkness.",
		"images" : ["images/1.jpg","images/2.jpg","images/3.jpg","images/4.jpg"]
	}]
};

bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%",bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%",bio.role); // 自定义Role规格化文本
	var formattedImage = HTMLbioPic.replace("%data%",bio.bioPic);
	var formattedMessage = HTMLWelcomeMsg.replace("%data%",bio.welcomeMessage);

	$("#header").prepend(formattedRole).prepend(formattedName).append(formattedImage,formattedMessage); // jQ插入规格化文本
	$("#header").append(HTMLskillsStart);

	for(skill in bio.skills) {
		var formattedSkills = HTMLskills.replace("%data%",bio.skills[skill]);
		$("#skills").append(formattedSkills);
	}

	for(contact in bio.contacts) {
		var formattedMobile = HTMLmobile.replace("%data%",bio.contacts[contact].mobile);
		var formattedEmail = HTMLemail.replace("%data%",bio.contacts[contact].email);
		var formattedSkype = HTMLcontactGeneric.replace("%contact%","skype").replace("%data%",bio.contacts[contact].skype);
		$("#footerContacts").append(formattedMobile,formattedEmail,formattedSkype);
	}
};

education.display = function() {
	for(school in education.schools) {
		$("#education").append(HTMLschoolStart);

		var formattedName = HTMLschoolName.replace("%data%",education.schools[school].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
		var formattedDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
		var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
		var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[school].majors);
		$(".education-entry:last").append(formattedName + formattedDegree,formattedDates,formattedLocation,formattedMajor);
	}
};

work.display = function() {
  for (job in work.jobs) {
    // create new div for work experience
    $("#workExperience").append(HTMLworkStart);
    // concat employer and title
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);

    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    $(".work-entry:last").append(formattedDates);

    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedDescription);
  }
};

function locationizer(work_obj) {
    var locationArray = [];
    for (job in work_obj.jobs) {
        var newLocation = work_obj.jobs[job].location;
        locationArray.push(newLocation);
    }
  return locationArray;
}
// Did locationizer() work? This line will tell you!
console.log(locationizer(work));

projects.display = function() {
	for (item in projects.project) {
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%",projects.project[item].title);
		var formattedDates = HTMLprojectDates.replace("%data%",projects.project[item].dates);
		var formattedDescription = HTMLprojectDescription.replace("%data%",projects.project[item].description);

		$(".project-entry:last").append(formattedTitle,formattedDates,formattedDescription);
		for (image in projects.project[item].images) {
			var formattedImage = HTMLprojectImage.replace("%data%",projects.project[item].images[image]);
			$(".project-entry:last").append(formattedImage);
		}
	}
};

// start here
bio.display();
education.display();
work.display();
projects.display();

// 大写last name
function inName(name) {
  name = name.trim.split(" ");
  console.log(name);
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

  return name[0] +" "+ name[1];
}
$("#main").append(internationalizeButton);
