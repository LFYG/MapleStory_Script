var a = 0;
var text;
var selects; //��¼��ҵ�ѡ��
var buynum = 0;
var itemlist = Array(
Array(2290245, 40),
Array(2290458, 40),
Array(2290884, 40), 
Array(2290868, 40),
Array(2290869, 40),
Array(2290870, 40),
Array(2290871, 40),
Array(2290872, 40),
Array(2290873, 40),
Array(2290874, 40),
Array(2290875, 40),
Array(2290876, 40),
Array(2290877, 40),
Array(2290878, 40),
Array(2290879, 40),
Array(2290880, 40), 
Array(2290881, 40), 
Array(2290882, 40), 
Array(2290883, 40), 
Array(2290722, 40),
Array(2290885, 40), 
Array(2290886, 40), 
Array(2290887, 40), 
Array(2290888, 40), 
Array(2290889, 40),
Array(2290914, 40),
Array(2290723, 40),
Array(2290724, 40)
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
			text = "#h0#,������������һ�#e#b�����̳�#n#k,��ѡ������Ҫ�������Ʒ\r\n#b";
			for (var i=0; i<itemlist.length; i++) {
				text += "#L" + i + "##i" + itemlist[i] + ":##t" + itemlist[i] + "# - #r"+itemlist[i][1]+"#b�����  \r\n";
				if (i != 0 && (i+1) % 5 == 0) {
					text += "\r\n";
				}
			}
            cm.sendSimple(text);
        } else if (a == 1) {
			selects = selection;
            cm.sendGetNumber("������������������Ҫ���������\r\n\r\n#r1����Ҫ" + itemlist[selects][1] + "��#b�����#k", 0, 0, 999999);
        } else if (a == 2) {
            buynum = selection;
            cm.sendNext("���빺��" + buynum + "��#r#i" + itemlist[selects][0] + "##k��\r\n�㽫ʹ�õ�" + (buynum * itemlist[selects][1]) + "����ҡ�");
        } else if (a == 3) {
			var itemid = itemlist[selects][0];
			if (cm.getSpace(Math.floor(itemid/1000000))<=2) {
				cm.sendOk("���ı����ռ䲻�㣬��������ٹ���");
				cm.dispose();
				return; 
			}
            if (cm.haveItem(4310057,buynum * itemlist[selects][1])) {
                cm.gainItem(4310057, -buynum * itemlist[selects][1]);
                cm.gainItem(itemlist[selects][0], buynum);
                cm.sendOk("����ɹ��ˣ�");
                cm.dispose();
            } else {
                cm.sendOk("�Բ�����û���㹻�ı���ҡ�");
                cm.dispose();
            }
        }
    }//mode
}//f