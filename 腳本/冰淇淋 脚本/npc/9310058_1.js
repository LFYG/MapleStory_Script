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
        var selStr = "#r��һ�ʲô:#b\r\n#L1#��ڿ���x1\r\n#L2#����ħ��x3\r\n#L3#�߼�ħ��x7\r\n#L4#��������x14\r\n#L5#�����н��x21\r\n#L6#��ϯ�����ս���ѫ��x30";
 cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 1:
            if (cm.itemQuantity(4032398) >=1){
                cm.gainItem(2022893,2);
		cm.gainItem(4032398, -1);
		cm.sendOk("�һ��ɹ���");
		cm.dispose();
            } else {
                cm.sendOk("�Բ���ǩ��ͼ�²���#v4032398#x1��");
		cm.dispose();
            }
            break;
        case 2:
            if (cm.itemQuantity(4032398) >=3){
		cm.gainItem(5062000,2);
		cm.gainItem(4032398, -3);
		cm.sendOk("�һ��ɹ���");
		cm.dispose();
            } else {
                cm.sendOk("�Բ���ǩ��ͼ�²���#v4032398#x3��");
		cm.dispose();
            }
            break;
        case 3:
            if (cm.itemQuantity(4032398) >=7){
		cm.gainItem(5062002,5);
		cm.gainItem(4032398, -7);
		cm.sendOk("�һ��ɹ���");
		cm.dispose();
            } else {
                cm.sendOk("�Բ���ǩ��ͼ�²���#v4032398#x7��");
		cm.dispose();
            }
            break;
        case 4:
            if (cm.itemQuantity(4032398) >=14){
		cm.gainItem(5064000,3);
		cm.gainItem(4032398, -14);
		cm.sendOk("�һ��ɹ���");
		cm.dispose();
            } else {
                cm.sendOk("�Բ���ǩ��ͼ�²���#v4032398#x14��");
		cm.dispose();
            }
            break;
        case 5:
            if (cm.itemQuantity(4032398) >=21){
		cm.gainItem(4310080,10);
		cm.gainItem(4032398, -21);
		cm.sendOk("�һ��ɹ���");
		cm.dispose();
            } else {
                cm.sendOk("�Բ���ǩ��ͼ�²���#v4032398#x21��");
		cm.dispose();
            }
            break;
        case 6:
            if (cm.itemQuantity(4032398) >=30){
		cm.gainItem(1142295,1);
		cm.gainItem(4032398, -30);
		cm.sendOk("�һ��ɹ���");
		cm.dispose();
            } else {
                cm.sendOk("�Բ���ǩ��ͼ�²���#v4032398#x30��");
		cm.dispose();
            }
            break;
        }
    }
}
