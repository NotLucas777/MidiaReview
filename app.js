document.addEventListener('DOMContentLoaded', () => {
    const darkModeButton = document.getElementById('darkModeButton');
    const userButton = document.getElementById('userButton');
    const body = document.body;
    const header = document.querySelector('header');

    darkModeButton.addEventListener('click', () => {
        document.documentElement.classList.toggle('dark-mode')
    });

    userButton.addEventListener('click', () => {
        alert('Ação do Usuário');
    });
    
    $(".tagfilme").on("click", function(){

        var section = $(this).parents(".conteudo-secao");

        if($(this).hasClass("filme-ativo")){
            $(this).removeClass("filme-ativo");
            section.find(".card").css("display", "flex");
        }
        else{
            $(".tagfilme").removeClass("filme-ativo");
            $(this).addClass("filme-ativo");
    
            var nomeTag = $(this).text();
    
            section.find(".card").each(function(){
                var card = $(this);
                var hasMatchingTag = false;
    
                card.find(".tagfilme").each(function(){
                    var tagFilme = $(this).text();
    
                    if(tagFilme.trim() === nomeTag.trim()){
                        hasMatchingTag = true;
                    }
    
                    if(!hasMatchingTag){
                        card.css("display", "none");
                    } else {
                        card.css("display", "flex");
                    }
    
                });
            });
        }
    });

    $(".tagseries").on("click", function(){

        var section = $(this).parents(".conteudo-secao");

        if($(this).hasClass("serie-ativo")){
            $(this).removeClass("serie-ativo");
            section.find(".card").css("display", "flex");
        }
        else{
            $(".tagseries").removeClass("serie-ativo");
            $(this).addClass("serie-ativo");
    
            var nomeTag = $(this).text();
    
            section.find(".card").each(function(){
                var card = $(this);
                var hasMatchingTag = false;
    
                card.find(".tagseries").each(function(){
                    var tagSerie = $(this).text();
    
                    if(tagSerie.trim() === nomeTag.trim()){
                        hasMatchingTag = true;
                    }
    
                    if(!hasMatchingTag){
                        card.css("display", "none");
                    } else {
                        card.css("display", "flex");
                    }
    
                });
            });
        }
    });

    $(".taganime").on("click", function(){

        var section = $(this).parents(".conteudo-secao");

        if($(this).hasClass("anime-ativo")){
            $(this).removeClass("anime-ativo");
            section.find(".card").css("display", "flex");
        }
        else{
            $(".taganime").removeClass("anime-ativo");
            $(this).addClass("anime-ativo");
    
            var nomeTag = $(this).text();
    
            section.find(".card").each(function(){
                var card = $(this);
                var hasMatchingTag = false;
    
                card.find(".taganime").each(function(){
                    var tagAnime = $(this).text();
    
                    if(tagAnime.trim() === nomeTag.trim()){
                        hasMatchingTag = true;
                    }
    
                    if(!hasMatchingTag){
                        card.css("display", "none");
                    } else {
                        card.css("display", "flex");
                    }
    
                });
            });
        }
    });

    $(".tagjogos").on("click", function(){

        var section = $(this).parents(".conteudo-secao");

        if($(this).hasClass("jogos-ativo")){
            $(this).removeClass("jogos-ativo");
            section.find(".card").css("display", "flex");
        }
        else{
            $(".tagjogos").removeClass("jogos-ativo");
            $(this).addClass("jogos-ativo");
    
            var nomeTag = $(this).text();
    
            section.find(".card").each(function(){
                var card = $(this);
                var hasMatchingTag = false;
    
                card.find(".tagjogos").each(function(){
                    var tagJogos = $(this).text();
    
                    if(tagJogos.trim() === nomeTag.trim()){
                        hasMatchingTag = true;
                    }
    
                    if(!hasMatchingTag){
                        card.css("display", "none");
                    } else {
                        card.css("display", "flex");
                    }
    
                });
            });
        }
    });

});