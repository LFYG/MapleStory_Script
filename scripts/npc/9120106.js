importPackage(net.sf.odinms.client);
importPackage(net.sf.odinms.server);

function start() {
var ptyz = 10; //���ù��򵥼���Ҫ��Ԫ��
var gjyz = 10; //���ù��򵥼���Ҫ��Ԫ��


if (cm.getLevel() > 1 ) {  
    cm.sendSimple("#rע:#b������ﴩ���ˣ�ʹ����輼�ܣ��޷���������������ʹ�����·���\r\n���һ����˹���#v1902000#��#v1912000#����������ٰ�#v1902000#��#v1912000#���ϼ��ɡ�\r\n#L0##v1902028#[�һ�]#L77##v1902061#[�һ�]#L78##v1902059#[�һ�]\r\n#L79##v1902060#[�һ�]#L80##v1902056#[�һ�]#L81##v1902044#[�һ�]\r\n#L82##v1902043#[�һ�]#L83##v1902047#[�һ�]#L84##v1902034#[�һ�]\r\n#L85##v1902037#[�һ�]#L86##v1902055#[�һ�]#L87##v1902040#[�һ�]\r\n#L88##v1902041#[�һ�]#L89##v1902042#[�һ�]#L90##v1902057#[�һ�]\r\n#L91##v1902049#[�һ�]#L92##v1902050#[�һ�]#L93##v1902051#[�һ�]\r\n#L94##v1902024#[�һ�]#L163##v1902053#[�һ�]#L164##v1902054#[�һ�]");
    } else {
    cm.sendOk("����ʲô�£���Ҫ�����ҵ�����������Ҫ�㹻������")
    }
}
function action(mode, type, selection) {
var ptyz = 10; //���ù��򵥼���Ҫ��Ԫ��
var gjyz = 10; //���ù��򵥼���Ҫ��Ԫ��
cm.dispose();
if  (selection == 0) { 
	if (cm.haveItem(4031250)) {
        cm.gainItem(4031250,-1);
cm.gainItem(1902028,1); 
cm.gainItem(1912021,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("��Ǹ��û��#v4031250#"); 
cm.dispose();   
}

}else if  (selection == 77) { 
	if (cm.haveItem(4031250)) {
        cm.gainItem(4031250,-1);
cm.gainItem(1902061,1); 
cm.gainItem(1912054,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("��Ǹ��û��#v4031250#"); 
cm.dispose();   
}

}else if  (selection == 78) { 
	if (cm.haveItem(4031250)) {
        cm.gainItem(4031250,-1);
cm.gainItem(1902059,1); 
cm.gainItem(1912052,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("��Ǹ��û��#v4031250#"); 
cm.dispose();   
}

}else if  (selection == 79) { 
	if (cm.haveItem(4031250)) {
        cm.gainItem(4031250,-1);
cm.gainItem(1902060,1); 
cm.gainItem(1912053,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("��Ǹ��û��#v4031250#"); 
cm.dispose();   
}


}else if  (selection == 80) { 
	if (cm.haveItem(4031250)) {
        cm.gainItem(4031250,-1);
cm.gainItem(1902056,1); 
cm.gainItem(1912049,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("��Ǹ��û��#v4031250#"); 
cm.dispose();   
}

}else if  (selection == 81) { 
	if (cm.haveItem(4031250)) {
        cm.gainItem(4031250,-1);
cm.gainItem(1902044,1); 
cm.gainItem(1912037,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("��Ǹ��û��#v4031250#"); 
cm.dispose();   
}

}else if  (selection == 82) { 
	if (cm.haveItem(4031250)) {
        cm.gainItem(4031250,-1);
cm.gainItem(1902043,1); 
cm.gainItem(1912036,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("��Ǹ��û��#v4031250#"); 
cm.dispose();   
}

}else if  (selection == 83) { 
	if (cm.haveItem(4031250)) {
        cm.gainItem(4031250,-1);
cm.gainItem(1902047,1); //ֱ���ɻ�
cm.gainItem(1912040,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("��Ǹ��û��#v4031250#"); 
cm.dispose();   
}


}else if  (selection == 84) { 
	if (cm.haveItem(4031250)) {
        cm.gainItem(4031250,-1);
cm.gainItem(1902034,1); //������
cm.gainItem(1912027,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("��Ǹ��û��#v4031250#"); 
cm.dispose();   
}


}else if  (selection == 85) { 
	if (cm.haveItem(4031250)) {
        cm.gainItem(4031250,-1);
cm.gainItem(1902037,1); //�����ɴ�
cm.gainItem(1912030,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("��Ǹ��û��#v4031250#"); 
cm.dispose();   
}

}else if  (selection == 86) { 
	if (cm.haveItem(4031250)) {
        cm.gainItem(4031250,-1);
cm.gainItem(1902055,1); //����
cm.gainItem(1912048,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("��Ǹ��û��#v4031250#"); 
cm.dispose();   
}

}else if  (selection == 87) { 
	if (cm.haveItem(4031250)) {
        cm.gainItem(4031250,-1);
cm.gainItem(1902040,1); //��еʦ
cm.gainItem(1912033,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("��Ǹ��û��#v4031250#"); 
cm.dispose();   
}

}else if  (selection == 88) { 
	if (cm.haveItem(4031250)) {
        cm.gainItem(4031250,-1);
cm.gainItem(1902041,1); //����
cm.gainItem(1912034,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("��Ǹ��û��#v4031250#"); 
cm.dispose();   
}

}else if  (selection == 89) { 
	if (cm.haveItem(4031250)) {
        cm.gainItem(4031250,-1);
cm.gainItem(1902042,1); //����
cm.gainItem(1912035,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("��Ǹ��û��#v4031250#"); 
cm.dispose();   
}

}else if  (selection == 90) { 
	if (cm.haveItem(4031250)) {
        cm.gainItem(4031250,-1);
cm.gainItem(1902057,1); //����˹�Ĳ�Ȯ
cm.gainItem(1912050,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("��Ǹ��û��#v4031250#"); 
cm.dispose();   
}

}else if  (selection == 91) { 
	if (cm.haveItem(4031250)) {
        cm.gainItem(4031250,-1);
cm.gainItem(1902049,1); //Сţ
cm.gainItem(1912042,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("��Ǹ��û��#v4031250#"); 
cm.dispose();   
}

}else if  (selection == 92) { 
	if (cm.haveItem(4031250)) {
        cm.gainItem(4031250,-1);
cm.gainItem(1902050,1); //Ħ��
cm.gainItem(1912043,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("��Ǹ��û��#v4031250#"); 
cm.dispose();   
}

}else if  (selection == 93) { 
	if (cm.haveItem(4031250)) {
        cm.gainItem(4031250,-1);
cm.gainItem(1902051,1); //�ɴ�
cm.gainItem(1912044,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("��Ǹ��û��#v4031250#"); 
cm.dispose();   
}


}else if  (selection == 94) { 
	if (cm.haveItem(4031250)) {
        cm.gainItem(4031250,-1);
cm.gainItem(1902052,1); //����
cm.gainItem(1912045,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("��Ǹ��û��#v4031250#"); 
cm.dispose();   
}

}else if  (selection == 163) { 
	if (cm.haveItem(4031250)) {
        cm.gainItem(4031250,-1);
cm.gainItem(1902053,1); //����
cm.gainItem(1912046,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("��Ǹ��û��#v4031250#"); 
cm.dispose();   
}

}else if  (selection == 164) { 
	if (cm.haveItem(4031250)) {
        cm.gainItem(4031250,-1);
cm.gainItem(1902054,1); //������
cm.gainItem(1912047,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("��Ǹ��û��#v4031250#"); 
cm.dispose();   
}
}
}