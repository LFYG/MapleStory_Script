var status = 0;


var vipname;
var texts = "#r";
var talks;
var titems = 4251202;
var reborns;

var nitem1 = 4021010;//ʱ��֮ʯ
var nitem2 = 4021022;//̫������

var nlv;
var nmaple;
var nitems1;
var nitems2;

var hlv;
var hmaple;
var hitem1;
var hitem2;

var beibao = 2;
var beibaokj = 1;


var chongxiu1 = Array(
1, 200, 10, 1, 1,
2, 202, 20, 2, 2,
3, 204, 30, 3, 3,
4, 206, 40, 4, 4,
5, 208, 50, 5, 5,
6, 210, 60, 6, 6,
7, 212, 70, 7, 7,
8, 214, 80, 8, 8,
9, 216, 90, 9, 9,
10, 218, 100, 10, 10,
11, 220, 110, 11, 11,
12, 222, 120, 12, 12,
13, 224, 130, 13, 13,
14, 226, 140, 14, 14,
15, 228, 150, 15, 15,
16, 230, 160, 16, 16,
17, 232, 170, 17, 17,
18, 234, 180, 18, 18,
19, 236, 190, 19, 19,
20, 238, 200, 20, 20,
21, 240, 210, 21, 21,
22, 243, 220, 22, 22,
23, 246, 230, 23, 23,
24, 249, 240, 24, 24,
25, 252, 250, 25, 25);



var cx1d = Array(
1, 150, 100, 0,
2, 325, 200, 0,
3, 525, 300, 0,
4, 750, 400, 0,
5, 1000, 500, 0,
6, 1250, 600, 0,
7, 1525, 700, 0,
8, 1825, 800, 0,
9, 2150, 900, 0,
10, 2500, 1000, 0,
11, 2850, 1100, 0,
12, 3225, 1200, 0,
13, 3625, 1300, 0,
14, 4050, 1400, 0,
15, 4500, 1500, 0,
16, 4950, 1600, 0,
17, 5425, 1700, 0,
18, 5925, 1800, 0,
19, 6450, 1900, 0,
20, 7000, 2000, 0,
21, 7550, 2100, 0,
22, 8125, 2200, 0,
23, 8725, 2300, 0,
24, 9350, 2400, 0,
25, 9999, 3333, 0);


var chongxiu2 = Array(
1, 200, 10, 1, 0,
2, 202, 20, 0,
3, 204, 30, 0,
4, 206, 40, 0,
5, 208, 50, 0,
6, 210, 60, 0,
7, 212, 70, 0,
8, 214, 80, 0,
9, 216, 90, 0,
10, 218, 100, 0,
11, 220, 110, 0,
12, 222, 120, 0,
13, 224, 130, 0,
14, 226, 140, 0,
15, 228, 150, 0,
16, 230, 160, 0,
17, 232, 170, 0,
18, 234, 180, 0,
19, 236, 190, 0,
20, 238, 10, 0,
21, 240, 10, 0,
22, 243, 20, 0,
23, 246, 30, 0,
24, 249, 40, 0,
25, 252, 50, 0);



function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (cm.getMapId() == 180000001) {
            cm.sendOk("���ź�������ΪΥ���û����򱻽�ֹ��Ϸ���������������ϵ����Ա.")
            cm.dispose();
        } else if (status == 0) {

          talks = "#r ���������T��#i" + titems + "##r   ��������   #i" + titems + "# #r��T�������� \r\n";
          texts += talks;

          vipname = cm.getVipname();
          reborns = cm.getPlayer().getReborns();

          hlv = cm.getPlayer().getLevel();
          hmaple = cm.getMaplewing("maple");
          hitem1 = cm.getPlayer().getItemQuantity(nitem1);
          hitem2 = cm.getPlayer().getItemQuantity(nitem2);

          for (var i = 0; i <= chongxiu1.length; i++)
          if (i % 5 == 0 && (chongxiu1[i + 3] >= 0)) {

             nlv = chongxiu1[i + 1];
             nmaple = chongxiu1[i + 2];
             nitems1 = chongxiu1[i + 3];
             nitems2 = chongxiu1[i + 4];

         }

            texts += "#b��Ŀǰ�ĵȼ�Ϊ: #e#r" + hlv + "#n #bӵ��#i" + nitem1 + ":# #e#r" + hitem1 + " #n�� || #i" + nitem2 + ":# #e#r" + hitem2 + " #n�� \r\n#r�������޾���Ϊ:  ��#e " + reborns + " #n���죬�������� #e" + (reborns +1) + " #n���� ������Ϊ:\r\n�ȼ��ﵽ #r#e" + nlv + " ��Ҫ #i" + nitem1 + ":# #e#r" + nitems1 + " #n�� || #i" + nitem2 + ":# #e#r" + nitems2 + " #n�� \r\n;

         if ((hlv >= nlv)&&(hmaple >= nmaple)&&(hitems1 >= nitem1)&&(hitems2 >= nitem2)) {
            selection = 0;
            texts += "\r\n#e#r���Ѿ���������Ҫ��! ���Ƿ�Ҫ����ʱ���ϴ��?";
            cm.sendYesNo(texts);

         } else {
             texts += "\r\n#r#e�㻹����������Ҫ���޷�����ʱ���ϴ��!\r\n\r\n#b#L1#������һҳ#l\r\n#L#�����Ի�#l";
             cm.sendSimple(texts);
         }
            

/*

          texts += "#e#r���޶�ʮ�����죬��ת����!#n\r\n#d" + vipname + " , Ŀǰ������޾���Ϊ��  #e#r" + reborns + "#n  ����\r\n#b�����Ƿ���������������:\r\n";


                    for (var i = 0; i <= chongxiu1.length; i++)
                    if (i % 5 == 0 && (chongxiu1[i + 3] >= 0)) {
                        texts += "\r\n#r�������� #d��#e#r " + chongxiu1[i] + "#n #d���� #g����Ҫ��:\r\n#b�ȼ� #e#r" + chongxiu1[i + 1] + " #n#b���� || ���׵�#r#e " + chongxiu1[i + 2] + "#n #b||#i" + nitem1 + ":##e#r" + chongxiu1[ i + 3] + "#n#b�� ||#i" + nitem2 + ":##e#r" + chongxiu1[i + 4] + "#n#b��\r\n";
                    }

             texts += "\r\n#k#L1#������һҳ#l"


          cm.sendSimple(texts);
         // cm.dispose();
          
*/
     } else if (status == 1) {
         switch (selection) {
               case 0:
                      cm.dispose();
                      cm.openNpc(2144000, 101);
                      break;

               case 1:
                      cm.dispose();
                      cm.openNpc(2144000, 101);
                      break;
               case 2:
                      cm.dispose();
                   //   cm.openNpc(2144000, 102);
                      break;
               case 3:
                      cm.dispose();
                      cm.openNpc(2144000, 103);
                      break;
               case 4:
                      cm.dispose();
                      cm.openNpc(2144000, 104);
                      break;
          }

       }


  }