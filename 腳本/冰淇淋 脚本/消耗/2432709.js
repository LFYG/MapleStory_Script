status = -1;
var itemList = Array(
1212095,// - ���˵�˫����������������100% - ��˫�������ϸ������������������ԡ�
1222089,// - ���˵ĵ�����������������100% - �Ե����������ӹ�����������ԡ�
1232089,
1402229,
1242095,
1302304,
1312179,
1322230,
1332254,
1362115,
1372201,
1382239,
1412158,
1422165,
1432194,
1442248,
1452232,
1462219,
1472241,
1482196,
1492205,
1522118,
1532124// - ���˵ĵ�������ħ������100% - �Ե�����������ħ��������ԡ�
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
		var item = im.gainGachaponItem(itemid, itemnum, "11������ʥ����", 3);
		im.gainItem(2432709, -1);
		im.sendOk("��ϲ���������"+itemnum+"��#b#z"+itemid+"#");
		im.dispose();
	}
}