/* ���������� */

var status;

var kongwei = 1;// װ���� ��Ҫ�Ŀռ�λ��
var item = 2430483;// ��ʹ�õ���Ʒ ID
var items;
var itemss;
var itemid;
var viplv;

var item1 = 3700012;
var item2 = 1142263;

var lvl;
var names;
var text0 = " ";
var text1 = " ";

var zbData = Array(
//��ƷID��������Ҫ��ȼ���VIP�ȼ�


//"��*���ѵ�ð��֮��(սʿ)
1122122, 1, 0, 0,
//"��*���ѵ�ð��֮��(ħ��ʦ)"
1122123, 1, 0, 0,
//��*���ѵ�ð��֮��(������)"
1122124, 1, 0, 0,
//��*���ѵ�ð��֮��(����)
1122125, 1, 0, 0,
//��*���ѵ�ð��֮��(����)"
1122126, 1, 0, 0,

//"�桤����ð��֮��ר��Ǳ��������
2049405, 1, 0, 0,

//"���ѵ�ð��֮��(սʿ)
1122143, 1, 0, 0,
//"���ѵ�ð��֮��(ħ��ʦ)"
1122144, 1, 0, 0,
//���ѵ�ð��֮��(������)"
1122145, 1, 0, 0,
//���ѵ�ð��֮��(����)
1122146, 1, 0, 0,
//���ѵ�ð��֮��(����)"
1122147, 1, 0, 0,
//�Ϲ����Ž�ָLV49"
1112494, 1, 0, 0,


//"���յ�׹"
1122104, 1, 0, 0);

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
                    viplv = im.getVip();
                    names = im.getVipname();
                    lvs = im.getPlayer().getLevel();

                    for (var i = 0; i <= zbData.length; i++)
                    if (i % 4 == 0 && (zbData[i + 2] <= lvs)) {
                        text0 += "\r\n#b#L" + zbData[i] + "##i" + zbData[i] + ":# #t" + zbData[i] + "##l";
                    }

       im.sendSimple("#r" + im.getVipname() + " #k ������ѡ���� #b#i" + item + ":# #t" + item + "# #k\r\n#d�������µ��κ�һ����Ʒ��\r\n" + text0 + "\r\n");



        } else if (status == 1) {

         if (im.getSpace(1) >= kongwei) {
               itemid = selection;
               items = selection;
               text1 = "#b#i" + items + ":# #t" + items + "# #k";
                for (var ii = 0; ii <= zbData.length; ii++)
                    if (ii % 4 == 0 && (zbData[ii] == items)) {
                         itemss = zbData[ii + 1]
                       // im.gainItem(items,itemss);
                    }
                   //     im.gainItem(items,itemss);
               if (im.getChar().getAccountID() > 1) {
                   im.gainItem(item, -1);
                 }
                        im.gainItem(itemid, itemss);
               im.sendOk("#d" + names + " #k ������Ʒ#b#i" + item + ":# #t" + item + "# #k�ɹ���\r\n���Ѿ��� #b#i" + item + ":# #t" + item + "# #k ���������Ʒ��\r\n\r\n" + text1 + "\r\n\r\n#k���͵����� #r����#k �\r\n#r��ע��鿴�� " + items);
                im.dispose();

            } else {
                im.sendOk("���� #rװ����#k �ռ�û��#r#e " + kongwei + " #n#k����λ���޷���� #b#i" + item + ":# #t" + item + "# #k ���������Ʒ:" + text0);
                im.dispose();
            }


        }
    }
}





/*

                for (var ii = 0; ii <= zbData.length; ii++)
                    if (ii % 4 == 0 && (items = zbData[ii]) && (itemss = zbData[ii + 1])) {
                        im.gainItem(items,itemss);
                    }
*/
