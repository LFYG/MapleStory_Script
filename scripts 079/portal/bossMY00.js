/* 
    �����ܽű� 
    ������ð�� о�������޸�
    ���� 51��Աoung ���Ŀ��ȶ� �������ٻ��ű��޸ĵ�֮
    ��ͬ���ڽ�ֹת�� 

*/  

importPackage(net.sf.odinms.server.maps); 
importPackage(net.sf.odinms.net.channel); 
importPackage(net.sf.odinms.tools); 

function enter(pi) { 
 var nextMap = 551030200; 
 var bossMY00Map = pi.getC().getChannelServer().getMapFactory().getMap(551030200); 
 var mapobjects = bossMY00Map.getMapObjects(); 
 var boss = null; 
 var player = null; 
 var iter = mapobjects.iterator(); 
 while (iter.hasNext()) { 
   o = iter.next(); 
   if (o.getType() == MapleMapObjectType.MONSTER){ 
    boss = o; 
   } 
   if (o.getType() == MapleMapObjectType.PLAYER){ 
    player = o; 
   } 
  } 
if (!pi.haveItem(4032246)) { 
  sendMessage(pi,"��û���λ����⹫԰����,����"); 
  return false; 
 }else{
	if(player != null && boss != null){
	sendMessage(pi,"�Կ� ������/�İ�ʨ�� ���ڽ����С�����"); 
  	return false; }
	}

 if (pi.getBossLog('bossMY00')>=2) { 
  if (!pi.haveItem(5252004)){
  sendMessage(pi,"ÿ��ֻ�������ս2��,����Ҫ���̳ǹ�����Ʊ�ſɽ��룡ÿ�����ֻ����ս10��"); 
  return false; }
   else {
	if (pi.getBossLog('bossMY00')>=10){
	 sendMessage(pi,"ÿ�����ֻ����ս10��,�������Ѿ������ٽ��룡"); 
 	 return false; }
	} 
	if(player != null && boss != null){
	sendMessage(pi,"�Կ� ������/�İ�ʨ�� ���ڽ����С�����"); 
  	return false; 
	}
 	else{
	pi.gainItem(5252004,-1);
	}
 } 

 if (bossMY00Map.getCharacters().isEmpty() && pi.getBossLog('bossMY00') < 10) { 
  bossMY00Map.resetReactors(); 
 } 
  pi.getC().getChannelServer().getMapFactory().getMap(551030200).clearMapTimer(); 
  pi.getC().getChannelServer().getMapFactory().getMap(551030200).killAllMonsters(); 
  pi.setBossLog('bossMY00'); 
  pi.warp(551030200);  
  return true; 
   
} 
function sendMessage(pi,message) { 
 pi.getPlayer().getClient().getSession().write(MaplePacketCreator.serverNotice(5, message)); 
} 