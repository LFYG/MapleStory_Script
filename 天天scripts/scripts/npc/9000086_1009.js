var status = 0;
var dsd = 0;

var qdwp1 = 4032398;//��ϯͼ��
var qdwp2 = 4310002;//��������

var mrfl1 = 5062000;//����ħ��
var mrfl2 = 2022118;//����Ա��ף��
var mrfl3 = 5072000;//���ʵ�����
var mrfl4 = 5030001;//��Ӷ����
var mrfl5 = 5220040;//ת����

var mrdj = 1000;//ÿ�ո��ĵ��
var mrjb = 5000000;//ÿ�ո��Ľ��


var zxfl1 = 5062000;//����ħ��
var zxfl2 = 5072000;//���ʵ�����
var zxfl3 = 5220040;//ת����

var zxdj = 200;//���߸��ĵ��
var zxjb = 1000000;//���߸��Ľ��


var gqdwp1 = 1;
var gqdwp2 = 2;

var gmrfl1 = 3;
var gmrfl2 = 3;
var gmrfl3 = 10;
var gmrfl4 = 1;
var gmrfl5 = 10;


var gzxfl1 = 1;
var gzxfl2 = 2;
var gzxfl3 = 2;

var mds = "";
var mdss = "";
var mdsss = "";


var ads = 1;//С����
var huoy;
var nbs;

