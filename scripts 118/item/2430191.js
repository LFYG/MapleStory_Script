/* �ɰ����������� */

var status;

var kongwei = 2;
var item = 2430191;
var items;
var itemss;

var item1 = 3700012;
var item2 = 1142263;

var lvl;
var names;
var text0 = " ";
var zbData = Array(
//"����ɰ�", 
3700012, 1, 0,
//"�ɰ�������", 
1142263, 1, 0);

var itemid = 1302078;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        im.dispose();
    } else {
        if (mode == 0) {
            im.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
        if (status == 0) {

                    names = im.getVipname();
                    lvs = im.getPlayer().getLevel();

                    for (var i = 0; i <= zbData.length; i++)
                    if (i % 3 == 0 && (zbData[i + 2] <= lvs)) {
                        text0 += "\r\n#b#i" + zbData[i] + ":# #t" + zbData[i] + "#";
                    }

       im.sendSimple("#r" + im.getVipname() + " #k ���Ƿ�Ҫ�� #b#i" + item + ":# #t" + item + "# #k?\r\n#d��������һ����Ʒ��\r\n" + text0 + "\r\n#L0##k�� #b#i" + item + ":# #t" + item + "# #l\r\n#k#L1#�����Ի�#l");



        } else if (status == 1) {

         if (im.getSpace(1) >= kongwei) {

                for (var ii = 0; ii <= zbData.length; ii++)
                    if (ii % 3 == 0 && (items = zbData[ii]) && (itemss = zbData[ii + 1])) {
                        im.gainItem(items,itemss);
                    }

               if (im.getChar().getAccountID() > 1) {
                   im.gainItem(item, -1);
                 }

               im.sendOk("#d" + names + " #k ���Ѿ��� #b#i" + item + ":# #t" + item + "# #k ���������Ʒ��" + text0 + "\r\n\r\n#k���͵����� #r����#k �\r\n#r��ע��鿴�� ");
                im.dispose();

            } else {
                im.sendOk("���� #rװ����#k �ռ�û��#r#e " + kongwei + " #n#k����λ���޷���� #b#i" + item + ":# #t" + item + "# #k ���������Ʒ:" + text0);
                im.dispose();
            }


        }
    }
}









/*
            switch (selection) {
            case 0:
                im.gainItem(1662006,1);
                im.gainItem(1672008,1);
                im.gainItem(2430466,-1);
                im.dispose(); 
                break;
            case 1:
                im.dispose(); 
                break;
            case 2:
                im.warp(102000000, 0);
                break;
            case 3:
                im.warp(103000000, 0);
                break;
            }
*/