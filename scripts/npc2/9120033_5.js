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
        var selStr = "��ã���ѡ������Ҫ�һ�����Ʒ��#b\r\n������˹սʿ��#L0##v1003177##L1##v1102280##L2##v1082300##L3##v1052319##L4##v1072490##l\r\n�����˹��ʦ��#L5##v1003178##L6##v1102281##L7##v1082301##L8##v1052320##L9##v1072491##l\r\n����ŵ˹������#L10##v1003179##L11##v1102282##L12##v1082302##L13##v1052321##L14##v1072492##l\r\n�ն���˹������#L15##v1003180##L16##v1102283##L17##v1082303##L18##v1052322##L19##v1072493##l\r\nά����˹������#L20##v1003181##L21##v1102284##L22##v1082304##L23##v1052323##L24##v1072494#";
 cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
            if (cm.itemQuantity(1003177) >=1 && cm.getMeso() >= 15000000){
                cm.gainMeso( - 15000000);
		cm.gainItem(1003177,-1);
		cm.gainItem(5062000,2);
		cm.gainItem(5062001,2);
		cm.gainItem(5062002,1);
		cm.gainItem(4310002,1);
                cm.gainNX(2, 1000);
                cm.sendOk("#r�һ��ɹ�:#b\r\n1.����ħ��\r\n2.����ħ��\r\n3.�߼�ħ��\r\n4.1000����\r\n5.7���꽻�ױ�");
		cm.dispose();
            } else {
                cm.sendOk("�һ���ʾ��\r\n#b1.��û���㹻�Ľ�Ǯ(*1500W)���װ��!\r\nע:(װ����3����λ����,������1����λ����).");
		cm.dispose();
            }
            break;
        case 1:
            if (cm.itemQuantity(1102280) >=1 && cm.getMeso() >= 15000000){
                cm.gainMeso( - 15000000);
		cm.gainItem(1102280,-1);
		cm.gainItem(5062000,2);
		cm.gainItem(5062001,2);
		cm.gainItem(5062002,1);
		cm.gainItem(4310002,1);
                cm.gainNX(2, 1000);
                cm.sendOk("#r�һ��ɹ�:#b\r\n1.����ħ��\r\n2.����ħ��\r\n3.�߼�ħ��\r\n4.1000����\r\n5.7���꽻�ױ�");
		cm.dispose();
            } else {
                cm.sendOk("�һ���ʾ��\r\n#b1.��û���㹻�Ľ�Ǯ(*1500W)���װ��!\r\nע:(װ����3����λ����,������1����λ����).");
		cm.dispose();
            }
            break;
        case 2:
            if (cm.itemQuantity(1082300) >=1 && cm.getMeso() >= 15000000){
                cm.gainMeso( - 15000000);
		cm.gainItem(1082300,-1);
		cm.gainItem(5062000,2);
		cm.gainItem(5062001,2);
		cm.gainItem(5062002,1);
		cm.gainItem(4310002,1);
                cm.gainNX(2, 1000);
                cm.sendOk("#r�һ��ɹ�:#b\r\n1.����ħ��\r\n2.����ħ��\r\n3.�߼�ħ��\r\n4.1000����\r\n5.7���꽻�ױ�");
		cm.dispose();
            } else {
                cm.sendOk("�һ���ʾ��\r\n#b1.��û���㹻�Ľ�Ǯ(*1500W)���װ��!\r\nע:(װ����3����λ����,������1����λ����).");
		cm.dispose();
            }
            break;
        case 3:
            if (cm.itemQuantity(1052319) >=1 && cm.getMeso() >= 15000000){
                cm.gainMeso( - 15000000);
		cm.gainItem(1052319,-1);
		cm.gainItem(5062000,2);
		cm.gainItem(5062001,2);
		cm.gainItem(5062002,1);
		cm.gainItem(4310002,1);
                cm.gainNX(2, 1000);
                cm.sendOk("#r�һ��ɹ�:#b\r\n1.����ħ��\r\n2.����ħ��\r\n3.�߼�ħ��\r\n4.1000����\r\n5.7���꽻�ױ�");
		cm.dispose();
            } else {
                cm.sendOk("�һ���ʾ��\r\n#b1.��û���㹻�Ľ�Ǯ(*1500W)���װ��!\r\nע:(װ����3����λ����,������1����λ����).");
		cm.dispose();
            }
            break;
        case 4:
            if (cm.itemQuantity(1072490) >=1 && cm.getMeso() >= 15000000){
                cm.gainMeso( - 15000000);
		cm.gainItem(1072490,-1);
		cm.gainItem(5062000,2);
		cm.gainItem(5062001,2);
		cm.gainItem(5062002,1);
		cm.gainItem(4310002,1);
                cm.gainNX(2, 1000);
                cm.sendOk("#r�һ��ɹ�:#b\r\n1.����ħ��\r\n2.����ħ��\r\n3.�߼�ħ��\r\n4.1000����\r\n5.7���꽻�ױ�");
		cm.dispose();
            } else {
                cm.sendOk("�һ���ʾ��\r\n#b1.��û���㹻�Ľ�Ǯ(*1500W)���װ��!\r\nע:(װ����3����λ����,������1����λ����).");
		cm.dispose();
            }
            break;
        case 5:
            if (cm.itemQuantity(1003178) >=1 && cm.getMeso() >= 15000000){
                cm.gainMeso( - 15000000);
		cm.gainItem(1003178,-1);
		cm.gainItem(5062000,2);
		cm.gainItem(5062001,2);
		cm.gainItem(5062002,1);
		cm.gainItem(4310002,1);
                cm.gainNX(2, 1000);
                cm.sendOk("#r�һ��ɹ�:#b\r\n1.����ħ��\r\n2.����ħ��\r\n3.�߼�ħ��\r\n4.1000����\r\n5.7���꽻�ױ�");
		cm.dispose();
            } else {
                cm.sendOk("�һ���ʾ��\r\n#b1.��û���㹻�Ľ�Ǯ(*1500W)���װ��!\r\nע:(װ����3����λ����,������1����λ����).");
		cm.dispose();
            }
            break;
        case 6:
            if (cm.itemQuantity(1102281) >=1 && cm.getMeso() >= 15000000){
                cm.gainMeso( - 15000000);
		cm.gainItem(1102281,-1);
		cm.gainItem(5062000,2);
		cm.gainItem(5062001,2);
		cm.gainItem(5062002,1);
		cm.gainItem(4310002,1);
                cm.gainNX(2, 1000);
                cm.sendOk("#r�һ��ɹ�:#b\r\n1.����ħ��\r\n2.����ħ��\r\n3.�߼�ħ��\r\n4.1000����\r\n5.7���꽻�ױ�");
		cm.dispose();
            } else {
                cm.sendOk("�һ���ʾ��\r\n#b1.��û���㹻�Ľ�Ǯ(*1500W)���װ��!\r\nע:(װ����3����λ����,������1����λ����).");
		cm.dispose();
            }
            break;
        case 7:
            if (cm.itemQuantity(1082301) >=1 && cm.getMeso() >= 15000000){
                cm.gainMeso( - 15000000);
		cm.gainItem(1082301,-1);
		cm.gainItem(5062000,2);
		cm.gainItem(5062001,2);
		cm.gainItem(5062002,1);
		cm.gainItem(4310002,1);
                cm.gainNX(2, 1000);
                cm.sendOk("#r�һ��ɹ�:#b\r\n1.����ħ��\r\n2.����ħ��\r\n3.�߼�ħ��\r\n4.1000����\r\n5.7���꽻�ױ�");
		cm.dispose();
            } else {
                cm.sendOk("�һ���ʾ��\r\n#b1.��û���㹻�Ľ�Ǯ(*1500W)���װ��!\r\nע:(װ����3����λ����,������1����λ����).");
		cm.dispose();
            }
            break;
        case 8:
            if (cm.itemQuantity(1052320) >=1 && cm.getMeso() >= 15000000){
                cm.gainMeso( - 15000000);
		cm.gainItem(1052320,-1);
		cm.gainItem(5062000,2);
		cm.gainItem(5062001,2);
		cm.gainItem(5062002,1);
		cm.gainItem(4310002,1);
                cm.gainNX(2, 1000);
                cm.sendOk("#r�һ��ɹ�:#b\r\n1.����ħ��\r\n2.����ħ��\r\n3.�߼�ħ��\r\n4.1000����\r\n5.7���꽻�ױ�");
		cm.dispose();
            } else {
                cm.sendOk("�һ���ʾ��\r\n#b1.��û���㹻�Ľ�Ǯ(*1500W)���װ��!\r\nע:(װ����3����λ����,������1����λ����).");
		cm.dispose();
            }
            break;
        case 9:
            if (cm.itemQuantity(1072491) >=1 && cm.getMeso() >= 15000000){
                cm.gainMeso( - 15000000);
		cm.gainItem(1072491,-1);
		cm.gainItem(5062000,2);
		cm.gainItem(5062001,2);
		cm.gainItem(5062002,1);
		cm.gainItem(4310002,1);
                cm.gainNX(2, 1000);
                cm.sendOk("#r�һ��ɹ�:#b\r\n1.����ħ��\r\n2.����ħ��\r\n3.�߼�ħ��\r\n4.1000����\r\n5.7���꽻�ױ�");
		cm.dispose();
            } else {
                cm.sendOk("�һ���ʾ��\r\n#b1.��û���㹻�Ľ�Ǯ(*1500W)���װ��!\r\nע:(װ����3����λ����,������1����λ����).");
		cm.dispose();
            }
            break;
        case 10:
            if (cm.itemQuantity(1003179) >=1 && cm.getMeso() >= 15000000){
                cm.gainMeso( - 15000000);
		cm.gainItem(1003179,-1);
		cm.gainItem(5062000,2);
		cm.gainItem(5062001,2);
		cm.gainItem(5062002,1);
		cm.gainItem(4310002,1);
                cm.gainNX(2, 1000);
                cm.sendOk("#r�һ��ɹ�:#b\r\n1.����ħ��\r\n2.����ħ��\r\n3.�߼�ħ��\r\n4.1000����\r\n5.7���꽻�ױ�");
		cm.dispose();
            } else {
                cm.sendOk("�һ���ʾ��\r\n#b1.��û���㹻�Ľ�Ǯ(*1500W)���װ��!\r\nע:(װ����3����λ����,������1����λ����).");
		cm.dispose();
            }
            break;
        case 11:
            if (cm.itemQuantity(1102282) >=1 && cm.getMeso() >= 15000000){
                cm.gainMeso( - 15000000);
		cm.gainItem(1102282,-1);
		cm.gainItem(5062000,2);
		cm.gainItem(5062001,2);
		cm.gainItem(5062002,1);
		cm.gainItem(4310002,1);
                cm.gainNX(2, 1000);
                cm.sendOk("#r�һ��ɹ�:#b\r\n1.����ħ��\r\n2.����ħ��\r\n3.�߼�ħ��\r\n4.1000����\r\n5.7���꽻�ױ�");
		cm.dispose();
            } else {
                cm.sendOk("�һ���ʾ��\r\n#b1.��û���㹻�Ľ�Ǯ(*1500W)���װ��!\r\nע:(װ����3����λ����,������1����λ����).");
		cm.dispose();
            }
            break;
        case 12:
            if (cm.itemQuantity(1082302) >=1 && cm.getMeso() >= 15000000){
                cm.gainMeso( - 15000000);
		cm.gainItem(1082302,-1);
		cm.gainItem(5062000,2);
		cm.gainItem(5062001,2);
		cm.gainItem(5062002,1);
		cm.gainItem(4310002,1);
                cm.gainNX(2, 1000);
                cm.sendOk("#r�һ��ɹ�:#b\r\n1.����ħ��\r\n2.����ħ��\r\n3.�߼�ħ��\r\n4.1000����\r\n5.7���꽻�ױ�");
		cm.dispose();
            } else {
                cm.sendOk("�һ���ʾ��\r\n#b1.��û���㹻�Ľ�Ǯ(*1500W)���װ��!\r\nע:(װ����3����λ����,������1����λ����).");
		cm.dispose();
            }
            break;
        case 13:
            if (cm.itemQuantity(1052321) >=1 && cm.getMeso() >= 15000000){
                cm.gainMeso( - 15000000);
		cm.gainItem(1052321,-1);
		cm.gainItem(5062000,2);
		cm.gainItem(5062001,2);
		cm.gainItem(5062002,1);
		cm.gainItem(4310002,1);
                cm.gainNX(2, 1000);
                cm.sendOk("#r�һ��ɹ�:#b\r\n1.����ħ��\r\n2.����ħ��\r\n3.�߼�ħ��\r\n4.1000����\r\n5.7���꽻�ױ�");
		cm.dispose();
            } else {
                cm.sendOk("�һ���ʾ��\r\n#b1.��û���㹻�Ľ�Ǯ(*1500W)���װ��!\r\nע:(װ����3����λ����,������1����λ����).");
		cm.dispose();
            }
            break;
        case 14:
            if (cm.itemQuantity(1072492) >=1 && cm.getMeso() >= 15000000){
                cm.gainMeso( - 15000000);
		cm.gainItem(1072492,-1);
		cm.gainItem(5062000,2);
		cm.gainItem(5062001,2);
		cm.gainItem(5062002,1);
		cm.gainItem(4310002,1);
                cm.gainNX(2, 1000);
                cm.sendOk("#r�һ��ɹ�:#b\r\n1.����ħ��\r\n2.����ħ��\r\n3.�߼�ħ��\r\n4.1000����\r\n5.7���꽻�ױ�");
		cm.dispose();
            } else {
                cm.sendOk("�һ���ʾ��\r\n#b1.��û���㹻�Ľ�Ǯ(*1500W)���װ��!\r\nע:(װ����3����λ����,������1����λ����).");
		cm.dispose();
            }
            break;
        case 15:
            if (cm.itemQuantity(1003180) >=1 && cm.getMeso() >= 15000000){
                cm.gainMeso( - 15000000);
		cm.gainItem(1003180,-1);
		cm.gainItem(5062000,2);
		cm.gainItem(5062001,2);
		cm.gainItem(5062002,1);
		cm.gainItem(4310002,1);
                cm.gainNX(2, 1000);
                cm.sendOk("#r�һ��ɹ�:#b\r\n1.����ħ��\r\n2.����ħ��\r\n3.�߼�ħ��\r\n4.1000����\r\n5.7���꽻�ױ�");
		cm.dispose();
            } else {
                cm.sendOk("�һ���ʾ��\r\n#b1.��û���㹻�Ľ�Ǯ(*1500W)���װ��!\r\nע:(װ����3����λ����,������1����λ����).");
		cm.dispose();
            }
            break;
        case 16:
            if (cm.itemQuantity(1102283) >=1 && cm.getMeso() >= 15000000){
                cm.gainMeso( - 15000000);
		cm.gainItem(1102283,-1);
		cm.gainItem(5062000,2);
		cm.gainItem(5062001,2);
		cm.gainItem(5062002,1);
		cm.gainItem(4310002,1);
                cm.gainNX(2, 1000);
                cm.sendOk("#r�һ��ɹ�:#b\r\n1.����ħ��\r\n2.����ħ��\r\n3.�߼�ħ��\r\n4.1000����\r\n5.7���꽻�ױ�");
		cm.dispose();
            } else {
                cm.sendOk("�һ���ʾ��\r\n#b1.��û���㹻�Ľ�Ǯ(*1500W)���װ��!\r\nע:(װ����3����λ����,������1����λ����).");
		cm.dispose();
            }
            break;
        case 17:
            if (cm.itemQuantity(1082303) >=1 && cm.getMeso() >= 15000000){
                cm.gainMeso( - 15000000);
		cm.gainItem(1082303,-1);
		cm.gainItem(5062000,2);
		cm.gainItem(5062001,2);
		cm.gainItem(5062002,1);
		cm.gainItem(4310002,1);
                cm.gainNX(2, 1000);
                cm.sendOk("#r�һ��ɹ�:#b\r\n1.����ħ��\r\n2.����ħ��\r\n3.�߼�ħ��\r\n4.1000����\r\n5.7���꽻�ױ�");
		cm.dispose();
            } else {
                cm.sendOk("�һ���ʾ��\r\n#b1.��û���㹻�Ľ�Ǯ(*1500W)���װ��!\r\nע:(װ����3����λ����,������1����λ����).");
		cm.dispose();
            }
            break;
        case 18:
            if (cm.itemQuantity(1052322) >=1 && cm.getMeso() >= 15000000){
                cm.gainMeso( - 15000000);
		cm.gainItem(1052322,-1);
		cm.gainItem(5062000,2);
		cm.gainItem(5062001,2);
		cm.gainItem(5062002,1);
		cm.gainItem(4310002,1);
                cm.gainNX(2, 1000);
                cm.sendOk("#r�һ��ɹ�:#b\r\n1.����ħ��\r\n2.����ħ��\r\n3.�߼�ħ��\r\n4.1000����\r\n5.7���꽻�ױ�");
		cm.dispose();
            } else {
                cm.sendOk("�һ���ʾ��\r\n#b1.��û���㹻�Ľ�Ǯ(*1500W)���װ��!\r\nע:(װ����3����λ����,������1����λ����).");
		cm.dispose();
            }
            break;
        case 19:
            if (cm.itemQuantity(1072493) >=1 && cm.getMeso() >= 15000000){
                cm.gainMeso( - 15000000);
		cm.gainItem(1072493,-1);
		cm.gainItem(5062000,2);
		cm.gainItem(5062001,2);
		cm.gainItem(5062002,1);
		cm.gainItem(4310002,1);
                cm.gainNX(2, 1000);
                cm.sendOk("#r�һ��ɹ�:#b\r\n1.����ħ��\r\n2.����ħ��\r\n3.�߼�ħ��\r\n4.1000����\r\n5.7���꽻�ױ�");
		cm.dispose();
            } else {
                cm.sendOk("�һ���ʾ��\r\n#b1.��û���㹻�Ľ�Ǯ(*1500W)���װ��!\r\nע:(װ����3����λ����,������1����λ����).");
		cm.dispose();
            }
            break;
        case 20:
            if (cm.itemQuantity(1003181) >=1 && cm.getMeso() >= 15000000){
                cm.gainMeso( - 15000000);
		cm.gainItem(1003181,-1);
		cm.gainItem(5062000,2);
		cm.gainItem(5062001,2);
		cm.gainItem(5062002,1);
		cm.gainItem(4310002,1);
                cm.gainNX(2, 1000);
                cm.sendOk("#r�һ��ɹ�:#b\r\n1.����ħ��\r\n2.����ħ��\r\n3.�߼�ħ��\r\n4.1000����\r\n5.7���꽻�ױ�");
		cm.dispose();
            } else {
                cm.sendOk("�һ���ʾ��\r\n#b1.��û���㹻�Ľ�Ǯ(*1500W)���װ��!\r\nע:(װ����3����λ����,������1����λ����).");
		cm.dispose();
            }
            break;
        case 21:
            if (cm.itemQuantity(1102284) >=1 && cm.getMeso() >= 15000000){
                cm.gainMeso( - 15000000);
		cm.gainItem(1102284,-1);
		cm.gainItem(5062000,2);
		cm.gainItem(5062001,2);
		cm.gainItem(5062002,1);
		cm.gainItem(4310002,1);
                cm.gainNX(2, 1000);
                cm.sendOk("#r�һ��ɹ�:#b\r\n1.����ħ��\r\n2.����ħ��\r\n3.�߼�ħ��\r\n4.1000����\r\n5.7���꽻�ױ�");
		cm.dispose();
            } else {
                cm.sendOk("�һ���ʾ��\r\n#b1.��û���㹻�Ľ�Ǯ(*1500W)���װ��!\r\nע:(װ����3����λ����,������1����λ����).");
		cm.dispose();
            }
            break;
        case 22:
            if (cm.itemQuantity(1082304) >=1 && cm.getMeso() >= 15000000){
                cm.gainMeso( - 15000000);
		cm.gainItem(1082304,-1);
		cm.gainItem(5062000,2);
		cm.gainItem(5062001,2);
		cm.gainItem(5062002,1);
		cm.gainItem(4310002,1);
                cm.gainNX(2, 1000);
                cm.sendOk("#r�һ��ɹ�:#b\r\n1.����ħ��\r\n2.����ħ��\r\n3.�߼�ħ��\r\n4.1000����\r\n5.7���꽻�ױ�");
		cm.dispose();
            } else {
                cm.sendOk("�һ���ʾ��\r\n#b1.��û���㹻�Ľ�Ǯ(*1500W)���װ��!\r\nע:(װ����3����λ����,������1����λ����).");
		cm.dispose();
            }
            break;
        case 23:
            if (cm.itemQuantity(1052323) >=1 && cm.getMeso() >= 15000000){
                cm.gainMeso( - 15000000);
		cm.gainItem(1052323,-1);
		cm.gainItem(5062000,2);
		cm.gainItem(5062001,2);
		cm.gainItem(5062002,1);
		cm.gainItem(4310002,1);
                cm.gainNX(2, 1000);
                cm.sendOk("#r�һ��ɹ�:#b\r\n1.����ħ��\r\n2.����ħ��\r\n3.�߼�ħ��\r\n4.1000����\r\n5.7���꽻�ױ�");
		cm.dispose();
            } else {
                cm.sendOk("�һ���ʾ��\r\n#b1.��û���㹻�Ľ�Ǯ(*1500W)���װ��!\r\nע:(װ����3����λ����,������1����λ����).");
		cm.dispose();
            }
            break;
        case 24:
            if (cm.itemQuantity(1072494) >=1 && cm.getMeso() >= 15000000){
                cm.gainMeso( - 15000000);
		cm.gainItem(1072494,-1);
		cm.gainItem(5062000,2);
		cm.gainItem(5062001,2);
		cm.gainItem(5062002,1);
		cm.gainItem(4310002,1);
                cm.gainNX(2, 1000);
                cm.sendOk("#r�һ��ɹ�:#b\r\n1.����ħ��\r\n2.����ħ��\r\n3.�߼�ħ��\r\n4.1000����\r\n5.7���꽻�ױ�");
		cm.dispose();
            } else {
                cm.sendOk("�һ���ʾ��\r\n#b1.��û���㹻�Ľ�Ǯ(*1500W)���װ��!\r\nע:(װ����3����λ����,������1����λ����).");
		cm.dispose();
            }
            break;
        }
    }
}