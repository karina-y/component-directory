import ViewAllTasks from '../components/ManageTasks/ViewAllTasks'

const Data = {
  People: {},
  Items: {},
  Images: {}
};

const BASE = [
  {
	picture: "http://www.ronswansongrill.com/images/ron-bbq.jpg",
	given_name: "Ron",
	family_name: "Swanson",
	'custom:job_title': "Professional Griller",
	'custom:schedule': "Whenever I Damn Well Please",
	email: "ronswanson@Pawnee.gov",
	phone_number:"(818) 123-1234",
	locale: "Pawnee, IN"
  },
  {
	picture: "https://mediaproxy.salon.com/width/972/https://media.salon.com/2012/11/knope_campaign_rect.jpg",
	given_name: "Leslie",
	family_name: "Knope",
	'custom:job_title': "Deputy Director",
	'custom:schedule': "All day errday",
	email: "leslieknope@Pawnee.gov",
	phone_number:"(818) 123-1234",
	locale: "Pawnee, IN"
  },
  {
	picture: "https://cdn.shopify.com/s/files/1/0094/8142/0858/products/tomhead2_720x.png?v=1564497223",
	given_name: "Tom",
	family_name: "Haverford",
	'custom:job_title': "Administrator",
	'custom:schedule': "9-5pm M-F",
	email: "tomhaverford@Pawnee.gov",
	phone_number:"(818) 123-1234",
	locale: "Pawnee, IN"
  },
  {
	picture: "https://vignette.wikia.nocookie.net/characters/images/6/6f/April_Ludgate.JPG/revision/latest?cb=20170707011218",
	given_name: "April",
	family_name: "Ludgate",
	'custom:job_title': "Asst. to Ron Swanson",
	'custom:schedule': "sometimes",
	email: "aprilludgate@Pawnee.gov",
	phone_number:"(818) 123-1234",
	locale: "Pawnee, IN"
  },
  {
	picture: "https://i2.wp.com/27.media.tumblr.com/tumblr_m039wpRS3H1roujg8o1_500.png",
	given_name: "Donna",
	family_name: "Meagle",
	'custom:job_title': "Permits Secretary",
	'custom:schedule': "9-5 M-F",
	email: "donnameagle@Pawnee.gov",
	phone_number:"(818) 123-1234",
	locale: "Pawnee, IN"
  },
  {
	picture: "https://cdn.theatlantic.com/assets/media/img/mt/2015/02/jerry_pie/lead_720_405.png?mod=1533691730",
	given_name: "Jerry",
	family_name: "Gergich",
	'custom:job_title': "Office Manager",
	'custom:schedule': "9-5 M-F",
	email: "jerrygergich@Pawnee.gov",
	phone_number:"(818) 123-1234",
	locale: "Pawnee, IN"
  },
  {
	picture: "https://img.buzzfeed.com/buzzfeed-static/static/2014-07/31/11/campaign_images/webdr09/25-signs-youre-actually-andy-dwyer-from-parks-and-2-32741-1406822103-2_dblbig.jpg",
	given_name: "Andy",
	family_name: "Dwyer",
	'custom:job_title': "Asst. to Leslie Knope",
	'custom:schedule': "9-5 M-F",
	email: "andydwyer@Pawnee.gov",
	phone_number:"(818) 123-1234",
	locale: "Pawnee, IN"
  },
];

