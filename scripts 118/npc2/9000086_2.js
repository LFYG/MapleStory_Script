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
            cm.sendSimple("��ã���ѡ��һ����ࣺ#b\r\n#L0#8������Ҷһ�130��Ѫɫ����\r\n#L1#5������Ҷһ�130��Ѫɫװ��\r\n#L2#5������Ҷһ�����װ��"); 
        } else if (status == 1) { 
        switch (selection) {
        case 0:
            cm.dispose();
            cm.openNpc(9000086, 3);
            break;
        case 1:
            cm.dispose();
            cm.openNpc(9000086, 4);
            break;
        case 2:
            cm.dispose();
            cm.openNpc(9000086, 5);
            break;
            } 
        } 
    } 
}  
