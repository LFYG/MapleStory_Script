importPackage(net.sf.odinms.server.life);
importPackage(net.sf.odinms.tools);
importPackage(net.sf.odinms.scripting.npc);
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
		pMap.addMapTimer(300, pMap.getReturnMapId());
       		pMap.spawnMonsterWithEffect(mob, 2, new Point(140, 0));
		pMap.mapMessage(5, "��ʾ�� �����Ϻ��г����ˣ���ֻ��5����ʱ����ս��,Ŭ��ս����!!");		
	}
}