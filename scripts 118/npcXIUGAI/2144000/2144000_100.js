var status = 0;


var vipname;
var texts = "#r";
var talks;
var titems = 4251202;
var reborns;

var beibao = 2;
var beibaokj = 1;

var md2 = "\r\n#b��Ը�Ǳ�������ʱ�ղ��ᱻ���ƣ�\r\nMaplewing��������Ҫ���ػ�.....\r\nð�ռ���Ը�������ô��";

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

          vipname = cm.getVipname();
          reborns = cm.getPlayer().getReborns();
          talks = "#r ���������T��#i" + titems + "##r   ��������   #i" + titems + "# #r��T�������� \r\n";
          texts += talks + "#k����#rMapleWing����#k��ð�ռң� #r " + vipname + " #k\r\n����  #r<ʱ��Ů��>���� #k���ܸ����ܼ�����!\r\n";

          if (reborns == 0) {
          texts += "��������������ֻ���ҵ���Ӱ.....\r\n#b������ңԶ��ʱ���ȶ���ӡ�ڰ�ħ��ʦ��ʱ�շ�ӡ!\r\n���ڰ�ħ��ʦ�����������ڻ���������Ҫ�ƽ��ӡ!\r\n";
           }

          texts += "#dΪ��ά��MapleWing����ĺ�ƽ! �ҿ���ʹ�� #rʱ������� #d��������� #r��������#d !��������ӵ�и�ǿ�������!\r\n";


          texts += "#e#r���޶�ʮ�����죬��ת����!#n\r\n#dĿǰ������޾���Ϊ��  #e#r" + reborns + "#n  ����\r\n#bѡ���Ȩ����������У���\r\n#L1##r����ʱ������������������޾���#l\r\n#L2#Ů��ĵ���#l\r\n#d#L3#�鿴�������޾�����#l\r\n#L4#�鿴����������������#l";

          cm.sendSimple(texts);
         // cm.dispose();
          

     } else if (status == 1) {
         switch (selection) {
               case 1:
                      cm.dispose();
                      cm.openNpc(2144000, 101);
                      break;
               case 2:


                      cm.sendOk(md2);
                      cm.dispose();
                      //cm.openNpc(2144000, 102);
                      break;
               case 3:
                      cm.dispose();
                      cm.openNpc(2144000, 103);
                      break;
               case 4:
                      cm.dispose();
                      cm.openNpc(2144000, 104);
                      break;
          }

       }


  }







/*

      if (cm.getMapId() == 272020200) {

           if (cm.haveMonster(8860004)) {

        if (cm.getSpace(4) < 1) {
            cm.sendOk("��ܰ������յ���ʿ���㱳���ġ��������ռ�û��1���ռ����ϣ��޷��������͸����һЩС����������±���.");
            cm.dispose();
       } else {
           cm.removeNpc(272020200, 2144020);
           cm.spawnNpc(2144016, 9, -270);
           cm.gainItem(4020009, 5);
           cm.killAllMob();
           cm.sendOk("#b��ܰ������յ���ʿ���������ʾ���⣡");
           cm.dispose();
          // cm.sendSimple("#b��ܰ������յ���ʿ���������ʾ���⣡#k\r\nΪ�˸�л��ĸ����������һ�����һ��#rС����#k.#d\r\n\r\n#L5#�������ǵ�����!#l"); 

         }



         } else {

           cm.sendOk("#bð�ռ��� һ��Ҫ��ֹ �������� �ļƻ�\r\n#k������......����������...."); 
           cm.dispose();

     }


       } else {
              if(cm.getChar().getAccountID()==1){
              var selStr = "���� #e#r#h ##k #n ���ã�����ѡ������Ҫ���ԵĹ���:\r\n\r\n#r#L0#�ռ�����#l\r\n#L1#����ȫ����ף��#l\r\n#L2#�㲥����#l\r\n\r\n#L3#Maplewing����ϵͳ#l\r\n#L4#Maplewing����#l\r\n#L5#���� ��������ף����Ϣ(Զ����������)#l\r\n#L6#���� ����ȫ������Ϣ #l";
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

*/