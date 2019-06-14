import View from './js/view.js';

window.onload = function() {
  const form = document.querySelector('.ege-form');
  const sidebar = document.querySelector('.sidebar');
  const reEnterButton = document.querySelector('.re-enter');
  const overlay = document.querySelector('.overlay');
  const resultsDiv = document.querySelector('.universities');
  const continueButton = document.querySelector('.overlay__continue');

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    const tempFormData = new FormData(form);

    let formData = {
      subjectsId: '',
      totalPoints: 0
    };

    for (let key of tempFormData.keys()) {
      if (tempFormData.get(key)) {
        let element = document.querySelector(`input[name=${key}]`).getAttribute('data-id');
        formData.subjectsId += element;
        formData.totalPoints += Number(tempFormData.get(key));
      };
    }

    console.log(JSON.stringify(formData));
    
    fetch('/test', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })  
    .then(response => {  
        if (response.status !== 200) {  
          console.log('Looks like there was a problem. Status Code: ' +  
            response.status);  
          return;  
        }
          return response.json();
      }  
    )
    .then( data => {
      console.log(data);

      if (data.error) {
        resultsDiv.innerHTML = View.render('errorRequest', {
          data
        });

      } else {
        resultsDiv.innerHTML = View.render('universities', {
          list: data
        }); 
      }   
    }) 
    .catch(function(err) {  
      console.log('Fetch Error :-S', err);  
    });
    
    console.log(reEnterButton);
    reEnterButton.classList.add('reEnter-animation-show');   
    // reEnterButton.style.display = 'block';
  })


  continueButton.addEventListener('click', function() {
    overlay.style.display = 'none';
  });
  
  reEnterButton.addEventListener('click', function() {
    reEnterButton.classList.remove('reEnter-animation-show');
    reEnterButton.classList.add('reEnter-animation-hide');

    overlay.style.display = 'block';
    resultsDiv.innerHTML = '';
    document.documentElement.scrollTop = 0;
  })
}

