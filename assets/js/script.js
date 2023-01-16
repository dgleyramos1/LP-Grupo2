const email = document.getElementById('cta-email');
const btn = document.getElementById('cta-btn');


btn.addEventListener('click', (e) => {
    e.preventDefault() 
    if(email.value == ''){
        alert("O campo de email precisa ser preenchido!")
      
    }else{
        window.localStorage.setItem('cta', JSON.stringify(email.value))
        email.value = ''
        alert("O seu email foi cadastrado no nosso banco de dados!")
        
    }


    email.value = ''
    return

} )