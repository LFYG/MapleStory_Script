/* RED 1st impact
    The New Explorer
    Made by Daenerys
*/
var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	    status++;
	 else 
        status--;
		
	if (status == 0) {
		qm.sendNextS("�ˣ�������һ���б�����Ӣ�ۡ��һ��������ʱ�䣬���Ҹո�����ҵĵ�һ����Ӣ��ѧУ�������Ҫ��һ���µ� #b[����]#k!",1);
    } else if (status == 1) {	
        qm.sendNextPrevS("һ���µġ�#b[����]?#k ��ʲô��?",17);	
	} else if (status == 2) {	
        qm.sendNextPrevS("������ʮ�ο��Բ�����Ŷ���ã�̽���ߵ���������Ҷ����������һ�����磡���ǿ�ʼ���ǵ��ó̾���#b [zealMS��]#k.",1);		
    } else if (status == 3) {	
	    qm.sendNextPrevS("���ڡ�#b[zealMS��]? #k",17);	
	} else if (status == 4) {	
	    qm.sendNextPrevS("��϶��ǣ�����������һЩС������������̽�ռҿ�ʼ���֡����ڣ�����Ҳ�������Լ��Ĳ�����",1);		
	} else if (status == 5) {	
	    qm.sendNextPrevS("���ԣ����������#h0#��������������ѡ�����ڡ��������һЩ���ͳ�������ȡһЩС�����飬�õ�һЩ��ѵ���Ʒ������Ϊȫ��������õ������ѡ�",1);		
	} else if (status == 6) {	
	    qm.sendNextPrevS("��������Դ���ֱ�򣬵�������ҵ�����һ�ܹµ��ͱ��ˡ�",1);		
	} else if (status == 7) {
	    qm.sendSimpleS("��˵ʲô?\r\n#b#L0# �һ��Ϊ������ѣ��󣡣�ͨ���̳̺ͻ����ѵ��豸����#l\r\n#L1#�Ҳ���Ҫ�㣬�󣡣������̳̺ʹ���ֱ�򡣣�#l#k",1);		
    } else if (status == 8) {
        sel = selection;
	  if (selection == 0) {		
	    qm.sendNextS("����𣿣��һ����һ������Ҫ֪�������飬�ұ�֤��",1);	
		qm.forceStartQuest();
		qm.forceCompleteQuest();
		qm.gainExp(20);
		qm.dispose();
     } else if (selection == 1) {
		qm.sendNextS("��֪�����ѡ��ÿ���˶����ǡ��һ����㵽[zealMS��]����ϣ������[����]��Ҫ��Ϊ�ҵ����ѡ�",1);
		}
	} else if (status == 9) {
        if (sel == 1) {
		qm.sendNextS("���Ǹ���ģ�����Բ鿴��ʹ�ñ�ǩ�Ҹ���ָ�ҩˮ��",1);
		qm.gainItem(2000013,50)
		qm.gainItem(2000014,50)
		}
    } else if (status == 10) {
        if (sel == 1) {
		qm.sendNextS("#bȷ��-��³��˹�����ϯ#K���㵽[zealMS��]������ĺܴ����������һЩ�õĽ��顣",1);
	   }
    } else if (status == 11) {
        if (sel == 1) {
		qm.warp(4000020,0);
		qm.forceStartQuest(32210);
		}   
	    qm.dispose();
    }
}