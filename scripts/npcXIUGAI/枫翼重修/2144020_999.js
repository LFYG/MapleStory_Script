var status = 0;

var beibao = 2;
var beibaokj = 1;

var xiaoxi = " .... ";
var zfid = 5120037;     // 5120043  Ϊϣ��˹Ů������ף��


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
        } else if (status == 0) {

              if(cm.getChar().getAccountID()==1){
              var selStr = "���� #e#r#h ##k #n ���ã�����ѡ������Ҫ���ԵĹ���:\r\n\r\n#r#L0#�ռ�����#l\r\n#L1#����ȫ����ף��#l\r\n#L2#�㲥����#l\r\n\r\n#L3#Maplewing����ϵͳ#l\r\n#L4#Maplewing����#l\r\n#L5#���� ��������ף����Ϣ(Զ����������)#l\r\n#L6#���� ����ȫ������Ϣ #l";
        cm.sendSimple(selStr);
      } else {
          cm.sendOk("��ã�����ʱ��Ů�����ȣ�"); 
          cm.dispose();
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
            cm.dispose();
            cm.openNpc(2144020, 4);
            break;
        case 4:
            cm.dispose();
            cm.openNpc(2144020, 5);
            break;
        case 5:
            cm.dispose();
            cm.Maplewingx(xiaoxi, zfid);
            //cm.openNpc(2144020, 6);
            break;
        case 6:
         //   cm.removeNpc(272020110, 2144020);
       //     cm.spawnNpc(2144016, 9, -270);
            //cm.sendOk("�ɹ�.........");
	    cm.worldMessage("<ʱ��Ů��>���� �����ҵ�ʱ�գ������Ƿ��ƽ��...��Ը���Შ�����Ǳ������ӡ��ʱ��... ");
            cm.dispose();
            break;
        case 7:
        if (cm.getSpace(beibao) > beibaokj) {

             cm.sendOk("��ܰ������յ���ʿ���㱳�� " + beibao + "   ����   " + beibaokj + "  ������ռ� .");
            cm.dispose();
      } else  {
            cm.sendOk("\r\n�޹�.....���޸�"); 
            cm.dispose();
     }
            break;
        case 8:
        if (cm.getSpace(4) < 3) {
            cm.sendOk("��ܰ������յ���ʿ���㱳���ġ��������ռ�û��3���ռ�����,�������±���.");
            cm.dispose();
       } else {
            cm.dispose();
            cm.warp(272020110);
            cm.gainItem(4021010, 1);
            cm.gainItem(4021020, 1);
            cm.gainItem(4020009, 5);
            cm.sendOk("\r\n(#b  ���ҵ�ʱ�գ������Ƿ��ƽ��...��Ը���Შ�����Ǳ������ӡ��ʱ��... #k)"); 
     }
            break;

        case 9:
           // cm.showlayGuildRanks();
            cm.dispose();
            break;
		}
    }
}