var status = 0;

var mapid = 749050502;
var mapids = 0;
var jobid = 0;
var jobs = 0;
var lvs = 0;
var npcid = 9000086;
var fengye = 1;//���תְ����Ҫ��Ʒ����
var items = 4001126;//���תְ����Ҫ��Ʒ

var mapidms = 0;
var nowmapid = 0;

var vipname;
var topsn;

//var jobs = cm.getJob();
//var lvs = cm.getPlayer().getLevel();

var text0 = "#d��л����MapleWing��֧�֣�\r\n#b����Ϊ��������תְ�����ϵͳ��\r\n#k�����ﵽһ��רְ����תְʱ��������ͨ��  #rתְ�� #k ��ѡ��תְΪ�Լ�ϲ����ְҵ��\r\n#b����תְ����Ϊ��#r\r\n��   �ȼ�Ҫ��   ��#d\r\nð�ռ�  ������  ��ʿ��  ս��  Ҫ��Ϊ��  #b\r\nһת10��   ��ת30��   ��ת70��   ��ת120�� #r\r\n��   �ر�ע��   ��#k\r\n#e1. #n#r˫���� ������ ��ħ���� �ֵ���Ӱ #d��Ӣ��#k ְҵ����һ���ȼ�����Զ�תְ!\r\n#e2. #n#rð�ռ� ����#k תְΪ#r ħ��ʦ#k ֻ��Ҫ�ﵽ#r 8 ��#k �Ϳ��Խ���תְ��\r\n��Ӱ˫��һתΪ������20����ת��˫��ְҵȺ��\r\n��5ת��1+ת 20�� 2ת 30�� 2+ת 50�� 3ת 70�� 4ת 120�� ";//תְ��˵��

var text1 = "�������������ҵ� #bתְ�̹� ";

var text2 = "\r\n#k������ѡ������Ҫ�� #rתְ��ݷ��� #k��\r\n";

var text3 = "MapleWing3";
var text4 = "MapleWing4";
var text5 = "MapleWing5";
var text6 = "MapleWing6";
var text7 = "MapleWing7";
var text8 = "MapleWing8";
var text9 = "MapleWing9";

var noAdvance = "#r\r\nע�⣺��������Ľ�ɫ������ð�ռ�ֻ��תְ��ð�ռ����ְҵ����Ȼ���޷�������Ϸ��\r\n#k�����ڵĵȼ�������Ҫ #dתְ�򵼷��� #k������� #bð�ռ�#k ���� #b��ʿ�� #k�� #b������ #k�ﵽ#e#r ";

var advance = "Maplewing";//��һ���Ի�

var unable = "#r���Ѿ�������Ե�תְ��\r\n���Ͱɣ� #b<ʱ��Ů��>����  #k�ڵ����㣡";

//var unable = "�������Ѿ�ͨ����ȫ����תְ�ˣ����ð��������ô����������������ĵ��£�ЦЦ�͹��ˡ��Ժ��кܶ����������ȥ��ԡ�";

