var status = 0; 


var name;
var cname = "�ҿ�";
var caid;

var gpms;

var md1;
var md2;
var md3;

var mds;
var mes;

var wmose;
var emose;

var samose;
var savrtime;
var gainmose;

var fybs;


var gxs;

var mima;
var cardlv = 0;

var fengye;

var items = 4021004;


var jxd = 10;//���׽�һ�ù���ggx

var ggx = 1;//���׽�Һ��õĹ���

var jbs;
var shul;
var nwmose;
var dsd;

var nwmose2;
var njbs2;

var jjbs = 0;
var jwmose = 0;

var shuru;
var ggxss = 0;

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





function start() { 
    status = -1; 
    action(1, 0, 0); 
} 

function action(mode, type, selection) { 
    if (mode == -1) { 
        cm.dispose(); 
    } else if (mode == 0) { 
        cm.dispose(); 
    } else { 
        if (mode == 1) 
            status++; 
        else 
            status--; 
        if (status == 0) { 

            mds = "#r ���������T��#i4251202##r  ����ר��  #i4251202# #r��T�������� \r\n#r";
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



        rategp1 = cm.getMaplewinggp("rate", 1);

        pgp1 = cm.getMaplewinggp("point", 1);

        lpgp1 = cm.getMaplewinggp("lastpoint", 1);


            fyb = cm.getMaplewing("mapleb");


           gpms = "#d���ʣ�#e#r" + rategp1 + " #n#b ��ǰ������#e#r" + pgp1 + " #n#d ��һ������#e#r" + lpgp1 + " #n\r\n#kע�⣺��Ʊ��Ϣ30��ˢ��һ�Σ��������µ�Ϊ׼��" ;


                    for (var i = 0; i <= kaitem.length; i++)
                    if (i % 2 == 0 && (kaitem[i] == cardlv)) {
                        items = kaitem[i + 1];
                    }


                    for (var ii = 0; ii <= kaitem.length; ii++)
                    if (i % 2 == 0 && (kaitem[i] == cardlv)) {
                        items = kaitem[i + 1];
                    }


            mes = mds + "#r" + name + " #k��ӭ���������ר�����ҽ�Ϊ������\r\n#b���������� #rMaplewingBank #b���˻���Ϣ��\r\n#d�� �� ID��#e#r " + caid + "     #n#d�˻����  #i" + items + "# #e#r" + cname + " #n#d #i" + items + "# \r\n#b������#e#r" + gxs + "#n  #b����#e#r " + wmose + "#n#b  �ڼ���#r#e" + emose + "#n#b \r\n#dծȯ������#e#r" + samose + "  #d#nʣ��ʱ�䣺#e#r" + satime + "  #d#n�����Ϣ��#e#r" + gamose + "\r\n#L100500#����Ͷ�ʷ���#l  #L100501#��Ʊ֤���г�#l  #L100503#��ס������ҵ#l\r\n#L100502#ˢ���˻���Ϣ#l\r\n\r\n#n#b������ #rMaplewingBank#b ��Ʊ������Ϣ��\r\n" + gpms;


            cm.sendSimple(mes); 


        } else if (status == 1) { 
        switch (selection) {

        case 100500:

            cm.dispose();
            cm.openNpc(9000086, 100500);

            break;
        case 100501:
            cm.dispose();
            cm.openNpc(9000086, 100501);
            break;
        case 100502:
            cm.dispose();
            cm.openNpc(9000086, 1005);
            break;

        case 100503:

           dsd = 300;

           //jbs = cm.getMeso();
           nwmose = cm.getMaplewing("wmose");
           shul = (nwmose - nwmose%jxd)/jxd;

           md1 = mds +  "��ӭ��������ƾ�����ҵ��\r\n\#bֻҪ��Ϊ������ҵ�������ܻ�ù��׵�Ŷ��\r\n#dÿ����#e#r" + jxd + "#nW��� #d���ܻ�� #e#r" + ggx + " #n#d ���׵㣡\r\n#r�Ķ�ô���Ķ������ж����Ͽ���װɣ���\r\nע�⣺��������ʱֻ֧��MaplWingBank��ת�ˣ�\r\n#dĿǰ��MaplewingBank�ڵ����˻����Ϊ��#e#r" + cm.getMaplewing("wmose") +"#n#b\r\n\r\n����������Ҫ���׵Ľ��������\r\n#b(ע������ǰ�ܹ���������ֵΪ��#e#r" + shul +"#n#b)";

                cm.sendGetNumber(md1, 1, 1, shul);
            //cm.dispose();
           // cm.openNpc(9000086, 1005);
            break;



            } //switch 



        } else if (status == 2) { 


          shuru = selection;

           njbs2 = cm.getMeso();
           nwmose2 = cm.getMaplewing("wmose");

         if (dsd == 300) {

         dsd = 30010;

         if (shuru <= (nwmose - nwmose%jxd)/jxd) {

            ggxss = shuru;

            md2 = mds +  "\r\n���׳ɹ�����ù��׵㣺#e#r" + shuru + "#n#b\r\nĿǰ�������Ϊ��#e#r";

          } else {

            ggxss = 0;

            md2 = mds +  "\r\n���״��������²�����\r\n#bĿǰ�������Ϊ��#e#r";

          }
          cm.addMaplewing("maple", ggxss);
          cm.addMaplewing("wmose", -ggxss*jxd);
          
          cm.sendSimple(md2 + cm.getMaplewing("wmose") + "#n\r\n#b���Ĺ��׵����Ϊ��#e#r" + cm.getMaplewing("maple") + "#n#d\r\n\r\n#L0#���ؽ���ר��#l     #L1#�����Ի�#l ");



          }//dsd

        } else if (status == 3) {


           if (dsd == 30010) {

                if (selection == 0) {

                  cm.dispose();
                  cm.openNpc(9000086, 1005);


                } else if (selection == 1) {

                  cm.dispose();
                }


            }  


        } //status == 3





    } 
}  