const EXTENDED = [
  {
	picture: "http://www.ronswansongrill.com/images/ron-bbq.jpg",
	fname: "Ron",
	lname: "Swanson",
	jobTitle: "Professional Griller",
	schedule: "Whenever I Damn Well Please",
	desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
	email: "ronswanson@Pawnee.gov",
	phone:"(818) 123-1234",
	locale: "Pawnee, IN",
	hover: "lily"
  },
  {
	picture: "https://mediaproxy.salon.com/width/972/https://media.salon.com/2012/11/knope_campaign_rect.jpg",
	fname: "Leslie",
	lname: "Knope",
	jobTitle: "Deputy Director",
	schedule: "All day errday",
	desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
	email: "leslieknope@Pawnee.gov",
	phone:"(818) 123-1234",
	locale: "Pawnee, IN",
	hover: "sadie"
  },
  {
	picture: "https://cdn.shopify.com/s/files/1/0094/8142/0858/products/tomhead2_720x.png?v=1564497223",
	fname: "Tom",
	lname: "Haverford",
	jobTitle: "Administrator",
	schedule: "9-5pm M-F",
	desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
	email: "tomhaverford@Pawnee.gov",
	phone:"(818) 123-1234",
	locale: "Pawnee, IN",
	hover: "honey"
  },
  {
	picture: "https://vignette.wikia.nocookie.net/characters/images/6/6f/April_Ludgate.JPG/revision/latest?cb=20170707011218",
	fname: "April",
	lname: "Ludgate",
	jobTitle: "Asst. to Ron Swanson",
	schedule: "sometimes",
	desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
	email: "aprilludgate@Pawnee.gov",
	phone:"(818) 123-1234",
	locale: "Pawnee, IN",
	hover: "layla"
  },
  {
	picture: "https://i2.wp.com/27.media.tumblr.com/tumblr_m039wpRS3H1roujg8o1_500.png",
	fname: "Donna",
	lname: "Meagle",
	jobTitle: "Permits Secretary",
	schedule: "9-5 M-F",
	desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
	email: "donnameagle@Pawnee.gov",
	phone:"(818) 123-1234",
	locale: "Pawnee, IN",
	hover: "zoe"
  },
  {
	picture: "https://cdn.theatlantic.com/assets/media/img/mt/2015/02/jerry_pie/lead_720_405.png?mod=1533691730",
	fname: "Jerry",
	lname: "Gergich",
	jobTitle: "Office Manager",
	schedule: "9-5 M-F",
	desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
	email: "jerrygergich@Pawnee.gov",
	phone:"(818) 123-1234",
	locale: "Pawnee, IN",
	hover: "oscar"
  },
  {
	picture: "https://img.buzzfeed.com/buzzfeed-static/static/2014-07/31/11/campaign_images/webdr09/25-signs-youre-actually-andy-dwyer-from-parks-and-2-32741-1406822103-2_dblbig.jpg",
	fname: "Andy",
	lname: "Dwyer",
	jobTitle: "Asst. to Leslie Knope",
	schedule: "9-5 M-F",
	desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
	email: "andydwyer@Pawnee.gov",
	phone:"(818) 123-1234",
	locale: "Pawnee, IN",
	hover: "marley"
  },
  {
	picture: "http://www.ronswansongrill.com/images/ron-bbq.jpg",
	fname: "Ron",
	lname: "Swanson",
	jobTitle: "Professional Griller",
	schedule: "Whenever I Damn Well Please",
	desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
	email: "ronswanson@Pawnee.gov",
	phone:"(818) 123-1234",
	locale: "Pawnee, IN",
	hover: "ruby"
  },
  {
	picture: "https://mediaproxy.salon.com/width/972/https://media.salon.com/2012/11/knope_campaign_rect.jpg",
	fname: "Leslie",
	lname: "Knope",
	jobTitle: "Deputy Director",
	schedule: "All day errday",
	desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
	email: "leslieknope@Pawnee.gov",
	phone:"(818) 123-1234",
	locale: "Pawnee, IN",
	hover: "roxy"
  },
  {
	picture: "https://cdn.shopify.com/s/files/1/0094/8142/0858/products/tomhead2_720x.png?v=1564497223",
	fname: "Tom",
	lname: "Haverford",
	jobTitle: "Administrator",
	schedule: "9-5pm M-F",
	desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
	email: "tomhaverford@Pawnee.gov",
	phone:"(818) 123-1234",
	locale: "Pawnee, IN",
	hover: "bubba"
  },
  {
	picture: "https://vignette.wikia.nocookie.net/characters/images/6/6f/April_Ludgate.JPG/revision/latest?cb=20170707011218",
	fname: "April",
	lname: "Ludgate",
	jobTitle: "Asst. to Ron Swanson",
	schedule: "sometimes",
	desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
	email: "aprilludgate@Pawnee.gov",
	phone:"(818) 123-1234",
	locale: "Pawnee, IN",
	hover: "romeo"
  },
  {
	picture: "https://i2.wp.com/27.media.tumblr.com/tumblr_m039wpRS3H1roujg8o1_500.png",
	fname: "Donna",
	lname: "Meagle",
	jobTitle: "Permits Secretary",
	schedule: "9-5 M-F",
	desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
	email: "donnameagle@Pawnee.gov",
	phone:"(818) 123-1234",
	locale: "Pawnee, IN",
	hover: "dexter"
  },
  {
	picture: "https://cdn.theatlantic.com/assets/media/img/mt/2015/02/jerry_pie/lead_720_405.png?mod=1533691730",
	fname: "Jerry",
	lname: "Gergich",
	jobTitle: "Office Manager",
	schedule: "9-5 M-F",
	desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
	email: "jerrygergich@Pawnee.gov",
	phone:"(818) 123-1234",
	locale: "Pawnee, IN",
	hover: "sarah"
  },
  {
	picture: "https://img.buzzfeed.com/buzzfeed-static/static/2014-07/31/11/campaign_images/webdr09/25-signs-youre-actually-andy-dwyer-from-parks-and-2-32741-1406822103-2_dblbig.jpg",
	fname: "Andy",
	lname: "Dwyer",
	jobTitle: "Asst. to Leslie Knope",
	schedule: "9-5 M-F",
	desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
	email: "andydwyer@Pawnee.gov",
	phone:"(818) 123-1234",
	locale: "Pawnee, IN",
	hover: "chico"
  },
  {
	picture: "http://www.ronswansongrill.com/images/ron-bbq.jpg",
	fname: "Ron",
	lname: "Swanson",
	jobTitle: "Professional Griller",
	schedule: "Whenever I Damn Well Please",
	desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
	email: "ronswanson@Pawnee.gov",
	phone:"(818) 123-1234",
	locale: "Pawnee, IN",
	hover: "milo"
  },
];

