var aaa ="#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";

var status = 0;
var typed=0;
var rmb = 0;
var weaponId = null;
var weaponList = Array(
    1462202, // 	�޽���	
	1412144, // 	�޽�ս��	
	1532106, // 	�޽�����	
	1472223, // 	�޽����ּ�	
	1362099, // 	�޽�����	
	1302285, // 	�޽�ս��	
	1242076, // 	�޽�����֮��	
	1432176, // 	�޽�ս��֮ì	
	1492188, // 	�޽��޾�֮ǹ	
	1372186, // 	�޽�а����	
	1212077, // 	�޽��ڼ�����	
	1222072, // 	�޽���ʹ���	
	1442232, // 	�޽�����֮��	
	1522103, // 	�޽�ӥ��ǹ	
	1232071, // 	�޽�����ʹ��	
	1422149, // 	�޽�ս��	
	1382220, // 	�޽�ս������	
	1332235, // 	�޽�С������	
	1312162, // 	�޽�ս�����⸫	
	1322213, // 	�޽���ս����	
	1482177, // 	�޽�ʨ��ȭצ	
	1402204, // 	�޽��޽�	
	1452214, // 	�޽�ս����	
	1252058, // 	�޽�����ħ����	
	1342084 // 	�޽�С��

);
var needItemList = Array(
	Array(4310030, 500),
	Array(4310036, 2000),
	Array(4033356, 15),
	Array(4021012, 15),
	Array(4021011, 15),
	Array(4021010, 15),
	Array(4000630, 5),
	Array(4000082, 150),
	//Array(4000124, 20),
	Array(4310015, 1),
	Array(4021019, 1)
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