
/*  NPC : Harmonia
	Warrior 4th job advancement
	Forest of the priest (240010501)
*/


var status = -1;

var newjob;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0 && status == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
       
       newjob = cm.getJob() + 1;


        if (! (cm.getJob() == 111 || cm.getJob() == 121 || cm.getJob() == 131 || cm.getJob() == 2111)) {

            cm.sendOk("#r" + cm.getVipname() + " #b���Ѿ�����˵��Ĵ�תְ��\r\n#k������������ʲô����ô��\r\n#rMaplewing  ���������");
            cm.dispose();
            return;

        } else if (cm.getPlayerStat("LVL") < 120) {

            cm.sendOk("#r" + cm.getVipname() + " #b�㻹δ�ﵽ120�����޷����е��Ĵ�תְ��\r\n#d��ﵽ120���Ժ��������ң�");
            cm.dispose();
            return;

        } else {


           cm.sendSimple("#r" + cm.getVipname() + " #k����Ҫ�ٽ�һ������ô?\r\n#b#L0#��Ҫ��Ϊһ��#r " + cm.getJobNameById(newjob) + ".#l\r\n#b#L1#�����ٿ���һ��.#l");

        }


    } else if (status == 1) {
        if (selection == 1) {
            cm.sendOk("#r" + cm.getVipname() + " #k�����׼������,�һ�������е��Ĵ�תְ��.");
            cm.dispose();
            return;
        }
        if (cm.getPlayerStat("RSP") > cm.getPlayerStat("LVL") * 3) { //��һ���̫���SP
            if (cm.getPlayer().getAllSkillLevels() > ((cm.getPlayerStat("LVL") - 9) * 3)) { //��һ���̫���Sp
                cm.sendOk("#r" + cm.getVipname() + "  #k�㻹��δʹ����� SP ����ʹ������������ң�.#n");
                cm.getPlayer().resetSP((cm.getPlayerStat("LVL") - 120) * 3);
            } else {
                cm.sendOk("#r" + cm.getVipname() + "  #k�š����㻹��#b SP #kδʹ�ã���ʹ�������������.");
            }
            cm.dispose();
            return;
        } else {
          cm.changeJob(newjob);
          cm.sendOk("#r" + cm.getVipname() + "  #k ��ϲ���Ѿ������  #d���Ĵ�תְ #k ��\r\n�������Ѿ���һ�� " + cm.getJobNameById(newjob) + "\r\n#b���Ͱɣ� #r<ʱ��Ů��>����#b  �ڵȴ����㣡\r\n\r\n#e#d���������------��������"); 
          cm.dispose();

}

}

}























/*  NPC : Harmonia
	Warrior 4th job advancement
	Forest of the priest (240010501)
*/




