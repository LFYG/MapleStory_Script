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
    if (cm.getMapId() == 180000001) {
            cm.sendOk("���ź�������ΪΥ���û����򱻽�ֹ��Ϸ���������������ϵ����Ա.")
            cm.dispose();
        } 
    else if (status == 0) {

      if (cm.getMapId() == 272020200) {

           cm.sendSimple("#b��ܰ������յ���ʿ���������ʾ���⣡#k\r\n��л����һ��ѣ�����������һЩ#rС���ﲢ�����뿪����#k.#d\r\n\r\n#L0#�������ǵ�����!#l"); 

      } else {
          cm.sendOk("��ã�����ʱ��Ů�����ȣ�"); 
          cm.dispose();
         }
     

    } else if (status == 1) {
        switch (selection) {
        case 0:
         if (cm.getSpace(4) < 3) {
            cm.sendOk("��ܰ������յ���ʿ���㱳���ġ��������ռ�û��3���ռ�����,�������±���.");
            cm.dispose();
       } else {
            cm.dispose();
            cm.warp(272020110);
            cm.gainItem(4021010, 1);
            cm.gainItem(4021020, 1);
            cm.gainItem(4020009, 5);
            cm.worldMessage("<ʱ��Ů��>���� �����ҵ�ʱ�գ������Ƿ��ƽ��...��Ը���Შ�����Ǳ������ӡ��ʱ��... ");
            cm.sendOk("\r\n(#b ���ҵ�ʱ�գ�Ҫ���콫��ƽ��...��Ը���Შ�����Ǳ������ӡ��ʱ��... #k)"); 
     }
            break;
        case 1:
            cm.dispose();
            cm.openNpc(2144020, 2);
            break;
        case 2:
            cm.dispose();
            cm.openNpc(2144020, 3);
            break;

        case 3:
            cm.removeNpc(272020200, 2144020);
            cm.sendOk("�ɹ�.........");
            cm.dispose();
            break;
        case 4:
            cm.spawnNpc(2144016, 9, -270);
            cm.dispose();
            break;
        case 5:
            cm.dispose();
	    cm.openNpc(9030000);
            break;
        case 6:
            cm.dispose();
            cm.sendOk("��ֵ��վ.\r\n������ֵ����Ϊ1:3000.\r\n���������������.\r\n�����ʲô��������ѯ����Ա.");
            break;
        case 7:
            cm.dispose();
	    cm.openNpc(9900002,7);
            break;
        case 8:
	    cm.warp(910530202,0);
            cm.sendOk("�Ѿ����㴫�͵����ͼ.��������Ѱ�ҵ��ܹ�!�зḻ�Ľ���Ŷ!\r\n#rף����Ϸ���!!!");
            cm.dispose();
            break;
        case 9:
            cm.dispose();
	    //cm.openWeb("http://www.5ifly.com");
            cm.sendOk("�Ѿ�Ϊ�����ְҵ������ı����嵥.\r\n#rף����Ϸ���!!!");
            break;
        case 10:
            cm.dispose();
	    cm.openNpc(9900004,10);
            break;
		}
    }
}