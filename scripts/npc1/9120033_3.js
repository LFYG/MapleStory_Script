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
            cm.sendSimple("��ã���ѡ��ع����ࣺ#b\r\n#L0#130�������ع�\r\n#L1#130��װ���ع�"); 
        } else if (status == 1) { 
        switch (selection) {
        case 0:
            cm.dispose();
            cm.openNpc(9120033, 4);
            break;
        case 1:
            cm.dispose();
            cm.openNpc(9120033, 5);
            break;
            } 
        } 
    } 
}  
