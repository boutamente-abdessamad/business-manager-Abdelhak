/****************************************/
/************ Main Scripts **************/
/****************************************/

$(document).ready(() => {


    // start script 
    try {

        /* do your magic here*/

        // show invoice
        $('body').on('click','.ba-invoice-trigger', function (e) {
            e.preventDefault();
            $(this).closest('.ba-invoice-viwer').addClass('in');
        });
        $('body').on('click','.invoice-cart', function (e) {
            e.preventDefault();
             var template  = $('.invoice-form-template').html();
             if ($(this).hasClass('in')) {
                 $(this).closest('.invoices-grid-display-warpper').find('.ba-invoice-form').remove();
                 $(this).closest('.invoices-grid-display-warpper').find('.invoice-cart').removeClass('in');
             }else{
                 $(this).closest('.invoices-grid-display-warpper').find('.ba-invoice-form').remove();
                 $(this).closest('.row').after(template);
                 $(this).closest('.invoices-grid-display-warpper').find('.invoice-cart').removeClass('in');
                 $(this).addClass('in');
             }
              initPlugins();
        });
        // hide invoice
        $('body').on('click', '.ba-invoice-trigger-close',function (e) {
            e.preventDefault();
            $(this).closest('.ba-invoice-viwer').removeClass('in');
        });
        // show filters invoices
        $('.ba-filter-by-trigger').on('click', function (e) {
            e.preventDefault();
            $(this).closest('.datatable-filters-container').toggleClass('ba-filter-by-in');
        });
        // sidebar toggle 
        $('.ba-sidebar-toggle').on('click', function (e) {
            e.preventDefault();
            $('body').toggleClass('ba-sidebar-open');
        });
        // tabs
        $('.ba-cart-menu-tabs>ul>li>a').on('click', function (e) {
            e.preventDefault();
            $(this).closest('li').addClass('active').siblings().removeClass('active');
            let item = '.ba-cart-tab-item'+$(this).closest('li').attr('data-tab');
            $('.ba-cart-body-tabs').find(item).addClass('active').siblings().removeClass('active');
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
        // opiration steps 
        $('body').on('click','.opiration-form-step-trigger', function (e) {
            e.preventDefault();
            $(this).closest('ul>li>a').removeClass('active');
            $('.opiration-form-step-trigger').removeClass('active');
            $(this).addClass('active');
            let step = '.opiration-form-step'+ $(this).attr('data-step');
            $('.opiration-form-steps').find('.opiration-form-step').removeClass('d-block');
            $('.opiration-form-steps').find(step).addClass('d-block');
        });

        


    } catch (e) {
        console.log('Error In script detected');
        console.log('==========================');
        console.error(e);
    }
    // end script 




})