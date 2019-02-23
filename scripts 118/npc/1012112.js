var status = -1;
var minLevel = 10; // 35
var maxLevel = 255; // 65

var minPartySize = 1;
var maxPartySize = 6;

var mds = "#r �������T��#i4251202##r ����������� #i4251202# #r��T������ \r\n#r";;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.dispose();
            return;
        }
        status--;
            cm.dispose();
    }
    if (cm.getPlayer().getMapId() != 910010500) {
        if (status == 0) {
            cm.sendYesNo("����Ҫ�� ����������� �볡��ô��");
        } else {
            cm.saveLocation("MULUNG_TC");
            cm.warp(910010500, 0);
            cm.dispose();
        }
        return;
    }

    if (status == 0) {

               cm.sendSimple(mds + cm.getVipname() + " #d���Ŷ������ #r�����������#d �볡��ʹŶ��\r\n���������������Ȥ�Ķ���Ŷ��\r\n\r\n#b#L0#��ʼ���� #l \r\n#L1#�˽��볡˵�� #l \r\n#L2#ʹ��#i4001101:#�һ���Ʒ#l");


   } else if (status == 1) {

         if (selection == 0) {

        if (cm.getParty() == null) { // No Party

            cm.sendSimple("��û��һ������Ŷ��\r\n #r�볡����:  �������� " + minPartySize + " ����, ���ж�Ա�ĵȼ�����ﵽ��͵ȼ� " + minLevel + "  �Ͳ�������ߵȼ� " + maxLevel + ".#b\r\n#L0#��Ҷ���~~~�ҿ���....#l");

        } else if (!cm.isLeader()) { // Not Party Leader

            cm.sendSimple("�㲻�Ƕӳ�Ŷ��������Ķӳ������ң�.#b\r\n#L0#���֪���ˡ�#l");

        } else {

            // Check if all party members are within PQ levels
            var party = cm.getParty().getMembers();
            var mapId = cm.getMapId();
            var next = true;
            var levelValid = 0;
            var inMap = 0;
            var it = party.iterator();

            while (it.hasNext()) {
                var cPlayer = it.next();
                if ((cPlayer.getLevel() >= minLevel) && (cPlayer.getLevel() <= maxLevel)) {
                    levelValid += 1;
                } else {
                    next = false;
                }
                if (cPlayer.getMapid() == mapId) {
                    inMap += (cPlayer.getJobId() == 900 ? 6 : 1);
                }
            }

            if (party.size() > maxPartySize || inMap < minPartySize) {
                next = false;
            }


            if (next) {

                var em = cm.getEventManager("HenesysPQ");
                if (em == null) {
                    cm.sendSimple("ִ�и������� HenesysPQ �¼������ڣ�����ϵMapleWing �޸�����");
                } else {
                    var prop = em.getProperty("state");
                    if (prop.equals("0") || prop == null) {
                        em.startInstance(cm.getParty(), cm.getMap(), 70);
                        cm.removeAll(4001101);
                        cm.dispose();
                        return;
                    } else {
                        cm.sendSimple("�Ѿ��ж��������������������ˣ�\r\n����Ҫ���������ô��.#b\r\n#L0#�õģ���֪���ˣ�.#");
                    }
                }


            } else {//if (next)

                cm.sendSimple("��Ķ��鲻�����볡����Ŷ��\r\n #r�볡����:  �������� " + minPartySize + " ����, ���ж�Ա�ĵȼ�����ﵽ��͵ȼ� " + minLevel + "  �Ͳ�������ߵȼ� " + maxLevel + ".#b\r\n#L0#��Ҷ���~~~.#l");
            }


        }//while (it.hasNext())


        } else if (selection == 1) {

              cm.sendok(mds + "\r\n������....��������������ƷŶ...");
              cm.dispose();

        } else if (selection == 2) {

               if (cm.getSpace(1) >= 1) {
             cm.sendSimple(mds + "��ѡ������Ҫ�һ�����Ʒ��\r\n#L0##i1003266:# #t1003266:# ��Ҫ #i4001101:# 20 ��#l  \r\n#L1##i1002798:# #t1002798:# ��Ҫ #i4001101:# 10 �� #l");

               } else {

               cm.sendOk(mds + "�������� װ��������1����λ����Ŷ��");
               cm.dispose();

               }

        }


    } else if (status == 2) { //broken glass


                 if (selection == 0) {

                      if (cm.haveItem(4001101, 20)) {
                         cm.gainItem(1003266, 1);
                         cm.gainItem(4001101, -20);
                         cm.sendOk(mds + "�һ��ɹ���\r\n���Ѿ���#i1003266:# #t1003266:# ������ı�����");
                      } else {

                       cm.sendOk(mds + "�Բ���Ŷ����û�� 20 �� #i1003266:# #t1003266:# ");
                      }

                  } else {

                      if (cm.haveItem(4001101, 10)) {
                         cm.gainItem(1002798, 1);
                         cm.gainItem(4001101, -10);
                         cm.sendOk(mds + "�һ��ɹ���\r\n���Ѿ���#i1002798:# #t1002798:# ������ı�����");
                      } else {

                       cm.sendOk(mds + "�Բ���Ŷ����û�� 10 �� #i1003266:# #t1003266:# ");
                      }


                  }


/*

        if (cm.haveItem(1002798, 1)) {

            if (!cm.canHold(1003266, 1)) {

                cm.sendOk("Make room for this Hat.");

            } else if (cm.haveItem(4001101, 20) && cm.isGMS()) { //TODO JUMP
                cm.gainItem(1003266, 1);
                cm.gainItem(4001101, -20);
            } else {
                cm.sendOk("�����õ�20��#i4001101:# �ٻ������Ұ�.");
            }
        } else if (!cm.canHold(1002798, 1)) {
            cm.sendOk("�Բ�����û�� #i4001101:# .");
        } else if (cm.haveItem(4001101, 10)) {
            cm.gainItem(4001101, -10); //should handle automatically for "have"
            cm.gainItem(1002798, 1);
        } else {
            cm.sendOk("�����õ�10��#i4001101:# �ٻ������Ұ�.");
        }
        cm.dispose();

*/



    }//(status == 2)


}