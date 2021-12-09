/****************************************/
/************ Main Scripts **************/
/****************************************/

$(document).ready(() => {


    // start script 
    try {

        /* do your magic here*/

        // sidebar toggle 
        $('.ba-sidebar-toggle').on('click', function (e) {
            e.preventDefault();
            $('body').toggleClass('ba-sidebar-open');
        });
        // accordion toggle 
        $('.ba-accordion-header').on('click', function (e) {
            e.preventDefault();
            $(this).closest('.invoice-step-acourdion').toggleClass('in');
        });

        


    } catch (e) {
        console.log('Error In script detected');
        console.log('==========================');
        console.error(e);
    }
    // end script 




})