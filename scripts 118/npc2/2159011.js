var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status >= 0 && mode == 0) {
            cm.sendNext("#b(�����ǰ��࣬Ӧ��Ҳ�����������ɡ���Ӧ�ò���ɣ�)#k");
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
        if (status == 0) {
            cm.sendYesNo("#b(�������ܿ��ɵĶ�����֪������᲻��������档Ҫ��ȥ������?��)#k");
        } else if (status == 1) {
            cm.gainExp(35);
            cm.warp(931000010, 0);
            cm.dispose();
        }
    }
}