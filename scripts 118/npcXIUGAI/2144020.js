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
            // if (cm.getMob(8860000) != 1) {

           if (cm.getMonsterCount(272020200) > 1) {

           cm.sendOk("ð�ռ��� һ��Ҫ��ֹ �������� �ļƻ�......����������...."); 
           cm.dispose();

         } else {
           cm.openNpc(2144020, 50);
           cm.removeNpc(272020200, 2144020);
           cm.spawnNpc(2144016, 9, -270);
           cm.dispose();
     }


       } else {
              if(cm.getChar().getAccountID()==1){
              var selStr = "���� #r#h ##k ���ã�����ѡ������Ҫ���ԵĹ���:\r\n\r\n#r#L0#�ռ�����#l\r\n#L1#����ȫ����ף��#l\r\n#L2#�㲥����#l\r\n#L3#�Ƴ�NPC 2144020#l";
        cm.sendSimple(selStr);
      } else {
          cm.sendOk("��ã�����ʱ��Ů�����ȣ�"); 
          cm.dispose();
         }
     }

    } else if (status == 1) {
        switch (selection) {
        case 0:
            cm.dispose();
            cm.openNpc(2144020, 1);
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
	    cm.openWeb("http://www.5ifly.com");
            cm.sendOk("�Ѿ�Ϊ�����ְҵ������ı����嵥.\r\n#rף����Ϸ���!!!");
            break;
        case 10:
            cm.dispose();
	    cm.openNpc(9900004,10);
            break;
		}
    }
}