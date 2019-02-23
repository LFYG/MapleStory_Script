var status = 0;
var minLevel = 120;
var maxLevel = 255;
var minPartySize = 1;
var maxPartySize = 6;
var types = 0;

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
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            if (cm.getMapId() == 272030400) {
                status = 1;
                cm.sendSimple("���������ս�뿪������\r\n#b#L0# �����뿪���\r\n#L1# ûʲô����Ҫ�������");
            } else {
                cm.sendSimple("#e<������ս����������>#n\r\n����Ͷ�Ա��һ��Ŭ��������������������кܶ������ͬ��Э�����޷�������ϰ������������ս�Ļ�������#b������ӵĶӳ�#k������˵����\r\n#b#L1#����ִ��Զ���ӡ�#l")
            }
        } else if (status == 1) {
            if (cm.getParty() == null) { // û�����
                cm.sendOk("����Ӻ����̸����");
                cm.dispose();
            } else if (!cm.isLeader()) { // ���Ƕӳ�
                cm.sendOk("��жӳ�����̸����");
                cm.dispose();
            } else if (cm.getBossLog('��������') >= 3) {
                cm.sendOk("�Բ���һ��ֻ�ܽ���3�Ρ�")
                cm.dispose();
            } else {
                var party = cm.getParty().getMembers();
                var mapId = cm.getPlayer().getMapId();
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
                        inMap += 1;
                    }
                }
                if (party.size() < minPartySize || party.size() > maxPartySize || inMap < minPartySize) {
                    next = false;
                }
                if (next) {
                    var em = cm.getEventManager("AKBoss");
                    //cm.worldMessage(cm.getChar().getName() + "   �������Ķ����������߳�101������ս����.��ȥ�Ŀ�ȥ��֯����ɣ�"); 
                    if (em == null) {
                        cm.sendOk("���������ڽ��赱�С�");
                    } else {
                        var prop = em.getProperty("playing");
                        if (prop == "false" || prop == null) {
                            em.startInstance(cm.getParty(), cm.getMap());
                            cm.dispose();
                            return;
                        } else {
                            cm.sendOk("��ȴ������������.����Ի�Ƶ�����룡");
                        }
                    }
                    cm.dispose();
                } else {
                    cm.sendOk("��ȷ��������Ա��\r\n\r\n#b1�����Ա����Ҫ" + minPartySize + "�����ϣ�" + maxPartySize + "�����¡�\r\n2�����Ա�ȼ�����Ҫ��" + minLevel + "�����ϡ�\r\n\r\n��#r�����Ȼ����, ��������,�ٵ�½ ������������ӡ�#k#b��");
                    cm.dispose();
                }
            } //�ж����
        } else if (status == 2) {
            if (selection == 0) {
                cm.warp(910000000);
            } else {
                cm.dispose();
            }
        }
    }
}