var status = -1;

var selectedType = 0;
var selectedMeso = 0;

var moneyMeso = 1;

var youxibi = 100000000;
var dianjuan = 10000;

var sxf = 1;//ת����Ҫ��������


var dsd = 1;//�Ի�ר��
var md1;
var md2;
var md3;
var md4;
var md5;
var md6;

var zhs;

var hmose;


var name;
var cname = "�ҿ�";
var caid;

var gpms;


var mds;
var mes;

var wmose;
var emose;

var samose;
var savrtime;
var gainmose;
var huoyue;
var fengyb;

var fybs;


var gxs;

var mima;
var cardlv = 0;

var fengyz;

var items = 4021004;

var zjlxs



var kaitem = Array(
//�Ŀ�
11, 4021010,
//��
10, 4021007,
//�쿨
9, 4021021,
//�ڿ�
8, 4005004,
//�Ͽ�
7, 4005001,
//����
6, 4005003,
//�࿨
5, 4011008,
//�̿�
4, 4005002,
//�ƿ�
3,4021006,
//�ȿ�
2, 4005000,
//�׿�
1, 4021007,
//�ҿ�
0, 4021004);



var kaitems = Array(
//�Ŀ�
11, 4021010,
//��
10, 4021007,
//�쿨
9, 4021021,
//�ڿ�
8, 4005004,
//�Ͽ�
7, 4005001,
//����
6, 4005003,
//�࿨
5, 4011008,
//�̿�
4, 4005002,
//�ƿ�
3,4021006,
//�ȿ�
2, 4005000,
//�׿�
1, 4021007,
//�ҿ�
0, 4021004);

var kg1;
var kg2;
var kg3;
var kg4;
var kg5;
var kg6;


var gp1;
var gp2;
var gp3;

var namegp1 = "";
var namegp2 = "";
var namegp3 = "";

var rategp1 = 1;
var rategp2 = 1;
var rategp3 = 1;

var pgp1;
var pgp2;
var pgp3;

var lpgp1;
var lpgp2;
var lpgp3;

var jbss;

var cmose;
var qmose;

var shuru;

var amose;

var nowjb;
var das;

var zhid;
var zhms = "";

var trzhlv;
var trzhcl;
var trzhna;

var newitems;

var shuru1;
var shuru2;
var shuru3;
var shuru4;
var shuru5;
var shuru6;

var jbs1;

var zjsj = 999;//ծȯ�������ʱ��(����)
var zjlx;
var zjbl = 1;//ծȯÿ����ˢ�º����ĵ����ͱ���

var weiyj = 10;//ծȯδ��Լ��ʱ����ȡ ��Ҫ��ΥԼ�� ��λΪ��





