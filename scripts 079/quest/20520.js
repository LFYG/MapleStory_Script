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
			qm.sendNext("��ϲ���Ѿ�����50����������ʿ��˵����Ŀǰ��״������");
		} else if (status == 1) {
			qm.sendNextPrev("�һ���ֱ��˵�ɣ��������Ѿ�50���ˣ�ȴ������·���ѵ��㲻�о���������������������ţһ�����ƶ��ٶȡ���ô�һ������һЩ����������ʿ��������衣");
		} else if (status == 2) {
			qm.sendAcceptDecline("ȷʵ��50���˻�����·���ǲ�������ʿ��Ʒζ����һ����ʿ�����е���衭���������֪���Ļ�����ȥ#m130000000#�����˽�һ����ϸ����ɡ�");
			qm.completeQuest();
			qm.dispose();
		}
	}
}