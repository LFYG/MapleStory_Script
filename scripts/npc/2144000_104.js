var status = 0;


var vipname;
var texts = "#r";
var talks;
var titems = 4251202;
var reborns;

var nitem1 = 4021010;//ʱ��֮ʯ
var nitem2 = 4021022;//̫������

var maples;

var beibao = 2;
var beibaokj = 1;

var chongxiu1 = Array(
1, 200, 100, 1, 1,
2, 202, 200, 2, 2,
3, 204, 30, 3, 3,
4, 206, 400, 4, 4,
5, 208, 500, 5, 5,
6, 210, 600, 6, 6,
7, 212, 700, 7, 7,
8, 214, 800, 8, 8,
9, 216, 900, 9, 9,
10, 218, 1000, 10, 10,
11, 220, 1100, 11, 11,
12, 222, 1200, 12, 12,
13, 224, 1300, 13, 13,
14, 226, 1400, 14, 14,
15, 228, 1500, 15, 15,
16, 230, 1600, 16, 16,
17, 232, 1700, 17, 17,
18, 234, 1800, 18, 18,
19, 236, 1900, 19, 19,
20, 238, 2000, 20, 20,
21, 240, 2100, 21, 21,
22, 243, 2200, 22, 22,
23, 246, 2300, 23, 23,
24, 249, 2400, 24, 24,
25, 252, 2500, 25, 25);

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

          vipname = cm.getVipname();
          reborns = cm.getPlayer().getReborns();
         // maples = getMaplewing(maple);
          talks = "#r ���������T��#i" + titems + "##r   ��������   #i" + titems + "# #r��T�������� \r\n";
          texts += talks;

          texts += "#e#r���޶�ʮ�����죬��ת����!#n\r\n#d" + vipname + " , Ŀǰ������޾���Ϊ��  #e#r" + reborns + "#n  ����\r\n#b�����Ƿ���������������:\r\n";


                    for (var i = 0; i <= chongxiu1.length; i++)
                    if (i % 5 == 0 && (chongxiu1[i + 3] >= 0)) {
                        texts += "\r\n#r�������� #d��#e#r " + chongxiu1[i] + "#n #d���� #g����Ҫ��:\r\n#b�ȼ� #e#r" + chongxiu1[i + 1] + " #n#b���� || ���׵�#r#e " + chongxiu1[i + 2] + "#n #b||#i" + nitem1 + ":##e#r" + chongxiu1[ i + 3] + "#n#b�� ||#i" + nitem2 + ":##e#r" + chongxiu1[i + 4] + "#n#b��\r\n";
                    }

             texts += "#i" + nitem1 + ":# #i" + nitem2 + ":# �����ù��׵���Զһ�����\r\n\r\n#k#L1#������һҳ#l"


          cm.sendSimple(texts);
         // cm.dispose();
          

     } else if (status == 1) {
         switch (selection) {
               case 1:
                      cm.dispose();
                      cm.openNpc(2144000, 101);
                      break;
               case 2:
                      cm.dispose();
                      cm.openNpc(2144000, 102);
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