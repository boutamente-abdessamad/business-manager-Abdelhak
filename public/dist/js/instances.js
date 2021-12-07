/****************************************/
/************ Instances Scripts **************/
/****************************************/

$(document).ready(() => {


    // start script 
    try {

      // select 

    if ( $('.ba-select').length) {
        $('.ba-select').selectpicker();
    }

    // global datatabele 
    if ($(".ba-datatable").length) {
        let baDatatable = $(".ba-datatable").DataTable({
            "paging": false,
            "lengthChange": false,
            "searching": false,
            "ordering": true,
            "info": false,
            "responsive": true,
            "autoWidth": false,
        });
    }
    // daterangepicker
    if ($('.date-range').length) {
        $('.date-range').daterangepicker({
            buttonClasses: "d-none"
        })
    }

    // sliders 
    // invoices-models-slider

     let invoicesModelsSlider = $('.invoices-models-slider');
    if (invoicesModelsSlider) {
      invoicesModelsSlider.slick({
        focusOnSelect: true,
        slidesToShow: 2,
        dots: false,
        autoplay: false,
        speed: 1000,
        autoplaySpeed: 3000,
        arrows: false,
        swipe: true,
        infinite: false,
        swipeToSlide: true,
        // responsive: [{
        //     breakpoint: 1025,
        //     settings: {
        //       slidesToShow: 3,
        //     }
        //   },
        //   {
        //     breakpoint: 769,
        //     settings: {
        //       slidesToShow: 2,
        //     }
        //   },
        //   {
        //     breakpoint: 480,
        //     settings: {
        //       centerMode: true,
        //       slidesToShow: 1,
        //     }
        //   }
        // ]
      });
    }
        


    } catch (e) {
        console.log('Error In script detected');
        console.log('==========================');
        console.error(e);
    }
    // end script 




})