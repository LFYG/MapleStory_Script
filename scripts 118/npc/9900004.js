var status = 0;

var sms = "#r�����Ҵ��� #e#rMapleWing #n ��л����֧�֣�\r\nǧ������˵������ݸм���\r\n#b������ #rMapleWing#b NPC��Ҫ���ܣ�\r\n#g�ٿ�ݴ��ͣ�#d������������������ǿ����Ѵ��ͣ���Ҳ���Ե������������룡��ȻҲ������Ҳ���Դ򿪴��ͼ˫������Ҫȥ�ĵط�.....\r\n#g�������̵꣺#d�������������ְҵ���̵꣬������������벻���Ķ���Ŷ���пտ���ȥ������\r\n#g��תְ�򵼣�#dMapleWing����ɫ֮һŶ��������Ӣ��֮���ְҵ�Զ�תְ֮�⣬��������������鵽��һ����תְ����Ŷ��\r\n#g�ܷ������ޣ�#d�����������������������ѡ�������������ָ�����ҵ�<ʱ��Ů��>���ȣ�������������ޣ���ø���ǿ���������\r\n#g��VIPר����#d��ʱ��δ���ţ���Ҫ�޸�һЩ���⣬�ͼ���һЩ�µĹ��ܣ�\r\n#g�޽���ר����#dûǮ�ˣ���Ҫ���������ծȯ�͹�Ʊ����������һҹ������(��Ʊ����һЩBUG ���������У������ڴ���)\r\n#g�߸���ר����#d��ʱֻ�����˷��������Ժ�Ὺ�Ÿ��࣬��������Ҫ������Ŭ������\r\n#g��ר����#d�����������Ǻܶ��ţ�Ҫ����15���ˣ���һ���ų�������\r\n#g�ṱ��ר����#d�����ǹ��׵������Ŷ���ǵö�ȥ����������Ҳ��Ҫһ���ӻ����ˣ���Ȼ������˺����޾ͺܵ���Ŷ��\r\n#g�⸣��ר����#d�����и��ָ�������Ծ����Զһ��������ħ��Ŷ��\r\n#g11.����ר����#d��ʱ�����š�\r\n#g12.����ר����#d��ʱδ������\r\n#g13.Ӣ�۾��ѣ�#d��ʱ���Ż�Ӱ�ľ��ѡ�\r\n#g14.ί������#d�����˶��ˣ��ٿ��š�����\r\n#g15.������#dͬ�ϡ�\r\n#g16.������ս��#dͬ�ϡ�\r\n#g17.����������#d���Ե������������ģ����ž�ȥ������\r\n#g18.����н飺#dû����˿��Խ�ȥ������\r\n#g19.�ֿ����#d֧��Ұ����ٴ򿪲ֿ��Ŷ����\r\n#g20.BOSS ���ͣ�#d����BOSS���������������ﴫ�͹�ȥŶ��\r\n#g21.BOSS ��ѯ��#dʱ�����š�\r\n#g22.�ȼ�����#d���˶����ٿ��š�����\r\n#g23.���ϵͳ��#dͬ�ϡ���";

var shop1 = 1012123;
var mds;

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

  //  if (cm.getPlayer().getLevel() < 0 && cm.getPlayer().getJob() != 200) {
//	cm.warp(50000);
    //    cm.sendOk("�ȼ��ﵽ 8 ������ʹ�ô˹���.�������������� 8 ����.\r\n8 ��ǰ��Ϊְҵ������ܾ��鲻//��100��.\r\n8 �����齫��ָ���ǰ����.8 �����������������ȡ���˽���Ŷ!\r\n���ף����Ϸ���!");
    //    cm.dispose();
     //   return;
 //   }
      //  if (!cm.isQuestFinished(29003) && !cm.haveItem(1142184, 1, true, true)) {
            if (!cm.haveItem(1002419, 1, true, true) && cm.canHold(1002419, 1)) {
                cm.gainItem(1002419, 1); //��Ҷñ
            }
          //  if (cm.canHold(1142184, 1)) {
           //     cm.gainItem(1142184, 1); //����ð�ռ�
           //     cm.gainMeso(5555555); //yo shit who the hell added this
	//	cm.gainItem(1302063,1);
             //   cm.forceCompleteQuest(29003);
          //      cm.getPlayer().modifyCSPoints(2, 55555);
             //   cm.sendOk("#r ���������T��#i4251202##r   MapleWing   #i4251202# #r��T�������� \r\n\r\n#d" + cm.getVipname() + " ��ӭ������MapleWing����Ϊ����ң�ϵͳ�����㼸�����ϣ��������Ϸ�������죡");
         //   } else {
        //        cm.sendOk("�뽫������һ���Ŀռ�.");
       //     }
          //  cm.dispose();
        //    return;
      //  }

           mds = "#r ���������T��#i4251202##r   MapleWing   #i4251202# #r��T�������� \r\n#r" + cm.getVipname() + "\r\n";

           var selStr = "#r ���������T��#i4251202##r   MapleWing   #i4251202# #r��T�������� \r\n#r" + cm.getVipname() + "  #k#n����! ��л���� MapleWing ֧��!#n#k\r\n����  #rMapleWing#k  ��#d ����ֵ#k Ϊ�� #e#r" + cm.getMaplewing("maple")  + "#k#n�� \r\n��ѡ������Ҫ�ķ���#r\r\n#L100#��ݴ���#l  #L101#�����̵�#l  #L102#תְ��#l  #L103#��������#l\r\n#r#L104#VIP ר��#l  #L105#����ר��#l  #L106#����ר��#l  #L107#�ר��#l\r\n#d#L108#����ר��#l  #L109#����ר��#l  #L110#����ר��#l  #L111#����ר��#l\r\n#d#L112#Ӣ�۾���#l  #L113#ί������#l  #L114#���ʻ#l  #L115#�ռ���ս#l\r\n#b#L116#��������#l  #L117#����н�#l  #L118#�ֿ����#l  #L119#�ٱ��齱#l\r\n#L120#BOSS����#l  #L121#BOSS��ѯ#l  #L122#�ȼ�����#l  #L123#���ϵͳ#l  \r\n#b#L124#            �˽����з������ݺ�Ҫ��      #l \r\n";

