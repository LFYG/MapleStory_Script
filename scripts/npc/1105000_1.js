/*
	�����ռ�ð�ռ�
*/
var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        if (!cm.isQuestFinished(20616)) {
            cm.forceCompleteQuest(20616);
        }
        if (cm.isQuestFinished(20734)) {
            cm.sendNext("�Բ��𣬸ý�ɫ�Ѿ��������ռ�ð�ռҡ�");
            cm.dispose();
        } else if (cm.getJob() == 1111 || cm.getJob() == 1211 || cm.getJob() == 1311 || cm.getJob() == 1411 || cm.getJob() == 1511) {
            cm.sendNext("���ã���ʿ�ų�������ð�յ��������ٷǳ�Σ�յ������Ҫ���ֹ��ħ��ʦ�ַ������Ҫ����ı�����Ϊ����ʿ���Ǳ�ø�ǿ���Ҿ�����ð�ռҳ����Ǻ������������˱�ð�ռҸ�ǿ���ռ�ð�ռҡ�");
        } else {
            cm.sendNext("�Բ���ֻ����ת����ʿ��ְҵ���ܴ����ռ�ð�ռҡ�");
            cm.dispose();
        }
    } else if (status == 1) {
        cm.sendYesNo("�ռ�ð�ռ�һ��������50��������ӵ������ļ��ܡ���ô�����������ռ�ð�ռҵ���ò���������");
    } else if (status == 2) {
        if (!cm.getClient().canMakeCharacter(cm.getPlayer().getWorld())) {
            cm.sendOk("���Ľ�ɫ�����㣬�޷���������Ľ�ɫ��");
        } else {
            cm.sendUltimateExplorer();
        }
        cm.dispose();
    }
}