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
        var selStr = "��ã���ѡ������Ҫ�һ�����Ʒ��#b\r\n������سɾ�+7��#L0##v2046010##L1##v2046011##L2##v2046110##L3##v2046111##l";
 cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
            if (cm.itemQuantity(4310002) >=800 && cm.getMeso() >= 1000000){
                cm.gainMeso( - 1000000);
		cm.gainItem(4310002,-800);
		cm.gainItem(2046010,1);
                cm.sendOk("#r�һ��ɹ�:#b\r\n1.�����쵥�ֹ����سɾ�+7");
        	cm.dispose();
            } else {
                cm.sendOk("�һ���ʾ��\r\n#b1.��û���㹻��7�����������Ǯ!\r\nע:(װ����3����λ����,������1����λ����.)");
        	cm.dispose();
            }
            break;
        case 1:
            if (cm.itemQuantity(4310002) >=800 && cm.getMeso() >= 1000000){
                cm.gainMeso( - 1000000);
		cm.gainItem(4310002,-800);
		cm.gainItem(2046011,1);
                cm.sendOk("#r�һ��ɹ�:#b\r\n1.�����쵥��ħ���سɾ�+7");
        	cm.dispose();
            } else {
                cm.sendOk("�һ���ʾ��\r\n#b1.��û���㹻��7�����������Ǯ!\r\nע:(װ����3����λ����,������1����λ����.)");
        	cm.dispose();
            }
            break;
        case 2:
            if (cm.itemQuantity(4310002) >=800 && cm.getMeso() >= 1000000){
                cm.gainMeso( - 1000000);
		cm.gainItem(4310002,-800);
		cm.gainItem(2046110,1);
                cm.sendOk("#r�һ��ɹ�:#b\r\n1.������˫�ֹ����سɾ�+7");
        	cm.dispose();
            } else {
                cm.sendOk("�һ���ʾ��\r\n#b1.��û���㹻��7�����������Ǯ!\r\nע:(װ����3����λ����,������1����λ����.)");
        	cm.dispose();
            }
            break;
        case 3:
            if (cm.itemQuantity(4310002) >=800 && cm.getMeso() >= 1000000){
                cm.gainMeso( - 1000000);
		cm.gainItem(4310002,-800);
		cm.gainItem(2046111,1);
                cm.sendOk("#r�һ��ɹ�:#b\r\n1.������˫��ħ���سɾ�+7");
        	cm.dispose();
            } else {
                cm.sendOk("�һ���ʾ��\r\n#b1.��û���㹻��7�����������Ǯ!\r\nע:(װ����3����λ����,������1����λ����.)");
        	cm.dispose();
            }
            break;
        }
    }
}