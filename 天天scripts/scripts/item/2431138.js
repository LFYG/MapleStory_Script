status = -1;
var itemList = Array(
    //��Ʒ���� ����  ����
    Array(1432086, 1, 1),
    Array(1052314, 1, 1),
    Array(1082295, 1, 1),
    Array(1152108, 1, 1),
    Array(1102275, 1, 1),
    Array(1003172, 1, 1),
    Array(1072485, 1, 1),
    Array(1402095, 1, 1),
    Array(1003173, 1, 1),
    Array(1152110, 1, 1),
    Array(1102276, 1, 1),
    Array(1082296, 1, 1),
    Array(1052315, 1, 1),
    Array(1072486, 1, 1),
    Array(1372084, 1, 1),
    Array(1382104, 1, 1),
    Array(1212014, 1, 1),
    Array(1152111, 1, 1),
    Array(1003174, 1, 1),
    Array(1102277, 1, 1),
    Array(1082297, 1, 1),
    Array(1052316, 1, 1),
    Array(1072487, 1, 1),
    Array(1452111, 1, 1),
    Array(1462099, 1, 1),
    Array(1152112, 1, 1),
    Array(1003175, 1, 1),
    Array(1003409, 1, 1),
    Array(1102278, 1, 1),
    Array(1082298, 1, 1),
    Array(1052317, 1, 1),
    Array(1072488, 1, 1),
    Array(1242042, 1, 1),
    Array(1332130, 1, 1),
    Array(1362019, 1, 1),
    Array(1472122, 1, 1),
    Array(1152113, 1, 1),
    Array(1003176, 1, 1),
    Array(1102279, 1, 1),
    Array(1082299, 1, 1),
    Array(1052318, 1, 1),
    Array(1072489, 1, 1),
    Array(1222014, 1, 1),
    Array(1242014, 1, 1),
    Array(1482084, 1, 1),
    Array(1492085, 1, 1),
    Array(1532018, 1, 1),
    Array(1302152, 1, 1),
    Array(1522018, 1, 1),
    Array(1232014, 1, 1),
    Array(1322096, 1, 1),
    Array(1342036, 1, 1),
    Array(01542015, 1, 1) //��������
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
        var CounJl = 0;
        for (var i = itemList.length - 1; i >= 0; i--) {
            CounJl += itemList[i][1];
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
                im.gainItem(2431138, -1);
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
