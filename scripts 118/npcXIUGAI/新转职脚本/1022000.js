/* Dances with Balrog
	Warrior Job Advancement
	Victoria Road : Warriors' Sanctuary (102000003)

	Custom Quest 100003, 100005
*/


var status = 0;

var jobs = 100;
var newjob;
var job1 = 0;
var job2 = 0;
var job3 = 0;
var texts = " ";
var item0 = 4005000;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0 && status == 2) {
        cm.sendOk("#r" + cm.getVipname() + " #b�¶�����,��������!");
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {

             texts = "#r ���������T��#i" + item0 + "##r   #e" + cm.getJobNameById(jobs) + "֮·#n   #i" + item0 + "##r��T�������� \r\n\r\n";
         job1 = jobs + 10;
         job2 = jobs + 20;
         job3 = jobs + 30;

        if (cm.getJob() == 0) {
            if (cm.getPlayerStat("LVL") >= 10 && cm.getJob() == 0) {
                cm.sendNext(texts + "#r" + cm.getVipname() + " #b  �����Ҫ��Ϊһ��  #r" + cm.getJobNameById(jobs) + "#k ?\r\n#b�����׼������������һ����");
            } else {
                cm.sendOk("#r" + cm.getVipname() + " #b  ����㻹��һ�� #r����#k !\r\n#k�ҿ��԰������Ϊһ��  #r" + cm.getJobNameById(jobs) + ".");
                cm.dispose();
            }
        } else {
            if (cm.getPlayerStat("LVL") >= 30 && cm.getJob() == jobs) { 

                        cm.sendNext(texts + "#r" + cm.getVipname() + " #k ��ϲ��ﵽ�� #r30��#k��\r\n��������Խ���  #r�ڶ���תְ#k  ��.\r\n#b�����׼������������һ����");
                        status = 20;
            } else {
              cm.sendOk("#r" + cm.getVipname() + " #b  ���ѡ�������ǵģ�");
              cm.dispose();
                  }
                }


    } else if (status == 1) {
        cm.sendYesNo(texts + "ѡ���˳�Ϊһ��  #r" + cm.getJobNameById(jobs) + " #k ���㽫������ѡ��������ְҵ��\r\n#b�����ؿ��ǣ�\r\n#b���Ƿ�׼���ó�Ϊһ�� #r" + cm.getJobNameById(jobs) + " #b ��");

    } else if (status == 2) {
        if (cm.getJob() == 0) {
            cm.resetStats(35, 4, 4, 4);
            cm.expandInventory(1, 4);
            cm.expandInventory(4, 4);
            cm.changeJob(jobs);
        }

        cm.sendOk(texts + "��ϲ�㣡�������Ѿ���һ�� #r" + cm.getJobNameById(cm.getJob()) + "#k �ˣ�Ŭ�������ɣ�����һ������ǿ��\r\n�ڶ���תְ���� #r30�� #k��\r\n#r��ʱ���������Ұ�");
        cm.dispose();
    } else if (status == 21) {
      // if (job3 < (jobs + 30)) {
      //   job1 = jobs + 10;
      //   job2 = jobs + 20;
    //     job3 = jobs + 30;
  //      }
         cm.sendSimple(texts + "#r" + cm.getVipname() + " #d  ��ѡ������Ҫת��ְҵ��#b\r\n#L" + job1 +"#" + cm.getJobNameById(job1) + "#l\r\n#L" + job2 +"#" + cm.getJobNameById(job2) + "#l\r\n#L" + job3 +"#" + cm.getJobNameById(job3) + "#l#k");

    } else if (status == 22) {

        jobs = selection;
        cm.sendYesNo(texts + "���Ƿ�Ҫѡ���˳�Ϊһ��  #r" + cm.getJobNameById(jobs) + "  ��\r\n#rѡ����޷����ģ������ؿ��ǣ�");
    } else if (status == 23) {
        cm.changeJob(jobs);
        cm.sendOk(texts + "��ϲ�㣡�������Ѿ���һ�� #r" + cm.getJobNameById(cm.getJob()) + "#k �ˣ�Ŭ�������ɣ�����һ������ǿ��\r\n������תְ���� #r70�� #k��\r\n#r��ʱ������ѩ�� �� ���Ϲ��� ȥ�ҵ���Ӧ�ĳ��ϰɣ�");
        cm.dispose();


    }

}











