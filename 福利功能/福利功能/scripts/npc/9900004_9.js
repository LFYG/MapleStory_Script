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
            var selStr = "#r���װ����#b\r\n#L1#����ͷ��#v1002357#\r\n#L2#��������ͷ��#v1003112#\r\n#L3#�ֲ����޵��˿�#v1012170#\r\n#L4#˹���еĻƽ��#v1502003#\r\n#L5#ŵ���Ļƽ�ʮ�ָ�#v1512003#\r\n#L11#����ʹ��ף����ָ#v1112586#\r\n#L6#ϣ��֮��֮��˵��ָ#v1112688#\r\n#L7#ϣ��֮��֮��˵����#v1032129#\r\n#L8#ϣ��֮��֮��˵����#v1122185#\r\n#L9#ϣ��֮��֮��˵����#v1132135#\r\n#L10#ϣ��֮��֮��˵�粿#v1152077#\r\n#L12#��˵˺����#v1482109#\r\n#L13#��˵�����޽�#v1402118#\r\n#L14#��˵�������촸#v1422078#\r\n#L15#��˵����ħ����#v1412076#\r\n#L16#��˵������ṭ#v1452136#\r\n#L17#��˵���µ�#v1342046#\r\n#L18#��˵��Ҷ����#v1362059#\r\n#L19#��˵����������#v1332157#\r\n#L20#��˵����#v1492108#\r\n#L21#��˵������ǹ#v1522027#\r\n#L22#��˵��������#v1532044#\r\n#L23#��˵��ľ����ȭ#v1472148#\r\n#L24#��˵�ھ�������#v1382131#\r\n#L25#��˵�ƽ������#v1462125#\r\n#L26#��˵�����ش�#v1322112#\r\n#L27#��˵��̫������#v1372106#\r\n#L28#��˵Ѫ����#v1442143#\r\n#L29#��˵�����߳�ǹ#v1432106#\r\n#L30#��˵����ŭն#v1312077#\r\n#L31#��˵�������罣#v1302179#";
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
        case 12:
            if (cm.getMeso() >= 25000000){
                cm.gainMeso( - 25000000);
		cm.gainItem(1482109,1,3);
                cm.sendOk("���#b��˵˺����#v1482109#x3��Ȩ");
        	cm.dispose();
            } else {
                cm.sendOk("#r���ʧ��:\r\n#b1.��û���㹻��ð�ձ�(2500W)!\r\nע:(װ������3����λ����.)");
        	cm.dispose();
            }
            break;
        case 13:
            if (cm.getMeso() >= 25000000){
                cm.gainMeso( - 25000000);
		cm.gainItem(1402118,1,3);
                cm.sendOk("���#b��˵�����޽�#v1402118#x3��Ȩ");
        	cm.dispose();
            } else {
                cm.sendOk("#r���ʧ��:\r\n#b1.��û���㹻��ð�ձ�(2500W)!\r\nע:(װ������3����λ����.)");
        	cm.dispose();
            }
            break;
        case 14:
            if (cm.getMeso() >= 25000000){
                cm.gainMeso( - 25000000);
		cm.gainItem(1422078,1,3);
                cm.sendOk("���#b��˵�������촸#v1422078#x3��Ȩ");
        	cm.dispose();
            } else {
                cm.sendOk("#r���ʧ��:\r\n#b1.��û���㹻��ð�ձ�(2500W)!\r\nע:(װ������3����λ����.)");
        	cm.dispose();
            }
            break;
        case 15:
            if (cm.getMeso() >= 25000000){
                cm.gainMeso( - 25000000);
		cm.gainItem(1412076,1,3);
                cm.sendOk("���#b��˵����ħ����#v1412076#x3��Ȩ");
        	cm.dispose();
            } else {
                cm.sendOk("#r���ʧ��:\r\n#b1.��û���㹻��ð�ձ�(2500W)!\r\nע:(װ������3����λ����.)");
        	cm.dispose();
            }
            break;
        case 16:
            if (cm.getMeso() >= 25000000){
                cm.gainMeso( - 25000000);
		cm.gainItem(1452136,1,3);
                cm.sendOk("���#b��˵������ṭ#v1452136#x3��Ȩ");
        	cm.dispose();
            } else {
                cm.sendOk("#r���ʧ��:\r\n#b1.��û���㹻��ð�ձ�(2500W)!\r\nע:(װ������3����λ����.)");
        	cm.dispose();
            }
            break;
        case 17:
            if (cm.getMeso() >= 25000000){
                cm.gainMeso( - 25000000);
		cm.gainItem(1342046,1,3);
                cm.sendOk("���#b��˵���µ�#v1342046#x3��Ȩ");
        	cm.dispose();
            } else {
                cm.sendOk("#r���ʧ��:\r\n#b1.��û���㹻��ð�ձ�(2500W)!\r\nע:(װ������3����λ����.)");
        	cm.dispose();
            }
            break;
        case 18:
            if (cm.getMeso() >= 25000000){
                cm.gainMeso( - 25000000);
		cm.gainItem(1362059,1,3);
                cm.sendOk("���#b��˵��Ҷ����#v1362059#x3��Ȩ");
        	cm.dispose();
            } else {
                cm.sendOk("#r���ʧ��:\r\n#b1.��û���㹻��ð�ձ�(2500W)!\r\nע:(װ������3����λ����.)");
        	cm.dispose();
            }
            break;
        case 19:
            if (cm.getMeso() >= 25000000){
                cm.gainMeso( - 25000000);
		cm.gainItem(1332157,1,3);
                cm.sendOk("���#b��˵����������#v1332157#x3��Ȩ");
        	cm.dispose();
            } else {
                cm.sendOk("#r���ʧ��:\r\n#b1.��û���㹻��ð�ձ�(2500W)!\r\nע:(װ������3����λ����.)");
        	cm.dispose();
            }
            break;
        case 20:
            if (cm.getMeso() >= 25000000){
                cm.gainMeso( - 25000000);
		cm.gainItem(1492108,1,3);
                cm.sendOk("���#b��˵����#v1492108#x3��Ȩ");
        	cm.dispose();
            } else {
                cm.sendOk("#r���ʧ��:\r\n#b1.��û���㹻��ð�ձ�(2500W)!\r\nע:(װ������3����λ����.)");
        	cm.dispose();
            }
            break;
        case 21:
            if (cm.getMeso() >= 25000000){
                cm.gainMeso( - 25000000);
		cm.gainItem(1522027,1,3);
                cm.sendOk("���#b��˵������ǹ#v1522027#x3��Ȩ");
        	cm.dispose();
            } else {
                cm.sendOk("#r���ʧ��:\r\n#b1.��û���㹻��ð�ձ�(2500W)!\r\nע:(װ������3����λ����.)");
        	cm.dispose();
            }
            break;
        case 22:
            if (cm.getMeso() >= 25000000){
                cm.gainMeso( - 25000000);
		cm.gainItem(1532044,1,3);
                cm.sendOk("���#b��˵��������#v1532044#x3��Ȩ");
        	cm.dispose();
            } else {
                cm.sendOk("#r���ʧ��:\r\n#b1.��û���㹻��ð�ձ�(2500W)!\r\nע:(װ������3����λ����.)");
        	cm.dispose();
            }
            break;
        case 23:
            if (cm.getMeso() >= 25000000){
                cm.gainMeso( - 25000000);
		cm.gainItem(1472148,1,3);
                cm.sendOk("���#b��˵��ľ����ȭ#v1472148#x3��Ȩ");
        	cm.dispose();
            } else {
                cm.sendOk("#r���ʧ��:\r\n#b1.��û���㹻��ð�ձ�(2500W)!\r\nע:(װ������3����λ����.)");
        	cm.dispose();
            }
            break;
        case 24:
            if (cm.getMeso() >= 25000000){
                cm.gainMeso( - 25000000);
		cm.gainItem(1382131,1,3);
                cm.sendOk("���#b��˵�ھ�������#v1382131#x3��Ȩ");
        	cm.dispose();
            } else {
                cm.sendOk("#r���ʧ��:\r\n#b1.��û���㹻��ð�ձ�(2500W)!\r\nע:(װ������3����λ����.)");
        	cm.dispose();
            }
            break;
        case 25:
            if (cm.getMeso() >= 25000000){
                cm.gainMeso( - 25000000);
		cm.gainItem(1462125,1,3);
                cm.sendOk("���#b��˵�ƽ������#v1462125#x3��Ȩ");
        	cm.dispose();
            } else {
                cm.sendOk("#r���ʧ��:\r\n#b1.��û���㹻��ð�ձ�(2500W)!\r\nע:(װ������3����λ����.)");
        	cm.dispose();
            }
            break;
        case 26:
            if (cm.getMeso() >= 25000000){
                cm.gainMeso( - 25000000);
		cm.gainItem(1322112,1,3);
                cm.sendOk("���#b��˵�����ش�#v1322112#x3��Ȩ");
        	cm.dispose();
            } else {
                cm.sendOk("#r���ʧ��:\r\n#b1.��û���㹻��ð�ձ�(2500W)!\r\nע:(װ������3����λ����.)");
        	cm.dispose();
            }
            break;
        case 27:
            if (cm.getMeso() >= 25000000){
                cm.gainMeso( - 25000000);
		cm.gainItem(1372106,1,3);
                cm.sendOk("���#b��˵��̫������#v1372106#x3��Ȩ");
        	cm.dispose();
            } else {
                cm.sendOk("#r���ʧ��:\r\n#b1.��û���㹻��ð�ձ�(2500W)!\r\nע:(װ������3����λ����.)");
        	cm.dispose();
            }
            break;
        case 28:
            if (cm.getMeso() >= 25000000){
                cm.gainMeso( - 25000000);
		cm.gainItem(1442143,1,3);
                cm.sendOk("���#b��˵Ѫ����#v1442143#x3��Ȩ");
        	cm.dispose();
            } else {
                cm.sendOk("#r���ʧ��:\r\n#b1.��û���㹻��ð�ձ�(2500W)!\r\nע:(װ������3����λ����.)");
        	cm.dispose();
            }
            break;
        case 29:
            if (cm.getMeso() >= 25000000){
                cm.gainMeso( - 25000000);
		cm.gainItem(1432106,1,3);
                cm.sendOk("���#b��˵�����߳�ǹ#v1432106#x3��Ȩ");
        	cm.dispose();
            } else {
                cm.sendOk("#r���ʧ��:\r\n#b1.��û���㹻��ð�ձ�(2500W)!\r\nע:(װ������3����λ����.)");
        	cm.dispose();
            }
            break;
        case 30:
            if (cm.getMeso() >= 25000000){
                cm.gainMeso( - 25000000);
		cm.gainItem(1312077,1,3);
                cm.sendOk("���#b��˵����ŭն#v1312077#x3��Ȩ");
        	cm.dispose();
            } else {
                cm.sendOk("#r���ʧ��:\r\n#b1.��û���㹻��ð�ձ�(2500W)!\r\nע:(װ������3����λ����.)");
        	cm.dispose();
            }
            break;
        case 31:
            if (cm.getMeso() >= 25000000){
                cm.gainMeso( - 25000000);
		cm.gainItem(1302179,1,3);
                cm.sendOk("���#b��˵�������罣#v1302179#x3��Ȩ");
        	cm.dispose();
            } else {
                cm.sendOk("#r���ʧ��:\r\n#b1.��û���㹻��ð�ձ�(2500W)!\r\nע:(װ������3����λ����.)");
        	cm.dispose();
            }
            break;
        }
    }
}