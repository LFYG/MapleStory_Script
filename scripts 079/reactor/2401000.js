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
function act(){
if (rm.getPlayer().getMap().getMonsterById(8810000) == null && rm.getPlayer().getMap().getMonsterById(8810001) == null && rm.getPlayer().getMap().getMonsterById(8810002) == null && rm.getPlayer().getMap().getMonsterById(8810003) == null && rm.getPlayer().getMap().getMonsterById(8810004) == null && rm.getPlayer().getMap().getMonsterById(8810005) == null && rm.getPlayer().getMap().getMonsterById(8810006) == null && rm.getPlayer().getMap().getMonsterById(8810007) == null && rm.getPlayer().getMap().getMonsterById(8810008) == null && rm.getPlayer().getMap().getMonsterById(8810009) == null && rm.getPlayer().getMap().getMonsterById(8810010) == null && rm.getPlayer().getMap().getMonsterById(8810011) == null && rm.getPlayer().getMap().getMonsterById(8810012) == null && rm.getPlayer().getMap().getMonsterById(8810013) == null && rm.getPlayer().getMap().getMonsterById(8810014) == null && rm.getPlayer().getMap().getMonsterById(8810015) == null && rm.getPlayer().getMap().getMonsterById(8810016) == null && rm.getPlayer().getMap().getMonsterById(8810017) == null && rm.getPlayer().getMap().getMonsterById(8810018) == null) {
	 rm.changeMusic("Bgm14/HonTale");
         rm.spawnMonster(8810026,71,260);
    	 rm.createMapMonitor(2,240050400,"sp","8810010,8810011,8810012,8810013,8810014,8810015,8810016,8810017",0,8810018);
    	 rm.createMapMonitor(2,240050400,"sp","8810002,8810004,8810005,8810006,8810007,8810008,8810009",1,8810003);
    	 rm.getReactor().getMap().addMapTimer(12 * 60 * 60, 240000000);
	 rm.mapMessage(5, "������ɫˮ��ʯ����ʧ,�ڰ�����������.��ɫˮ�����ڰ�Сʱ��ˢ����");
	}else{
	 rm.mapMessage("�ڰ�������ս��.....�����ظ��ٻ�!!");
	}
}