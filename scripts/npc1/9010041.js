var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.dispose();
        }
        status--;
    }
    if (status == 0) {
        cm.sendSimple("��á��������Լ���Ŭ����ȡ�������йش򹤵�һ�У���#b����С��#k�����԰��㡣#b#e\r\n#L0#��ȡ�򹤽�����#l");
    } else if (status == 1) {
        cm.sendNext("�š���ȷʵ��ɴ����������ʺ���û�н���������ȥ�򹤣�Ȼ���������ҡ�#r- ��ǰ�ݲ�֧�ִι��ܡ�#k");
        cm.dispose();
    }
}