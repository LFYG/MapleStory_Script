status = -1;
var itemList = Array(
Array(2043003, 600, 1, 3),
Array(2043103, 600, 1, 3),
Array(2043203, 600, 1, 3),
Array(2043303, 600, 1, 3),
Array(2043703, 600, 1, 3),
Array(2043803, 600, 1, 3),
Array(2044003, 600, 1, 3),
Array(2044019, 600, 1, 3),
Array(2044103, 600, 1, 3),
Array(2044203, 600, 1, 3),
Array(2044303, 600, 1, 3),
Array(2044403, 600, 1, 3),
Array(2044503, 600, 1, 3),
Array(2044603, 600, 1, 3),
Array(2044703, 600, 1, 3),
Array(2044815, 600, 1, 3),
Array(2044908, 600, 1, 3)
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
        if (itemList.length != 0) {
            var item;
            var random = new java.util.Random();
            var finalchance = Math.floor(Math.random() * itemList.length); 
            var itemId = itemList[finalchance][0];
            var quantity = itemList[finalchance][2];
            var notice = itemList[finalchance][3];
          item = im.gainGachaponItem(itemId, 1, "�������", notice);
          //item = im.gainGachaponItem(itemId, 1, "�������", 1, true);
          // im.worldMessage(itemId);
          if (item != -1) {
          // if (!im.canHold(itemId, 1))
          // {
         //         im.gainItem(itemId,1);
                 im.gainItem(2430066, -1);
                  im.sendOk("������ #b#t" + item + "##k " + quantity + "����");
         } else {
         
               im.sendOk("����ȷ���ڱ�����װ�������ģ������������Ƿ���1�����ϵĿռ䡣");
            }
            im.safeDispose();
        } else {
            im.sendOk("�������������ʲô��û���õ���");
            im.safeDispose();
        }
    }
}