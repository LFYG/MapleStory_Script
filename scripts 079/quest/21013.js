importPackage(net.sf.odinms.client);

var status = -1;

function start(mode, type, selection) {
	if (mode == -1) {
		qm.sendNext("I'm sure it will come in handy during your journey. Please, don't decline my offer.");
        	qm.dispose();
    	} else {
        	if (mode > 0)
            		status++;
        	else
            		status--;
		if (status == 0) {
			qm.sendSimple("Ӣ��Ӣ�۴��ˡ�����һֱ��������㡣 \r\n#b#L0#��������״����#l");
		} else if (status == 1) {
			qm.sendAcceptDecline("�ҴӺܾ���ǰ������Ӣ�۴���һ���������Ȼ����������Ӣ�ۣ���֪Ӣ���ܷ�������������ݱ���");
		} else if (status == 2) {
			if (!qm.isQuestActive(21013)) {
				qm.startQuest();
			}
			qm.sendNext("��������Ĳ��Ϸ����⸽�����������ˡ��ͷ�Ӣ�۴����ҵ�������ӣ��� #b#t4032309##k �� #b#t4032310##k �������ҡ�Ȼ���Ҿ������̰��������á�", 1);
		} else if (status == 3) {
			qm.sendNext("������ΪĿǰϵͳ�е����⣬���Թ���Աֱ�ӻ�� #b#t4032309##k �� #b#t4032310##k ���㣬��ֱ�Ӹ��ҾͿ����ˣ�", 1);
		} else if (status == 4) {
			qm.gainItem(4032309, 1);
			qm.gainItem(4032310, 1);
			qm.displayGuide(18);
			qm.dispose();
		}
	}
}

function end(mode, type, selection) {
	if (mode == -1) {
        	qm.dispose();
    	} else {
        	if (mode > 0)
            		status++;
        	else
            		status--;
		if (status == 0) {
			qm.sendNext("�š��������ˡ������Ѿ���������ˣ���ô�����ܲ�������Ӱɣ�ϣ�������ϣ������������ \r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i3010062# 1 #t3010062# \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 95 exp");
		} else if (status == 1) {
			if (qm.isQuestActive(21013)) {
				qm.gainItem(3010062, 1);
				qm.completeQuest();
				qm.getPlayer().gainExp(95, true, true);
			}
			qm.sendNextPrev("�����һ����ȫ��װ�õ����ӣ�ֻΪ�㣡��һֱ�����һ��������Ϊ�����Ϊ��֪��һ��Ӣ�ۿ���ż��ʹ��һЩ�ܺõ���Ϣ��", 1);
		} else if (status == 2) {
			qm.sendNextPrev("Ӣ���ǲ���սʤ�ġ�Ӣ�����ˡ��������㽫���ٵ���ս����ʱ������ҡ�����ǣ�����һ��Ӣ�ۣ���Ϊ���п˷��κ��ϰ���������", 1)
		} else if (status == 3) {
			qm.displayGuide(19);
			qm.dispose();
		}
	}
}