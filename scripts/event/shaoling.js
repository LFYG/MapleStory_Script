/*
	������ð��ר�ýű�

	������ɮ -- ��ͼ��Ӧ
	
	by-- о������
		
	QQ:7851103

*/
importPackage(net.sf.cherry.server.life);
importPackage(net.sf.cherry.tools);
importPackage(net.sf.cherry.scripting.npc);
importPackage(java.awt);
function start(ms) {	
	var mob = MapleLifeFactory.getMonster(9600025);
	var pMap = ms.getPlayer().getMap();
	if(ms.getPlayer().getBossLog("shaoling") >= 3){		
		NPCScriptManager.getInstance().start(ms.getPlayer().getClient(), 1100000); //��֪����ôд��Աû��NPC�������Ҳ��дBosslog��¼������ֻ��������������!
	}else{
	   ms.getPlayer().setBossLog("shaoling");
	}
	if (pMap.mobCount() < 1){		
		pMap.addMapTimer(600, pMap.getReturnMapId());
       		pMap.spawnMonsterWithEffect(mob, 2, new Point(140, 0));  
		pMap.mapMessage(5, " �����Ϻ��г����ˣ���ֻ��10����ʱ����ս��,Ŭ��ս����!!");		
	}
}