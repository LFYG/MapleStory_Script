var a = 0;
var text;
var selects; //��¼��ҵ�ѡ��
var buynum = 0;
var itemlist = Array(
Array(2290285, 4000), 
Array(2291137, 8000), 
Array(2290602, 8000), 
Array(2290892, 8000), 
Array(2290891, 8000), 
Array(2290880, 8000), 
Array(2290881, 8000), 
Array(2290882, 8000), 
Array(2290883, 8000), 
Array(2290884, 8000), 
Array(2290885, 8000), 
Array(2290466, 8000), 
Array(2290457, 8000), 
Array(2290456, 8000), 
Array(2290879, 8000), 
Array(2290878, 8000), 
Array(2290870, 8000), 
Array(2290871, 8000), 
Array(2290874, 8000), 
Array(2290875, 8000), 
Array(2290872, 8000), 
Array(2290873, 8000), 
Array(2290868, 8000), 
Array(2290869, 8000), 
Array(2290571, 8000), 
Array(2290887, 8000), 
Array(2290888, 8000), 
Array(2290915, 8000),
Array(2290890, 8000),
Array(2290245, 8000)
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
			text = "#h0#,�����������ﹺ��#e#b�������ֲ�#n#k,��ѡ������Ҫ�������Ʒ#r�����Լ����ÿո񣡣�\r\n#b";
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
            if (cm.getPlayer().getMeso() >= buynum * itemlist[selects][1]*500 ) {
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