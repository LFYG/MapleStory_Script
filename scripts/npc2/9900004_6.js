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
        var selStr = "#r���ѫ�£�#b\r\n#L1#������ѫ��#v1142146#\r\n#L2#2012����ѫ��#v1142371#\r\n#L3#Ʒ����ɱ��ѫ��#v1142008#\r\n#L4#�Ȱ�ð�յ�ѫ��#v1142100#\r\n#L5#��ʵ��ð�ռ�ѫ��#v1142000#\r\n#L6#����������ѫ��#v1142001#\r\n#L7#ð�յ����ʦѫ��#v1142173#\r\n#L8#ð�յ�������ѫ��#v1142174#\r\n#L9#ð�յ�������ѫ��#v1142175#\r\n#L10#ð�յ���ѧ��ѫ��#v1142176#\r\n#L11#ð�յ��ղؼ�ѫ��#v1142177#\r\n#L14#��������ɱ��ѫ��#v1142007#\r\n#L12#���ջ�������ѫ��#v1142210#\r\n#L13#�ʹ������ղ�ѫ��#v1142211#\r\n#L15#��˵�е�ð�ռ�ѫ��#v1142005#\r\n#L16#ð�յ�ż������ѫ��#v1142006#"
 cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 1:
            if (cm.getMeso() >= 50000000){
                cm.gainMeso( - 50000000);
		cm.gainItem(1142146,1,7);
                cm.sendOk("���#b������ѫ��#v1142146#x7��Ȩ");
        	cm.dispose();
            } else {
                cm.sendOk("#r���ʧ��:\r\n#b1.��û���㹻��ð�ձ�(6000W)!\r\nע:(װ����3����λ����.)");
        	cm.dispose();
            }
            break;
        case 2:
            if (cm.getMeso() >= 100000000){
                cm.gainMeso( - 100000000);
		cm.gainItem(1142371,1,7);
                cm.sendOk("���#b2012����ѫ��#v1142371#x7��Ȩ");
        	cm.dispose();
            } else {
                cm.sendOk("#r���ʧ��:\r\n#b1.��û���㹻��ð�ձ�(1E)!\r\nע:(װ����3����λ����.)");
        	cm.dispose();
            }
            break;
        case 3:
            if (cm.getMeso() >= 20000000 && cm.itemQuantity(3010073) >=1){
                cm.gainMeso( - 20000000);
		cm.gainItem(3010073,-1);
		cm.gainItem(1142008,1,30);
                cm.sendOk("���#bƷ����ɱ��ѫ��#v1142008#x30��Ȩ");
        	cm.dispose();
            } else {
                cm.sendOk("#r���ʧ��:\r\n#b1.��û���㹻��ð�ձ�(2000W)��babyƷ����!\r\nע:(װ����3����λ����.)");
        	cm.dispose();
            }
            break;
        case 4:
            if (cm.getMeso() >= 50000000){
                cm.gainMeso( - 50000000);
		cm.gainItem(1142000,1,7);
                cm.sendOk("���#b�Ȱ�ð�յ�ѫ��#v1142000#x7��Ȩ");
        	cm.dispose();
            } else {
                cm.sendOk("#r���ʧ��:\r\n#b1.��û���㹻��ð�ձ�(5000W)!\r\nע:(װ����3����λ����.)");
        	cm.dispose();
            }
            break;
        case 5:
            if (cm.getMeso() >= 50000000){
                cm.gainMeso( - 50000000);
		cm.gainItem(1142000,1,7);
                cm.sendOk("���#b��ʵ��ð�ռ�ѫ��#v1142000#x7��Ȩ");
        	cm.dispose();
            } else {
                cm.sendOk("#r���ʧ��:\r\n#b1.��û���㹻��ð�ձ�(5000W)!\r\nע:(װ����3����λ����.)");
        	cm.dispose();
            }
            break;
        case 6:
            if (cm.getMeso() >= 50000000){
                cm.gainMeso( - 50000000);
		cm.gainItem(1142001,1,7);
                cm.sendOk("���#b����������ѫ��#v1142001#x7��Ȩ");
        	cm.dispose();
            } else {
                cm.sendOk("#r���ʧ��:\r\n#b1.��û���㹻��ð�ձ�(5000W)!\r\nע:(װ����3����λ����.)");
        	cm.dispose();
            }
            break;
        case 7:
            if (cm.getMeso() >= 50000000){
                cm.gainMeso( - 50000000);
		cm.gainItem(1142173,1,7);
                cm.sendOk("���#bð�յ����ʦѫ��#v1142173#x7��Ȩ");
        	cm.dispose();
            } else {
                cm.sendOk("#r���ʧ��:\r\n#b1.��û���㹻��ð�ձ�(5000W)!\r\nע:(װ����3����λ����.)");
        	cm.dispose();
            }
            break;
        case 8:
            if (cm.getMeso() >= 50000000){
                cm.gainMeso( - 50000000);
		cm.gainItem(1142174,1,7);
                cm.sendOk("���#bð�յ�������ѫ��#v1142174#x7��Ȩ");
        	cm.dispose();
            } else {
                cm.sendOk("#r���ʧ��:\r\n#b1.��û���㹻��ð�ձ�(5000W)!\r\nע:(װ����3����λ����.)");
        	cm.dispose();
            }
            break;
        case 9:
            if (cm.getMeso() >= 50000000){
                cm.gainMeso( - 50000000);
		cm.gainItem(1142175,1,7);
                cm.sendOk("���#bð�յ�������ѫ��#v1142175#x7��Ȩ");
        	cm.dispose();
            } else {
                cm.sendOk("#r���ʧ��:\r\n#b1.��û���㹻��ð�ձ�(5000W)!\r\nע:(װ����3����λ����.)");
        	cm.dispose();
            }
            break;
        case 10:
            if (cm.getMeso() >= 50000000){
                cm.gainMeso( - 50000000);
		cm.gainItem(1142176,1,7);
                cm.sendOk("���#bð�յ���ѧ��ѫ��#v1142176#x7��Ȩ");
        	cm.dispose();
            } else {
                cm.sendOk("#r���ʧ��:\r\n#b1.��û���㹻��ð�ձ�(5000W)!\r\nע:(װ����3����λ����.)");
        	cm.dispose();
            }
            break;
        case 11:
            if (cm.getMeso() >= 50000000){
                cm.gainMeso( - 50000000);
		cm.gainItem(1142177,1,7);
                cm.sendOk("���#bð�յ��ղؼ�ѫ��#v1142177#x7��Ȩ");
        	cm.dispose();
            } else {
                cm.sendOk("#r���ʧ��:\r\n#b1.��û���㹻��ð�ձ�(5000W)!\r\nע:(װ����3����λ����.)");
        	cm.dispose();
            }
            break;
        case 12:
            if (cm.getMeso() >= 20000000 && cm.itemQuantity(3010123) >=1){
                cm.gainMeso( - 20000000);
		cm.gainItem(3010123,-1);
		cm.gainItem(1142210,1,30);
                cm.sendOk("���#b���ջ�������ѫ��#v1142210#x30��Ȩ");
        	cm.dispose();
            } else {
                cm.sendOk("#r���ʧ��:\r\n#b1.��û���㹻��ð�ձ�(2000W)�����ջ�������!\r\nע:(װ����3����λ����.)");
        	cm.dispose();
            }
            break;
        case 13:
            if (cm.getMeso() >= 20000000 && cm.itemQuantity(3010119) >=1){
                cm.gainMeso( - 20000000);
		cm.gainItem(3010119,-1);
		cm.gainItem(1142211,1,30);
                cm.sendOk("���#b�ʹ������ղ�ѫ��#v1142211#x30��Ȩ");
        	cm.dispose();
            } else {
                cm.sendOk("#r���ʧ��:\r\n#b1.��û���㹻��ð�ձ�(2000W)����������!\r\nע:(װ����3����λ����.)");
        	cm.dispose();
            }
            break;
        case 14:
            if (cm.getMeso() >= 20000000 && cm.itemQuantity(3010128) >=1){
                cm.gainMeso( - 20000000);
		cm.gainItem(3010128,-1);
		cm.gainItem(1142007,1,14);
                cm.sendOk("���#b��������ɱ��ѫ��#v1142007#x14��Ȩ");
        	cm.dispose();
            } else {
                cm.sendOk("#r���ʧ��:\r\n#b1.��û���㹻��ð�ձ�(2000W)���������!\r\nע:(װ����3����λ����.)");
        	cm.dispose();
            }
            break;
        case 15:
            if (cm.getMeso() >= 10000000 && cm.getPlayer().getFame() >= 50){
                cm.gainMeso( - 10000000);
		cm.gainFame(-50);
		cm.gainItem(1142005,1,30);
                cm.sendOk("���#b��˵�е�ð�ռ�ѫ��#v1142005#x30��Ȩ");
        	cm.dispose();
            } else {
                cm.sendOk("#r���ʧ��:\r\n#b1.��û���㹻��ð�ձ�(100W)������(50)!\r\nע:(װ����3����λ����.)");
        	cm.dispose();
            }
            break;
        case 16:
            if (cm.getMeso() >= 10000000 && cm.getPlayer().getFame() >= 100){
                cm.gainMeso( - 10000000);
		cm.gainFame(-100);
		cm.gainItem(1142006,1,30);
                cm.sendOk("���#bð�յ�ż������ѫ��#v1142006#x30��Ȩ");
        	cm.dispose();
            } else {
                cm.sendOk("#r���ʧ��:\r\n#b1.��û���㹻��ð�ձ�(1000W)������(100)!\r\nע:(װ����3����λ����.)");
        	cm.dispose();
            }
            break;
        }
    }
}