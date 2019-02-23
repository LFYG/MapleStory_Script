importPackage(Packages.tools);
importPackage(Packages.server);
importPackage(Packages.constants);


var status = 0;
var db;
var choose = -1;
var Job = new Array(

new nature("M-Z01", "��������ɱ", 999, 8140000, "mob1", 4000054, "���� 1000 ��.", "", ""), 
new nature("L-ZV001", "ˮ��ˮ�飬��ɫ����ɫ��", 999, 1210103, "mob2", 4000037, "��� 5 ��� \r\n���� 1000 ��", "", ""), 
new nature("M-Z02", "���岶ɱ�ƻ�����������", 1299, 8190003, "mob3", 4000274, "���� 1000 ��", "", ""), 
new nature("TM-01", "��ճ�Ѩ��ͨ��1�������ά��", 299, 8140001, "mob4", 4000238, "��� 2 ���\r\n���� 500 ��", "", ""), 
new nature("TM-02", "��ճ�Ѩ��ͨ��2��Ѫ�ȹ�ά��", 499, 8140002, "mob5", 4000239, "��� 2.5 ���\r\n���� 700 ��", "mob4", "TM-01,��ճ�Ѩ��ͨ��1�������ά��"), 
new nature("TM-03", "��ճ�Ѩ��ͨ��3����ħ����", 699, 8140111, "mob6", 4000242, "��� 3 ���\r\n���� 1000 ��", "mob5", "TM-02,��ճ�Ѩ��ͨ��2��Ѫ�ȹ�ά��"), 
new nature("L-ZV002", "���ģ��ͽ����˶���<����>��", 1999, 9600021, "mob7", 4000404, "���� 1000 ��\r\n#v1032139# ����:(800).", "mob6", "TM-03,��ճ�Ѩ��ͨ��3����ħ����"), 
new nature("M-Z03-01", "�ϻ���ɱ�ƻ���С����", 399, 9800032, "mob8", 4000170, "���� 300.", "", ""), 
new nature("M-Z03-02", "�ϻ���ɱ�ƻ���������", 999, 9800034, "mob9", 4000171, "���� 500.\r\n#v1142153# ����:(999).", "mob8", "M-Z03-01,�ϻ���ɱ�ƻ���С����"), 
new nature("B-01", "[����]��ʬĢ����!", 9, 9300426, "mob10", 4000176, "��� 1 ��\r\n���� 100 ��", "", ""), 
new nature("B-02", "[����]������!", 19, 9600031, "mob11", 4000235, "��� 2 ��\r\n���� 300 ��", "mob10", "", "[����]��ʬĢ����!"), 
new nature("B-03", "[����]Ƥ��ū˹!", 1, 9500363, "mob12", 4000175, "#v1122148# ����:(1500).\r\n���� 500 ��", "mob11", "[����]������!")
);


