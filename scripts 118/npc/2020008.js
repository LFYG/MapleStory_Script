/** 
	Tylus: Warrior 3rd job advancement
	El Nath: Chief's Residence (211000001)

	Custom Quest 100100, 100102
*/



var status = -1;
var job;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0 && status == 1) {
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

        if (! (cm.getJob() == 110 || cm.getJob() == 120 || cm.getJob() == 130 || cm.getJob() == 2110)) {

            cm.sendOk("#r" + cm.getVipname() + " #b���Ѿ������ ������תְ ��");
            cm.dispose();
            return;
        }


        if ((cm.getJob() == 110 || cm.getJob() == 120 || cm.getJob() == 130 || cm.getJob() == 2110) && cm.getPlayerStat("LVL") >= 70) {

               if (cm.getPlayerStat("RSP") > (cm.getPlayerStat("LVL") - 70) * 3) {
                if (cm.getPlayer().getAllSkillLevels() > cm.getPlayerStat("LVL") * 3) { //���ʹ����̫���SP��ζ�������Ѿ���������ǵļ���. .��ͻ
                    cm.sendOk("�㻹��δʹ����� SP ����ʹ������������ң�");
                    cm.getPlayer().resetSP((cm.getPlayerStat("LVL") - 70) * 3);
                } else {
                    cm.sendOk("�š����㻹��#b SP #kδʹ�ã���ʹ�������������.");
                }
            }


                cm.sendNext("#r" + cm.getVipname() + "  #b��ϲ��ﵽ��70�����ϣ�\r\n#d�������Ѿ����Խ��е�����תְ�ˣ�\r\n#r������Ѿ�׼����������һ����");
                status = 0;
            
        } else {
            cm.sendOk("#r" + cm.getVipname() + " #k��ĵȼ���δ�ﵽ70�����ϣ�\r\n#r���ܽ��е�����תְ��");
            cm.safeDispose();
        }

    } else if (status == 1) {
       var newjob = cm.getJob() + 1;
       cm.changeJob(newjob);
       cm.sendOk("��ϲ��תְ��Ϊ #r" + cm.getJobNameById(newjob) + "#k !\r\n#b���Ĵ�תְ���� 120�������Ͱɣ�");
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
    if (mode == 0 && status == 1) {
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
        if (! (cm.getJob() == 110 || cm.getJob() == 120 || cm.getJob() == 130 || cm.getJob() == 2110)) {
            if (cm.getQuestStatus(6192) == 1) {
                if (cm.getParty() != null) {
                    var ddz = cm.getEventManager("ProtectTylus");
                    if (ddz == null) {
                        cm.sendOk("Unknown error occured");
                    } else {
                        var prop = ddz.getProperty("state");
                        if (prop == null || prop.equals("0")) {
                            ddz.startInstance(cm.getParty(), cm.getMap());
                        } else {
                            cm.sendOk("�Ѿ�������ִ��  ����̩��˹  ��������ˣ�.");
                        }
                    }
                } else {
                    cm.sendOk("���齨�ö��� ����ִ��   ����̩��˹  �������!");
                }
            } else if (cm.getQuestStatus(6192) == 2) {
                cm.sendOk("лл�㱣�����ң��ҵ��»�̻���һЩ���ܣ�.");
                if (cm.getJob() == 112) {
                    if (cm.getPlayer().getMasterLevel(1121002) <= 0) {
                        cm.teachSkill(1121002, 0, 10);
                    }
                } else if (cm.getJob() == 122) {
                    if (cm.getPlayer().getMasterLevel(1221002) <= 0) {
                        cm.teachSkill(1221002, 0, 10);
                    }
                } else if (cm.getJob() == 132) {
                    if (cm.getPlayer().getMasterLevel(1321002) <= 0) {
                        cm.teachSkill(1321002, 0, 10);
                    }
                }
            } else {
                cm.sendOk("#r" + cm.getVipname() + " #d���Ѿ�����˵�����תְ��\r\n#b���Ĵ�תְ���� 120����\r\n#r��л���� MapleWing ��֧��!");
            }
            cm.dispose();
            return;
        }
        if ((cm.getJob() == 110 || cm.getJob() == 120 || cm.getJob() == 130 || cm.getJob() == 2110) && cm.getPlayerStat("LVL") >= 70) {
            if (cm.getPlayerStat("RSP") > (cm.getPlayerStat("LVL") - 70) * 3) {
                if (cm.getPlayer().getAllSkillLevels() > cm.getPlayerStat("LVL") * 3) { //���ʹ����̫���SP��ζ�������Ѿ���������ǵļ���. .��ͻ
                    cm.sendOk("�㻹��δʹ����� SP ����ʹ������������ң�");
                    cm.getPlayer().resetSP((cm.getPlayerStat("LVL") - 70) * 3);
                } else {
                    cm.sendOk("�š����㻹��#b SP #kδʹ�ã���ʹ�������������.");
                }
                cm.safeDispose();
            } else {
                cm.sendNext("#r" + cm.getVipname() + "  #b��ϲ��ﵽ��70�����ϣ�\r\n#d�������Ѿ����Խ��е�����תְ�ˣ�\r\n#r������Ѿ�׼����������һ����");
            }
        } else {
            cm.sendOk("#r" + cm.getVipname() + " #k��ĵȼ���δ�ﵽ70�����ϣ�\r\n#r���ܽ��е�����תְ��");
            cm.safeDispose();
        }
    } else if (status == 1) {
        if (cm.getPlayerStat("LVL") >= 70 && cm.getPlayerStat("RSP") <= (cm.getPlayerStat("LVL") - 70) * 3) {
            if (cm.getJob() == 110) { // ����
                cm.changeJob(111); // ��ʿ
                cm.sendOk("��ϲ��תְ��Ϊ #b��ʿ#k.");
                cm.dispose();
            } else if (cm.getJob() == 120) { // ׼��ʿ
                cm.changeJob(121); // ��ʿ
                cm.sendOk("��ϲ��תְ��Ϊ #b��ʿ#k.");
                cm.dispose();
            } else if (cm.getJob() == 130) { // ǹսʿ
                cm.changeJob(131); // ����ʿ
                cm.sendOk("��ϲ��תְ��Ϊ #b����ʿ#k");
                cm.dispose();
            } else if (cm.getJob() == 2110) { // ս��2ת
                cm.changeJob(2111); // ս��
                if (cm.canHold(1142131, 1)) {
                    cm.forceCompleteQuest(29926);
                    cm.gainItem(1142131, 1); //temp fix
                }
                cm.sendOk("��ϲ��תְ��Ϊ #bս��(3ת)#k.");
                cm.dispose();
            }
        } else {
            cm.sendOk("����ﵽ70�� �� ʹ���� SP �� �������ң�.");
            cm.dispose();
        }
    }
}







*/