var status = -1;

function start(mode, type, selection) {
    if (mode == 0) {
        qm.sendNextNew("�����������. ��������������һ��ûʲô��Ȥ��. ��ʹ���緢���仯. ");
        qm.dispose();
    } else {
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
        if (status == 0) {
            qm.sendNextNew("ι, ����������˵����? �������������ŵĶ������������ֻ�. ��Ȼ�ⶫ������������Ǹ�ϡ����, ������֮ǰ����ĵط�ȴ�Ƿǳ�������.");
        } else if (status == 1) {
            qm.sendNextPrevNew("����, �㿴���ҵ��·�����? \r\n����У��, ��֮ǰ���ڵ�������, ѧ���Ƕ�Ҫ�������·���. ");
        } else if (status == 2) {
            qm.sendYesNoNew("��ô��, ������µ������ǲ��Ǻܸ���Ȥ��?\r\n\r\n#b���������, ����ƶ������ִ��¹�����ķ�����. ��#k");
        } else if (status == 3) {
            qm.sendNextNew("��ô, �뵽���ִ��¹�����ķ������ҵ��Ұ�.\r\n\r\n#e#bͨ����Ԫ֮��Ҳ���ƶ�������. #n#k");
        } else if (status == 4) {
			qm.forceStartQuest();
            qm.warp(100000004, 1);
            qm.dispose();
        }
    }
}

function end(mode, type, selection) {
    if (mode == -1) {
        qm.dispose();
    } else {
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
        if (status == 0) {
            if (qm.getPlayerStat("HP") < 50) {
                qm.sendNext("�ˣ����HP��û����ȫ�ָ���ʹ���Ҹ����ƻ��������ɣ���ȥ����!");
                qm.dispose();
            } else {
                qm.sendNext("���ĵ��ߡ�������ô�����ܼ򵥰ɣ����������½��趨#b��ݼ�#k���㻹��֪���ɣ�����~");
            }
        } else if (status == 1) {
            qm.sendNextPrev("����ѧ�úܺ�Ӧ�ø��������Щ��������;�б���ģ�лл�Ұɣ�Σ����ʱ��ú�ʹ�á�");
        } else if (status == 2) {
            qm.sendNextPrev("���ܽ����ֻ����Щ�ˡ��е���᲻��Ҳû�취������Ҫ����ʱ��·��С�ģ�һ·˳�簡������\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#v2010000# 3 #t2010000#\r\n#v2010009# 3 #t2010009#\r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 10 exp");
        } else if (status == 3) {
            qm.gainExp(10);
            qm.gainItem(2010000, 3);
            qm.gainItem(2010009, 3);
            qm.forceCompleteQuest();
            qm.dispose();
        }
    }
}