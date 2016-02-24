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
      "location": "Mountain View, CA",
      "dates": "Feb 2014 - Current",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    },
    {
      "employer": "LearnBIG",
      "title": "Software Engineer",
      "location": "Seattle, WA",
      "dates": "May 2013 - Jan 2014",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    },
    {
      "employer": "LEAD Academy Charter High School",
      "title": "Science Teacher",
      "location": "Nashville, TN",
      "dates": "Jul 2012 - May 2013",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    },
    {
      "employer": "Stratford High School",
      "title": "Science Teacher",
      "location": "Nashville, TN",
      "dates": "Jun 2009 - Jun 2012",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    }
  ]
};

var role = "Web Developer";

var formattedRole = HTMLheaderRole.replace("%data%", name); //自定义Role规格化文本
var formattedName = HTMLheaderName.replace("%data%", role);
$("#header").prepend(formattedRole); //jQ插入规格化文本
$("#header").prepend(formattedName);

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
