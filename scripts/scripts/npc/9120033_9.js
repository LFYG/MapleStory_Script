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
        var selStr = "��ã���ѡ������Ҫ�һ�����Ʒ��#b\r\n#L0#ǹ�����سɾ�#v2044303#\r\n#L1#ì�����سɾ�#v2044403#\r\n#L2#�������سɾ�#v2044503#\r\n#L3#�󹥻��سɾ�#v2044603#\r\n#L4#ȭ�׹����سɾ�#v2044703#\r\n#L5#ָ�ڹ����سɾ�#v2044815#\r\n#L6#��ǹ�����سɾ�#v2044908#\r\n#L7#����ħ���سɾ�#v2043703#\r\n#L8#�̽������سɾ�#v2043303#\r\n#L9#����ħ���سɾ�#v2043803#\r\n#L10#���׹����سɾ�#v2040807#\r\n#L11#Ь����Ծ�سɾ�#v2040710#\r\n#L12#���ֽ������سɾ�#v2043003#\r\n#L13#˫�ֽ������سɾ�#v2044003#\r\n#L14#���ָ������سɾ�#v2043103#\r\n#L15#˫�ָ������سɾ�#v2044103#\r\n#L16#���ֶ��������سɾ�#v2043203#\r\n#L17#˫�ֶ��������سɾ�#v2044203#";
 cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
            if (cm.itemQuantity(4310002) >=800 && cm.getMeso() >= 1000000 && cm.getSpace(2) >= 1){
                cm.gainMeso( - 1000000);
		cm.gainItem(4310002,-800);
		cm.gainItem(2044303,1);
                cm.sendOk("#r�һ��ɹ�:#b\r\n1.ǹ�����سɾ�+5");
		cm.dispose();
            } else {
                cm.sendOk("�һ���ʾ��\r\n#b1.��û���㹻��7��������(800��)���Ǯ!\r\nע:(������1����λ����.)");
		cm.dispose();
            }
            break;
        case 1:
            if (cm.itemQuantity(4310002) >=800 && cm.getMeso() >= 1000000 && cm.getSpace(2) >= 1){
                cm.gainMeso( - 1000000);
		cm.gainItem(4310002,-800);
		cm.gainItem(2044403,1);
                cm.sendOk("#r�һ��ɹ�:#b\r\n1.ì�����سɾ�+5");
		cm.dispose();
            } else {
                cm.sendOk("�һ���ʾ��\r\n#b1.��û���㹻��7��������(800��)���Ǯ!\r\nע:(������1����λ����.)");
		cm.dispose();
            }
            break;
        case 2:
            if (cm.itemQuantity(4310002) >=800 && cm.getMeso() >= 1000000 && cm.getSpace(2) >= 1){
                cm.gainMeso( - 1000000);
		cm.gainItem(4310002,-800);
		cm.gainItem(2044503,1);
                cm.sendOk("#r�һ��ɹ�:#b\r\n1.�������سɾ�+5");
		cm.dispose();
            } else {
                cm.sendOk("�һ���ʾ��\r\n#b1.��û���㹻��7��������(800��)���Ǯ!\r\nע:(������1����λ����.)");
		cm.dispose();
            }
            break;
        case 3:
            if (cm.itemQuantity(4310002) >=800 && cm.getMeso() >= 1000000 && cm.getSpace(2) >= 1){
                cm.gainMeso( - 1000000);
		cm.gainItem(4310002,-800);
		cm.gainItem(2044603,1);
                cm.sendOk("#r�һ��ɹ�:#b\r\n1.�󹥻��سɾ�+5");
		cm.dispose();
            } else {
                cm.sendOk("�һ���ʾ��\r\n#b1.��û���㹻��7��������(800��)���Ǯ!\r\nע:(������1����λ����.)");
		cm.dispose();
            }
            break;
        case 4:
            if (cm.itemQuantity(4310002) >=800 && cm.getMeso() >= 1000000 && cm.getSpace(2) >= 1){
                cm.gainMeso( - 1000000);
		cm.gainItem(4310002,-800);
		cm.gainItem(2044703,1);
                cm.sendOk("#r�һ��ɹ�:#b\r\n1.ȭ�׹����سɾ�+5");
		cm.dispose();
            } else {
                cm.sendOk("�һ���ʾ��\r\n#b1.��û���㹻��7��������(800��)���Ǯ!\r\nע:(������1����λ����.)");
		cm.dispose();
            }
            break;
        case 5:
            if (cm.itemQuantity(4310002) >=800 && cm.getMeso() >= 1000000 && cm.getSpace(2) >= 1){
                cm.gainMeso( - 1000000);
		cm.gainItem(4310002,-800);
		cm.gainItem(2044815,1);
                cm.sendOk("#r�һ��ɹ�:#b\r\n1.ָ�ڹ����سɾ�+5");
		cm.dispose();
            } else {
                cm.sendOk("�һ���ʾ��\r\n#b1.��û���㹻��7��������(800��)���Ǯ!\r\nע:(������1����λ����.)");
		cm.dispose();
            }
            break;
        case 6:
            if (cm.itemQuantity(4310002) >=800 && cm.getMeso() >= 1000000 && cm.getSpace(2) >= 1){
                cm.gainMeso( - 1000000);
		cm.gainItem(4310002,-800);
		cm.gainItem(2044908,1);
                cm.sendOk("#r�һ��ɹ�:#b\r\n1.��ǹ�����سɾ�+5");
		cm.dispose();
            } else {
                cm.sendOk("�һ���ʾ��\r\n#b1.��û���㹻��7��������(800��)���Ǯ!\r\nע:(������1����λ����.)");
		cm.dispose();
            }
            break;
        case 7:
            if (cm.itemQuantity(4310002) >=800 && cm.getMeso() >= 1000000 && cm.getSpace(2) >= 1){
                cm.gainMeso( - 1000000);
		cm.gainItem(4310002,-800);
		cm.gainItem(2043703,1);
                cm.sendOk("#r�һ��ɹ�:#b\r\n1.����ħ���سɾ�+5");
		cm.dispose();
            } else {
                cm.sendOk("�һ���ʾ��\r\n#b1.��û���㹻��7��������(800��)���Ǯ!\r\nע:(������1����λ����.)");
		cm.dispose();
            }
            break;
        case 8:
            if (cm.itemQuantity(4310002) >=800 && cm.getMeso() >= 1000000 && cm.getSpace(2) >= 1){
                cm.gainMeso( - 1000000);
		cm.gainItem(4310002,-800);
		cm.gainItem(2043303,1);
                cm.sendOk("#r�һ��ɹ�:#b\r\n1.�̽������سɾ�+5");
		cm.dispose();
            } else {
                cm.sendOk("�һ���ʾ��\r\n#b1.��û���㹻��7��������(800��)���Ǯ!\r\nע:(������1����λ����.)");
		cm.dispose();
            }
            break;
        case 9:
            if (cm.itemQuantity(4310002) >=800 && cm.getMeso() >= 1000000 && cm.getSpace(2) >= 1){
                cm.gainMeso( - 1000000);
		cm.gainItem(4310002,-800);
		cm.gainItem(2043803,1);
                cm.sendOk("#r�һ��ɹ�:#b\r\n1.����ħ���سɾ�+5");
		cm.dispose();
            } else {
                cm.sendOk("�һ���ʾ��\r\n#b1.��û���㹻��7��������(800��)���Ǯ!\r\nע:(������1����λ����.)");
		cm.dispose();
            }
            break;
        case 10:
            if (cm.itemQuantity(4310002) >=800 && cm.getMeso() >= 1000000 && cm.getSpace(2) >= 1){
                cm.gainMeso( - 1000000);
		cm.gainItem(4310002,-800);
		cm.gainItem(2040807,1);
                cm.sendOk("#r�һ��ɹ�:#b\r\n1.���׹����سɾ�+3");
		cm.dispose();
            } else {
                cm.sendOk("�һ���ʾ��\r\n#b1.��û���㹻��7��������(800��)���Ǯ!\r\nע:(������1����λ����.)");
		cm.dispose();
            }
            break;
        case 11:
            if (cm.itemQuantity(4310002) >=800 && cm.getMeso() >= 1000000 && cm.getSpace(2) >= 1){
                cm.gainMeso( - 1000000);
		cm.gainItem(4310002,-800);
		cm.gainItem(2040710,1);
                cm.sendOk("#r�һ��ɹ�:#b\r\n1.Ь����Ծ�سɾ�+3");
		cm.dispose();
            } else {
                cm.sendOk("�һ���ʾ��\r\n#b1.��û���㹻��7��������(800��)���Ǯ!\r\nע:(������1����λ����.)");
		cm.dispose();
            }
            break;
        case 12:
            if (cm.itemQuantity(4310002) >=800 && cm.getMeso() >= 1000000 && cm.getSpace(2) >= 1){
                cm.gainMeso( - 1000000);
		cm.gainItem(4310002,-800);
		cm.gainItem(2043003,1);
                cm.sendOk("#r�һ��ɹ�:#b\r\n1.���ֽ������سɾ�+5");
		cm.dispose();
            } else {
                cm.sendOk("�һ���ʾ��\r\n#b1.��û���㹻��7��������(800��)���Ǯ!\r\nע:(������1����λ����.)");
		cm.dispose();
            }
            break;
        case 13:
            if (cm.itemQuantity(4310002) >=800 && cm.getMeso() >= 1000000 && cm.getSpace(2) >= 1){
                cm.gainMeso( - 1000000);
		cm.gainItem(4310002,-800);
		cm.gainItem(2044003,1);
                cm.sendOk("#r�һ��ɹ�:#b\r\n1.˫�ֽ������سɾ�+5");
		cm.dispose();
            } else {
                cm.sendOk("�һ���ʾ��\r\n#b1.��û���㹻��7��������(800��)���Ǯ!\r\nע:(������1����λ����.)");
		cm.dispose();
            }
            break;
        case 14:
            if (cm.itemQuantity(4310002) >=800 && cm.getMeso() >= 1000000 && cm.getSpace(2) >= 1){
                cm.gainMeso( - 1000000);
		cm.gainItem(4310002,-800);
		cm.gainItem(2043103,1);
                cm.sendOk("#r�һ��ɹ�:#b\r\n1.���ָ������سɾ�+5");
		cm.dispose();
            } else {
                cm.sendOk("�һ���ʾ��\r\n#b1.��û���㹻��7��������(800��)���Ǯ!\r\nע:(������1����λ����.)");
		cm.dispose();
            }
            break;
        case 15:
            if (cm.itemQuantity(4310002) >=800 && cm.getMeso() >= 1000000 && cm.getSpace(2) >= 1){
                cm.gainMeso( - 1000000);
		cm.gainItem(4310002,-800);
		cm.gainItem(2044103,1);
                cm.sendOk("#r�һ��ɹ�:#b\r\n1.˫�ָ������سɾ�+5");
		cm.dispose();
            } else {
                cm.sendOk("�һ���ʾ��\r\n#b1.��û���㹻��7��������(800��)���Ǯ!\r\nע:(������1����λ����.)");
		cm.dispose();
            }
            break;
        case 16:
            if (cm.itemQuantity(4310002) >=800 && cm.getMeso() >= 1000000 && cm.getSpace(2) >= 1){
                cm.gainMeso( - 1000000);
		cm.gainItem(4310002,-800);
		cm.gainItem(2043203,1);
                cm.sendOk("#r�һ��ɹ�:#b\r\n1.���ֶ��������سɾ�+5");
		cm.dispose();
            } else {
                cm.sendOk("�һ���ʾ��\r\n#b1.��û���㹻��7��������(800��)���Ǯ!\r\nע:(������1����λ����.)");
		cm.dispose();
            }
            break;
        case 17:
            if (cm.itemQuantity(4310002) >=800 && cm.getMeso() >= 1000000 && cm.getSpace(2) >= 1){
                cm.gainMeso( - 1000000);
		cm.gainItem(4310002,-800);
		cm.gainItem(2044203,1);
                cm.sendOk("#r�һ��ɹ�:#b\r\n1.˫�ֶ��������سɾ�+5");
		cm.dispose();
            } else {
                cm.sendOk("�һ���ʾ��\r\n#b1.��û���㹻��7��������(800��)���Ǯ!\r\nע:(������1����λ����.)");
		cm.dispose();
            }
            break;
        }
    }
}