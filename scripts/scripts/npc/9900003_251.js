var aaa ="#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";

var status = 0;
var typed=0;
var rmb = 0;
var weaponId = null;
var weaponList = Array(
    1099012, //	����֮��	
	1099011, //	����֮���	
	1352606, //	����֮�������	
	1352707, //	����֮���ֵ�	
	1352815, //	����֮˽��	
	1352406, //	����֮����	
	1352506, //	����֮����	
	1352296, //	����֮���	
	1352286, //	����֮����	
	1352206, //	����֮��׹	
	1352216, //	����֮����	
	1352226, //	����֮����	
	1352236, //	����֮��֮ͭ��	
	1352246, //	����֮����֮��	
	1352256, //	����֮�׽�֮��	
	1352266, //	����֮�籩��ë	
	1352276, //	����֮��ָ	
	1353006, //	����֮������	
	1353105, //	����֮������	
	1352009, //	����֮��ʸ	
	1352957, //	����֮������	
	1352945, //	����֮������Ų�	
	1352935, //	����֮������	
	1352928, //	����֮��ҩͰ	
	1352916, //	����֮ӥ��	
	1352906, //	����֮����	
	1342095, //	����֮��	
	1352967, //	����֮��Ұ֮ì	
	1352975, //	����֮ʥ��֮��	
	1352109 //	����֮��Ƭ
);
var needItemList = Array(
	Array(4310036, 2500),
	Array(4000021, 120),
	Array(4033356, 5),
	Array(4000630, 3),
	Array(4004000, 80),
	Array(4004001, 80),
	Array(4004002, 80),
	Array(4004003, 80),
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
            var selStr = "#d�������������140�����֣���ѡ����Ҫ������װ����#n#k\r\n";    
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
				cm.worldSpouseMessage(0x20, "[װ������] : ��ϲ " + cm.getChar().getName() + " ������һ�� <"+cm.getItemName(weaponList[weaponId])+">.");
				cm.dispose();
			} else {
				cm.sendOk("���ϲ��㣬�޷����������");
				cm.dispose();
			}
		}
	}
}