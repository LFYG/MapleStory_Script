var status = 0; 

var mms;
var mds;
var name;
var maple;

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


             mds = "#r ���������T��#i4251202##r    ί������    #i4251202# #r��T�������� \r\n";

             name = cm.getVipname();
             maple = cm.getMaplewing("maple");

             mss = mds + name + " ��ӭ������ ί������ ��\r\n#d�������������ȡ�����ֶ�����ί�����������кܶ�Ĺ��׵㡢��Ծ�㡢�򼶽�ҡ��ڼ���ҡ�������Ʒ����Ŷ��\r\n��Ȼ��Ҳ���Է���ί�����񣬵�����Ҫ֧��һ���Ľ�����Ŷ��\r\n#b��ѡ������Ҫ�ķ���#e#r\r\n\r\n#L101301#��ȡϵͳί������#l       #L101302#��ȡ���ί������#l\r\n\r\n#L101303#����ί������#l\r\n\r\n#L101304#��ȡϵͳί�н���#l       #L101305#��ȡ���ί�н���#l \r\n";


               cm.sendSimple(mss); 


        } else if (status == 1) { 

           jobs = selection;

        switch (selection) {

        case 101301:
            cm.dispose();
            cm.openNpc(9000086, 101301);

            break;

        case 100802:

            break;

        case 101302:
            cm.dispose();
          //  cm.openNpc(9000086, 101302);
            cm.sendOk("��ʱ�����ţ����� ��ҵ��ר�ã�");
            break;

        case 101303:
            cm.dispose();
          //  cm.openNpc(9000086, 101303);
            cm.sendOk("��ʱ�����ţ����� ��ҵ��ר�ã�");
            break;

        case 101304:
            cm.dispose();
            cm.openNpc(9000086, 101304);

            break;

        case 101305:
            cm.dispose();
          //  cm.openNpc(9000086, 101305);
            cm.sendOk("��ʱ�����ţ����� ��ҵ��ר�ã�");

            break;



        case 100888:

            break;



        case 100887:

            break;



            } // switch 



        } else if (status == 2) { 


                 cm.dispose();



        } else if (status == 3) { 

                 cm.dispose();


        } else if (status == 4) { 

                 cm.dispose();




        } else if (status == 5) { 


                 cm.dispose();




        } status == 5








    } 
}  
