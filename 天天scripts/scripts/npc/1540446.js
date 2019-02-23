/*
 * ˹��11�س�������
 * �˲����� ����ð�յ�����������
 * ��ϵQQ��537050710
 * ��ӭ���Ƹ��ֽű�
 */

var status = 0;
var minLevel = 200;
var maxLevel = 255;
var minPartySize = 1;
var maxPartySize = 6;
var maxPlay = 1;//ÿ���ܽ��е������������
var MapList = Array(
        350050100, //��ɫ���ù��� - ����ͨ��1 10����
        350050200, //��ɫ���ù��� - ����ͨ��2 10����
        350050300, //���ݣ�֮����ֹ�����������ֱ�ӽ�����һ�� -162,-25|183,-25   |8250014
        350051000, //���ݵ��� ���� D1 Z05 001
        350051050, //�����ͼ��������������һ�� �ο����� -66,61|314,61|634,61|1025,61|1349,61|950,-153
        350051100, //��������ȡ֤����4009159��4009160 ��50�������ڶ������Ϳڣ��жϡ�
        350051150, //������������ص�350051100��֮��bh_1100_check1.js �ж��Ƿ�350051150 û���ˣ�û�ֵĻ�����ǰ����������һ����ͼ
        350051200, //�����������֮����1540752��������ڣ�֮��NPC��ʧ������ǰ����֮�������һ����ͼ
        350051250, //���ǹܵ���֮��ֱ���Ƴ��ϰ�������һ����ͼ
        350060000, //�����ͼ��������������һ��
        350060160//BOSS��ͼ
        );

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
            if (cm.getMap().getId() == 350050000 || cm.getMap().getId() == 910000000)
            {
                cm.sendSimple("#e<˹�ڸ���>#n\r\n\r\n#d����Ҫ������ѽ�����ս˹��BOSS���켯��? ����׼��������? ���׼�����ˣ��������ǵĶӳ�����̸������\r\n\r\n#b#L0#����ִ��<˹��>�������#l\r\n#L1#�����˽�һ�¸ø���˵����#l\r\n ")
            } else {
                cm.sendSimple("���������ս�뿪������#b\r\n#L99# �뿪���");
            }
        } else if (status == 1) {
            if (selection == 99) {
                cm.warp(910000000);
                cm.dispose();
            } else if (selection == 0) {
                if (cm.getBossLog("˹��") >= maxPlay) {
                    cm.sendOk("�������Ѿ�������" + maxPlay + "�Σ������ٲ���ø����ˣ����������~");
                    cm.dispose();
                    return;
                }
                if (cm.getParty() == null) { // û�����
                    cm.sendOk("����Ӻ����̸����");
                    cm.dispose();
                } else if (!cm.isLeader()) { // ���Ƕӳ�
                    cm.sendOk("��жӳ�����̸����");
                    cm.dispose();
                } else {
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
                    if (getBossLog(idx) >= maxPlay) {
                        cm.sendOk("������������Ѿ�������ø���" + maxPlay + "�Σ��޷��ٽ��룬���߳�����ҡ�");
                        cm.dispose();
                        return;
                    }
                    if (party.size() < minPartySize || party.size() > maxPartySize || inMap < minPartySize) {
                        next = false;
                    }
                    if (next) {
                        var em = cm.getEventManager("siwu");
                        //cm.worldMessage(cm.getChar().getName() + "   �������Ķ����������߳�101������ս����.��ȥ�Ŀ�ȥ��֯����ɣ�");
                        if (em == null) {
                            cm.sendOk("Ŀǰ��������ø������ȴ����š���");
                        } else {
                            var pass = true;
                            for (var keys in MapList) {
                                if (cm.getPlayerCount(MapList[keys]) != 0) {
                                    pass = false;
                                    break;
                                }
                            }
                            if (pass) {
                                em.startInstance(cm.getParty(), cm.getMap());
                                cm.setPartyBossLog("˹��");
                                cm.spouseMessage(0x25, "" + cm.getPlayer().getName() + " ���������Ķ���ȥ��ս�ڰ�֮��˹���ˣ����һ��Ϊ��������");
                                cm.dispose();
                                return;
                            } else {
                                cm.sendOk("Ŀǰ��Ƶ���Ѿ���������ս���뻻��Ƶ�����½��롣");
                                cm.dispose();
                            }
                        }
                        cm.dispose();
                    } else {
                        cm.sendOk("��ȷ��������Ա��\r\n\r\n#b1�����Ա����Ҫ" + minPartySize + "�����ϣ�" + maxPartySize + "�����¡�\r\n2�����Ա�ȼ�����Ҫ��" + minLevel + "�����ϡ�\r\n\r\n��#r�����Ȼ����, ��������,�ٵ�½ ������������ӡ�#k#b��");
                        cm.dispose();
                    }
                } //�ж����
            } else if (selection == 1) {
                cm.sendOk("�����ܹ��оŸ��ؿ���ÿ��ɽ���һ�Σ�����������㹻���Ǻ����������ġ��������ؿ��ľ��ܿ���#e#b���ر���#n#k�������д�˵�е�#b����ϵ��װ��#k�����и�����������Ӻ�װ�����ȵȺܶ�ϡ����ƷӴ��\r\n���븱��ǰ����ȷ��������Ա��\r\n\r\n#b1�����Ա����Ҫ" + minPartySize + "�����ϣ�" + maxPartySize + "�����¡�\r\n2�����Ա�ȼ�����Ҫ��" + minLevel + "�����ϡ�\r\n\r\n��#r�����Ȼ����, ��������,�ٵ�½ ������������ӡ�#k#b��");
                cm.dispose();
            }
            /*  } else if (status == 2) {
             if (cm.getPlayer().getCSPoints(1) >= 50000) {
             cm.gainNX(1,-50000);
             cm.resetBossLog("ɭ����");
             cm.sendOk("���óɹ���");
             cm.dispose();
             } else {
             cm.sendOk("��ĵ�������޷����á�");
             cm.dispose();
             }*/
        }
    }
}


function getBossLog(idx) {
    // var idStr = "";
    // for (var key in idx) {
    //     if (key == 0)
    //         idStr += idx[key];
    //     else
    //         idStr += "," + idx[key];
    // }
    // var sql = "SELECT max(count) as maxcount FROM bosslog where bossid = '˹��' and characterid in (" + idStr + ") and to_days(time) = to_days(now());";
    // //java.lang.System.out.println(sql);
    // var conn = cm.getConnection();
    // var pstmt = .prepareStatement(sql);
    // bosslogSql = pstmt.executeQuery();
    // if (bosslogSql.next()) {
    //     return bosslogSql.getString("maxcount") * 1;
    // }
    // bosslogSql.close();
    // pstmt.close();
    // //conn.close();
    return 0;
}