const CURRENT_USER = {
  username: 'karinafullstack@gmail.com',
  userId: 1,
  attributes: {
    given_name: "Karina",
	family_name: "Yeznaian",
	'custom:job_title': "Director of Software Engineering"
  }
};

Data.People.BASE = BASE;
Data.People.EXTENDED = EXTENDED;
Data.People.CURRENT_USER = CURRENT_USER;


const BLOGS = [
  {
    blogId: 1,
	userId: 1,
	htmlContent: "<h1>Hello I'm a Title</h1>",
	title: "Blog Title Here",
	image: [],
	active:  false,
	scheduledFor: 1572574776132,
	draft: true,
	createdAt: 1572574474207,
  },
  {
    blogId: 2,
	userId: 1,
	htmlContent: "<b>YO!</b>",
	title: "Blog Title Here 2",
	image: [],
	active:  true,
	draft: false,
	createdAt: 1572574474207,
  },
  {
    blogId: 3,
	userId: 2,
	htmlContent: "<h1>Hello I'm a Title</h1>",
	title: "Blog Title Here",
	image: [],
	active:  false,
	scheduledFor: 1572574776132,
	draft: true,
	createdAt: 1572574474207,
  },
  {
    blogId: 4,
	userId: 3,
	htmlContent: "<h1>Hello I'm a Title</h1>",
	title: "Blog Title Here",
	image: [],
	active:  false,
	scheduledFor: 1572574776132,
	draft: true,
	createdAt: 1572574474207,
  },
];

const CAREERS = [
  {
    careerId: 1,
	userId: 1,
	htmlContent: "<h1>we're hiring a developer</h1>",
	title: "Developer for Hire",
	image: [],
	active:  false,
	scheduledFor: 1572574776132,
	draft: true,
	createdAt: 1572574474207,
  },
  {
	careerId: 2,
	userId: 1,
	htmlContent: "<b>YO!</b>",
	title: "Career Title Here 2",
	image: [],
	active:  true,
	draft: false,
	createdAt: 1572574474207,
  },
  {
	careerId: 3,
	userId: 2,
	htmlContent: "<h1>Hello I'm a Title</h1>",
	title: "Career Title Here",
	image: [],
	active:  false,
	scheduledFor: 1572574776132,
	draft: true,
	createdAt: 1572574474207,
  },
  {
	careerId: 4,
	userId: 3,
	htmlContent: "<h1>Hello I'm a Title</h1>",
	title: "Career Title Here",
	image: [],
	active:  false,
	scheduledFor: 1572574776132,
	draft: true,
	createdAt: 1572574474207,
  },
];

const TASKS = [
  {
    taskId: 1,
	createdBy: 1,
	assignedTo: 1,
	title: "get shit done",
	content: "content here",
	notes: "notes here",
	inProgress:  false,
	complete: true,
	urgent: true,
	dueDate: 1572574776132,
	createdAt: 1572574474207,
  },
  {
	taskId: 2,
	createdBy: 2,
	assignedTo: 1,
	title: "task Title Here 2",
	content: "Content Here 2",
	notes: "task notes 2",
	inProgress:  true,
	complete: false,
	urgent: false,
	createdAt: 1572574474207,
  },
  {
	taskId: 3,
	createdBy: 1,
	assignedTo: 2,
	title: "task Title Here",
	content: "task content",
	notes: "task notes",
	inProgress:  false,
	complete: false,
	urgent: false,
	dueDate: "Fri Nov 08 2099",
	createdAt: 1572574474207,
  },
  {
	taskId: 4,
	createdBy: 1,
	assignedTo: 2,
	title: "task Title Here",
	content: "task content",
	notes: "task notes",
	inProgress:  false,
	complete: false,
	urgent: true,
	dueDate: 1572574776132,
	createdAt: 1572574474207,
  },
];

Data.Items.BLOGS = BLOGS;
Data.Items.CAREERS = CAREERS;
Data.Items.TASKS = TASKS;

const NOEXT = [
  {image: "angelslanding", title: "Angels Landing"},
  {image: "badwater", title: "Badwater Salt Flats"},
  {image: "bentonite", title: "Bentonite Hills"},
  {image: "bryce", title: "Bryce Canyon"},
  {image: "bryce_2", title: "Bryce Canyon"},
  {image: "care", title: "Capitol Reef"},
  {image: "care_2", title: "Capitol Reef"},
  {image: "cave", title: "Craters of the Moon"},
  {image: "cebr", title: "Cedar Breaks"},
  {image: "crmo", title: "Craters of the Moon"},
  {image: "mosaic", title: "Death Valley"},
  {image: "nabr", title: "Natural Bridges"},
  {image: "tetons", title: "Grand Teton"},
  {image: "ubehebe", title: "Ubehebe Crater"},
  {image: "yell_01", title: "Yellowstone"},
  {image: "yell_02", title: "Yellowstone"},
  {image: "yell_03", title: "Yellowstone"},
  {image: "zion", title: "Zion"},
];

Data.Images.NOEXT = NOEXT;

export default Data;
