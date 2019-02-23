/* 
	NPC Name: 		Cherry
	Map(s): 		Victoria Road : Ellinia Station (101000300)
	Description: 		Ellinia Ticketing Usher
*/
var status = 0;

function start() {
    status = -1;
    boat = cm.getEventManager("Boats");
    action(1, 0, 0);
}

function action(mode, type, selection) {
    status++;
    if(mode == 0) {
	cm.sendNext("You must have some business to take care of here, right?");
	cm.dispose();
	return;
    }
    if (status == 0) {
	if(boat == null) {
	    cm.sendNext("���κ����Ѿ�������.");
	    cm.dispose();
	} else if(boat.getProperty("entry").equals("true")) {
	    cm.sendOk("���κ����Ѿ����š������������һ�������Ҫ�����ˣ�");
	} else if(boat.getProperty("entry").equals("false") && boat.getProperty("docked").equals("true")) {
	    cm.sendNext("���Ѿ���ɡ��Һܱ�Ǹ,�����㽫���ò�������һ�ˡ����������ĵȵȰ�.");
	    cm.dispose();
	} else {
	    cm.sendNext("����ǰ5���ӿ�ʼ�ſ����볡�����Ե�һ�¡�����Ҳ������̫������ǰ1���Ӿͻ��������׼�����޷��ÿ��˵Ǵ��ˡ�");
	    cm.dispose();
	}
    } else if(status == 1) {
	//cm.warp(101000301, 0);
	cm.dispose();
    }
}