var noThanks = "#d\r\n#L1#�鿴תְ��˵��#l";
var check = "��ȷ�������Ϊһ�� ";
var congrats = "�����Ϊһ�� ";
var jobDir;
var status;
var newJob;
var newJobName;
var Sp;
var a=1;
var jobData = Array(
"����", 0, 0, 1022000, 
"սʿ", 100, 102000003, 1022000, 
"����", 110, 102000003, 1022000, 
"��ʿ", 111, 211000001, 2020008, 
"Ӣ��", 112, 240010501, 2081100, 
"׼��ʿ", 120, 102000003, 1022000, 
"��ʿ", 121, 102000003, 2020008, 
"ʥ��ʿ", 122, 240010501, 2081100, 
"ǹսʿ", 130, 102000003, 1022000, 
"����ʿ", 131, 211000001, 2020008, 
"����ʿ", 132, 240010501, 2081100, 
"ħ��ʦ", 200, 101000003, 1032001, 
"�𶾷�ʦ", 210, 101000003, 1032001, 
"����ʦ", 211, 211000001, 2020009, 
"��ħ��ʿ", 212, 240010501, 2081200, 
"���׷�ʦ", 220, 101000003, 1032001, 
"������ʦ", 221, 211000001, 2020009, 
"����ħ��ʿ", 222, 240010501, 2081200, 
"��ʦ", 230, 101000003, 1032001, 
"��˾", 231, 211000001, 2020009, 
"����", 232, 240010501, 2081200, 
"������", 300, 100000201, 1012100, 
"����", 310, 100000201, 1012100, 
"����", 311, 211000001, 2020010, 
"������", 312, 240010501, 2081300, 
"����", 320, 100000201, 1012100, 
"����", 321, 211000001, 2020010, 
"����", 322, 240010501, 2081300, 
"����", 400, 103000003, 1052001, 
"�̿�", 410, 103000003, 1052001, 
"��Ӱ��", 411, 211000001, 2020011, 
"��ʿ", 412, 240010501, 2081400, 
"����", 420, 103000003, 1052001, 
"���п�", 421, 211000001, 2020011, 
"����", 422, 240010501, 2081400, 
"��ϰ����", 430, 103050101, 1056000,
"˫����", 431, 103050101, 1056000,
"˫����", 432, 103050101, 1056000,
"Ѫ��", 433, 103050101, 1056000,
"��Ӱ˫��", 434, 103050101, 1056000,
"����", 509, 120000101, 1090000, 
"ȭ��", 580, 120000101, 1090000, 
"��ʿ", 581, 211000001, 2020013, 
"���ӳ�", 582, 240010501, 2081500, 
"��ǹ��", 590, 120000101, 1090000, 
"��", 591, 211000001, 2020013, 
"����", 592, 240010501, 2081500, 
"սͯ", 2000, 140000000, 1201002, 
"Ԥ����", 3000, 310010000, 2151003, 
"���鷨ʦ��һת��", 3200, 310010000, 2151001, 
"���鷨ʦ����ת��", 3210, 310010000, 2151001, 
"���鷨ʦ����ת��", 3211, 310010000, 2151001, 
"���鷨ʦ����ת��", 3212, 310010000, 2151001, 
"����������һת��", 3300, 310010000, 2151002, 
"������������ת��", 3310, 310010000, 2151002, 
"������������ת��", 3311, 310010000, 2151002, 
"������������ת��", 3312, 310010000, 2151002, 
"��еʦ��һת��", 3500, 310010000, 2151004, 
"��еʦ����ת��", 3510, 310010000, 2151004, 
"��еʦ����ת��", 3511, 310010000, 2151004, 
"��еʦ����ת��", 3512, 310010000, 2151004,
"������", 1000, 130000000, 
"����ʿ��һת��", 1100, 130000000, 1101003, 
"����ʿ����ת��", 1110, 130000000, 1101003, 
"����ʿ����ת��", 1111, 130000000, 1101003, 
"����ʿ��һת��", 1200, 130000000, 1101004, 
"����ʿ����ת��", 1210, 130000000, 1101004, 
"����ʿ����ת��", 1211, 130000000, 1101004, 
"����ʹ�ߣ�һת��", 1300, 130000000, 1101005, 
"����ʹ�ߣ���ת��", 1310, 130000000, 1101005, 
"����ʹ�ߣ���ת��", 1311, 130000000, 1101005, 
"ҹ���ߣ�һת��", 1400, 130000000, 1101006, 
"ҹ���ߣ���ת��", 1410, 130000000, 1101006, 
"ҹ���ߣ���ת��", 1411, 130000000, 1101006, 
"��Ϯ�ߣ�һת��", 1500, 130000000, 1101007, 
"��Ϯ�ߣ���ת��", 1510, 130000000, 1101007, 
"��Ϯ�ߣ���ת��", 1511, 130000000, 1101007
/*"��Ϸ����Ա", 800, 749050502, 2144000,
"��Ϸ����Ա", 900, 749050502, 2144000, 
"������Ϸ����Ա", 910, 749050502, 2144000, 
"��ħ����(һת) ", 3100,
"��ħ����(��ת) ", 3110,
"��ħ����(��ת) ", 3111,
"��ħ����(��ת) ", 3112,
"˫����(һת) ", 3200,
"˫����(��ת) ", 3210,
"˫����(��ת) ", 3211,
"˫����(��ת) ", 3212,
"ս��һת��", 2100, 130000000, 1201002, 
"ս�񣨶�ת��", 2110, 130000000, 1201002, 
"ս����ת��", 2111, 130000000, 1201002, 
"ս����ת��", 2112, 130000000, 1201002, 
"��ǹ��(һת) ", 520,
"��ǹ��(��ת) ", 530,
"��ǹ��(��ת) ", 531,
"��ǹ��(��ת) ", 532*/);

