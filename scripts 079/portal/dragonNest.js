/*
	��������������ڿ��ƽű�

	by о������
*/

function enter(pi) {
	var nextmap = pi.getC().getChannelServer().getMapFactory().getMap(240040611);   //�����ĵ�ͼʵ��
	var obj = nextmap.getMapObjects();   //��ȡ�����ͼ�����е�ͼ����
	var iter = obj.iterator();      //���ڱ���
	if(!pi.haveItem(4001094)){      //�ж��Ƿ��о������ĵ�
		pi.getPlayer().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.serverNotice(5, "������ӵ�о������ĵ����ܴ������ȥ!")); 
		return false;
	}
	if(nextmap.playerCount() > 0){  //�жϵ�ͼ���Ƿ����˽�����
		pi.getPlayer().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.serverNotice(5, "�����Ѿ������ڻ����������,���Ժ����!")); 
		return false;	
	}
	while (iter.hasNext()) {   //������ͼ���� �����NPC ���Ƴ�
		var npcobj = iter.next();
		if (npcobj.getType() == net.sf.odinms.server.maps.MapleMapObjectType.NPC){
			nextmap.removeMapObject(npcobj);	//�Ƴ���ͼ����
		}
	}
	pi.gainItem(4001094,-1);
	nextmap.resetReactors(); 
	nextmap.clearMapTimer();		
	pi.warp(240040611, "out00");
	nextmap.addMapTimer(120,240040610);  //��ʱ������
	return true;
}