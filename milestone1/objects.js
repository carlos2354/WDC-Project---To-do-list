User
{
    name: 'Carlos',
    email: 'a1731835@adelaide.edu.au',
    password: encrypted,
    birthday: '01-10-1998',
    phone: 11111111111,
    career_background: 'student',
    
    board_invitations =[ADSA],  //board objects
    boards = [WDC], //board objects
    
    availability =[wdc_availability], //availability objects. availability[0] applies to boards[0] and so on
    task_tags = [wdc_tt],  //task_tag objects
    task_tag_performances = [wdc_ttp],   //task_tag_performance objects. task_tag_performances[0] applies to task_tags[0] and so on.
}

board
{
    name: 'WDC',
    link: 'www.carlosproject.com/4w45ewt2bd',
    manager: Carlos //user object
    employees: [Hunter, Tien], //user object
    join_requests: [Lim],    //user objects
    tasks_tag: WDC_tasks, //task_tag objects
    //different for each date, still have to come up with a calendar system to  
    //differentiate projects below for each day
    projects=[Milestone_1], //project objects
}

project
{
    name:'Milestone 1',
    tasks = [Research, Design, Data_plan]   //task objects
}

task
{
    name: 'Research',
    tag: 'Documentation',    //a value from task_tag object
    person_responsible: [Hunter, Tien], //user objects
    priority = {
        high: Boolean,
        medium: Boolean,
        low: Boolean
    },
    status = {
        complete: Boolean,
        in_progress: Boolean,
        stuck: Boolean
    },
    time: task_duration //duration object
}

task_tag
{
    tasks_tags: ['Documentation', 'Accounting', 'Programming', 'Calculation']
}

task_tag_performance
{
    task_tag_performances: ['Good', 'Average', 'Needs Improvement', 'Good']
}

availability
{
    Sunday: [sunday_morning, sunday_night],     // duration objects
    monday: [monday_morning, monday_night, monday_afternooon],
    tuesday: [tuesday_morning, tuesday_night],
    wednesday: [wednesday_morning, wednesday_night],
    thursday: [ thursday_morning,  thursday_night],
    friday: [friday_morning, friday_night],
    saturday: [ saturday_morning,  saturday_night],
}

duration
{
    start: '8:00',
    end: '13:00'
}



