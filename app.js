document.getElementById('loan-form').addEventListener('submit', function (e) {
     
    //hide result

    document.getElementById('results').style.display ='none';

    //showloader
    document.getElementById('loading').style.display= 'block';


    setTimeout(calculatedResults, 2000);
    e.preventDefault();
});




function calculatedResults () {


    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');
    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment= document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');



    const principal=  parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value) / 100 / 12;
    const calculatedPayment= parseFloat(years.value)*12;

    //cal monthly payment

    const x = Math.pow(1 + calculatedInterest, calculatedPayment);

    const monthly = (principal * x * calculatedInterest)/(x-1);


    if (isFinite(monthly)) {



        monthlyPayment.value= monthly.toFixed(2);
        totalPayment.value = (monthly * calculatedPayment).toFixed(2);
        totalInterest.value= ((monthly * calculatedPayment) - principal).toFixed(2);

         //showresult

    document.getElementById('results').style.display ='block';

    //hideloader
    document.getElementById('loading').style.display= 'none';
        
    }  else {

        showError('PLEASE CHECK YOUR INPUTTED VALUES AND TRY AGAIN');
    }

 
 
 
 
}



function showError(error) {
    
    const errDiv = document.createElement('div');
    errDiv.className = 'alert alert-danger';

    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading')

    errDiv.appendChild(document.createTextNode(error));

   card.insertBefore(errDiv, heading);

   setTimeout(clearError, 3000)
   
     //hide result
   document.getElementById('results').style.display ='none';

    //hide loader
    document.getElementById('loading').style.display= 'none';
}


function clearError() {
    
    document.querySelector('.alert').remove();
}

