status = -1;
var itemList = Array(
1212065,// - ���˵�˫����������������100% - ��˫�������ϸ������������������ԡ�
1222060,// - ���˵ĵ�����������������100% - �Ե����������ӹ�����������ԡ�
1232058,
1242062,
1242063,
1302276,
1312154,
1322204,
1332226,
1342083,
1362091,
1372178,
1382209,
1402197,
1412136,
1422141,
1432168,
1442224,
1452206,
1462194,
1472215,
1482169,
1492180,
1522095,
1532099// - ���˵ĵ�������ħ������100% - �Ե�����������ħ��������ԡ�
);

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
       if (mode == 0 && status == 0) {
			im.dispose();
			return;
		}
        status--;
    }
    if (status == 0) {
        var text = "";
		for(var i=0; i<itemList.length; i++) {
			text+="#L"+i+"##v"+itemList[i]+"##z"+itemList[i]+"##l\r\n";
		}
		im.sendSimple("��ѡ����Ҫ�ģ�\r\n#r"+text);
    } else if(status == 1) {
		var itemid = itemList[selection];
		var itemnum = Math.floor(Math.random()*1+1);
		var item = im.gainGachaponItem(itemid, itemnum, "�������", 3);
		im.gainItem(2431941, -1);
		im.sendOk("��ϲ���������"+itemnum+"��#b#z"+itemid+"#");
		im.dispose();
	}
}