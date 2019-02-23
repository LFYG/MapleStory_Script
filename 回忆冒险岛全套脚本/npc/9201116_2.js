var status = 0;
var bossid = "�׳����";
var giftLevel = Array(1,10,100, 300, 500, 1000);
var giftContent = Array(
	Array(5062000, 10, 1),
	
	Array(5062002, 10, 2),
	Array(5062500, 10, 2),
	Array(1112793, 1, 2),
	
	Array(2431944, 1, 3),
	Array(5062500, 20, 3),
	Array(5062009, 20, 3),
	Array(2049135, 5, 3),
	//Array(2430640, 1, 3),
	
	Array(2431290, 1, 4, "150���߲��ϰ�"),
	Array(5062500, 40, 4),
	Array(5062009, 40, 4),
	Array(2049135, 10, 4),
	Array(2430640, 1, 4),
	
	Array(2431938, 1, 5),
	Array(5062500, 60, 5),
	Array(5062009, 60, 5),
	Array(2049135, 20, 5),
	Array(2430640, 1, 5),
	
	Array(2431989, 1, 6, "��Ʒǿ������򱩾�"),
	Array(5062500, 100, 6),
	Array(5062009, 100, 6),
	Array(2049135, 30, 6),
	Array(2430640, 1, 6)
)
var giftId = -1;
var giftToken = Array();
var gifts = null;
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
		var text = "";
		text += "����ð�յ��׳影�����ۼƳ�ֵ�ﵽ����Ҫ�󼴿���ȡ�׳������\r\n\r\n\t#e#d����ǰ�ĳ�ֵ��#n#r��"+cm.getRMB()+"#k\r\n";
		for(var key in giftLevel) {
			var tips = "";
			giftToken[key]=false;
			if (cm.getRMB()>=giftLevel[key]) {
				if (cm.getBossLogAcc(bossid+key) != -1) {
					tips = "(����ȡ)";
					giftToken[key]=true;
				} else {
					tips = "#g(����ȡ)#b";
				}
			} else {
				tips = "#r(��������)#b";
			}
			text+="#b#L"+(parseInt(key)+1)+"#��ȡ#r#e"+giftLevel[key]+"#n#bԪ�׳���� "+tips+"#l#k\r\n";
		}
		cm.sendSimple(text);
	} else if (status == 1) {
		giftId = parseInt(selection);
		var text="#r#e"+giftLevel[giftId-1]+"#n#bԪ�׳�������ݣ�\r\n";
		gifts = getGift(giftId);
		for(var key in gifts) {
			var itemId = gifts[key][0];
			var itemQuantity = gifts[key][1];
			var extendName = (gifts[key][3]!=null) ? gifts[key][3] : "";
			if (extendName != "")
				extendName = "<"+extendName+">";
			text+="#v"+itemId+"##b#t"+itemId+"#"+extendName+"#k #rx "+itemQuantity+"#k\r\n";
		}
		text+="\r\n#d�Ƿ����ھ���ȡ�������#k";
		cm.sendYesNo(text);
	} else if (status == 2) {
		if (giftId!=-1 && gifts != null) {
			if (cm.getSpace(1) < 8 || cm.getSpace(2) < 8 || cm.getSpace(3) < 8 || cm.getSpace(4) < 8 || cm.getSpace(5) < 8) {
				cm.sendOk("���ı����ռ䲻�㣬�뱣֤ÿ����λ����8��Ŀռ䣬�Ա�����ȡʧ�ܡ�");
				cm.dispose();
				return ;
			}
			if (giftToken[giftId-1]) {
				cm.setBossLogAcc(bossid+(giftId-1),-2);
				for(var key in gifts) {
					var itemId = gifts[key][0];
					var itemQuantity = gifts[key][1];
					cm.gainItem(itemId, itemQuantity);
				}
				cm.sendOk("��ϲ������ȡ�ɹ�����򿪰��������ɣ�");
				cm.channelMessage(0x18, "���׳������" + " : " + "��� " + cm.getChar().getName() + " ��ȡ�� "+giftLevel[giftId-1]+"Ԫ �׳������");
				cm.dispose();
			} else {
				status = -1;
				cm.sendSimple("���Ѿ�����˸�������߳�ֵ���δ�ﵽҪ���޷���ȡ��");
			}
		} else {
			cm.sendOk("��ȡ��������ϵ����Ա��");
			cm.dispose();
		}
	}
}
function getGift(id) {
	var lastGiftContent = Array();
	for (var key in giftContent) {
		if (giftContent[key][2]==id)
			lastGiftContent.push(giftContent[key]);
	}
	return lastGiftContent;
}