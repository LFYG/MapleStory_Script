var mds;
var name;
var maple;

var item1 = 2430289;
var gitem1 = 2;

var maples = 2111;
var wmoses = 8111;

/**
����֮����������
*/


function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status >= 2 && mode == 0) {
        cm.sendOk("Alright, see you next time.");
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {

             mds = "#r ���������T��#i4251202##r  ��������ս  #i4251202# #r��T�������� \r\n";

             name = cm.getVipname();
             maple = cm.getMaplewing("maple");

             cm.sendPlayerToNpc(mds + "\r\n#b���ڵ��ﶥ���ˣ������ˡ�����������\r\n�ţ���ҩ�����������ʲô......\r\nҪ��Ҫ�ó���������\r\n(�Ǿ͵����һ���ɣ�)");

     //   cm.dispose();



          } else if (status == 1) {

               if ((cm.getSpace(1) >= 1)&&(cm.getSpace(2) >= 1)&&(cm.getSpace(3) >= 1)&&(cm.getSpace(4) >= 1)&&(cm.getSpace(5) >= 1)) {


            cm.gainItem(item1, gitem1);

            cm.addMaplewing("maple", maples);
            cm.addMaplewing("wmose", wmoses);

            cm.warp(105000000, 0);

             cm.sendPlayerToNpc(mds + "\r\n#b��հ������ȥ������õ���һЩ�������ͱ�һ�����ص��������ͳ�����\r\n#i" + item1 +":##t" + item1 +":#\r\n#b���׵㣺#e#r" + maples + "#n     #b����#e#r" + wmoses + "#n\r\n��������Ľ�������ܲ����ţ����ٺ٣���");

              } else {

             var mdss = mds + "\r\n\r\n�Ƚ����б�����Ŀ����һ���λ������ȥ�����ɣ�";
              cm.sendPlayerToNpc(mdss);
 
              }

        cm.dispose();

    }//(status == 0) 
}






/* NPC : A pile of white flower
 * Location : Sleepywood, forest of patient
 */

/*

var itemSet = new Array(4020007, 4020008, 4010006);
var rand = Math.floor(Math.random() * itemSet.length);

function action(mode, type, selection) {
    if (mode == 1) {
	cm.warp(105000000);
            
	if (cm.getQuestStatus(2054) == 1 && !cm.haveItem(4031028)) {
	    cm.gainItem(4031028, 20);
	} else {
	    cm.gainItem(itemSet[rand], 2);
	}
    }
    cm.dispose();
}
*/