var status = 0; 
function start() { 
    status = -1; 
    action(1, 0, 0); 
} 
function action(mode, type, selection) { 
    if (mode == -1) { 
        cm.dispose(); 
    } else { 
        if (mode == 1) 
            status++; 
        else 
            status--; 
        if (status == 0) { 
            cm.sendNext("����ȥ��ս #b�������#k ��"); 
        } else if (status == 1) { 
            if(cm.getLevel() >= 150 ){  //�ж�����ȼ� 
                if (cm.getParty() == null) { // û�п����� 
                    cm.sendOk("#e�����û��һ������,���ǲ��������ȥ��."); 
                    cm.dispose(); 
                    } 
            if (!cm.isLeader()) { // ���Ƕӳ� 
                cm.sendSimple("���������սһ�����, ��ô��ֻ���Լ�������,һ����ȥ����,���Բ��ܺ��˼���ӣ�"); 
                cm.dispose(); 
                    }else { 
            var party = cm.getParty().getMembers(); 
            var next = true; 
                if (party.size() > 1){ //�ж϶��������Ƿ����1�ˣ�������ڣ����ܿ������� 
                    next = false; 
                    } 
                if (next) { 
            var em = cm.getEventManager("wgquest");  //wgquestΪ��������� 
                if (em == null) { 
                    cm.sendOk("error��"); 
                    cm.dispose(); 
                    } 
                } else {  //��ʼ���� 
                em.startInstance(cm.getParty(),cm.getChar().getMap()); 
                party = cm.getChar().getEventInstance().getPlayers(); 
                cm.removeFromParty(4001008, party); 
                cm.removeFromParty(4001007, party);  
                } 
            cm.serverNotice(5, "[����ϵͳ]���:" + cm.c.getPlayer().getName() + " ���ž���,����������ͼ��ʼ��ս�������!~~")); 
            cm.dispose(); 
                    } 
                } 
            }else{ 
                cm.sendOk("#e#r��ս #b�������#k ��Lv.150.\r\n����������#v4031549# #v4031344# #v4031250# #v4032226# #v1302037# �Լ���������"); 
                cm.dispose(); 
            } 
        } 
    } 
} 
 