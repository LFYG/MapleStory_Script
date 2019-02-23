//importPackage(client);
//importPackage(handling.world); 

var exitMap; 
var instanceId;//����� gquestitemdrop +��
var minPlayers = 1; //�����������~
var qtmapId=910000000;//����� �˳���ͼID
var mapId=910000001;//�ִ�� ��ͼID
var iii=1;

function init() { 
 instanceId = 1; 
} 
function monsterValue(eim, mobId) { 
 return 1; 
} 
function setup() { 
 exitMap = em.getChannelServer().getMapFactory().getMap(qtmapId); // <exit> 
 var instanceName = "wgquestitemdrop" + instanceId;//������ 
 var eim = em.newInstance(instanceName); 
  
 var mf = eim.getMapFactory(); 
  
 instanceId++; 
  
 var map = mf.getMap(mapId); 
 map.shuffleReactors(); 
 var firstPortal = eim.getMapInstance(mapId).getPortal("next00"); 
 em.schedule("timeOut", 1 * 60000);//10���� 
 return eim; 
} 
function playerEntry(eim, player) { 
 var map = eim.getMapInstance(mapId); 
 player.changeMap(map, map.getPortal(0)); 

 //player.getClient().getSession().write(tools.MaplePacketCreator.getClock(60));
//600Ϊʱ������10���ӡ� 

 //player.getClient().getSession().write(tools.MaplePacketCreator.serverNotice(5, "[ע��]�����ѽ���Ƹ��ᱦ��ͼ������Ŷ��.")); 

	if (eim.isLeader(player)){
		iii=1;
		 hpdec(); 
		}
} 

function playerDead(eim, player) { 
	iii=0;
} 


function playerRevive(eim, player) { 
	iii=0;
 if (eim.isLeader(player)) { //check for party leader 
  //boot whole party and end 
  var party = eim.getPlayers(); 
  for (var i = 0; i < party.size(); i++) { 
   playerExit(eim, party.get(i)); 
  } 
  eim.dispose(); 
 } else { //boot dead player 
  // If only 2 players are left, uncompletable: 
  var party = eim.getPlayers(); 
  if (party.size() <= minPlayers) { 
   for (var i = 0; i < party.size(); i++) { 
    playerExit(eim,party.get(i)); 
   } 
   eim.dispose(); 
  } 
  else 
   playerExit(eim, player); 
 } 
} 

function playerDisconnected(eim, player) { 
	iii=0;
 if (eim.isLeader(player)) { //check for party leader 
  //boot whole party and end 
  var party = eim.getPlayers(); 
  for (var i = 0; i < party.size(); i++) { 
   if (party.get(i).equals(player)) { 
    removePlayer(eim, player); 
   }    
   else { 
    playerExit(eim, party.get(i)); 
   } 
  } 
  eim.dispose(); 
 } 
 else { //boot d/ced player 
  // If only 2 players are left, uncompletable: 
  var party = eim.getPlayers(); 
  if (party.size() < minPlayers) { 
   for (var i = 0; i < party.size(); i++) { 
    playerExit(eim,party.get(i)); 
   } 
   eim.dispose(); 
  } 
  else 
   playerExit(eim, player); 
 } 
} 
function leftParty(eim, player) {   
	iii=0; 
 // If only 2 players are left, uncompletable: 
 var party = eim.getPlayers(); 
 if (party.size() <= minPlayers) { 
  for (var i = 0; i < party.size(); i++) { 
   playerExit(eim,party.get(i)); 
  } 
  eim.dispose(); 
 } 
 else 
  playerExit(eim, player); 
} 
function disbandParty(eim) { 	
iii=0;
 //boot whole party and end 
 var party = eim.getPlayers(); 
 for (var i = 0; i < party.size(); i++) { 
  playerExit(eim, party.get(i)); 
 } 
 eim.dispose(); 
} 
function playerExit(eim, player) { 
	iii=0;
 eim.unregisterPlayer(player); 
 player.changeMap(exitMap, exitMap.getPortal(0)); 
} 

//for offline players 
function removePlayer(eim, player) {
	iii=0;
 eim.unregisterPlayer(player); 
 player.getMap().removePlayer(player); 
 player.setMap(exitMap); 
} 

function clearPQ(eim) { 
 //KPQ does nothing special with winners 
	iii=0;
 var party = eim.getPlayers(); 
 for (var i = 0; i < party.size(); i++) { 
  playerExit(eim, party.get(i)); 
 } 
 eim.dispose(); 
} 

function cancelSchedule() { 
} 

function timeOut() { 
	iii=0;
 var iter = em.getInstances().iterator(); 
 while (iter.hasNext()) { 
  var eim = iter.next(); 
  if (eim.getPlayerCount() > 0) { 
   var pIter = eim.getPlayers().iterator(); 
   while (pIter.hasNext()) { 
    playerExit(eim, pIter.next()); 
   } 
  } 
  eim.dispose(); 
 } 
} 

function startInstance(eim) { 

} 

function hpdec() {
	if (iii==1){
    var cal = java.util.Calendar.getInstance();
    cal.set(java.util.Calendar.SECOND, 5);
    var nextTime = cal.getTimeInMillis();
    while (nextTime <= java.lang.System.currentTimeMillis()) {
        nextTime += 2000;
    }
    setupTask = em.scheduleAtTimestamp("decrease", nextTime);
	}else{
	}
}

function decrease() {
	hpdec();
    var iter = em.getChannelServer().getPlayerStorage().getAllCharacters().iterator();
    while (iter.hasNext()) {
		var player = iter.next();
	if(player.getMapId()==mapId && iii==1){
	   em.delmapitem(player);
           em.startmapitem(player);
	}else{
	
	}
    }
}

