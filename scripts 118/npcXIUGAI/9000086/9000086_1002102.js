var status = 0; 

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
               cm.sendYesNo("#r" + cm.getVipname() + " #r#h # #k��ȷ��Ҫѡ�� ��Ϊһ�� #r���� #k#n ô��\r\n#b������ҽ������㵽 #r����#b ��תְ֮�أ�"); 
        } else if (status == 1) { 
            cm.warp(120000101);
            cm.sendOk("���Ѿ������͵���Ŀ�ĵأ�\r\n��ȥ�� תְ�̹� ������תְ�ɣ� ");
            cm.dispose();
//       switch (selection) {
 //       case 0:
//            cm.dispose();
 //           cm.openNpc(9000086, 3);
 //           break;
  //          } 


        } 
    } 
}  
