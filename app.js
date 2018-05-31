new Vue({
    el: '#app',
    data: {
        gameStart: false,
        Log: [],
        playerHealth: 100,
        monsterHealth: 100
    },
    computed:{
        playerAttack: function() {
            var pattack = Math.floor(Math.random()*10);
            this.Log.push(pattack);
            console.log(pattack + " player");
            this.monsterHealth = this.monsterHealth - pattack;
            return pattack
        },
        monsterAttack: function () {
            var mattack = Math.floor(Math.random()*8);
            this.Log.push(mattack);
            console.log(mattack + " monster");
            this.playerHealth = this.playerHealth - mattack;
            return mattack

        },
        playerSpecialAttack: function() {
            var psattack = Math.floor(Math.random()*15);
            this.Log.push(psattack);
            console.log(psattack + " player");
            this.monsterHealth = this.monsterHealth - psattack;
            return psattack
        },
        playerHeal: function () {
            var heal = Math.floor(Math.random()*15);
            var pheal = heal.toString();
            this.Log.push(pheal+" ");
            console.log(pheal + "heal");
            this.playerHealth = this.playerHealth + heal;
            return pheal
        },
        playerBar: function () {
            return this.playerHealth + '%';
        },
        monsterBar: function () {
            return this.monsterHealth + '%';
        }
    },
    watch: {
        playerHealth: function(playerHealth) {
            if (playerHealth <= 0) {
                //confirm('Game is over, you lose');
                if (confirm('Game is over, you lose. Start a new game?')) {
                    this.gameStart = false;
                    this.Log = [];
                    this.playerHealth = this.monsterHealth = 0;
                } else {
                    txt = "mmmmmK, then hit give up when you get bored";
                }

                //something to disable all the buttons except give up
            }
            else if (playerHealth > 100) {
                this.playerHealth = 100;
            }
        },
        monsterHealth: function(monsterHealth) {
            if (monsterHealth <= 0) {
                if (confirm('Game is over, you win! Start a new game?')) {
                    this.gameStart = false;
                    this.Log = [];
                    this.playerHealth = this.monsterHealth = 100;
                } else {
                    txt = "mmmmmK, then hit give up when you get bored";
                }
            }
        }
    }
});