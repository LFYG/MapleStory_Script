var status = 0;
var dsd = 0;

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
    if (status == 0) {//            #r #i4005000##r  ��������  #i4005000##r \r\n
        var selStr = "#r ���������T��#i4251202##r  ����ר��  #i4251202# #r��T�������� \r\n#r" + cm.getVipname() + " #r ���ã�#d��ӭ�����븣��ר����\r\n����MapleWingΪ��׼���˲�һ���ĸ������� ��#b��ѡ����Ҫ��Ҫ�ķ���\r\n#r#L1009100# #i4021005##r  ���߸���  #i4021005##r #l #L1009101# #i4021005##r  ÿ�ո���  #i4021005# #l\r\n             #L1009102# #i4021007##r  ���⸣��  #i4021007##r #l\r\n             #L1009103# #i4021007##r  VIP ����  #i4021007##r #l\r\n#r#L1009104# #i4021005##r  �����̵�  #i4021005##r #l #L1009105# #i4021005##r  ������Ʊ  #i4021005# #l\r\n\r\n#L0##e#r��������˵�� (���˱ؿ���)��#l\r\n";
        cm.sendSimple(selStr);
    } else if (status == 1) {


        switch (selection) {

        case 0:

         
         cm.sendOk("#r �������T��#i4005000##r  ��������˵��  #i4005000# #r��T������ \r\n\r\n#d������MapleWing ���羫��׼���ĸ߼�������\r\n#b�����Ǹ������ŵľ���˵����\r\b #r#i4021005##r  #e���߸���#n  #i4021005##r \r\n ÿλ��ҿ���ƾ�����߻��۵Ļ�Ծ�������ȡ��\r\n#b��Ҫ���а�����1000���þ�50W��ҡ�1���׵㡢1��#i5062000:#  \r\n #r#i4021005##r  #eÿ�ո���#n  #i4021005# \r\n#bÿλ���һ��ֻ����һ�Σ�\r\n��Ҫ���а��� 1W���þ�500W��ҡ�10���׵㡢1��#i4032398:#  \r\n #i4021007##r  ���⸣��  #i4021007##r \r\n#b�����ڴ��� \r\n #i4021007##r  VIP ����  #i4021007##r  \r\n#b�����ڴ���\r\n #i4021005##r  ������Ʊ  #i4021005# \r\n#b�����ڴ���");
            cm.dispose();

            break;

        case 1009101:

            dsd = 1;

        if (cm.getPlayerStat("LVL") >= 10) {
            cm.sendSimple("#r ���������T��#i4021005##r  ÿ�ո���  #i4021005# #r��T�������� \r\n#b \r\n - ÿ�ջ���� >> \r\n#b����������10�����ϣ�\r\n#d��Ŀǰ��ǩ��#e#r " + cm.getBossLog("�ܼ�ǩ��", 1) + " #n#d�� ����ȡ���� #e#r" + cm.getBossLog("�ܼƸ���", 1) + " #n#d�� \r\n#r\r\n#L1#  ����ÿ��ǩ��#l\r\n\r\n#L2#  ��ȡÿ�ո���#l\r\n")
        } else {
            cm.sendOk("#r - ÿ�ո��� >> #k\r\n\r\n10�����µ���Ҳ�����ȡ��");
            cm.dispose();
        }


           // cm.dispose();
            //cm.openNpc(9000086, 1009100);
            break;

        case 1009100:

            dsd = 2;


            cm.sendSimple("#r ���������T��#i4021005##r  ���߸���  #i4021005# #r��T�������� \r\n#b \r\n#b����������100�����ϣ�\r\n\r\n#d��Ŀǰӵ��#e#r" + cm.getMaplewing("mapley") + " #n��Ծ��#d  ����ȡ���߸���#e#r " + cm.getBossLog("���߸���", 1) + " #n#d��  \r\n#r\r\n#L1#  ��ȡ���߸���#l\r\n");



            break;

        case 1009102:
            cm.dispose();
            cm.openNpc(9000086, 1009102);
            break;

        case 1009103:
            cm.dispose();
            cm.openNpc(9000086, 1009103);
            break;


        }

     } else if (status == 2) {

           if (dsd == 1) {


        if (selection == 1) {
            if (cm.getPlayerStat("LVL") < 10) {
                cm.sendOk("#r - ÿ��ǩ�� >> #k\r\n\r\n10�����µĲ��ܲμӻ��");
            } else if (cm.getSpace(4) < 2) {
                cm.sendOk("#r - ÿ��ǩ�� >> #k\r\n\r\nǩ��ʧ�ܣ��������������߿ռ䲻��2����λ��");
            } else {
                if (cm.getBossLog("ÿ��ǩ��") == 0) {
                    cm.gainItem(4032398, 1);//��ϯͼ��
                    cm.gainItem(4310002, 2);//��������
                    cm.setBossLog("ÿ��ǩ��");
                    cm.setBossLog("�ܼ�ǩ��", 1);
		    cm.worldMessage(cm.getChar().getName() + "��ҳɹ�ǩ��.��ǰǩ������" + cm.getBossLog("�ܼ�ǩ��", 1));
                    cm.sendOk("#r - ÿ��ǩ�� >> \r\n#dǩ���ɹ�#k\r\n���7��������x2#v4310002#\r\n���#b��ϯͼ��#v4032398##k���ռ�������Ը�����ȡ������");
                } else {
                    cm.sendOk("#r - ÿ��ǩ�� >> #k\r\n\r\n�Բ���һ��ֻ��ǩ��һ�Ρ�");
                }
            }
            cm.dispose();
        } else if (selection == 2) {
            if (cm.getPlayerStat("LVL") < 30) {
                cm.sendOk("#r - ÿ�ո��� >> #k\r\n\r\n30�����µĲ��ܲμӻ��");
            } else if (cm.getSpace(4) < 2) {
                cm.sendOk("#r - ÿ�ո��� >> #k\r\n\r\n����ʧ�ܣ��������������߿ռ䲻�㡣");
            } else {
                if (cm.getBossLog("ÿ�ո���") == 0) {
		    cm.gainItem(2022118, 3);//����Ա��ף��x3
                    cm.gainItemPeriod(5072000,10,1);//���ʵ�����x10 
                    cm.gainItemPeriod(5030001,1,1);//��Ӷ����x1
                    cm.gainItemPeriod(5220040,10,1);//ת����x10
                    cm.gainNX(2, 1000);//���þ� 1000
                    cm.gainMeso(5000000);//500W���
                    cm.setBossLog("ÿ�ո���");
                    cm.setBossLog("�ܼƸ���", 1);
		    cm.worldMessage(cm.getChar().getName() + "��ҳɹ���ȡ����.��ȡ�����ܴ���" + cm.getBossLog("�ܼƸ���", 1));
                    cm.sendOk("#r - ÿ�ո��� >> \r\n#dÿ�ո�����ȡ�ɹ�#k\r\n���#v2022118# x 3   #v5072000# x 10 #v5030001# x 1 #v5220040# x 10 ���1000���þ� 500W��ҡ�");
                } else {
                    cm.sendOk("#r - ÿ�ո��� >> #k\r\n\r\n�Բ���һ��ֻ�ܸ���һ�Ρ�");
                }
            }
            cm.dispose();

        }


      } esle if (dsd == 2) {
 

        if (selection == 1) {

            if (cm.getPlayerStat("LVL") < 100) {
                cm.sendOk("#r - ���߸��� >> #k\r\n\r\n100�����µ���Ҳ�����ȡ��");
            } else if (cm.getSpace(5) < 3) {
                cm.sendOk("#r #k\r\n\r\n��ȡʧ�ܣ��������������߿ռ䲻��3����λ��");
            } else {
                if (cm.getMaplewing("mapley") >= 1) {


                    cm.gainItem(4021005, 1);//����ħ��x1
                    cm.gainItemPeriod(5072000,2,1);//���ʵ�����x2

                    cm.gainItemPeriod(5220040,2,1);//ת����x2
                    cm.gainNX(2, 200);//���þ� 200
                    cm.gainMeso(1000000);//100W���

                    cm.addMaplewing("mapley", -1);
                    cm.setBossLog("���߸���", 1);
		    cm.worldMessage(cm.getChar().getName() + "��ҳɹ���ȡ���߸���.��ǰ��ȡ����" + cm.getBossLog("���߸���", 1));

                    cm.sendOk("#r - ÿ��ǩ�� >> \r\n#dǩ���ɹ�#k\r\n���7��������x2#v4310002#\r\n���#b��ϯͼ��#v4032398##k���ռ�������Ը�����ȡ������");

                } else {
                    cm.sendOk("#k\r\n\r\n�Բ������Ļ�Ծ�㲻��1���޷���ȡ���߸�����\r\n��Ŀǰ��ӵ�У�#e#r" + cm.getMaplewing("mapley") + " ���Ծ��");
                }
            }
            cm.dispose();

        
           



      }
              



        cm.dispose();




    }
}