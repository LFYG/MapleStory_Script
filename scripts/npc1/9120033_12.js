var status = -1;
var selectedpay = 0;

function start() {
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
            if (status == 2) {
                cm.sendNext("�������Ҫ7����������ң����´������ң�");
                cm.dispose();
            }
            status--;
        }
        if (status == 0) {
            cm.sendSimple("�װ���#r" + cm.getChar().getName() + "#k��ã���ӭ����7�����������̡�#b \r\n - 7������������>>       ��������:#r " + cm.getItemQuantity(4000463) + " #b��\r\n#r��#v4000463#��������x1����#v4310002#7�����������x4��\r\n\r\n#b#L0#��Ҫ�һ���Ʒ#l");
        } else if (status == 1) {
            if (cm.getItemQuantity(4000463) == 0) {
                cm.sendNext("��û�пɶһ��Ĺ������ҡ�");
                cm.dispose();
            } else {
                cm.sendGetNumber("�������н�Ҷһ�7������������:\r\n7����ҵĶһ�����Ϊ 1 : 4\r\n", 1, 1, cm.getItemQuantity(4000463));
            }
        } else if (status == 2) {
		selectedpay = selection;
             if (cm.getItemQuantity(4000463) < selectedpay) {
                cm.sendNext("���Ĺ������Ҳ��㣬�޷��һ�7����������ҡ�");
                cm.dispose();
            } else {
                cm.sendYesNo("���Ƿ�Ҫ��#r " + selectedpay + " #k���������Ҷһ���#b " + selectedpay * 4 + " #k��7����������ҡ�");
            }
        } else if (status == 3) {
            if (cm.getItemQuantity(4000463) < selectedpay) {
                cm.sendNext("���Ĺ������Ҳ��㡣");
            } else if (cm.getItemQuantity(4000463) < selectedpay) {
                cm.sendOk("�һ����ִ����뷴��������Ա��");
            } else {
                cm.gainItem(4000463, - selectedpay);
                cm.gainItem(4310002, + selectedpay * 4);
                cm.sendOk("��ϲ���ɹ��һ�#b " + selectedpay * 4 + " #k��7����������ҡ�");
            }
            cm.dispose();
        } else {
            cm.dispose();
        }
    }
}