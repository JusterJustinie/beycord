const Beyblade=require("./Beyblade.js");class Deathscyther extends Beyblade{constructor(e,s){super("Deathscyther","Attack","https://i.ibb.co/jTyZXz9/death.png",e,s),this.specials=[{name:"Special",requires:function(e,s,t){return e.sp>3},execute:function(e,s,t){let a=s.hp,i=0;for(var r=0;r<e.lvl;r++)i+=.3;let h=50+i;s.hp=s.hp-h;let n=a-s.hp,c=(new Discord.MessageEmbed).setTitle(`[${e.username}] Deathscyther used **Death Slash**.`).setDescription(`Deathscyther utilized it's Accel driver to enhance speed as it crashed into it's opponent, striking with one of it's scythe shaped blades to deal ${n} damage.`).setColor("#551a8b");t.channel.createMessage({embed:c})}}],this.passives=[{name:"Passive",requires:function(e,s,t){return!1},execute:function(e,s,t){s.hp=s.hp-28;let a=(new Discord.MessageEmbed).setTitle(`Uh oh, [${e.username}] ${e.bey.bbname||e.bey.name} tried to use it's passive ability but it was not set up properly. 28 damage dealt.`).setDescription("Please report this at the support server.").setColor("#551a8b");t.channel.createMessage({embed:a})},cd:180}],this.modes=[],this.sd=0,this.sdchangable=!1,this.aliases=[]}}module.exports=Deathscyther;