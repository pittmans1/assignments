var rs = require('readline-sync')
//var starter = require('./starter')

function Player(starter){
    this.name = starter ;
    this.hp = "";
    this.bp = "";
    this.lvl = 3;
    this.exp = 0;
    this.lvlup= 45;
    this.def = "";
   // this.attack [
    //    attack1= ('./starter[0].attack1'),
       // attack2(starter[1]),
        //attack3(starter[2])
   // ];
    this.enemyEliminated = []
    this.inventory=[];
    this.isAlive= true;
}
function Enemy(hp, type, modifier, lvl, bp, expGiven){
    this.hp=hp;
    this.type=type;
    this.modifier= modifier;
    this.lvl=lvl;
    this.bp=bp;
    this.expGiven= expGiven;
    this.isAlive= true;
}
function Money(){
    this.money = 350
}
function RandomNum (n){
    randomNumber = Math.floor(Math.random() * n)
    return parseInt(randomNumber)
}
function checkLvl(){
    if(player.exp >= player.lvlup){
        player.lvl++
        player.hp += Math.round(player.hp * lvl / 5)
        player.lvlup *= 1.13
        console.log( "congrats " + trainer + " your " + starter + " has leveled up!!!" )
    }
}
function lootMoney(enemys){
    loot = []
    itemRoll = RandomNum(175)
    if (enemys.modifier === "legendary"){
        itemRoll += 93
    } else if (enemys.modifier === "rare"){
        itemRoll +=33
    }

    if(itemRoll < 66){
        console.log("sorry " + trainer + " you werent able to collect any money")
    }else if (itemRoll >= 66 && itemRoll <= 99){
        if (itemRoll % 3 === 0){
            cash = Money(money * 2)
            loot.push(cash)
        } 
        return loot
    } else {
        for (i=0; i < RandomNum(5); i++){
            if (RandomNum(17)% 5 === 0 ){
                cash = Money(money * 4.3)
                loot.push(cash)
            } else{
                console.log("you made no profit.")
            }
        }
        return loot
    }

}
enemies= ["dragon", "minotaur","griffin", "fenrir", "imp", "goblin", "bigfoot", "lochness" , "red-robbin", "dolphin" , " salamander"]
function spawn(){
   let mod = Modifiers(RandomNum(100))
    let type = enemies[RandomNum(enemies.length)]
    let lvl = genlvl(mod);
  let hp = genhp(lvl,mod);
    let expGiven = Math.round(2.3 * lvl);
  let  bp= Math.round(2.3 * lvl)
    let def = .75 * lvl;
    var enemy = new Enemy( hp, type, modifier, lvl, bp, expGiven)
    location = false
    combatBattle(enemy, location)
}
function genhp(lvl, modifier){
    base = 20 * lvl / 1.1;
    if (modifier === "common"){
        hp = RandomNum(100)/100 + base
        if (hp < 20){
            hp=20;
        }
    }else if (modifier === "uncommon"){
        hp = RandomNum(100)/100 * (lvl * 1.05) + base
    }else if (modifier === "rare"){
        hp = RandomNum(100)/100 * (lvl * 1.75) + base
    }else if (modifier === "legendary"){
        hp = RandomNum(100)/100 * (lvl *2.25) + base
    }
    return Math.round(hp)
}
function genlvl(modifier){
    lvl = 2;
    if(modifier === "common"){
        lvl = player.lvl
    }else if (modifier === "uncommon"){
        lvl =  1+ player.lvl
    }else if (modifier === "rare"){
        lvl = 2 + player.lvl
    }else if (modifier === "legendary"){
        lvl = 4 + player.lvl
    }
    return lvl;
}
function Modifiers(n){
    modifier = ""
    if (n <=25){
        modifier = "common"
    } else if (n > 25 && n <= 55){
        modifier = "uncommon"
    } else if (n > 55 && n <= 95){
        modifier = "rare"
    }else {
        modifier = "legendary"
    }
    return modifier;
}
//combat section
function eliminatedEnemy(enemys){
    player.enemyEliminated.push(enemys)
    player.exp += enemys.expGiven
    console.log(player.name + " recieved " + enemys.expGiven + " exp")
    checkLvl()
    
}
function playerAttack(enemys, location){
    let move = rs.keyIn("Press \`a\` to choose an attack. \nPress \`r\` to run away!\n",{limit:"ar"})
    if (move === "a"){
        let attack = rs.keyInSelect([starter.attack1, starter.attack2, starter.attack3], " choose an attack!")
        critmodifier = 1
        criticalRoll = RandomNum(100)
        if(criticalRoll > 90){
            console.log(player.name + " got a critical hit" )
            critmodifier = (1 + (RandomNum(10)/10))
        }
        let attackval = parseInt(RandomNum(10)/10 * player.bp * critmodifier)
        damage = attackval - player.def
        if (damage >= 0){
            damage = 0
        }
        console.log(player.name + " attacks for " + damage + "\t(attackval: " + attackval + " damage " + damage + ")\n")
        enemys.hp -= damage;
        if ( enemys.hp <= 0){
            enemys.isAlive = false;
            console.log ("your foe has fainted and is unable to continue")
            eliminatedEnemy(enemys)
        }
        return false
    }   else{
        if (location){
            console.log("you cant flee from legendary location")
        }else {
            runchance= RandomNum(100)
             if(runchance > 45){
                console.log("you got away safely")
                escape(enemys)
             } else{
                console.log("you cannot flee! ")
                 return false
            }
        }

    }
}
function escape(enemys){
    enemys.isAlive= false;
}
function enemyAttacks(enemys){
    if (enemys.isAlive){
        let attackval = 0;
        critmodifier=1;
        criticalRoll= RandomNum(100)
        if(criticalRoll >95){
            console.log(enemys.type + " hit you with a critical hit")
            critmodifier = (1 + (RandomNum(100)/100))
        }attackval = parseInt(RandomNum(100)/100 *enemys.bp * critmodifier)
        damage = attackval - player.def
        if(damage < 0){
            damage=0
        } console.log(enemys.mods + " " + enemys.type + " attacks for "+ damage)
        player.hp -= damage
        if (player.hp <=0){
            player.isAlive=false;
            playerFainted(player)
        }
    }
}
function playerFainted(player){
    console.log(player.name + " has fainted...")
    console.log("enemies defeated: " + player.enemyEliminated.length)
    module.exports.player = player
}
function combatBattle(enemys, location){
    first = false
    let combatroll = RandomNum(150)
    let attackFirst = true;
    console.log("a wild " + enemys.mods + " " + enemys.type  + "!")
    while (player.isAlive && enemys.isAlive){
        if(attackFirst){
            attackFirst=false;
                
            
        }
        console.log(player.name + " hp: " + player.hp)
        console.log( "lvl" + enemys.lvl + " " + enemys.mods + " "  + " hp:" + enemys.hp)
        if (combatroll >= 50){
            first= playerAttack(enemys, location)
            if (enemys.isAlive){
                enemyAttacks(enemys)
            }

        }else {
            enemyAttacks(enemys)
            if(player.isAlive){
                first = playerAttack(enemys, location)
            }
        }
    }
}