function start() {
    status = -1;
    db = new dataBaseOperate();
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status == 0 && mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1) status++;
        else status--;
        if (status == 0) {
            var str = "";
            for (var i = 0; i < Job.length; i++) {
                str += "#L" + i + "##b����" + Job[i].code + "," + Job[i].name + "#r( " + db.CalculationOfcompletion(Job[i].mobIdSql, Job[i].maxQuanlitys, Job[i].needSqlFirst) + " )#l" + "\r\n";
            }
            cm.sendSimple("#b#e<��ģʽ>#n#k\r\n����׷ɱȫð�յ�������ͽ����ˣ�Ϊ��Ǯ������Ҫ��İ�����" + "#b���������������ѡ�������ͬʱ����N�����񣬵��ǲ��ָ߼�������Ҫ���ǰ���������ܽ���ร�" + "#rԽ�߼��������Ҹ�����ͽ�Ҳ��Խ�࣡\r\n" +
            //"#b��ע�⣬�������񶼻���ÿ������12�㱻��գ���ץ��ʱ�䣡\r\n"+
            "#e<�����б�>#n\r\n" + str + "");
        } else if (status == 1) {
            choose = selection;
            var firstCode = "";
            if (Job[choose].needSqlFirst != "") {
                firstCode += "#d>>ǰ������>>  ����" + Job[choose].needSqlFirstCode;
            }
            cm.sendSimple("��Ҫ��ɸ�����������Ҫ��ȥ����#r" + Job[choose].maxQuanlitys + //��Ҫ����������
            "ֻ" + //���ﵥλ
            "#o" + Job[choose].mobId + "#" + �� //��������
            "#k,Ȼ���ջع��ﱦ��#b" + "#z" + Job[choose].mobNeedItem + "# " + //��Ҫ���������Ʒ����
            Job[choose].maxQuanlitys + "����Ta��������:#v" + Job[choose].mobNeedItem + "# " + //��Ҫ����������
            "\r\n" + "��ǰ����:" + "#r" + cm.itemQuantity(Job[choose].mobNeedItem) + "#b�������Ͻ�" + "\r\n" + "#d>>�������>>  #e#r" + db.CalculationOfcompletion(Job[choose].mobIdSql, Job[choose].maxQuanlitys, Job[choose].needSqlFirst) + "#n\r\n" + firstCode + "#n\r\n" + "#L0##b����#l\r\n" + "#L1##r��ȡ�ͽ�#l\r\n" + "#L2##b�鿴���ͽ���#l\r\n"

            );
        } else if (status == 2) {
            if (selection < 2) {
                //ȷ���Ƿ����ʸ�
                if (Job[choose].needSqlFirst != "" && db.getMobQuantitys(Job[choose].needSqlFirst) >= 0) {
                    cm.sendOk("��Ǹ������Ҫ�����ǰ������:#b\r\n" + Job[choose].needSqlFirstCode);
                    cm.dispose();
                    return;
                }
            }
            if (selection == 0) {
                //�Ͻ���Ʒ
                if (db.getMobQuantitys(Job[choose].mobIdSql) >= Job[choose].maxQuanlitys) {
                    cm.sendOk("��Ǹ�������������Ѿ�#b#e���#n#k�ˣ�����ȡ�ͽ�!");
                    cm.dispose();
                    return;
                }
                if (db.getMobQuantitys(Job[choose].mobIdSql) < 0) {
                    cm.sendOk("��Ǹ�������������Ѿ�#b#e���#n#k��,�����������ظ�!");
                    cm.dispose();
                    return;
                }
                cm.sendGetText("��ǰ����:" + "#r" + cm.itemQuantity(Job[choose].mobNeedItem) + "#k�������Ͻ�." + "\r\n" + "���������,��ǰ#d�������#k>> #e#r(" + db.CalculationOfcompletion(Job[choose].mobIdSql, Job[choose].maxQuanlitys, Job[choose].needSqlFirst) + ")");
            } else if (selection == 1) {
                //��ȡ�ͽ�
                if (db.getMobQuantitys(Job[choose].mobIdSql) >= Job[choose].maxQuanlitys) {
                    gainReword(choose);
                } else if (db.getMobQuantitys(Job[choose].mobIdSql) < 0) {
                    cm.sendOk("��Ǹ�������������Ѿ�#b#e���#n#k��,�����������ظ�!");
                    cm.dispose();
                    return;
                } else {
                    cm.sendOk("���ڻ�������ȡร�������ôһ���.");
                }
                cm.dispose();
            } else if (selection == 2) {
                //�鿴���ͽ���
                cm.sendOk("#e#b<����-" + Job[choose].code + ">#n#k \r\n\r\n" + Job[choose].reword + "\r\n\r\n\t\t\t\t");
                cm.dispose();
            }
        } else if (status == 3) {
            var input_num = parseInt(cm.getText());
            if (isNaN(input_num)) {
                cm.sendOk("���������֣�");
                cm.dispose();
                return;
            }
            if (cm.haveItem(Job[choose].mobNeedItem, input_num)) {
                cm.gainItem(Job[choose].mobNeedItem, -input_num);
                db.gainMobQuantitys(Job[choose].mobIdSql, input_num);
                cm.sendOk("�Ͻ��ɹ��������Ŭ����");
            } else {
                cm.sendOk("�������");
            }
            cm.dispose();
        }

    } //mode
} //function

function nature(code, name, mq, mobid, sql, item, wd, nd, ndcd) {
    this.code = code;
    this.name = name;
    this.maxQuanlitys = mq;
    this.mobId = mobid;
    this.mobIdSql = sql;
    this.mobNeedItem = item;
    this.reword = wd;
    //��Ҫǰ������
    this.needSqlFirst = nd;
    //��Ҫǰ������code
    this.needSqlFirstCode = ndcd;
}

