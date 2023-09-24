let shipHealth = 3;
let shipAmmo = 3;
let targetHealth = 3;

function fireShip() {
    if (shipCanFire()) {
        shipAmmo--;
        if (isHit()) {
            targetHealth--;
            console.log("hit - targetHealth: ", targetHealth)
        }
        else {
            console.log("miss");
        }
    } 
        else {
            reloadShip();
            console.log("reloading, shipHealth: '", shipHealth);

        }
    }

function encounter() {
    console.log("you see a target");
    if (!isDestroyed(targetHealth) && !isDestroyed(shipHealth)) {
        fireShip();
        if (isDestroyed(targetHealth)) {
            console.log("Target eliminated");
        }
        if (isDestroyed(shipHealth)) {
            console.log("Ship Destroyed");
        }
    }
}

function shipCanFire() {
    //return true if the ships health is above 0 and ammo is above 0, otherwise return false
    if (shipHealth > 0 && shipAmmo > 0) {
        return true;
    }
    
}
function isHit() {
    //return true if random number is greater than .5; false if less than .5
    let rdmNum = Math.random();
    if (rdmNum > 0.5) {
        return true;
    }
}

function isDestroyed(health) {
    //return true if health <=0
    if(health <= 0) {
        return true;
    }
}

function reloadShip() {
    //reduce ship health by 1 and increase ammo by 3
    shipHealth--;
    shipAmmo += 3;
}

encounter();