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
			qm.sendAcceptDecline("����ԭ�����㡣û�뵽�ܾ�֮���ܿ����㡣�Һܸ��˿�����������ɬ�����ֵ����Ϊ�˳�ɫ�ĵ����������ܾò��������ǵ��ҵ��㣬�ҵ������������ů��������Ѱ�������ļ��������������Ѿ��Ǻܾúܾ���ǰ�����ˣ��¸����꣬�������˻���������ɡ�����ȥ#b�Թ���#k�ɡ�������������㡣��ô�ټ�����");
		} else if (status == 1) {
			qm.completeQuest();
			qm.dispose();
		}
	}
}