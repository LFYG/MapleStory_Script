//��߳������ս����
var status = 0;
var minLevel = 160;
var maxLevel = 255;
var minPartySize = 3;
var maxPartySize = 999;
var GetMeny = 500; //���ĵㄻ����
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
        if (mode == 1) status++;
        else status--;
        if (status == 0) {
            if (cm.getMap().getId() == 922010100) {
                cm.sendOk("��ӭ��Ϣ����������д��");
                cm.dispose();
            } else {
                var text = "#e<���������߳������ս����>#n\r\n";
                text += "������߳���ս������Ҫ" + GetMeny + "�ㄻһ��.\r\n";
                text += "һ���˺�ÿ��ֻ�ܽ���6��,ǰ������ѡ�\r\n";
                text += "\r\n\r\n#L0#������߳Ǹ���#l";
                cm.sendSimple(text);
            }
        } else if (status == 1) {
            if (selection == 0) {
                // if (cm.getParty() == null) { // û�����
                //     cm.sendOk("����Ӻ����̸����");
                //     cm.dispose();
                // } else if (!cm.isLeader()) { // ���Ƕӳ�
                //     cm.sendOk("��жӳ�����̸����");
                //     cm.dispose();
                // } else 
                if (cm.getBossLog("��߳�") > 6) {
                    cm.sendOk("�Բ���һ��ֻ�ܽ���6�Ρ�")
                    cm.dispose();
                } else if (cm.getBossLog("��߳�") >= 3 && cm.getChar().getCSPoints(1) < GetMeny) {
                    cm.sendOk("�Բ���ֻ��ǰ�������,��������Ҫ" + GetMeny + "��ȯһ��!")
                    cm.dispose();
                } else {
                    cm.sendSimple("- #e#d��߳������ս����#k#n:\r\n\r\n#b����������Ҫ" + GetMeny + "�ㄻһ��,ǰ�������,�����Ƿ����?��\r\n\r\n#L0#[ִ��]��ս����#l\r\n")
                }
            } //selection
        } else if (status == 2) {
            // var party = cm.getParty().getMembers();
            // var mapId = cm.getPlayer().getMapId();
            var next = true;
            // var levelValid = 0;
            // var inMap = 0;
            // var it = party.iterator();
            // var message="";
            // while (it.hasNext()) {
            //     var cPlayer = it.next();
            //     if ((cPlayer.getLevel() >= minLevel) && (cPlayer.getLevel() <= maxLevel)) {
            //         levelValid += 1;                    
            //     } else {
            //         message="��Ա���в����ȼ�Ҫ��Ķ�Ա!";
            //         next = false;
            //     }
            //     if (cPlayer.getMapid() == mapId) {
            //         inMap += 1;
            //}
            // if (cPlayer.getBossLog("��߳�") >= 3 && cPlayer.getChar().getCSPoints(1) < GetMeny) { //���ㄻ
            //     next = false;
            // } else if (cPlayer.getBossLog("��߳�") >= 6) {
            //      next = false;
            //     }
            // }
            // if (party.size() < minPartySize || party.size() > maxPartySize || inMap < minPartySize) {
            //     next = false;
            //     message="�������Ķ�Ա����!";
            // }
            if ((cm.getLevel() < minLevel) || (cm.getLevel() > maxLevel)) {
                message = "��ĵȼ�������Ҫ��!";
                next = false;
            }
            if (next) {
                var em = cm.getEventManager("LudiPQ");
                cm.worldMessage("[�������] " + cm.getChar().getName() + " �������Ķ����������߳������ս���񡣴��һ��ף�����ǰɣ�");
                if (em == null) {
                    cm.sendOk("���������ڽ��赱�С�");
                } else {
                    var prop = em.getProperty("state");
                    if (prop == "0" || prop == null) {
                        // -----------ÿ����Ա�����۵ㄻ
                        // it = party.iterator();
                        // while (it.hasNext()) {
                        // var cPlayer = it.next();
                        if (cm.getBossLog("��߳�") > 3) {
                            cm.getChar().modifyCSPoints(1, -GetMeny);
                        }
                        // }
                        //em.startInstance(cm.getParty(), cm.getMap());
                        //cm.removeAll(4001022);
                        //cm.removeAll(4001023);
                        cm.warp(922010000, 0);
                        cm.dispose();
                        return;
                    } else {
                        cm.sendOk("��ȴ������������.����Ի�Ƶ�����룡");
                    }
                }
                cm.dispose();
            } else {
                cm.sendOk(message);
                //cm.sendOk("��ȷ��������Ա��\r\n\r\n#b1�����Ա����Ҫ" + minPartySize + "�����ϣ�" + maxPartySize + "�����¡�\r\n2�����Ա�ȼ�����Ҫ��" + minLevel + "�����ϡ�\r\n3��һ���˺�ÿ��ֻ�ܽ���6��,ÿ������" + GetMeny + "�ㄻ,ǰ������ѡ�\r\n��#r�����Ȼ����, ��������,�ٵ�½ ������������ӡ�#k#b��");
                cm.dispose();
            }
        } //status
    } //mode
    //f
}
