var status = 0; 

var mds;
var name;
var maple;

var md1;
var md2;
var md3;

var dsd;

var hair;

var jobs;

var nes2400 = 111;


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


             mds = "#r ���������T��#i4251202##r    ����ר��    #i4251202# #r��T�������� \r\n\r\n";

             name = cm.getVipname();
             maple = cm.getMaplewing("maple");

             mss = name + " #d��ӭ������ ����ר�� ��#b\r\n�����Ǳ��ڿ��ŵĸ�����#r\r\n#L100601#Ȥζ��ɫ����#l\r\n   ";



               cm.sendSimple(mds + mss); 


        } else if (status == 1) { 

        switch (selection) {

        case 100601:

            dsd = 100;

            md1 = mds + "Ŀǰ��ѡ����� Ȥζ��ɫ���� ������\r\n#b�����Ǹø�����˵����\r\n������ʱ�յĴ�����\r\n#k������OS4...�ظ�,������OS4���������һ�����Խ������׹ܲ����á���Сʱ��ȥ�ˣ�������...ι���������𣿺٣�ð�ռң����BOSS����ս����������һֱ������������¡ʵ�顣�Կ����˵�OS4��������������޴ε������������ɳ����ֻҪ���룡#r\r\n\r\n- #eԶ���Ӳμ��ʸ�#n��120������\r\n- #e�μ���Ա#n����ɫ����Զ����\r\n- #e�ƶ�����#n����������\r\n- #e���ս���#n��#i4310034# #t4310034#\r\n\r\n#rע�⣺�������׼����ͼ��Ҫ�˳������ڶԻ�������@hg��\r\n��������Ҫȥ׼����ͼô��";

           cm.sendYesNo(md1);

            break;

        case 2300:

            cm.dispose();

            cm.sendOk(mds + "�����ڴ���");

            break;
        case 2:
            cm.dispose();
            cm.openNpc(9000086, 5);
            break;


            } // switch 



        } else if (status == 2) { 

               if (dsd == 100) {
                    cm.warp(689010000, 0);
                    cm.sendOk(mds + "\r\n���Ѿ������Ѿ�����Ŀ�ĵأ�\r\n#b(��ս��ɫ�����������⽱��!)\r\n������ȥ����#b @hg #k����س�");
                    cm.dispose();


               }



        } status == 2


    } 
}  
