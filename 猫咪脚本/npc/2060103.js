/*
 ��о��������ƹ���������
 ���ʱ�䣺2014��8��10�� 15:31:48
 �ű����ܣ���������ս
 */
;



var time = new Date();

var hour = time.getHours(); //���Сʱ
var minute = time.getMinutes();//��÷���
var second = time.getSeconds(); //�����
var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status >= 0 && mode == 0) {
            cm.sendOk("��... �Ҳ��㻹��ʲô�������Ҫ���������ɣ�");
            cm.dispose();
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            if (cm.getMapId() == 923020100) {
                var em = cm.getEventManager("Limitless");
                if (em.getProperty("Gift") == "true") {
                    var ItemQuality = 0;
                    var EventDataBase = DatabaseConnection.getConnection().prepareStatement("SELECT ItemQuality FROM limitlessEvent where charid = " + cm.getPlayer().getId() + "").executeQuery();
                    while (EventDataBase.next()) {
                        ItemQuality = EventDataBase.getString("ItemQuality");
                    }

                    var UpDateData = DatabaseConnection.getConnection().prepareStatement("update limitlessEvent set ItemQuality=? where charid=" + cm.getPlayer().getId() + "")
                    UpDateData.setString(1, parseInt(ItemQuality) + 5);
                    UpDateData.executeUpdate();//����;
                    cm.gainItem(5062002, 5);
                    cm.playerMessage(-1, "[����ս��] ��ֹĿǰ�Ѿ���ȡ����" + ItemQuality + "���߼�����ħ����");
                    em.setProperty("Gift", "false");
                    cm.dispose();
                } else {
                    status = 1;
                    cm.sendYesNo("���������ս�뿪������");
                }
            } else {
                cm.sendSimple("#e#d   �޾���Ԩ֮�У�BOSS������Ϯ��ð�ռ��Ǵ������ǵ�����ȥ�������ǰɡ�Ϊ���������ð�յ������е�ǿ��������ڴ˶������������ɡ�#n#k\r\n\r\n#L0# #r���������ս������ս������#b\r\n#L1# ����鿴��ս���������\r\n#L2# ����鿴�������ܡ�")
            }
        } else if (status == 1) {
            if (selection == 0) {
                if ((hour == 13 && (minute >= 0 && minute <= 20)) || (hour == 20 && (minute >= 0 && minute <= 20))) {
                    if (cm.getParty() == null) { // û�����
                        cm.sendOk("����Ӻ����̸����");
                        cm.dispose();
                    } else if (!cm.isLeader()) { // ���Ƕӳ�
                        cm.sendOk("��жӳ�����̸����");
                        cm.dispose();
                    } else if (cm.getBossLog('���޸���') >= 15) {
                        cm.sendOk("�㲻�ܽ�ȥ�����޸���һ��ֻ�ܽ���15�Ρ�")
                        cm.dispose();
                    } else {
                        var party = cm.getParty().getMembers().size();
                        var mapId = cm.getPlayer().getMapId();
                        if (party != 1) {
                            cm.sendOk("�Բ���������սֻ��һ���˽�ȥ��\r\n�뿪��ֻ����һ���˵���ӡ�")
                            cm.dispose();
                        } else {
                            var em = cm.getEventManager("Limitless");
                            if (em == null) {
                                cm.sendOk("���������ڽ��赱�С�");
                            } else {
                                var EventDataBase = DatabaseConnection.getConnection().prepareStatement("SELECT * FROM limitlessEvent where charid = " + cm.getPlayer().getId() + "").executeQuery();
                                var insert = DatabaseConnection.getConnection().prepareStatement("INSERT INTO limitlessEvent(id,charid,times,ItemQuality,name) VALUES(?,?,?,?,?)"); // ��������
                                var prop = em.getProperty("started");
                                var x = 0;
                                if (/*prop == "false" || prop == null || */cm.getMap(923020100).getCharactersSize()== 0) {
                                    cm.setBossLog('���޸���');
                                    cm.worldSpouseMessage(0x15, "�����޹ؿ���ս������� " + cm.getChar().getName() + " �������ڵ�ȥ��ս����֮���޹ؿ�ȥ�ˡ�");
                                    while (EventDataBase.next()) {
                                        x++;
                                    }
                                    if (x == 0) {
                                        insert.setString(1, null); //�����¼ID
                                        insert.setString(2, cm.getPlayer().getId());
                                        insert.setString(3, 0);
                                        insert.setString(4, 0);
                                        insert.setString(5, cm.getPlayer().getName());
                                        insert.executeUpdate(); //����
                                    }
                                    em.startInstance(cm.getParty(), cm.getMap());
                                    cm.dispose();
                                    return;
                                } else {
                                    cm.sendOk("�Բ��𣬴�Ƶ���Ѿ����������޸��������ˡ�");
                                    cm.dispose();
                                }
                            }
                        }
                    }
                } else {
                    cm.sendOk("#d��������ǰʱ�䣺 #r" + hour + " ʱ " + minute + " �� " + second + " ��#k\r\n\r\n#e#d��ʾ#n#k��#r13����13��20����20����20��20�ֲſ��Խ��롣#k");
                    cm.dispose();
                }
            } else if (selection == 1) {//����
                Ranking();//����
                cm.dispose();
            } else if (selection == 2) {//��������
                //TODO 
                cm.sendOk("- #e#d�������ܣ�#k#n\r\n\r\n#b����ø����󣬵�ͼ����һ��BOSS�ȴ����������ǵ�һ�ؿ���BOSSѪ���Ƚ��٣�ֻ��10��HP�����������֮��ؿ����Ե�����ʽ��ǰһ��BOSSѪ���߳�50��HP���������㹻ҩˮ������ҩˮ��С�Ĳ�Ҫ�����ˡ��ڸ������������ #r@mob#b ���鿴����ʣ��HP�������ڸ����ﲻС�����������ʹ�� #r@fh#b �������Լ��Ӷ�ս������������BOSS�Ժ����10���϶ʱ����Զ�������һ�أ���ʱ�䵽��BOSS��δ�����򸱱�ʧ�ܡ�ÿͨ��ʮ������Ի��5���߼�����ħ��������#k\r\n\r\n#e#d�ؿ���ʾ��#n#k#r�������ȴﵽ200������峬��5�������ٽ��롣#k");
                cm.dispose();
            }
        } else if (status == 2) {
            cm.warp(923020000);
            cm.dispose();
        }
    }
}

