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
        


    } catch (e) {
        console.log('Error In script detected');
        console.log('==========================');
        console.error(e);
    }
    // end script 




})