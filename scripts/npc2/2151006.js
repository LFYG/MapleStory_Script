var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.sendNext("���ǲ���Ҫ������");
        cm.dispose();
    } else {
        if (status >= 0 && mode == 0) {
            cm.sendNext("���ǲ���Ҫ������");
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
        if (status == 0) {
            cm.sendYesNo("��û�����˰ɣ���ȥ�������ưɡ�ֻҪ�Ƿ����ߵ��ˣ�����ʱ�����Ϊ�������ơ�");
        } else if (status == 1) {
            cm.getPlayer().getStat().heal(cm.getPlayer());
            cm.sendOk("���ˣ����ƽ����ˡ�");
            cm.dispose();
        }
    }
}