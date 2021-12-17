/****************************************/
/************ Main Scripts **************/
/****************************************/

$(document).ready(() => {


    // start script 
    try {

        /* do your magic here*/

        // show invoice
        $('.ba-invoice-trigger').on('click', function (e) {
            e.preventDefault();
            $(this).closest('.ba-invoice-viwer').addClass('in');
        });
        // hide invoice
        $('.ba-invoice-trigger-close').on('click', function (e) {
            e.preventDefault();
            $(this).closest('.ba-invoice-viwer').removeClass('in');
        });
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
        // accordion toggle 
        $('.ba-invoice-pay-toggle').on('click', function (e) {
            e.preventDefault();
            $(this).closest('.ba-invoice-payment-status-panel').toggleClass('in');
            if ($(this).closest('.ba-invoice-payment-status-panel').hasClass('in')) {
                $(this).find('p').text('Cacher');
            }else{
                $(this).find('p').text('Voir l\'historique');
            }
                

        });

        


    } catch (e) {
        console.log('Error In script detected');
        console.log('==========================');
        console.error(e);
    }
    // end script 




})