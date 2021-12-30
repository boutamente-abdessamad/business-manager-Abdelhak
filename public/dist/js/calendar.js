/****************************************/
/************ Full Calendar Scripts **************/
/****************************************/


$(document).ready(() => {


    // start script 
    try {
        // init full calendar
            var calendarEl = document.getElementById('ba_months_calendar');
            console.log('====================================');
            console.log(calendarEl);
            console.log('====================================');
            if (calendarEl) {
                var calendar = new FullCalendar.Calendar(calendarEl, {
                    initialView: 'dayGridMonth'
                });
                calendar.render();
            }

    } catch (e) {
        console.log('Error In script detected');
        console.log('==========================');
        console.error(e);
    }
    // end script 




})