function gainReword(choose) {
    /*
		player.GainMoney(-��輼��[choice][2]); 
		cm.gainNX(������[choice][1]);
		giveItem(id,shuxing,txt)
		cm.gainItem();
		cm.getPlayer().setDojoPoints(cm.getPlayer().getDojoPoints() -cost);
	*/
    switch (choose) {
    case 0:
        cm.addMaplewing("maple", 100);
        break;
    case 1:
        cm.gainNX(50000);
        cm.addMaplewing("maple", 100);
        break;
    case 2:
        cm.addMaplewing("maple", 100);
        break;
    case 3:
        cm.gainNX(20000);
        var add = 500;
        cm.addMaplewing("maple", 100+add);
        break;
    case 4:
        cm.gainNX(25000);
        var add = 700;
        cm.addMaplewing("maple", 100+add);
        break;
    case 5:
        cm.gainNX(30000);
        var add = 1000;
        cm.addMaplewing("maple", 100+add);
        break;
    case 6:
        giveItem(1032139, 2000, "���ͽ����ˡ����ԡ������еõ���");
        var add = 1000;
        cm.addMaplewing("maple", 100+add);
        break;
    case 7:
        var add = 300;
        cm.addMaplewing("maple", 100+add);
        break;
    case 8:
        giveItem(1142153, 999, "���ͽ����ˡ��ϻ���ɱ�ƻ����������������еõ���");
        var add = 500;
        cm.addMaplewing("maple", 100+add);
        break;
    case 9:
        cm.gainNX(10000);
        var add = 100;
        cm.addMaplewing("maple", 100+add);
        break;
    case 10:
        cm.gainNX(20000);
        var add = 300;
        cm.addMaplewing("maple", 100+add);
        break;
    case 11:
        giveItem(1122148, 1500, "���ͽ����ˡ�[����]Ƥ��ū˹!�������еõ���");
        var add = 500;
        cm.addMaplewing("maple", 100+add);
        break;
    default:
        break;
    }
    db.gainMobQuantitys(Job[choose].mobIdSql, -(db.getMobQuantitys(Job[choose].mobIdSql) + 1));
    cm.sendOk("��ϲ����������񣬻���˽�����");
    cm.getC().getChannelServer().broadcastPacket(MaplePacketCreator.serverNotice(0x13, cm.getC().getChannel(), "[�ͽ�����]" + " : " + "��ϲ\"" + cm.getChar().getName() + "\"����˴���:" + Job[choose].code + "<" + Job[choose].name + ">����"));
}

function giveItem(id, shuxing, txt) {
    var ii = MapleItemInformationProvider.getInstance();
    var type = GameConstants.getInventoryType(id);
    var toDrop = ii.randomizeStats(ii.getEquipById(id)).copy(); // ����һ��Equip��
    //toDrop.setLocked(1);
    toDrop.setLevel(0);
    toDrop.setStr(shuxing);
    toDrop.setDex(shuxing);
    toDrop.setInt(shuxing);
    toDrop.setLuk(shuxing);
    toDrop.setHp(shuxing);
    toDrop.setMp(shuxing);
    toDrop.setMatk(shuxing);
    toDrop.setWatk(shuxing);
    cm.getPlayer().getInventory(type).addItem(toDrop); //�����װ���������
    cm.getC().getSession().write(MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±�
    cm.getC().getChannelServer().broadcastPacket(MaplePacketCreator.serverNotice(0x13, cm.getC().getChannel(), "���ͽ�����" + " : " + "��ϲ" + cm.getChar().getName() + ",����ͽ������ý���."));
}

var dataBaseOperate = function() {
    this.db = Packages.database.DatabaseConnection.getConnection();
    /* ��ȡֵ*/
    this.getMobQuantitys = function(mobid) {
        var ps = this.db.prepareStatement("SELECT * FROM kill_mob WHERE character_id = ?");
        ps.setInt(1, cm.getPlayer().getId());
        var rs = ps.executeQuery();
        if (!rs.next()) {
            this.addNewCharacter(); //����������
            return 0;
        }
        var quantitys = rs.getInt(mobid);
        rs.close();
        ps.close();
        return quantitys;
    }
    /* ����������*/
    this.addNewCharacter = function() {
        var ps = this.db.prepareStatement("INSERT INTO kill_mob (character_id) VALUES (?)");
        ps.setInt(1, cm.getPlayer().getId());
        ps.executeUpdate();
        ps.close();
    }
    /* ���ӹ�������*/
    this.gainMobQuantitys = function(mobid, quantity) {
        var ps = this.db.prepareStatement("UPDATE kill_mob SET " + mobid + " = ? WHERE character_id = ?");
        ps.setInt(1, this.getMobQuantitys(mobid) + quantity);
        ps.setInt(2, cm.getPlayer().getId());
        ps.executeUpdate();
        ps.close();
    }
    /* ����������*/
    this.CalculationOfcompletion = function(mobid, max, needSqlFirst) {
        if (needSqlFirst != "" && this.getMobQuantitys(needSqlFirst) >= 0) {
            return "#k!ǰ������#r";
        }
        if (this.getMobQuantitys(mobid) >= max) {
            return "#d���ͽ�#r";
        } else if (this.getMobQuantitys(mobid) < 0) {
            return "�����";
        } else if (this.getMobQuantitys(mobid) == 0) {
            return "�ɿ�ʼ";
        } else {
            return this.getMobQuantitys(mobid) + " / " + max;
        }
    }

}