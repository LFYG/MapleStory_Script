/* ���ڶ�ħ֮ŭ���Ӽ��� */

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
        qm.sendYesNo("���Խ���������#b#e��ħ֮ŭ#n#k���ڸ��˺��ڵ�������ɫ������Ҫָ�������ڵĽ�ɫ��");
    } else if (status == 1) {
        if (qm.hasSkill(30010112)) { //30010112 - ��ħ֮ŭ - ������BOSS��ʱ���������ڵķ�ŭ����ɸ�ǿ���˺������ո���ľ�����
            qm.sendLinkSkillWindow(30010112);
            qm.forceCompleteQuest();
        }
        qm.dispose();
    }
}

function end(mode, type, selection) {
    qm.forceCompleteQuest();
    qm.dispose();
}