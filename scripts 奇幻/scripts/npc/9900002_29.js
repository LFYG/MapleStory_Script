var a = 0;
var text;
var selects; //��¼��ҵ�ѡ��
var buynum = 0;
var itemlist = Array(
Array(1212063, 280), 
Array(1222058, 280), 
Array(1232057, 280), 
Array(1242060, 280), 
Array(1242061, 280), 
Array(1302275, 280),
Array(1312153, 280),
Array(1322203, 280),
Array(1332225, 280),
Array(1342082, 280),
Array(1362090, 280),
Array(1372177, 280),
Array(1382208, 280),
Array(1402196, 280),
Array(1412135, 280),
Array(1422140, 280),
Array(1432167, 280),
Array(1442223, 280),
Array(1452205, 280),
Array(1462193, 280),
Array(1472214, 280),
Array(1482168, 280),
Array(1492179, 280),
Array(1522094, 280),
Array(1532098, 280),
Array(1252015, 280)
);

function start() {
    a = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 1)
            a++;
        else
            a--;
        if (a == -1) {
            cm.dispose();
        } else if (a == 0) {
			text = "#h0#,������������һ�#e#b��Ʒ����#n#k,��ѡ������Ҫ�������Ʒ\r\n#b";
			for (var i=0; i<itemlist.length; i++) {
				text += "#L" + i + "##i" + itemlist[i] + ":##t" + itemlist[i] + "# - #r"+itemlist[i][1]+"#bѩ����  \r\n";
				if (i != 0 && (i+1) % 5 == 0) {
					text += "\r\n";
				}
			}
            cm.sendSimple(text);
        } else if (a == 1) {
			selects = selection;
            cm.sendGetNumber("������������������Ҫ���������\r\n\r\n#r1����Ҫ" + itemlist[selects][1] + "��#bѩ����#k", 0, 0, 999999);
        } else if (a == 2) {
            buynum = selection;
            cm.sendNext("���빺��" + buynum + "��#r#i" + itemlist[selects][0] + "##k��\r\n�㽫ʹ�õ�" + (buynum * itemlist[selects][1]) + "ѩ���ҡ�");
        } else if (a == 3) {
            if (cm.haveItem(4310014,buynum * itemlist[selects][1])) {
                cm.gainItem(4310014, -buynum * itemlist[selects][1]);
                cm.gainItem(itemlist[selects][0], buynum);
                cm.sendOk("����ɹ��ˣ�");
                cm.dispose();
            } else {
                cm.sendOk("�Բ�����û���㹻��ѩ���ҡ�");
                cm.dispose();
            }
        }
    }//mode
}//f