function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        } else {
            cm.dispose();
           // status--;
        }

        if (status == 0) {



            mds = "#r ���������T��#i4251202##r  ���ڴ���  #i4251202# #r��T�������� \r\n#r";
            name = cm.getVipname();
            cname = cm.getColor();
            cardlv = cm.getMaplewing("cardlevel");
            caid = cm.getMaplewing("cardid");
            gxs = cm.getMaplewing("maple");
            wmose = cm.getMaplewing("wmose");
            emose = cm.getMaplewing("emose");
            samose = cm.getMaplewing("savemose");
            satime = cm.getMaplewing("havetime");
            gamose = cm.getMaplewing("gainmoses");
            fengyz = cm.getMaplewing("maplez");
            huoye = cm.getMaplewing("mapley");
            fengyb = cm.getMaplewing("mapleb");

            jbss = cm.getMeso();

            zjlx = cm.getPlayer().getMaplewingZJS(samose, 1);

        rategp1 = cm.getMaplewinggp("rate", 1);

        pgp1 = cm.getMaplewinggp("point", 1);

        lpgp1 = cm.getMaplewinggp("lastpoint", 1);


            fyb = cm.getMaplewing("mapleb");


           gpms = "#d���ʣ�#e#r" + rategp1 + " #n#b ��ǰ������#e#r" + pgp1 + " #n#d ��һ������#e#r" + lpgp1 + " #n\r\n#kע�⣺��Ʊ��Ϣ30��ˢ��һ�Σ��������µ�Ϊ׼��" ;


                    for (var i = 0; i <= kaitem.length; i++)
                    if (i % 2 == 0 && (kaitem[i] == cardlv)) {
                        items = kaitem[i + 1];
                    }


            mes = mds + "#r�𾴵� " + name + "��#k��ӭ��ʹ�ô���Ͷ�ʷ��񣡣�\r\n#b���������� #rMaplewingBank #b�˻���Ϣ��\r\n#d�� �� ID��#e#r " + caid + "   #n#d�˻����  #i" + items + "# #e#r" + cname + " #n#d #i" + items + "#   \r\n#b������#e#r" + gxs + " #n #b����#e#r " + wmose + "#n#b    �ڼ���#r#e" + emose + "#n#b \r\n#dծȯ������#e#r" + samose + "  #d#nʣ��ʱ�䣺#e#r" + satime + "  #d#n�����Ϣ��#e#r" + gamose + "\r\n#n#b��Ҷ������#e#r" + fengyz + "  #b#n��Ҵ�����#e#r" + fengyb + "  #b#n��Ծ������#e#r" + huoye + " \r\n#nĿǰ�������ծȯ����ÿ��ˢ�»����Ϣ = #e" + zjlx + "#n ���\r\n#n#L10050001#�򼶴�����#l  #L10050002#�ڼ�������#l  #L10050003#��������ծȯ#l\r\n#L10050004#��ȡ�����#l  #L10050005#�ڼ�ȡ�����#l  #L10050006#���ծȯ��Ϣ#l\r\n#L10050007#����ת�˷���#l  #L10050008#ˢ���˻���Ϣ#l  #L10050009#�����Ի�����#l\r\n\r\n#n#b������ #rMaplewingBank#b ��Ʊ������Ϣ��\r\n" + gpms;


            cm.sendSimple(mes); 



//PlayerToNpc ����һ����ҶԻ���



        } else if (status == 1) {


        switch (selection) {

        case 10050001:

             dsd = 1;

             cmose = jbss/10000;

             if (cmose > (2100000000 - wmose)) {
                amose = (2100000000 - wmose);
             } else {
                 amose = cmose;
             }

             md1 = mds + "\r\n#dĿǰ��ѡ�����#r �򼶴����� #d��\r\n#b���˻��ڵ� #r�����#b Ϊ��#r#e" + wmose + "#n  \r\n#b��������� #r�������#b Ϊ��#e#r" + jbss + "#n \r\n\r\n#dע�⣺���������ĵ�λΪ�� #r�� \r\n#b��������������Ҫ����#r ����Ŀ #b��������\r\n(ע������ֵ��Ҫ���������ܴ���������� #r#e" + amose + "#n#b  )\r\n";

                cm.sendGetNumber(md1, 1, 1, amose);

            break;

        case 10050002:

             dsd = 2;

             cmose =  (wmose - wmose%10000)/10000;

             // cmose = (jbss - jbss%100000000)/100000000;

             if (cmose > (2100000000 - emose)) {
                amose = (2100000000 - emose);
             } else {
                 amose = cmose;
             }

             md1 = mds + "\r\n#dĿǰ��ѡ�����#r �ڼ������� #d��\r\n#b���˻��ڵ� #r�ڼ����#b Ϊ��#r#e" + emose + "#n  #r�����#b Ϊ��#r#e" + wmose + "#n \r\n#b��������� #r�������#b Ϊ��#e#r" + jbss + "#n \r\n\r\n#dע�⣺���������ĵ�λΪ�� #r�� \r\n#b��������������Ҫ����#r �ڼ���Ŀ #b��������\r\n(ע������ֵ��Ҫ���������ܴ���������� #r#e" + amose + "#n#b  )\r\n";

                cm.sendGetNumber(md1, 1, 1, amose);

            break;

        case 10050003:


             dsd = 8;

             qmose = (2100000000 - jbss)/10000;

             jbs1 = jbss/10000;

             amose = wmose + jbs1;

             if (cm.getMaplewing("savemose") == 0) {

             md1 = mds + "\r\n#dĿǰ��ѡ�����#r ����ծȯ���� #d������������ծȯ��Ϣ��\r\n#bծȯ����#b ��#r#e" + cm.getMaplewing("savemose") + "#n  #bʣ��ʱ��#b ��#r#e" + cm.getMaplewing("havetime") + "#n  #b�����Ϣ#b ��#r#e" + cm.getMaplewing("gainmoses") + "#n \r\n#b���˻��ڵ� #r�����#b Ϊ��#r#e" + wmose + "#n \r\n#b��������� #r�������#b Ϊ��#e#r" + jbss + " = " + jbs1 + "#n ��\r\n#dע�⣺ծȯ�Ľ�ҵ�λΪ�� #r��#d\r\n���������Ϊ���������������ܺͣ�\r\n#b��������������Ҫ���� #rծȯ#b ������\r\n(ע������ֵ��Ҫ���������ܹ�������������#r#e" + amose + "#n#b )\r\n";

                cm.sendGetNumber(md1, 1, 1, amose);

               } else {

                dsd = 55554;

                cm.sendSimple(mds + "#r����ʧ�ܣ���Ŀǰ�Ѿ�������ծȯ�ˣ�\r\n#d����������¹���������ȡĿǰ��ծȯ����ͱ���\r\n#b���������� #rMaplewingBank #b�˻���Ϣ��\r\n#d�� �� ID��#e#r " + caid + "   #n#d�˻����  #i" + items + "# #e#r" + cname + " #n#d #i" + items + "#   \r\n#b������#e#r" + gxs + " #n #b����#e#r " + wmose + "#n#b    �ڼ���#r#e" + emose + "#n#b \r\n#dծȯ������#e#r" + samose + "  #d#nʣ��ʱ�䣺#e#r" + satime + "  #d#n�����Ϣ��#e#r" + gamose + "#n\r\nĿǰ�������ծȯ����ÿ��ˢ�»����Ϣ = #e" + zjlx + "#n ���\r\n#k#n#L0#���ؽ��ڴ���#l     #L1#�����Ի�#l ");

               }



           // cm.dispose();

            

          // cm.sendOk("�����ڴ�!!");

            break;



        case 10050004:

             dsd = 3;

             qmose = (2100000000 - (jbss - jbss%10000))/10000;

             if (wmose > qmose) {
                amose = qmose;
             } else {
                 amose = wmose;
             }

             md1 = mds + "\r\n#dĿǰ��ѡ�����#r ��ȡ����� #d��\r\n#b���˻��ڵ� #r�����#b Ϊ��#r#e" + wmose + "#n  \r\n#b�������� #r�������#b Ϊ��#e#r" + jbss + "#n \r\n\r\n#dע�⣺ȡ��������ĵ�λΪ��#r�� \r\n����������װ��#e#r " + qmose + " #n ���� ��\r\n#k��������������Ҫ��#r ����Ŀ #bȡ���������\r\n(ע������ֵ��Ҫ�������˻��ڵ� #rȡ���޶�#b ��#r#e" + amose + "#n ��#b )\r\n";

                cm.sendGetNumber(md1, 1, 1, amose);

            break;

        case 10050005:

             dsd = 4;

             qmose = (2100000000 - (jbss - jbss%100000000))/100000000;

             if (emose > qmose) {
                amose = qmose;
             } else {
                 amose = emose;
             }

             md1 = mds + "\r\n#dĿǰ��ѡ�����#r �ڼ�ȡ����� #d��\r\n#b���˻��ڵ� #r�ڼ����#b Ϊ��#r#e" + emose + "#n  \r\n#b�������� #r�������#b Ϊ��#e#r" + jbss + "#n \r\n\r\n#dע�⣺ȡ��������ĵ�λΪ��#r�� \r\n����������װ��#e#r " + qmose + " #n �ڽ�� ��\r\n#k��������������Ҫ��#r �ڼ���Ŀ #bȡ���������(ע������ֵ��Ҫ�����˻��ڵ� #rȡ���޶�#b ��#r#e" + amose + "#n ��#b )\r\n";

                cm.sendGetNumber(md1, 1, 1, amose);

            break;

        case 10050006:

               dsd = 9;

            if ((cm.getMaplewing("gainmoses") > 0) || (cm.getMaplewing("savemose") > 0)) {


             md1 = mds + "\r\n#dĿǰ��ѡ�����#r���ծȯ��Ϣ����#d�����������ĵ�ծȯ��Ϣ:#bծȯ������#r#e" + cm.getMaplewing("savemose") + "#n  #bʣ��ʱ�䣺#r#e" + cm.getMaplewing("havetime") + "#n  #b�����Ϣ��#r#e" + cm.getMaplewing("gainmoses") + "#n\r\n";


           if (cm.getMaplewing("havetime") == 0) {

              weiyj = 0;

             md2 = "#r����#eMapleWingBank#nԼ����ծȯʱ���Ѿ����ڣ�\r\n#d�ڱ���Լ�� #e#r" + cm.getMaplewing("savetime") +"#n����#d������õ���ϢΪ��#r#e"  + cm.getMaplewing("gainmoses") +" #n���\r\n#b��ȡ��������ñ���#r#e" + cm.getMaplewing("savemose") + "#n����#d+#b��Ϣ��#e#r" + cm.getMaplewing("gainmoses") +"#n���";

           } else {

              if (cm.getMaplewing("savemose") < 10) {
                   weiyj = 0;
              }

             md2 = "#r����#eMapleWingBank#nԼ����ծȯʱ�仹δ���ڣ�\r\n#r��������ھ���ȡϵͳ������ȡ�� #e#r" + weiyj + "W #n��ΥԼ��\r\n#d�ڱ���Լ�� #e#r" + cm.getMaplewing("savetime") +"#n����#d������õ���ϢΪ��#r#e"  + cm.getMaplewing("gainmoses") +"#n���\r\n#b��ȡ��������ñ���#r#e" + cm.getMaplewing("savemose") + "#n����#d+#b��Ϣ��#e#r" + cm.getMaplewing("gainmoses") +"#n���";

           }
                   jbs1 = jbss/10000;

               md2 += "\r\n#nĿǰ�������ծȯ����ÿ��ˢ�»����Ϣ = #e" + zjlx + "#n ���\r\n#b���˻��ڵ� #r�����#b Ϊ��#r#e" + wmose + "#n \r\n#b��������� #r�������#b Ϊ��#e#r" + jbss + " = " + jbs1 + "#n ��\r\n#b#L1#��ȡ��������Ϣ(���򲿷ִ�������Ŀ)#l  \r\n#L2#��ȡ��������Ϣ������#l";


           cm.sendSimple(md1 + md2);

          } else {
 
          dsd = 55554;

          md2 = mds + "\r\n#r�Բ�������Ϊ����ծȯ���޷�ʹ�ñ�����#d\r\n\r\n#L0#���ؽ��ڴ���#l     #L1#�����Ի�#l ";

           cm.sendSimple(md2);

          }


           // cm.dispose();
        //   cm.sendOk("�����ڴ�!!");

            break;


        case 10050007:

             dsd = 7;

           md1 = mds + "\r\n#d��������Ҫת�˵� #r#e�˻�ID#n��\r\n(�벻Ҫ�������Լ���ID��)";

                cm.sendGetNumber(md1, 1, 1, 999999);

            break;


        case 10050008:


                  cm.dispose();
                  cm.openNpc(9000086, 100500);
            break;

        case 10050009:

                  cm.dispose();

            break;




            }  //switch



         } else if (status == 2) {

            shuru = selection;

            md2 = mds + "\r\n#b��ȷ��Ҫ";

            if (dsd == 1) {

                dsd = 100;

                cm.sendYesNo(md2 + " ���� #r#e " + shuru + " #n���� #b�� ����Ŀ��");

            } else if (dsd == 2) {

                dsd = 200;

                cm.sendYesNo(md2 + " ���� #r#e " + shuru + " #n�ڽ�� #b�� �ڼ���Ŀ��");

            } else if (dsd == 3) {

                dsd = 300;

                cm.sendYesNo(md2 + " ȡ�� #r#e " + shuru + " #n���� #b�� ���ı�����");

            } else if (dsd == 4) {

                dsd = 400;

                cm.sendYesNo(md2 + " ȡ�� #r#e " + shuru + " #n�ڽ�� #b�� ���ı�����");



            } else if (dsd == 9) {

                dsd = 55553;

                var zjgainmose = cm.getMaplewing("gainmoses");
                var zjsavemose = cm.getMaplewing("savemose");

                var gbbjb = zjgainmose%10000;
                var cwjch = (zjgainmose - gbbjb)/10000;

                var nowjb = cm.getMeso();
                var tjbs;
                var lastjb;
                var lastcw;

                 if ((nowjb <= weiyj*10000) || (zjsavemose < 10)) {
                     weiyj = 0;
                 }


                if (selection == 2) {

                    tjbs = nowjb + zjgainmose + zjsavemose*10000;
                    lastjb = zjgainmose + zjsavemose*10000;

                    if (tjbs > 2100000000) {

                    lastjb = 2100000000 - nowjb;
                    
                    lastcw = (zjgainmose + zjsavemose*10000 - gbbjb)/10000;

                    } else {
                     lastcw = 0;

                    }

                } else if (selection == 1) {
                    tjbs = nowjb + gbbjb;
                    lastjb = gbbjb;
                    lastcw = cwjch + zjsavemose;

                }

                if (tjbs < 2100000000) {

                 cm.setMaplewing("savemose", 0);
                 cm.setMaplewing("savetime", 0);
                 cm.setMaplewing("havetime", 0);
                 cm.addMaplewing("gainmoses", -zjgainmose);
                 cm.addMaplewing("wmose", lastcw);
                 cm.gainMeso(lastjb - weiyj*10000);

                 md4 = mds + "#g��ȡ�ɹ���";
                 } else {
                 md4 = mds + "#g��ȡʧ�ܣ�#r��ı����޷�װ��#e#r" + lastjb +" #n��ң�\r\n�뻻��һ����ȡ��ʽ��";
                 }

                zhs = "\r\n#b���������� #rMaplewingBank #b�˻���Ϣ��\r\n#d�� �� ID��#e#r " + caid + "   #n#d�˻����  #i" + items + "# #e#r" + cname + " #n#d #i" + items + "#   \r\n#b������#e#r" + cm.getMaplewing("maple") + " #n #b����#e#r " + cm.getMaplewing("wmose") + "#n#b    �ڼ���#r#e" + cm.getMaplewing("emose") + "#n#b \r\n#n#b��Ҷ������#e#r" + cm.getMaplewing("maplez") + "  #b#n��Ҵ�����#e#r" + cm.getMaplewing("mapleb") + "  #b#n��Ծ������#e#r" + cm.getMaplewing("mapley") + " \r\n";


                md4 += "\r\n#b#L0#������ҳ��#l     #L1#�����Ի�#l\r\n\r\n";
                cm.sendSimple(md4 + zhs);



            } else if (dsd == 55554) {

                if (selection == 0) {

                  cm.dispose();
                  cm.openNpc(9000086, 100500);


                } else if (selection == 1) {

                  cm.dispose();
                }


            } else if (dsd == 7) {

                dsd = 700;

           if ((cm.getMaplewing("cardid", shuru) != -1) &&(shuru != caid)) {


            zhs = "\r\n#b���������� #rMaplewingBank #b�˻���Ϣ��\r\n#d�� �� ID��#e#r " + caid + "   #n#d�˻����  #i" + items + "# #e#r" + cname + " #n#d #i" + items + "#   \r\n#b������#e#r" + cm.getMaplewing("maple") + " #n #b����#e#r " + cm.getMaplewing("wmose") + "#n#b    �ڼ���#r#e" + cm.getMaplewing("emose") + "#n#b \r\n#n#b��Ҷ������#e#r" + cm.getMaplewing("maplez") + "  #b#n��Ҵ�����#e#r" + cm.getMaplewing("mapleb") + "  #b#n��Ծ������#e#r" + cm.getMaplewing("mapley") + " \r\n";

           zhid = shuru;

             trzhlv = cm.getMaplewing("cardlevel", zhid);

             trzhcl = cm.getColor(zhid);
             trzhna = cm.getMaplewings("cardname", zhid);

                    for (var ii = 0; ii <= kaitems.length; ii++)
                    if (ii % 2 == 0 && (kaitems[ii] == trzhlv)) {
                        newitems = kaitems[ii + 1];
                    }

           if (cm.getChar().getAccountID()==1) {

              zhms = "\r\n#b������ #e#r" + trzhna + "#n �� #rMaplewingBank #b��Ϣ��\r\n#d�� �� ID��#e#r " + zhid + "   #n#d�˻����  #i" + newitems + "# #e#r" + trzhcl + " #n#d #i" + newitems + "#   \r\n#b������#e#r" + cm.getMaplewing("maple", zhid) + " #n #b����#e#r " + cm.getMaplewing("wmose", zhid) + "#n#b    �ڼ���#r#e" + cm.getMaplewing("emose", zhid) + "#n#b \r\n#n#b��Ҷ������#e#r" + cm.getMaplewing("maplez", zhid) + "  #b#n��Ҵ�����#e#r" + cm.getMaplewing("mapleb", zhid) + "  #b#n��Ծ������#e#r" + cm.getMaplewing("mapley", zhid) + " \r\n";

           } else {

             zhms = "\r\n#b������ #e#r" + trzhna + "#n �� #rMaplewingBank #b��һЩ��Ϣ��\r\n#d�� �� ID��#e#r " + zhid + "   #n#d�˻����  #i" + newitems + "# #e#r" + trzhcl + " #n#d #i" + newitems + "#   \r\n";

           }

           md1 = mds + "\r\n#dĿǰ��ѡ����� #r����ת�˷���#d ��" + zhs + "#n#d��ѡ������Ҫ��ת�˷���\r\n#r#L1#������ת��#l  #L2#�ڼ�����ת��#l  #L3#��������ת��#l \r\n#L4#��Ծ����ת��#l  #L5#��Ҷ����ת��#l  #L6#�������ת��#l\r\n " + zhms;

           cm.sendSimple(md1);

          } else {

           cm.sendSimple(mds + " ������� �˻�ID  ������(����)��\r\n�벻Ҫ�������Լ���ID��\r\n�뷵���������룡��\r\n#b#L99#������ҳ��#l     #L98#�����Ի�#l");

          }



            } else if (dsd == 8) {

                dsd = 800;

            zjlxs = cm.getPlayer().getMaplewingZJS(shuru, 1);



           md1 = mds + "\r\n��ǰ��������Ҫ�����ծȯ����Ϊ��#e#r" + shuru + "#n\r\n#bĿǰծȯˢ��ʱ����Ϊ��#e#r " + zjbl + " #n����\r\n#d������������Ҫ����ծȯ��ʱ��(��λ����) ��\r\n#r(ע��Ŀǰ�������ծȯ����ÿ��ˢ�»����Ϣ = #e" + zjlxs + "#n ��� )";

                cm.sendGetNumber(md1, 1, 1, zjsj);






            } //dsd = 8
           






         } else if (status == 3) {



            md2 = mds + "\r\n#g�����ɹ���\r\n#bϵͳ�Ѿ���#e#r " + shuru;

             nowjb = cm.getMeso();

             das = "Ŀǰ���ı���������Ϊ�� #e#r" + nowjb + " #n";

           zhs = das + zhs;


            if (dsd == 100) {

            dsd = 55555;

            wmose += shuru;

            cm.gainMeso(-shuru*10000);
            cm.addMaplewing("wmose", shuru);

            zhs = "\r\n#b���������� #rMaplewingBank #b�˻���Ϣ��\r\n#d�� �� ID��#e#r " + caid + "   #n#d�˻����  #i" + items + "# #e#r" + cname + " #n#d #i" + items + "#   \r\n#b������#e#r" + cm.getMaplewing("maple") + " #n #b����#e#r " + cm.getMaplewing("wmose") + "#n#b    �ڼ���#r#e" + cm.getMaplewing("emose") + "#n#b \r\n#dծȯ������#e#r" + cm.getMaplewing("savemose") + "  #d#nʣ��ʱ�䣺#e#r" + cm.getMaplewing("havetime") + "  #d#n�����Ϣ��#e#r" + cm.getMaplewing("gainmoses") + "\r\n#n#b��Ҷ������#e#r" + cm.getMaplewing("maplez") + "  #b#n��Ҵ�����#e#r" + cm.getMaplewing("mapleb") + "  #b#n��Ծ������#e#r" + cm.getMaplewing("mapley") + " \r\n";

           zhs = das + zhs;

            cm.sendSimple(md2 + " #n���� #b�������� #rMaplewingBank#b �˻��ڣ�" + zhs + "\r\n#k#n#L0#���ؽ��ڴ���#l     #L1#�����Ի�#l ");
      //      cm.dispose();

            } else if (dsd == 200) {

            dsd = 55555;

            var nwmose = cm.getMaplewing("wmose");
          //  var nmeso = cm.getMeso();

            var ewmose = (nwmose -nwmose%10000)/10000;
        //    var emeso = (nmeso - nmeso%100000000)/100000000;

            var jwmose = 0;
         //   var jmeso= 0;
            var tsmose = 0;

            if (shuru < ewmose) {
                jwmose = ewmose;
          //      jmeso = shuru - emeso;
                tsmoes = shuru;

            } else {

                jwmose = ewmose;
              //  jmeso = emeso;
                tsmoes = jwmose;
            }



           // cm.gainMeso(-jmeso*100000000);
            cm.addMaplewing("wmose", -jwmose*10000);
            cm.addMaplewing("emose", tsmoes);

            zhs = "\r\n#b���������� #rMaplewingBank #b�˻���Ϣ��\r\n#d�� �� ID��#e#r " + caid + "   #n#d�˻����  #i" + items + "# #e#r" + cname + " #n#d #i" + items + "#   \r\n#b������#e#r" + cm.getMaplewing("maple") + " #n #b����#e#r " + cm.getMaplewing("wmose") + "#n#b    �ڼ���#r#e" + cm.getMaplewing("emose") + "#n#b \r\n#dծȯ������#e#r" + cm.getMaplewing("savemose") + "  #d#nʣ��ʱ�䣺#e#r" + cm.getMaplewing("havetime") + "  #d#n�����Ϣ��#e#r" + cm.getMaplewing("gainmoses") + "\r\n#n#b��Ҷ������#e#r" + cm.getMaplewing("maplez") + "  #b#n��Ҵ�����#e#r" + cm.getMaplewing("mapleb") + "  #b#n��Ծ������#e#r" + cm.getMaplewing("mapley") + " \r\n";

           zhs = das + zhs;

            cm.sendSimple(md2 + " #n�ڽ�� #b�������� #rMaplewingBank#b �˻��ڣ�" + zhs + "\r\n#k#n#L0#���ؽ��ڴ���#l     #L1#�����Ի�#l ");
     //       cm.dispose();

            } else if (dsd == 300) {

            dsd = 55555;

            cm.gainMeso(shuru*10000);
            cm.addMaplewing("wmose", -shuru);

            zhs = "\r\n#b���������� #rMaplewingBank #b�˻���Ϣ��\r\n#d�� �� ID��#e#r " + caid + "   #n#d�˻����  #i" + items + "# #e#r" + cname + " #n#d #i" + items + "#   \r\n#b������#e#r" + cm.getMaplewing("maple") + " #n #b����#e#r " + cm.getMaplewing("wmose") + "#n#b    �ڼ���#r#e" + cm.getMaplewing("emose") + "#n#b \r\n#dծȯ������#e#r" + cm.getMaplewing("savemose") + "  #d#nʣ��ʱ�䣺#e#r" + cm.getMaplewing("havetime") + "  #d#n�����Ϣ��#e#r" + cm.getMaplewing("gainmoses") + "\r\n#n#b��Ҷ������#e#r" + cm.getMaplewing("maplez") + "  #b#n��Ҵ�����#e#r" + cm.getMaplewing("mapleb") + "  #b#n��Ծ������#e#r" + cm.getMaplewing("mapley") + " \r\n";

           zhs = das + zhs;

            cm.sendSimple(md2 + " #n���� #b�������� #r����#b �˻��ڣ�" + zhs + "\r\n#k#n#L0#���ؽ��ڴ���#l     #L1#�����Ի�#l ");
   //         cm.dispose();

            } else if (dsd == 400) {

            dsd = 55555;

            cm.gainMeso(shuru*100000000);
            cm.addMaplewing("emose", -shuru);

            zhs = "\r\n#b���������� #rMaplewingBank #b�˻���Ϣ��\r\n#d�� �� ID��#e#r " + caid + "   #n#d�˻����  #i" + items + "# #e#r" + cname + " #n#d #i" + items + "#   \r\n#b������#e#r" + cm.getMaplewing("maple") + " #n #b����#e#r " + cm.getMaplewing("wmose") + "#n#b    �ڼ���#r#e" + cm.getMaplewing("emose") + "#n#b \r\n#dծȯ������#e#r" + cm.getMaplewing("savemose") + "  #d#nʣ��ʱ�䣺#e#r" + cm.getMaplewing("havetime") + "  #d#n�����Ϣ��#e#r" + cm.getMaplewing("gainmoses") + "\r\n#n#b��Ҷ������#e#r" + cm.getMaplewing("maplez") + "  #b#n��Ҵ�����#e#r" + cm.getMaplewing("mapleb") + "  #b#n��Ծ������#e#r" + cm.getMaplewing("mapley") + " \r\n";

           zhs = das + zhs;

            cm.sendSimple(md2 + " #n�ڽ�� #b�������� #r����#b �˻��ڣ�" + zhs + "\r\n#k#n#L0#���ؽ��ڴ���#l     #L1#�����Ի�#l ");

 //           cm.dispose();




            } else if (dsd == 700) {


                if (selection == 99) {

                  cm.dispose();
                  cm.openNpc(9000086, 100500);


                } else if (selection == 98) {

                  cm.dispose();


                } else if (selection == 1) {

                     dsd = 70010;


                 md1 = mds + "\r\n#k��ǰ��ѡ����� #e#r������ת��#n #k��\r\n#bת���˻�IDΪ��#e#r" + zhid +  " #n �������ƣ�#e#r" + trzhna + " \r\n#d#nĿǰ���� ����#e#r " + cm.getMaplewing("wmose") + "#n\r\n#d��������Ҫ�����˻��ڵ�#r�����#dת������Ŀ��\r\n#b(�����ѣ�1���׵�)\r\n\r\n";

                cm.sendGetNumber(md1, 1, 1, wmose);

                } else if (selection == 2) {

                     dsd = 70020;


                 md1 = mds + "\r\n#k��ǰ��ѡ����� #e#r�ڼ�����ת��#n #k��\r\n#bת���˻�IDΪ��#e#r" + zhid +  " #n �������ƣ�#e#r" + trzhna + " \r\n\n#d#nĿǰ���� �ڼ���#e#r " + cm.getMaplewing("emose") + "#n\r\n#d#n��������Ҫ�����˻��ڵ�#r�ڼ����#dת������Ŀ��\r\n#b((�����ѣ�1���׵�) \r\n\r\n";

                cm.sendGetNumber(md1, 1, 1, emose);


                } else if (selection == 3) {

                     dsd = 70030;


                 md1 = mds + "\r\n#k��ǰ��ѡ����� #e#r��������ת��#n #k��\r\n#bת���˻�IDΪ��#e#r" + zhid +  " #n �������ƣ�#e#r" + trzhna + " \r\n\n#d#nĿǰ���� ������#e#r " + cm.getMaplewing("maple") + "#n\r\n#d#n��������Ҫ�����˻��ڵ�#r�������#dת������Ŀ��\r\n#b((�����ѣ�1���׵�) \r\n\r\n";

                cm.sendGetNumber(md1, 1, 1, gxs);


                } else if (selection == 4) {

                     dsd = 70040;


                 md1 = mds + "\r\n#k��ǰ��ѡ����� #e#r��Ծ����ת��#n #k��\r\n#bת���˻�IDΪ��#e#r" + zhid +  " #n �������ƣ�#e#r" + trzhna + " \r\n\n#d#nĿǰ���� ��Ծ��#e#r " + cm.getMaplewing("mapley") + "#n\r\n#d#n��������Ҫ�����˻��ڵ�#r��Ծ���#dת������Ŀ��\r\n#b((�����ѣ�1���׵�) \r\n\r\n";

                cm.sendGetNumber(md1, 1, 1, huoye);


                } else if (selection == 5) {

                     dsd = 70050;


                 md1 = mds + "\r\n#k��ǰ��ѡ����� #e#r��Ҷ����ת��#n #k��\r\n#bת���˻�IDΪ��#e#r" + zhid +  " #n �������ƣ�#e#r" + trzhna + " \r\n\n#d#nĿǰ���� ��Ҷ��#e#r " + cm.getMaplewing("maplez") + "#n\r\n#d#n��������Ҫ�����˻��ڵ�#r��Ҷ���#dת������Ŀ��\r\n#b((�����ѣ�1���׵�) \r\n\r\n";

                cm.sendGetNumber(md1, 1, 1, fengyz);


                } else if (selection == 6) {

                     dsd = 70060;


                 md1 = mds + "\r\n#k��ǰ��ѡ����� #e#r�������ת��#n #k��\r\n#bת���˻�IDΪ��#e#r" + zhid +  " #n �������ƣ�#e#r" + trzhna + " \r\n\n#d#nĿǰ���� �����#e#r " + cm.getMaplewing("mapleb") + "#n\r\n#d#n��������Ҫ�����˻��ڵ�#r������#dת������Ŀ��\r\n#b((�����ѣ�1���׵�) \r\n\r\n";

                cm.sendGetNumber(md1, 1, 1, fengyb);


                }  


                
            } else if (dsd == 55553) {



                if (selection == 0) {

                  cm.dispose();
                  cm.openNpc(9000086, 100500);


                } else if (selection == 1) {

                  cm.dispose();
                }



            } else if (dsd == 800) {


             shuru3 = selection;


                dsd = 80010;

               md1 = mds + "\r\n#d��ǰ����Ĺ���ծȯ��ϢΪ��\r\n#b����ծȯ������#e#r " + shuru + " #n#b   ծȯԼ��ʱ�䣺#r#e " + shuru3 +" #n#b����\r\nÿ��ծȯ��Ϣˢ������õ����棺#r#e" + zjlxs + " ���\r\n\r\n��ȷ���� MapleWingBank ǩ����ծȯ������";


                cm.sendYesNo(md1);


             




            }// 3 dsd =800











         } else if (status == 4) {

            if (dsd == 55555) {

                if (selection == 0) {

                  cm.dispose();
                  cm.openNpc(9000086, 100500);


                } else if (selection == 1) {

                  cm.dispose();
                }


              } else if (dsd == 70010) {

                shuru1 = selection;

                dsd = 70011;

                md4 = mds + "��ȷ����#r";

                cm.sendYesNo(md4 + " ����Ŀ����� #r#e " + shuru1 + " #n  #bת�˵� #r " + trzhna + "#b ����Ŀ��");

              } else if (dsd == 70020) {

                shuru1 = selection;

                dsd = 70021;

                md4 = mds + "��ȷ����#r";

                cm.sendYesNo(md4 + " �ڼ���Ŀ����� #r#e " + shuru1 + " #n  #bת�˵� #r " + trzhna + "#b �ڼ���Ŀ��");

              } else if (dsd == 70030) {

                shuru1 = selection;

                dsd = 70031;

                md4 = mds + "��ȷ����#r";

                cm.sendYesNo(md4 + " ������Ŀ����� #r#e " + shuru1 + " #n  #bת�˵� #r " + trzhna + "#b ������Ŀ��");

              } else if (dsd == 70040) {

                shuru1 = selection;

                dsd = 70041;

                md4 = mds + "��ȷ����#r";

                cm.sendYesNo(md4 + " ��Ծ��Ŀ����� #r#e " + shuru1 + " #n  #bת�˵� #r " + trzhna + "#b ��Ծ��Ŀ��");

              } else if (dsd == 70050) {

                shuru1 = selection;

                dsd = 70051;

                md4 = mds + "��ȷ����#r";

                cm.sendYesNo(md4 + " ��Ҷ��Ŀ����� #r#e " + shuru1 + " #n  #bת�˵� #r " + trzhna + "#b ��Ҷ��Ŀ��");

              } else if (dsd == 70060) {

                shuru1 = selection;

                dsd = 70061;

                md4 = mds + "��ȷ����#r";

                cm.sendYesNo(md4 + " �����Ŀ����� #r#e " + shuru1 + " #n  #bת�˵� #r " + trzhna + "#b �����Ŀ��");



              } else if (dsd == 80010) {



            dsd = 55557;

            var zjwmose;
            var zjbbjb;

            if (shuru > wmose) {

                 zjwmose = wmose;
                 zjbbjb = (shuru - wmose)*10000;

             } else {

                 zjwmose = shuru;
                 zjbbjb = 0;

             }

            cm.gainMeso(-zjbbjb);
            cm.addMaplewing("wmose", -zjwmose);

            cm.setMaplewing("savemose", shuru);
            cm.setMaplewing("savetime", shuru3);
            cm.setMaplewing("havetime", shuru3);

            zhs = "\r\n#b���������� #rMaplewingBank #b�˻���Ϣ��\r\n#d�� �� ID��#e#r " + caid + "   #n#d�˻����  #i" + items + "# #e#r" + cname + " #n#d #i" + items + "#   \r\n#b������#e#r" + cm.getMaplewing("maple") + " #n #b����#e#r " + cm.getMaplewing("wmose") + "#n#b    �ڼ���#r#e" + cm.getMaplewing("emose") + "#n#b \r\n#dծȯ������#e#r" + cm.getMaplewing("savemose") + "  #d#nʣ��ʱ�䣺#e#r" + cm.getMaplewing("havetime") + "  #d#n�����Ϣ��#e#r" + cm.getMaplewing("gainmoses") + "\r\n#n#b��Ҷ������#e#r" + cm.getMaplewing("maplez") + "  #b#n��Ҵ�����#e#r" + cm.getMaplewing("mapleb") + "  #b#n��Ծ������#e#r" + cm.getMaplewing("mapley") + " \r\n";

           zhs = das + zhs;

           md2 = mds + "#g�����ɹ���\r\n#d���ѳɹ�Ϊ�����򵽣�#e#r" + shuru + " #n#dծȯ  Լ��ʱ�䣺#e#r" + shuru3 +" #n����\r\n#nĿǰ�������ծȯ����ÿ��ˢ�»����Ϣ = #e" + zjlxs + "#n ���\r\n"

            cm.sendSimple(md2 + "#b��ϵͳ�Զ��۳���#r����Ŀ�ڵ���� #e" + zjwmose + "#n#b #b\r\n��ϵͳ�Զ��۳������ڵ� #r" + zjbbjb + " ��� \r\n" + zhs + "\r\n#k#n#L0#���ؽ��ڴ���#l     #L1#�����Ի�#l ");







            }// dsd 












         } else if (status == 5) {



            md5 = mds + "\r\n#g�����ɹ���";

             nowjb = cm.getMeso();

             das = "\r\nĿǰ���ı���������Ϊ�� #e#r" + nowjb + " #n";

           zhs = das + zhs;


            if (dsd == 70011) {

            dsd = 55556;


            if ((cm.getMaplewing("maple") >= sxf) && (cm.getMaplewing("wmose") >= shuru1)) {

            cm.addMaplewing("maple", -sxf);
            cm.addMaplewing("wmose", -shuru1);
            cm.addMaplewing("wmose", shuru1, zhid);

            zhs = "\r\n#b���������� #rMaplewingBank #b�˻���Ϣ��\r\n#d�� �� ID��#e#r " + caid + "   #n#d�˻����  #i" + items + "# #e#r" + cname + " #n#d #i" + items + "#   \r\n#b������#e#r" + cm.getMaplewing("maple") + " #n #b����#e#r " + cm.getMaplewing("wmose") + "#n#b    �ڼ���#r#e" + cm.getMaplewing("emose") + "#n#b \r\n#dծȯ������#e#r" + cm.getMaplewing("savemose") + "  #d#nʣ��ʱ�䣺#e#r" + cm.getMaplewing("havetime") + "  #d#n�����Ϣ��#e#r" + cm.getMaplewing("gainmoses") + "\r\n#n#b��Ҷ������#e#r" + cm.getMaplewing("maplez") + "  #b#n��Ҵ�����#e#r" + cm.getMaplewing("mapleb") + "  #b#n��Ծ������#e#r" + cm.getMaplewing("mapley") + " \r\n";

           zhs = das + zhs;

            cm.sendSimple(mds + "\r\n#bϵͳ�Ѿ�����#r����Ŀ�ڵ����#e" + shuru1 + "#n#b #bת�� #r" + trzhna + "#b ���˻��ڣ�" + zhs + "\r\n#k#n#L0#���ؽ��ڴ���#l     #L1#�����Ի�#l ");


            } else {
             dsd = 55556;
             cm.sendOk(mds + "���˻��ڵĹ������ �����Խ���ת�˻�����ת�����ʽ�������Ժ����ԣ�\r\n#k#n#L0#���ؽ��ڴ���#l     #L1#�����Ի�#l ");

            }



            } else if (dsd == 70021) {

            dsd = 55556;

            if ((cm.getMaplewing("maple") >= sxf) && (cm.getMaplewing("emose") >= shuru1)) {

            cm.addMaplewing("maple", -sxf);
            cm.addMaplewing("emose", -shuru1);
            cm.addMaplewing("emose", shuru1, zhid);

            zhs = "\r\n#b���������� #rMaplewingBank #b�˻���Ϣ��\r\n#d�� �� ID��#e#r " + caid + "   #n#d�˻����  #i" + items + "# #e#r" + cname + " #n#d #i" + items + "#   \r\n#b������#e#r" + cm.getMaplewing("maple") + " #n #b����#e#r " + cm.getMaplewing("wmose") + "#n#b    �ڼ���#r#e" + cm.getMaplewing("emose") + "#n#b \r\n#dծȯ������#e#r" + cm.getMaplewing("savemose") + "  #d#nʣ��ʱ�䣺#e#r" + cm.getMaplewing("havetime") + "  #d#n�����Ϣ��#e#r" + cm.getMaplewing("gainmoses") + "\r\n#n#b��Ҷ������#e#r" + cm.getMaplewing("maplez") + "  #b#n��Ҵ�����#e#r" + cm.getMaplewing("mapleb") + "  #b#n��Ծ������#e#r" + cm.getMaplewing("mapley") + " \r\n";

           zhs = das + zhs;

            cm.sendSimple(mds + "\r\n#bϵͳ�Ѿ�����#r�ڼ���Ŀ�ڵ����#e" + shuru1 + "#n#b #bת�� #r" + trzhna + "#b ���˻��ڣ�" + zhs + "\r\n#k#n#L0#���ؽ��ڴ���#l     #L1#�����Ի�#l ");


            } else {
             dsd = 55556;
             cm.sendOk(mds + "���˻��ڵĹ������ �����Խ���ת�˻�����ת�����ʽ�������Ժ����ԣ�\r\n#k#n#L0#���ؽ��ڴ���#l     #L1#�����Ի�#l ");

            }



            } else if (dsd == 70031) {

            dsd = 55556;


            if ((cm.getMaplewing("maple") >= sxf) && (cm.getMaplewing("maple") >= shuru1 + sxf)) {


            cm.addMaplewing("maple", -sxf);
            cm.addMaplewing("maple", -shuru1);
            cm.addMaplewing("maple", shuru1, zhid);

            zhs = "\r\n#b���������� #rMaplewingBank #b�˻���Ϣ��\r\n#d�� �� ID��#e#r " + caid + "   #n#d�˻����  #i" + items + "# #e#r" + cname + " #n#d #i" + items + "#   \r\n#b������#e#r" + cm.getMaplewing("maple") + " #n #b����#e#r " + cm.getMaplewing("wmose") + "#n#b    �ڼ���#r#e" + cm.getMaplewing("emose") + "#n#b \r\n#dծȯ������#e#r" + cm.getMaplewing("savemose") + "  #d#nʣ��ʱ�䣺#e#r" + cm.getMaplewing("havetime") + "  #d#n�����Ϣ��#e#r" + cm.getMaplewing("gainmoses") + "\r\n#n#b��Ҷ������#e#r" + cm.getMaplewing("maplez") + "  #b#n��Ҵ�����#e#r" + cm.getMaplewing("mapleb") + "  #b#n��Ծ������#e#r" + cm.getMaplewing("mapley") + " \r\n";

           zhs = das + zhs;

            cm.sendSimple(mds + "\r\n#bϵͳ�Ѿ�����#r������Ŀ�ڵ����#e" + shuru1 + "#n#b #bת�� #r" + trzhna + "#b ���˻��ڣ�" + zhs + "\r\n#k#n#L0#���ؽ��ڴ���#l     #L1#�����Ի�#l ");


            } else {
             dsd = 55556;
             cm.sendOk(mds + "���˻��ڵĹ������ �����Խ���ת�˻�����ת�����ʽ�������Ժ����ԣ�\r\n#k#n#L0#���ؽ��ڴ���#l     #L1#�����Ի�#l ");

            }



            } else if (dsd == 70041) {

            dsd = 55556;

            if ((cm.getMaplewing("maple") >= sxf) && (cm.getMaplewing("mapley") >= shuru1)) {


            cm.addMaplewing("maple", -sxf);
            cm.addMaplewing("mapley", -shuru1);
            cm.addMaplewing("mapley", shuru1, zhid);

            zhs = "\r\n#b���������� #rMaplewingBank #b�˻���Ϣ��\r\n#d�� �� ID��#e#r " + caid + "   #n#d�˻����  #i" + items + "# #e#r" + cname + " #n#d #i" + items + "#   \r\n#b������#e#r" + cm.getMaplewing("maple") + " #n #b����#e#r " + cm.getMaplewing("wmose") + "#n#b    �ڼ���#r#e" + cm.getMaplewing("emose") + "#n#b \r\n#dծȯ������#e#r" + cm.getMaplewing("savemose") + "  #d#nʣ��ʱ�䣺#e#r" + cm.getMaplewing("havetime") + "  #d#n�����Ϣ��#e#r" + cm.getMaplewing("gainmoses") + "\r\n#n#b��Ҷ������#e#r" + cm.getMaplewing("maplez") + "  #b#n��Ҵ�����#e#r" + cm.getMaplewing("mapleb") + "  #b#n��Ծ������#e#r" + cm.getMaplewing("mapley") + " \r\n";

           zhs = das + zhs;

            cm.sendSimple(mds + "\r\n#bϵͳ�Ѿ�����#r��Ծ��Ŀ�ڵ����#e" + shuru1 + "#n#b #bת�� #r" + trzhna + "#b ���˻��ڣ�" + zhs + "\r\n#k#n#L0#���ؽ��ڴ���#l     #L1#�����Ի�#l ");


            } else {
             dsd = 55556;
             cm.sendOk(mds + "���˻��ڵĹ������ �����Խ���ת�˻�����ת�����ʽ�������Ժ����ԣ�\r\n#k#n#L0#���ؽ��ڴ���#l     #L1#�����Ի�#l ");

            }



            } else if (dsd == 70051) {

            dsd = 55556;

            if ((cm.getMaplewing("maple") >= sxf) && (cm.getMaplewing("maplez") >= shuru1)) {


            cm.addMaplewing("maple", -sxf);
            cm.addMaplewing("maplez", -shuru1);
            cm.addMaplewing("maplez", shuru1, zhid);

            zhs = "\r\n#b���������� #rMaplewingBank #b�˻���Ϣ��\r\n#d�� �� ID��#e#r " + caid + "   #n#d�˻����  #i" + items + "# #e#r" + cname + " #n#d #i" + items + "#   \r\n#b������#e#r" + cm.getMaplewing("maple") + " #n #b����#e#r " + cm.getMaplewing("wmose") + "#n#b    �ڼ���#r#e" + cm.getMaplewing("emose") + "#n#b \r\n#dծȯ������#e#r" + cm.getMaplewing("savemose") + "  #d#nʣ��ʱ�䣺#e#r" + cm.getMaplewing("havetime") + "  #d#n�����Ϣ��#e#r" + cm.getMaplewing("gainmoses") + "\r\n#n#b��Ҷ������#e#r" + cm.getMaplewing("maplez") + "  #b#n��Ҵ�����#e#r" + cm.getMaplewing("mapleb") + "  #b#n��Ծ������#e#r" + cm.getMaplewing("mapley") + " \r\n";

           zhs = das + zhs;

            cm.sendSimple(mds + "\r\n#bϵͳ�Ѿ�����#r��Ҷ��Ŀ�ڵ����#e" + shuru1 + "#n#b #bת�� #r" + trzhna + "#b ���˻��ڣ�" + zhs + "\r\n#k#n#L0#���ؽ��ڴ���#l     #L1#�����Ի�#l ");


            } else {
              dsd = 55556;
             cm.sendOk(mds + "���˻��ڵĹ������ �����Խ���ת�˻�����ת�����ʽ�������Ժ����ԣ�\r\n#k#n#L0#���ؽ��ڴ���#l     #L1#�����Ի�#l ");


            }



            } else if (dsd == 70061) {



            dsd = 55556;

            if ((cm.getMaplewing("maple") >= sxf) && (cm.getMaplewing("mapleb") >= shuru1)) {


            cm.addMaplewing("maple", -sxf);
            cm.addMaplewing("mapleb", -shuru1);
            cm.addMaplewing("mapleb", shuru1, zhid);

            zhs = "\r\n#b���������� #rMaplewingBank #b�˻���Ϣ��\r\n#d�� �� ID��#e#r " + caid + "   #n#d�˻����  #i" + items + "# #e#r" + cname + " #n#d #i" + items + "#   \r\n#b������#e#r" + cm.getMaplewing("maple") + " #n #b����#e#r " + cm.getMaplewing("wmose") + "#n#b    �ڼ���#r#e" + cm.getMaplewing("emose") + "#n#b \r\n#dծȯ������#e#r" + cm.getMaplewing("savemose") + "  #d#nʣ��ʱ�䣺#e#r" + cm.getMaplewing("havetime") + "  #d#n�����Ϣ��#e#r" + cm.getMaplewing("gainmoses") + "\r\n#n#b��Ҷ������#e#r" + cm.getMaplewing("maplez") + "  #b#n��Ҵ�����#e#r" + cm.getMaplewing("mapleb") + "  #b#n��Ծ������#e#r" + cm.getMaplewing("mapley") + " \r\n";

           zhs = das + zhs;

            cm.sendSimple(mds + "\r\n#bϵͳ�Ѿ�����#r�����Ŀ�ڵ����#e" + shuru1 + "#n#b #bת�� #r" + trzhna + "#b ���˻��ڣ�" + zhs + "\r\n#k#n#L0#���ؽ��ڴ���#l     #L1#�����Ի�#l ");


            } else {
             dsd = 55556;
             cm.sendOk(mds + "���˻��ڵĹ������ �����Խ���ת�˻�����ת�����ʽ�������Ժ����ԣ�\r\n#k#n#L0#���ؽ��ڴ���#l     #L1#�����Ի�#l ");


            }


            } else if (dsd == 55557) {

                if (selection == 0) {

                  cm.dispose();
                  cm.openNpc(9000086, 100500);


                } else if (selection == 1) {

                  cm.dispose();
                }





            }//dsd








         } else if (status == 6) {


            if (dsd == 55556) {

                if (selection == 0) {

                  cm.dispose();
                  cm.openNpc(9000086, 100500);


                } else if (selection == 1) {

                  cm.dispose();
                }


              }




        } //status == 6








    }
}


























