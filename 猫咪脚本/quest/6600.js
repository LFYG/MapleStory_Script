/* ���ں���ף�����Ӽ��� */

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
        qm.sendYesNo("���Խ���������#b#e����ף��#n#k���ڸ��˺��ڵ�������ɫ������Ҫָ�������ڵĽ�ɫ��");
    } else if (status == 1) {
        if (qm.hasSkill(110)) { //0000110 - ����ף�� - [�������Լ���]ǿ�����������еļ��ͣ�������߸������ԡ�
            qm.sendLinkSkillWindow(110);
            qm.forceCompleteQuest();
        }
        qm.dispose();
    }
}

function end(mode, type, selection) {
    qm.forceCompleteQuest();
    qm.dispose();
}