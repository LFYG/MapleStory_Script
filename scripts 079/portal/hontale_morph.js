/*
-- ---------------------
     �������ٻ��ű�
-------------------------
      ����ð�յ�ר��
----- Version Info ------
      о�������޸�
-------------------------
*/

importPackage(net.sf.odinms.server.maps); 
importPackage(net.sf.odinms.net.channel); 
importPackage(net.sf.odinms.tools); 

function enter(pi) { 
 var nextMap = 240060200; 
 var hontaleMap = pi.getC().getChannelServer().getMapFactory().getMap(240060200); 
 var mapobjects = hontaleMap.getMapObjects(); 
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

if(player != null && boss != null)
{
	sendMessage(pi,"�Կ���BOSS���ڽ����С�����"); 
	pi.warp(240040700);
  	return false; 
}

 if (pi.getBossLog('hontale')>=10)
{ 
  	sendMessage(pi,"ÿ�����ֻ����ս10�ΰ�������,�������Ѿ��޷��ٽ���"); 
	pi.warp(240040700);
  	return false; 	
} 

 if (hontaleMap.getCharacters().isEmpty() && pi.getBossLog('hontale') < 10)
{ 
  	hontaleMap.resetReactors(); 
} 
  pi.getC().getChannelServer().getMapFactory().getMap(240060200).clearMapTimer(); 
  pi.getC().getChannelServer().getMapFactory().getMap(240060200).killAllMonsters(); 
  pi.setBossLog('hontale'); 
  pi.warp(240060200);  
  sendMessage(pi,"���ѽ����˰���������ͼ��������ͨ�����������Ͻǵ���ɫˮ��"); 
  return true;    
} 
function sendMessage(pi,message)
{ 
	pi.getPlayer().getClient().getSession().write(MaplePacketCreator.serverNotice(5, message)); 
} 
