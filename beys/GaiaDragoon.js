const Beyblade=require("./Beyblade.js");class GaiaDragoon extends Beyblade{constructor(e,s){super("Gaia Dragoon","Attack","https://vignette.wikia.nocookie.net/beyblade/images/6/64/GD.Ar.Hn%27.png/revision/latest?cb=20190629030824",e,s),this.specials=[{name:"Special",requires:function(e,s,a){return e.sp>3},execute:function(e,s,a){let t=s.hp,i=0;for(var n=0;n<e.lvl;n++)i+=.3;let o=50+i;s.hp=s.hp-o;let r=t-s.hp;s.atk=Math.round(s.atk/100*70);let l=(new Discord.MessageEmbed).setTitle(`[${e.username}] Gaia Dragoon used **Spike Slash**.`).setDescription(`Gaia Dragoon used the free spinning blades on it's layer to block 30% of incoming damage before striking back, the force bolstered by the ball bearings on it's Around disc to deal ${r} damage.`).setColor("#551a8b");a.channel.createMessage({embed:l})}}],this.passives=[{name:"Passive",requires:function(e,s,a){return!1},execute:function(e,s,a){s.hp=s.hp-28;let t=(new Discord.MessageEmbed).setTitle(`Uh oh, [${e.username}] ${e.bey.bbname||e.bey.name} tried to use it's passive ability but it was not set up properly. 28 damage dealt.`).setDescription("Please report this at the support server.").setColor("#551a8b");a.channel.createMessage({embed:t})},cd:180}],this.modes=[],this.sd=0,this.sdchangable=!1,this.aliases=[]}}module.exports=GaiaDragoon;