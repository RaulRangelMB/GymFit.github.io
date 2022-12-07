document.addEventListener('DOMContentLoaded', function() {

    body = document.querySelector('body');

    main = body.querySelector('main');

    spans = main.querySelectorAll('span');

    agua_set = (localStorage.getItem('agua_bebida')!=null);

    if (!agua_set){
        spans[1].innerHTML = parseFloat(localStorage.getItem("agua_diaria")).toFixed(3);
        localStorage.setItem("agua_bebida", 0);
    }
    else{
        agua_bebida = localStorage.getItem("agua_bebida");
        spans[0].innerHTML = (agua_bebida).toFixed(3);
        spans[1].innerHTML = parseFloat(localStorage.getItem("agua_diaria") - agua_bebida).toFixed(3);
    }

    if (parseFloat(spans[1].innerHTML) <= 0){
        window.location.href = "telaaguacompleta.html";
    }
})