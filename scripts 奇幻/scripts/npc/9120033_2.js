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
            cm.sendSimple("�ҵ�����#r#h ##k��һ�ʲô��#b\r\n#L1#�鿴˵��\r\n#L2##v4310002#�һ����ı�ʯ\r\n#L3##v4310002#�һ��Ϲ����Ž�ָ\r\n#L4##v4310002#�һ���ɫ��������\r\n#L5##v4310002#�һ��ʺ��ƶ�����\r\n#L6##v4310002#�һ���ȹ�������\r\n#L7##v4310002#�һ�����ʹף����ָ\r\n#L9##v4310002#�һ����ּ�Ʒ��װ����(�Ѿ��ر�)\r\n#L10##v4310002#�һ����ּ�Ʒ��װװ��(�Ѿ��ر�)\r\n#L11##v4310002#�һ����ּ�Ʒװ������\r\n#L12##v4310002#�һ����ִ�˵�سɾ���\r\n#L13##v4310002#�һ���������سɾ���");
//\r\n#L13##v4310002#�һ���������سɾ���
        } else if (status == 1) {
        switch (selection) {
        case 1:
                cm.dispose();
                    cm.sendOk("#r#v4310002#�һ�˵��:#b\r\n��11��������x1�һ����ı�ʯ#v4001465#\r\n��11��������x10�һ��Ϲ����Ž�ָ#v1112446#\r\n��11��������x50�һ���ȹ�������#v3010217#\r\n��11��������x50�һ��ʺ��ƶ�����#v3010362#\r\n��11��������x50�һ���ɫ��������#v3010313#\r\n��11��������x70�һ�����ʹף����ָ#v1112586#\r\n��11��������x250�һ����ּ�Ʒ��װװ��#v1052314#\r\n��11��������x300�һ����ּ�Ʒ��װ����#v1412065#\r\n��11��������x250�һ����ּ�Ʒװ������#v1122143#\r\n��11��������x800�һ����ִ�˵�سɾ���#v2044003#\r\n��11��������x800�һ����ִ�˵����سɾ���#v2046010#");
            break;
        case 2:
            if (cm.itemQuantity(4310002) >=100 && cm.getPlayer().getCSPoints(1) >= 100){
	    	cm.gainNX(-100);
		cm.gainItem(4310002,-100);
		cm.gainItem(4001465,500);
                cm.sendOk("#r�һ��ɹ�:#b\r\n1.���ı�ʯ x500");
                cm.dispose();
            } else {
                cm.sendOk("�һ���ʾ��\r\n#b1.��û���㹻��7��������(100��)������(100)!\r\nע:(װ����3����λ����,������1����λ����.)");
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
        case 9:
            cm.dispose();
            //cm.openNpc(9120033,6);
	    cm.sendOk("Ϊ����Ϸ��ƽ�� ��ʱ�ر�");
            break;
        case 10:
            cm.dispose();
            //cm.openNpc(9120033,7);
	    cm.sendOk("Ϊ����Ϸ��ƽ�� ��ʱ�ر�");
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