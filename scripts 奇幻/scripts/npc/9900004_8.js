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
        var selStr = "#r����̳ǣ�#b\r\n#L0#�ڰ�#v5370001#\r\n#L1#��������#v5030001#\r\n#L2#Ѥ���ʺ�#v1702155#\r\n#L3#�ʺ�������#v1042142#\r\n#L4#��ɫ�ϹϿ�#v1062054#\r\n#L5#���ǵ������#v1041142#\r\n#L6#���Ƿ�ɫ��ȹ#v1061148#\r\n#L7#����ս�����#v1003506#\r\n#L8#ʱ���㳦���#v1003509#";
 cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
            if (cm.getMeso() >= 3000000){
                cm.gainMeso( - 3000000);
		cm.gainItem(5370001,1,1);
                cm.sendOk("���#b�ڰ�#v5370001#x1��Ȩ");
        	cm.dispose();
            } else {
                cm.sendOk("#r���ʧ��:\r\n#b1.��û���㹻��ð�ձ�(300W)!\r\nע:(������3����λ����.)");
        	cm.dispose();
            }
            break;
        case 1:
            if (cm.getMeso() >= 3000000){
                cm.gainMeso( - 3000000);
		cm.gainItem(5030001,1,1);
                cm.sendOk("���#b��������#v5073000#x1��Ȩ");
        	cm.dispose();
            } else {
                cm.sendOk("#r���ʧ��:\r\n#b1.��û���㹻��ð�ձ�(300W)!\r\nע:(������3����λ����.)");
        	cm.dispose();
            }
            break;
        case 2:
            if (cm.getMeso() >= 20000000){
                cm.gainMeso( - 20000000);
		cm.gainItem(1702155,1,3);
                cm.sendOk("���#bѤ���ʺ�#v1702155#x3��Ȩ");
        	cm.dispose();
            } else {
                cm.sendOk("#r���ʧ��:\r\n#b1.��û���㹻��ð�ձ�(2000W)!\r\nע:(������3����λ����.)");
        	cm.dispose();
            }
            break;
        case 3:
            if (cm.getMeso() >= 20000000){
                cm.gainMeso( - 20000000);
		cm.gainItem(1042142,1,3);
                cm.sendOk("���#b�ʺ�������#v1042142#x3��Ȩ");
        	cm.dispose();
            } else {
                cm.sendOk("#r���ʧ��:\r\n#b1.��û���㹻��ð�ձ�(2000W)!\r\nע:(������3����λ����.)");
        	cm.dispose();
            }
            break;
        case 4:
            if (cm.getMeso() >= 20000000){
                cm.gainMeso( - 20000000);
		cm.gainItem(1062054,1,3);
                cm.sendOk("���#b��ɫ�ϹϿ�#v1062054#x3��Ȩ");
        	cm.dispose();
            } else {
                cm.sendOk("#r���ʧ��:\r\n#b1.��û���㹻��ð�ձ�(2000W)!\r\nע:(������3����λ����.)");
        	cm.dispose();
            }
            break;
        case 5:
            if (cm.getMeso() >= 20000000){
                cm.gainMeso( - 20000000);
		cm.gainItem(1041142,1,3);
                cm.sendOk("���#b���ǵ������#v1041142#x3��Ȩ");
        	cm.dispose();
            } else {
                cm.sendOk("#r���ʧ��:\r\n#b1.��û���㹻��ð�ձ�(2000W)!\r\nע:(������3����λ����.)");
        	cm.dispose();
            }
            break;
        case 6:
            if (cm.getMeso() >= 20000000){
                cm.gainMeso( - 20000000);
		cm.gainItem(1061148,1,3);
                cm.sendOk("���#b���Ƿ�ɫ��ȹ#v1061148#x3��Ȩ");
        	cm.dispose();
            } else {
                cm.sendOk("#r���ʧ��:\r\n#b1.��û���㹻��ð�ձ�(2000W)!\r\nע:(������3����λ����.)");
        	cm.dispose();
            }
            break;
        case 7:
            if (cm.getMeso() >= 40000000){
                cm.gainMeso( - 40000000);
		cm.gainItem(1003506,1,3);
		cm.gainItem(1082423,1,3);
		cm.gainItem(1052445,1,3);
		cm.gainItem(1072652,1,3);
                cm.sendOk("���#b����ս�����#v5390006#x3��Ȩ");
        	cm.dispose();
            } else {
                cm.sendOk("#r���ʧ��:\r\n#b1.��û���㹻��ð�ձ�(4000W)!\r\nע:(������3����λ����.)");
        	cm.dispose();
            }
            break;
        case 8:
            if (cm.getMeso() >= 40000000){
                cm.gainMeso( - 40000000);
		cm.gainItem(1003509,1,3);
		cm.gainItem(1052449,1,3);
		cm.gainItem(1112136,1,3);
		cm.gainItem(1012080,1,3);
                cm.sendOk("���#bʱ���㳦���#v5390006#x3��Ȩ");
        	cm.dispose();
            } else {
                cm.sendOk("#r���ʧ��:\r\n#b1.��û���㹻��ð�ձ�(4000W)!\r\nע:(������3����λ����.)");
        	cm.dispose();
            }
            break;
        }
    }
}