var status = 0; 

var mms;
var mds;
var name;
var maple;
var 

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

             mss = mds + name + " ��ӭ������ ί������ ��\r\n#b��ѡ������Ҫ�ķ���#e#r\r\n\r\n#L101301#��ȡί������#l \r\n\r\n#L101302#����ί������#l\r\n\r\n#L101303#��ȡί�н���#l \r\n \r\n ";


               cm.sendSimple(mss); 


        } else if (status == 1) { 


        }



  }