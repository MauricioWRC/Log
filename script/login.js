function logar(){
    let nome = document.querySelector('#Nome').value
    let senha = document.querySelector('#Password').value
    
    if(nome == 'adim' && senha == 'adim'){
        alert('Certo')
        location.href = "https://github.com/MauricioWRC"
    }else{
        alert('Errado')
    }
}

