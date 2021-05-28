class Game{
    constructor() {}
    getState(){
        var gameref = database.ref("gameState")
        gameref.on("value",function(data){
            gameState=data.val()
        })
    }
    update(state) {
        database.ref("/") .update({
            gameState:state
        })
    }
    async start() {
        if (gameState===0) {
            player=new Player ()
            var playeref = await database.ref("playerCount").once("value")
            if (playeref.exists()) {
                playerCount=playeref.val()
                player.getCount()
            }
            form=new Form()
            form.display()
        }
    }
    play() {
        form.hide()
        textSize(30)
        text("GAME START",120,100)

    }
}