/*







var status = 0;
var job;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0 && status == 2) {
        cm.sendOk("�¶����ĺ�,��������.");
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        if (cm.getJob() == 0) {
            if (cm.getPlayerStat("LVL") >= 10 && cm.getJob() == 0) {
                cm.sendNext("�����Ҫ��Ϊһ�� #rսʿ#k ?");
            } else {
                cm.sendOk("����㻹��һ������,�ҿ��԰������Ϊһ�� #rսʿ#k.");
                cm.dispose();
            }
        } else {
            if (cm.getPlayerStat("LVL") >= 30 && cm.getJob() == 100) { // WARROPR
                if (cm.getQuestStatus(100003) >= 1) {
                    cm.completeQuest(100005);
                    if (cm.getQuestStatus(100005) == 2) {
                        status = 20;
                        cm.sendNext("�������Ѿ��ﵽ��30����\r\n����Խ���#r�ڶ���תְ#k��.");
                    } else {
                        if (!cm.haveItem(4031008)) {
                            cm.gainItem(4031008, 1);
                        }
	    cm.completeQuest(100004);
	    cm.startQuest(100005);
                       // status = 20;
                        cm.sendOk("ȥ�ҵ� #rJob Instructor#k.")
                        cm.dispose();
                    }
                } else {
                    status = 10;
                    cm.sendNext("#r"+ cm.getVipname() + " #b�������Ѿ��ﵽ��30����#k\r\n���Խ��� #r�ڶ���תְ#k ��! ��׼����û��");
                }
            } else if (cm.getQuestStatus(100100) == 1) {
                cm.completeQuest(100101);
                if (cm.getQuestStatus(100101) == 2) {
                    cm.sendOk("����,����������� #bTylus#k.");
                } else {
                    cm.sendOk("Hey, #b#h0##k! I need a #bBlack Charm#k. ȥ���ŵĳߴ�.");
                    cm.startQuest(100101);
                }
                cm.dispose();
            } else {
                cm.sendOk("���ѡ�����ȷ.");
                cm.dispose();
            }
        }
    } else if (status == 1) {
        cm.sendNextPrev("����һ������Ҫ��ѡ��ѡ���˳�Ϊһ�� #rսʿ#k ���㽫������ѡ��������ְҵ�������ؿ��ǣ�");
    } else if (status == 2) {
        cm.sendYesNo("����Ҫ��Ϊһ�� #rսʿ#k ô?");
    } else if (status == 3) {
        if (cm.getJob() == 0) {
            cm.resetStats(35, 4, 4, 4);
            cm.expandInventory(1, 4);
            cm.expandInventory(4, 4);
            cm.changeJob(100); // WARRIOR
        }
        cm.gainItem(1402001, 1);
        cm.sendOk("��ϲ�㣡�������Ѿ���һ�� #r" + cm.getJobNameById(cm.getJob()) + "#k �ˣ�Ŭ�������ɣ�����һ������ǿ��");
        cm.dispose();
    } else if (status == 21) {
        cm.sendNextPrev("���Ѿ�׼���ó�Ϊ #rǹսʿ#k, #r����#k �� #r׼��ʿ#k ��ô��")
    } else if (status == 22) {
        cm.askAcceptDecline("���������ұ���������ļ��ܡ���׼������?");
    } else if (status == 23) {
      //  cm.gainItem(4031008, 1);
       // cm.startQuest(100003);
        cm.sendOk("ȥ�ҵ� #bJob Instructor#k �� Perion. ���������·.");
        cm.dispose();
    } else if (status == 11) {
        cm.sendSimple("����ҪתְΪʲôְҵ?#b\r\n#L0#����#l\r\n#L1#׼��ʿ#l\r\n#L2#ǹսʿ#l#k");
    } else if (status == 12) {
        var jobName;
        if (selection == 0) {
            jobName = "����";
            job = 110; // FIGHTER
        } else if (selection == 1) {
            jobName = "׼��ʿ";
            job = 120; // PAGE
        } else {
            jobName = "ǹսʿ";
            job = 130; // SPEARMAN
        }
        cm.sendYesNo("����Ҫ��Ϊһ�� #r" + jobName + "#k?");
    } else if (status == 13) {
        cm.changeJob(job);
       // cm.gainItem(4031012, -1);
        cm.sendOk("��ϲ�㣡�������Ѿ���һ�� #r" + cm.getJobNameById(cm.getJob()) + "#k �ˣ�Ŭ�������ɣ�����һ������ǿ��");
        cm.dispose();
    }
}








*/