var status = -1;

function start(mode, type, selection) {
	if (mode == -1) {
		qm.dispose();
	} else {
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			qm.sendNext("��ô�����Ѿ�����#b110��#k�ˡ���ǰѧϰ�ļ������õ���Σ�");
		} else if (status == 1) {
			qm.sendNextPrev("#b��ʿ�ų�#k�Ǻ�����ѧ���������ļ��ܡ���Ҳ�����ţ���ȥѧϰ�ɡ���ʿ�ų���˵�����ᷴ�ԡ�����ѧ���ǲ�ѧ����ȡ�������Լ���");
		} else if (status == 2) {
			qm.sendAcceptDecline("�������ʱ��ѧ�˺ܶ༼����Ӧ�ò��ٰɡ�����������ѧϰ#b�¼���#k��");
			qm.startQuest();
			qm.dispose();
		}
	}
}