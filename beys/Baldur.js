const Beyblade=require("./Beyblade.js");class Baldur extends Beyblade{constructor(e,t){super("Baldur","Defense","https://media.discordapp.net/attachments/736042245442109441/826656822244147251/image1.png",e,t),this.specials=[{name:"Special",requires:function(e,t,s){return e.sp>3},execute:function(e,t,s){let a=t.hp,r=0;for(var i=0;i<e.lvl;i++)r+=.3;let n=40+r;t.hp=t.hp-n;let o=a-t.hp;t.atk=Math.round(t.atk/100*75);let d=(new Discord.MessageEmbed).setTitle(`[${e.username}] Baldur used **Bumper Barrier**.`).setDescription(`Baldur used it's Bumper disc to block 25% of the opponent's attack damage, the rough design of Bumper and the friction created by the rubber and wide surface of it's Bite tip allowing for a counter attack, dealing ${o} damage!`).setColor("#CFC044");s.channel.createMessage({embed:d})}}],this.passives=[{name:"Passive",requires:function(e,t,s){return!1},execute:function(e,t,s){t.hp=t.hp-28;let a=(new Discord.MessageEmbed).setTitle(`Uh oh, [${e.username}] ${e.bey.bbname||e.bey.name} tried to use it's passive ability but it was not set up properly. 28 damage dealt.`).setDescription("Please report this at the support server.").setColor("#551a8b");s.channel.createMessage({embed:a})},cd:180}],this.modes=[],this.sd=0,this.sdchangable=!1,this.aliases=[]}}module.exports=Baldur;