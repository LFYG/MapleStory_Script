var status = 0;
var minLevel = 120;
var maxLevel = 255;
var minPartySize = 1;
var maxPartySize = 1;
var shen = 1000;

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
	if (cm.getPlayer().getClient().getChannel() == 1) {
        if (status == 0) {
            cm.sendSimple("#e<����������������>#n\r\n���𣬸�λʮ�����ˣ��������ˡ�ð�յ���������ط��������µ�ʱ���š�Σ�յ���������ӿ�������񼴽��в�Ѱ�������鷢�������������ս�Ļ�������#b������ӵĶӳ�#k������˵����\r\n#b#L0#����ִ�е�������#l\r\n#L1#������һ��˵����#l")
        } else if (status == 1) {
            if (selection == 0) {
                if (cm.getParty() == null) { // û�����
                    cm.sendOk("����Ӻ����̸����");
                    cm.dispose();
                } else if (!cm.isLeader()) { // ���Ƕӳ�
                    cm.sendOk("�ӳ��������������������˵����");
                    cm.dispose();
                    } else  {
		if (cm.getBossLog("��������") < shen){
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
                        var em = cm.getEventManager("ShenmlyBoss");
                        if (em == null) {
                            cm.sendOk("���������ڽ��赱�С�");
                        } else {
                            var prop = em.getProperty("state");
                            if (prop.equals("0") || prop == null) {
                                em.startInstance(cm.getParty(), cm.getMap(), 120);
		    cm.setBossLog("��������");
                                cm.dispose();
                                return;
                            } else {
                                cm.sendOk("�������������Ѿ������ˣ����Եȣ�");
                            }
                        }
                        cm.dispose();
                    } else {
                        cm.sendOk("��ȷ��������Ա��\r\n\r\n#b1�����Ա����Ҫ" + minPartySize + "�����ϣ�" + maxPartySize + "�����¡�\r\n2�����Ա�ȼ�����Ҫ��" + minLevel + "�����ϡ�\r\n\r\n��#r�����Ȼ����, ��������,�ٵ�½ ������������ӡ�#k#b��");
                        cm.dispose();
                    }
                } else {
			cm.sendOk("�Բ���һ��ֻ�ܽ���1000�Ρ�");
			cm.dispose();
			}
		} //�ж����
            } else if (selection == 1) {
                cm.sendOk("��ȷ��������Ա��\r\n\r\n#b1�����Ա����Ҫ" + minPartySize + "�����ϣ�" + maxPartySize + "�����¡�\r\n2�����Ա�ȼ�����Ҫ��" + minLevel + "�����ϡ�\r\n\r\n��#r�����Ȼ����, ��������,�ٵ�½ ������������ӡ�#k#b��");
                cm.dispose();
            }
        }
		 } else {
        		cm.dispose();
        		cm.sendOk("ֻ����1Ƶ���ſ��Բμ���������");
	}
    }
}