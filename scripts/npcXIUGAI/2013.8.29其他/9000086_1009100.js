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
    if (status == 0) {
        var selStr = "#r ���������T��#i4005000##r  ��������  #i4005000# #r��T�������� \r\n#r" + cm.getVipname() + " #r ���ã�#d��ӭ�����븣�����ģ�\r\n����MapleWing����Ϊ��׼����ʮ�ַ��ĸ��� ��#b��ѡ����Ҫ��Ҫ�ĸ�����\r\n#r#L1009100# #i4021005##r  ���߸���  #i4021005##r #l #L1009101# #i4021005##r  ÿ�ո���  #i4021005# #l\r\n        #L1009102# #i4021001##r  ���⸣��  #i4021001##r #l\r\n        #L1009103# #i4021007##r  VIP ����  #i4021007##r #l\r\n\r\n#L100##e#r��������˵�� (���˱ؿ���)��#l";
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {

        case 100:

         cm.sendOk("#r �������T��#i4005000##r  ��������˵��  #i4005000# #r��T������ \r\n\r\n#r������MapleWing ���羫��׼���ĸ߼������������Ǹ������ŵľ���˵����\r\b #i4021005##r  ���߸���  #i4021005##r ��\r\n ÿλ��ҿ���ƾ�����߻��۵Ļ�Ծ�������ȡ��\r\n���а�����1000���þ�50W��ҡ�1���׵㡢1��#i5062000:#  \r\n #i4021005##r  ÿ�ո���  #i4021005# ��\r\nÿλ���һ��ֻ����һ�Σ�\r\n���а��� 1W���þ�500W��ҡ�10���׵㡢1��#i4032398:#  \r\n ");
         cm.dispose();
         break;

        case 1009100:
            cm.dispose();
            cm.openNpc(9000086, 1009100);
            break;

        case 1009101:
            cm.dispose();
            cm.openNpc(9000086, 1009101);
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
        cm.dispose();
    }
}