var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1) status++;
        else status--;
        if (status == 0) {
            cm.sendSimple("�ҵ�����#r#h ##k��һ�ʲô��#b\r\n#L2#x1#v4310002#�һ�x1���ı�ʯ\r\n#L3#x10#v4310002#�һ�x1�Ϲ����Ž�ָ\r\n#L4#x50#v4310002#�һ�x1��ɫ��������\r\n#L5#x50#v4310002#�һ�x1�ʺ��ƶ�����\r\n#L6#x50#v4310002#�һ�x1��ȹ�������\r\n#L7#x70#v4310002#�һ�x1����ʹף����ָ");
        } else if (status == 1) {
        switch (selection) {
        case 1:
                cm.dispose();
                    cm.sendOk("#r#v4310002#�һ�˵��:#b\r\n��7��������x1�һ����ı�ʯ#v4001465#\r\n��7��������x10�һ��Ϲ����Ž�ָ#v1112446#\r\n��7��������x50�һ���ȹ�������#v3010217#\r\n��7��������x50�һ��ʺ��ƶ�����#v3010362#\r\n��7��������x50�һ���ɫ��������#v3010313#\r\n��7��������x70�һ�����ʹף����ָ#v1112586#\r\n��7��������x250�һ����ּ�Ʒ��װװ��#v1052314#\r\n��7��������x300�һ����ּ�Ʒ��װ����#v1412065#\r\n��7��������x250�һ����ּ�Ʒװ������#v1122143#\r\n��7��������x200�һ����ִ�˵�سɾ���#v2044003#\r\n��7��������x400�һ����ִ�˵����سɾ���#v2046010#");
            break;
        case 2:
            if (cm.itemQuantity(4310002) >=1){
		cm.gainItem(4310002,-1);
		cm.gainItem(4001465,1);
                cm.sendOk("#r�һ��ɹ�:#b\r\n1.���ı�ʯ x1");
                cm.dispose();
            } else {
                cm.sendOk("�һ���ʾ��\r\n#b1.��û���㹻��7��������1��\r\nע:(װ����3����λ����,������1����λ����.)");
		cm.dispose();
            }
            break;
        case 3:
            if (cm.itemQuantity(4310002) >=10 ){
		cm.gainItem(4310002,-10);
		cm.gainItem(1112446,1);
                cm.sendOk("#r�һ��ɹ�:#b\r\n1.�Ϲ����Ž�ָLV1");
		cm.dispose();
            } else {
                cm.sendOk("�һ���ʾ��\r\n#b1.��û���㹻��7��������!\r\nע:(װ����3����λ����,������1����λ����.)");
		cm.dispose();
            }
            break;
        case 4:
            if (cm.itemQuantity(4310002) >=50 ){
		cm.gainItem(4310002,-50);
		cm.gainItem(3010313,1);
                cm.sendOk("#r�һ��ɹ�:#b\r\n1.�ۺ���������");
		cm.dispose();
            } else {
                cm.sendOk("�һ���ʾ��\r\n#b1.��û���㹻��7��������!\r\nע:(װ����3����λ����,������1����λ����.)");
		cm.dispose();
            }
            break;
        case 5:
            if (cm.itemQuantity(4310002) >=50 ){
		cm.gainItem(4310002,-50);
		cm.gainItem(3010362,1);
                cm.sendOk("#r�һ��ɹ�:#b\r\n1.�ʺ��ƶ�����");
		cm.dispose();
            } else {
                cm.sendOk("�һ���ʾ��\r\n#b1.��û���㹻��7��������!\r\nע:(װ����3����λ����,������1����λ����.)");
		cm.dispose();
            }
            break;
        case 6:
            if (cm.itemQuantity(4310002) >=50 ){
		cm.gainItem(4310002,-50);
		cm.gainItem(3010217,1);
                cm.sendOk("#r�һ��ɹ�:#b\r\n1.��ȹ�������");
		cm.dispose();
            } else {
                cm.sendOk("�һ���ʾ��\r\n#b1.��û���㹻��7��������!\r\nע:(װ����3����λ����,������1����λ����.)");
		cm.dispose();
            }
            break;
        case 7:
            if (cm.itemQuantity(4310002) >=70 ){
		cm.gainItem(4310002, -70);
		cm.gainItem(1112586,1);
                cm.sendOk("#r�һ��ɹ�:#b\r\n1.����ʹף����ָ");
		cm.dispose();
            } else {
                cm.sendOk("�һ���ʾ��\r\n#b1.��û���㹻��7��������!\r\nע:(װ����3����λ����,������1����λ����.)");
		cm.dispose();
            }
            break;
        case 11:
            cm.dispose();
            cm.openNpc(9120033,8);
            break;
        case 12:
            cm.dispose();
            cm.openNpc(9120033,9);
            break;
        case 13:
            cm.dispose();
            cm.openNpc(9120033,10);
            break;
            }
        }
    }
}