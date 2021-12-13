/****************************************/
/************ Instances Scripts **************/
/****************************************/

$(document).ready(() => {


    // start script 
    try {

      // editable links 

    if ($.fn.editable) {
      // $.fn.editable.defaults.mode = 'inline';
       $('.editable-link').editable({
        //  toggle: 'manual'
        mode: 'inline',
      });
    }

    $('.ba-lg-circle-progress').circleProgress({});

   

      // select 

    if ( $('.ba-select').length) {
        $('.ba-select').selectpicker();
    }
    // editor wysiwyg
    var editor = new FroalaEditor('#editor_wysiwyg',{
        codeMirror: false,
         tabSize: 4
    })

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
            columnDefs: [{
                orderable: false,
                className: 'select-checkbox',
                targets: 0,
                checkboxes: {
                    'selectRow': true
                }
            }],
            select: {
                style: 'multi',
                selector: 'td:first-child'
            },
            dom: 'Bfrtip',
            buttons: [
                'selectAll',
                'selectNone'
            ],
            order: [
                [1, 'asc']
            ]
        });
        baDatatable.on('select deselect', function (e, dt, type, indexes) {
          if (type === 'row') {
              // We may use dt instead of timesDataTable to have the freshest data.
              if (dt.rows().count() === dt.rows({
                      selected: true
                  }).count()) {
                  // Deselect all items button.
                  $('#baDataTableCheckAllButton i').attr('class', 'fa fa-check-square');
                  return;
              }

              if (dt.rows({
                      selected: true
                  }).count() === 0) {
                  // Select all items button.
                  $('#baDataTableCheckAllButton i').attr('class', 'fa fa-square');
                  return;
              }

              // Deselect some items button.
              $('#baDataTableCheckAllButton i').attr('class', 'fa fa-minus-square');
          }
      });
      $('#baDataTableCheckAllButton').click(function (e) {
          e.preventDefault();
          if (baDatatable.rows({
                  selected: true
              }).count() > 0) {
              baDatatable.rows().deselect();
              return;
          }

          baDatatable.rows().select();
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
    if (invoicesModelsSlider.length) {
      invoicesModelsSlider.slick({
        focusOnSelect: true,
        slidesToShow: 2,
        dots: false,
        autoplay: false,
        speed: 1000,
        autoplaySpeed: 3000,
        // arrows: false,
        swipe: true,
        prevArrow: $('.invoices-models-prev'),
        nextArrow: $('.invoices-models-next'),
        infinite: true,
        // swipeToSlide: true,
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
     let baColorsSlider = $('.ba-colors-slider');
    if (baColorsSlider.length) {
      baColorsSlider.slick({
        focusOnSelect: true,
        slidesToShow: 7,
        dots: false,
        autoplay: false,
        speed: 1000,
        autoplaySpeed: 3000,
        swipe: true,
        infinite: true,
        prevArrow: $('.colors-slider-prev'),
        nextArrow: $('.colors-slider-next'),
        // swipeToSlide: true,
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