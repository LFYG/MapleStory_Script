importPackage(net.sf.odinms.client);
var text;
var fee;
var ttt ="#fUI/UIWindow/Quest/icon3/6#";//"+ttt+"//����Բ
var ttt2 ="#fUI/UIWindow/Quest/icon5/1#";//"+ttt2+"//����New
var status = 0;
var music = Array("Bgm00/SleepyWood", "Bgm00/FloralLife", "Bgm00/GoPicnic", "Bgm00/Nightmare", "Bgm00/RestNPeace",
"Bgm01/AncientMove", "Bgm01/MoonlightShadow", "Bgm01/WhereTheBarlogFrom", "Bgm01/CavaBien", "Bgm01/HighlandStar", "Bgm01/BadGuys",
"Bgm02/MissingYou", "Bgm02/WhenTheMorningComes", "Bgm02/EvilEyes", "Bgm02/JungleBook", "Bgm02/AboveTheTreetops",
"Bgm03/Subway", "Bgm03/Elfwood", "Bgm03/BlueSky", "Bgm03/Beachway", "Bgm03/SnowyVillage",
"Bgm04/PlayWithMe", "Bgm04/WhiteChristmas", "Bgm04/UponTheSky", "Bgm04/ArabPirate", "Bgm04/Shinin'Harbor", "Bgm04/WarmRegard",
"Bgm05/WolfWood", "Bgm05/DownToTheCave", "Bgm05/AbandonedMine", "Bgm05/MineQuest", "Bgm05/HellGate",
"Bgm06/FinalFight", "Bgm06/WelcomeToTheHell", "Bgm06/ComeWithMe", "Bgm06/FlyingInABlueDream", "Bgm06/FantasticThinking",
"Bgm07/WaltzForWork", "Bgm07/WhereverYouAre", "Bgm07/FunnyTimeMaker", "Bgm07/HighEnough", "Bgm07/Fantasia",
"Bgm08/LetsMarch", "Bgm08/ForTheGlory", "Bgm08/FindingForest", "Bgm08/LetsHuntAliens", "Bgm08/PlotOfPixie",
"Bgm09/DarkShadow", "Bgm09/TheyMenacingYou", "Bgm09/FairyTale", "Bgm09/FairyTalediffvers", "Bgm09/TimeAttack",
"Bgm10/Timeless", "Bgm10/TimelessB", "Bgm10/BizarreTales", "Bgm10/TheWayGrotesque", "Bgm10/Eregos",
"Bgm11/BlueWorld", "Bgm11/Aquarium", "Bgm11/ShiningSea", "Bgm11/DownTown", "Bgm11/DarkMountain",
"Bgm12/AquaCave", "Bgm12/DeepSee", "Bgm12/WaterWay", "Bgm12/AcientRemain", "Bgm12/RuinCastle", "Bgm12/Dispute",
"Bgm13/CokeTown", "Bgm13/Leafre", "Bgm13/Minar'sDream", "Bgm13/AcientForest", "Bgm13/TowerOfGoddess",
"Bgm14/DragonLoad", "Bgm14/HonTale", "Bgm14/CaveOfHontale", "Bgm14/DragonNest", "Bgm14/Ariant", "Bgm14/HotDesert",
"Bgm15/MureungHill", "Bgm15/MureungForest", "Bgm15/WhiteHerb", "Bgm15/Pirate", "Bgm15/SunsetDesert",
"BgmEvent/FunnyRabbit", "BgmEvent/FunnyRabbitFaster",
"BgmGL/amoria", "BgmGL/chapel", "BgmGL/cathedral", "BgmGL/Amorianchallenge",
"BgmJp/Feeling", "BgmJp/BizarreForest", "BgmJp/Hana", "BgmJp/Yume", "BgmJp/Bathroom", "BgmJp/BattleField", "BgmJp/FirstStepMaster");

//////////////////////////////////////////////////////////
function start() {
status = -1;
action(1, 0, 0);
}

