status = -1;
var itemList;
var random = java.lang.Math.floor(Math.random() * 7 + 1);
if(random == 1){
itemList = Array(
// ------ ���� ------
Array(3994059, 500, 1, 3), //A��Ǳ�ܾ���
Array(3994060, 500, 1, 3), //S��Ǳ�ܾ��� 30%
Array(3994061, 500, 1, 3), //���ƹ����������30%
Array(3994062, 500, 1, 3), //����ħ���������30%
Array(3994063, 500, 1, 3), //Ʒ�������׹���������
Array(3994064, 500, 1, 3), //Ʒ�������׹���������
Array(3994065, 500, 1, 3), //���˻������30%
Array(3994066, 500, 1, 3), //��ҽ���ᡪ��
Array(3994067, 500, 1, 3), //��ҽ���ᡪ��
Array(3994068, 500, 1, 3), //�����ҽ����
Array(3994069, 500, 1, 3), //��ҽ����
Array(3994070, 500, 1, 3), //��ҽ����
Array(3994071, 500, 1, 3), //��ҽ����
Array(3994079, 500, 1, 3), //Ʒ�������׹���������
Array(3994080, 500, 1, 3), //Ʒ�������׹���������
Array(3994081, 500, 1, 3), //���˻������30%
Array(3994082, 500, 1, 3), //��ҽ���ᡪ��
Array(3994083, 500, 1, 3), //��ҽ���ᡪ��
Array(3994084, 500, 1, 3), //�����ҽ����
Array(3994070, 500, 1, 3), //��ҽ����
Array(3994072, 500, 1, 3)  //��������
);
} else if(random == 2){
itemList = Array(
// ------ ҩƷ ------
Array(3994073, 500, 1, 3)  //ӭ��������
);
} else if(random == 3){
itemList = Array(
// ------ ���� ------
Array(3994074, 500, 1, 3)  //�����1��ʹ��ȯ
);
} else if(random == 4){
itemList = Array(
// ------ �ƺ� ------
Array(3994075, 500, 1, 3)  //��ħ�����߳ɾʹ��
);
} else if(random == 5){
itemList = Array(
// ------ ���� ------
Array(3994076, 500, 1, 3)  //��Ʒ�
);
} else if(random == 6){
itemList = Array(
// ------ װ�� ------
Array(3994077, 500, 1, 3)  //������˵ָ��
);
} else if(random == 7){
itemList = Array(
// ------ ���� ------
Array(3994078, 500, 1, 3)  //ͻ��һ��֮ʯ 50%
);
}

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            im.sendOk("����ʹ���𣿡��ҵĶ������и���#b�������λ���ᡢװ�����������#kŶ��");
            im.dispose();
        }
        status--;
    }
    if (status == 0) {
        var chance = Math.floor(Math.random() * 1100);
        var finalitem = Array();
        for (var i = 0; i < itemList.length; i++) {
            if (itemList[i][1] >= chance) {
                finalitem.push(itemList[i]);
            }
        }
        if (finalitem.length != 0) {
            var item;
            var random = new java.util.Random();
            var finalchance = random.nextInt(finalitem.length);
            var itemId = finalitem[finalchance][0];
            var quantity = finalitem[finalchance][2];
            var notice = finalitem[finalchance][3];
            item = im.gainGachaponItem(itemId, quantity, "ÿ��������", notice);
            if (item != -1) {
		im.gainItem(2430781, -1);
                im.sendOk("������ #b#t" + item + "##k " + quantity + "����");
            } else {
                im.sendOk("����ȷ���ڱ�����װ�������ģ������������Ƿ���һ�����ϵĿռ䡣");
            }
            im.dispose();
        } else {
	    im.gainItem(2430781, -1);
            im.sendOk("�������������ʲô��û���õ���");
            im.dispose();
        }
    }
}