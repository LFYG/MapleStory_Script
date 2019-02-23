importPackage(net.sf.odinms.client);
importPackage(net.sf.odinms.scripting.npc);

var status = -1;

function start(mode, type, selection) {
    	if (mode == -1) {
	qm.sendNext("*Sob* Aran has declined my request!");
        qm.dispose();
    } else {
        if (mode == 1)
            status++;
        else
            status--;
		if (status == 0)
			qm.sendAcceptDecline("���š����������ˡ����죬���ҵ��������Ǳ�ȥ��");
		else if (status == 1) {
			qm.startQuest();
			qm.warp(914000300);
			qm.dispose();
		}
	}
}

function end(mode, type, selection) {
	if (mode == -1) {
	qm.sendNext("������ô��������ҵĺ��ӡ�");
        qm.dispose();
    } else {
        if (mode == 1)
            status++;
        else
            status--;
		if (status == 0)
			qm.sendYesNo("�Ǻǣ�ƽ�������ˣ������أ�����Ҳ����������");
		else if (status == 1) {
			qm.gainItem(4001271, -1);
			qm.completeQuest();
			qm.sendNext("̫���ˡ�������̫���ˡ�", 9);
		} else if (status == 2)
			qm.sendNextPrev("�Ͽ��ϴ����Ѿ�ûʱ���ˣ�", 3);
		else if (status == 3)
			qm.sendNextPrev("û�����ڲ��Ǹ��˵�ʱ�򡣺�ħ��ʦ����ϢԽ��Խ�����ƺ������Ѿ�������۵�λ�ã��øϽ���������Ȼ���������ˣ�", 9);
		else if (status == 4)
			qm.sendNextPrev("���̳�����", 3);
		else if (status == 5)
			qm.sendNextPrev("ս������Ҳ�ϴ��ɣ�������������ս�������顭�������������Ѿ����ˣ�ս���ͽ��������Щͬ��ɣ�������һ��ȥ�������ɣ�", 9);
		else if (status == 6)
			qm.sendNextPrev("���У�", 3);
		else if (status == 7) {
			qm.sendNextPrev("�����ȣ����ȳ���ȥ��������һ��Ҫ���ţ�����һ�����ټ��ġ���Ҫ��ͬ����һ��ͬ��ħ��ʦս����", 3);
		} else if (status == 8) {
			qm.clearAranPolearm();
			qm.warp(914090010); // Initialize Aran Tutorial Scenes
			qm.dispose();
		}
	}
}