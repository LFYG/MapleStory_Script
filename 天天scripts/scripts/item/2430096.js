status = -1;
var itemList = Array(
    //��Ʒ���� ����  ����
Array(1102476, 1, 1), //ŵ�����Ǵ�˹����
Array(1102477, 1, 1), //ŵ�ͺն�÷˹����
Array(1102478, 1, 1), //ŵ�Ϳ�������
Array(1102479, 1, 1), //ŵ������������
Array(1102480, 1, 1)  //ŵ�Ͱ���̩����
);

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            im.sendOk("����ʹ���𣿡��ҵĶ������и���#b�������λ���ᡢװ�����������#kŶ��");
            im.safeDispose();
        }
        status--;
    }
    if (status == 0) {
        var  CounJl=0;
       for (var i = itemList.length - 1; i >= 0; i--) {
           CounJl+= itemList[i][1];
        } 

        var chance = Math.floor(Math.random() * CounJl);
        var finalitem = Array();
        for (var i = 0; i < itemList.length; i++) {
            if (itemList[i][1] >= chance) {
                finalitem.push(itemList[i]);
                break;
            }
             chance = chance - itemList[i][1];
        }
        if (finalitem.length != 0) {
            var item;
            var random = new java.util.Random();
            var finalchance = random.nextInt(finalitem.length);
            var itemId = finalitem[finalchance][0];
            var quantity = finalitem[finalchance][2];
            //var notice = finalitem[finalchance][3];
            item = im.gainGachaponItem(itemId, quantity, "������", 3);
            if (item != -1) {
		im.gainItem(2430096, -1);
                im.sendOk("������ #b#t" + item + "##k " + quantity + "����");
            } else {
                im.sendOk("����ȷ���ڱ�����װ�������ģ������������Ƿ���һ�����ϵĿռ䡣");
            }
            im.safeDispose();
        } else {
            im.sendOk("һ�Ű���Ʈ��,ʲô�¶�û�з�����!!");
            im.safeDispose();
        }
    }
}