/*




var status = -1;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0 && status == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        if (! (cm.getJob() == 111 || cm.getJob() == 121 || cm.getJob() == 131 || cm.getJob() == 2111)) {
            cm.sendOk("#r" + cm.getVipname() + " #b���Ѿ�����˵��Ĵ�תְ��\r\n#k������������ʲô����ô��\r\n#rMaplewing  ���������");
            cm.dispose();
            return;
        } else if (cm.getPlayerStat("LVL") < 120) {
            cm.sendOk("#r" + cm.getVipname() + " #b�㻹δ�ﵽ120�����޷����е��Ĵ�תְ��\r\n#d��ﵽ120���Ժ��������ң�");
            cm.dispose();
            return;
        } else {
           // if (cm.getQuestStatus(6904) == 2 || cm.getJob() == 2111) {
                if (cm.getJob() == 111) {
                    cm.sendSimple("#r" + cm.getVipname() + " #k������Ҫ��Ϊһ����ǿ���սʿô�� \r\n����Ҫ�ٽ�һ������ô?\r\n#b#L0#��Ҫ��Ϊһ�� Ӣ��.#l\r\n#b#L1#�����ٿ���һ��.#l");
               } else if (cm.getJob() == 121) {
                    cm.sendSimple("#r" + cm.getVipname() + " #k������Ҫ��Ϊһ����ǿ���սʿô�� \r\n����Ҫ�ٽ�һ������ô?\r\n#b#L0#��Ҫ��Ϊһ��  ��֮ʥ��ʿ.#l\r\n#b#L1#�����ٿ���һ��.#l");
                } else if (cm.getJob() == 131) {
                     cm.sendSimple("#r" + cm.getVipname() + " #k������Ҫ��Ϊһ����ǿ���սʿô�� \r\n����Ҫ�ٽ�һ������ô?\r\n#b#L0#��Ҫ��Ϊһ�� ����ʿ.#l\r\n#b#L1#�����ٿ���һ��.#l");
               } else {
                    if (cm.haveItem(4031348)) {
                        cm.sendSimple("#r" + cm.getVipname() + " #k������Ҫ��Ϊһ����ǿ���սʿô�� \r\n����Ҫ�ٽ�һ������ô?\r\n#b#L0#��Ҫ��Ϊһ�� ��ǿ��� ս��.#l\r\n#b#L1#�����ٿ���һ��.#l");
                    } else {
                        cm.sendNext("����Ҫ����һ��1000���ҵ� #i4031348:##t4031348# ��.");
                        cm.dispose();
                        return;
                    }
                }
              }


            } else {
                cm.sendOk("#r" + cm.getVipname() + " #k�㻹��δ�����SP��\r\n#r���ܽ��е��Ĵ�תְ��.SP1111111");
                cm.dispose();
                return;
            }
      //  }



    } else if (status == 1) {
        if (selection == 1) {
            cm.sendOk("#r" + cm.getVipname() + " #k�����׼������,�һ�������е��Ĵ�תְ��.");
            cm.dispose();
            return;
        }
        if (cm.getPlayerStat("RSP") > cm.getPlayerStat("LVL") * 3) { //��һ���̫���SP
            if (cm.getPlayer().getAllSkillLevels() > ((cm.getPlayerStat("LVL") - 9) * 3)) { //��һ���̫���Sp
                cm.sendOk("#r" + cm.getVipname() + "  #k�㻹��δʹ����� SP ����ʹ������������ң�.#n");
                cm.getPlayer().resetSP((cm.getPlayerStat("LVL") - 120) * 3);
            } else {
                cm.sendOk("#r" + cm.getVipname() + "  #k�š����㻹��#b SP #kδʹ�ã���ʹ�������������.");
            }
            cm.dispose();
            return;
        } else {
            if (cm.getJob() == 111) {
                cm.changeJob(112);
                cm.sendNext("#r" + cm.getVipname() + "  #k ��ϲ���Ѿ������  ���Ĵ�תְ  ��\r\n�������Ѿ���һ�� #bӢ��#k.\r\n�㽫ѧ�� #bͻ��#k  #b����̩ɽ#k �� #b������˹#k��3�����ܣ�");
            } else if (cm.getJob() == 121) {
                cm.changeJob(122);
                cm.sendNext("#r" + cm.getVipname() + "  #k ��ϲ���Ѿ������  ���Ĵ�תְ  ��\r\n�������Ѿ���һ�� #b��ʿ#k.\r\n�㽫ѧ�� #bͻ��#k  #b����̩ɽ#k �� #b������˹#k��3�����ܣ�");
            } else if (cm.getJob() == 131) {
                cm.changeJob(132);
                cm.sendNext("#r" + cm.getVipname() + "  #k ��ϲ���Ѿ������  ���Ĵ�תְ  ��\r\n�������Ѿ���һ�� #b����ʿ#k.\r\n�㽫ѧ�� #bͻ��#k  #b����̩ɽ#k �� #b������˹#k  ��3�����ܣ�.");
            } else {
                cm.gainItem(4031348, -1);
                cm.changeJob(2112);
                if (cm.canHold(1142132, 1)) {
                    cm.forceCompleteQuest(29927);
                    cm.gainItem(1142132, 1); //temp fix
                }
                cm.sendNext("#r" + cm.getVipname() + "  #k ��ϲ���Ѿ������  ���Ĵ�תְ  ��\r\n�������Ѿ���һ�� #bս��#k.\r\n�㽫ѧ�� #bͻ��#k  #b����̩ɽ#k �� #b������˹#k  ��3�����ܣ�");
            }
        }
    } else if (status == 2) {
        cm.sendNextPrev("#r" + cm.getVipname() + "  #k ������,�����һ�ж�ȡ�����㣡.");
        cm.dispose();
    }
}










*/