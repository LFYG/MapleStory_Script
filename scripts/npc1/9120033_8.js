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
        var selStr = "��ã���ѡ������Ҫ�һ�����Ʒ��#b\r\n#L0#������ָ#v1112915#\r\n#L1#��������#v1132104#\r\n#L5#ʥ��¹����ñ#v1003209#\r\n#L2#����˹��ɫ����#v1032102#\r\n#L3#����˹��ɫ����#v1032103#\r\n#L4#����˹��ɫ����#v1032104#\r\n#L14#����ʹף����ָ#v1112663#\r\n#L6#�ֲ����޵��˿�#v1012170#\r\n#L7#�ֲ����޵��˿�#v1012174#\r\n#L8#ʮ��������ʿ����#v1152059#\r\n#L9#���ѵ�ð��֮��(սʿ+30G)#v1122143#\r\n#L10#���ѵ�ð��֮��(��ʦ+30G)#v1122144#\r\n#L11#���ѵ�ð��֮��(����+30G)#v1122145#\r\n#L12#���ѵ�ð��֮��(����+30G)#v1122146#\r\n#L13#���ѵ�ð��֮��(����+30G)#v1122147#\r\n#L15#��-���ѵ�ð��֮��(սʿ+50G)#v1122143#\r\n#L16#��-���ѵ�ð��֮��(��ʦ+50G)#v1122144#\r\n#L17#��-���ѵ�ð��֮��(����+50G)#v1122145#\r\n#L18#��-���ѵ�ð��֮��(����+50G)#v1122146#\r\n#L19#��-���ѵ�ð��֮��(����+50G)#v1122147#";
 cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
            if (cm.itemQuantity(4310002) >=800 && cm.getMeso() >= 10000000){
                cm.gainMeso( - 10000000);
		cm.gainItem(4310002,-800);
		cm.gainItem(1112915,1);
                cm.sendOk("#r�һ��ɹ�:#b\r\n1.������ָ");
		cm.dispose();
            } else {
                cm.sendOk("�һ���ʾ��\r\n#b1.7�ܼ������x800! ð�ձ�*1000W\r\nע:(װ����3����λ����,������1����λ����.)");
		cm.dispose();
            }
            break;
        case 1:
            if (cm.itemQuantity(4310002) >=250 && cm.getMeso() >= 10000000){
                cm.gainMeso( - 10000000);
		cm.gainItem(4310002,-250);
		cm.gainItem(1132104,1);
                cm.sendOk("#r�һ��ɹ�:#b\r\n1.��������");
		cm.dispose();
            } else {
                cm.sendOk("�һ���ʾ��\r\n#b1.7�ܼ������x250! ð�ձ�*1000W\r\nע:(װ����3����λ����,������1����λ����.)");
		cm.dispose();
            }
            break;
        case 2:
            if (cm.itemQuantity(4310002) >=250 && cm.getMeso() >= 3000000){
                cm.gainMeso( - 10000000);
		cm.gainItem(4310002,-250);
		cm.gainItem(1032102,1);
                cm.sendOk("#r�һ��ɹ�:#b\r\n1.����˹��ɫ����");
		cm.dispose();
            } else {
                cm.sendOk("�һ���ʾ��\r\n#b1.7�ܼ������x250!\r\nע:(װ����3����λ����,������1����λ����.)");
		cm.dispose();
            }
            break;
        case 3:
            if (cm.itemQuantity(4310002) >=250 && cm.getMeso() >= 10000000){
                cm.gainMeso( - 10000000);
		cm.gainItem(4310002,-250);
		cm.gainItem(1032103,1);
                cm.sendOk("#r�һ��ɹ�:#b\r\n1.����˹��ɫ����");
		cm.dispose();
            } else {
                cm.sendOk("�һ���ʾ��\r\n#b1.7�ܼ������x250! ð�ձ�*1000W\r\nע:(װ����3����λ����,������1����λ����.)");
		cm.dispose();
            }
            break;
        case 4:
            if (cm.itemQuantity(4310002) >=250 && cm.getMeso() >= 10000000){
                cm.gainMeso( - 10000000);
		cm.gainItem(4310002,-250);
		cm.gainItem(1032104,1);
                cm.sendOk("#r�һ��ɹ�:#b\r\n1.����˹��ɫ����");
		cm.dispose();
            } else {
                cm.sendOk("�һ���ʾ��\r\n#b1.7�ܼ������x250! ð�ձ�*1000W\r\nע:(װ����3����λ����,������1����λ����.)");
		cm.dispose();
            }
            break;
        case 5:
            if (cm.itemQuantity(4310002) >=1600 && cm.getMeso() >= 10000000){
                cm.gainMeso( - 10000000);
		cm.gainItem(4310002,-1600);
		cm.gainItem(1003209,1);
                cm.sendOk("#r�һ��ɹ�:#b\r\n1.ʥ��¹����ñ");
		cm.dispose();
            } else {
                cm.sendOk("�һ���ʾ��\r\n#b1.7�ܼ������x1600! ð�ձ�*1000W\r\nע:(װ����3����λ����,������1����λ����.)");
		cm.dispose();
            }
            break;
        case 6:
            if (cm.itemQuantity(4310002) >=800 && cm.getMeso() >= 10000000){
                cm.gainMeso( - 10000000);
		cm.gainItem(4310002,-800);
		cm.gainItem(1012170,1);
                cm.sendOk("#r�һ��ɹ�:#b\r\n1.�ֲ����޵��˿�");
		cm.dispose();
            } else {
                cm.sendOk("�һ���ʾ��\r\n#b1.7�ܼ������x800! ð�ձ�*1000W\r\nע:(װ����3����λ����,������1����λ����.)");
		cm.dispose();
            }
            break;
        case 7:
            if (cm.itemQuantity(4310002) >=3200 && cm.getMeso() >= 10000000){
                cm.gainMeso( - 10000000);
		cm.gainItem(4310002,-3200);
		cm.gainItem(1012174,1);
                cm.sendOk("#r�һ��ɹ�:#b\r\n1.�ֲ����޵��˿�");
		cm.dispose();
            } else {
                cm.sendOk("�һ���ʾ��\r\n#b1.7�ܼ������x3200! ð�ձ�*1000W\r\nע:(װ����3����λ����,������1����λ����.)");
		cm.dispose();
            }
            break;
        case 8:
            if (cm.itemQuantity(4310002) >=250 && cm.getMeso() >= 10000000){
                cm.gainMeso( - 10000000);
		cm.gainItem(4310002,-250);
		cm.gainItem(1152059,1);
                cm.sendOk("#r�һ��ɹ�:#b\r\n1.ʮ��������ʿ����");
		cm.dispose();
            } else {
                cm.sendOk("�һ���ʾ��\r\n#b1.7�ܼ������x250! ð�ձ�*1000W\r\nע:(װ����3����λ����,������1����λ����.)");
		cm.dispose();
            }
            break;
        case 9:
            if (cm.itemQuantity(4310002) >=2400 && cm.getMeso() >= 10000000){
                cm.gainMeso( - 10000000);
		cm.gainItem(4310002,-2400);
		cm.gainItem(1122143,1);
                cm.sendOk("#r�һ��ɹ�:#b\r\n1.���ѵ�ð��֮��(սʿ)");
		cm.dispose();
            } else {
                cm.sendOk("�һ���ʾ��\r\n#b1.7�ܼ������x2400! ð�ձ�*1000W\r\nע:(װ����3����λ����,������1����λ����.)");
		cm.dispose();
            }
            break;
        case 10:
            if (cm.itemQuantity(4310002) >=2400 && cm.getMeso() >= 10000000){
                cm.gainMeso( - 10000000);
		cm.gainItem(4310002,-2400);
		cm.gainItem(1122144,1);
                cm.sendOk("#r�һ��ɹ�:#b\r\n1.���ѵ�ð��֮��(��ʦ)");
		cm.dispose();
            } else {
                cm.sendOk("�һ���ʾ��\r\n#b1.7�ܼ������x2400! ð�ձ�*1000W\r\nע:(װ����3����λ����,������1����λ����.)");
		cm.dispose();
            }
            break;
        case 11:
            if (cm.itemQuantity(4310002) >=2400 && cm.getMeso() >= 10000000){
                cm.gainMeso( - 10000000);
		cm.gainItem(4310002,-2400);
		cm.gainItem(1122145,1);
                cm.sendOk("#r�һ��ɹ�:#b\r\n1.���ѵ�ð��֮��(����)");
		cm.dispose();
            } else {
                cm.sendOk("�һ���ʾ��\r\n#b1.7�ܼ������x2400! ð�ձ�*1000W\r\nע:(װ����3����λ����,������1����λ����.)");
		cm.dispose();
            }
            break;
        case 12:
            if (cm.itemQuantity(4310002) >=2400 && cm.getMeso() >= 10000000){
                cm.gainMeso( - 10000000);
		cm.gainItem(4310002,-2400);
		cm.gainItem(1122146,1);
                cm.sendOk("#r�һ��ɹ�:#b\r\n1.���ѵ�ð��֮��(����)");
		cm.dispose();
            } else {
                cm.sendOk("�һ���ʾ��\r\n#b1.7�ܼ������x2400! ð�ձ�*1000W\r\nע:(װ����3����λ����,������1����λ����.)");
		cm.dispose();
            }
            break;
        case 13:
            if (cm.itemQuantity(4310002) >=2400 && cm.getMeso() >= 10000000){
                cm.gainMeso( - 10000000);
		cm.gainItem(4310002,-2400);
		cm.gainItem(1122147,1);
                cm.sendOk("#r�һ��ɹ�:#b\r\n1.���ѵ�ð��֮��(����)");
		cm.dispose();
            } else {
                cm.sendOk("�һ���ʾ��\r\n#b1.7�ܼ������x2400! ð�ձ�*1000W\r\nע:(װ����3����λ����,������1����λ����.)");
		cm.dispose();
            }
            break;
        case 14:
            if (cm.itemQuantity(4310002) >=400 && cm.getMeso() >= 10000000){
                cm.gainMeso( - 10000000);
		cm.gainItem(4310002,-400);
		cm.gainItem(1112663,1);
                cm.sendOk("#r�һ��ɹ�:#b\r\n1.����ʹף����ָ");
		cm.dispose();
            } else {
                cm.sendOk("�һ���ʾ��\r\n#b1.7�ܼ������x400! ð�ձ�*1000W\r\nע:(װ����3����λ����,������1����λ����.)");
		cm.dispose();
            }
            break;
        case 15:
            if (cm.itemQuantity(4310002) >=3200 && cm.getMeso() >= 10000000){
                cm.gainMeso( - 10000000);
		cm.gainItem(4310002,-3200);
		cm.gainItem(1122122,1);
                cm.sendOk("#r�һ��ɹ�:#b\r\n1.��-���ѵ�ð��֮��(սʿ)");
		cm.dispose();
            } else {
                cm.sendOk("�һ���ʾ��\r\n#b1.7�ܼ������x3200! ð�ձ�*1000W\r\nע:(װ����3����λ����,������1����λ����.)");
		cm.dispose();
            }
            break;
        case 16:
            if (cm.itemQuantity(4310002) >=3200 && cm.getMeso() >= 10000000){
                cm.gainMeso( - 10000000);
		cm.gainItem(4310002,-3200);
		cm.gainItem(1122123,1);
                cm.sendOk("#r�һ��ɹ�:#b\r\n1.��-���ѵ�ð��֮��(��ʦ)");
		cm.dispose();
            } else {
                cm.sendOk("�һ���ʾ��\r\n#b1.7�ܼ������x3200! ð�ձ�*1000W\r\nע:(װ����3����λ����,������1����λ����.)");
		cm.dispose();
            }
            break;
        case 17:
            if (cm.itemQuantity(4310002) >=3200 && cm.getMeso() >= 10000000){
                cm.gainMeso( - 10000000);
		cm.gainItem(4310002,-3200);
		cm.gainItem(1122124,1);
                cm.sendOk("#r�һ��ɹ�:#b\r\n1.��-���ѵ�ð��֮��(������)");
		cm.dispose();
            } else {
                cm.sendOk("�һ���ʾ��\r\n#b1.7�ܼ������x3200! ð�ձ�*1000W\r\nע:(װ����3����λ����,������1����λ����.)");
		cm.dispose();
            }
            break;
        case 18:
            if (cm.itemQuantity(4310002) >=3200 && cm.getMeso() >= 10000000){
                cm.gainMeso( - 10000000);
		cm.gainItem(4310002,-3200);
		cm.gainItem(1122125,1);
                cm.sendOk("#r�һ��ɹ�:#b\r\n1.��-���ѵ�ð��֮��(����)");
		cm.dispose();
            } else {
                cm.sendOk("�һ���ʾ��\r\n#b1.7�ܼ������x3200! ð�ձ�*1000W\r\nע:(װ����3����λ����,������1����λ����.)");
		cm.dispose();
            }
            break;
        case 19:
            if (cm.itemQuantity(4310002) >=3200 && cm.getMeso() >= 10000000){
                cm.gainMeso( - 10000000);
		cm.gainItem(4310002,-3200);
		cm.gainItem(1122126,1);
                cm.sendOk("#r�һ��ɹ�:#b\r\n1.��-���ѵ�ð��֮��(����)");
		cm.dispose();
            } else {
                cm.sendOk("�һ���ʾ��\r\n#b1.7�ܼ������x3200! ð�ձ�*1000W\r\nע:(װ����3����λ����,������1����λ����.)");
		cm.dispose();
            }
            break;
        }
    }
}