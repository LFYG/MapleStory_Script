/*
	����������--��Ӧ���ű�
	
	о����������
*/

function act() {
	var map = rm.getPlayer().getClient().getChannelServer().getMapFactory().getMap(240040610);  //����ĵ�ͼ
	var Reactors = rm.getReactor();  // ��Reactors��
	var qust = net.sf.odinms.server.quest.MapleQuest.getInstance(3706);	
	var quststats = new net.sf.odinms.client.MapleQuestStatus(qust,net.sf.odinms.client.MapleQuestStatus.Status.STARTED,2081007);
	rm.spawnNpc(2081008, rm.getPlayer());	 //ˢNPC����
	new net.sf.odinms.server.maps.MapMonitor(rm.getReactor().getMap(),map.getPortal(10),rm.getPlayer().getClient().getChannel(),Reactors);			
	rm.getReactor().getMap().broadcastMessage(net.sf.odinms.tools.MaplePacketCreator.destroyReactor(Reactors)); //����Reactor
	rm.getPlayer().updateQuest(quststats);		//��������
	rm.mapMessage("һֻ�����������������˳���.");
}
