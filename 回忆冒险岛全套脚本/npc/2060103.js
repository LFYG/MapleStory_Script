/*
 ��о��������ƹ���������
 ���ʱ�䣺2014��8��10�� 15:31:48
 �ű����ܣ���������ս
 */




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
					var conn = cm.getConnection();
					var pstmt = conn.prepareStatement("SELECT ItemQuality FROM limitlessEvent where charid = " + cm.getPlayer().getId() + "");
                    var EventDataBase = pstmt.executeQuery();
                    while (EventDataBase.next()) {
                        ItemQuality = EventDataBase.getString("ItemQuality");
                    }
					EventDataBase.close();
					pstmt.close();
					//conn.close();
                    var UpDateData = cm.getConnection().prepareStatement("update limitlessEvent set ItemQuality=? where charid=" + cm.getPlayer().getId() + "")
                    UpDateData.setString(1, parseInt(ItemQuality) + 5);
                    UpDateData.executeUpdate();//����;
					var currentTimes = parseInt(em.getProperty("Times"));
					var giftTimes = currentTimes-1;
					var itemid = 5062000
					var itemQuantity = 1;
					gainGift(giftTimes);                 
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
				var cal = java.util.Calendar.getInstance();
				var weekday = cal.get(java.util.Calendar.DAY_OF_WEEK);
				//hour = cal.get(java.util.Calendar.HOUR_OF_DAY);
				//refreshDates(cal);
				//if (weekday == 1 || weekday == 7) {
                if (true)//)weekday == 1 || weekday == 7) {//(hour == 13 && (minute >= 0 && minute <= 20)) || (hour == 20 && (minute >= 0 && minute <= 20))) {
                    if (cm.getParty() == null) { // û�����
                        cm.sendOk("����Ӻ����̸����");
                        cm.dispose();
                    } else if (!cm.isLeader()) { // ���Ƕӳ�
                        cm.sendOk("��жӳ�����̸����");
                        cm.dispose();
                    /*
					} else if (cm.getBossLogAcc('���޸���') >= 1) {
                        cm.sendOk("�㲻�ܽ�ȥ�����˺�ÿ��ֻ�ܽ���һ�Ρ�")
                        cm.dispose();
					*/
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
								var conn = cm.getConnection();
								var pstmt = conn.prepareStatement("SELECT * FROM limitlessEvent where charid = " + cm.getPlayer().getId() + "");
								var EventDataBase = pstmt.executeQuery();
                                var insert = conn.prepareStatement("INSERT INTO limitlessEvent(id,charid,times,ItemQuality,name) VALUES(?,?,?,?,?)"); // ��������
                                var prop = em.getProperty("started");
                                var x = 0;
                                if (/*prop == "false" || prop == null || */cm.getMap(923020100).getCharactersSize()== 0) {
                                    cm.setBossLogAcc('���޸���');
                                    cm.worldSpouseMessage(0x15, "�����޹ؿ���ս������� " + cm.getChar().getName() + " �������ڵ�ȥ��ս����֮���޹ؿ�ȥ�ˡ�");
                                    while (EventDataBase.next()) {
                                        x++;
                                    }
									EventDataBase.close();
									pstmt.close();
									//conn.close();
                                    if (x == 0) {
                                        insert.setString(1, null); //�����¼ID
                                        insert.setString(2, cm.getPlayer().getId());
                                        insert.setString(3, 0);
                                        insert.setString(4, 0);
                                        insert.setString(5, cm.getPlayer().getName());
                                        insert.executeUpdate(); //����
										insert.close();
                                    } else {
										//���ù���
										var update = conn.prepareStatement("UPDATE limitlessEvent set times = 0, ItemQuality = 0 where charid = " + cm.getPlayer().getId() + "");
										update.executeUpdate();
										update.close();
									}
									//conn.close();
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
                
            } else if (selection == 1) {//����
                Ranking();//����
                cm.dispose();
            } else if (selection == 2) {//��������
                //TODO 
                cm.sendOk("- #e#d�������ܣ�#k#n\r\n\r\n#b����ø����󣬵�ͼ����һ��BOSS�ȴ����������ǵ�һ�ؿ���BOSSѪ���Ƚ��٣�ֻ��10��HP�����������֮��ؿ���BOSS�������ǿ���������㹻ҩˮ������ҩˮ��С�Ĳ�Ҫ�����ˡ��ڸ������������ #r@mob#b ���鿴����ʣ��HP�������ڸ����ﲻС�����������ʹ�� #r@fh#b �������Լ��Ӷ�ս������������BOSS�Ժ����10���϶ʱ����Զ�������һ�أ���ʱ�䵽��BOSS��δ�����򸱱�ʧ�ܡ�ÿͨ��ʮ�㶼���Ի�ò�ͬ�ķ������#r100��#k������100�أ�ÿ10�ؿ��Ի��200������һ��м���ֱ�ӻ��#b140���߻��������ӡ���ӡ������ᡢ���ǡ������������#k�ȵȡ�#k\r\n\r\n#e#d�ؿ���ʾ��#n#k#r�������ȴﵽ200������峬��5�������ٽ��롣#k");
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
	var conn = cm.getConnection();
	var pstmt = conn.prepareStatement("SELECT * FROM limitlessEvent ORDER BY times DESC LIMIT 10");
    var RankDataBase = pstmt.executeQuery();
    var i = 1;
    while (RankDataBase.next()) {
        Text += "#fUI/UIToolTip.img/Item/Equip/Star/Star# ����:" + i + "\r\n��ɫ��:" + RankDataBase.getString("name") + "\r\n����ͨ�ؿ�:" + RankDataBase.getString("times") + "\r\n���ħ����:" + RankDataBase.getString("ItemQuality") + "\r\n"
        Text += "~~~~~~~~~~~~~~~~~~~\r\n"
        i++;
    }
	RankDataBase.close();
	pstmt.close();
	//conn.close();
    cm.sendOk(Text);
}

function getItemQty() {
    var ItemQuality = 0;
	var conn = cm.getConnection();
	var pstmt = conn.prepareStatement("SELECT ItemQuality FROM limitlessEvent where charid = " + cm.getPlayer().getId() + "");
    var EventDataBase = pstmt.executeQuery();
    while (EventDataBase.next()) {
        ItemQuality = EventDataBase.getString("ItemQuality");
    }
	EventDataBase.close();
	pstmt.close();
	//conn.close();
    cm.playerMessage(-1, "[����ս��] ��ֹĿǰ�Ѿ���ȡ����" + ItemQuality + "���߼�����ħ����");
}

function getTimes() {
    var Times = 0;
	var conn = cm.getConnection();
	var pstmt = conn.prepareStatement("SELECT times FROM limitlessEvent where charid = " + cm.getPlayer().getId() + "");
    var EventDataBase = pstmt.executeQuery();
    while (EventDataBase.next()) {
        Times = EventDataBase.getString("times");
    }
	EventDataBase.close();
	pstmt.close();
	//conn.close();
    return Times;
}

function UpateTimes() {
	var conn = cm.getConnection();
	//var pstmt = conn.prepareStatement(
    var UpDateData = conn.prepareStatement("update limitlessEvent set times=? where charid = " + cm.getPlayer().getId() + "");
    UpDateData.setString(1, parseInt(getTimes()) + 1);
    UpDateData.executeUpdate();//����;
	UpDateData.close();
	//conn.close();
}

function gainGift(times) {
	var itemid = -1;
	var itemQuantity = 1;
	switch(times) {
		case 10:
			itemid = 4310057;
			itemQuantity = 80;
		break;
		case 20:
			itemid = 4310129;
			itemQuantity = 40;
		break;
		case 30:
			itemid = 5062000;
			itemQuantity = 1;
		break;
		case 40:
			itemid = 5062002;
			itemQuantity = 1;
		break;
		case 50:
			itemid = 5062500;
			itemQuantity = 1;
		break;
		case 60:
			itemid = 2340000;
			itemQuantity = 1;
		break;
		case 70:
			itemid = 5064000;
			itemQuantity = 1;
		break;
		case 80:
			itemid = 5062002;
			itemQuantity = 2;
		break;
		case 90:
			itemid = 5062500;
			itemQuantity = 2;
		break;
		case 100:
			itemid = 2430481;
			itemQuantity = 15;
		break;
		case 110:
			itemid = 2430915;
			itemQuantity = 15;
		break;
		case 120:
			itemid = 5062009;
			itemQuantity = 2;
		break;
		case 130:
			itemid = 5062010;
			itemQuantity = 2;
		break;
		case 140:
			itemid = 5064000;
			itemQuantity = 2;
		break;
		case 150:
			itemid = 5064003;
			itemQuantity = 1;
		break;
	}
	cm.gainItem(itemid, itemQuantity);
	cm.playerMessage(-1, "[����ս��] ��ͻ�Ƶ�"+(times)+"�㣬���� <"+cm.getItemName(itemid)+"> x "+itemQuantity+"��");
	//100�����⽱��
	if (times>=100) {
		cm.gainNX(200);
		var randomNum = Math.floor(Math.random()*1000);
		var addItemQuantity = 2;
		var addItemid = -1;
		if (randomNum >= 100 && randomNum <= 400) {
			//30%;
			var itemList = Array(5062000, 5062002, 5064000,2340000, 5062010, 2049752);
			addItemQuantity = 1;
			addItemid = itemList[Math.floor(Math.random()*itemList.length)];		
		} else if (randomNum >= 10 && randomNum <= 20) {
			//1%
			if (cm.getBossLog('���������')==0) {
				cm.setBossLog('���������');
				addItemid = 2610001;
				addItemQuantity = 1;
			}
		} else if (randomNum >= 500 && randomNum <= 600) {
			//10%
			var itemList = Array(2431945,2431944);
			addItemQuantity = 1;
			addItemid = itemList[Math.floor(Math.random()*itemList.length)];	
		} else if (randomNum >=950 && randomNum<=1000) {
			//5%
			var itemList = Array(2049135, 2049136, 2049137);
			addItemQuantity = 1;
			addItemid = itemList[Math.floor(Math.random()*itemList.length)];			
		} else if (randomNum >=800 && randomNum <= 900) {
			//10%
			addItemQuantity = 30;
			addItemid = 4001839;
		}
		//�н���ʱ����
		if (addItemid != -1) {
			cm.gainItem(addItemid, addItemQuantity);
			cm.playerMessage(-1, "[����ս��] ̫���ˣ���ϲ�������� <"+cm.getItemName(itemid)+"> x "+itemQuantity+"��");
		}
	}
}