/*


            selectedType = selection;

            if (selectedType == 0) {
                cm.sendGetNumber("��������Ҫ���ӵ�Maplewing���׵���:\r\n", 1, 1, 9999999);
            } else if (selectedType == 1) {
                cm.sendGetNumber("��������Ҫ�һ��Ľ��(��λ: �� ):\r\n", 1, 1, 10);
            } else if (selectedType == 2) {
                cm.sendGetNumber("��������Ҫ��ȡ��#e#r���#n#k(��λ: #r��#k ):\r\n", 1, 1, 100);
            } else if (selectedType == 3) {
                cm.sendGetNumber("��������Ҫ��ȡ��#e#r���#n#k(��λ: #r��#k ):\r\n", 1, 1, 10);
            }



        } else if (status == 2) {



            selectedMeso = selection;

            if (selectedType == 0) {
                cm.sendYesNo("���Ƿ�Ҫ���ӵ�Maplewing���׵���#r " + selectedMeso + " #k��");
            } else if (selectedType == 1) {
                cm.sendYesNo("���Ƿ�Ҫȡ��#r " + selectedMeso + " #k��ң�");
            } else if (selectedType == 2) {
                cm.sendYesNo("���Ƿ�Ҫ��ȡ#r#e " + selectedMeso * dianjuan + " #n#k���");
            } else if (selectedType == 3) {
                cm.sendYesNo("���Ƿ�Ҫ��ȡ#r#e " + selectedMeso * youxibi + " #n#k��ң�");
            }


        } else if (status == 3) {

            if (selectedType == 0) {

                //if (cm.getMeso() >= selectedMeso * moneyMeso) {
                   // cm.sendNext("���Ľ�Ҳ�����"); //}else //�ж��Ƿ��������

                if (cm.addMaplewing1(selectedMeso, 0) > 0) {
                    //cm.gainMeso( - selectedMeso * moneyMeso);
                    cm.sendOk("�õģ��Ѿ�����Maplewing���׵�����\r\n����Maplewing���׵���Ϊ#r " + cm.getMaplewing() + " #k��");
                } else {
                    cm.sendOk("����Maplewing���׵������ִ����뷴��������Ա��");
                }
                cm.dispose();

            } else if (selectedType == 1) {

                if (cm.getMaplewing1() < selectedMeso) {
                    cm.sendOk("��û�д���ô��Ǯ��");
                } else if (cm.getMeso() > 1000000000) {
                    cm.sendOk("�����ϵĽ�ҳ����� 10 �ڣ���ȡʧ�ܡ��뽫��Ҵ���ֿ����������ȡ�ɣ�");
                } else if (cm.addMaplewing1( - selectedMeso, 1) > 0) {
                    cm.gainMeso(selectedMeso * youxibi);
                    cm.sendOk("�õģ����պ�����Ǯ��");
                } else {
                    cm.sendOk("ȡ����ִ����뷴��������Ա��");
                }
                cm.dispose();

                } else if (selectedType == 2) {

                    cm.gainNX(selectedMeso * dianjuan);
                    cm.sendOk("�õģ�#r#e " + selectedMeso * dianjuan + " #n#k��� �Ѿ����������˻���\r\n��������#e#r������#nΪ��#r #e" + cm.getPlayer().getCSPoints(1) + " #n#k��");

                cm.dispose();

            } else if (selectedType == 3) {

                if (cm.getMeso() > 1000000000) {
                    cm.sendOk("�����ϵĽ�ҳ����� 10 �ڣ���ȡʧ�ܡ��뽫��Ҵ���ֿ����������ȡ�ɣ�");

                } else {
                    cm.gainMeso(selectedMeso * youxibi);
                    cm.sendOk("�õģ�#r#e " + selectedMeso * youxibi + " #n#k��� �Ѿ����������˻���\r\n��������#e#r������#nΪ��#r #e" + cm.getMeso() + " #n#k��");
                }
                cm.dispose();

            }




        } else {
            cm.dispose();
        }

*/