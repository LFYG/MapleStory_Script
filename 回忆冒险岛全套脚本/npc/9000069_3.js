var a = 0;
var text;
var selects; //��¼��ҵ�ѡ��
var buynum = 0;
var itemlist = Array(
Array(2049323, 15),
//Array(2049124, 3),
//Array(2049116, 3),
//Array(2049137, 15),
//Array(2049136, 12),
Array(2049137, 15),
Array(2340000, 2),
Array(2049116, 2),
Array(2049124, 2),
Array(2049750, 30),
Array(2040874,24),// - �������׹������� - Ϊ�������������������ԡ�\n�ɹ��ʣ�100%����������+4
Array(2040875,24),//  - ��������ħ������ - Ϊ��������ħ�����������ԡ�\n�ɹ��ʣ�100%��ħ��������+4
Array(2613000,36),//  - �ǻ����������������� - Ϊ���������������������������ԡ�
Array(2613001,36),//  - �ǻ�������ħ�������� - Ϊ����������������ħ�������ԡ�
Array(2612010,36),//  - �ǻ�˫���������������� - Ϊ˫�������������������������ԡ�
Array(2047818, 88), // - ���˵�˫����������������100% - ��˫�������ϸ������������������ԡ�
Array(2046996, 88), // - ���˵ĵ�����������������100% - �Ե����������ӹ�����������ԡ�
Array(2046997, 88), // - ���˵ĵ�������ħ������100% - �Ե�����������ħ��������ԡ�
Array(2046913,24), // �������嵥���������������� 100% // Ϊ�����������ӹ��������ԡ�
Array(2046914,24), // �������嵥������ħ������ 100% // Ϊ������������ħ�����������ԡ�
Array(2046173,24), // ��������˫���������������� 100% // Ϊ˫���������ӹ��������ԡ�
Array(2046577,22), // ������������������� 100% // Ϊ���������������ԡ�
Array(2046578,22), // ������������������� 100% // Ϊ���������������ԡ�
Array(2046579,22), // ��������������ݾ��� 100% // Ϊ���������������ԡ�
Array(2046580,22), // ������������������� 100% // Ϊ���������������ԡ�
Array(2046763,22), // ����������Ʒ�������� 100% // Ϊ��Ʒ�����������ԡ�
Array(2046764,22), // ����������Ʒ�������� 100% // Ϊ��Ʒ�����������ԡ�
Array(2046765,22), // ����������Ʒ���ݾ��� 100% // Ϊ��Ʒ�����������ԡ�
Array(2046766,22)// ����������Ʒ�������� 100% // Ϊ��Ʒ�����������ԡ�*/
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
            cm.sendNext("���빺��" + buynum + "��#r#i" + itemlist[selects][0] + "##k��\r\n�㽫ʹ�õ�" + (buynum * itemlist[selects][1]) + "ѩ���ҡ�\r\n#e#rѩ���Ҳ���֧��ʱ�������ù���Ҳ���ʣ�ಿ�֡�#n#k");
        } else if (a == 3) {
			var itemid = itemlist[selects][0];
			if (cm.getSpace(Math.floor(itemid/1000000))<=2) {
				cm.sendOk("���ı����ռ䲻�㣬��������ٹ���");
				cm.dispose();
				return; 
			}
            var quantity = buynum * itemlist[selects][1];
			var _q = getNeeds(quantity);
            if (canBuy(_q)) {
                pay(_q);
                cm.gainItem(itemlist[selects][0], buynum);
                cm.sendOk("����ɹ��ˣ�");
                cm.dispose();
            } else {
               cm.sendOk("�Բ�����û���㹻��ѩ���һ��߹������ҡ�");
                cm.dispose();
            }
        }
    }//mode
}//f

function getNeeds(quantity) {
	var _xq = quantity;
	var _gq = 0;
	if (!cm.haveItem(4310014, quantity)) {
		_xq = cm.getItemQuantity(4310014);
		_gq = quantity-_xq;
	}
	return Array(_xq, _gq);
}
function pay(q) {
	if (q[0]>0)
		cm.gainItem(4310014, -q[0])
	if (q[1]>0)
		cm.gainItem(4000463, -q[1]);
}
function canBuy(q) {
	if (cm.haveItem(4000463, q[1]))
		return true;
	else
		return false;
}