var status = 0; 

var mds;
var name;
var maple;

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


             mds = "#r ���������T��#i4251202##r    Ӣ�۾���    #i4251202# #r��T�������� \r\n";

             name = cm.getVipname();
             maple = cm.getMaplewing("maple");

             mss = name + "��ӭ������ ��Ӣ�۾��ѡ� ��\r\n#dÿһ��ð�ռҶ���Ӣ�ۣ�Maplewing������Ҫ�������ػ���\r\n����ֻҪ�����Ƕ�Maplewing�Ĺ��׵��㹻�����ǽ�����ÿһ�����񶼿��Գ�ΪӢ�ۣ���\r\n#rע�⣺ֻ��ð�ռ�ְҵΪ����ʱ�ſ��Խ��о��ѣ�\r\n#b��ѡ������Ҫ�ľ��ѷ���#r\r\n";

             mss += "#L2400#��Ӱ֮����#l     #L2300#������֮����#l     ";

               cm.sendSimple(mds + mss); 


        } else if (status == 1) { 

           jobs = selection;

        switch (selection) {

        case 2400:
/*
           if (maple >= nes2400) {

            hair = cm.getPlayerStat("HAIR");

            cm.changeJob(jobs);
             cm.sendOk(mds + "#d���ѳɹ��������� ");
             cm.dispose();

           } else {

             cm.sendOk(mds + "���Ĺ��׵㲻�� " + nes2400 + "���޷�����  #r��Ӱ֮���� ");

             cm.dispose();



           }
*/


             cm.sendOk(mds + "��ʱ������  #r��Ӱ֮���� ");

             cm.dispose();

            break;

        case 2300:

            cm.dispose();

            cm.sendOk(mds + "�����ڴ���");

            break;
        case 2:
            cm.dispose();
            cm.openNpc(9000086, 5);
            break;
            } 
        } 
    } 
}  
