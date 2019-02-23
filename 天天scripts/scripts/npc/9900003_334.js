var status = 0;
var n1 = "#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#", //Qͼ��
        n2 = "#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#", //С>
        n5 = "#fUI/UIWindow2.img/QuestGuide/Button/WorldMapQuestToggle/normal/0#", //����ͼ��
        n6 = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/startcondition#", //��ʼ����
        n7 = "#fUI/UIWindow2.img/QuestGuide/Button/WorldMapQuestToggle/normal/0#",
        n9 = "#fEffect/CharacterEff.img/1082565/2/0#", //С����
        n10 = "#fUI/Basic/BtHide3/mouseOver/0#", //��ɫ�����ͷ����
        n11 = "#fUI/UIWindow4/PQRank/rank/gold#"//�ʹ�1
var itemid, leftday, quantity, needpoints;
var ItemArray = Array(
        Array(1050286, 1, 1, 100),
        Array(3010145, 1, 2, 50),
        Array(1322005, 1, -1, 1)
        );//����id��������ʣ���������������

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        var text = "#e���������������� �һ����� ����������������#n\r\n"
        text += "\t\t" + n1 + "�ݵ����:" + getEventPoints(50, cm.getPlayer().getId()) + "\t" + n1 + "����ֵ:" + cm.getActivity() + "\r\n"
        text += "#L0# " + n9 + "#b���ֶһ�       #d[����-����-����-װ��]" + n9 + "\r\n\r\n"
        //text += "#L1# " + n10 + "#b�����һ�       #d[����-��Ʒ-װ��-����]" + n9 + "\r\n"
        cm.sendSimple(text);
    } else if (status == 1) {
        if (selection == 0) {
            var text = "������һ�������ݵ����Ϊ��" + getEventPoints(50, cm.getPlayer().getId()) + "\r\n#b"
            for (var i = 0; i < ItemArray.length; i++) {
                if (ItemArray[i][2] <= 0) {
                    text += "#L" + i + "# #i" + ItemArray[i][0] + "# #t" + ItemArray[i][0] + "# ʱ�ޣ� ����  �� ���֣�(" + ItemArray[i][3] + ")\r\n"
                } else {
                    text += "#L" + i + "# #i" + ItemArray[i][0] + "# #t" + ItemArray[i][0] + "# ʱ�ޣ�" + ItemArray[i][2] + "��  �� ���֣�(" + ItemArray[i][3] + ")\r\n"
                }
            }
            cm.sendSimple(text);
        }
    } else if (status == 2) {
        itemid = ItemArray[selection][0];
        leftday = ItemArray[selection][2];
        quantity = ItemArray[selection][1];
        needpoints = ItemArray[selection][3];
        if (leftday <= 0) {
            cm.sendYesNo("����ʹ��" + needpoints + "�������һ�#i" + itemid + "# #b#t" + itemid + "##k ��\r\n ʹ�����ޣ�#b����#k��");
        } else {
            cm.sendYesNo("����ʹ��" + needpoints + "�������һ�#i" + itemid + "# #b#t" + itemid + "##k �� \r\nʹ�����ޣ�#b" + leftday + "��#k��");
        }
    } else if (status == 3) {
        if (cm.getSpace(1) < 2 && cm.getSpace(2) < 2 && cm.getSpace(3) < 2 && cm.getSpace(4) < 2 && cm.getSpace(5) < 2) {
            cm.sendOk("��ȷ�������еı���������2�����ϵĿո�");
            cm.dispose();
            return;
        }
        if (getEventPoints(50, cm.getPlayer().getId()) >= needpoints) {
            setEventPoints(50, cm.getPlayer().getId(), -needpoints);
            if (leftday <= 0) {
                cm.gainItem(itemid, quantity);
            } else {
                cm.gainItemPeriod(itemid, quantity, leftday);
            }
            status = -1;
            cm.sendOk("�һ��ɹ��ˣ�");
        } else {
            status = -1;
            cm.sendOk("�Բ�����û���㹻�Ļ��ֶһ���");
        }
    }
}


function DelEventPoints(Eventid, charid) {
    var delectData = cm.getConnection().prepareStatement("delete from EventTimes where eventid = " + Eventid + " and cid = " + charid + "");
    delectData.executeUpdate(); //ɾ������
}

function getEventTimes(Eventid, charid) {//ͨ��eventid���õ����������Ĵ���
    var i = 0;
    var Times = cm.getConnection().prepareStatement("SELECT * FROM EventTimes where eventid = " + Eventid + " and cid = " + charid + "").executeQuery(); // ��ѯ����
    while (Times.next()) {
        i = Times.getString("times");//�õ�����
    }
    return parseInt(i);
}

function getEventPoints(Eventid, charid) {//ͨ��eventid���õ����������ĵ���
    var i = 0;
    var Times = cm.getConnection().prepareStatement("SELECT * FROM EventTimes where eventid = " + Eventid + " and cid = " + charid + "").executeQuery(); // ��ѯ����
    while (Times.next()) {
        i = Times.getString("points");//�õ�����
    }
    return parseInt(i);
}

function setEventPoints(Eventid, charid, points) {//ͨ��eventid��������������ĵ���
    var i = 0;
    var Times = cm.getConnection().prepareStatement("SELECT * FROM EventTimes where eventid = " + Eventid + " and cid = " + charid + "").executeQuery(); // ��ѯ����
    while (Times.next()) {
        i++;
    }
    if (i == 0) {//insert
        var insert = cm.getConnection().prepareStatement("INSERT INTO EventTimes VALUES(?,?,?,?,?,?,?)"); // ��������
        insert.setString(1, null); //�����¼ID
        insert.setString(2, Eventid); //����ID
        insert.setString(3, cm.getPlayer().getId());//cid
        insert.setString(4, cm.getPlayer().getName());//cname
        insert.setString(5, points);//points ����
        insert.setString(6, getEventTimes(1, charid));//times ����
        insert.setString(7, null);//
        insert.executeUpdate(); //����
    } else {//update
        var update = cm.getConnection().prepareStatement("update EventTimes set points = ? where eventid = " + Eventid + " and cid = " + charid + "");//����Ϊ��ʹ��
        update.setString(1, getEventPoints(Eventid, charid) + points);
        update.executeUpdate();
    }
}

function setEventTimes(Eventid, charid, times) {//ͨ��eventid�����ò��������Ĵ���
    var i = 0;
    var Times = cm.getConnection().prepareStatement("SELECT * FROM EventTimes where eventid = " + Eventid + " and cid = " + charid + "").executeQuery(); // ��ѯ����
    while (Times.next()) {
        i++;
    }
    if (i == 0) {//insert
        var insert = cm.getConnection().prepareStatement("INSERT INTO EventTimes VALUES(?,?,?,?,?,?,?)"); // ��������
        insert.setString(1, null); //�����¼ID
        insert.setString(2, Eventid); //����ID
        insert.setString(3, cm.getPlayer().getId());//cid
        insert.setString(4, cm.getPlayer().getName());//cname
        insert.setString(5, getEventPoints(2, charid));//points ����
        insert.setString(6, times);//times ����
        insert.setString(7, null);//
        insert.executeUpdate(); //����
    } else {//update
        var update = cm.getConnection().prepareStatement("update EventTimes set times = ? where eventid = " + Eventid + " and cid = " + charid + "");//����Ϊ��ʹ��
        update.setString(1, getEventTimes(Eventid, charid) + times);
        update.executeUpdate();
    }
}