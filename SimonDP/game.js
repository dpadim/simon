var count = 0;
var corarray = [];
var auxarray=[];
nivel = 1;

function inicio() {
    $(document).keydown(function(){
        $(document).off("keydown");

        $("h1").text("NIVEL " + nivel);
        geraRandom();
        man();

    });
  
}






function buttonFlash(cor) {

    $("#" + cor).addClass("pressed");

    var audio = new Audio("sounds/" + cor + ".mp3");
    audio.play();

    setTimeout(function () {
        $("#" + cor).removeClass("pressed");
    }, 600);

}




function man() {


    corvetor = []; //guarda sequencia de clicks

    var enviacor = corvetor[(corvetor.length - 1)];

    buttonFlash(enviacor);


    $(".btn").on("click", function (event) {
        // console.log(event);
        // corVetor=[];
        buttonFlash(event.target.id);
        corvetor.push(event.target.id);
        console.log(corvetor);
 
 
        if (corvetor.length === corarray.length) {

            $(".btn").off("click");
            // corvetor.push(geraRandom());
            var res=verifica(); //verifica se arrays estão iguais.
            // geraRandom();
            if(res==true){
                nivel++;
                setTimeout(function(){
                    $("h1").text("NIVEL " + nivel);
                },600);
                
                geraRandom();
                man();

            } if(res==false) {
                nivel=1;
                $("h1").text("Game Over. Press Any Key to Restart");
                $("body").addClass("game-over");
                var audio = new Audio("sounds/wrong.mp3");
                audio.play();
                setTimeout(function(){
                    $("body").removeClass("game-over");
                },200);

                $(document).keydown(function(){
                    $(document).off("keydown");
                    $("h1").text("NIVEL " + nivel);
                    corvetor=[];
                    corarray=[];
                geraRandom();
                man();

                })
                
            }

        }

    });





}

function geraRandom(aux) {

    var cor;
    var valorRan = Math.random();
    valorRan *= 3;
    valorRan = Math.round(valorRan);


    switch (valorRan) {

        case 0:
            cor = "green";
            break;
        case 1:
            cor = "red";
            break;
        case 2:
            cor = "yellow";
            break;
        case 3:
            cor = "blue";
            break;
    }

    setTimeout(
        function () {
            buttonFlash(cor);
        }, 1000);

    corarray.push(cor);

    // return cor;


}


function verifica(){
    // console.log("deu certo");


for(var i=0;i<corarray.length;i++){
   
   if(corarray[i]!==corvetor[i] ){
    // alert("deu errado");
    nivel=1;
    // inicio();
    return false;
}
if(corarray[corarray.length-1]==corvetor[corarray.length-1]){
    // alert("deu certo");
    // nivel++;
 return true;


}

}


}