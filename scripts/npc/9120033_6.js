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
        var selStr = "��ã���ѡ������Ҫ�һ�����Ʒ��#b\r\n#L0#ʨ�ĳ�ǹ#v1432086#\r\n#L1#ʨ�ĳ�ì#v1442116#\r\n#L2#ʨ������#v1322096#\r\n#L3#ʨ�ľ޴�#v1422066#\r\n#L4#ʨ��ս��#v1402095#\r\n#L5#ʨ��ս��#v1412065#\r\n#L6#ʨ���䵶#v1302152#\r\n#L7#ʨ���¸�#v1312065#\r\n#L8#��β����#v1372084#\r\n#L9#��β����#v1382104#\r\n#L10#ӥ���ع�#v1452111#\r\n#L11#ӥ������#v1462099#\r\n#L12#��ѻ֮��#v1332130#\r\n#L13#��ѻ֮��#v1472122#\r\n#L14#����ǵ�#v1342036#\r\n#L15#������#v1492085#\r\n#L16#���ӥצ#v1482084#\r\n#L17#��ݻ���#v1532018#\r\n#L18#������ǹ#v1522018#";
 cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
            if (cm.itemQuantity(4310002) >=400 && cm.getMeso() >= 5000000){
                cm.gainMeso( - 5000000);
		cm.gainItem(4310002,-400);
		cm.gainItem(1432086,1);
                cm.sendOk("#r�һ��ɹ�:#b\r\n1.ʨ�ĳ�ǹ");
		cm.dispose();
            } else {
                cm.sendOk("�һ���ʾ��\r\n#b1.7�ܼ������x400! ð�ձ�*500W\r\nע:(װ����3����λ����,������1����λ����.)");
		cm.dispose();
            }
            break;
        case 1:
            if (cm.itemQuantity(4310002) >=400 && cm.getMeso() >= 5000000){
                cm.gainMeso( - 5000000);
		cm.gainItem(4310002,-400);
		cm.gainItem(1442116,1);
                cm.sendOk("#r�һ��ɹ�:#b\r\n1.ʨ�ĳ�ì");
		cm.dispose();
            } else {
                cm.sendOk("�һ���ʾ��\r\n#b1.7�ܼ������x400! ð�ձ�*500W\r\nע:(װ����3����λ����,������1����λ����.)");
		cm.dispose();
            }
            break;
        case 2:
            if (cm.itemQuantity(4310002) >=400 && cm.getMeso() >= 5000000){
                cm.gainMeso( - 5000000);
		cm.gainItem(4310002,-400);
		cm.gainItem(1322096,1);
                cm.sendOk("#r�һ��ɹ�:#b\r\n1.ʨ�����׶�");
		cm.dispose();
            } else {
                cm.sendOk("�һ���ʾ��\r\n#b1.7�ܼ������x400! ð�ձ�*500W\r\nע:(װ����3����λ����,������1����λ����.)");
		cm.dispose();
            }
            break;
        case 3:
            if (cm.itemQuantity(4310002) >=400 && cm.getMeso() >= 5000000){
                cm.gainMeso( - 5000000);
		cm.gainItem(4310002,-400);
		cm.gainItem(1422066,1);
                cm.sendOk("#r�һ��ɹ�:#b\r\n1.ʨ�ľ޴�");
		cm.dispose();
            } else {
                cm.sendOk("�һ���ʾ��\r\n#b1.7�ܼ������x400! ð�ձ�*500W\r\nע:(װ����3����λ����,������1����λ����.)");
		cm.dispose();
            }
            break;
        case 4:
            if (cm.itemQuantity(4310002) >=400 && cm.getMeso() >= 5000000){
                cm.gainMeso( - 5000000);
		cm.gainItem(4310002,-400);
		cm.gainItem(1402095,1);
                cm.sendOk("#r�һ��ɹ�:#b\r\n1.ʨ��ս��");
		cm.dispose();
            } else {
                cm.sendOk("�һ���ʾ��\r\n#b1.7�ܼ������x400! ð�ձ�*500W\r\nע:(װ����3����λ����,������1����λ����.)");
		cm.dispose();
            }
            break;
        case 5:
            if (cm.itemQuantity(4310002) >=400 && cm.getMeso() >= 5000000){
                cm.gainMeso( - 5000000);
		cm.gainItem(4310002,-400);
		cm.gainItem(1412065,1);
                cm.sendOk("#r�һ��ɹ�:#b\r\n1.ʨ��ս��");
		cm.dispose();
            } else {
                cm.sendOk("�һ���ʾ��\r\n#b1.7�ܼ������x400! ð�ձ�*500W\r\nע:(װ����3����λ����,������1����λ����.)");
		cm.dispose();
            }
            break;
        case 6:
            if (cm.itemQuantity(4310002) >=400 && cm.getMeso() >= 5000000){
                cm.gainMeso( - 5000000);
		cm.gainItem(4310002,-400);
		cm.gainItem(1302152,1);
                cm.sendOk("#r�һ��ɹ�:#b\r\n1.ʨ���䵶");
		cm.dispose();
            } else {
                cm.sendOk("�һ���ʾ��\r\n#b1.7�ܼ������x400! ð�ձ�*500W\r\nע:(װ����3����λ����,������1����λ����.)");
		cm.dispose();
            }
            break;
        case 7:
            if (cm.itemQuantity(4310002) >=400 && cm.getMeso() >= 5000000){
                cm.gainMeso( - 5000000);
		cm.gainItem(4310002,-400);
		cm.gainItem(1312065,1);
                cm.sendOk("#r�һ��ɹ�:#b\r\n1.ʨ���¸�");
		cm.dispose();
            } else {
                cm.sendOk("�һ���ʾ��\r\n#b1.7�ܼ������x400! ð�ձ�*500W\r\nע:(װ����3����λ����,������1����λ����.)");
		cm.dispose();
            }
            break;
        case 8:
            if (cm.itemQuantity(4310002) >=400 && cm.getMeso() >= 5000000){
                cm.gainMeso( - 5000000);
		cm.gainItem(4310002,-400);
		cm.gainItem(1372084,1);
                cm.sendOk("#r�һ��ɹ�:#b\r\n1.��β����");
		cm.dispose();
            } else {
                cm.sendOk("�һ���ʾ��\r\n#b1.7�ܼ������x400! ð�ձ�*500W\r\nע:(װ����3����λ����,������1����λ����.)");
		cm.dispose();
            }
            break;
        case 9:
            if (cm.itemQuantity(4310002) >=400 && cm.getMeso() >= 5000000){
                cm.gainMeso( - 5000000);
		cm.gainItem(4310002,-400);
		cm.gainItem(1382104,1);
                cm.sendOk("#r�һ��ɹ�:#b\r\n1.��β����");
		cm.dispose();
            } else {
                cm.sendOk("�һ���ʾ��\r\n#b1.7�ܼ������x400! ð�ձ�*500W\r\nע:(װ����3����λ����,������1����λ����.)");
		cm.dispose();
            }
            break;
        case 10:
            if (cm.itemQuantity(4310002) >=400 && cm.getMeso() >= 5000000){
                cm.gainMeso( - 5000000);
		cm.gainItem(4310002,-400);
		cm.gainItem(1452111,1);
                cm.sendOk("#r�һ��ɹ�:#b\r\n1.ӥ���ع�");
		cm.dispose();
            } else {
                cm.sendOk("�һ���ʾ��\r\n#b1.7�ܼ������x400! ð�ձ�*500W\r\nע:(װ����3����λ����,������1����λ����.)");
		cm.dispose();
            }
            break;
        case 11:
            if (cm.itemQuantity(4310002) >=400 && cm.getMeso() >= 5000000){
                cm.gainMeso( - 5000000);
		cm.gainItem(4310002,-400);
		cm.gainItem(1462099,1);
                cm.sendOk("#r�һ��ɹ�:#b\r\n1.ӥ������");
		cm.dispose();
            } else {
                cm.sendOk("�һ���ʾ��\r\n#b1.7�ܼ������x400! ð�ձ�*500W\r\nע:(װ����3����λ����,������1����λ����.)");
		cm.dispose();
            }
            break;
        case 12:
            if (cm.itemQuantity(4310002) >=400 && cm.getMeso() >= 5000000){
                cm.gainMeso( - 5000000);
		cm.gainItem(4310002,-400);
		cm.gainItem(1332130,1);
                cm.sendOk("#r�һ��ɹ�:#b\r\n1.��ѻ֮��");
		cm.dispose();
            } else {
                cm.sendOk("�һ���ʾ��\r\n#b1.7�ܼ������x400! ð�ձ�*500W\r\nע:(װ����3����λ����,������1����λ����.)");
		cm.dispose();
            }
            break;
        case 13:
            if (cm.itemQuantity(4310002) >=400 && cm.getMeso() >= 5000000){
                cm.gainMeso( - 5000000);
		cm.gainItem(4310002,-400);
		cm.gainItem(1472122,1);
                cm.sendOk("#r�һ��ɹ�:#b\r\n1.��ѻ֮��");
		cm.dispose();
            } else {
                cm.sendOk("�һ���ʾ��\r\n#b1.7�ܼ������x400! ð�ձ�*500W\r\nע:(װ����3����λ����,������1����λ����.)");
		cm.dispose();
            }
            break;
        case 14:
            if (cm.itemQuantity(4310002) >=400 && cm.getMeso() >= 5000000){
                cm.gainMeso( - 5000000);
		cm.gainItem(4310002,-400);
		cm.gainItem(1342036,1);
                cm.sendOk("#r�һ��ɹ�:#b\r\n1.����ǵ�");
		cm.dispose();
            } else {
                cm.sendOk("�һ���ʾ��\r\n#b1.7�ܼ������x400! ð�ձ�*500W\r\nע:(װ����3����λ����,������1����λ����.)");
		cm.dispose();
            }
            break;
        case 15:
            if (cm.itemQuantity(4310002) >=400 && cm.getMeso() >= 5000000){
                cm.gainMeso( - 5000000);
		cm.gainItem(4310002,-400);
		cm.gainItem(1492085,1);
                cm.sendOk("#r�һ��ɹ�:#b\r\n1.������");
		cm.dispose();
            } else {
                cm.sendOk("�һ���ʾ��\r\n#b1.7�ܼ������x400! ð�ձ�*500W\r\nע:(װ����3����λ����,������1����λ����.)");
		cm.dispose();
            }
            break;
        case 16:
            if (cm.itemQuantity(4310002) >=400 && cm.getMeso() >= 5000000){
                cm.gainMeso( - 5000000);
		cm.gainItem(4310002,-400);
		cm.gainItem(1482084,1);
                cm.sendOk("#r�һ��ɹ�:#b\r\n1.���ӥצ");
		cm.dispose();
            } else {
                cm.sendOk("�һ���ʾ��\r\n#b1.7�ܼ������x400! ð�ձ�*500W\r\nע:(װ����3����λ����,������1����λ����.)");
		cm.dispose();
            }
            break;
        case 17:
            if (cm.itemQuantity(4310002) >=400 && cm.getMeso() >= 5000000){
                cm.gainMeso( - 5000000);
		cm.gainItem(4310002,-400);
		cm.gainItem(1532018,1);
                cm.sendOk("#r�һ��ɹ�:#b\r\n1.��ݻ���");
		cm.dispose();
            } else {
                cm.sendOk("�һ���ʾ��\r\n#b1.7�ܼ������x400! ð�ձ�*500W\r\nע:(װ����3����λ����,������1����λ����.)");
		cm.dispose();
            }
            break;
        case 18:
            if (cm.itemQuantity(4310002) >=400 && cm.getMeso() >= 5000000){
                cm.gainMeso( - 5000000);
		cm.gainItem(4310002,-400);
		cm.gainItem(1522018,1);
                cm.sendOk("#r�һ��ɹ�:#b\r\n1.������ǹ");
		cm.dispose();
            } else {
                cm.sendOk("�һ���ʾ��\r\n#b1.7�ܼ������x400! ð�ձ�*500W\r\nע:(װ����3����λ����,������1����λ����.)");
		cm.dispose();
            }
            break;
        }
    }
}