/* Grendel the Really Old
	Magician Job Advancement
	Victoria Road : Magic Library (101000003)

	Custom Quest 100006, 100008, 100100, 100101
*/




var status = 0;

var jobs = 200;
var newjob;
var job1;
var job2;
var job3;

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

        if (cm.getJob() == 0) {
            if (cm.getPlayerStat("LVL") >= 10 && cm.getJob() == 0) {
                cm.sendNext("#r" + cm.getVipname() + " #b  �����Ҫ��Ϊһ��  #r" + cm.getJobNameById(jobs) + "#k ?");
            } else {
                cm.sendOk("#r" + cm.getVipname() + " #b  ����㻹��һ�� #r����#k !\r\n#k�ҿ��԰������Ϊһ��  #r" + cm.getJobNameById(jobs) + ".");
                cm.dispose();
            }
        } else {
            if (cm.getPlayerStat("LVL") >= 30 && cm.getJob() == jobs) { 

                        cm.sendNext("#r" + cm.getVipname() + " #k ��ϲ��ﵽ�� #r30��#k��\r\n��������Խ���  #r�ڶ���תְ#k  ��.");
                        status = 20;
            } else {
              cm.sendOk("#r" + cm.getVipname() + " #b  ���ѡ�������ǵģ�");
              cm.dispose();
                  }
                }


    } else if (status == 1) {
        cm.sendYesNo("ѡ���˳�Ϊһ��  #r" + cm.getJobNameById(jobs) + " #k ���㽫������ѡ��������ְҵ�������ؿ��ǣ�\r\n#b���Ƿ�׼���ó�Ϊһ�� #r" + cm.getJobNameById(jobs) + " #b ��");

    } else if (status == 2) {
        if (cm.getJob() == 0) {
            cm.resetStats(35, 4, 4, 4);
            cm.expandInventory(1, 4);
            cm.expandInventory(4, 4);
            cm.changeJob(jobs);
        }

        cm.sendOk("��ϲ�㣡�������Ѿ���һ�� #r" + cm.getJobNameById(cm.getJob()) + "#k �ˣ�Ŭ�������ɣ�����һ������ǿ��\r\n�ڶ���תְ���� #r30�� #k��\r\n#r��ʱ���������Ұ�");
        cm.dispose();
    } else if (status == 21) {
         job1 = jobs + 10;
         job2 = jobs + 20;
         job3 = jobs + 30;
         cm.sendSimple("#r" + cm.getVipname() + " #d  ��ѡ������Ҫת��ְҵ��#b\r\n#L" + job1 +"#" + cm.getJobNameById(job1) + "#l\r\n#L" + job2 +"#" + cm.getJobNameById(job2) + "#l\r\n#L" + job3 +"#" + cm.getJobNameById(job3) + "#l#k");

    } else if (status == 22) {

        jobs = selection;
        cm.sendYesNo("���Ƿ�Ҫѡ���˳�Ϊһ��  #r" + cm.getJobNameById(jobs) + " #k ��\r\n#rѡ����޷����ģ������ؿ��ǣ�");
    } else if (status == 23) {
        cm.changeJob(jobs);
        cm.sendOk("��ϲ�㣡�������Ѿ���һ�� #r" + cm.getJobNameById(cm.getJob()) + "#k �ˣ�Ŭ�������ɣ�����һ������ǿ��\r\n������תְ���� #r70�� #k��\r\n#r��ʱ������ѩ�� �� ���Ϲ��� ȥ�ҵ���Ӧ�ĳ��ϰɣ�");
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
        cm.sendOk("Make up your mind and visit me again.");
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
            if (cm.getPlayerStat("LVL") >= 8) {
                cm.sendNext("#r" + cm.getVipname() + " #d����Ҫ��Ϊһ�� #rħ��ʦ#k  ô?");
            } else {
                cm.sendOk("#r" + cm.getVipname() + " #d ����ǻ۽�ָ�����Ϊһ�� #rħ��ʦ#k  ��\r\n����ﵽ8���Ժ��������Ұɣ�.")
                cm.dispose();
            }
        } else {
            if (cm.getPlayerStat("LVL") >= 30 && cm.getJob() == 200) { // MAGICIAN
                cm.sendNext("#r" + cm.getVipname() + " #k �������Ѿ��ﵽ�� #r30��#k ����!\r\n#b���Խ��еڶ���תְ�ˣ�\r\n#d�����׼�������������");
                status = 20;
               } else {
                    cm.sendOk("#r" + cm.getVipname() + " #k �������Ѿ������ �ڶ���תְ��\r\n#r������תְ���� 70�� ��\r\n#d���Ͱɣ�Ҫ�ǲ����� ����  #rתְ��#d  ���� ��\r\n#b����ָ����תְ��.");
                    cm.dispose();
                }
             
*/

/*
                if (cm.getQuestStatus(100006) >= 1) {
                    cm.completeQuest(100008);
                    if (cm.getQuestStatus(100008) == 2) {
                        status = 20;
                        cm.sendNext("I see you have done well. I will allow you to take the next step on your long road.");
                    } else {
                        if (!cm.haveItem(4031009)) {
                            cm.gainItem(4031009, 1);
                        }
                        cm.sendOk("Go and see the #rJob Instructor#k.")
                        cm.dispose();
                    }
                } else {
                    status = 10;
                    cm.sendNext("The progress you have made is astonishing.");
                }


            } else if (cm.getQuestStatus(100100) == 1) {
                cm.completeQuest(100101);
                if (cm.getQuestStatus(100101) == 2) {
                    cm.sendOk("Alright, now take this to #bRobeira#k.");
                } else {
                    cm.sendOk("Hey, #b#h0##k! I need a #bBlack Charm#k. Go and find the Door of Dimension.");
                    cm.startQuest(100101);
                }
                cm.dispose();
            } else {
                cm.sendOk("You have chosen wisely.");
                cm.dispose();
            }
        }

*/


/*

       }


    } else if (status == 1) {
        cm.sendYesNo("#r" + cm.getVipname() + " #d ����һ������Ҫ�ľ�����\r\n#b����ѡ����ħ��ʦ���ְҵ���޷���ѡ������ְҵ��\r\n#r�㻹Ҫ����ô��");
 //   } else if (status == 2) {
 //       cm.sendYesNo("Do you want to become a #rMagician#k?");
    } else if (status == 2) {
        if (cm.getJob() == 0) {
            cm.resetStats(4, 4, 20, 4);
            cm.expandInventory(1, 4);
            cm.expandInventory(4, 4);
            cm.changeJob(200); // MAGICIAN
        }
        cm.gainItem(1372005, 1);
        cm.sendOk("��ϲ�������Ѿ���Ϊ��һ�� #rħ��ʦ#k ��\r\n#b���Ͱɣ����·���ܳ��ܳ���.");
        cm.dispose();
    } else if (status == 11) {
        cm.sendNextPrev("You may be ready to take the next step as a #rFire/Poison Wizard#k, #rIce/Lightning Wizard#k or #rCleric#k.");
    } else if (status == 12) {
        cm.askAcceptDecline("But first I must test your skills. Are you ready?");
    } else if (status == 13) {
        cm.startQuest(100006);
        cm.gainItem(4031009, 1);
        cm.sendOk("Go see the #bJob Instructor#k near Ellinia. He will show you the way.");
        cm.dispose();
    } else if (status == 21) {
        cm.sendSimple("#r" + cm.getVipname() + " #d ����Ҫѡ����һ��ְҵ�أ�#b\r\n#L0#��ʦ���𣬶���#l\r\n#L1#��ʦ�������ף�#l\r\n#L2#��ʦ#k");
    } else if (status == 22) {
        var jobName;
        if (selection == 0) {
            jobName = "Fire/Poison Wizard";
            job = 210; // FP
        } else if (selection == 1) {
            jobName = "Ice/Lightning Wizard";
            job = 220; // IL
        } else {
            jobName = "Cleric";
            job = 230; // CLERIC
        }
        cm.sendYesNo("���Ƿ�Ҫ��Ϊһ��  #r" + cm.getJobNameById(job) + "#k ?");
    } else if (status == 23) {
        cm.changeJob(job);
      //  cm.gainItem(4031012, -1);
        cm.sendOk("�������Ѿ���һ��  #r" + cm.getJobNameById(job) + "#k�ˣ�  #b\r\n���Ͱɣ����·���ܳ���");
        cm.dispose();
    }
}






*/