function Ranking() {
    var Text = "�޾��������������£�(1~10����)\r\n\r\n#d"
    var RankDataBase = DatabaseConnection.getConnection().prepareStatement("SELECT * FROM limitlessEvent ORDER BY times DESC LIMIT 10").executeQuery();
    var i = 1;
    while (RankDataBase.next()) {
        Text += "#fUI/UIToolTip.img/Item/Equip/Star/Star# ����:" + i + "\r\n��ɫ��:" + RankDataBase.getString("name") + "\r\n����ͨ�ؿ�:" + RankDataBase.getString("times") + "\r\n���ħ����:" + RankDataBase.getString("ItemQuality") + "\r\n"
        Text += "~~~~~~~~~~~~~~~~~~~\r\n"
        i++;
    }
    cm.sendOk(Text);
}

function getItemQty() {
    var ItemQuality = 0;
    var EventDataBase = DatabaseConnection.getConnection().prepareStatement("SELECT ItemQuality FROM limitlessEvent where charid = " + cm.getPlayer().getId() + "").executeQuery();
    while (EventDataBase.next()) {
        ItemQuality = EventDataBase.getString("ItemQuality");
    }
    cm.playerMessage(-1, "[����ս��] ��ֹĿǰ�Ѿ���ȡ����" + ItemQuality + "���߼�����ħ����");
}

function getTimes() {
    var Times = 0;
    var EventDataBase = DatabaseConnection.getConnection().prepareStatement("SELECT times FROM limitlessEvent where charid = " + cm.getPlayer().getId() + "").executeQuery();
    while (EventDataBase.next()) {
        Times = EventDataBase.getString("times");
    }
    return Times;
}

function UpateTimes() {
    var UpDateData = DatabaseConnection.getConnection().prepareStatement("update limitlessEvent set times=? where charid = " + cm.getPlayer().getId() + "")
    UpDateData.setString(1, parseInt(getTimes()) + 1);
    UpDateData.executeUpdate();//����;
}
