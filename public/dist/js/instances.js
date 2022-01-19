/****************************************/
/************ Instances Scripts **************/
/****************************************/

var initPlugins = function() {
    // editable links 

    if ($.fn.editable) {
        // $.fn.editable.defaults.mode = 'inline';
        $('.editable-link').editable({
            //  toggle: 'manual'
            mode: 'inline',
        });
    }
    // semantic dropdown
    if ($.fn.dropdown) {
        $('.ui.dropdown')
            .dropdown({
                on: 'click'
            });
    }
    // date pieaker 
    // more options 
    // https://bootstrap-datepicker.readthedocs.io/en/latest/options.html
    var datepicker = $('.ba-fc-right-icon-date input').datepicker({
        maxViewMode: 2,
        todayBtn: false,
        language: "fr",
        // locale: "fr",
    }).on('show', function(e) {
        // $('.close-toggle-top-right').show();
    }).on('hide', function(e) {
        // $('.close-toggle-top-right').hide();
    });
    if ($('.btn-date-toggle').length) {
        var datepickerBtn = $('.btn-date-toggle').datepicker({
            maxViewMode: 2,
            todayBtn: false,
            language: "fr",
            // locale: "fr",
        }).on('show', function(e) {
            // $('.close-toggle-top-right').show();
        }).on('hide', function(e) {
            // $('.close-toggle-top-right').hide();
        });
    }

    $('.ba-lg-circle-progress').circleProgress({});



    // select 

    if ($('.ba-select').length) {
        $('.ba-select').selectpicker();
    }
    // editor wysiwyg
    var editor = new FroalaEditor('#editor_wysiwyg', {
            codeMirror: false,
            tabSize: 4
        })
        // editor wysiwyg
    var editor2 = new FroalaEditor('.editor-wysiwyg', {
            codeMirror: false,
            tabSize: 4
        })
        // daterangepicker
    if ($('.date-range').length) {
        $('.date-range').daterangepicker({
            buttonClasses: "d-none"
        })
    }

    // sliders 
    // invoices-models-slider

    let baUploadedDocsSlider = $('.ba-uploaded-docs-slider');
    if (baUploadedDocsSlider.length && !$(baUploadedDocsSlider).hasClass('slick-initialized')) {
        baUploadedDocsSlider.slick({
            focusOnSelect: false,
            slidesToShow: 5,
            dots: false,
            autoplay: false,
            speed: 1000,
            // arrows: false,
            swipe: true,
            prevArrow: $('.side-slider-actions .doc-prev'),
            nextArrow: $('.side-slider-actions .doc-next'),
            infinite: false,
            responsive: [{
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }]
        });
        setTimeout(function() {
                baUploadedDocsSlider.slick('resize');
            }, 500)
            //   baUploadedDocsSlider.show();
    }
    let purchasesInvoicesSlider = $('.purchases-invoices-slider');
    if (purchasesInvoicesSlider.length && !$(purchasesInvoicesSlider).hasClass('slick-initialized')) {
        purchasesInvoicesSlider.slick({
            focusOnSelect: true,
            slidesToShow: 4,
            dots: false,
            autoplay: false,
            variableWidth: true,
            speed: 1000,
            autoplaySpeed: 3000,
            // arrows: false,
            swipe: true,
            prevArrow: $('.side-slider-actions .prev'),
            nextArrow: $('.side-slider-actions .next'),
            infinite: false,
            responsive: [{
                breakpoint: 480,
                settings: {
                    variableWidth: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        });
        purchasesInvoicesSlider.show();
    }
    let suppliersSlider = $('.suppliers-slider');
    if (suppliersSlider.length && !$(suppliersSlider).hasClass('slick-initialized')) {
        suppliersSlider.slick({
            focusOnSelect: true,
            slidesToShow: 4,
            dots: false,
            autoplay: false,
            speed: 1000,
            autoplaySpeed: 3000,
            arrows: true,
            swipe: true,
            prevArrow: $('.side-slider-actions .prev'),
            nextArrow: $('.side-slider-actions .next'),
            infinite: true,
            responsive: [{
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        });
        suppliersSlider.show();
    }
    let invoicesModelsSlider = $('.invoices-models-slider');
    if (invoicesModelsSlider.length && !$(invoicesModelsSlider).hasClass('slick-initialized')) {
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
            responsive: [{
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }]
        });
    }
    let baColorsSlider = $('.ba-colors-slider');
    if (baColorsSlider.length && !$(baColorsSlider).hasClass('slick-initialized')) {
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
        });
    }
    let baPeriodSlider = $('.ba-period-slider');
    if (baPeriodSlider.length && !$(baPeriodSlider).hasClass('slick-initialized')) {
        baPeriodSlider.slick({
            slidesToShow: 1,
            dots: false,
            autoplay: false,
            swipe: true,
            infinite: true,
            prevArrow: $('.ba-period-btn.prev'),
            nextArrow: $('.ba-period-btn.next'),
        });
        baPeriodSlider.show();
    }
}

$(document).ready(() => {


    // start script 
    try {

        // init plugins 
        initPlugins();
        //   resize windows 
        $(window).resize(() => {
            // init plugins 
            initPlugins();
        });
        $(window).on('shown.mdb.modal', function() {
            initPlugins();
        });
        // global datatabele 
        if ($(".ba-datatable").length) {
            let baDatatable = $(".ba-datatable").DataTable({
                "paging": false,
                "lengthChange": false,
                "searching": false,
                "ordering": true,
                "order": [
                    [0, 'desc']
                ],
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
            baDatatable.on('select deselect', function(e, dt, type, indexes) {
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
            $('#baDataTableCheckAllButton').click(function(e) {
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
        if ($(".ba-datatable-row-details").length) {
            let baDatatable = $(".ba-datatable-row-details").DataTable({
                "paging": false,
                "lengthChange": false,
                "searching": false,
                "ordering": false,
                "info": false,
                "order": [
                    [0, 'desc']
                ],
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
            $('.ba-datatable-row-details tbody').on('click', 'td.dt-control', function() {
                var template = $('.invoice-form-template').html();
                var tr = $(this).closest('tr');
                var row = baDatatable.row(tr);

                if (row.child.isShown()) {
                    // This row is already open - close it
                    row.child.hide();
                    tr.removeClass('shown');
                } else {
                    // Open this row
                    // row.find('ts').style({'padding':'0'});
                    row.child(template, 'ba-invoice-form-tr').show();
                    tr.addClass('shown');
                }
                initPlugins();
            });
            baDatatable.on('select deselect', function(e, dt, type, indexes) {
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
            $('#baDataTableCheckAllButton').click(function(e) {
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



        $('.square-date-btn').click(function(e) {
            $(this).toggleClass('in');
            $(this).closest('.show-area').find('.ba-mounths-filter-container').toggleClass('in');
        });





    } catch (e) {
        console.log('Error In script detected');
        console.log('==========================');
        console.error(e);
    }
    // end script 




})