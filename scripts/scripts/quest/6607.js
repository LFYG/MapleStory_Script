/* ���ڹ�֮�ػ����Ӽ��� */

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
        qm.sendYesNo("���Խ���������#b#e��֮�ػ�#n#k���ڸ��˺��ڵ�������ɫ������Ҫָ�������ڵĽ�ɫ��");
    } else if (status == 1) {
        if (qm.hasSkill(50001214)) { //50001214 - ��֮�ػ� - �ܵ���֮�ػ�����һ��ʱ���ڼ�ʹ�ܵ����˹�����Ҳ���ᱻ���ˡ�
            qm.sendLinkSkillWindow(50001214);
            qm.forceCompleteQuest();
        }
        qm.dispose();
    }
}

function end(mode, type, selection) {
    qm.forceCompleteQuest();
    qm.dispose();
}