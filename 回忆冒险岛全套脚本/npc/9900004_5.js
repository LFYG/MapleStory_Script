var status = -1;
var typed = 0;
var transId = 4031997;
var icon ="#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#";
//"#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var head = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n";
function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		if (status >= 0) {
			cm.dispose();
			return;
		}
		status--;
	}
	if (status == 0) {
		var text = head+"�װ���#b#e#h ##n#k����ӭ��������н�������Ҫʲô������\r\n\r\n";
		text+="\t��ǰ�����#r"+cm.getPlayer().getCSPoints(1)+"#k��\r\n";
		text+="\t��ǰ#t"+transId+"#������#r"+cm.getItemQuantity(transId)+"#k��\r\n";
		text+="\t��ǰ#t4310014#������#r"+cm.getItemQuantity(4310014)+"#k��\r\n\r\n";
		text+="#b#L5#"+icon+" �˽����н�˵��#l\r\n";
		text+="#L3#"+icon+" ���һ�ѩ����#l\r\n"
		text+="#L2#"+icon+" ���һ�Ģ����#l\r\n";
		text+="#L1#"+icon+" Ģ����Ҷһ����#l\r\n";
		text+="#L4#"+icon+" ѩ���Ҷһ����#l\r\n";
		cm.sendSimple(text);
	} else if (status == 1) {
		typed = selection;
		if (selection == 5) {
			status = -1;
			cm.sendSimple("1��#b#t"+transId+"##k���Զһ�#r950���#k��#r1000���#k���Զһ�1��#b#t"+transId+"##k��#b#t"+transId+"##k���������֮��Ľ����뷷�ۡ�ͬʱ������Զһ�ѩ���ң�#r2000���#k�һ�#r1ѩ����#k");
		} else if (selection == 1) {
			var maxTimes = cm.getItemQuantity(transId);
			cm.sendGetNumber("#d#e<Ģ���Ҷһ����>#n#k\r\n��ǰ�����Զһ�#r"+(maxTimes*950)+"#k����������#r"+maxTimes+"#k��\r\n������һ���#b#t"+transId+"##k����:\r\n�һ�����Ϊ 1 : 950\r\n", 1, 1, maxTimes);
		} else if (selection == 2) {
			var maxTimes = Math.floor(cm.getPlayer().getCSPoints(1)/1000);
			if (maxTimes>300)
				maxTimes = 300;
			cm.sendGetNumber("#d#e<���һ�Ģ����>#n#k\r\n���������Զһ�#r"+maxTimes+"#k��#b#t"+transId+"##k\r\n������һ���#b#t"+transId+"##k����:\r\n�һ�����Ϊ 1000 : 1\r\n", 1, 1, maxTimes);
		} else if (selection == 3) {
			var maxTimes = Math.floor(cm.getPlayer().getCSPoints(1)/2000);
			if (maxTimes>1000)
				maxTimes = 1000;
			cm.sendGetNumber("#d#e<���һ�ѩ����>#n#k\r\n���������Զһ�#r"+maxTimes+"#k��#b#t4310014##k\r\n������һ���#b#t4310014##k����:\r\n�һ�����Ϊ 2000 : 1\r\n", 1, 1, maxTimes);
		} else if (selection == 4) {
			var maxTimes = cm.getItemQuantity(4310014);
			cm.sendGetNumber("#d#e<ѩ���Ҷһ����>#n#k\r\n��ǰ�����Զһ�#r"+(maxTimes*1000)+"#k����������#r"+maxTimes+"#k��\r\n������һ���#b#t4310014##k����:\r\n�һ�����Ϊ 1 : 1000\r\n", 1, 1, maxTimes);
		}
	} else if (status == 2) {
		var quantity = Math.floor(selection);
		if (quantity <= 0) {
			cm.sendOk("Error");
			cm.dispose();
			return;
		}
		if (typed == 1) {
			if (cm.haveItem(transId, quantity)) {
				status=-1;
				var nx = 950*quantity;
				cm.gainItem(transId, -quantity);
				cm.gainNX(nx);
				cm.sendSimple("�ɹ��һ���#r"+nx+"#k���");
			} else {
				cm.sendOk("�����û����ô��#b#t"+transId+"##kŶ��");
				cm.dispose();
			}
		} else if (typed == 2) {
			if (cm.getSpace(4)<1) {
				status = -1;
				cm.sendSimple("���ı����ռ䲻�㣬�����������������Ŀռ䡣");
			} else {
				var maxNumber = quantity*1000;
				if (cm.getPlayer().getCSPoints(1)>=maxNumber) {
					status =-1;
					cm.gainItem(transId, quantity);
					cm.gainNX(-maxNumber);
					cm.sendSimple("�ɹ��һ���#r"+quantity+"#k��Ģ����");
				} else {
					cm.sendOk("�����û����ô����Ŷ��");
					cm.dispose();
				}
			}
		} else if (typed == 3) {
			if (cm.getSpace(4)<1) {
				status = -1;
				cm.sendSimple("���ı����ռ䲻�㣬�����������������Ŀռ䡣");
			} else {
				var maxNumber = quantity*2000;
				if (cm.getPlayer().getCSPoints(1)>=maxNumber) {
					status =-1;
					cm.gainItem(4310014, quantity);
					cm.gainNX(-maxNumber);
					cm.sendSimple("�ɹ��һ���#r"+quantity+"#k��ѩ����");
				} else {
					cm.sendOk("�����û����ô����Ŷ��");
					cm.dispose();
				}
			}
		} else if (typed == 4) {
			if (cm.haveItem(4310014, quantity)) {
				status=-1;
				var nx = 1000*quantity;
				cm.gainItem(4310014, -quantity);
				cm.gainNX(nx);
				cm.sendSimple("�ɹ��һ���#r"+nx+"#k���");
			} else {
				cm.sendOk("�����û����ô��#b#t4310014##kŶ��");
				cm.dispose();
			}
		}
	}
}