importPackage(Packages.handling.world);
importPackage(Packages.tools);

function start() {
    if (im.haveItem(2430191)) {
       im.gainItem(1012468,1);//�����ǹ�
       im.gainItem(1002903,1);//�ǹ��ۺ�ͷ��
       im.gainItem(1003009,1);//�߲��ǹ�����
       im.gainItem(1003239,1);//ľݮ�ǹ���ͷñ
       im.gainItem(1003240,1);//��ݮ�ǹ���ͷñ
       im.gainItem(1102709,1);//˫ɫ�ǹ����
       im.gainItem(1042329,1);//�ǹ�ɫT��
       im.gainItem(1112114,1);//�ۺ��ǹ���Ƭ��ָ
       im.gainItem(1072394,1);//�ǹ���Ь
       im.gainItem(1702530,1);//ɯ�����ǹ�
	   im.gainItem(2430191,-1);
       im.sendOk("�����Ѿ��͵�,��鱳���ɡ�");
	   im.getC().getChannelServer().broadcastPacket(Packages.tools.packet.CWvsContext.broadcastMsg(2, im.getC().getChannel(), " : " + "[�������]��ϲ��ҡ�" + im.getChar().getName() + "����ȡ�������."));

	  // World.Broadcast.broadcastMessage(Packages.tools.packet.CWvsContext.broadcastMsg(6,  "[������ʾ]" + "��ң���" + im.getPlayer().getName() + "��" + "��ӭ���� [" + im.getChannelServer().getServerName() + "]���磡"));
	  im.dispose();
} else {
     im.sendOk("û��������ѫ��");
    }
    im.dispose();
}