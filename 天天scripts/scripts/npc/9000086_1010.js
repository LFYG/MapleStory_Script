var status = 0; 

var mds;

var md1;
var md2;
var md3;

var mdd = "#b";

var mss;

var dsd = 0;

var name;
var maple;

var mrfl1 = 5062001;//��������ħ��
var mrfl2 = 5060006;//ˮ��������
var mrfl3 = 5062000;//����ħ��
var mrfl4 = 5062002;//�߼�����ħ��
var mrfl5 = 5220040;//ת����
var maple1 = 20923;
var wmose1 = 20923;

var mrdj = 2014923;//ÿ�ո��ĵ��

var gmrfl1 = 33;
var gmrfl2 = 33;
var gmrfl3 = 33;
var gmrfl4 = 10;
var gmrfl5 = 33;


var mms = "";


var cishu = 0;

var shuru;

var xuanze;
var nowgxs;
var bxx;
var itemxx;
var gitem;
var ngxs;
var mins;
var maxs;
var shul;
var mdss;



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


             mds = "#r ���������T��#i4251202##r    ����ר��    #i4251202# #r��T�������� \r\n";

             name = cm.getVipname();
             maple = cm.getMaplewing("maple");

             mss = mds + name + "��ӭ������ ����ר�� ��\r\n#b���ǵĿں��ǣ�#e#r�������֣�������ã�#n\r\n#bĿǰ��ӵ�еĹ��׵�Ϊ��#e#r" + maple + "#n#d\r\n�����Ǳ��ڿ��ŵ����ֻ��#r\r\n\r\n#L101001#��������#l    #L101002#��������ף��#l\r\n\r\n�������ܾ����ڴ���";


               cm.sendSimple(mss); 


        } else if (status == 1) { 

           jobs = selection;

        switch (selection) {

        case 101001:

              dsd = 100;

            md2 = mds + "#b���������ļ��̲�������ô��\r\n#d�����ô�˵�е�#i2430289:##t2430289:#��#b\r\nע��#i2430289:##r#t2430289:# #b����װ�����ϡ���䱦Ŷ��#r\r\n\r\n��Ҫ�͸Ͽ�μ���������֮һ�ɣ�#b\r\n#L1#ħ������-----��������#l \r\n#L2#����֮��-----��������#l";

                cm.sendSimple(md2);


            break;

        case 100802:

          //  cm.dispose();


            dsd = 200; 


                    for (var i = 0; i <= items.length; i++)
                    if ((i % 5 == 0) && (items[i + 1] >= 0)) {
                        mdd += "#i" + items[i] + ":# ";
                         cishu++;
                    if (cishu%7 == 0) {
                        mdd += "\r\n";
                    }

                    }


            cm.sendYesNo(mds + "#d��ӭ�����볬���齱��\r\n��ֻ��Ҫ����#e#r" + chouj +"#n���׵�#d���л�����������Ʒ��\r\n" + mdd + "\r\n����Ҫ���г����齱ô��");

            break;

        case 100899:
            cm.dispose();
        //    cm.openNpc(9000086, 5);
            break;


        case 100888:

            dsd = 888; 

            mms = "\r\n#b����������\r\n#r���׵㣺#e " + maple1 + " #n   �򼶽�ң�#e " + wmose1 +"#n\r\n#i" + mrfl1 + ":# #kx#r " + gmrfl1 - 10 + "  #i" + mrfl2 + ":# #kx#r " + gmrfl2 - 10 + " #i" + mrfl3 + ":# #kx#r " + gmrfl3 - 5 + " #i" + mrfl4 + ":# #kx#r " + gmrfl4 - 10 + "  #i" + mrfl5 + ":# #kx#r " + gmrfl5 - 10 + "  #r#e" + mrdj - 1000 + " #n#d���þ�\r\n ";



               cm.sendOk(mds + mms + "\r\n��������Ѿ���ȥ��Ŷ�����Ͻ���ֻ��Ϊ�˻����ţ�\r\nû���쵽��Ҳ��Ҫ���ģ������ڴ� ������ڴ���Ŷ�������Թ���Ŷ��������");

         //    cm.sendYesNo(mds + mms + "\r\n#b������Ҫ��ȡô��");

          //  cm.addMaplewing("maple", maple1);
         //   cm.addMaplewing("wmose", wmose1);


            cm.dispose();

        //    cm.openNpc(9000086, 5);
            break;



        case 100887:

            dsd = 888; 

            mms = "\r\n#bӭ�������\r\n#r���׵㣺#e " + maple1 + " #n   �򼶽�ң�#e " + wmose1 +"#n\r\n#i" + mrfl1 + ":# #kx#r " + gmrfl1 + "  #i" + mrfl2 + ":# #kx#r " + gmrfl2 + " #i" + mrfl3 + ":# #kx#r " + gmrfl3 + " #i" + mrfl4 + ":# #kx#r " + gmrfl4 + "  #i" + mrfl5 + ":# #kx#r " + gmrfl5 + "  #r#e" + mrdj + " #n#d���þ�\r\n ";



             cm.sendYesNo(mds + mms + "\r\n#b������Ҫ��ȡô��");

          //  cm.addMaplewing("maple", maple1);
         //   cm.addMaplewing("wmose", wmose1);


          //  cm.dispose();

        //    cm.openNpc(9000086, 5);
            break;



            } // switch 



        } else if (status == 2) { 

             xuanze = selection;


             nowgxs = cm.getMaplewing("maple");

             bxx = "\r\n\r\nĿǰ���Ĺ��׵����Ϊ��#e#r" + cm.getMaplewing("maple") + "#n\r\n";




             if (dsd == 100) {

                if (xuanze == 1) {


// npc 1043001
                dsd = 1001;
                cm.warp(910130000, 0);
                cm.dispose();

                } else if (xuanze == 2) {

                dsd = 1002;

                cm.warp(910530000, 0);
                cm.dispose();

                }




            } else if (dsd == 200) {

               dsd = 2001;

               if ((cm.getMaplewing("maple") >= chouj)&&(cm.getSpace(1) >= 1)&&(cm.getSpace(2) >= 1)&&(cm.getSpace(3) >= 1)&&(cm.getSpace(4) >= 1)&&(cm.getSpace(5) >= 1)) {
  
               cm.addMaplewing("maple", -chouj);

              var kitms =  cm.MaplwingSJTP(" �����齱 ");

                mdss = mds + "\r\n#d�齱�ɹ����Ͽ쿴��������Ļ�ɣ�\r\n�������������Ʒ��\r\n\r\n#i" + kitms + ":##b#t" + kitms +":#\r\nĿǰ���Ĺ��׵����Ϊ��#e#r" + cm.getMaplewing("maple") + "#n\r\n#k\r\n#L0#���ع���ר��#l    #L1#�����Ի�#l ";

               } else {

                mdss = mds + "\r\n#d�齱ʧ�ܣ�\r\n���Ĺ��׵㲻��#e#r" + chouj + "#n#d��\r\n���ڸ�������������һ����λ���ϣ�\r\nĿǰ���Ĺ��׵����Ϊ��#e#r" + cm.getMaplewing("maple") + "#n\r\n#k\r\n#L0#���ع���ר��#l    #L1#�����Ի�#l ";

               }


              cm.sendSimple(mdss);


            } else if (dsd == 888) {



            if (cm.getPlayerStat("LVL") < 10) {
                cm.sendOk(mds + "#k\r\n\r\n10�����µĲ��ܲμӻ��");
            } else if (cm.getSpace(5) < 5) {
                cm.sendOk(mds + "#k\r\n\r\n ӭ�������� ��ȡʧ�ܣ����� ������ �ռ䲻�㡣");

            } else {
                if (cm.getBossLog("��ߵ�л��") == 0) {

                    cm.addMaplewing("maple", maple1);
                    cm.addMaplewing("wmose", wmose1);

                    cm.gainItem(mrfl1, gmrfl1);//����ħ��x3
		    cm.gainItem(mrfl2, gmrfl2);//����Ա��ף��x3
                    cm.gainItemPeriod(mrfl3,gmrfl3,1);//���ʵ�����x10 
                    cm.gainItemPeriod(mrfl4,gmrfl4,1);//��Ӷ����x1
                    cm.gainItemPeriod(mrfl5,gmrfl5,1);//ת����x10
                    cm.gainNX(2, mrdj);//���þ� 1000
                    cm.setBossLog("��ߵ�л��");


                    cm.sendOk(mds + "#g��ϲ���ɹ���ȡ MapleWing׼����#e#r Ϊ9��23�����ʧ��������ߵ�л��#n#k ��" + mms);
                } else {
                    cm.sendOk(mds + " #k\r\n\r\n�Բ��� #e#rΪ9��23�����ʧ��������ߵ�л��#n#k ֻ����ȡһ�Ρ�");
                }
            }
            cm.dispose();




        }//dsd




        } else if (status == 3) { 

              if (dsd == 1001) {
              shuru = selection;

              maple = cm.getMaplewing("maple");

              md3 = mds + "\r\n#rMapleWing����ר��������\r\n#i" + gitem + ":##b#t" + gitem +":#  #d���ۣ�#e#r" + ngxs + " #n#d���׵�   ������#e#r" + shuru + " #n #d�� \r\n�ܼƣ�#e#r" + (ngxs * shuru) + "  #n���׵�#n\r\n#bĿǰ���Ĺ������Ϊ��#e#r" + cm.getMaplewing("maple") + "#n \r\n#b�һ������Ĺ������Ϊ��#e#r" + (maple - ngxs * shuru) + "#n\r\n\r\n#b��ȷ��Ҫ�һ�������������Ʒ��";

             cm.sendYesNo(md3);


            } else if (dsd == 2001) {

               if (selection == 0) {
                 cm.dispose();
                 cm.openNpc(9000086, 1008);

                } else {

                 cm.dispose();
                }

            }


        } else if (status == 4) { 

               dsd = 4000;


            if ((maple >= (ngxs * shuru))&&(cm.getSpace(1) >= 1)&&(cm.getSpace(2) >= 1)&&(cm.getSpace(3) >= 1)&&(cm.getSpace(4) >= 1)&&(cm.getSpace(5) >= 1)) {


                cm.addMaplewing("maple", -(ngxs * shuru));
                cm.gainItem(gitem, shuru);
                
                cm.sendSimple(mds + "\r\n#d�һ��ɹ������Ĺ������Ϊ��#e#r" + cm.getMaplewing("maple") + "#n \r\n\r\n#i" + gitem + ":##b#t" + gitem +":# #e#r" + shuru + " #n #d���Ѿ��������ı�����#r\r\n��ע��鿴��лл�ݹˣ���#k\r\n#L0#���ع���ר��#l    #L1#�����Ի�#l ");
                cm.worldMessage(-11,  "��ϲ " + name + " �ӹ���ר���ɹ��һ���ϡ����Ʒ�����һ��ϲ��(��)�ɣ���")

           } else {

            cm.sendSimple(mds + "\r\n#d�һ�ʧ�ܣ������Ĺ������㣡��\r\n���ڸ�������������һ����λ���ϣ�\r\n�޷��һ� #i" + gitem + ":##b#t" + gitem +":# #e#r" + shuru + " #n #d����#r\r\n\r\n#bĿǰ���Ĺ������Ϊ��#e#r" + cm.getMaplewing("maple") + "#n \r\n#k\r\n#L0#���ع���ר��#l    #L1#�����Ի�#l ");


           }




        } else if (status == 5) { 


            if (dsd == 4000) {

               if (selection == 0) {
                 cm.dispose();
                 cm.openNpc(9000086, 1008);

                } else {

                 cm.dispose();
                }



            }




        } status == 5








    } 
}  
