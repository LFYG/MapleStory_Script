/*
 *R.E.D�Ҷһ�
 */

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
	    abb = 1;
	    cm.sendGetText("#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#�װ���#r#h ##k����,��ӭʹ�þ����Ҷһ�.\r\n#fUI/UIWindow2.img/Quest/quest_info/summary_icon/startcondition#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0##b#v4310038##z4310038##k #r1#k ö : #b#v4310036##z4310036##k #r20#k ö\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#Ŀǰ�����ң�#r"+cm.itemQuantity(4310038)+" #k��\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0##rע�����������ĵ�#b������#r�������һ�#b������");
        } else if (status == 1) { 
	if(cm.getText() < 1){
	    cm.playerMessage(1,"��������ֲ���С��1��");
	    cm.dispose();
	} else {
	    var xs = cm.getText() * 20;
	    cm.sendYesNo("#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#�װ���#r#h ##k����,��ӭʹ�þ����Ҷһ�.\r\n#fUI/UIWindow2.img/Quest/quest_info/summary_icon/startcondition#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#ʹ�� #r" + cm.getText() + "#k ö#b#v4310038##z4310038##k\r\n#fUI/UIWindow2.img/Quest/quest_info/summary_icon/reward#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#�һ� #r" + xs + "#k ö#b#v4310036##z4310036##k"); 
	    }
        } else if (status == 2) { 
		var xs = cm.getText() * 20;
	if (cm.itemQuantity(4310038) >= cm.getText()) { 
	   cm.gainItem(4310038,-cm.getText());
	   cm.gainItem(4310036,cm.getText() * 20);
           cm.sendOk("�һ��ɹ�,��ע�����.\r\n#b"+ cm.getText() +"#k ��#v4310038##z4310038# �һ��� #r"+ xs +"#k  ��#v4310036##z4310036#");
           cm.dispose();
        } else {
           cm.sendOk("��û���㹻��#v4310038##z4310038#,����Ŭ��.");
           cm.dispose();
	 }
      } 
   }
}