/*
	������ð��ר�ýű�

	������ɮ -- ��ͼ��Ӧ
	
	by-- о������
		
	QQ:7851103

*/
importPackage(net.sf.odinms.server.life);
importPackage(net.sf.odinms.tools);
importPackage(net.sf.odinms.scripting.npc);
importPackage(java.awt);
function start(ms) {	
	var mob = MapleLifeFactory.getMonster(9400633);
	var pMap = ms.getPlayer().getMap();
	if(ms.getPlayer().getBossLog("shaolingb") >= 3){		
		NPCScriptManager.getInstance().start(ms.getPlayer().getClient(), 1100000); //��֪����ôд��Աû��NPC�������Ҳ��дBosslog��¼������ֻ��������������!
	}else{
	   ms.getPlayer().setBossLog("shaolingb");
	}

if (pMap.countMobOnMap() < 1){		
		pMap.addMapTimer(1800, pMap.getReturnMapId());
       		pMap.spawnMonsterWithEffect(mob, 2, new Point(619, 45));  
		pMap.mapMessage(5, " �����󹫱��ٻ�����ֻ��30����ʱ����ս��,Ŭ��ս����!!");	
        	
	}

}