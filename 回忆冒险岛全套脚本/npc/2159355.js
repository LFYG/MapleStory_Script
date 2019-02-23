var status = 0;
var minLevel = 200;
var maxLevel = 255;
var minPartySize = 2;
var maxPartySize = 6;
var maxPlay=2;
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
        if (cm.getPlayer().getClient().getChannel() == 4 || cm.getPlayer().getClient().getChannel() == 5) {
            if (status == 0) {
                cm.sendSimple("#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#�װ���#r#h ##k���ã�[����]�����˹:\r\n#fUI/UIWindow2.img/Quest/quest_info/summary_icon/startcondition#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0##r4��5�߿���ս��\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0##r�����ӳ����ҶԻ�ִ�С�\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#���Ա�ȼ�����Ҫ��" + minLevel + "�����ϡ�\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#���Ա����Ҫ" + minPartySize + "�����ϣ�" + maxPartySize + "�����¡�#b\r\n\r\n#fUI/UIWindow2.img/QuestGuide/Button/WorldMapQuestToggle/normal/0#\r\n#L0##fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#[ִ��]���������˹#l")
            } else if (status == 1) {
                if (selection == 0) {
                    if (cm.getParty() == null) { // û�����
                        cm.sendOk("����Ӻ����̸����");
                        cm.dispose();
                    } else if (!cm.isLeader()) { // ���Ƕӳ�
                        cm.sendOk("�ӳ��������������������˵����");
                        cm.dispose();
                    } else {
                        if (cm.getBossLog("�����˹") < 2) {
                            var party = cm.getParty().getMembers();
                            var mapId = cm.getPlayer().getMapId();
                            var next = true;
                            var levelValid = 0;
                            var inMap = 0;
                            var it = party.iterator();
							var idx = Array();
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
								idx.push(cPlayer.getId());
                            }
							if (getBossLog(idx)>=maxPlay) {
								cm.sendOk("������������Ѿ�������ø���2�Σ��޷��ٽ��룬���޳�����ҡ�");
								cm.dispose();
								return;
							}
                            if (party.size() < minPartySize || party.size() > maxPartySize || inMap < minPartySize) {
                                next = false;
                            }
                            if (next) {
                                var em = cm.getEventManager("ZChaosPQ1");
                                if (em == null) {
                                    cm.sendOk("���������ڽ��赱�С�");
                                } else {
                                    var prop = em.getProperty("state");
                                    if (prop == "0" || prop == null) {
                                        cm.setPartyBossLog("�����˹");
                                        em.startInstance(cm.getParty(), cm.getMap(), 198);
										cm.worldSpouseMessage(0x17,"�Ǩ~�~�~�T�� ��"+ cm.getChar().getName() +"������Ta�Ķ��飬����Ź��<�����˹> �r(�s���t)�q  ");
                                        cm.dispose();
                                        return;
                                    } else {
                                        cm.sendOk("[����]�����˹�����Ѿ������ˣ����Եȣ�");
                                    }
                                }
                                cm.dispose();
                            } else {
                                cm.sendOk("��ȷ��������Ա��\r\n\r\n#b1�����Ա����Ҫ" + minPartySize + "�����ϣ�" + maxPartySize + "�����¡�\r\n2�����Ա�ȼ�����Ҫ��" + minLevel + "�����ϡ�\r\n\r\n��#r�����Ȼ����, ��������,�ٵ�½ ������������ӡ�#k#b��");
                                cm.dispose();
                            }
                        } else {
                            cm.sendOk("�Բ��𣬸ý�ɫÿ��ֻ�ܽ���2�Ρ�");
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
            cm.sendOk("ֻ����4Ƶ���ſ��Բμ�[����]�����˹��ս��");
        }
    }
}
function getBossLog(idx) {
	var idStr ="";
	for(var key in idx) {
		if (key==0)
			idStr+=idx[key];
		else
			idStr+=","+idx[key];
	}
	var sql = "SELECT max(count) as maxcount FROM bosslog where bossid = '�����˹' and characterid in (" + idStr + ") and to_days(time) = to_days(now());";
	//java.lang.System.out.println(sql);
	var conn = cm.getConnection();
	var pstmt = conn.prepareStatement(sql);
	bosslogSql = pstmt.executeQuery();
    if(bosslogSql.next()) {
    	return bosslogSql.getString("maxcount")*1;
    }
	bosslogSql.close();
	pstmt.close();
	//conn.close();
	return 0;
}