var status = 0;

var jobs = 3500;
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

             texts = "#r �����T��#i" + item0 + "##r   #e" + cm.getJobNameById(jobs) + "֮·#n   #i" + item0 + "##r��T������\r\n\r\n";


         job1 = jobs + 10;

         job2 = jobs + 11;
         job3 = jobs + 12;


        if (cm.getJob() == 3000) {
            if (cm.getPlayerStat("LVL") >= 10 && cm.getJob() == 3000) {
                cm.sendNext(texts + "#r" + cm.getVipname() + " #b  �����Ҫ��Ϊһ��  #r" + cm.getJobNameById(jobs) + "#k ?\r\n#b�����׼������������һ����");
            } else {
                cm.sendOk("#r" + cm.getVipname() + " #b  ����㻹��һ�� #rԤ����#k !\r\n#k�ҿ��԰������Ϊһ��  #r" + cm.getJobNameById(jobs) + ".");
                cm.dispose();
            }

        } else {

            if (cm.getPlayerStat("LVL") >= 30 && cm.getJob() == jobs) { 

             texts = "#r �����T��#i" + item0 + "##r   #e" + cm.getJobNameById(job1) + "֮·#n   #i" + item0 + "##r��T������\r\n\r\n";


                        cm.sendNext(texts + "#r" + cm.getVipname() + " #k ��ϲ��ﵽ�� #r30��#k��\r\n��������Խ���  #r�ڶ���תְ#k  ��Ϊһ��   #r" + cm.getJobNameById(job1) + " #k.\r\n#b�����׼������������һ����");
                        status = 20;


            } else if (cm.getPlayerStat("LVL") >= 70 && cm.getJob() == job1) { 

             texts = "#r �����T��#i" + item0 + "##r   #e" + cm.getJobNameById(job2) + "֮·#n   #i" + item0 + "##r��T������\r\n\r\n";

                        cm.sendNext(texts + "#r" + cm.getVipname() + " #k ��ϲ��ﵽ�� #r30��#k��\r\n��������Խ���  #r�ڶ���תְ#k  ��Ϊһ��   #r" + cm.getJobNameById(job2) + " #k.\r\n#b�����׼������������һ����");
                        status = 24;


            } else if (cm.getPlayerStat("LVL") >= 120 && cm.getJob() == job2) { 

             texts = "#r �����T��#i" + item0 + "##r   #e" + cm.getJobNameById(job3) + "֮·#n   #i" + item0 + "##r��T������\r\n\r\n";

                        cm.sendNext(texts + "#r" + cm.getVipname() + " #k ��ϲ��ﵽ�� #r30��#k��\r\n��������Խ���  #r�ڶ���תְ#k  ��Ϊһ��   #r" + cm.getJobNameById(job3) + " #k.\r\n#b�����׼������������һ����");
                        status = 30;



            } else {
              cm.sendOk("#r" + cm.getVipname() + " #b  ���ѡ�������ǵģ�");
              cm.dispose();
                  }
                }


    } else if (status == 1) {
        cm.sendYesNo(texts + "ѡ���˳�Ϊһ��  #r" + cm.getJobNameById(jobs) + " #k ���㽫������ѡ��������ְҵ��\r\n#b�����ؿ��ǣ�\r\n#b���Ƿ�׼���ó�Ϊһ�� #r" + cm.getJobNameById(jobs) + " #b ��");

    } else if (status == 2) {
        if (cm.getJob() == 3000) {

            if (cm.getPlayer().getReborns() == 0) {
            cm.resetStats(4, 4, 35, 4);

             }
            cm.expandInventory(1, 4);
            cm.expandInventory(4, 4);
            

            cm.changeJob(jobs);
        }

        cm.sendOk(texts + "��ϲ�㣡�������Ѿ���һ�� #r" + cm.getJobNameById(cm.getJob()) + "#k �ˣ�Ŭ�������ɣ�����һ������ǿ��\r\n�ڶ���תְ���� #r30�� #k��\r\n#r��ʱ���������Ұ�");
        cm.dispose();


    } else if (status == 21) {


        cm.changeJob(job1);
        cm.sendOk(texts + "��ϲ�㣡�������Ѿ���һ�� #r" + cm.getJobNameById(cm.getJob()) + "#k �ˣ�Ŭ�������ɣ�����һ������ǿ��\r\n������תְ���� #r70�� #k��\r\n#r��ʱ�����������Ұɣ�\r\n#r#e\r\nңԶ�ļ����Ƿ��ܻ������أ���ʮ��ǰ����ͬ���������ںη���");
        cm.dispose();

    



    } else if (status == 25) {

        cm.changeJob(job2);
        cm.sendOk(texts + "��ϲ�㣡�������Ѿ���һ�� #r" + cm.getJobNameById(cm.getJob()) + "#k �ˣ�Ŭ�������ɣ�����һ������ǿ��\r\n������תְ���� #r120�� #k��\r\n#r��ʱ�����������Ұɣ�\r\n#r#e\r\nңԶ�ļ����Ƿ��ܻ������أ���ʮ��ǰ����ͬ���������ںη���");
        cm.dispose();

    


    } else if (status == 31) {

        cm.changeJob(job3);
        cm.sendOk(texts + "��ϲ�㣡�������Ѿ���һ�� #r" + cm.getJobNameById(cm.getJob()) + "#k �ˣ�Ŭ�������ɣ�����һ������ǿ��\r\n\r\n#d��˵����� #e#r<ʱ��Ů��>����#n#d ����ʱ�������������㣡200����ȥ�����ɣ�\r\n#r����� #e��������#n \r\n#r#e\r\nңԶ�ļ����Ƿ��ܻ������أ���ʮ��ǰ����ͬ���������ںη���");
        cm.dispose();

    }



}


/*
var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
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
            cm.sendSimple("ʲô���飿\r\n\r\n#b#L0#�����Ի���#l");
        } else if (status == 1) {
            cm.sendNext("�������Ҽ������������");
            cm.dispose();
        }
    }
}

*/