var first;
var sd;
var status = 0;
var job;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0 && status == 2) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
        if (status < 0){
	cm.dispose();
        }
    }

    if (status == 0) {

        nowmapid = cm.getPlayer().getMapId();
        vipname = cm.getVipname();
        jobs = cm.getJob();
        lvs = cm.getPlayer().getLevel();
        topsn = "#r ���������T��#i4251201##r   תְ��   #i4251201# #r��T�������� \r\n";

     advance = "#r ���������T��#i4251201##r   תְ��   #i4251201# #r��T�������� \r\n#r" + cm.getVipname() + " #k�����ڵ�ְҵ�� #r" + cm.getJobNameById(jobs) +"  \r\n#k��ϲ���ﵽ #e#r" + lvs + " #n#k��!\r\n��ѡ������Ҫ����һ�� #bתְ�򵼷��� #k��#b";   
    

     if ((cm.getJob() != 400) && (cm.getJob() != 430) && (cm.getJob() != 431) && (cm.getJob() != 432)) {

//˫������λ��

            if (cm.getJob() % 100 == 0) {

               noAdvance += cm.getJob() % 1000 == 0 ? "10#n#k ": "30#n#k ";

            } else {
               noAdvance += cm.getJob() % 10 == 0 ? "70": "120";
              noAdvance += " #n#k �� ����Ҫ #dתְ�򵼷���#k.";
            }

        } else if (cm.getPlayerStat("LVL") <= 20) {//�Ƿ�������һ��

              noAdvance = topsn + "#k�����ڵ�ְҵ�� #r" + cm.getJobNameById(jobs) + " \r\n#rע�⣺�����Ҫ�氵Ӱ˫�����������ڽ���ɫʱ��ѡ��Ӱ˫������תְ����Ȼ�޷���˫����������#b\r\n��Ӱ˫��ְҵȺҪ�� 20#n#k �� ������ְҵȺҪ��30�� ����Ҫ #dתְ�򵼷���#k \r\n.";

        } else if ((cm.getPlayerStat("LVL") < 70) && (cm.getJob() == 432)) {

             noAdvance = topsn + "#k�����ڵ�ְҵ�� #r" + cm.getJobNameById(jobs) + " \r\n��Ӱ˫��ְҵȺҪ�� 70#n#k ��  ����Ҫ #dתְ�򵼷���#k  ���е�3��תְ���˺� 4ת 120����.";


        } else if ((cm.getPlayerStat("LVL") < 120) && (cm.getJob() == 433)) {

             noAdvance = topsn + "#k�����ڵ�ְҵ�� #r" + cm.getJobNameById(jobs) + " \r\n��Ӱ˫��ְҵȺҪ�� 120#n#k ��  ����Ҫ #dתְ�򵼷���#k  ���е�4��תְ����";


        } else if ((cm.getPlayerStat("LVL") < 50) && (cm.getJob() == 431)) {

             noAdvance = topsn + "#k�����ڵ�ְҵ�� #r" + cm.getJobNameById(jobs) + " \r\n��Ӱ˫��ְҵȺҪ�� 55#n#k ��  ����Ҫ #dתְ�򵼷���#k  ���е�2+��תְ���˺�3ת70�� 4ת 120����.";

         }






    }


    if ((cm.getJob() % 10 == 2 && !cm.getJob() >= 435 && !cm.getJob() <= 436) || cm.getJob() == 900 || cm.getJob() == 910 || cm.getJob() == 800 || (cm.getJob() > 1000 && cm.getJob() < 1500 && cm.getJob() % 10 == 1)) {
        cm.sendOk(topsn + " " + vipname + "  " + unable);
        cm.dispose();
        return;
    } else {

        if (status == 0) {

            if (cm.getJob() % 1000 == 0 || cm.getJob() == 0 || cm.getJob() == 3000) {

                if ((cm.getPlayerStat("LVL") == 8 || cm.getPlayerStat("LVL") == 9) && cm.getJob() != 2000) {
                    for (var i = 0; i <= jobData.length; i++)
                    if (i % 4 == 0 && (jobData[i + 1] == (200 + cm.getJob()))) advance += "\r\n#b#L" + jobData[i + 1] + "#" + jobData[i] + "#l";

                   //������ħ��ʦ

                } else if (cm.getPlayerStat("LVL") >= 10) {
                    for (var i = 0; i <= jobData.length; i++)
                    if (i % 4 == 0) if ((jobData[i + 1] % 100 == 0) && (jobData[i + 1] > cm.getJob()) && (jobData[i + 1] < (600 + cm.getJob()))) advance += "\r\n#b#L" + jobData[i + 1] + "#" + jobData[i] + "#l";

/*
                   if (cm.getJob() == 3000) {  //Ԥ����

                   advance += "\r\n\r\n#dע�⣺Ԥ������"

                    for (var i = 0; i <= jobData.length; i++)
                    if (i % 4 == 0) 
                       if ((jobData[i + 1] - 3200 == 0) || (jobData[i + 1] - 3300 == 0) || (jobData[i + 1] - 3500 == 0)) 
                           advance += "\r\n#b#L" + jobData[i + 1] + "#" + jobData[i] + "#l";


                   }
*/

                   advance += "\r\n\r\n#dע�⣺��Ӱ˫��һתΪ��������Ӱ˫��2תΪ20����"


                } else if ((cm.getPlayerStat("LVL") >= 20) && (cm.job == 400)) {

               
                    for (var i = 0; i <= jobData.length; i++)
                    if ((i % 4 == 0) && (jobData[i + 1] - 430 == 0)) advance += "\r\n#b#L" + jobData[i + 1] + "#" + jobData[i] + "#l";

                     
                } else {

                    cm.sendOk("" + advance +  "\r\n" + noAdvance + " ��  ����Ҫ #dתְ�򵼷���#k. " + noThanks + "");
                    cm.dispose();
                    return;
                }

                first = true;

            } else if ((cm.getJob() % 100 == 0) || (cm.getJob() == 430) || (cm.getJob() == 431)) { 

//�ڶ���תְ


                 if ((cm.getPlayerStat("LVL") >= 30) && (cm.job == 430)) {//˫��2ת

                    for (var i = 0; i <= jobData.length; i++)
                    if ((i % 4 == 0) && (jobData[i + 1] - 431 == 0)) advance += "\r\n#b#L" + jobData[i + 1] + "#" + jobData[i] + "#l";

                  }


                if ((cm.getPlayerStat("LVL") >= 55) && (cm.job == 431)) {//˫��2+ת

                    for (var i = 0; i <= jobData.length; i++)
                    if ((i % 4 == 0) && (jobData[i + 1] - 432 == 0)) advance += "\r\n#b#L" + jobData[i + 1] + "#" + jobData[i] + "#l";

                  }



                if (cm.getPlayerStat("LVL") >= 30) {

                    for (var i = 0; i <= jobData.length; i++)
                    if ((i % 4 == 0 && (jobData[i + 1] % 10 == 0 && jobData[i + 1] % 100 != 0)) && (jobData[i + 1] > cm.getJob() && jobData[i + 1] <= (cm.getJob() + 40))) advance += "\r\n#b#L" + jobData[i + 1] + "#" + jobData[i] + "#l";


           } else if ((cm.getPlayerStat("LVL") >= 30) && (cm.job == 430)) {

                    for (var i = 0; i <= jobData.length; i++)
                    if ((i % 4 == 0) && (jobData[i + 1] - 431 == 0)) advance += "\r\n#b#L" + jobData[i + 1] + "#" + jobData[i] + "#l";


            } else if ((cm.getPlayerStat("LVL") >= 20) && (cm.job == 400)) {

                    for (var i = 0; i <= jobData.length; i++)
                    if ((i % 4 == 0) && (jobData[i + 1] - 430 == 0)) advance += "\r\n#b#L" + jobData[i + 1] + "#" + jobData[i] + "#l";



                } else {
                    cm.sendOk(noAdvance);
                    cm.dispose();
                    return;
                }




                } else if ((cm.getPlayerStat("LVL") >= 70) && (cm.job == 432)) {//˫��3ת

                    for (var i = 0; i <= jobData.length; i++)
                    if ((i % 4 == 0) && (jobData[i + 1] - 433 == 0)) advance += "\r\n#b#L" + jobData[i + 1] + "#" + jobData[i] + "#l";

                  


                } else if ((cm.getPlayerStat("LVL") >= 120) && (cm.job == 433)) {//˫��4ת

                    for (var i = 0; i <= jobData.length; i++)
                    if ((i % 4 == 0) && (jobData[i + 1] - 434 == 0)) advance += "\r\n#b#L" + jobData[i + 1] + "#" + jobData[i] + "#l";



            } else if ((cm.getPlayerStat("LVL") >= 30) && (cm.job == 509)) {//����2ת

                    for (var i = 0; i <= jobData.length; i++)
                    if ((i % 4 == 0) && ((jobData[i + 1] - 580 == 0) || (jobData[i + 1] - 590 == 0))) advance += "\r\n#b#L" + jobData[i + 1] + "#" + jobData[i] + "#l";

                  



            } else if (((cm.getJob() % 10 == 0) || (cm.getJob() % 10 == 1)) && (cm.getJob() != 432) && (cm.getJob() != 433)) { // ������\4��תְ


                if ((cm.getPlayerStat("LVL")) >= (cm.getJob() % 10 == 1 ? 120 : 70)) {
                    for (var i = 0; i <= jobData.length; i++)
                    if (i % 4 == 0 && (jobData[i + 1] - 1 == cm.getJob())) advance += "\r\n#b#L" + jobData[i + 1] + "#" + jobData[i] + "#l";
                } else {
                    cm.sendOk(noAdvance);
                    cm.dispose();
                    return;
                }


            } else {//����������3��4ת����

             //˫��3ת���е����⡢��ֱ������ǰ�棬���ÿ��ˣ�

             if ((cm.getPlayerStat("LVL") < 120) && ((cm.getJob() == 433) || (cm.getJob() == 432))) {

             unable = "#k�����ڵ�ְҵ�� #r" + cm.getJobNameById(jobs) + " \r\n��Ӱ˫��ְҵȺתְ˵����\r\n70��#b���е�3��תְ ��ΪѪ������\r\n#r120��#b���е�4��תְ ��Ϊ�����İ�Ӱ˫����";

             }

                cm.sendOk(topsn + "\r\n" + vipname + " " + unable);
                cm.dispose();
                return;
            }



            advance += noThanks;
            cm.sendSimple(advance);


        } else if (status == 1) {

            if (selection == 1) {
                cm.sendOk(topsn + "#r" + vipname + "   " + text0);
                cm.dispose();

            } else {

                    newJob = selection;

                    for (var i = 0; i <= jobData.length; i++)
                    if ((i % 4 == 0) && (jobData[i + 1] == newJob) && (mapid = jobData[i + 2]) && (npcid = jobData[i + 3])) newJobName = jobData[i];
        //   mapid = jobData[i + 2];

                  if (mapid == nowmapid) {

                   text8 = "\r\n#r"+ vipname +" #k���Ѿ���  #r#m" + mapid + "# #k �ˣ� \r\n�������������ҵ� #r#p" + npcid + "# #k ����תְ��\r\n��Ҳ����ѡ�����¿��תְ����\r\n#b#L3#��תְ�̹� #r#p" + npcid + "# #b�Ի�#l  \r\n#L2##bֱ��תְΪ  #r" + newJobName + "#b (��Ҫ�����ѣ�#r#e" + fengye + " #n#b�� #i" + items + ":##t" + items + "#) #l";

                   } else {

                   text8 = "��ѡ���� #r" + newJobName + "#k �� #bתְ�򵼷���#k\r\n��ѡ����Ҫ�ķ���\r\n#b#L1#���͵�  #r#m" + mapid + "# #l #k\r\n\r\n ��������  #r#m" + mapid + "#  �ҵ� #r#p" + npcid + "# #k ����תְ\r\n#L2##bֱ��תְΪ  #r" + newJobName + "#b (��Ҫ�����ѣ�#r#e" + fengye + " #n#b�� #i" + items + ":##t" + items + "#) #l";


                 }

                 cm.sendSimple(text8);//���͵ĵ�2���Ի��򣬾������ݿ�����һ��

                  //  cm.sendYesNo("���Ƿ�ѡ�� #r" + newJobName + "#k �� #bתְ�򵼷���#k ?\r\n#b������ҽ��������� #r#m" + mapid + "# #k\r\n" + text1 + " #r#p" + npcid + "# #k ����תְ��");

            } //selection

          } else if (status == 2) {
                  if (selection == 1) {
                     cm.warp(mapid);

                     cm.sendSimple("���Ѿ��������͵���#m" + mapid + "# " + text2 + "#b#L1#��תְ�̹� #r#p" + npcid + "# #b�Ի�#l \r\n#L2#ֱ��תְ   #r" + newJobName + "#k (��Ҫ�����ѣ�#r#e" + fengye + " #n#b�� #i" + items + ":##t" + items + "#) #l");

                  } else if (selection == 2) {
                      if (cm.itemQuantity(items) >= 1) {
                         cm.changeJob(newJob);
                         cm.sendOk("��ϲ���Ѿ��ɹ�תְΪ #r" + newJobName + "#k ��\r\n#b���Ͱɣ� #b<ʱ��Ů��>#r����#k �ڵ����㣡 ");
                         cm.dispose();
                      } else {
                         cm.sendOk("�Բ�����û�� ��#r#e" + fengye + " #n#k�� #i" + items + ":##t" + items + "# #d\r\n�����Ҳ��ܰ������п���תְ��");
                         cm.dispose();
                       }

                  } else if (selection == 3) {
                      cm.dispose();
                      cm.openNpc(npcid, 0);

                   }


             } else if (status == 3) {

                  if (selection == 1) {
                      cm.dispose();
                      cm.openNpc(npcid, 0);
                  } else if (selection == 2) {
                      if (cm.itemQuantity(1402096) >= 1) {
                         cm.changeJob(newJob);
                         cm.sendOk("��ϲ���Ѿ��ɹ�תְΪ #r" + newJobName + "#k ��\r\n#b���Ͱɣ� #b<ʱ��Ů��>#r����#k �ڵ����㣡 ");
                         cm.dispose();
                      } else {
                         cm.sendOk("�Բ�����û�� ��#r#e" + fengye + " #n#k�� #i" + items + ":##t" + items + "# #d\r\n�����Ҳ��ܰ������п���תְ��");
                         cm.dispose();
                       }
                   }









                  // cm.changeJob(newJob); //תְ���
            // ��û�и���SP�ĺ�����giveSp()//T050 �����ȼ��͸����˵�Sp

        /*
            } else if (status == 3) {
            if (!cm.MissionStatus(cm.getPlayer().getId(),110414000, 0, 2)){//�鿴ʱ��������û
		cm.sendOk("#r�Ƿ��Ĳ�����Ϊ��ȷ��ע������������ϸ�ۿ�����5����ٵ����һ����")
		cm.MissionDelete(cm.getPlayer().getId(), 110414000);//�����������¼���
				cm.dispose();
		}else{
			*/


            if (newJob == 2100) { //�����ս���һת
               // cm.teachSkill(21000000, 0, 10); //ì����ǿ��
                //cm.teachSkill(21001003, 0, 10); //����ì
            } else if (newJob == 2110) { //ս��ڶ�ת
               /* cm.teachSkill(21100000, 0, 10);
                cm.teachSkill(21100002, 0, 10);
                cm.teachSkill(21100004, 0, 10);
                cm.teachSkill(21100005, 0, 10);*/
            } else if (newJob == 2111) { //ս�����ת
              //  cm.teachSkill(21110002, 0, 10);
            } else if (newJob == 2112) { //ս�����ת
              /*  cm.teachSkill(21120001, 0, 10); //��������
                cm.teachSkill(21120002, 0, 10); //ս��֮��
                cm.teachSkill(21121003, 0, 10); //ս�����־
                cm.teachSkill(21121000, 0, 10); //2280003[���ܲ�]ð�յ���ʿ
                cm.teachSkill(21120004, 0, 10); //2280014[���ܲ�]���ز���
                cm.teachSkill(21120005, 0, 10); //2280013[���ܲ�]��������
                cm.teachSkill(21120006, 0, 10); //2280015[���ܲ�]��ʯ�ǳ�
                cm.teachSkill(21120007, 0, 10); //2280016[���ܲ�]ս��֮��*/
            } else if (newJob == 431) {
               /* cm.teachSkill(4311003, 0, 10);*/
            } else if (newJob == 432) {
               /* cm.teachSkill(4321000, 0, 10);
                cm.teachSkill(4321001, 20, 20);*/
            } else if (newJob == 434) {
               /* cm.teachSkill(4331002, 0, 10);
                cm.teachSkill(4331005, 0, 10);*/
            } else if (newJob == 434) {
             /*   cm.teachSkill(4341000, 0, 10); //2280003[���ܲ�]ð�յ���ʿ
                cm.teachSkill(4340001, 0, 10); //�����ö�Һ
                cm.teachSkill(4341002, 0, 10); //2280030[���ܲ�]�ռ�ն 
                cm.teachSkill(4341003, 0, 10); //����ը��
                cm.teachSkill(4341004, 0, 10); //���߼���
                cm.teachSkill(4341005, 0, 10); //2280031[���ܲ�]��������
                cm.teachSkill(4341006, 0, 10); //�����ٻ�
                cm.teachSkill(4341007, 0, 10); //����*/
            } else if (newJob == 1111) { //����ʿ
               /* cm.teachSkill(11111004, 0, 10); //�������
                cm.teachSkill(11110005, 0, 10); //���׶���*/
            } else if (newJob == 1211) { //����ʿ
                /*cm.teachSkill(12111003, 0, 10); //�콵����
                cm.teachSkill(12111004, 0, 10); //��ħ��*/
            } else if (newJob == 1311) { //����ʹ��
               /* cm.teachSkill(13111002, 0, 10); //�������
                cm.teachSkill(13110003, 0, 10); //�����*/
            } else if (newJob == 1411) { //ҹ����
            /*    cm.teachSkill(14111005, 0, 10); //�����������
                cm.teachSkill(14110004, 0, 10); //�����ö�Һ*/
            } else if (newJob == 1511) { //��Ϯ��
              /*  cm.teachSkill(15111004, 0, 10); //����ȭ
                cm.teachSkill(15111005, 0, 10); //��������*/
            } else if (newJob == 412) { //��ʿ
              /*  cm.teachSkill(4120002, 0, 10); //�ٶ���
                cm.teachSkill(4120005, 0, 10); //�����ö�Һ
                cm.teachSkill(4121000, 0, 10); //2280003[���ܲ�]ð�յ���ʿ
                cm.teachSkill(4121003, 0, 10); //2280006[���ܲ�]����
                cm.teachSkill(4121004, 0, 10); //���߷���
                cm.teachSkill(4121006, 0, 10); //��������
                cm.teachSkill(4121007, 0, 10); //2280010[���ܲ�]�����������
                cm.teachSkill(4121008, 0, 10); //���߳��*/
            } else if (newJob == 422) { //����
              /*  cm.teachSkill(4220002, 0, 10); //�ٶ���
                cm.teachSkill(4220005, 0, 10); //�����ö�Һ
                cm.teachSkill(4221000, 0, 10); //2280003[���ܲ�]ð�յ���ʿ
                cm.teachSkill(4221001, 0, 10); //��ɱ
                cm.teachSkill(4221003, 0, 10); //2280006[���ܲ�]����
                cm.teachSkill(4221004, 0, 10); //���߷���
                cm.teachSkill(4221006, 0, 10); //��Ļ��
                cm.teachSkill(4221007, 0, 10); //һ��˫��*/
            } else if (newJob == 312) { //������
               /* cm.teachSkill(3120005, 0, 10); //�����
                cm.teachSkill(3121000, 0, 10); //2280003[���ܲ�]ð�յ���ʿ
                cm.teachSkill(3121002, 0, 10); //���۾���
                cm.teachSkill(3121003, 0, 10); //2280005[���ܲ�]���������
                cm.teachSkill(3121004, 0, 10); //�������
                cm.teachSkill(3121006, 0, 10); //����
                cm.teachSkill(3121007, 0, 10); //���˼�
                cm.teachSkill(3121008, 0, 10); //���о���*/
            } else if (newJob == 322) { //
               /* cm.teachSkill(3221003, 0, 10); //2280005[���ܲ�]���������
                cm.teachSkill(3220004, 0, 10); //������
                cm.teachSkill(3221000, 0, 10); //2280003[���ܲ�]ð�յ���ʿ
                cm.teachSkill(3221001, 0, 10); //��͸��
                cm.teachSkill(3221002, 0, 10); //���۽�
                cm.teachSkill(3221005, 0, 10); //�����
                cm.teachSkill(3221006, 0, 10); //���ۼ�
                cm.teachSkill(3221007, 0, 10); //һ��Ҫ����*/
            } else if (newJob == 212) { //��
             /*   cm.teachSkill(2121000, 0, 10); //2280003[���ܲ�]ð�յ���ʿ
                cm.teachSkill(2121001, 0, 10); //����֮��
                cm.teachSkill(2121002, 0, 10); //ħ������
                cm.teachSkill(2121003, 0, 10); //�����
                cm.teachSkill(2121004, 0, 10); //2280004[���ܲ�]�ռ�����
                cm.teachSkill(2121005, 0, 10); //����ħ��
                cm.teachSkill(2121006, 0, 10); //��������
                cm.teachSkill(2121007, 0, 10); //�콵����*/
            } else if (newJob == 222) { //����
              /*  cm.teachSkill(2221000, 0, 10); //2280003[���ܲ�]ð�յ���ʿ
                cm.teachSkill(2221001, 0, 10); //����֮��
                cm.teachSkill(2221002, 0, 10); //ħ������
                cm.teachSkill(2221003, 0, 10); //������
                cm.teachSkill(2221004, 0, 10); //2280004[���ܲ�]�ռ�����
                cm.teachSkill(2221005, 0, 10); //��ħ��
                cm.teachSkill(2221006, 0, 10); //��������
                cm.teachSkill(2221007, 0, 10); //��˪����*/
            } else if (newJob == 232) { //����
               /* cm.teachSkill(2321000, 0, 10); //2280003[���ܲ�]ð�յ���ʿ
                cm.teachSkill(2321001, 0, 10); //����֮��
                cm.teachSkill(2321002, 0, 10); //ħ������
                cm.teachSkill(2321003, 0, 10); //ǿ��ʥ��
                cm.teachSkill(2321004, 0, 10); //2280004[���ܲ�]�ռ�����
                cm.teachSkill(2321005, 0, 10); //ʥ��֮��
                cm.teachSkill(2321006, 0, 10); //������
                cm.teachSkill(2321007, 0, 10); //2280009[���ܲ�]��â�ɼ�
                cm.teachSkill(2321008, 0, 10); //ʥ������*/
            } else if�� (newJob == 112) {
             /*   cm.teachSkill(1121001, 0, 10); //��ʯ
                cm.teachSkill(1121002, 0, 10); //����̩ɽ
                cm.teachSkill(1121006, 0, 10); //2280012[���ܲ�]ͻ��
                cm.teachSkill(1121008, 0, 10); //��������
                cm.teachSkill(1121010, 0, 10); //��������
                //cm.teachSkill(1121009,0,10);//Ӣ��֮��
                cm.teachSkill(1120003, 0, 10); //2280007[���ܲ�]����һ��
                cm.teachSkill(1120004, 0, 10); //������˹
                cm.teachSkill(1121000, 0, 10); //2280003[���ܲ�]ð�յ���ʿ*/
            } else if (newJob == 122) {
               /* cm.teachSkill(1220005, 0, 10); //������˹
                cm.teachSkill(1220006, 0, 10); //������
                cm.teachSkill(1220010, 0, 10); //2280008[���ܲ�]����һ��
                cm.teachSkill(1221000, 0, 10); //2280003[���ܲ�]ð�յ���ʿ
                cm.teachSkill(1221001, 0, 10); //��ʯ
                cm.teachSkill(1221002, 0, 10); //�ȶ���ɽ
                cm.teachSkill(1221003, 0, 10); //ʥ��֮��
                cm.teachSkill(1221004, 0, 10); //ʥ��֮��
                cm.teachSkill(1221007, 0, 10); //2280012[���ܲ�]ͻ��
                cm.teachSkill(1221009, 0, 10); //��������
                cm.teachSkill(1221011, 0, 10); //ʥ��*/
            } else if (newJob == 132) {
               /* cm.teachSkill(1320005, 0, 10); //������˹
                cm.teachSkill(1320006, 0, 10); //��������
                cm.teachSkill(1320008, 0, 10); //�������
                cm.teachSkill(1320009, 0, 10); //���ף��
                cm.teachSkill(1321000, 0, 10); //2280003[���ܲ�]ð�յ���ʿ
                cm.teachSkill(1321001, 0, 10); //��ʯ
                cm.teachSkill(1321002, 0, 10); //����̩ɽ
                cm.teachSkill(1321003, 0, 10); //2280012[���ܲ�]ͻ��
                cm.teachSkill(1321007, 0, 10); //�������*/
            } else if (newJob == 512) {
               /* cm.teachSkill(5121000, 0, 10); //2280003[���ܲ�]ð�յ���ʿ
                cm.teachSkill(5121002, 0, 10); //������
                cm.teachSkill(5121003, 0, 10); //��������
                cm.teachSkill(5121004, 0, 10); //����ָ
                cm.teachSkill(5121005, 0, 10); //����
                // cm.teachSkill(5121006,0,10);
                cm.teachSkill(5121007, 0, 10); //����ȭ
                //cm.teachSkill(5121008,0,5);
                cm.teachSkill(5121009, 0, 10); //��������
                cm.teachSkill(5121010, 0, 10); //�Ż�����
                cm.teachSkill(5121001, 0, 10); //Ǳ����Ԩ*/
            } else if (newJob == 522) {
                /*cm.teachSkill(5220001, 0, 10); //����ǿ��
                cm.teachSkill(5220011, 0, 10); //��������
                cm.teachSkill(5220002, 0, 10); //����������̨
                cm.teachSkill(5221000, 0, 10); //2280003[���ܲ�]ð�յ���ʿ
                cm.teachSkill(5221003, 0, 10); //��̺ʽ��Ϯ
                cm.teachSkill(5221004, 0, 10); //�����籩
                cm.teachSkill(5221009, 0, 10); //�������
                cm.teachSkill(5221006, 0, 10); //��װ*/
                //cm.teachSkill(5221007, 0, 10); //������
                //cm.teachSkill(5221008, 0, 10); //�����ڻ�
            } //newjob
            if (first) {
                //cm.resetAp();
            } //�����һת������AP

/*

            if (newJob == 100 || newJob == 1100) {
                cm.gainItem(1302007, 1)
            } else if (newJob == 110 || newJob == 1110) {
                cm.gainItem(1402002, 1)
            } else if (newJob == 111 || newJob == 1111) {
                cm.gainItem(1402003, 1)
            } else if (newJob == 112) {
                cm.gainItem(1402004, 1)
            } else if (newJob == 120) {
                cm.gainItem(1422004, 1)
            } else if (newJob == 121) {
                cm.gainItem(1422005, 1)
            } else if (newJob == 122) {
                cm.gainItem(1422027, 1)
            } else if (newJob == 130) {
                cm.gainItem(1432002, 1)
            } else if (newJob == 131) {
                cm.gainItem(1432004, 1)
            } else if (newJob == 132) {
                cm.gainItem(1432007, 1)
            } else if (newJob == 200 || newJob == 1200) {
                cm.gainItem(1372063, 1)
            } else if (newJob == 210 || newJob == 220 || newJob == 230 || newJob == 1210) {
                cm.gainItem(1372066, 1)
            } else if (newJob == 211 || newJob == 221 || newJob == 231 || newJob == 1211) {
                cm.gainItem(1372069, 1)
            } else if (newJob == 212 || newJob == 222 || newJob == 232) {
                cm.gainItem(1372072, 1)
            } else if (newJob == 300 || newJob == 1300 || newJob == 3300) {
                cm.gainItem(1452093, 1);
                cm.gainItem(1462078, 1);
            } else if (newJob == 310 || newJob == 1310 || newJob == 3310) {
                cm.gainItem(1452096, 1);
            } else if (newJob == 311 || newJob == 1311 || newJob == 3311) {
                cm.gainItem(1452099, 1);
            } else if (newJob == 312 || newJob == 3312) {
                cm.gainItem(1452101, 1);
            } else if (newJob == 320) {
                cm.gainItem(1462081, 1);
            } else if (newJob == 321) {
                cm.gainItem(1462084, 1);
            } else if (newJob == 322) {
                cm.gainItem(1462086, 1);
            } else if (newJob == 400 || newJob == 1400) {
                cm.gainItem(1332104, 1);
                cm.gainItem(1472104, 1);
            } else if (newJob == 410 || newJob == 1410) {
                cm.gainItem(1472107, 1);
            } else if (newJob == 411 || newJob == 1411) {
                cm.gainItem(1472110, 1);
            } else if (newJob == 412) {
                cm.gainItem(1472112, 1);
            } else if (newJob == 420) {
                cm.gainItem(1332107, 1);
            } else if (newJob == 421) {
                cm.gainItem(1332110, 1);
            } else if (newJob == 422) {
                cm.gainItem(1332115, 1);
            } else if (newJob == 500 || newJob == 1500 || newJob == 3500) {
                cm.gainItem(1482066, 1);
                cm.gainItem(1492066, 1)
            } else if (newJob == 510 || newJob == 1510 || newJob == 3510) {
                cm.gainItem(1482069, 1);
            } else if (newJob == 511 || newJob == 1511 || newJob == 3511) {
                cm.gainItem(1482072, 1);
            } else if (newJob == 512 || newJob == 3512) {
                cm.gainItem(1482074, 1);
            } else if (newJob == 520) {
                cm.gainItem(1492069, 1);
            } else if (newJob == 521) {
                cm.gainItem(1492072, 1);
            } else if (newJob == 522) {
                cm.gainItem(1492074, 1);
            } else if (newJob == 2100) {
                cm.gainItem(1442096, 1);
            } else if (newJob == 2110) {
                cm.gainItem(1442099, 1);
            } else if (newJob == 2111) {
                cm.gainItem(1442102, 1);
            } else if (newJob == 2112) {
                cm.gainItem(1442105, 1);
            } else if (newJob == 3200) {
                cm.gainItem(1382085, 1);
            } else if (newJob == 3210) {
                cm.gainItem(1382088, 1);
            } else if (newJob == 3211) {
                cm.gainItem(1382091, 1);
            } else if (newJob == 3212) {
                cm.gainItem(1382094, 1);
            }


            if (Sp) {
                cm.sendNext("����С���ֵ����������������ڿ�ʼ���Ѿ���#b" + newJobName + "#k�ˣ�\r\n�Ҹ�����һЩС����~�뵽����������~\r\n\r\nĿǰ��ĵȼ���" + cm.getPlayerStat("LVL") + "�������˵ȼ�תְ��ϵͳΪ�㲹����" + (cm.getPlayerStat("LVL") - 10) * 3 + "��SP��")
                cm.dispose();
            } else {
                cm.sendOk("����С���ֵ����������������ڿ�ʼ���Ѿ���#b" + newJobName + "#k�ˣ�\r\n�Ҹ�����һЩС����~�뵽����������~");
                cm.dispose();
            }

*/
        }	
    }
}

function giveSp() { //Ҫ����תְְҵ���� ����
    if (cm.getJob() == 200 && cm.getPlayerStat("LVL") > 8) { //�����ħ��ʦ���ҳ�����תְ�ȼ� 8
        Sp = true;
        cm.setRemainingSp((cm.getPlayerStat("LVL") - 8) * 3)
    } else if (cm.getJob() % 1000 == 0 || cm.getJob() == 0 || cm.getJob() == 3000) { //��һ��תְ���ҳ�����תְ�ȼ� 10
        Sp = true
        cm.setRemainingSp((cm.getPlayerStat("LVL") - 10) * 3)
    }
}

