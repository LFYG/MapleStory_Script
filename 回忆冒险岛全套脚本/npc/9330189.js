/*
 ��֮��У
 */


var status = 0;
//���Ƶȼ�
var minLevel = 120; //��͵ȼ�
var maxLevel = 250;//��ߵȼ�


//��������
var minPlayers = 1;
var maxPlayers = 1;

//�������ȼ�����
var moblevel = 200;

//�������� ������true �رա�false
var open = true;

//���log��¼
var PQ = '��֮��У';


//�����ļ�����
var eventname = "ZChaosPQ8";


//����ÿ�մ���
var maxenter = 5;

function start() {
    status = -1;
    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (status >= 1 && mode == 0) {
        cm.sendOk("���Ѱ����Ӱ��ȼ���O���Ͽ�����������ս�������ɡ�");
        cm.dispose();
        return;
    }
    if (mode == 1)
        status++;
    else
        status--;

    if (status == 0) {
        var em = cm.getEventManager(eventname);
        var prop = em.getProperty("state");
        if (prop == null || prop.equals("0")) {
            var vipstr = "#r��������#k";
        } else {
            var vipstr = "#b�Ѿ�����#k";
        }



        if (cm.getPlayer().getClient().getChannel() == 1) {
            if (cm.getPlayer().getMapId() == 211070100) { //����
                cm.sendSimple("#e#v3991051##v3991051##v3991051##v3991051#<Boss - ��֮��У>#v3991050##v3991050##v3991050##v3991050##n\r\n������ȷ����������,�������ȥ?\r\n#L2##b�ǵ�,���ھͳ�ȥ#l");


            } else {
                var pqtry = maxenter - cm.getBossLog(PQ);
                var rwpz = "";
                rwpz = "����ָ����#v4140301##v4140301##v4140301##v4140301#\r\n";
                rwpz += "#e�Ƽ��ȼ���150 - 250";
                rwpz += "        �Ƽ�������1 - 1  \r\n#b�ѽ�����ͨģʽ��" + cm.getBossLog(PQ) + " ��       ʣ����ս������" + pqtry + " ��#k";
                rwpz += "\r\n��ͨģʽ״̬��" + vipstr + "        #n";
                var zyms = "";
                zyms = "   #fUI/UIWindow2.img/StagedGachapon/Creature/0/normal/2#   #fUI/UIWindow2.img/Megaphone/0##fUI/UIWindow2.img/Megaphone/0##r <Boss - ��֮��У> #fUI/UIWindow2.img/Megaphone/0##fUI/UIWindow2.img/Megaphone/0#   #fUI/UIWindow2.img/StagedGachapon/Creature/0/normal/2##n\r\n#b#h0# \n\#k����������ս���BOSS������?\r\n" + rwpz + "\r\n";
                zyms += "   #L1##b>>>>>>>>>>>>>�ǵ�,�������ھ�ȥ<<<<<<<<<<<<<<#l\r\n\r\n";
                cm.sendSimple(zyms);
            }
        } else {
            cm.sendOk("��ǰ����ֻ����1Ƶ�����С�");
            cm.dispose();
        }

    } else if (status == 1) {
        if (selection == 1) {
            if (cm.getParty() == null) { //�ж����
                cm.sendOk("��û�д������,�޷��볡��");
                cm.dispose();
             /*} else if(cm.haveItem(4001834) < 1){
                cm.sendOk("��û��#v4001834##z4001834#�޷����븱����");
                cm.dispose();*/
            } else if (!cm.isLeader()) { // �ж���Ӷӳ�
                cm.sendOk("�������ŶӵĶӳ����ҶԻ���");
                cm.dispose();
            } else if (cm.getBossLog(PQ) >= maxenter) {
                cm.sendOk("�������ս�����Ѿ�������,������������!");
                cm.dispose();
            } else if (!cm.allMembersHere()) {
                cm.sendOk("�����Ӳ��ֳ�Ա���ڵ�ǰ��ͼ,���ټ����ǹ������ڳ��ԡ�"); //�ж���ӳ�Ա�Ƿ���һ�ŵ�ͼ..
                cm.dispose();
            } else {
                var party = cm.getParty().getMembers();
                var mapId = cm.getMapId();
                var next = true;
                var levelValid = 0;
                var inMap = 0;

                var it = party.iterator();
                while (it.hasNext()) {
                    var cPlayer = it.next();
                    if (cPlayer.getLevel() >= minLevel && cPlayer.getLevel() <= maxLevel) {
                        levelValid += 1;
                    } else {
                        //cm.sendOk("��ӳ�Ա " + minPlayers + " ������ " + maxPlayers + "�� ���� ���г�Ա�ȼ� "+ minLevel +" ���� "+ maxLevel +" ���²ſ����볡��");
                        cm.dispose();
                        next = false;
                    }
                    if (cPlayer.getMapid() == mapId) {
                        inMap += 1;
                    }
                }
                if (party.size() > maxPlayers || inMap < minPlayers) {
                    next = false;
                }
                if (next) {
                    var em = cm.getEventManager(eventname);
                    if (em == null || open == false) {
                        cm.sendSimple("�����ļ�������,����ϵ����Ա��");
                    } else {
                        var prop = em.getProperty("state");
                        if (prop == null || prop.equals("0")) {
                             cm.setBossLog(PQ);
							em.startInstance(cm.getParty(), cm.getMap(), 255);
							
                        } else {
                            cm.sendSimple("�Ѿ��ж����ڽ�����,�뻻����Ƶ�����ԡ�");
                        }

                       
                        cm.dispose();
                    }
                } else {
                    cm.sendOk("��ӳ�Ա " + minPlayers + " ������ " + maxPlayers + "�� ���� ���г�Ա�ȼ� " + minLevel + " ���� " + maxLevel + " ���²ſ����볡��");
                    cm.dispose();
                }
            }
        } else if (selection == 2) {
            cm.warp(211061001, 0);
            cm.dispose();
        }






    } else if (mode == 0) {
        cm.dispose();
    }
}