//����
//\r\n\r\n#k������ר����������ڣ�\r\n#r#L104#���������T��       VIP ר��       ��T��������#l \r\n#d#L201#VIP ��Ȩ#l  #L202#VIP �̵�#l  #L203#VIP ����#l  #L204#VIP �#l \r\n#r#L105#���������T��       ����ר��       ��T��������#l \r\n#d#L301#��������#l  #L302#���ڹ���#l  #L303#����Ͷ��#l  #L304#������ҵ#l  \r\n#r#L106#���������T��       ����ר��       ��T��������#l \r\n#d#L401#��Ӹ���#l  #L402#�����#l  #L403#�ռ�����#l  #L404#Ȥζ����#l    \r\n#r#L107#���������T��       �ר��       ��T��������#l \r\n#d#L501#�ճ��#l  #L502#����#l  #L503#����#l  #L504#��˵�#l  \r\n#r#L108#���������T��       ����ר��       ��T��������#l \r\n#d#L601#��������#l  #L602#����ί��#l  #L603#�����̵�#l  #L604#���ƾ���#l   \r\n#r#L109#���������T��       ����ר��       ��T��������#l \r\n#d#L109#���߸���#l  #L109#ÿ�ո���#l  #L703#�����̵�#l  #L704#������Ʊ#l    \r\n#r#L110#���������T��       ����ר��       ��T��������#l \r\n#d#L801#��������#l  #L802#�齱����#l  #L803#�����̵�#l  #L804#����ף��#l    \r\n#r#L111#���������T��       ����ר��       ��T��������#l \r\n#L901#�������#l 
        cm.sendSimple(selStr);


    } else if (status == 1) {
        switch (selection) {
        case 0:
            if (cm.getPlayer().getMapId() >= 910000000 && cm.getPlayer().getMapId() <= 910000022) {
                cm.sendOk("���Ѿ����г��ˣ�������ʲô��");
            } else {
                cm.saveReturnLocation("FREE_MARKET");
                cm.warp(910000000, "st00");
            }
            cm.dispose();
            break;
        case 1:
            cm.dispose();
            cm.openNpc(9900002);
            break;
        case 2:
            cm.dispose();
            cm.openNpc(9010000, 1);
            break;

        case 3:
            cm.sendNext(cm.getRankingInformation(-1));
            cm.dispose();
            break;
        case 4:
            if (cm.getPlayer().getLevel() < 10) {
                cm.warp(50000);
            } else {
		cm.sendOk("��ĵȼ�����10,���������ֵ�ͼ����.");
            }
            cm.dispose();
            break;
        case 5:
            cm.dispose();
	    cm.openNpc(9030000);
            break;
        case 6:
            cm.dispose();
            break;
        case 7:
            cm.dispose();
	    cm.openShop(9900007);
            break;
        case 8:
	   //cm.warp(910530202,0);
            //cm.sendOk("�Ѿ����㴫�͵����ͼ.��������Ѱ�ҵ��ܹ�!�зḻ�Ľ���Ŷ!\r\n#rף����Ϸ���!!!");
            cm.dispose();
            break;
        case 9:
            cm.dispose();
	  //  cm.openWeb("http://www.5ifly.com");
            cm.sendOk("�Ѿ�Ϊ�����ְҵ������ı����嵥.\r\n#rף����Ϸ���!!!");
            break;
        case 10:
            cm.dispose();
	    cm.openNpc(9900004,10);
            break;

        case 11:
            cm.dispose();
	    cm.openNpc(9900002,20);
            break;
        case 12:
            cm.dispose();
            cm.openNpc(9900004,70);
            break;
        case 13:
            cm.dispose();
            cm.openNpc(9900002,21);
            break;
        case 14:
            cm.dispose();
            cm.openNpc(9900004,90);
            break;
        case 15:
            cm.dispose();
	    cm.warp(749050400);
            break;
        case 16:
            cm.dispose();
	    cm.openNpc(9900002,2);
            break;
        case 17:
            cm.dispose();
	    cm.openNpc(9030100);
            break;
        case 18:
            cm.dispose();
	    cm.openNpc(9900002,8);
            break;
        case 19:
            cm.dispose();
	    cm.openNpc(9270035,1);
            break;
        case 20:
            cm.dispose();
	    cm.openShop(2060003);
            break;
        case 21:
            cm.dispose();
	    cm.openNpc(9900002,5);
            break;
        case 22:
            cm.dispose();
	    cm.openNpc(9900004,998);
            break;
        case 23:
            cm.dispose();
	    cm.openNpc(9000086);
            break;
        case 24:
            cm.dispose();
	if(cm.getMapId() == 700000000)
{
	    cm.sendOk("���Ѿ��ڽ���ͼ��.");
}else{
            cm.warp(700000000);
	    cm.sendOk("�Ѿ����㴫�͵�����ͼ��\r\n����ʢ��һ��.\r\n�������İ���.���������������!\r\nף���»����!!!");
}
            break;
        case 25:
            cm.dispose();
	    cm.openNpc(9900004, 999);
            break;
        case 26:
            cm.dispose();
	    cm.openNpc(9000086);
            break;
        case 27:
            cm.dispose();
	    cm.openNpc(9900004,80);
            break;
        case 28:
            cm.dispose();
	    cm.openNpc(9900004,4);
            break;
        case 29:
            cm.dispose();
            cm.openShop(shop1);
            break;
        case 30:
            cm.dispose();
	    cm.openNpc(9120033);
            break;
	case 31:
            cm.dispose();
	    cm.openNpc(9900002,24);
            break;
        case 32:
            cm.dispose();
	    cm.openNpc(9900004,123);
            break;
        case 33:
            cm.dispose();
	    cm.openNpc(9900002,25);
            break;
        case 34:
            cm.dispose();
	    cm.openNpc(9900004,123);
            break;



        case 100:
            cm.dispose();
	    cm.openNpc(9000086, 1000);
            break;
        case 101:
            cm.dispose();
	    cm.openNpc(9000086, 1001);
            break;
        case 102:
            cm.dispose();
	    cm.openNpc(9000086, 1002);
            break;
        case 103:
            cm.dispose();
	    cm.openNpc(9000086, 1003);
            break;
        case 104:
            cm.dispose();

              cm.sendOk("�����ڴ���");
	  //  cm.openNpc(9000086, 1004);
            break;
	case 105:
            cm.dispose();
	    cm.openNpc(9000086, 1005);
            break;
        case 106:
            cm.dispose();
	    cm.openNpc(9000086, 1006);
            break;
        case 107:
            cm.dispose();
            cm.sendOk("�����ڴ���");
	  //  cm.openNpc(9000086, 1007);
            break;
        case 108:
            cm.dispose();
	    cm.openNpc(9000086, 1008);
            break;
        case 109:
            cm.dispose();
	    cm.openNpc(9000086, 1009);
            break;
        case 110:
            cm.dispose();
          //  cm.sendOk("�����ڴ���")
	    cm.openNpc(9000086, 1010);
            break;
        case 111:
            cm.dispose();
            cm.sendOk("�����ڴ���")
	 //   cm.openNpc(9000086, 1011);
            break;
        case 112:
            cm.dispose();
	    cm.openNpc(9000086, 1012);
            break;
        case 113:
            cm.dispose();
           // cm.sendOk("�����ڴ���")
	    cm.openNpc(9000086, 1013);
            break;
        case 114:
            cm.dispose();
         //   cm.sendOk("�����ڴ���")
	    cm.openNpc(9000086, 1014);
            break;
	case 115:
            cm.dispose();
            cm.warp(270050300);
            cm.sendOk(mds + "\r\n���Ѿ��������͵��� #e#r�ռ���ս#n �볡�أ�")
	 //   cm.openNpc(9000086, 1015);
            break;
        case 116:
            cm.dispose();
	    cm.openNpc(9000086, 1016);
            break;
        case 117:
            cm.dispose();
	    cm.openNpc(9000086, 1017);
            break;
        case 118:
            cm.dispose();
	    cm.sendStorage();
            break;
        case 119:
            cm.dispose();
	    cm.openNpc(9000086, 1019);
            break;
        case 120:
            cm.dispose();
	    cm.openNpc(9000086, 1020);
            break;
        case 121:
            cm.dispose();
	    cm.openNpc(9000086, 1021);
            break;
        case 122:
            cm.dispose();
            cm.sendOk("�����ڴ���")
	   // cm.openNpc(9000086, 1022);
            break;
        case 123:
            cm.dispose();
            cm.sendOk("�����ڴ���")
	  //  cm.openNpc(9000086, 1023);
            break;
        case 124:
            cm.dispose();
            cm.sendOk("#r ���������T��#i4251202##r   MapleWing   #i4251202# #r��T�������� \r\n#r" + sms)
	   // cm.openNpc(9000086, 1024);
            break;

        case 701:
            cm.dispose();
	    cm.openNpc(9000086, 1009100);
            break;



		}
    }
}