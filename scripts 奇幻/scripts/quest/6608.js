/* ���ڴ�͸���Ӽ��� */

var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            qm.sendNext("��������������ͼ�꣬������ʱָ�������ڵĽ�ɫ��");
            qm.dispose();
            return;
        }
        status--;
    }
    if (status == 0) {
        qm.sendYesNo("���Խ���������#b#e��͸#n#k���ڸ��˺��ڵ�������ɫ������Ҫָ�������ڵĽ�ɫ��");
    } else if (status == 1) {
        if (qm.hasSkill(20040218)) { //20040218 - ��͸ - �ô�͸һ���谭�Ĺ�֮���������ӵ��˵Ĳ��ַ�������
            qm.sendLinkSkillWindow(20040218);
            qm.forceCompleteQuest();
        }
        qm.dispose();
    }
}

function end(mode, type, selection) {
    qm.forceCompleteQuest();
    qm.dispose();
}