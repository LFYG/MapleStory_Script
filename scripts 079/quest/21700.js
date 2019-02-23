importPackage(net.sf.odinms.client);

var status = -1;

function start(mode, type, selection) {
	if (mode == -1) {
		qm.sendNext("What's stopping you? I promise, I won't be disappointed even if the #p1201001# shows no reaction to you. Please, rush over there and grab the #p1201001#. Just #bclick#k on it.");
        	qm.dispose();
    	} else {
        	if (mode > 0)
            		status++;
        	else
            		status--;
		if (status == 0) {
			qm.sendNext("���ƺ��ڻ���ʲô�������ì��Ȼ�ϳ����㡣��ô��϶�����#bʹ�ó�ì��Ӣ�ۣ�ս����#k��������ʲô�����������йس�ì�ļ���֮�࡭��", 8);
		} else if (status == 1) {
			qm.sendNextPrev("#b(˵���ܵ����������˼�����)#k", 2);
		} else if (status == 2) {
			qm.sendNextPrev("����������࣬����Ҳ�Ѿ��ܲ������ˡ����������Ǽ��о������ָ���ȥ�ļ��ܰɡ���Ȼ��ʧ���ˣ����Ͼ�����ǰ�����������ĵĶ�����Ҫ�ָ�����Ӧ�úܿ졣", 8);
		} else if (status == 3) {
			qm.sendNextPrev("��ô�ָ���ȥ�ļ��ܣ�", 2);
		} else if (status == 4) {
			qm.sendNextPrev("�������ֻ��һ��������������������������������������������һ��������������Щ�������ļ��ܣ�������Ҫ�������һ��֪������������ʦ��", 8);
		} else if (status == 5) {
			qm.sendNextPrev("��ʦ��", 2);
		} else if (status == 6) {
			if (!qm.isQuestActive(21700) && !qm.haveItem(1442079)) {
				qm.gainItem(1442079, 1);
				qm.updateQuest(21700, "create@");
				qm.completeQuest();
			}
			qm.sendNext("����Ҫ����ʹ�ĸ������ͺ��ˡ�����һ֧#p1201001#��ϣ������������ʱ���ܹ������ĺܿ졣������֧��ì����");
		} else if (status == 7) {
			qm.sendPrev("�Ӵ��ӳ�ȥ����#b��#k�ߣ��и�С��������ȥ���������#b�հ�#k����ż�����е�����մ�����������һֱ�ڵȴ���Ӣ�۵ĳ��֣��������о��Ÿ��ּ��ܡ���Ҫ���ܹ��õ����İ������϶��������ǳ��", 8);
			qm.dispose();
		}
	}
}

function end(mode, type, selection) {

}