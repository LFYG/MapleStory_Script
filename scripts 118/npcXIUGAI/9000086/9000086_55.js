importPackage(java.lang);

var status = 0;


var dsd;
var itemss;
var slot = Array();

var names;
var rws = 1024;
var kongwei = 1;
var dsa = "";
var selStr = "";
var mmd = "";


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
        cm.dispose();
    }
    if (status == 0) {

       names = cm.getVipname();
       dsa += "#r ���������T��#i4251202##r   MapleWing   #i4251202# #r��T�������� \r\n#r" + cm.getVipname() + "#k ";

       mmd = "#b#L0#���͵��г�#l       #L2#�鿴�������#l\r\n#L3#תְ��#l         #L5#��ݴ���#l\r\n#L20#�����̵�#l         #L21#����ר��#l\r\n#L22#����ר��#l         #L23#��������#l \r\n\r\n #r#L1013#ί������ (���ģ���������ί������ɣ��������Ŷ��)#l\r\n#b";

       if(cm.getChar().getAccountID()==1){
    selStr += mmd + "\r\n#L1#���NPC����#l      #L555#BOSS��ͼ����#l\r\n#L7##rGMר��NPC#l \r\n#L556#����������#l\r\n#L12345#��ȡ#i2430471:# #b#t2430471##l";

       } else {
         selStr += mmd + "\r\n#L1#���NPC����#l      #L555#BOSS��ͼ����#l\r\n#L12345#��ȡ#i2430471:# #b#t2430471##l";

     } 


        var mids = "#r ���������T��#i4251202##r   MapleWing   #i4251202# #r��T�������� \r\n#r" + cm.getVipname() + "#k  #n����! ��ӭ������ #rMaplewing#k !\r\n��ѡ������Ҫ�ķ���:\r\n";

         selStr += "\r\n#L995#ѧϰȺ�輼��#l     #L996#ѧϰ���޼���#l \r\n#L99400#�������ָ����Ʒ#l"

        if ((cm.getJob() >= 432) && (cm.getJob() <= 434)) {

        selStr += "\r\n#L588#ѧϰ��Ӱ��Ծն��20��#l\r\n";

          if (cm.getJob() >= 433) {

             selStr += "\r\n#L587#ѧϰӰ�����ܵ�20��#l\r\n#L586#ѧϰ����������20��#l\r\n";
          }

       }

        // mids +=  cm.getVipname() + "#k  #n����! ��ӭ������ #rMaplewing#k !\r\n��ѡ������Ҫ�ķ���:\r\n";


        cm.sendSimple(mids + selStr);

        } else if (status == 1) { 

        switch (selection) {
        case 0:
            if (cm.getPlayer().getMapId() >= 910000000 && cm.getPlayer().getMapId() <= 910000022) {
                cm.sendOk(dsa + " ���Ѿ����г���Ŷ������");
            } else {
                cm.saveReturnLocation("FREE_MARKET");
                cm.warp(910000000, "st00");
            }
            cm.dispose();
            break;
        case 1:
            cm.dispose();
            cm.openNpc(9900004, 0);
            break;
        case 2:
            cm.dispose();
            cm.openNpc(9010000, 1);
            break;

        case 588:
            cm.dispose();

            if (cm.getPlayer().getSkillLevel(4321006) == 5) {

            cm.teachSkill(4321006, 5, 20);
                cm.sendOk(dsa + " ѧϰ�ɹ�������");

             } else {
                cm.sendOk(dsa + " \r\n�Բ���Ŷ���������Ҫ5�����������ߵȼ���20�����������Ѿ�ѧϰ���ˣ�����");

             }


            break;

        case 587:
            cm.dispose();

            if (cm.getPlayer().getSkillLevel(4330009) == 10) {

            cm.teachSkill(4330009, 10, 20);
                cm.sendOk(dsa + " ѧϰ�ɹ�������");

             } else {
                cm.sendOk(dsa + " \r\n�Բ���Ŷ���������Ҫ10�����������ߵȼ���20�����������Ѿ�ѧϰ���ˣ�����");

             }


            break;


        case 586:
            cm.dispose();

            if (cm.getPlayer().getSkillLevel(4330006) >= 0) {

            cm.teachSkill(4331006, 20, 20);
                cm.sendOk(dsa + " ѧϰ�ɹ�������");

             } else {
                cm.sendOk(dsa + " \r\n�Բ���Ŷ���������Ҫ0��������ߵ�20�����������Ѿ�ѧϰ���ˣ�����");

             }


            break;

        case 1013:

            cm.dispose();
            cm.openNpc(9000086, 1013);
            break;

        case 3:
            //cm.maxSkillsByJob();
            cm.dispose();
            cm.openNpc(9000086, 1002);
            break;
        case 4:
            if (cm.getPlayer().getLevel() < 10) {
                cm.warp(50000);
            } else {
		cm.sendOk(dsa + "��ĵȼ�����10,���������ֵ�ͼ����.");
            }
            cm.dispose();
            break;
        case 5:
            cm.dispose();
	    cm.openNpc(9000086, 1000);
            break;
        case 6:
            cm.dispose();
            cm.openNpc(1012117);
            break;
        case 7:
            cm.dispose();
            cm.openNpc(9300011);
            break;


        case 555:
            cm.dispose();
            cm.openNpc(9000086, 1020);
            break;


        case 20:
            cm.dispose();
	    cm.openNpc(9000086, 1001);
            break;
        case 21:
            cm.dispose();
            cm.openNpc(9000086, 1005);
            break;
        case 22:
            cm.dispose();
            cm.openNpc(9000086, 1008);
            break;


        case 23:
            cm.dispose();
            cm.openNpc(9000086, 1003);
            break;


        case 99400:

            dsd = 400;

            var avail = "";

            for (var i = 0; i < 96; i++) {
                if (cm.getInventory(4).getItem(i) != null) {
                    avail += "#L" + cm.getInventory(4).getItem(i).getItemId() + "##i" + cm.getInventory(4).getItem(i).getItemId() + ":##l";
                }
                slot.push(i);
            }

            for (var i = 0; i < 96; i++) {
                if (cm.getInventory(1).getItem(i) != null) {
                    avail += "#L" + cm.getInventory(1).getItem(i).getItemId() + "##i" + cm.getInventory(1).getItem(i).getItemId() + ":##l";
                }
                slot.push(i);
            }



            cm.sendSimple(dsa + "��ѡ������Ҫ�������Ʒ:\r\n#b" + avail);

            break;

        case 995:
            if (cm.getPlayer().getSkillLevel(8) > 0 || cm.getPlayer().getSkillLevel(10000018) > 0 || cm.getPlayer().getSkillLevel(20000024) > 0 || cm.getPlayer().getSkillLevel(20011024) > 0) {
                cm.sendOk("���Ѿ�ѧϰ��������ܡ�");
            } else {
                if (cm.getJob() == 2001 || (cm.getJob() >= 2200 && cm.getJob() <= 2218)) {
                    cm.teachSkill(20011024, 1, 0); // ���� - Ⱥ��
                } else if (cm.getJob() == 2000 || (cm.getJob() >= 2100 && cm.getJob() <= 2112)) {
                    cm.teachSkill(20000024, 1, 0); // ս�� - Ⱥ��
                } else if (cm.getJob() >= 1000 && cm.getJob() <= 1512) {
                    cm.teachSkill(10000018, 1, 0); // ��ʿ�� - Ⱥ��
                } else {
                    cm.teachSkill(8, 1, 0); // ð�ռ� - Ⱥ��
                }
                cm.sendOk(dsa + "��ϲ��ѧϰ���ܳɹ���");
            }
            cm.dispose();
            break;
        case 996:
            if (cm.getPlayer().getSkillLevel(80001000) > 0) {
                cm.sendOk(dsa + "���Ѿ�ѧϰ��������ܡ�");
            } else {
                if (cm.getJob() >= 3000) {
                    cm.sendOk(dsa + "�Բ��𣡸�ְҵ��ʱ�޷�ѧϰ������ܡ�");
                    cm.dispose();
                    return;
                }
                cm.teachSkill(80001000 ,  1, 1);
                cm.sendOk(dsa + "��ϲ��ѧϰ���ܳɹ���");
            }
            cm.dispose();
            break;





        case 12345:

              if (cm.getPlayer().haveItem(2430471) >= 1) {
                 cm.sendOk(dsa + "#r" + names + "  #k���Ѿ�ӵ�У�#b#i2430471:# #b#t2430471#.\r\n\r\n#r�޷��ظ���ô���Ʒ��");
                 cm.dispose();

             } else {

         if (cm.getSpace(1) >= kongwei) {
            cm.gainItem(2430471, 1);
            cm.sendOk(dsa + "#d" + names + " #k �����Ѿ��� #b#i2430471:# #b#t2430471# #k \r\n���͵����� #r����#k �\r\n#r��ע��鿴�� ");
            cm.dispose();
            } else {
                cm.sendOk(dsa + "���� #r������#k �ռ�û��#r#e " + kongwei + " #n#k����λ���޷���� #b#i2430471:# #b#t2430471#\r\n#d�������������ȡ��");
                cm.dispose();
            }
       }
            break;

        case 55:
/*
            while(rws <= 1030) {
            cm.forceStartQuest(rws);
            rws++;
         }

*/
            cm.dispose();
            break;


        }//switch



        } else if (status == 2) { 

              itemss = selection;

             if (dsd == 400) {

               var shul = cm.getPlayer().getItemQuantity(itemss);

               cm.gainItem(itemss, -shul);

                cm.sendOk(dsa + "���Ѿ������������ #d#i" + itemss + ":# #t" + itemss + ":# ������#e#r" + shul + "#n#b\r\n����ı���ɾ����");
                cm.dispose();


             }




    }//(status == 2) 



}
