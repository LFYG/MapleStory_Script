var aaa ="#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";

var status = 0;
var typed=0;
var rmb = 0;
var weaponId = null;
var weaponList = Array(
1102553	, // �����ʿ����	
1152139	, // �����ʿ����	
1132233	, // �����ʿ����	
1082522	, // �����ʿ����	
1052608	, // �����ʿս����	
1003841	, // �����ʿñ��	
1072815	, // �����ʿЬ��
1003172, // ʨ��ս��ͷ��, // (������)
1152108, // ʨ��ս������, // (������)
1052314, // ʨ��ս�����Ӽ�, // (������)
1082295, // ʨ��ս������, // (������)
1102275, // ʨ��ս������, // (������)
1072485, // ʨ��ս��Ь, // (������)
1003173, // ��β��ʦñ��, // (������)
1152110, // ��β��ʦ����, // (������)
1052315, // ��β��ʦ����, // (������)
1082296, // ��β��ʦ����, // (������)
1102276, // ��β��ʦ����, // (������)
1072486, // ��β��ʦЬ, // (������)
1003174, // ӥ���ڱ���ñ, // (������)
1152111, // ӥ���ڱ�����, // (������)
1052316, // ӥ���ڱ���, // (������)
1082297, // ӥ���ڱ�����, // (������)
1102277, // ӥ���ڱ�����, // (������)
1072487, // ӥ���ڱ�Ь, // (������)
1003175, // ��ѻ֮��׷����ñ, // (������)
1152112, // ��ѻ֮�����˻���, // (������)
1052317, // ��ѻ֮��׷���߿���, // (������)
1102278, // ��ѻ֮����������, // (������)
1082298, // ��ѻ֮��׷��������, // (������)
1072488, // ��ѻ֮��׷����Ь, // (������)
1003176, // ��ݴ���ñ, // (������)
1052318, // ��ݴ�������, // (������)
1082299, // ��ݴ�������, // (������)
1152113, // ��ݴ�������, // (������)
1102279, // ��ݴ�������, // (������)
1072489 // ��ݴ���Ь, // (������)
);
var needItemList = Array(
	Array(4310036, 2500),
	Array(4000021, 120),
	Array(4001241, 8),
	Array(4001242, 8),
	Array(4033356, 3),
	Array(4000630, 3),
	Array(4004000, 80),
	Array(4004001, 80),
	Array(4004002, 80),
	Array(4004003, 80)
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
            var selStr = "#d�������������140�����ߣ���ѡ����Ҫ������װ����#n#k\r\n";    
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