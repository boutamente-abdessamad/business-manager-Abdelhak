/****************************************/
/************ Full Calendar Scripts **************/
/****************************************/


$(document).ready(() => {


    // start script 
    try {
        // init full calendar
            var calendarEl = document.getElementById('ba_months_calendar');
          
            if (calendarEl) {
                var calendar = new FullCalendar.Calendar(calendarEl, {
                    initialView: 'dayGridMonth',
                    dayCellDidMount  : function ({el}) {
                      $(el).find('.fc-daygrid-day-frame').append($('.add-event-template').html());
                    },
                    //  eventDidMount   : function ({el}) {
                    //   $(el).closest('.fc-daygrid-day-frame').append('<div class="ba-event-box ba-success-light-bg"> <span class="ba-left-dote-success ba-left-dote"></span><div class="event-content"><h3 class="ba-color-green">3<span>taches</span></h3><p>7.00</p></div></div>')
                    // },
                    eventContent: { html: $('.event-template').html() },
                     events: [
                        {
                        title: 'My Event',
                        start: '2021-12-06',
                         backgroundColor : 'rgba(101, 208, 159, 0.11)',
                         borderColor  : 'rgba(101, 208, 159, 0.11)'
                        }
                        // other events here
                    ],
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