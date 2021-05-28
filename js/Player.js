class Player {
    constructor() {
        this.name=null
        this.distance=0
        this.index=null
    }
    getCount(){
        var countref = database.ref("playerCount")
        countref.on("value",function(data){
            playerCount=data.val()
        })
    }
    updateCount(count) {
        database.ref("/") .update({
            playerCount:count
        })
    }
}