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
            var selStr = "#r���װ����#b\r\n#L1#����ͷ��#v1002357#\r\n#L2#��������ͷ��#v1003112#\r\n#L3#�ֲ����޵��˿�#v1012170#\r\n#L4#˹���еĻƽ��#v1502003#\r\n#L5#ŵ���Ļƽ�ʮ�ָ�#v1512003#\r\n#L11#����ʹ��ף����ָ#v1112586#\r\n#L6#ϣ��֮��֮��˵��ָ#v1112688#\r\n#L7#ϣ��֮��֮��˵����#v1032129#\r\n#L8#ϣ��֮��֮��˵����#v1122185#\r\n#L9#ϣ��֮��֮��˵����#v1132135#\r\n#L10#ϣ��֮��֮��˵�粿#v1152077#";
 	    cm.sendSimple(selStr);
    } else if (status == 1) {
      switch (selection) {
        case 1:
            if (cm.getMeso() >= 2500000){
                cm.gainMeso( - 2500000);
		cm.gainItem(1002357,1,1);
                cm.sendOk("���#b����ͷ��#v1002357#x1��Ȩ");
        	cm.dispose();
            } else {
                cm.sendOk("#r���ʧ��:\r\n#b1.��û���㹻��ð�ձ�(250W)!\r\nע:(װ������3����λ����.)");
        	cm.dispose();
            }
            break;
        case 2:
            if (cm.getMeso() >= 6000000){
                cm.gainMeso( - 6000000);
		cm.gainItem(1003112,1,1);
                cm.sendOk("���#b��������ͷ��#v1003112#x1��Ȩ");
        	cm.dispose();
            } else {
                cm.sendOk("#r���ʧ��:\r\n#b1.��û���㹻��ð�ձ�(600W)!\r\nע:(װ������3����λ����.)");
        	cm.dispose();
            }
            break;
        case 3:
            if (cm.getMeso() >= 25000000){
                cm.gainMeso( - 25000000);
		cm.gainItem(1012170,1,2);
                cm.sendOk("���#b�ֲ����޵��˿�#v1012170#x2��Ȩ");
        	cm.dispose();
            } else {
                cm.sendOk("#r���ʧ��:\r\n#b1.��û���㹻��ð�ձ�(2500W)!\r\nע:(װ������3����λ����.)");
        	cm.dispose();
            }
            break;
        case 4:
            if (cm.getMeso() >= 10000000){
                cm.gainMeso( - 10000000);
		cm.gainItem(1502003,1,1);
                cm.sendOk("���#b˹���еĻƽ��#v1502003#x1��Ȩ");
        	cm.dispose();
            } else {
                cm.sendOk("#r���ʧ��:\r\n#b1.��û���㹻��ð�ձ�(1000W)!\r\nע:(װ������3����λ����.)");
        	cm.dispose();
            }
            break;
        case 5:
            if (cm.getMeso() >= 10000000){
                cm.gainMeso( - 10000000);
		cm.gainItem(1512003,1,1);
                cm.sendOk("���#bŵ���Ļƽ�ʮ�ָ�#v1512003#x1��Ȩ");
        	cm.dispose();
            } else {
                cm.sendOk("#r���ʧ��:\r\n#b1.��û���㹻��ð�ձ�(1000W)!\r\nע:(װ������3����λ����.)");
        	cm.dispose();
            }
            break;
        case 6:
            if (cm.getMeso() >= 5000000){
                cm.gainMeso( - 5000000);
		cm.gainItem(1112688,1,3);
                cm.sendOk("���#bϣ��֮��֮��˵��ָ#v1112688#x3��Ȩ");
        	cm.dispose();
            } else {
                cm.sendOk("#r���ʧ��:\r\n#b1.��û���㹻��ð�ձ�(500W)!\r\nע:(װ������3����λ����.)");
        	cm.dispose();
            }
            break;
        case 7:
            if (cm.getMeso() >= 5000000){
                cm.gainMeso( - 5000000);
		cm.gainItem(1032129,1,3);
                cm.sendOk("���#bϣ��֮��֮��˵����#v1032129#x3��Ȩ");
        	cm.dispose();
            } else {
                cm.sendOk("#r���ʧ��:\r\n#b1.��û���㹻��ð�ձ�(500W)!\r\nע:(װ������3����λ����.)");
        	cm.dispose();
            }
            break;
        case 8:
            if (cm.getMeso() >= 5000000){
                cm.gainMeso( - 5000000);
		cm.gainItem(1122185,1,3);
                cm.sendOk("���#bϣ��֮��֮��˵����#v1122185#x3��Ȩ");
        	cm.dispose();
            } else {
                cm.sendOk("#r���ʧ��:\r\n#b1.��û���㹻��ð�ձ�(500W)!\r\nע:(װ������3����λ����.)");
        	cm.dispose();
            }
            break;
        case 9:
            if (cm.getMeso() >= 5000000){
                cm.gainMeso( - 5000000);
		cm.gainItem(1132135,1,3);
                cm.sendOk("���#bϣ��֮��֮��˵����#v1132135#x3��Ȩ");
        	cm.dispose();
            } else {
                cm.sendOk("#r���ʧ��:\r\n#b1.��û���㹻��ð�ձ�(500W)!\r\nע:(װ������3����λ����.)");
        	cm.dispose();
            }
            break;
        case 10:
            if (cm.getMeso() >= 5000000){
                cm.gainMeso( - 5000000);
		cm.gainItem(1152077,1,3);
                cm.sendOk("���#bϣ��֮��֮��˵�粿#v1152077#x3��Ȩ");
        	cm.dispose();
            } else {
                cm.sendOk("#r���ʧ��:\r\n#b1.��û���㹻��ð�ձ�(500W)!\r\nע:(װ������3����λ����.)");
        	cm.dispose();
            }
            break;
        case 11:
            if (cm.getMeso() >= 8000000){
                cm.gainMeso( - 8000000);
		cm.gainItem(1112586,1,1);
                cm.sendOk("���#b����ʹ��ף����ָ#v1112586#x1��Ȩ");
        	cm.dispose();
            } else {
                cm.sendOk("#r���ʧ��:\r\n#b1.��û���㹻��ð�ձ�(800W)!\r\nע:(װ������3����λ����.)");
        	cm.dispose();
            }
            break;
        }
    }
}