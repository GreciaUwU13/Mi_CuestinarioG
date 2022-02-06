/*Buenas noches maestra, aquí está el código. no encuentro mi error, pero ya se cómo modificar
la base de datos para añadir y quitar participantes jeje. que tenga linda noche maestra <3*/
class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){ //se crea una lupa que actualiza y sigue los cambios del
       gameState = data.val();//estado de juego
    })

  }

  update(state){ //actualiza el estado del juego desde la báse de datos principal
    database.ref('/').update({
      gameState: state
    });
  }
//función asíncrona 
  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //escribe aquí el código para ocultar los elementos de la pregunta
    question.hide();
    //escribe aquí el código para cambiar el color de fondo 
    background("lightblue");
    //escribe el código para mostrar un encabezado que indique el resultado del Cuestionario
    fill("black");
    textSize(30);
    text("Resultado del Cuestionario", 200, 60);
    //llama aquí a getContestantInfo()
    Contestant.getPlayerInfo();

    //escribe la condición para comprobar si contestantInfor no está indefinido 
    if(allContestants !== undefined){
    //escribe aquí el código para agregar una nota
      fill ("blue");
      textSize(20);
      text("NOTA: ¡El concursante que respondió de forma correcta está resaltado con color verde!");

    //escribe el código para resaltar al concursante que respondió correctamente
    for(var plr in allContestants){
      var correctAns = "2";
      if(correctAns === allContestants[plr].answer)
      fill ("Green")
      else
      fill("red");
    }
   }
  }

}
