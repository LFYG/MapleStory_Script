var status = 0;
var L 
var H 



//----------------------------------------------------�����и�
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }

    if (cm.getMapId() == 180000001) {
            cm.sendOk("���ź�������ΪΥ���û����򱻽�ֹ��Ϸ���������������ϵ����Ա.");
            cm.dispose();
        } 
    else if (status == 0) {
		var selStr = "#e        ��ӭ�����ڳ����� \r\n";
		   selStr +="      ����:#b"+L+"#k\r\n\r\n";
		   selStr +="      �췽:#r"+H+"#k\r\n\r\n\r\n";
		   selStr +="#r#L0#��Ҫ����#l\r\n";
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
            cm.dispose();
            break;
	case 1:
            cm.dispose();
            break;
	case 2:
            cm.dispose();
            break;
        case 3:
	       cm.dispose();
            break;
        case 4:
            break;
			case 5:

			cm.dispose();
            break;
		}
    }
}
