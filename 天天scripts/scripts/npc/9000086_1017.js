var status = 0;

var name;
var lvs;
var talks;

var mds;
var md1;
var md2;
var md3;

var jbs;

var dj1 = 1; //��ҹ�����ĵ�λ����
var dj2 = 1; //��ҹ�����þ�ĵ�λ����

var gdj1 = 10; //���׹�����ĵ�λ����
var gdj2 = 15; //��Ҷ������ĵ�λ����

var jbhdj1 = 12000; //��ҹ�������dj1�ĵ��۸�

var gxhdj1 = 1; //���׹�������dj1�ĵ��۸�
var fyhdj1 = 1; //��Ҷ��������dj1�ĵ��۸�

var jbhdj2 = 10000; //��ҹ�������dj2�ĵ��۸�
var gxhdj2 = 1; //���׹�������dj2�ĵ��۸�
var fyhdj2 = 1; //��Ҷ��������dj2�ĵ��۸�

var fengye = 4001126; //��Ҷ

var titems = 4251202;

var dsd = 0;

var fengyz;
var wmose;
var gxs;
var tmeso;
var amose;

var njbs;
var nwmose;
var ngxs;
var nfengyz;

var shuru;

var djs;

var djtype = 2;

var jjbss = 0;
var jwmoses = 0;
var jgxss = 0;
var jfengyzs = 0;


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


            name = cm.getVipname();
            lvs = cm.getPlayer().getLevel();



            cname = cm.getColor();
            fengyz = cm.getMaplewing("maplez");

            jbs = cm.getMeso();
            wmose = cm.getMaplewing("wmose");

            gxs = cm.getMaplewing("maple");


          talks = "#r ���������T��#i" + titems + "##r   ����н�   #i" + titems + "# #r��T�������� \r\n";

          mds = "#r" + name + " ��ӭ���������н飡����\r\n�����������Խ��е��һ���#d�����Ƕһ����ʣ�\r\n\r\n#g��Ҷһ���#e#r" + jbhdj1 + "#n��� = #e" + dj1 + "#n���  #e#r" + jbhdj2 + "#n��� = #e" + dj2 + "#n���þ�\r\n#g���׶һ���#e#r" + gxhdj1 + "#n ��  = #e" + gdj1 + "#n���  #e#r" + gxhdj2 + "#n ��  = #e" + gdj2 + "#n���þ�\r\n#g��Ҷ�һ���#e#r" + fyhdj1 + "#n#i" + fengye + ":# = #e" + gdj1 + "#n���  #e#r" + fyhdj2 + "#n#i" + fengye + ":# = #e" + gdj2 + "#n���þ�\r\n#b���˺��ڵĵ����#e#r" + cm.getPlayer().getCSPoints(1) + "#n  ���þ���#e#r" + cm.getPlayer().getCSPoints(2) + "#n\r\n#d��ѡ������Ҫ�Ķһ�����#b\r\n#L101701#��Ҷһ����þ�#l #L101702#���׶һ����þ�#l #L101703#��Ҷ�һ����þ�#l \r\n#L101704#��Ҷһ� �� ��#l #L101705#���׶һ� �� ��#l #L101706#��Ҷ�һ� �� ��#l\r\n\r\n";


            cm.sendSimple(talks + mds); 



        } else if (status == 1) { 

        switch (selection) {

        case 101701:

              tmeso = (jbs - jbs%jbhdj2)/jbhdj2 + wmose*10000/jbhdj2;
              amose = tmeso;

              dsd = 100;

             md1 = talks + "\r\n#dĿǰ��ѡ�����#r ��Ҷһ����þ���� #d��\r\n�һ����ʣ�#e#r" + jbhdj1 + "#n��� = #e" + dj1 + "#n���  #e#r" + jbhdj2 + "#n��� = #e" + dj2 + "#n���þ�\r\n#b���˻��ڵ� #r�����#b Ϊ��#r#e" + cm.getMaplewing("wmose") + "#n  \r\n#b��������� #r�������#b Ϊ��#e#r" + jbs + "#n =  #e#r" + jbs/10000 + "#n ��\r\n\r\n#b��������������Ҫ�һ�#r ���þ� #b��������\r\n(ע������ֵ��Ҫ���������ܶһ������������ #r#e" + amose + "#n#b  )\r\n";

                cm.sendGetNumber(md1, 1, 1, amose);


          //  cm.dispose();
            //cm.openNpc(9000086, 3);
            break;


        case 101702:

              amose = gxs;


              dsd = 200;

             md1 = talks + "\r\n#dĿǰ��ѡ�����#r ���׶һ����þ���� #d��\r\n�һ����ʣ�#e#r" + gxhdj1 + "#n ��  = #e" + gdj1 + "#n���  #e#r" + gxhdj2 + "#n ��  = #e" + gdj2 + "#n���þ�\r\n#b���˻��ڵ� #r�������#b Ϊ��#r#e" + cm.getMaplewing("maple") + "#n  \r\n#b��������� #r�������#b Ϊ��#e#r" + jbs + "#n =  #e#r" + jbs/10000 + "#n ��\r\n\r\n#b��������������Ҫ�һ�#r ���þ� #b��������\r\n(ע������ֵ��Ҫ���������ܶһ������������ #r#e" + amose + "#n#b  )\r\n";

                cm.sendGetNumber(md1, 1, 1, amose);



            break;

        case 101703:

              amose = fengyz;

              dsd = 300;

             md1 = talks + "\r\n#dĿǰ��ѡ�����#r ��Ҷ�һ����þ���� #d��\r\n�һ����ʣ�#e#r" + fyhdj1 + "#n#i" + fengye + ":# = #e" + gdj1 + "#n���  #e#r" + fyhdj2 + "#n#i" + fengye + ":# = #e" + gdj2 + "#n���þ�\r\n#b���˻��ڵ� #r��Ҷ����#b Ϊ��#r#e" + cm.getMaplewing("maplez") + "#n  \r\n#b��������� #r�������#b Ϊ��#e#r" + jbs + "#n =  #e#r" + jbs/10000 + "#n ��\r\n\r\n#dע�⣺���������ĵ�λΪ�� #r�� \r\n#b��������������Ҫ�һ�#r ���þ� #b��������\r\n(ע������ֵ��Ҫ���������ܶһ������������ #r#e" + amose + "#n#b  )\r\n";

                cm.sendGetNumber(md1, 1, 1, amose);



            break;



        case 101704:


              tmeso = (jbs - jbs%jbhdj1)/jbhdj1 + wmose*10000/jbhdj1;
              amose = tmeso;

              dsd = 400;

             md1 = talks + "\r\n#dĿǰ��ѡ�����#r ��Ҷһ������� #d��\r\n�һ����ʣ�#e#r" + jbhdj1 + "#n��� = #e" + dj1 + "#n���  #e#r" + jbhdj2 + "#n��� = #e" + dj2 + "#n���þ�\r\n#b���˻��ڵ� #r�����#b Ϊ��#r#e" + cm.getMaplewing("wmose") + "#n  \r\n#b��������� #r�������#b Ϊ��#e#r" + jbs + "#n =  #e#r" + jbs/10000 + "#n ��\r\n\r\n#b��������������Ҫ�һ�#r ���þ� #b��������\r\n(ע������ֵ��Ҫ���������ܶһ������������ #r#e" + amose + "#n#b  )\r\n";

                cm.sendGetNumber(md1, 1, 10, amose);


          //  cm.dispose();
            //cm.openNpc(9000086, 3);
            break;


        case 101705:

              amose = gxs;


              dsd = 500;

             md1 = talks + "\r\n#dĿǰ��ѡ�����#r ���׶һ������� #d��\r\n�һ����ʣ�#e#r" + gxhdj1 + "#n ��  = #e" + gdj1 + "#n���  #e#r" + gxhdj2 + "#n ��  = #e" + gdj2 + "#n���þ�\r\n#b���˻��ڵ� #r�������#b Ϊ��#r#e" + cm.getMaplewing("maple") + "#n  \r\n#b��������� #r�������#b Ϊ��#e#r" + jbs + "#n =  #e#r" + jbs/10000 + "#n ��\r\n\r\n#b��������������Ҫ�һ�#r ���þ� #b��������\r\n(ע������ֵ��Ҫ���������ܶһ������������ #r#e" + amose + "#n#b  )\r\n";

                cm.sendGetNumber(md1, 1, 1, amose);



            break;

        case 101706:

              amose = fengyz;

              dsd = 600;

             md1 = talks + "\r\n#dĿǰ��ѡ�����#r ��Ҷ�һ������� #d��\r\n�һ����ʣ�#e#r" + fyhdj1 + "#n#i" + fengye + ":# = #e" + gdj1 + "#n���  #e#r" + fyhdj2 + "#n#i" + fengye + ":# = #e" + gdj2 + "#n���þ�\r\n#b���˻��ڵ� #r��Ҷ����#b Ϊ��#r#e" + cm.getMaplewing("maplez") + "#n  \r\n#b��������� #r�������#b Ϊ��#e#r" + jbs + "#n =  #e#r" + jbs/10000 + "#n ��\r\n\r\n#dע�⣺���������ĵ�λΪ�� #r�� \r\n#b��������������Ҫ�һ�#r ���þ� #b��������\r\n(ע������ֵ��Ҫ���������ܶһ������������ #r#e" + amose + "#n#b  )\r\n";

                cm.sendGetNumber(md1, 1, 1, amose);



            break;







            } // switch



        } else if (status == 2) { 

                shuru =selection;

            nfengyz = cm.getMaplewing("maplez");

            njbs = cm.getMeso();
            nwmose = cm.getMaplewing("wmose");

            ngxs = cm.getMaplewing("maple");

            tmeso = (njbs - njbs%10000)/10000 + nwmose;

             if (dsd == 100) {

                 if ((shuru*jbhdj2 < tmeso) && (nwmose*10000/jbhdj2 > (njbs - njbs%jbhdj2)/jbhdj2)) {
                     
                   djs = shuru * dj2;


                 jwmoses = shuru * jbhdj2 / 10000;

                 jjbss = (shuru - jwmoses)*jbhdj2;

              

                 } else if ((shuru*jbhdj2 < tmeso) && (nwmose*10000/jbhdj2 < (njbs - njbs%jbhdj2)/jbhdj2)) {

                 jjbss = shuru * jbhdj2 * jbhdj2;

                 jwmoses = shuru - jjbss;

                 } else {

                 djs = tmeso * dj2;


                 jwmoses = nwmose * jbhdj2;

                 jjbss = (tmeso - jwmoses)*jbhdj2;

                 }
            md2 = "\r\n#g�����ɹ���\r\n#dϵͳ�Ѿ��� #e#r" + djs +" #n ����Ѿ����������˻���\r\n";

             } else if (dsd == 200) {


                 if (shuru < ngxs) {
                     
                   djs = shuru * gdj2;

                   jgxss = shuru*gxhdj2;

                 
                 } else  {

                 jgxss = ngxs*gxhdj2;

                 djs = ngxs;
                 }


            md2 = "\r\n#g�����ɹ���\r\n#dϵͳ�Ѿ��� #e#r" + djs +" #n ����Ѿ����������˻���\r\n";

             } else if (dsd == 300) {


                 if (shuru < nfengyz) {
                     
                   djs = shuru * gdj2;

                   jfengyzs = shuru*fyhdj2;


                 } else  {
                   jfengyzs = nfengyz*fyhdj2;
                 djs = nfengyz;
                 }
            md2 = "\r\n#g�����ɹ���\r\n#dϵͳ�Ѿ��� #e#r" + djs +" #n ����Ѿ����������˻���\r\n";

             } else if (dsd == 400) {

                 djtype = 1;

                 if ((shuru*jbhdj1 < tmeso) && (nwmose*10000/jbhdj1 > (njbs - njbs%jbhdj1)/jbhdj1)) {
                     
                   djs = shuru * dj1;


                 jwmoses = shuru * jbhdj1 / 10000;

                 jjbss = (shuru - jwmoses)*jbhdj1;

              

                 } else if ((shuru*jbhdj1 < tmeso) && (nwmose*10000/jbhdj1 < (njbs - njbs%jbhdj1)/jbhdj1)) {

                 jjbss = shuru * jbhdj1 * jbhdj1;

                 jwmoses = shuru - jjbss;

                 } else {

                 djs = tmeso * dj1;


                 jwmoses = nwmose * jbhdj1;

                 jjbss = (tmeso - jwmoses)*jbhdj1;

                 }

                   md2 = "\r\n#g�����ɹ���\r\n#dϵͳ�Ѿ��� #e#r" + djs +" #n ����Ѿ����������˻���\r\n";

             } else if (dsd ==500) {

                 djtype = 1;
                 if (shuru < ngxs) {
                     
                   djs = shuru * gdj1;

                   jgxss = shuru*gxhdj1;

                 
                 } else  {

                 jgxss = ngxs*gxhdj1;

                 djs = ngxs;
                 }


                   md2 = "\r\n#g�����ɹ���\r\n#dϵͳ�Ѿ��� #e#r" + djs +" #n ����Ѿ����������˻���\r\n";

             } else if (dsd == 600) {

                 djtype = 1;
                 if (shuru < nfengyz) {
                     
                   djs = shuru * gdj1;

                   jfengyzs = shuru*fyhdj1;

                   

                 } else  {
                   jfengyzs = nfengyz*fyhdj1;
                 djs = nfengyz;
                 }


                   md2 = "\r\n#g�����ɹ���\r\n#dϵͳ�Ѿ��� #e#r" + djs +" #n ����Ѿ����������˻���\r\n";


             }// dsd


              cm.gainMeso(-jjbss);
              cm.addMaplewing("wmose", -jwmoses);
              cm.addMaplewing("maple", -jgxss);
              cm.addMaplewing("maple", -jfengyzs);


              cm.getPlayer().modifyCSPoints(djtype, djs);
             // cm.gainNX(djtype, djs);


              var zhs = "\r\n#b���������� #rMaplewingBank #bһЩ�˻���Ϣ��\r\n#b������#e#r" + cm.getMaplewing("maple") + " #n #b����#e#r " + cm.getMaplewing("wmose") + "#n#b    �ڼ���#r#e" + cm.getMaplewing("emose") + "#n#b \r\n#n#b��Ҷ������#e#r" + cm.getMaplewing("maplez") + "  #b#n��Ҵ�����#e#r" + cm.getMaplewing("mapleb") + "  #b#n��Ծ������#e#r" + cm.getMaplewing("mapley") + " \r\n";


              cm.sendOk(talks + md2 + "#b���˺��ڵĵ����#e#r" + cm.getPlayer().getCSPoints(1) + "#n  #b���þ���#e#r" + cm.getPlayer().getCSPoints(2) + "#n\r\n#b�����ڽ��������#e#r" + cm.getMeso() + "#n" + zhs);

             cm.dispose();


        } //status == 2




    } 
}  
