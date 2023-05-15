const ATTACK_VALUE = 10;
const MONSTRE_ATTCK = 14;
const STRONG_ATTACK = 17;
const HEAL_VALUE = 20;

let chosenmaxlife = 100;
let curr_monsterHealth = chosenmaxlife;
let curr_playerHealth = chosenmaxlife;

adjustHealthBars(chosenmaxlife)

function attackHandler() {
    const damage = dealMonsterDamage(ATTACK_VALUE);
    curr_monsterHealth -= damage;
    const playerDamage = dealPlayerDamage(MONSTRE_ATTCK);
    curr_playerHealth -= playerDamage;
    if (curr_monsterHealth <= 0 && curr_playerHealth > 0) {
        alert("YOU Won!");
    }
    else if (curr_playerHealth <= 0 && curr_monsterHealth > 0) {
        alert('YOU LOST!');
    }
    else if(curr_monsterHealth <=0 && curr_playerHealth <=0) {
        alert('you have a draw!')
    }


}

function healHandler(){
    increasePlayerHealth(HEAL_VALUE);
}


attackBtn.addEventListener('click', attackHandler);
healBtn.addEventListener('click', healHandler)