/* 
    �����ܽű� 
    ������ð�� о�������޸�

    ���� 51��Աoung ���Ŀ��ȶ� �������ٻ��ű��޸ĵ�֮
    ��ͬ���ڽ�ֹת�� 

*/ 

importPackage(net.sf.odinms.server.maps); 
function act() { 
 rm.dropItems(); 
 rm.changeMusic("Bgm06/FinalFight"); 
 if (rm.getPlayer().getMap().getMonsterById(9420546) == null && rm.getPlayer().getMap().getMonsterById(9420547) == null && rm.getPlayer().getMap().getMonsterById(9420548) == null && rm.getPlayer().getMap().getMonsterById(9420549) == null ) { 
  rm.getReactor().getMap().addMapTimer(2 * 60 * 60,551030100); 
 }
rm.mapMessage("�����ܳɹ��ٻ�!"); 
  rm.spawnMonster(9420541);   
} 
