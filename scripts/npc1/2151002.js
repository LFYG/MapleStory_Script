var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
        if (status == 0) {
            cm.sendSimple("ʲô���飿\r\n\r\n#b#L0#�����Ի���#l");
        } else if (status == 1) {
            cm.sendNext("�š����Ի���������ĺ�ϲ������ر�����è��һ���Ķ������ȥ�����Ų�����");
            cm.dispose();
        }
    }
}