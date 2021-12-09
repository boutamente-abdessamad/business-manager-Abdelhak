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

        


    } catch (e) {
        console.log('Error In script detected');
        console.log('==========================');
        console.error(e);
    }
    // end script 




})