function action(mode, type, selection) {
if (mode == -1) {
cm.dispose();
} else {
if (status >= 0 && mode == 0) {
cm.dispose();
return;
}
if (mode == 1)
status++;
else
status--;
if (status == 0) {
cm.sendSimple("#r"+cm.mxdmz()+"ð�յ�#k,�ۺϷ���Ա.\r\n\r\n#L1##b"+ttt+"����  ���� >>>> #r["+ttt2+"]#b[092�汾]#l\r\n#L2##b"+ttt+"#r����  ����#b >>>> [���м��ܼ���][����ע��]#l\r\n#L3##b"+ttt+"����  ���� >>>> [�ó�����ɰ�]#l\r\n#L50##b"+ttt+"����  ���� >>>> [�ó����ǿ��]#l\r\n#L15##b"+ttt+"�г�  ��ɱ >>>> #r["+ttt2+"]#b[��ɱ�����ô]#l\r\n#L4##b"+ttt+"����  ���� >>>> [����������]#l\r\n#L5##b"+ttt+"����  ���� >>>> [ÿ��������500��]#l\r\n#L6##b"+ttt+"���  ���� >>>> [�ɶ��������һ�����]#l\r\n#L7##b"+ttt+"�㲥  ���� >>>> [���������Ҫ100��]#l#k\r\n\r\n#L8#"+ttt+"�������<<������>>"+ttt+"#l   #L9#"+ttt+"��ҵȼ�<<������>>"+ttt+"#l\r\n#L10#"+ttt+"#bת������#k<<������>>"+ttt+"#l   #L11##d"+ttt+"#rǿ�Ƽ���#k<<������>>"+ttt+"#l\r\n#L12#"+ttt+"PKɱ����<<������>>"+ttt+"#l   #L13#"+ttt+"PK��ɱ��<<�����>>"+ttt+"#l");	
			
}else if (status == 1) {
var viplevel = cm.getChar().getVip();

if(selection == 2){
cm.openNpc( 1022100);

}else if(selection == 3){
cm.openNpc( 9310034);

}else if(selection == 4){
cm.openNpc( 9310100);

}else if(selection == 50){
cm.openNpc( 1032102);

}else if(selection == 6){
cm.openNpc( 9201121);

//}else if(selection == 7){
//cm.openNpc( 9330067);

}else if (selection == 9){
cm.showlvl();				
cm.dispose();
}else if (selection == 8){
cm.showfame();				
cm.dispose();
}else if (selection == 10){
cm.showreborns();				
cm.dispose();
}else if (selection == 11){
cm.displayGuildRanks();				
cm.dispose();
}else if (selection == 12){
cm.showpvpkills();				
cm.dispose();
}else if (selection == 13){
cm.showpvpdeaths();				
cm.dispose();



}else if (selection == 14) {
if (cm.haveItem(4002002,2)==true){
cm.changeSex();
cm.sendOk("#b���Գɹ�,ף������������,����.");
cm.gainItem(4002002,-2);
cm.dispose();
}else{
cm.sendOk("#b��û������#v4002002#,���޷�Ϊ������.");
cm.dispose();
}










}else if (selection == 15) {
var statup = new java.util.ArrayList();
cm.getChar().setHp(0);
cm.getChar().setMp(0);
statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.HP, java.lang.Integer.valueOf(0)));
statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.MP, java.lang.Integer.valueOf(0)));
cm.c.getPlayer().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.serverNotice("������"+ cm.getChar().getName() +"���鳡ʧ�⣬���г�������ɱ����Ұ�ο��ο���ɡ�"); 
cm.dispose();  



//��������
}else if (selection == 1){ 
cm.openNpc(2002001); 
//���Ӻ���
}else if (selection == 5){
if (cm.getMeso() >=5000000) { 
var capacity = cm.getPlayer().getBuddylist() .getCapacity();
if (capacity >= 50 ) {
cm.getPlayer().dropMessage(1, "��������������.");
cm.dispose(); 
}else{
var newcapacity = capacity + 5;
cm.updateBuddyCapacity(newcapacity);
cm.getPlayer().dropMessage(1, "�ɹ�����5�����ѿռ�.");
cm.gainMeso(-5000000);
cm.dispose(); 
}
}else{
cm.getPlayer().dropMessage(1, "����Ǯ����.");
cm.dispose(); 
}

}else if(selection == 7){
var jukebox = "����Ҫ����ʲô����?\r\n";
for (var i = 0; i < music.length; i++)
jukebox += "\r\n#L" + i + "# " +music[i]+ "#l";
cm.sendSimple(jukebox);
test=1;
}















}else if (status == 2) {
if (test == 1) {
cm.changeMusic(music[selection]);
cm.sendOk("�ɹ�����.");
cm.dispose();










}										
}
}
}

