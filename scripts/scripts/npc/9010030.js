var a = 0;
var text;
var selects; //��¼��ҵ�ѡ��
var buynum = 0;
var itemlist = Array(
Array(2210037, 400), 
Array(2210036, 400), 
Array(2210035, 400), 
Array(2210039, 400), 
Array(2210038, 400), 
Array(2213059, 400), 
Array(2213057, 400), 
Array(2213058, 400), 
Array(2213056, 400), 
Array(2213055, 400), 
Array(2213054, 400), 
Array(2213053, 400), 
Array(2213052, 400), 
Array(2213051, 400), 
Array(2213050, 400), 
Array(2213048, 400), 
Array(2213049, 400), 
Array(2213011, 400), 
Array(2213016, 400), 
Array(2213060, 400), 
//Array(2213043, 400), //����
//Array(2213042, 400), //���װ�
Array(2213010, 400), 
Array(2213041, 400), 
Array(2213040, 400), 
Array(2213018, 400), 
Array(2213019, 400), 
Array(2213014, 400), 
Array(2213013, 400), 
Array(2213015, 400), 
Array(2213000, 400), 
Array(2213001, 400), 
Array(2213009, 400), 
Array(2213008, 400), 
Array(2213006, 400), 
Array(2213005, 400), 
Array(2213004, 400), 
Array(2213003, 400), 
Array(2213002, 400), 
Array(2213030, 400), 
Array(2213031, 400), 
Array(2213033, 400), 
Array(2213034, 400), 
Array(2213036, 400), 
Array(2213035, 400), 
Array(2213038, 400), 
Array(2213039, 400), 
Array(2213022, 400),
Array(2213023, 400),
Array(2213020, 400),
Array(2213021, 400),
//Array(2213027, 400),//������
Array(2213026, 400),
Array(2213025, 400),
Array(2213024, 400),
Array(2213029, 400),
Array(2213028, 400)
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
			text = "#h0#,�����������ﹺ��#e#b����ҩˮ#n#k,��ѡ������Ҫ�������Ʒ\r\n#b";
			for (var i=0; i<itemlist.length; i++) {
				text += "#L" + i + "##i" + itemlist[i] + ":##t" + itemlist[i] + "# - #r"+(itemlist[i][1]*500)+"#b��Ϸ��  \r\n";
				if (i != 0 && (i+1) % 5 == 0) {
					text += "\r\n";
				}
			}
            cm.sendSimple(text);
        } else if (a == 1) {
			selects = selection;
            cm.sendGetNumber("������������������Ҫ���������\r\n\r\n#r1����Ҫ" + (itemlist[selects][1]*500) + "��#b��Ϸ��#k", 1, 0, 999999);
        } else if (a == 2) {
            buynum = selection;
            cm.sendNext("���빺��" + buynum + "��#r#i" + itemlist[selects][0] + "##k��\r\n�㽫ʹ�õ�" + (buynum * itemlist[selects][1]*500) + "��Ϸ�ҡ�");
        } else if (a == 3) {
            if (cm.getPlayer().getMeso() >= buynum * itemlist[selects][1]*500) {
                cm.gainMeso(-buynum * itemlist[selects][1]*500);
                cm.gainItem(itemlist[selects][0], buynum);
                cm.sendOk("����ɹ��ˣ�");
                cm.dispose();
            } else {
                cm.sendOk("�Բ�����û���㹻����Ϸ�ҡ�");
                cm.dispose();
            }
        }
    }//mode
}//f