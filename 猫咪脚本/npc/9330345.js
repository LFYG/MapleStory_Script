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
        var selStr = "#r#v2210006##v2210006##v2210006##v2210006##v2210006##v2210006##v2210006##v2210006##v2210006##v2210006##v2210006##v2210006#\r\n���к���ţ��:#r " + cm.getItemQuantity(4000016) + " #k#v4000016#   ��鿴�����Ƿ��п�λ!  \r\n    #L1#����ţ�Ƕһ��н�   (#r400��#v4000016# = 1��#v4000463##k)#l\r\n    #L2#����ţ�Ƕһ��н�   (#r4000��#v4000016#  = 10��#v4000463##k)#l   \r\n\r\n#v2210006##v2210006##v2210006##v2210006##v2210006##v2210006##v2210006##v2210006##v2210006##v2210006##v2210006##v2210006#";
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 1:
            if (cm.haveItem(4000016,400)) {
		cm.gainItem(4000016, -400);
                cm.gainItem(4000463,1);
                cm.sendOk("��ţ�Ƕһ��ɹ�\r\nף����Ϸ���!");
            } else {
                cm.sendOk("��û�к���ţ��x200,�Ҳ�������һ�");
            }
            break;
        case 2:
            if (cm.haveItem(4000016,4000)) {
		cm.gainItem(4000016, -4000);
                cm.gainItem(4000463,10);
                cm.sendOk("��ţ�Ƕһ��ɹ�\r\nף����Ϸ���!");
            } else {
                cm.sendOk("��û�к���ţ��x2000,�Ҳ�������һ�");
            }
            break;
        }
        cm.dispose();
    }
}