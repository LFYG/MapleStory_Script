

var status = 0;

var jobs = 430;
var newjob;
var job1 = 0;
var job2 = 0;
var job3 = 0;
var job4 = 0;
var texts = " ";
var item0 = 4005003;
var lvs;
var newjob;

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

             texts = "#r ���������T��#i" + item0 + "##r  #e" + cm.getJobNameById(jobs) + "֮·#n  #i" + item0 + "##r��T�������� \r\n\r\n";
         job1 = jobs + 1;
         job2 = jobs + 2;
         job3 = jobs + 3;
         job4 = jobs + 4;

         lvs = cm.getPlayerStat("LVL");

        if (cm.getJob() == 400) {
            if (cm.getPlayerStat("LVL") >= 20 && cm.getJob() == 400) {
                cm.sendNext(texts + "#r" + cm.getVipname() + " #b  �����Ҫ��Ϊһ��  #r" + cm.getJobNameById(jobs) + "#k ?\r\n#b�����׼������������һ����");
            } else {
                cm.sendOk("#r" + cm.getVipname() + " #b  ����㻹��һ�� #r����#k !\r\n#k�ҿ��԰������Ϊһ�� #r" + cm.getJobNameById(jobs) + "��#rתְ��Ϊ " + cm.getJobNameById(jobs) + " \r\n");
                cm.dispose();
            }
        } else {
            if (cm.getPlayerStat("LVL") >= 30 && cm.getJob() == jobs) { 

                        cm.sendNext(texts + "#r" + cm.getVipname() + " #k ��ϲ��ﵽ�� #r " + lvs + " ��#k��\r\n��������Խ��� #r�ڶ���תְ#k �ˣ�\r\n\r\n#L" + job1 + "##rתְ��Ϊ " + cm.getJobNameById(job1) + "#l \r\n\r\n");
                        status = 20;

           } else if (cm.getPlayerStat("LVL") >= 55 && cm.getJob() == job1) { 

                        cm.sendNext(texts + "#r" + cm.getVipname() + " #k ��ϲ��ﵽ�� #r " + lvs + " ��#k��\r\n��������Խ��� #r�� 2+ ��תְ#k �ˣ�\r\n\r\n#L" + job2 + "##rתְ��Ϊ " + cm.getJobNameById(job2) + "#l \r\n\r\n");
                        status = 22;


           } else if (cm.getPlayerStat("LVL") >= 70 && cm.getJob() == job2) { 

                        cm.sendNext(texts + "#r" + cm.getVipname() + " #k ��ϲ��ﵽ�� #r " + lvs + " ��#k��\r\n��������Խ��� #r�� 3 ��תְ#k �ˣ�\r\n\r\n#L" + job3 + "##rתְ��Ϊ " + cm.getJobNameById(job3) + "#l \r\n\r\n");
                        status = 24;

           } else if (cm.getPlayerStat("LVL") >= 120 && cm.getJob() == job3) { 

                        cm.sendNext(texts + "#r" + cm.getVipname() + " #k ��ϲ��ﵽ�� #r " + lvs + " ��#k��\r\n��������Խ��� #r�� 4 ��תְ#k �ˣ�\r\n\r\n#L" + job4 + "##rתְ��Ϊ " + cm.getJobNameById(job4) + "#l \r\n\r\n");
                        status = 26;



            } else {

              cm.sendOk("#r" + cm.getVipname() + " #b  ���ѡ�������ǵģ�");
              cm.dispose();

                  }

                }





    } else if (status == 1) {
        cm.sendYesNo(texts + "ѡ���˳�Ϊһ��#r" + cm.getJobNameById(jobs) + " #k ���㽫������ѡ��������ְҵ��\r\n#b�����ؿ��ǣ�\r\n#b���Ƿ�׼���ó�Ϊһ�� #r" + cm.getJobNameById(jobs) + " #b ��");

    } else if (status == 2) {

        if (cm.getJob() == 400) {
      //      cm.resetStats(4, 4, 4, 35);
            cm.expandInventory(1, 4);
            cm.expandInventory(4, 4);
            cm.changeJob(jobs);
        }

        cm.sendOk(texts + "��ϲ�㣡�������Ѿ���һ�� #r" + cm.getJobNameById(cm.getJob()) + "#k �ˣ�Ŭ�������ɣ�����һ������ǿ��\r\n�ڶ���תְ���� #r30�� #k��\r\n#r��ʱ���������Ұ�");
        cm.dispose();

    } else if (status == 21) {

/*
      // if (job3 < (jobs + 30)) {
      //   job1 = jobs + 10;
      //   job2 = jobs + 20;
    //     job3 = jobs + 30;
  //      }

         cm.sendSimple(texts + "#r" + cm.getVipname() + " #d  ��ѡ������Ҫת��ְҵ��#b\r\n#L" + job1 +"#" + cm.getJobNameById(job1) + "#l\r\n");

    } else if (status == 22) {

*/

        newjob = selection;
        cm.sendYesNo(texts + "���Ƿ�Ҫѡ���˳�Ϊһ��  #r" + cm.getJobNameById(jobs) + "  ��\r\n#rѡ����޷����ģ������ؿ��ǣ�");

    } else if (status == 22) {

        cm.changeJob(newjob);

        cm.sendOk(texts + "��ϲ�㣡�������Ѿ���һ�� #r" + cm.getJobNameById(cm.getJob()) + "#k �ˣ�Ŭ�������ɣ�����һ������ǿ��\r\n�� 2+ ��תְ���� #r50�� #k��\r\n#r��ʱ�����������Ұɣ�");
        cm.dispose();


    } else if (status == 23) {

        newjob = selection;
        cm.sendYesNo(texts + "���Ƿ�Ҫѡ���˳�Ϊһ��  #r" + cm.getJobNameById(jobs) + "  ��\r\n#rѡ����޷����ģ������ؿ��ǣ�");

    } else if (status == 24) {

        cm.changeJob(newjob);

        cm.sendOk(texts + "��ϲ�㣡�������Ѿ���һ�� #r" + cm.getJobNameById(cm.getJob()) + "#k �ˣ�Ŭ�������ɣ�����һ������ǿ��\r\n�� 3 ��תְ���� #r70�� #k��\r\n#r��ʱ�����������Ұɣ�");
        cm.dispose();


    } else if (status == 25) {

        newjob = selection;
        cm.sendYesNo(texts + "���Ƿ�Ҫѡ���˳�Ϊһ��  #r" + cm.getJobNameById(jobs) + "  ��\r\n#rѡ����޷����ģ������ؿ��ǣ�");

    } else if (status == 26) {

        cm.changeJob(newjob);

        cm.sendOk(texts + "��ϲ�㣡�������Ѿ���һ�� #r" + cm.getJobNameById(cm.getJob()) + "#k �ˣ�Ŭ�������ɣ�����һ������ǿ��\r\n�� 4 ��תְ���� #r120�� #k��\r\n#r��ʱ�����������Ұɣ�");
        cm.dispose();

    } else if (status == 27) {

        newjob = selection;
        cm.sendYesNo(texts + "���Ƿ�Ҫѡ���˳�Ϊһ��  #r" + cm.getJobNameById(jobs) + "  ��\r\n#rѡ����޷����ģ������ؿ��ǣ�");

    } else if (status == 28) {

        cm.changeJob(newjob);

        cm.sendOk(texts + "��ϲ�㣡�������Ѿ���һ�� #r" + cm.getJobNameById(cm.getJob()) + "#k �ˣ�Ŭ�������ɣ�����һ������ǿ��\r\n#e#r<ʱ��Ů��>���� #n �ڵ����㣡��");
        cm.dispose();


     }




}




