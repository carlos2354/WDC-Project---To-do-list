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

    task_performance =[{
        performance: "Good"
    }, {
        performance: "Great",
    }, {
        performance: "Needs improvement"
    }, {
        performance: "Not set"
    }, {
        performance: "Not set"
    }, {
        performance: "Not set"
    }, {
        performance: "Not set"
    }, {
        performance: "Not set"
    }, {
        performance: "Not set"
    }, {
        performance: "Not set"
    }, {
        performance: "Not set"
    }, {
        performance: "Not set"
    }, {
        performance: "Not set"
    }, {
        performance: "Not set"
    }, {
        performance: "Not set"
    }, {
        performance: "Not set"
    }, {
        performance: "Not set"
    }, {
        performance: "Not set"
    }, {
        performance: "Not set"
    }, {
        performance: "Not set"
    }
    ],

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
    }
},

var board = {
    id: 00000001,
    manager_id: 000001,
    manager_name: "Carlos Atis",
},

var task_tags = ["Cleaning", "Studying", "Research", "Documenting"],

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
    performance: {
        task1: "Good",
        task2: "Great",
        task3: "Great",
        task4: "Not Set",
        task5: "Not Set",
        task6: "Not Set",
        task7: "Not Set",
        task8: "Not Set",
        task9: "Not Set",
        task10: "Not Set",
        task11: "Not Set",
        task12: "Not Set",
        task13: "Not Set",
        task14: "Not Set",
        task15: "Not Set",
        task16: "Not Set",
        task17: "Not Set",
        task18: "Not Set",
        task19: "Not Set",
        task20: "Not Set",
    }
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
    performance: {
        task1: "Good",
        task2: "Great",
        task3: "Great",
        task4: "Not Set",
        task5: "Not Set",
        task6: "Not Set",
        task7: "Not Set",
        task8: "Not Set",
        task9: "Not Set",
        task10: "Not Set",
        task11: "Not Set",
        task12: "Not Set",
        task13: "Not Set",
        task14: "Not Set",
        task15: "Not Set",
        task16: "Not Set",
        task17: "Not Set",
        task18: "Not Set",
        task19: "Not Set",
        task20: "Not Set",
    },
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