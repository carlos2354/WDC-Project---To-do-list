var user = {
    id: 000001,
    name: "Carlos Atis",
    email: "carlos.atis154@gmail.com",
    birthday: "Oct 1, 1998",
    phone: 0469863752,
    background: "student",
    isManager: false,
    boards: [{
        name: "WDC",
        id: 0000001
    }, {
        name: "ADSA",
        id: 0000002
    }, {
        name: "ADDS",
        id: 0000003
    }, {
        name: "PP",
        id: 0000004
    }, {
        name: "FHN",
        id: 0000005
    }],
},

var board = {
    id: 00000001,
    manager_id: 000001,
    manager_name: "Carlos Atis",
},

var task_tags = ["Cleaning", "Studying", "Research", "Documenting"],

//below objects are if employee
var task_performance = ["Good",
    "Great",
    "Unsatisfactory",
    "Not Set",
    "Not Set",
    "Not Set",
    "Not Set",
    "Not Set",
    "Not Set",
    "Not Set",
    "Not Set",
    "Not Set",
    "Not Set",
    "Not Set",
    "Not Set",
    "Not Set",
    "Not Set",
    "Not Set",
    "Not Set",
    "Not Set",
],

var availability = {
    mon_s: "0800",
    mon_e: "2000",
    tue_s: "0800",
    tue_e: "2000",
    wed_s: "0800",
    wed_e: "2000",
    thu_s: "0800",
    thu_e: "2000",
    fri_s: "0800",
    fri_e: "2000",
    sat_s: "0000",
    sat_e: "2000",
    sun_s: "0000",
    sun_e: "2000"
}


var members = [{
    name: "Carlos Atis",
    image: "somesource",
    availability: {
        mon_s: "0800",
        mon_e: "2000",
        tue_s: "0800",
        tue_e: "2000",
        wed_s: "0800",
        wed_e: "2000",
        thu_s: "0800",
        thu_e: "2000",
        fri_s: "0800",
        fri_e: "2000",
        sat_s: "0000",
        sat_e: "2000",
        sun_s: "0000",
        sun_e: "2000"
    },
    task_performance =["Good",
        "Great",
        "Unsatisfactory",
        "Not Set",
        "Not Set",
        "Not Set",
        "Not Set",
        "Not Set",
        "Not Set",
        "Not Set",
        "Not Set",
        "Not Set",
        "Not Set",
        "Not Set",
        "Not Set",
        "Not Set",
        "Not Set",
        "Not Set",
        "Not Set",
        "Not Set",      //15 length
    ]
},

{
    name: "Huatao Dong",
    image: "somesource",
    availability: {
        mon_s: "0800",
        mon_e: "2000",
        tue_s: "0800",
        tue_e: "2000",
        wed_s: "0800",
        wed_e: "2000",
        thu_s: "0800",
        thu_e: "2000",
        fri_s: "0800",
        fri_e: "2000",
        sat_s: "0000",
        sat_e: "2000",
        sun_s: "0000",
        sun_e: "2000"
    },
    task_performance =["Good",
        "Great",
        "Unsatisfactory",
        "Not Set",
        "Not Set",
        "Not Set",
        "Not Set",
        "Not Set",
        "Not Set",
        "Not Set",
        "Not Set",
        "Not Set",
        "Not Set",
        "Not Set",
        "Not Set",
        "Not Set",
        "Not Set",
        "Not Set",
        "Not Set",
        "Not Set", //15 length
    ],
}]

var tasks = [{
    ticket: 1,
    task_name: "Research",
    task_tag: "Study",
    time: "08:00 - 20:00",
    status: "Complete",
    person: ["Carlos", "Hunter"],
    priority: "high"
}, {
    ticket: 2,
    task_name: "Watering plants",
    task_tag: "Gardening",
    time: "19:00 - 20:00",
    status: "Complete",
    person: ["Ofel"],
    priority: "medium"
}]