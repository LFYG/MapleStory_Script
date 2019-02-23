importPackage(net.sf.odinms.client);

var status = -1;

function start(mode, type, selection) {
	if (mode == -1) {
		qm.sendNext("�š����������Ҫ�����ٸ����Ұɣ�");
        	qm.dispose();
    	} else {
        	if (mode > 0)
            		status++;
        	else
            		status--;
		if (status == 0) {
			qm.sendNext("��ӭӢ�ۣ�����ʲô������֪����֪������˭��������ס�������һЩ���Աߴ���˵�����ˡ������Ŵ��Ŵ���ȫ���ˡ���Ҷ�֪����������ˣ�");
		} else if (status == 1) {
			qm.sendNextPrev("������Σ�������˾ͺã�������ʲô���⣿�ţ��㲻֪�����Ƿ���������Ӣ�۲��ǣ���Ϊ��ʧȥ�ļ��䣿��û�а취...��һ������Ϊ�������������е��µġ�");
		} else if (status == 2) {
			qm.sendNextPrev("�ţ�����ָʲô�������ںܾ���ǰ�㲢�����ý��ġ������൱��������������Ҳ���ô���ţ���ô����������ɱ��3��������ҿ����ɣ�");
		} else if (status == 3) {
			if (!qm.isQuestActive(21012)) {
				qm.startQuest();
			}
			qm.sendNext("���������� #r#o9300383#��#k ��ɱ�� #r3#k ������������˵���ɣ�", 1);
		} else if (status == 4) {
			qm.displayGuide(17);
			qm.dispose();
		}
	}
}

function end(mode, type, selection) {
	if (mode == -1) {
		qm.sendNext("ʲô���㲻��Ҫҩˮ��");
        	qm.dispose();
    	} else {
        	if (mode > 0)
            		status++;
        	else
            		status--;
		if (status == 0) {
			qm.sendNext("�š�������ı����֪����ɶ��û���������������õ��ġ�˵�����ⷴ�����á�����������һЩҩˮ�����Ͱɣ�\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i2000022# 10 #t2000022# \r\n#i2000023# 10 #t2000023# \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 57 exp");
		} else if (status == 1) {
			if (qm.isQuestActive(21012)) {
				qm.gainItem(2000022, 10);
				qm.gainItem(2000023, 10);
				qm.completeQuest();
				qm.getPlayer().gainExp(57, true, true);
			}
			qm.sendOk("#b�������������Ӣ�ۡ���һ��ʲô������û�е�Ӣ��������ʲô���أ���#k", 2);
		} else if (status == 2) {
			qm.dispose();
		}
	}
}