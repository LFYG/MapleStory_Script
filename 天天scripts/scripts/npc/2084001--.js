/*
	������  �������õ�NPC ִ�нű����ܳ���2��
*/


var mds = "";
var mda = "";
var mdd = "";
var mde = "";

var name;
var lvs;

var gp1;
var gp2;
var gp3;

var namegp1 = "";
var namegp2 = "";
var namegp3 = "";

var rategp1 = 1;
var rategp2 = 1;
var rategp3 = 1;

var pgp1;
var pgp2;
var pgp3;

var lpgp1;
var lpgp2;
var lpgp3;



var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++
    } else {
        cm.dispose();
        return;
    }
    if (status == 0) {




        name = cm.getVipname();
        namegp1 = cm.getMaplewinggpname(1);
       // namegp2 = cm.getMaplewinggpname(2);
        //namegp3 = cm.getMaplewinggpname(3);

        rategp1 = cm.getMaplewinggp("rate", 1);

        pgp1 = cm.getMaplewinggp("point", 1);

        lpgp1 = cm.getMaplewinggp("lastpoint", 1);
           
        mds += "#r ���������T��#i4251202##r   ��������   #i4251202# #r��T�������� \r\n\r\n#r";

        //for (var )

        mda += "\r\n\r\n#b��Ʊ1 ��\r\n#e#r" + namegp1 + " #d#n ���� #e#r" + rategp1 + " #n#b ��ǰ���� #e#r" + pgp1 + " #n#d \r\n�ϴε��� #e#r" + lpgp1 + " #n\r\n" ;





/*
        if(cm.getChar().getAccountID()==1){

        var selStr = "���� #r#h ##k ���ã�����ѡ������Ҫ���ԵĹ���:\r\n\r\n#r#L0#�ռ�����#l\r\n#L1#����ȫ����ף��#l\r\n#L2#�㲥����#l\r\n\r\n#L3#Maplewing����ϵͳ#l\r\n#L4#Maplewing����#l\r\n#L5#�����¼ӵ�maplewing ���ݱ�#l";

        selStr += "\r\n\r\n#b��ʲô����getMaplewingjr " + cm.getMaplewingjr("gpid1") +  " \r\n#b#L100#����˭��#l\r\n#L101#������㽻�ס�#l\r\n#L102#����SetMapleGP��#l\r\n#L103#����SetMapleWing��#l";

        cm.sendSimple(selStr);

        } else {

        cm.sendSimple("��ʲô����\r\n\r\n#b#L0#����˭��#l\r\n#L1#������㽻�ס�#l");
        }

*/
        cm.sendSimple("��ʲô����\r\n\r\n#b#L100#����˭��#l\r\n#L101#������㽻�ס�#l" + mda);

    } else if (status == 1) {
        switch (selection) {


        case 0:
            cm.dispose();
            cm.openNpc(2084001, 1);
            break;
        case 1:
            cm.dispose();
            cm.openNpc(2084001, 2);
            break;
        case 2:
            cm.dispose();
            cm.openNpc(2084001, 3);
            break;

        case 3:
            cm.dispose();
            if(cm.addBank() > 0) {
            cm.addBank();
            cm.openNpc(2084001, 4);
            } else {
            cm.openNpc(2084001, 4);
            }
            break;

        case 4:
            cm.dispose();
            cm.openNpc(2084001, 5);
            break;

        case 5:
            cm.dispose();
            if(cm.getMaplewing(10, 0) < 100000) {
	    cm.openNpc(2084001, 6);
            } else {
	    cm.openNpc(2084001, 6);
           // cm.sendOk("........");
            }
            break;
        case 6:
            cm.dispose();
            break;
        case 7:
            cm.dispose();
	    cm.openNpc(2084001,7);
            break;
        case 8:
	    cm.warp(910530202,0);
            cm.sendOk("�Ѿ����㴫�͵����ͼ.��������Ѱ�ҵ��ܹ�!�зḻ�Ľ���Ŷ!\r\n#rף����Ϸ���!!!");
            cm.dispose();
            break;
        case 9:
            cm.dispose();
	   // cm.openWeb("http://www.5ifly.com");
            cm.sendOk("�Ѿ�Ϊ�����ְҵ������ı����嵥.\r\n#rף����Ϸ���!!!");
            break;
        case 10:
            cm.dispose();
	    cm.openNpc(9900004,10);
            break;


        case 100:
            cm.sendNext("����ʶ�������������һ���̽����档");
            break;
        case 101:
            cm.sendNextPrev("��ͨ��ó��׬�˺ܶ�Ǯ���������ʲôֵǮ�Ķ�����������ʱ�����ҡ�");
            break;
        case 102:
           if (cm.setMaplewinggp("lastpoint", 5000, 1) == null) {
            cm.sendOk("�ɹ���������");
          } else {
            cm.sendOk("ʧ�ܣ�����");
          }
            break;
        case 103:
           if (cm.setMaplewing("wmose", 500) == -1) {
            cm.sendOk("�ɹ���������");
          } else {
            cm.sendOk("ʧ�ܣ�����");
          }
            break;






        }
        cm.dispose();
    }
}