var status = 0; 
var mh ="#fUI/Basic/BtHide3/mouseOver/0#";

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
            cm.sendSimple("��ã���ѡ��ֽ���������ࣺ\r\n#b#L0#"+ mh +"������������#r���м��ʻ�ȡ#v4001191#��#l#k\r\n#b#L1#"+ mh +"140��ϵ������#r���м��ʻ�ȡ#v4001191#��#v4031988#��#l#k"); 
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