var pjb;


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

        huoy = cm.getMaplewing("mapley");
        pjb = cm.getMeso();

        var selStr = "#r ���������T��#i4251202##r  ����ר��  #i4251202# #r��T�������� \r\n#r" + cm.getVipname() + " #r ���ã�#d��ӭ�����븣��ר����\r\n����MapleWingΪ��׼���˲�һ���ĸ������� ��\r\n#b��ѡ����Ҫ��Ҫ�ķ���\r\n#r#L1009100# #i4021005##r  ���߸���  #i4021005##r #l #L1009101# #i4021005##r  ÿ�ո���  #i4021005# #l\r\n             #L1009102# #i4021007##r  ���⸣��  #i4021007##r #l\r\n             #L1009103# #i4021007##r  VIP ����  #i4021007##r #l\r\n#r#L1009104# #i4021005##r  �����̵�  #i4021005##r #l #L1009105# #i4021005##r  ������Ʊ  #i4021005# #l\r\n\r\n#L0##e#r��������˵�� (���˱ؿ���)��#l\r\n";
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

        mds += "#r ���������T��#i4021005##r  ÿ�ո���  #i4021005# #r��T�������� \r\n";

            cm.sendSimple(mds + "#b����������10�����ϣ�\r\n#d��Ŀǰ��ǩ��#e#r " + cm.getBossLog("�ܼ�ǩ��", 1) + " #n#d�� ����ȡ���� #e#r" + cm.getBossLog("�ܼƸ���", 1) + " #n#d�� \r\n#bǩ�����#i" + qdwp1 + ":# #kx#r " + gqdwp1 + "  #i" + qdwp2 + ":# #kx#r " + gqdwp2 + " \r\n#b�������#i" + mrfl1 + ":# #kx#r " + gmrfl1 + "  #i" + mrfl2 + ":# #kx#r " + gmrfl2 + " #i" + mrfl3 + ":# #kx#r " + gmrfl3 + " #i" + mrfl4 + ":# #kx#r " + gmrfl4 + "  #i" + mrfl5 + ":# #kx#r " + gmrfl5 + "  #r#e" + mrdj + " #n#d���þ�#r#e " + mrjb + "#n#d��� \r\n\r\n#e#r#L1#  ����ÿ��ǩ��#l       #L2#  ��ȡÿ�ո���#l\r\n")
        } else {
            cm.sendOk(mds + "#k\r\n\r\n10�����µ���Ҳ�����ȡ!!!!");
            cm.dispose();
        }


           // cm.dispose();
            //cm.openNpc(9000086, 1009100);
            break;

        case 1009100:

            dsd = 2;
            ads = huoy;

            nbs = (gzxfl1 + gzxfl2 + gzxfl3)*ads/100 + 3;

        mdss = "#r ���������T��#i4021005##r  ���߸���  #i4021005# #r��T�������� \r\n";


            cm.sendSimple(mdss + "\r\n#b����������100�����ϣ��������㹻�Ŀ�λ��\r\n\r\n#d��Ŀǰӵ��  #e#r" + cm.getMaplewing("mapley") + " #n��Ծ��#d  ����ȡ���߸���#e#r " + cm.getBossLog("���߸���", 1) + " #n#d��  \r\n#b�������#i" + zxfl1  + ":# #kx#r " + gzxfl1 + " #i" + zxfl2  + ":# #kx#r " + gzxfl2  + " #i" + zxfl3  + ":# #kx#r " + gzxfl3  + "  #r#e" + zxdj + " #n#d���þ�#r#e " + zxjb + "#n#d���  \r\n#bע�⣺һ���Ծ�������ȡһ�����߸�������Ծ��ÿʮ����ϵͳ�Զ�����һ�Ρ�#r#e\r\n#L1#��ȡһ�����߸���#l    #L2#��ȡ " + huoy + " �����߸���#l\r\n\r\n#k#nע: һ������ȡ#e#r" + huoy + "#n#k�θ�������������������#e#r" + nbs + "#n#k����λ��\r\nȫ����ȡ����������������Ʒ��\r\n#i" + zxfl1  + ":# #kx#r " + gzxfl1*ads + " #i" + zxfl2  + ":# #kx#r " + gzxfl2*ads  + " #i" + zxfl3  + ":# #kx#r " + gzxfl3*ads  + "  #r#e" + zxdj*ads + " #n#d���þ�#r#e " + zxjb*ads + "#n#d���\r\nע�⣺������ȡ�õ��Ľ�ҳ���1Eʱ��ϵͳ���ѽ���Զ���������MaplewingBank���˻��ڣ� ");



            break;

        case 1009102:
            cm.dispose();
            cm.sendOk("�����ڴ�����");
            //cm.openNpc(9000086, 1009102);
            break;

        case 1009103:
            cm.dispose();
            cm.sendOk("�����ڴ�����");
           // cm.openNpc(9000086, 1009103);
            break;
       case 1009104:
            cm.dispose();
            cm.sendOk("�����ڴ�����");
            //cm.openNpc(9000086, 1009102);
            break;

        case 1009105:
            cm.dispose();
            cm.sendOk("�����ڴ�����");
           // cm.openNpc(9000086, 1009103);
            break;


        }

     } else if (status == 2) {

           if (dsd == 1) {


        mdsss += "#r ���������T��#i4021005##r  ÿ��ǩ��  #i4021005# #r��T�������� \r\n";


        if (selection == 1) {
            if (cm.getPlayerStat("LVL") < 10) {
                cm.sendOk(mdsss + "#k\r\n\r\n10�����µĲ��ܲμӻ��");
            } else if (cm.getSpace(4) < 2) {
                cm.sendOk(mdsss + "#k\r\n\r\nǩ��ʧ�ܣ��������������߿ռ䲻��2����λ��");
            } else {
                if (cm.getBossLog("ÿ��ǩ��") == 0) {
                    cm.gainItem(qdwp1, gqdwp1);//��ϯͼ��
                    cm.gainItem(qdwp1, gqdwp2);//��������
                    cm.setBossLog("ÿ��ǩ��");
                    cm.setBossLog("�ܼ�ǩ��", 1);
		    cm.worldMessage(cm.getChar().getName() + "��ҳɹ�ǩ��.��ǰǩ������" + cm.getBossLog("�ܼ�ǩ��", 1));
                    cm.sendOk(mdsss + "#k \r\n#dǩ���ɹ�#k\r\n���ǩ�����\r\n#i" + qdwp1 + ":# #kx#r " + gqdwp1 + "  #i" + qdwp2 + ":# #kx#r " + gqdwp2 + " ");
                } else {
                    cm.sendOk(mdsss + "#k #k\r\n\r\n�Բ���һ��ֻ��ǩ��һ�Ρ�");
                }
            }
            cm.dispose();
        } else if (selection == 2) {
            if (cm.getPlayerStat("LVL") < 30) {
                cm.sendOk(mds + "#k\r\n\r\n30�����µĲ��ܲμӻ��");
            } else if (cm.getSpace(4) < 2) {
                cm.sendOk(mds + "#k\r\n\r\n����ʧ�ܣ��������������߿ռ䲻�㡣");

            } else if (pjb > (2147483640 - mrjb)) {
              cm.sendOk(mdss + "#b\r\n\r\n��ȡʧ�ܣ����ı����޷�װ��#e#r" + zxjb + "#n#b  ��ң����뽫���ֽ�Ҵ��� MapleWingBank ��������ȡ�ɣ�");
            } else {
                if (cm.getBossLog("ÿ�ո���") == 0) {
                    cm.gainItem(mrfl1, gmrfl1);//����ħ��x3
		    cm.gainItem(mrfl2, gmrfl2);//����Ա��ף��x3
                    cm.gainItemPeriod(mrfl3,gmrfl3,1);//���ʵ�����x10 
                    cm.gainItemPeriod(mrfl4,gmrfl4,1);//��Ӷ����x1
                    cm.gainItemPeriod(mrfl5,gmrfl5,1);//ת����x10
                    cm.gainNX(2, mrdj);//���þ� 1000
                    cm.gainMeso(mrjb);//500W���
                    cm.setBossLog("ÿ�ո���");
                    cm.setBossLog("�ܼƸ���", 1);
		    cm.worldMessage(cm.getChar().getName() + "��ҳɹ���ȡ����.��ȡ�����ܴ���" + cm.getBossLog("�ܼƸ���", 1));
                    cm.sendOk(mds + "\r\n#dÿ�ո�����ȡ�ɹ�����ø������\r\n#i" + mrfl1 + ":# #kx#r " + gmrfl1 + "  \r\n  #i" + mrfl2 + ":# #kx#r " + gmrfl2 + "  \r\n #i" + mrfl3 + ":# #kx#r " + gmrfl3 + "  \r\n #i" + mrfl4 + ":# #kx#r " + gmrfl4 + "  \r\n #i" + mrfl5 + ":# #kx#r " + gmrfl5 + "  \r\n #r#e" + mrdj + " #n#d���þ�#r#e " + mrjb + "#n#d��� ");
                } else {
                    cm.sendOk(mds + " #k\r\n\r\n�Բ���һ��ֻ�ܸ���һ�Ρ�");
                }
            }
            cm.dispose();

        }



      } else if (dsd == 2) {

        if (selection == 1) {

            if (cm.getPlayerStat("LVL") < 100) {
                cm.sendOk(mdss + "#k\r\n\r\n100�����µ���Ҳ�����ȡ��");
            } else if (cm.getSpace(5) < 3) {
                cm.sendOk(mdss + "#b\r\n\r\n��ȡʧ�ܣ��������������߿ռ䲻��3����λ��");

            } else if (pjb > (2147483640 - zxjb)) {

              cm.sendOk(mdss + "#b\r\n\r\n��ȡʧ�ܣ����ı����޷�װ��#e#r" + zxjb + "#n#b  ��ң����뽫���ֽ�Ҵ��� MapleWingBank ��������ȡ�ɣ�");
            } else {

                if (cm.getMaplewing("mapley") >= 1) {


                    cm.gainItem(zxfl1, gzxfl1);//����ħ��x1
                    cm.gainItemPeriod(zxfl2, gzxfl2, 1);//���ʵ�����x2

                    cm.gainItemPeriod(zxfl3, gzxfl3, 1);//ת����x2

                    cm.gainNX(2, zxdj);//���þ� 200
                    cm.gainMeso(zxjb);//100W���

                    cm.addMaplewing("mapley", -1);
                    cm.setBossLog("���߸���", 1);

		    cm.worldMessage(-11, cm.getChar().getName() + "  ��ҳɹ���ȡ���߸���.��ǰ��ȡ����" + cm.getBossLog("���߸���", 1));

                    cm.playerMessage(-1, "��ϲ���ɹ���ȡ�����߸�����������Ʒ�Ѿ����������ı�����");

                    cm.sendOk(mdss + "\r\n#d��ȡ�ɹ������������Ʒ��\r\n  #i" + zxfl1 + ":# x " + gzxfl1 + " \r\n  #i" + zxfl2 + ":# x " + gzxfl2 + " \r\n  #i" + zxfl3 + ":# x " + gzxfl3 + " \r\n #r#e" + zxdj + " #n ���þ� #r#e" + zxjb + " #n ��� ");


                } else {
                    cm.sendOk(mdss + "#k\r\n\r\n�Բ������Ļ�Ծ�㲻��1���޷���ȡ���߸�����\r\n��Ŀǰ��ӵ�У�#e#r" + cm.getMaplewing("mapley") + " ���Ծ��");

          }


        }

            cm.dispose();




      } else if (selection == 2) {


if (cm.getPlayerStat("LVL") < 100) {
                cm.sendOk(mdss + "#k\r\n\r\n100�����µ���Ҳ�����ȡ��");
            } else if (cm.getSpace(5) < nbs) {
                cm.sendOk(mdss + "#b\r\n\r\n��ȡʧ�ܣ��������������߿ռ䲻�� #e#r" + nbs +"#n#b ����λ��");
            } else if (pjb > (2147483640 - zxjb*ads)) {

              cm.sendOk(mdss + "#b\r\n\r\n��ȡʧ�ܣ����ı����޷�װ��#e#r" + zxjb + "#n#b  ��ң����뽫���ֽ�Ҵ��� MapleWingBank ��������ȡ�ɣ�\r\n������Ľ����̫����ֶ����ȡ���߸�����");
            } else {

                if (cm.getMaplewing("mapley") >= ads) {


                    cm.gainItem(zxfl1, gzxfl1*ads);//����ħ��x1
                    cm.gainItemPeriod(zxfl2,gzxfl2*ads, 1);//���ʵ�����x2

                    cm.gainItemPeriod(zxfl3, gzxfl3*ads, 1);//ת����x2
                    cm.gainNX(2, zxdj*ads);//���þ� 200


                   // if ()
                    cm.gainMeso(zxjb*ads);//100W���

                    cm.addMaplewing("mapley", -1*ads);
                    cm.setBossLog("���߸���", ads);

		    cm.worldMessage(cm.getChar().getName() + "   ��ҳɹ���ȡ  " + ads + "  �� ���߸���.��ǰ��ȡ����" + cm.getBossLog("���߸���", 1));

                    cm.sendOk(mdss + "\r\n#d��ȡ�ɹ������������Ʒ��\r\n  #i" + zxfl1 + ":# x " + gzxfl1*ads + " \r\n  #i" + zxfl2 + ":# x " + gzxfl2*ads + " \r\n  #i" + zxfl3 + ":# x " + gzxfl3*ads + " \r\n #r#e" + zxdj*ads + " #n ���þ� #r#e" + zxjb*ads + " #n ��� ");


                } else {
                    cm.sendOk(mdss + "#k\r\n\r\n�Բ������Ļ�Ծ�㲻�� " + ads + " ���޷�һ������ȡ " + ads + " �����߸�����\r\n��Ŀǰ��ӵ�У�#e#r" + cm.getMaplewing("mapley") + " ���Ծ��");

          }


        }

            cm.dispose();




      }





        cm.dispose();


  }


    }
}