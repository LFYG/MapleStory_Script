var status = 0;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 0) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			{status++;}
		else
			{status--;}
	 if (status == 0) {
     if(cm.getChar().getMapId() == 749050502) {//����
			cm.dispose();
			cm.openNpc(9330045,2);
		}else if(cm.getChar().getMapId() == 749050500 || cm.getChar().getMapId() == 749050501 ){//��ͨ
			cm.dispose();
			cm.openNpc(9330045,1);
			}
		}
	}
}
