importPackage(net.sf.odinms.client);

var status = -1;

function start(mode, type, selection) {
	if (mode == -1) {
		qm.sendNext("Ŷ��û�б�Ҫ�ܾ��ҵ����顣��ûʲô���˵ġ�");
        	qm.dispose();
    	} else {
        	if (mode > 0)
            		status++;
        	else
            		status--;
		if (status == 0) {
			qm.sendAcceptDecline("�ף�ʲô���ڵ��ϡ��������ϣ��ⲻ��#p1201000#��#p1201000#��������Ϊ�ˡ���������#p1201000#�������𣿰�����˵������Ӣ�ۣ�");
		} else if (status == 1) {
			qm.sendNextPrev("     #i4001170#");
		} else if (status == 2) {
			qm.sendNextPrev("��λԭ������#p1201000#һ������������غ��Ӣ�۰�������էһ�����Ǻ���ͨ��ûʲô��������");
		} else if (status == 3) {
			qm.sendAcceptDecline("��������Ȼ����ħ��ʦ������������������꣬��������һ���������ɡ�#b��������Щ�ָ�������ҩˮ���Ͻ�����ȥ��#k");
		} else if (status == 4) {
			if (!qm.isQuestActive(21010)) {
				qm.getPlayer().setHp(25);
				if (!qm.haveItem(2000022))
					qm.gainItem(2000022, 1);
				qm.startQuest();
			}
			qm.sendNext("���Ⱥȵ�ҩˮ��Ȼ��������̸��", 9);
		} else if (status == 5) {
			qm.sendNextPrev("#b����ҩˮ��ô�ȣ��������ǵ��ˡ�����#k", 3);
		} else if (status == 6) {
			qm.displayGuide(14);
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
			qm.sendNext("����һֱ��ͼ�ڱ����Ѱ�Ҵ�˵�е�Ӣ�ۣ�������û��������ҵ��㣡Ԥ�Թ�Ȼû�д�#p1201000#��������ȷ��ѡ�񣡼�ȻӢ�����»����ˣ����Ǿ�û�б�Ҫ�پ��º�ħ��ʦ�ˣ�");
		} else if (status == 1) {
			qm.sendNextPrev("���ϣ�����ôץ����������ô�ã�ʵ����̫�����ˡ���������������Ҳ�����������ġ���Ȼ֪�����æ�������ڻش��ӵ�·�ϣ�#b���Ǿ�����������������#k���д�Ӣ�ۺ�����˵�������ǿ϶��ᾪ�ȵ�Ҫ����\r\n\r\n #fUI/UIWindow.img/QuestIcon/4/0# \r\n#i2000022# 5 #t2000022#\r\n#i2000023# 5 #t2000023#\r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 16 exp");
		} else if (status == 2) {
			if (qm.isQuestActive(21010)) {
				qm.gainItem(2000022, 5);
				qm.gainItem(2000023, 5);
				qm.completeQuest();
				qm.getPlayer().gainExp(16, true, true);
			}
		} else if (status == 3) {
			qm.sendNextPrev("���������𣿲�֪������û�еõ����ܵ�������ð�յ����磬ÿ��1�����ܻ�ü��ܵ���3����#bK��#k���򿪼������Ϳ�ȷ�ϡ�", 9);
		} else if (status == 4) {
			qm.sendNextPrev("#b��������ô���У���ȴʲô���벻�������������Ӣ���𣿻����Ȳ鿴һ�¼��ܰɡ�����ô�鿴����ѽ����#k", 3);
		} else if (status == 5) {
			qm.displayGuide(15);
			qm.dispose();
		}
	}
}