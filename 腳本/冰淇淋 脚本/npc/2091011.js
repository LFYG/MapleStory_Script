/*
	���ݣ�����������
	���ڵ�ͼ��925020001
*/

var rewardItem = new Array(
						new Array(1082392, 350),	// Lv120 - Ӣ������ - �͸����������ǿ��ս�ߵĴ�˵�е����ס�
						new Array(1132115, 150),	// Lv120 - �乫�ĺ�����(������)
						new Array(2046856, 75),		// ר����Ʒ���������� - ����Ʒ�����������������ԡ�
						new Array(2046857, 75)		// ר����Ʒħ������ - ����Ʒ������ħ�����������ԡ�
						);

var status = 0;
var text;
var firstsel = 0;
var taskItem = 4001620;	// �乫��֤�� - ��������������乫��֤�������������һ���������Ի�ã��������������ｻ������
var secretBox = 5062002; // �������� - Lv140��װ
var rewardsel;
var freetimes = 2;		// ��Ѵ���
var basemeso = 500000;	// ���շ�
var needmeso = 0;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode <= 0) {
		cm.dispose();
		return;
	} else {
		if (mode == 1) {
			status++; 
		} else {
			status--;
		}

		if (status == 0) {
			var times = cm.getBossLog("�°����긱��");
			needmeso = getNeedMeso(times);
			text = "\t\t\t\t#r#e- �°�������� -#n#k\r\n\r\n\t��ӭ�����°��������������ÿһ�㶼��ʵ��ǿ��Ĺ�������һ�����ۣ���Ȼ����Ҳ�ܷḻ�������õĻ����Դӹ������ϻ��#b#z" + taskItem + "##k������������һ����е�װ�������������Ѷȵ�����������Ҳ��Խ��Խ�ḻ��Ŀǰ�ѿ���#r30��#k������#r17�㡢29��#k�����������#b<#z" + secretBox + "#-�߼�����ħ��>#k�ḻ�󽱣�Ҫע���ȡŶ���ڴ����ľ��ʱ���~\r\n\r\n";
			text += "#d��������ս�Ĵ�����#e" + times + "#n\r\n�ٴ���ս��Ҫ��ң�#e" + needmeso + "#n#k\r\n";//������ѳɼ���0��\r\n\r\n
			text += "#b#L0#��ʼ��ս��#l\r\n#L1#�����°��������#l\r\n#L2#�һ�����#l";
			cm.sendSimple(text);
		} else if (status == 1) {
			firstsel = selection;
			if (selection == 0) {
				var canenter = true;
				if (cm.getPlayer().getLevel() < 120) {
					cm.sendOk("�����ɲ���������ģ�120���������ɣ�");
					canenter = false;
				} else if (cm.getParty() != null) {
					cm.sendOk("���˳���ǰ����");
					canenter = false;
				} else if (cm.getMeso() < needmeso) {
					cm.sendOk("���Ľ�Ҳ���#r" + needmeso + "#k���޷��ٴ���ս");
					canenter = false;
				}

				if (canenter) {
					text = "ף�����~";
					cm.sendNext(text);
				} else {
					cm.dispose();
					return;
				}
			} else if (selection == 1){
				text = "\t\t\t\t#r#e- �������˵�� -#n#k\r\n\r\n";
				text += "- ��������Ʒ\r\n  ��ʼ��ս���޷�ʹ���κ�������Ʒ��ֻ��ʹ�ù�����������ר������ҩˮ������ҩˮ����������ҩ��\r\n  #rע����ȡ���Զ�ʹ�á�#k\r\n\r\n";
				text += "- ͨ�ؽ���\r\n  ÿ�㶼���л��ʵ���#b#z" + taskItem + "##k����#r17�㡢29��#k����ò����й��������#b<#z" + secretBox + "#-Lv140��װ>#k���򿪺�ɻ���������ȵļ�Ʒ��װ��\r\n\r\n";
				text += "- ÿ����ս����\r\n  ÿ�տɻ��#r2��#k�����ս������ʹ������ٴ���ս���蹺����Ʊ���ܼ�����ս��������ս����Խ�࣬������Ҳ��Խ�ࡣ\r\n";
				cm.sendNext(text);
				status = -1;
				return;
			} else if (selection == 2) {
				text = "��ѡ����Ҫ�һ��Ľ�����\r\n\r\n";
				for (var i = 0; i < rewardItem.length; i++) {
					text += "#L" + i + "##i" + rewardItem[i][0] + "#" + " #z" + rewardItem[i][0] + "#\r\n";
				}
				cm.sendNext(text);
			}
		} else if (status == 2) {
			//cm.start_DojoAgent(true, false);
			if (firstsel == 0) {
				var em = cm.getEventManager("DoJang");
				if (em == null) {
					cm.sendOk("������δ���ţ������ڴ�~");
					cm.dispose();
					return;
				}

				var eim = em.newInstance(cm.getPlayer().getName());
				var maps = new Array();
				var baseMapId = 925060000;
				var mapFactory = cm.getChannelServer().getMapFactory();
				for (var i = 1; i <= 29; i++) {
					var mapId = baseMapId + i * 100;
					var mapInstanceId = cm.getChannelServer().getEventSM().getNewInstanceMapId();
					var map = mapFactory.CreateInstanceMap(mapId, true, true, true, mapInstanceId);
					eim.addInstanceMap(mapInstanceId);
					maps.push(new Array(mapId, map));
				}
				eim.setObjectProperty("maps", maps);
				eim.registerPlayer(cm.getPlayer());
				cm.getPlayer().changeMap(maps[0][1], maps[0][1].getPortal(0));
				cm.setBossLog("�°����긱��");
				cm.gainMeso(-needmeso);
				cm.worldMessageYellow("[ϵͳ����] : ���[" + cm.getPlayer().getName() + "]�������°����긱����ףTA����~");
				cm.dispose();
			} else if (firstsel == 2) {
				text = "�һ� #i" + rewardItem[selection][0] + "# ��Ҫ " + rewardItem[selection][1] + " �� #i" + taskItem + "# ��ȷ���һ���";
				rewardsel = rewardItem[selection];
				cm.sendNext(text);
			}
		} else if (status == 3) {
			if (firstsel == 2) {
				if (!cm.haveItem(taskItem, rewardsel[1])) {
					cm.sendOk("û���㹻�� #z" + taskItem + "#�����ռ��� " + rewardsel[1] + "�������һ��ɡ�");
				} else if (cm.getInventory(1).isFull(1) || cm.getInventory(2).isFull(1)) {
					cm.sendOk("����װ���������������� 1 ��������������һ���");
				} else {
					cm.gainItem(taskItem, -rewardsel[1]);
					cm.gainItem(rewardsel[0], 1);
					cm.sendOk("�һ��ɹ������#i" + rewardsel[0] + " #1����");
				}
			}
			
			cm.dispose();
			return;
		}
	}
}

function getNeedMeso(times) {
	// 50 100 150 250 400 650 1050����  (��λ����)
	if (times < freetimes) {
		return 0;
	} else {
		times -= freetimes - 1;
	}
	var meso = 0;
	var lastmeso = new Array();
	for (var i = 0; i < times; i++) {
		if (lastmeso.length < 2) {
			meso += basemeso;
		} else {
			meso = lastmeso[i-2] + lastmeso[i-1];
		}
		lastmeso.push(meso);
	}
	return meso;
}