var aaa ="#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";

var status = 0;
var typed=0;
var rmb = 0;
var weaponId = null;
var weaponList = Array(
    1412126, //	��������˫�ָ�	
	1532089, //	�������ͻ���	
	1472205, //	��������ȭ��	
	1452196, //	�������͹�	
	1362081, //	������������	
	1242069, //	��������������	
	1242070, //	��������������	
	1432158, //	�������ͳ�ǹ	
	1492170, //	�������Ͷ�ǹ	
	1322100, //	�������͵��ֶ���	
	1522085, //	��������˫��ǹ	
	1372168, //	�������Ͷ���	
	1212072, //	��������˫ͷ��	
	1222067, //	��������������	
	1462184, //	����������	
	1442209, //	�������ͳ�ì	
	1382199, //	�������ͳ���	
	1232064, //	��������������	
	1422129, //	��������˫�ֶ���	
	1332214, //	�������Ͷ̵�	
	1402185, //	��������˫�ֽ�	
	1482159, //	��������ָ��	
	1342079, //	��������˫��	
	1252062, //	��������ħ����	
	1312142, //	�������͵��ָ�	
	1302070 //	�������͵��ֽ�
);
var needItemList = Array(
	//Array(4310036, 2500),
	Array(4000021, 80),
	Array(4001241, 6),
	Array(4001242, 6),
	Array(4000630, 2),
	Array(4004000, 60),
	Array(4004001, 60),
	Array(4004002, 60),
	Array(4004003, 60)
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
            var selStr = "#d�������������145����������ѡ����Ҫ������װ����#n#k\r\n";    
			for(var key in weaponList) {
				var item = weaponList[key];
				selStr += "#r#L"+key+"#���� #b#z"+item+"# #r[�鿴����]\r\n";
			}
        	cm.sendSimple(selStr);	
		} else if (status == 1) {
			weaponId = selection;
			var text = "- #e#d#z"+weaponList[weaponId]+"#��Ҫ�Ĳ��ϣ�#n#k\r\n\r\n#b";
			for(var key in needItemList) {
				var itemName = cm.getItemName(needItemList[key][0]);
				text+=itemName;
				for(var i=0; i<=25-itemName.getBytes().length; i++)
				{
					text+=" ";
				}
				var currentItemQuantity = cm.getItemQuantity(needItemList[key][0]);
				var color="#g";
				if (currentItemQuantity<needItemList[key][1])
					color="#r";
				text+=color+currentItemQuantity+" / "+needItemList[key][1]+" ��#b\r\n";
			}
			text+="#k\r\n\r\n- #e#d������ʾ��#n#b���ǽ�����������񷵻���һҳ.#k";
			cm.sendYesNo(text);
		} else if (status == 2) {
			flag=true;
			for(var key in needItemList) {
				var itemId = needItemList[key][0];
				var itemQuantity = needItemList[key][1];
				if (!cm.haveItem(itemId, itemQuantity))
				{
					flag=false;
					break;
				}
			}
            if (flag) {
				if (cm.getSpace(1)<1) {
					cm.sendOk("װ�����ռ䲻�㣬�����������������");
					cm.dispose();
					return;
				}
				for(var key in needItemList) {
					var itemId = needItemList[key][0];
					var itemQuantity = needItemList[key][1];
					cm.gainItem(itemId, -itemQuantity);
				}
				cm.gainItem(weaponList[weaponId], 1);
				cm.sendOk("��ϲ���ϳ�#z"+weaponList[weaponId]+"#һ��.");
				cm.worldSpouseMessage(0x20, "[���񹫸�] : ��ϲ " + cm.getChar().getName() + " ������һ�� <"+cm.getItemName(weaponList[weaponId])+">.");
				cm.dispose();
			} else {
				cm.sendOk("���ϲ��㣬�޷����������");
				cm.dispose();
			}
		}
	}
}