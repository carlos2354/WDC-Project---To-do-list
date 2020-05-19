    Object example(use a restaurant as an example)

    Manager 
    {
        email_address: 'hunterbiu1205@gamail.com',
        name: 'Huatao Dong'
        Staff:
        {
            Staff1: Tim, //user objects
            Staff2: Bob, 
            And so on…
        }

        Schedules: [schedule1, schedule2, schedule3] //schedule objects
    }

    Users
    {
        email_address: 'a1731835@adelaide.edu.au',
        first_name: 'Carlos',
        last_name: 'Atis'
        DOB: date_object,
        mobile_number: 114444444,
        password: encrypted,

        Schedules: [schedule1, schedule2, schedule3] //schedule objects
        Preferences:[preference1, preference2, preference3] //preference object. preference 1 refers to preferences for schedule 1
    }

    Schedule
    {
        Manager: Huatao_Dong //manager object
        Users: [Tim, Bob] //user objects
        Task_types:['Cooking', 'Waiting'],
        Tasks: [Task1, Task2, Task3] //task objects

    }

    Tasks
    {
        name: 'Cooking lunch',
        type:'Cooking',
        person: [Carlos, Hunter], //user objects
        date: date_object,
        time:'9:00 am - 10:00 am',
        finished: 'true'
    }

    Preferences
    {
        availability:
        {
            Monday: “8: 00am - 9: 00pm”
            Thusday: “10: 00 - 9: 00pm”
            Friday: “12: 00am - 8: 00pm”
        }

        tasks:
        {
            Task1: 'True',
            Task2: 'True',
            Task3: 'False'
        }
    }