//starting main source
var location = ["forest", " ocean", " desert", "beautiful lake","legendary arena", " dark scary cave"]
function spawnlocation(locationType){
    console.clear("you have arrived at " + locationType + " be aware of your surroundings")
    enemysval = RandomNum(12)
    if(enemysval < 7){
        enemysval = 7;
    }
    enemystype = enemies(RandomNum(enemies.length))
    enemylevel= 3;
    for(var i = 0; i <= enemysval;i++){

        if (player.isAlive){
            spawnLocEn(enemylevel, enemystype)
            console.log( "you continue traveling now off too..." + locationType)
        }
    }if (player.isAlive){
        console.log("that was a long day time to move on from " + locationType)
    }
    
}
function spawnEnemy(mods, type){
    mods = Modifiers(mods)
    type= type
    lvl = genlvl(mods)
    hp = genhp(lvl, mods)
    expGiven = 7* lvl;
    bp = 3 * lvl;
    def = 2 * lvl;
    var enemys = new Enemy(hp, type, modifier, lvl, bp, expGiven)
    location = true;
    combatBattle(enemys, location)
}

function genevent(){
    randomnum= RandomNum(150)
    if (randomnum <= 47){
        spawn()
    }if (randomnum > 47 && randomnum < 37 ){
        locationType = location[RandomNum(location.length)]
        var response = rs.keyInYN("You encounter a " + locationType + " Do you wish  to continue trainer?")
        if (response){
            spawnlocation(locationType)
        } else {
            console.log("you turn around and head back")
        }
    }
    else if (randomnum > 77 && randomnum <= 100) {
        console.log("nothing happened oof")
    }
}
function Input(){
    response = ""
    while (response != "w"){
        response = rs.keyIn("press \`w\` to continue traveling in your adventure .. \n Press \`i\` for starter states \n", {limit: "wiq"})
    }if (response === "i"){
        logStatus()
    }
    if (response === "q"){
        player.isAlive = false;
    }
return response;
}
function logStatus(){
    console.log(player.name + " hp: " + player.hp + " lvl: " + player.lvl + " exp: " + player.exp + " nextlvl:" + player.lvlup)
}



starters = [   { name :"phenoix",
type:"fire/flying",
bp: 2,
hp: 27,
def: 3,
attack1: "burning tornado",
attack2: "singed wing",
attack3: "hellfire"
},{name:"narwhal",
type:"water/dark",
bp:2,
hp:23,
def: 4,
attack1:"tsunami",
attack2: "typhoon",
attack3:"iron spear"
},{ name: "spriggan",
type:"grass/fairy",
bp:2,
hp:25,
def: 2,
attack1:"overgrowth",
attack2:"rose-stem grip",
attack3:"hallowing tree slap"
}];
var trainer = rs.question("welcome trainer, my name is professor Pittman. welcome to the world of off brand Pokemon, what is your name trainer? ")
var starter = rs.keyInSelect([starters[0].name, starters[1].name, starters[2].name], " pick one!")
var player = new Player(starter)//rs.keyInSelect("pick one"[starter[0].name, starter[1].name, starter[2].name])
console.log ("well hello there tariner " + trainer + " let's start off with lets get you a starter pokemon")
begin = rs.keyIn("press \`W\` to begin your adventer" , {limit: "w"})
while(player.isAlive){
    Input();
    genevent();
}