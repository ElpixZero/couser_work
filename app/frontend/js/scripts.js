import Model from './js/model.js';

export default function() {
  const form = document.querySelector('.ege-points_form');
  const sidebar = document.querySelector('.sidebar');
  const overlay = document.querySelector('.overlay');
  const reEnterButton = document.querySelector('.re-enter');
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
    
    console.log(Model('/test', JSON.stringify(formData)));
    
    sidebar.style.display = 'none';   
    reEnterButton.style.display = 'block';
  });

  continueButton.addEventListener('click', function() {
    overlay.style.display = 'none'; 
  })
  
  
  reEnterButton.addEventListener('click', function() {
    reEnterButton.classList.add('reEnter-animation');
    sidebar.style.display = 'block';
    document.documentElement.scrollTop = 0;

    sidebar.classList.add('sidebar-animation');
  })

  reEnterButton.addEventListener('animationend', function() {
    console.log(sidebar.offsetLeft);
    reEnterButton.style.display = 'none';
  });
}

