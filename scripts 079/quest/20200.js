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
			qm.sendAcceptDecline("�������μ���ʿ�ȼ����ԣ�������ʱ��ʥ�ء�������ʿ�ų��������������в��ԣ�����ϸ񣬾ͻ�������Ϊ��ʽ����ʿ���ټ�����");
		} else if (status == 1) {
			qm.completeQuest();
			qm.dispose();
		}
	}
}