var a = 0;
var text;
var selects; //��¼��ҵ�ѡ��
var buynum = 0;
var itemlist = Array(
					Array(5380000, 5000),
					Array(4000313, 3),
					Array(5080001, 500),
					Array(5062000, 300),
					Array(5062002, 600),
					Array(5062500, 700),
					Array(5062010, 800),
					Array(5062009, 1000),
					Array(5062800, 1000),
					Array(4310036, 30),
					Array(2048309, 2000),
					Array(5064003, 2000),
					Array(5064000, 700),
					Array(5064100, 700),
					Array(5050000, 100),
					Array(2614002, 50000),
					Array(5390022, 10000), // - ׷��С������龰���� - ʹ�õ���ʱ�����������ˣ����Ұ�����У���ɫ������Ļ������ʾ��ȫ���������С�
					Array(5390011, 10000),// - ��ʯVIPר������ - �����϶�����VIP���ֳ��ֽ�ɫ����˵���Ļ�����ȫ�������յ���
					Array(5390012, 5000), //- �ƽ�VIPר������ - �����϶�����VIP���ֳ��ֽ�ɫ����˵���Ļ�����ȫ�������յ���
					Array(5390013, 3000), //- ����VIPר������ - �����϶�����VIP���ֳ��ֽ�ɫ����˵���Ļ�����ȫ�������յ���
					Array(5390019, 3000),// - �����������龰���� - ʹ�������԰����������ʾ������Ƶ����������Ĵ�����ʾ�������˵���Ļ�ϣ��������������ı���Ŷ��
					Array(5390020, 3000), // - �ҵ��ݳ����龰���� - ʹ�������԰����������ʾ������Ƶ����������Ĵ�����ʾ�������˵���Ļ�ϣ������ҵ��ݳ��ᱳ��Ŷ��
					Array(5072000, 100),
					Array(5073000, 200),
					Array(5074000, 200),
					Array(5076000, 500),
					Array(5390000, 600),
					Array(5390001, 600),
					Array(5390002, 600),
					Array(5390003, 600),
					Array(5390004, 600),
					Array(5390005, 700),
					Array(5390006, 2000),
					Array(5390007, 1000),
					Array(5390008, 1000),
					Array(5079001, 500),
					Array(5079002, 500),
					Array(5390010, 1000),
					Array(5390018, 1000),
					Array(5520000, 1000),
					Array(5520001, 2000)
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
			text = "#h0#,��ã����������ѡ������Ҫ�������Ʒ,���ͼƬ����\r\n#b";
			for (var i=0; i<itemlist.length; i++) {
				text += "#L" + i + "##i" + itemlist[i] + ":# ";
				if (i != 0 && (i+1) % 5 == 0) {
					text += "\r\n";
				}
			}
            cm.sendSimple(text);
        } else if (a == 1) {
			selects = selection;
            cm.sendGetNumber("������������������Ҫ���������\r\n\r\n#r1����Ҫ" + itemlist[selects][1] + "���", 0, 0, 700);
        } else if (a == 2) {
            buynum = selection;
            cm.sendNext("���빺��" + buynum + "��#r#i" + itemlist[selects][0] + "##k��\r\n�㽫ʹ�õ�" + (buynum * itemlist[selects][1]) + "���");
        } else if (a == 3) {
			var itemid = itemlist[selects][0];
			if (cm.getSpace(Math.floor(itemid/1000000))<=2) {
				cm.sendOk("���ı����ռ䲻�㣬��������ٹ���");
				cm.dispose();
				return; 
			}
            if (cm.getChar().getCSPoints(1) >= buynum * itemlist[selects][1]) {
                cm.getChar().modifyCSPoints(1, -buynum * itemlist[selects][1]);
                cm.gainItem(itemlist[selects][0], buynum);
                cm.sendOk("����ɹ��ˣ�");
                cm.dispose();
            } else {
                cm.sendOk("�Բ�����û���㹻�ĵ��");
                cm.dispose();
            }
        }
    }//mode
}//f