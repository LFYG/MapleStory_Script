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
			qm.sendAcceptDecline("��ϲ���ѵ���#b100��#k�����Ⲣ����ʾ�����Ľ������������Ŭ����ż������ȥ��ʿ�ų������������ǵĽ��顣˵����������ѧ��ʲô#b�¼���#k����");
		} else if (status == 1) {
			qm.completeQuest();
			qm.dispose();
		}
	}
}