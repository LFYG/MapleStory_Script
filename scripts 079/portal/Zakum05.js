
/* 
    �����ſڽű�
    о����������
    ������ð��
    ��ͬ���ڽ�ֹת�� 
*/ 

importPackage(net.sf.odinms.server.maps); 
importPackage(net.sf.odinms.net.channel); 
importPackage(net.sf.odinms.tools); 

function enter(pi) { 
 var nextMap = 280030000; 
 var zakumMap = pi.getC().getChannelServer().getMapFactory().getMap(280030000); 
 var mapobjects = zakumMap.getMapObjects(); 
 var boss = null; 
 var player = null; 
 var iter = mapobjects.iterator(); 
 while (iter.hasNext()) 
{ 
	o = iter.next(); 
	if (o.getType() == MapleMapObjectType.MONSTER)
	{ 
		boss = o; 
	} 
	if (o.getType() == MapleMapObjectType.PLAYER)
	{ 
    		player = o; 
	} 
}
if (pi.getPlayer().getClient().getChannel() !=2) 
{
	sendMessage(pi,"���������ֻ�ڵڶ�Ƶ���ٻ���");
	return false;
}

if (!pi.haveItem(4001017))
{ 
  	sendMessage(pi,"��û���ٻ������õ���û�л������,����..."); 
	return false; 
}

if(player != null && boss != null)
{
	sendMessage(pi,"�Կ���BOSS���ڽ����С�����"); 
  	return false; 
}

 if (pi.getBossLog('zakum')>=10)
{ 
  	sendMessage(pi,"ÿ�����ֻ����ս10������,�������Ѿ��޷��ٽ���"); 
  	return false; 	
} 

 if (zakumMap.getCharacters().isEmpty() && pi.getBossLog('zakum') < 5)
{ 
  	zakumMap.resetReactors(); 
} 
  pi.getC().getChannelServer().getMapFactory().getMap(280030000).clearMapTimer(); 
  pi.getC().getChannelServer().getMapFactory().getMap(280030000).killAllMonsters(); 
  pi.setBossLog('zakum'); 
  pi.warp(211042400);  
  return true; 
   
} 
function sendMessage(pi,message)
{ 
	pi.getPlayer().getClient().getSession().write(MaplePacketCreator.serverNotice(5, message)); 
} 