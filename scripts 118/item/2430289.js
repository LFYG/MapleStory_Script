var mds;
var kitms;
var mdss;

/* 8��������� ���ʽű� */

var kongwei = 1;// ��Ҫ�Ŀռ�λ��
var item = 2430289;// ��ʹ�õ���Ʒ ID


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

               mds = "#r �������T��#i4251202##r ð�յ�8������� #i4251202# #r��T������ \r\n";

               if ((im.getSpace(1) >= 1)&&(im.getSpace(2) >= 1)&&(im.getSpace(3) >= 1)&&(im.getSpace(4) >= 1)&&(im.getSpace(5) >= 1)) {

               kitms =  im.MaplwingSJTP(" 8������� ");

               mdss = mds + "\r\n��ϲ�������������Ʒ��\r\n\r\n#i" + kitms + ":##b#t" + kitms +":#\r\nĿǰ���Ĺ��׵����Ϊ��#e#r" + im.getMaplewing("maple") + "#n\r\n ";
              im.gainItem(2430289, -1);


              } else {

              mdss = mds + "\r\n#g��ȡ����ʧ��\r\n�뽫�������б�����Ŀ����һ���λ����Ŷ��";
 
              }

              im.sendOk(mdss);
              im.dispose();

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

function start() {



               mds = "#r �������T��#i4251202##r ð�յ�8������� #i4251202# #r��T������ \r\n";

               if ((im.getSpace(1) >= 1)&&(im.getSpace(2) >= 1)&&(im.getSpace(3) >= 1)&&(im.getSpace(4) >= 1)&&(im.getSpace(5) >= 1)) {

               kitms =  im.MaplwingSJTP(" ð�յ�8������� ");

               mdss = mds + "\r\n��ϲ�������������Ʒ��\r\n\r\n#i" + kitms + ":##b#t" + kitms +":#\r\nĿǰ���Ĺ��׵����Ϊ��#e#r" + im.getMaplewing("maple") + "#n\r\n ";
              im.gainItem(2430289, -1);


              } else {

              mdss = mds + "\r\n#g��ȡ����ʧ��\r\n�뽫�������б�����Ŀ����һ���λ����Ŷ��";
 
              }

              im.sendOk(mdss);
              im.dispose();


}

*/