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

   

      // select 

       if ( $('.ba-select').length) {
        $('.ba-select').selectpicker();
    }

        


    } catch (e) {
        console.log('Error In script detected');
        console.log('==========================');
        console.error(e);
    }
    // end script 




})