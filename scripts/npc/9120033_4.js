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
        var selStr = "��ã���ѡ������Ҫ�һ�����Ʒ��#b\r\n#L14#�컨��÷��#v1342035#\r\n#L0#������˹Ѫɫ��#v1402096#\r\n#L1#������˹Ѫɫ�#v1422067#\r\n#L2#������˹Ѫɫ��#v1412066#\r\n#L3#������˹Ѫɫ��#v1312066#\r\n#L4#������˹Ѫɫ��#v1322097#\r\n#L5#������˹Ѫɫ��#v1302153#\r\n#L6#������˹Ѫɫì#v1442117#\r\n#L7#������˹Ѫɫǹ#v1432087#\r\n#L8#�����˹Ѫɫ��#v1372085#\r\n#L9#�����˹Ѫɫ��#v1382105#\r\n#L10#����˹Ѫɫ֮��#v1452112#\r\n#L11#����˹Ѫɫ֮��#v1462100#\r\n#L12#�ն���˹Ѫɫɱ#v1332131#\r\n#L13#�ն���˹Ѫɫȭ#v1472123#\r\n#L15#ά����Ѫɫ֮ӥ#v1492086#\r\n#L16#ά����Ѫɫȭ��#v1482085#\r\n#L17#ά��������֮��#v1532017#\r\n#L18#ʷʫѪ��˫��ǹ#v1522017#";
 cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
            if (cm.itemQuantity(1402096) >=1 && cm.getMeso() >= 30000000){
                cm.gainMeso( - 30000000);
		cm.gainItem(1402096,-1);
		cm.gainItem(5062000,2);
		cm.gainItem(5062001,2);
		cm.gainItem(5062002,1);
		cm.gainItem(4310002,2);
                cm.gainNX(2, 2000);
                cm.sendOk("#r�һ��ɹ�:#b\r\n1.����ħ��\r\n2.����ħ��\r\n3.�߼�ħ��\r\n4.2000���þ�\r\n5.7���꽻�ױ�");
		cm.dispose();
            } else {
                cm.sendOk("�һ���ʾ��\r\n#b1.��û���㹻�Ľ�Ǯ(*3000W)���װ��!\r\nע:(װ����3����λ����,������1����λ����).");
		cm.dispose();
            }
            break;
        case 1:
            if (cm.itemQuantity(1422067) >=1 && cm.getMeso() >= 30000000){
                cm.gainMeso( - 30000000);
		cm.gainItem(1422067,-1);
		cm.gainItem(5062000,2);
		cm.gainItem(5062001,2);
		cm.gainItem(5062002,1);
		cm.gainItem(4310002,2);
                cm.gainNX(2, 2000);
                cm.sendOk("#r�һ��ɹ�:#b\r\n1.����ħ��\r\n2.����ħ��\r\n3.�߼�ħ��\r\n4.2000���þ�\r\n5.7���꽻�ױ�");
		cm.dispose();
            } else {
                cm.sendOk("�һ���ʾ��\r\n#b1.��û���㹻�Ľ�Ǯ(*3000W)���װ��!\r\nע:(װ����3����λ����,������1����λ����).");
		cm.dispose();
            }
            break;
        case 2:
            if (cm.itemQuantity(1412066) >=1 && cm.getMeso() >= 30000000){
                cm.gainMeso( - 30000000);
		cm.gainItem(1412066,-1);
		cm.gainItem(5062000,2);
		cm.gainItem(5062001,2);
		cm.gainItem(5062002,1);
		cm.gainItem(4310002,2);
                cm.gainNX(2, 2000);
                cm.sendOk("#r�һ��ɹ�:#b\r\n1.����ħ��\r\n2.����ħ��\r\n3.�߼�ħ��\r\n4.2000���þ�\r\n5.7���꽻�ױ�");
		cm.dispose();
            } else {
                cm.sendOk("�һ���ʾ��\r\n#b1.��û���㹻�Ľ�Ǯ(*3000W)���װ��!\r\nע:(װ����3����λ����,������1����λ����).");
		cm.dispose();
            }
            break;
        case 3:
            if (cm.itemQuantity(1312066) >=1 && cm.getMeso() >= 30000000){
                cm.gainMeso( - 30000000);
		cm.gainItem(1312066,-1);
		cm.gainItem(5062000,2);
		cm.gainItem(5062001,2);
		cm.gainItem(5062002,1);
		cm.gainItem(4310002,2);
                cm.gainNX(2, 2000);
                cm.sendOk("#r�һ��ɹ�:#b\r\n1.����ħ��\r\n2.����ħ��\r\n3.�߼�ħ��\r\n4.2000���þ�\r\n5.7���꽻�ױ�");
		cm.dispose();
            } else {
                cm.sendOk("�һ���ʾ��\r\n#b1.��û���㹻�Ľ�Ǯ(*3000W)���װ��!\r\nע:(װ����3����λ����,������1����λ����).");
		cm.dispose();
            }
            break;
        case 4:
            if (cm.itemQuantity(1322097) >=1 && cm.getMeso() >= 30000000){
                cm.gainMeso( - 30000000);
		cm.gainItem(1322097,-1);
		cm.gainItem(5062000,2);
		cm.gainItem(5062001,2);
		cm.gainItem(5062002,1);
		cm.gainItem(4310002,2);
                cm.gainNX(2, 2000);
                cm.sendOk("#r�һ��ɹ�:#b\r\n1.����ħ��\r\n2.����ħ��\r\n3.�߼�ħ��\r\n4.2000���þ�\r\n5.7���꽻�ױ�");
		cm.dispose();
            } else {
                cm.sendOk("�һ���ʾ��\r\n#b1.��û���㹻�Ľ�Ǯ(*3000W)���װ��!\r\nע:(װ����3����λ����,������1����λ����).");
		cm.dispose();
            }
            break;
        case 5:
            if (cm.itemQuantity(1302153) >=1 && cm.getMeso() >= 30000000){
                cm.gainMeso( - 30000000);
		cm.gainItem(1302153,-1);
		cm.gainItem(5062000,2);
		cm.gainItem(5062001,2);
		cm.gainItem(5062002,1);
		cm.gainItem(4310002,2);
                cm.gainNX(2, 2000);
                cm.sendOk("#r�һ��ɹ�:#b\r\n1.����ħ��\r\n2.����ħ��\r\n3.�߼�ħ��\r\n4.2000���þ�\r\n5.7���꽻�ױ�");
		cm.dispose();
            } else {
                cm.sendOk("�һ���ʾ��\r\n#b1.��û���㹻�Ľ�Ǯ(*3000W)���װ��!\r\nע:(װ����3����λ����,������1����λ����).");
		cm.dispose();
            }
            break;
        case 6:
            if (cm.itemQuantity(1442117) >=1 && cm.getMeso() >= 30000000){
                cm.gainMeso( - 30000000);
		cm.gainItem(1442117,-1);
		cm.gainItem(5062000,2);
		cm.gainItem(5062001,2);
		cm.gainItem(5062002,1);
		cm.gainItem(4310002,2);
                cm.gainNX(2, 2000);
                cm.sendOk("#r�һ��ɹ�:#b\r\n1.����ħ��\r\n2.����ħ��\r\n3.�߼�ħ��\r\n4.2000���þ�\r\n5.7���꽻�ױ�");
		cm.dispose();
            } else {
                cm.sendOk("�һ���ʾ��\r\n#b1.��û���㹻�Ľ�Ǯ(*3000W)���װ��!\r\nע:(װ����3����λ����,������1����λ����).");
		cm.dispose();
            }
            break;
        case 7:
            if (cm.itemQuantity(1432087) >=1 && cm.getMeso() >= 30000000){
                cm.gainMeso( - 30000000);
		cm.gainItem(1432087,-1);
		cm.gainItem(5062000,2);
		cm.gainItem(5062001,2);
		cm.gainItem(5062002,1);
		cm.gainItem(4310002,2);
                cm.gainNX(2, 2000);
                cm.sendOk("#r�һ��ɹ�:#b\r\n1.����ħ��\r\n2.����ħ��\r\n3.�߼�ħ��\r\n4.2000���þ�\r\n5.7���꽻�ױ�");
		cm.dispose();
            } else {
                cm.sendOk("�һ���ʾ��\r\n#b1.��û���㹻�Ľ�Ǯ(*3000W)���װ��!\r\nע:(װ����3����λ����,������1����λ����).");
		cm.dispose();
            }
            break;
        case 8:
            if (cm.itemQuantity(1372085) >=1 && cm.getMeso() >= 30000000){
                cm.gainMeso( - 30000000);
		cm.gainItem(1372085,-1);
		cm.gainItem(5062000,2);
		cm.gainItem(5062001,2);
		cm.gainItem(5062002,1);
		cm.gainItem(4310002,2);
                cm.gainNX(2, 2000);
                cm.sendOk("#r�һ��ɹ�:#b\r\n1.����ħ��\r\n2.����ħ��\r\n3.�߼�ħ��\r\n4.2000���þ�\r\n5.7���꽻�ױ�");
		cm.dispose();
            } else {
                cm.sendOk("�һ���ʾ��\r\n#b1.��û���㹻�Ľ�Ǯ(*3000W)���װ��!\r\nע:(װ����3����λ����,������1����λ����).");
		cm.dispose();
            }
            break;
        case 9:
            if (cm.itemQuantity(1382105) >=1 && cm.getMeso() >= 30000000){
                cm.gainMeso( - 30000000);
		cm.gainItem(1382105,-1);
		cm.gainItem(5062000,2);
		cm.gainItem(5062001,2);
		cm.gainItem(5062002,1);
		cm.gainItem(4310002,2);
                cm.gainNX(2, 2000);
                cm.sendOk("#r�һ��ɹ�:#b\r\n1.����ħ��\r\n2.����ħ��\r\n3.�߼�ħ��\r\n4.2000���þ�\r\n5.7���꽻�ױ�");
		cm.dispose();
            } else {
                cm.sendOk("�һ���ʾ��\r\n#b1.��û���㹻�Ľ�Ǯ(*3000W)���װ��!\r\nע:(װ����3����λ����,������1����λ����).");
		cm.dispose();
            }
            break;
        case 10:
            if (cm.itemQuantity(1452112) >=1 && cm.getMeso() >= 30000000){
                cm.gainMeso( - 30000000);
		cm.gainItem(1452112,-1);
		cm.gainItem(5062000,2);
		cm.gainItem(5062001,2);
		cm.gainItem(5062002,1);
		cm.gainItem(4310002,2);
                cm.gainNX(2, 2000);
                cm.sendOk("#r�һ��ɹ�:#b\r\n1.����ħ��\r\n2.����ħ��\r\n3.�߼�ħ��\r\n4.2000���þ�\r\n5.7���꽻�ױ�");
		cm.dispose();
            } else {
                cm.sendOk("�һ���ʾ��\r\n#b1.��û���㹻�Ľ�Ǯ(*3000W)���װ��!\r\nע:(װ����3����λ����,������1����λ����).");
		cm.dispose();
            }
            break;
        case 11:
            if (cm.itemQuantity(1462100) >=1 && cm.getMeso() >= 30000000){
                cm.gainMeso( - 30000000);
		cm.gainItem(1462100,-1);
		cm.gainItem(5062000,2);
		cm.gainItem(5062001,2);
		cm.gainItem(5062002,1);
		cm.gainItem(4310002,2);
                cm.gainNX(2, 2000);
                cm.sendOk("#r�һ��ɹ�:#b\r\n1.����ħ��\r\n2.����ħ��\r\n3.�߼�ħ��\r\n4.2000���þ�\r\n5.7���꽻�ױ�");
		cm.dispose();
            } else {
                cm.sendOk("�һ���ʾ��\r\n#b1.��û���㹻�Ľ�Ǯ(*3000W)���װ��!\r\nע:(װ����3����λ����,������1����λ����).");
		cm.dispose();
            }
            break;
        case 12:
            if (cm.itemQuantity(1332131) >=1 && cm.getMeso() >= 30000000){
                cm.gainMeso( - 30000000);
		cm.gainItem(1332131,-1);
		cm.gainItem(5062000,2);
		cm.gainItem(5062001,2);
		cm.gainItem(5062002,1);
		cm.gainItem(4310002,2);
                cm.gainNX(2, 2000);
                cm.sendOk("#r�һ��ɹ�:#b\r\n1.����ħ��\r\n2.����ħ��\r\n3.�߼�ħ��\r\n4.2000���þ�\r\n5.7���꽻�ױ�");
		cm.dispose();
            } else {
                cm.sendOk("�һ���ʾ��\r\n#b1.��û���㹻�Ľ�Ǯ(*3000W)���װ��!\r\nע:(װ����3����λ����,������1����λ����).");
		cm.dispose();
            }
            break;
        case 13:
            if (cm.itemQuantity(1472123) >=1 && cm.getMeso() >= 30000000){
                cm.gainMeso( - 30000000);
		cm.gainItem(1472123,-1);
		cm.gainItem(5062000,2);
		cm.gainItem(5062001,2);
		cm.gainItem(5062002,1);
		cm.gainItem(4310002,2);
                cm.gainNX(2, 2000);
                cm.sendOk("#r�һ��ɹ�:#b\r\n1.����ħ��\r\n2.����ħ��\r\n3.�߼�ħ��\r\n4.2000���þ�\r\n5.7���꽻�ױ�");
		cm.dispose();
            } else {
                cm.sendOk("�һ���ʾ��\r\n#b1.��û���㹻�Ľ�Ǯ(*3000W)���װ��!\r\nע:(װ����3����λ����,������1����λ����).");
		cm.dispose();
            }
            break;
        case 14:
            if (cm.itemQuantity(1342035) >=1 && cm.getMeso() >= 30000000){
                cm.gainMeso( - 30000000);
		cm.gainItem(1342035,-1);
		cm.gainItem(5062000,2);
		cm.gainItem(5062001,2);
		cm.gainItem(5062002,1);
		cm.gainItem(4310002,2);
                cm.gainNX(2, 2000);
                cm.sendOk("#r�һ��ɹ�:#b\r\n1.����ħ��\r\n2.����ħ��\r\n3.�߼�ħ��\r\n4.2000���þ�\r\n5.7���꽻�ױ�");
		cm.dispose();
            } else {
                cm.sendOk("�һ���ʾ��\r\n#b1.��û���㹻�Ľ�Ǯ(*3000W)���װ��!\r\nע:(װ����3����λ����,������1����λ����).");
		cm.dispose();
            }
            break;
        case 15:
            if (cm.itemQuantity(1492086) >=1 && cm.getMeso() >= 30000000){
                cm.gainMeso( - 30000000);
		cm.gainItem(1492086,-1);
		cm.gainItem(5062000,2);
		cm.gainItem(5062001,2);
		cm.gainItem(5062002,1);
		cm.gainItem(4310002,2);
                cm.gainNX(2, 2000);
                cm.sendOk("#r�һ��ɹ�:#b\r\n1.����ħ��\r\n2.����ħ��\r\n3.�߼�ħ��\r\n4.2000���þ�\r\n5.7���꽻�ױ�");
		cm.dispose();
            } else {
                cm.sendOk("�һ���ʾ��\r\n#b1.��û���㹻�Ľ�Ǯ(*3000W)���װ��!\r\nע:(װ����3����λ����,������1����λ����).");
		cm.dispose();
            }
            break;
        case 16:
            if (cm.itemQuantity(1482085) >=1 && cm.getMeso() >= 30000000){
                cm.gainMeso( - 30000000);
		cm.gainItem(1482085,-1);
		cm.gainItem(5062000,2);
		cm.gainItem(5062001,2);
		cm.gainItem(5062002,1);
		cm.gainItem(4310002,2);
                cm.gainNX(2, 2000);
                cm.sendOk("#r�һ��ɹ�:#b\r\n1.����ħ��\r\n2.����ħ��\r\n3.�߼�ħ��\r\n4.2000���þ�\r\n5.7���꽻�ױ�");
		cm.dispose();
            } else {
                cm.sendOk("�һ���ʾ��\r\n#b1.��û���㹻�Ľ�Ǯ(*3000W)���װ��!\r\nע:(װ����3����λ����,������1����λ����).");
		cm.dispose();
            }
            break;
        case 17:
            if (cm.itemQuantity(1532017) >=1 && cm.getMeso() >= 30000000){
                cm.gainMeso( - 30000000);
		cm.gainItem(1532017,-1);
		cm.gainItem(5062000,2);
		cm.gainItem(5062001,2);
		cm.gainItem(5062002,1);
		cm.gainItem(4310002,2);
                cm.gainNX(2, 2000);
                cm.sendOk("#r�һ��ɹ�:#b\r\n1.����ħ��\r\n2.����ħ��\r\n3.�߼�ħ��\r\n4.2000���þ�\r\n5.7���꽻�ױ�");
		cm.dispose();
            } else {
                cm.sendOk("�һ���ʾ��\r\n#b1.��û���㹻�Ľ�Ǯ(*3000W)���װ��!\r\nע:(װ����3����λ����,������1����λ����).");
		cm.dispose();
            }
            break;
        case 18:
            if (cm.itemQuantity(1522017) >=1 && cm.getMeso() >= 3000000){
                cm.gainMeso( - 3000000);
		cm.gainItem(1522017,-1);
		cm.gainItem(5062000,2);
		cm.gainItem(5062001,2);
		cm.gainItem(5062002,1);
		cm.gainItem(4310002,2);
                cm.gainNX(2, 2000);
                cm.sendOk("#r�һ��ɹ�:#b\r\n1.����ħ��\r\n2.����ħ��\r\n3.�߼�ħ��\r\n4.2000���þ�\r\n5.7���꽻�ױ�");
		cm.dispose();
            } else {
                cm.sendOk("�һ���ʾ��\r\n#b1.��û���㹻�Ľ�Ǯ(*3000W)���װ��!\r\nע:(װ����3����λ����,������1����λ����).");
		cm.dispose();
            }
            break;
        }
    }
}