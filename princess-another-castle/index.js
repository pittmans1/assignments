/*Create a class for a player that has the following properties:

name of type String

totalCoins of type Number

status of type String (options are Powered Up, Big,Small, and Dead)

hasStar of type Boolean (Is a star active?)

setName of type function - Has a parameter called namePicked where you pass in "Mario" or "Luigi". Sets name to "Mario" or "Luigi".

gotHit of type function - this is called whenever the player is hit by an enemy. gotHit() will set the status property accordingly. (Statuses go from "Powered Up" to "Big" to "Small" to "Dead".)

gotPowerup of type function - called when a powerup is received and sets the status accordingly. (Statuses go from "Small" to "Big" to "Powered Up". If you are Powered Up and it hits this function, you get a star)

gameActive of type Boolean, true by default, becomes false when status is Dead

addCoin of function - adds a coin to totalCoins

print of type function - prints to the console the name, totalCoins, status, and star properties. Make sure you make this look nice such as:

Name: Luigi,
Status: Small, etc, etc*/
class Player {
    constructor (totalCoins, status, hasStar, gameActive = true, name = '' ){
        this.totalCoins = totalCoins;
        this.status = status;
        this.hasStar = hasStar;
        this.gameActive = gameActive;
        this.name = name;
    }

    setName(namePicked){
        console.log(`Name Picked: ${namePicked}`)
        this.name = namePicked;
    }

    gotHit(){
        if(this.hasStar){
            console.log("Your Star protected you!");
            this.hasStar = false;
        } else {
            this.status = (this.status === "Powered Up") ? "Big" :
                (this.status === "Big") ? "Small" : this.endGame();
        }
    }

    gotPowerUp(){
        if (this.status === "Powered Up") this.hasStar = true;
        else if (this.status === "Big") this.status = "Powered Up";
        else this.status = "Big";
    }

    addCoin(){this.totalCoins++}

    print(){
        console.log(`\n Name: ${this.name} \n Status: ${this.status} \n Total Coins: ${this.totalCoins}`);
        if (this.hasStar) console.log("You have a Star!");
    }

    endGame(){
        this.gameActive = false;
        console.log("\n Game Over :( \n");
        clearInterval(timer);
    }
}

let player = new Player(0, "Big", false);
player.setName("Luigi");

let timer = setInterval(() => {
    player.print();
    let randomEvent = Math.floor((Math.random() * 3));
    console.log(`Random Event(s): ${randomEvent}`)
    if (randomEvent === 0){
        player.gotHit();
    } else if (randomEvent === 1){
        player.gotPowerUp();
    } else player.addCoin();
}, 1000);