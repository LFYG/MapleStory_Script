/* 
    �İ�ʨ���ű� 
    ������ð�� о�������޸�

    ���� 51��Աoung ���Ŀ��ȶ� �������ٻ��ű��޸ĵ�֮
    ��ͬ���ڽ�ֹת�� 

*/ 


importPackage(net.sf.odinms.server.maps); 
function act() { 
 rm.dropItems(); 
 rm.changeMusic("Bgm06/FinalFight"); 
 if (rm.getPlayer().getMap().getMonsterById(9420541) == null && rm.getPlayer().getMap().getMonsterById(9420542) == null && rm.getPlayer().getMap().getMonsterById(9420543) == null && rm.getPlayer().getMap().getMonsterById(9420544) == null ) { 
  rm.getReactor().getMap().addMapTimer(2 * 60 * 60,551030100);   
 } 
 rm.mapMessage("������Ը���İ�ʨ��������!"); 
 rm.spawnMonster(9420546); 
} 