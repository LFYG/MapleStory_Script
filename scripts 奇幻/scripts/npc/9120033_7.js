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
        var selStr = "��ã���ѡ������Ҫ�һ�����Ʒ��#b\r\nʨ��ս����#L0##v1003172##L1##v1102275##L2##v1082295##L3##v1052314##L4##v1072485##l\r\n��β��ʦ��#L5##v1003173##L6##v1102276##L7##v1082296##L8##v1052315##L9##v1072486##l\r\nӥ���ڱ���#L10##v1003174##L11##v1102277##L12##v1082297##L13##v1052316##L14##v1072487##l\r\n��ѻ֮�꣺#L15##v1003175##L16##v1102278##L17##v1082298##L18##v1052317##L19##v1072488##l\r\n��ݴ�����#L20##v1003176##L21##v1102279##L22##v1082299##L23##v1052318##L24##v1072489#";
 cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
            if (cm.itemQuantity(4310002) >=400 && cm.getMeso() >= 5000000 && cm.getSpace(1) >= 3 && cm.getSpace(5) >= 1){
                cm.gainMeso( - 5000000);
		cm.gainItem(4310002,-400);
		cm.gainItem(1003172,1);
                cm.sendOk("#r�һ��ɹ�:#b\r\n1.ʨ��ս��ͷ��");
		cm.dispose();
            } else {
                cm.sendOk("�һ���ʾ��\r\n#b1.7�ܼ������x400! ð�ձ�*500W\r\nע:(װ����3����λ����,������1����λ����.)");
		cm.dispose();
            }
            break;
        case 1:
            if (cm.itemQuantity(4310002) >=400 && cm.getMeso() >= 5000000 && cm.getSpace(1) >= 3 && cm.getSpace(5) >= 1){
                cm.gainMeso( - 5000000);
		cm.gainItem(4310002,-400);
		cm.gainItem(1102275,1);
                cm.sendOk("#r�һ��ɹ�:#b\r\n1.ʨ��ս������");
		cm.dispose();
            } else {
                cm.sendOk("�һ���ʾ��\r\n#b1.7�ܼ������x400! ð�ձ�*500W\r\nע:(װ����3����λ����,������1����λ����.)");
		cm.dispose();
            }
            break;
        case 2:
            if (cm.itemQuantity(4310002) >=400 && cm.getMeso() >= 5000000 && cm.getSpace(1) >= 3 && cm.getSpace(5) >= 1){
                cm.gainMeso( - 5000000);
		cm.gainItem(4310002,-400);
		cm.gainItem(1082295,1);
                cm.sendOk("#r�һ��ɹ�:#b\r\n1.ʨ��ս������");
		cm.dispose();
            } else {
                cm.sendOk("�һ���ʾ��\r\n#b1.7�ܼ������x400! ð�ձ�*500W\r\nע:(װ����3����λ����,������1����λ����.)");
		cm.dispose();
            }
            break;
        case 3:
            if (cm.itemQuantity(4310002) >=400 && cm.getMeso() >= 5000000 && cm.getSpace(1) >= 3 && cm.getSpace(5) >= 1){
                cm.gainMeso( - 5000000);
		cm.gainItem(4310002,-400);
		cm.gainItem(1052314,1);
                cm.sendOk("#r�һ��ɹ�:#b\r\n1.ʨ��ս�����Ӽ�");
		cm.dispose();
            } else {
                cm.sendOk("�һ���ʾ��\r\n#b1.7�ܼ������x400! ð�ձ�*500W\r\nע:(װ����3����λ����,������1����λ����.)");
		cm.dispose();
            }
            break;
        case 4:
            if (cm.itemQuantity(4310002) >=400 && cm.getMeso() >= 5000000 && cm.getSpace(1) >= 3 && cm.getSpace(5) >= 1){
                cm.gainMeso( - 5000000);
		cm.gainItem(4310002,-400);
		cm.gainItem(1072485,1);
                cm.sendOk("#r�һ��ɹ�:#b\r\n1.ʨ��ս��Ь");
		cm.dispose();
            } else {
                cm.sendOk("�һ���ʾ��\r\n#b1.7�ܼ������x400! ð�ձ�*500W\r\nע:(װ����3����λ����,������1����λ����.)");
		cm.dispose();
            }
            break;
        case 5:
            if (cm.itemQuantity(4310002) >=400 && cm.getMeso() >= 5000000 && cm.getSpace(1) >= 3 && cm.getSpace(5) >= 1){
                cm.gainMeso( - 5000000);
		cm.gainItem(4310002,-400);
		cm.gainItem(1003173,1);
                cm.sendOk("#r�һ��ɹ�:#b\r\n1.��β��ʦñ��");
		cm.dispose();
            } else {
                cm.sendOk("�һ���ʾ��\r\n#b1.7�ܼ������x400! ð�ձ�*500W\r\nע:(װ����3����λ����,������1����λ����.)");
		cm.dispose();
            }
            break;
        case 6:
            if (cm.itemQuantity(4310002) >=400 && cm.getMeso() >= 5000000 && cm.getSpace(1) >= 3 && cm.getSpace(5) >= 1){
                cm.gainMeso( - 5000000);
		cm.gainItem(4310002,-400);
		cm.gainItem(1102276,1);
                cm.sendOk("#r�һ��ɹ�:#b\r\n1.��β��ʦ����");
		cm.dispose();
            } else {
                cm.sendOk("�һ���ʾ��\r\n#b1.7�ܼ������x400! ð�ձ�*500W\r\nע:(װ����3����λ����,������1����λ����.)");
		cm.dispose();
            }
            break;
        case 7:
            if (cm.itemQuantity(4310002) >=400 && cm.getMeso() >= 5000000 && cm.getSpace(1) >= 3 && cm.getSpace(5) >= 1){
                cm.gainMeso( - 5000000);
		cm.gainItem(4310002,-400);
		cm.gainItem(1082296,1);
                cm.sendOk("#r�һ��ɹ�:#b\r\n1.��β��ʦ����");
		cm.dispose();
            } else {
                cm.sendOk("�һ���ʾ��\r\n#b1.7�ܼ������x400! ð�ձ�*500W\r\nע:(װ����3����λ����,������1����λ����.)");
		cm.dispose();
            }
            break;
        case 8:
            if (cm.itemQuantity(4310002) >=400 && cm.getMeso() >= 5000000 && cm.getSpace(1) >= 3 && cm.getSpace(5) >= 1){
                cm.gainMeso( - 5000000);
		cm.gainItem(4310002,-400);
		cm.gainItem(1052315,1);
                cm.sendOk("#r�һ��ɹ�:#b\r\n1.��β��ʦ����");
		cm.dispose();
            } else {
                cm.sendOk("�һ���ʾ��\r\n#b1.7�ܼ������x400! ð�ձ�*500W\r\nע:(װ����3����λ����,������1����λ����.)");
		cm.dispose();
            }
            break;
        case 9:
            if (cm.itemQuantity(4310002) >=400 && cm.getMeso() >= 5000000 && cm.getSpace(1) >= 3 && cm.getSpace(5) >= 1){
                cm.gainMeso( - 5000000);
		cm.gainItem(4310002,-400);
		cm.gainItem(1072486,1);
                cm.sendOk("#r�һ��ɹ�:#b\r\n1.��β��ʦЬ");
		cm.dispose();
            } else {
                cm.sendOk("�һ���ʾ��\r\n#b1.7�ܼ������x400! ð�ձ�*500W\r\nע:(װ����3����λ����,������1����λ����.)");
		cm.dispose();
            }
            break;
        case 10:
            if (cm.itemQuantity(4310002) >=400 && cm.getMeso() >= 5000000 && cm.getSpace(1) >= 3 && cm.getSpace(5) >= 1){
                cm.gainMeso( - 5000000);
		cm.gainItem(4310002,-400);
		cm.gainItem(1003174,1);
                cm.sendOk("#r�һ��ɹ�:#b\r\n1.ӥ���ڱ���ñ");
		cm.dispose();
            } else {
                cm.sendOk("�һ���ʾ��\r\n#b1.7�ܼ������x400! ð�ձ�*500W\r\nע:(װ����3����λ����,������1����λ����.)");
		cm.dispose();
            }
            break;
        case 11:
            if (cm.itemQuantity(4310002) >=400 && cm.getMeso() >= 5000000 && cm.getSpace(1) >= 3 && cm.getSpace(5) >= 1){
                cm.gainMeso( - 5000000);
		cm.gainItem(4310002,-400);
		cm.gainItem(1102277,1);
                cm.sendOk("#r�һ��ɹ�:#b\r\n1.ӥ���ڱ�����");
		cm.dispose();
            } else {
                cm.sendOk("�һ���ʾ��\r\n#b1.7�ܼ������x400! ð�ձ�*500W\r\nע:(װ����3����λ����,������1����λ����.)");
		cm.dispose();
            }
            break;
        case 12:
            if (cm.itemQuantity(4310002) >=400 && cm.getMeso() >= 5000000 && cm.getSpace(1) >= 3 && cm.getSpace(5) >= 1){
                cm.gainMeso( - 5000000);
		cm.gainItem(4310002,-400);
		cm.gainItem(1082297,1);
                cm.sendOk("#r�һ��ɹ�:#b\r\n1.ӥ���ڱ�����");
		cm.dispose();
            } else {
                cm.sendOk("�һ���ʾ��\r\n#b1.7�ܼ������x400! ð�ձ�*500W\r\nע:(װ����3����λ����,������1����λ����.)");
		cm.dispose();
            }
            break;
        case 13:
            if (cm.itemQuantity(4310002) >=400 && cm.getMeso() >= 5000000 && cm.getSpace(1) >= 3 && cm.getSpace(5) >= 1){
                cm.gainMeso( - 5000000);
		cm.gainItem(4310002,-400);
		cm.gainItem(1052316,1);
                cm.sendOk("#r�һ��ɹ�:#b\r\n1.ӥ���ڱ���");
		cm.dispose();
            } else {
                cm.sendOk("�һ���ʾ��\r\n#b1.7�ܼ������x400! ð�ձ�*500W\r\nע:(װ����3����λ����,������1����λ����.)");
		cm.dispose();
            }
            break;
        case 14:
            if (cm.itemQuantity(4310002) >=400 && cm.getMeso() >= 5000000 && cm.getSpace(1) >= 3 && cm.getSpace(5) >= 1){
                cm.gainMeso( - 5000000);
		cm.gainItem(4310002,-400);
		cm.gainItem(1072487,1);
                cm.sendOk("#r�һ��ɹ�:#b\r\n1.ӥ���ڱ�Ь");
		cm.dispose();
            } else {
                cm.sendOk("�һ���ʾ��\r\n#b1.7�ܼ������x400! ð�ձ�*500W\r\nע:(װ����3����λ����,������1����λ����.)");
		cm.dispose();
            }
            break;
        case 15:
            if (cm.itemQuantity(4310002) >=400 && cm.getMeso() >= 5000000 && cm.getSpace(1) >= 3 && cm.getSpace(5) >= 1){
                cm.gainMeso( - 5000000);
		cm.gainItem(4310002,-400);
		cm.gainItem(1003175,1);
                cm.sendOk("#r�һ��ɹ�:#b\r\n1.��ѻ֮��׷����ñ");
		cm.dispose();
            } else {
                cm.sendOk("�һ���ʾ��\r\n#b1.7�ܼ������x400! ð�ձ�*500W\r\nע:(װ����3����λ����,������1����λ����.)");
		cm.dispose();
            }
            break;
        case 16:
            if (cm.itemQuantity(4310002) >=400 && cm.getMeso() >= 5000000 && cm.getSpace(1) >= 3 && cm.getSpace(5) >= 1){
                cm.gainMeso( - 5000000);
		cm.gainItem(4310002,-400);
		cm.gainItem(1102278,1);
                cm.sendOk("#r�һ��ɹ�:#b\r\n1.��ѻ֮����������");
		cm.dispose();
            } else {
                cm.sendOk("�һ���ʾ��\r\n#b1.7�ܼ������x400! ð�ձ�*500W\r\nע:(װ����3����λ����,������1����λ����.)");
		cm.dispose();
            }
            break;
        case 17:
            if (cm.itemQuantity(4310002) >=400 && cm.getMeso() >= 5000000 && cm.getSpace(1) >= 3 && cm.getSpace(5) >= 1){
                cm.gainMeso( - 5000000);
		cm.gainItem(4310002,-400);
		cm.gainItem(1082298,1);
                cm.sendOk("#r�һ��ɹ�:#b\r\n1.��ѻ֮��׷��������");
		cm.dispose();
            } else {
                cm.sendOk("�һ���ʾ��\r\n#b1.7�ܼ������x400! ð�ձ�*500W\r\nע:(װ����3����λ����,������1����λ����.)");
		cm.dispose();
            }
            break;
        case 18:
            if (cm.itemQuantity(4310002) >=400 && cm.getMeso() >= 5000000 && cm.getSpace(1) >= 3 && cm.getSpace(5) >= 1){
                cm.gainMeso( - 5000000);
		cm.gainItem(4310002,-400);
		cm.gainItem(1052317,1);
                cm.sendOk("#r�һ��ɹ�:#b\r\n1.��ѻ֮��׷���߿���");
		cm.dispose();
            } else {
                cm.sendOk("�һ���ʾ��\r\n#b1.7�ܼ������x400! ð�ձ�*500W\r\nע:(װ����3����λ����,������1����λ����.)");
		cm.dispose();
            }
            break;
        case 19:
            if (cm.itemQuantity(4310002) >=400 && cm.getMeso() >= 5000000 && cm.getSpace(1) >= 3 && cm.getSpace(5) >= 1){
                cm.gainMeso( - 5000000);
		cm.gainItem(4310002,-400);
		cm.gainItem(1072488,1);
                cm.sendOk("#r�һ��ɹ�:#b\r\n1.��ѻ֮��׷����Ь");
		cm.dispose();
            } else {
                cm.sendOk("�һ���ʾ��\r\n#b1.7�ܼ������x400! ð�ձ�*500W\r\nע:(װ����3����λ����,������1����λ����.)");
		cm.dispose();
            }
            break;
        case 20:
            if (cm.itemQuantity(4310002) >=400 && cm.getMeso() >= 5000000 && cm.getSpace(1) >= 3 && cm.getSpace(5) >= 1){
                cm.gainMeso( - 5000000);
		cm.gainItem(4310002,-400);
		cm.gainItem(1003176,1);
                cm.sendOk("#r�һ��ɹ�:#b\r\n1.��ݴ���ñ");
		cm.dispose();
            } else {
                cm.sendOk("�һ���ʾ��\r\n#b1.7�ܼ������x400! ð�ձ�*500W\r\nע:(װ����3����λ����,������1����λ����.)");
		cm.dispose();
            }
            break;
        case 21:
            if (cm.itemQuantity(4310002) >=400 && cm.getMeso() >= 5000000 && cm.getSpace(1) >= 3 && cm.getSpace(5) >= 1){
                cm.gainMeso( - 5000000);
		cm.gainItem(4310002,-400);
		cm.gainItem(1102279,1);
                cm.sendOk("#r�һ��ɹ�:#b\r\n1.��ݴ�������");
		cm.dispose();
            } else {
                cm.sendOk("�һ���ʾ��\r\n#b1.7�ܼ������x400! ð�ձ�*500W\r\nע:(װ����3����λ����,������1����λ����.)");
		cm.dispose();
            }
            break;
        case 22:
            if (cm.itemQuantity(4310002) >=400 && cm.getMeso() >= 5000000 && cm.getSpace(1) >= 3 && cm.getSpace(5) >= 1){
                cm.gainMeso( - 5000000);
		cm.gainItem(4310002,-400);
		cm.gainItem(1082299,1);
                cm.sendOk("#r�һ��ɹ�:#b\r\n1.��ݴ�������");
		cm.dispose();
            } else {
                cm.sendOk("�һ���ʾ��\r\n#b1.7�ܼ������x400! ð�ձ�*500W\r\nע:(װ����3����λ����,������1����λ����.)");
		cm.dispose();
            }
            break;
        case 23:
            if (cm.itemQuantity(4310002) >=400 && cm.getMeso() >= 5000000 && cm.getSpace(1) >= 3 && cm.getSpace(5) >= 1){
                cm.gainMeso( - 5000000);
		cm.gainItem(4310002,-400);
		cm.gainItem(1052318,1);
                cm.sendOk("#r�һ��ɹ�:#b\r\n1.��ݴ�������");
		cm.dispose();
            } else {
                cm.sendOk("�һ���ʾ��\r\n#b1.7�ܼ������x400! ð�ձ�*500W\r\nע:(װ����3����λ����,������1����λ����.)");
		cm.dispose();
            }
            break;
        case 24:
            if (cm.itemQuantity(4310002) >=400 && cm.getMeso() >= 5000000 && cm.getSpace(1) >= 3 && cm.getSpace(5) >= 1){
                cm.gainMeso( - 5000000);
		cm.gainItem(4310002,-400);
		cm.gainItem(1072489,1);
                cm.sendOk("#r�һ��ɹ�:#b\r\n1.��ݴ���Ь");
		cm.dispose();
            } else {
                cm.sendOk("�һ���ʾ��\r\n#b1.7�ܼ������x400! ð�ձ�*500W\r\nע:(װ����3����λ����,������1����λ����.)");
		cm.dispose();
            }
            break;
        }
    }
}