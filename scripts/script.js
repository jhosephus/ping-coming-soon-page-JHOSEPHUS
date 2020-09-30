function notifyButton_onclick() {

    if (checkEmail()){
        console.log('OK');
        document.getElementById('notify').style.display = 'none';
        document.getElementById('input-email').style.borderColor = 'initial';
    }
    else{
        console.log('NOT VALID');
        document.getElementById('notify').style.display = 'unset';
        document.getElementById('input-email').style.borderColor = 'hsl(354, 100%, 66%)';
    }
}

function checkEmail(){
    var input = document.getElementById('input-email').value;
    var isEmail = false;

    // Check if there is @
    if (input.indexOf('@') != -1){
        //Check if there is only one @
        if (input.indexOf('@') == input.lastIndexOf('@')){

            // Check if there is .
            if (input.indexOf('.') != -1){
                //Check if there is only one .
                if (input.indexOf('.') == input.lastIndexOf('.')){

                    //Check space for doamin: i.e 'gmail'
                    if ( (input.indexOf('.') - input.indexOf('@')) > 4){
                        //Check ends in .com
                        if ( (input.length - input.indexOf('.com')) == 4){
                            return true;
                        }
                    }
                    
                }
            }
        }
    }
    return false;
}