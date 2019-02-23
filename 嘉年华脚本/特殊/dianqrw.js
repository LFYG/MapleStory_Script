var status = -1;
var typed = 0;

var needItems = Array(
	Array(4310071, 1, "BOSS��������"),
	Array(4000241, 88, "��ľ���"), // - �� - ��ɺ���������껤�����ϡ�
	Array(4000453, 80, "��ɫ������"), // - �� - ��ɺ���������껤�����ϡ�
	Array(4000289, 60, "è�����޻��") // - �� - ��ɺ���������껤�����ϡ�
);

var mPoints = 10; //�߼�����ħ��

var maxCount = 1; //ÿ��������

var bossId = "ħ��������";

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
		var text = "\t\t\t\t\t#d�߼�����ħ������\r\n";
		text += "\t\t#d#e��   �Ҫ������ϸ�Ķ�   ��#n#k#b\r\n\r\n";
		text += "�� ��ǰ����� [ #r" + cm.getPQLog(bossId) + "#b ]\t\t\t����ɲ��� [ #r"+(maxCount-cm.getPQLog(bossId))+"#b ]\r\n";
		text += "�� �ռ����µ���";
		for(var i in needItems) {
			var itemid = needItems[i][0];
			text += "[ #t"+itemid+"# ] ";
		}
		text += "\r\n";
		for(var i in needItems) {
			var itemid = needItems[i][0];
			var quantity = needItems[i][1];
			text += "#b"+rightPadding("�� ��ǰӵ��"+cm.getItemName(itemid)+"������", 30) + ((cm.getItemQuantity(itemid)>=quantity) ? "#g" : "#r") + cm.getItemQuantity(itemid)   + " / " + quantity + " ��#r"+(needItems[i][2])+"#b\r\n";
		}
		text += "\r\n\t\t\t#d�������ۼƻ�ù�������������#r"+(cm.getPQLog(bossId) * mPoints)+"#d ��";
		
		cm.sendYesNoS(text, 2);
	} else if (status == 1){
		
		if (cm.getPQLog(bossId) >= maxCount) {
			cm.sendOkS("�������Ѿ���ɹ��������ˣ�", 2);
			cm.dispose();
			return;
		}
		if (cm.getSpace(4) < 2 ) {
            cm.playerMessage(1, "\r\n�뱣�ֱ����ں��� 2 ��λ��\r\n");
              cm.dispose();
            return;


		}
		
		var next = true;
		for(var i in needItems) {
			var itemid = needItems[i][0];
			var quantity = needItems[i][1];
			if (cm.getItemQuantity(itemid) < quantity) {
				next = false;
				break;
			}
		}
		if (next) {
			cm.setPQLog(bossId);
			for(var i in needItems) {
				var itemid = needItems[i][0];
				var quantity = needItems[i][1];
				cm.gainItem(itemid, -quantity);
			}
                        cm.gainItem(4000463, 10);
                        cm.gainItem(4310019, 1);
			cm.getPlayer().dropMessage(1, "�ɹ���ȡ"+mPoints+"�������ң�");
			cm.dispose();
		} else {
			cm.sendOkS("���ĵ��߲��㣬�޷���ȡ������", 2);
			cm.dispose();
		}
	}
}

function len(s) {
	var l = 0;
	var a = s.split("");
	for (var i = 1; i < a.length; i++) {
		if (a[i].charCodeAt(0) < 299) {
			l++;
			//java.lang.System.out.println("1:"+a[i]);
		} else {
			l+= 2;
			//java.lang.System.out.println("2:"+a[i]);
		}
	}
	return l;
}

function rightPadding(text, padding) {
	var length = len(text);
	var lastLength = padding-length;
	if (lastLength>0) {
		for(var i=0; i<lastLength; i++) {
			text+=" ";
		}
	}
	return text;
}