/* Dark Lord
	Thief Job Advancement
	Victoria Road : Thieves' Hideout (103000003)

	Custom Quest 100009, 100011
*/



var status = 0;

var jobs = 400;
var job1 = 0;
var job2 = 0;
var job3 = 0;
var texts = " ";
var item0 = 4005003;

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
            if (cm.getPlayer().getReborns() == 0) {
            cm.resetStats(4, 4, 4, 35);
            }
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
         cm.sendSimple(texts + "#r" + cm.getVipname() + " #d  ��ѡ������Ҫת��ְҵ��#b\r\n#L" + job1 +"#" + cm.getJobNameById(job1) + "#l\r\n#L" + job2 +"#" + cm.getJobNameById(job2) + "#l#k");

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
        cm.sendOk("�¶����ĺ�,��������...");
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        if (cm.getJob() >= 400 && cm.getJob() <= 434 && cm.getQuestStatus(2351) == 1) {
            cm.forceCompleteQuest(2351);
            cm.gainItem(1032076, 1); //owl earring
        }
        if (cm.getJob() == 0) {
            if (cm.getPlayerStat("LVL") >= 10 && cm.getJob() == 0) {
                cm.sendNext("���뵱�����𣿵�Ҫ��������������˭���ܲμ����ǵ���֯��Ӧ����#b�ȼ�10����#k���ˡ���һ�°ɡ�");
            } else {
                cm.sendOk("�ţ��㻹��С���Ӱɣ��㻹̫С�����ܸ�����һ���������������Ȥ����ȥ���������ɡ�")
                cm.dispose();
            }
        } else {
            if (cm.getPlayerStat("LVL") >= 30 && cm.getJob() == 400 && cm.getPlayer().getSubcategory() == 0) {
                if (cm.getQuestStatus(100009) >= 1) {
                    cm.completeQuest(100011);
                    if (cm.getQuestStatus(100011) == 2) {
                        status = 20;
                        cm.sendNext("I see you have done well. I will allow you to take the next step on your long road.");
                    } else {
                        if (!cm.haveItem(4031011)) {
                            cm.gainItem(4031011, 1);
                        }
                        cm.sendOk("Go and see the #rJob Instructor#k.")
                        cm.dispose();
                    }
                } else {
                    status = 10;
                    cm.sendNext("#r"+ cm.getVipname() + " #b�������Ѿ��ﵽ��30����#k\r\n���Խ��� #r�ڶ���תְ#k ��! ��׼����û��");
                }
            } else if (cm.getQuestStatus(100100) == 1) {
                cm.completeQuest(100101);
                if (cm.getQuestStatus(100101) == 2) {
                    cm.sendOk("Alright, now take this to #bArec#k.");
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
    } else if (status == 1) {
        cm.sendNextPrev("����һ������Ҫ��ѡ��ѡ���˳�Ϊһ�� #r����#k ���㽫������ѡ��������ְҵ�������ؿ��ǣ�");
    } else if (status == 2) {
        cm.sendYesNo("����Ҫ��Ϊһ�� #r����#k ô?");
    } else if (status == 3) {
        if (cm.getJob() == 0) {
            cm.resetStats(4, 25, 4, 4);
            cm.expandInventory(1, 4);
            cm.expandInventory(4, 4);
            cm.changeJob(400); // THIEF
            if (cm.getQuestStatus(2351) == 1) {
                cm.forceCompleteQuest(2351);
                cm.gainItem(1032076, 1); //owl earring
            }
        }
        cm.gainItem(1332063, 1);
        cm.gainItem(1472000, 1);
        cm.gainItem(2070015, 500);
        cm.sendOk("��ϲ�㣡�������Ѿ���һ�� #r" + cm.getJobNameById(cm.getJob()) + "#k �ˣ�Ŭ�������ɣ�����һ������ǿ��");
        cm.dispose();
    } else if (status == 21) {
        cm.sendNextPrev("���Ѿ�׼���ó�Ϊ #rǹսʿ#k �� #r׼��ʿ#k ��ô��")
    } else if (status == 22) {
        cm.askAcceptDecline("���������ұ���������ļ��ܡ���׼������?");
    } else if (status == 23) {
      //  cm.gainItem(4031008, 1);
       // cm.startQuest(100003);
        cm.sendOk("ȥ�ҵ� #bJob Instructor#k �� Perion. ���������·.");
        cm.dispose();
    } else if (status == 11) {
        cm.sendSimple("����ҪתְΪʲôְҵ?#b\r\n#L0#�̿�#l\r\n#L1#����#l#k");
    } else if (status == 12) {
        var jobName;
        if (selection == 0) {
            jobName = "�̿�";
            job = 410; // �̿�
        } else {
            jobName = "����";
            job = 420; // ����
        }
        cm.sendYesNo("����Ҫ��Ϊһ�� #r" + jobName + "#k?");
    } else if (status == 13) {
        cm.changeJob(job);
        //cm.gainItem(4031012, -1);
        cm.sendOk("��ϲ�㣡�������Ѿ���һ�� #r" + cm.getJobNameById(cm.getJob()) + "#k �ˣ�Ŭ�������ɣ�����һ������ǿ��");
        cm.dispose();
    }
}






*/