/*
	Mady By Coffee
	Powered By XXMS
	Warp NPC
*/

var bossmaps = Array(					
    Array(211042400,0,"����"), 
    Array(211042401,0,"��������"),                
    Array(689010000,0,"��ɫ����"),
    Array(240060200,0,"����"), 
    Array(240060201,0,"���׺���"), 
    Array(270050000,0,"pb-Ʒ����"), 
    Array(211070000,0,"ʨ����"), 
    Array(105100100,0,"��ħ�����"), 
    Array(271040000,0,"ϣ��˹Ů��"), 
    Array(802000210,0,"���֮�� - ������ 2100��"), 
    Array(802000410,0,"���֮�� - �߿����� 2102��"), 
    Array(802000610,0,"���֮�� - ��մ�ս���װ� 2102��"), 
    Array(802000110,0,"���֮�� - ��ķ��"), 
    Array(802000710, 0,"���֮�� - ������ҵ�� 2102��"), 
    Array(802000800,0,"���֮�� - ��ó���� 2102��"), 
    Array(802000820,0,"���֮�� - ��ó���Ķ�¥"), 
    Array(262030000,0,"ϣ��֮��")					
);
var monstermaps = Array(
    Array(230040420,0,"����"), 
    Array(220080001,0,"����"), 
    Array(541020800,0,"ǧ��������"), 
    Array(551030200,0,"������"),
    Array(240020102,0,"����Ҷ�"),
    Array(240020402,0,"�����"),
    Array(240040401,0,"����"),
    Array(270010500,0,"���"),
    Array(270020500,0,"����������"),
    Array(270030500,0,"�׿�")
		); 
var townmaps = Array(		
    Array(104000000,0,"�����"), 
    Array(100000000,0,"���ִ�"), 
    Array(101000000,0,"ħ������"), 
    Array(102000000,0,"��ʿ����"), 
    Array(103000000,0,"��������"), 
    Array(120000000,0,"ŵ����˹����ͷ"),

    Array(200000000,0,"���֮��"),
    Array(211000000,0,"����ѩ��"), 
    Array(230000000,0,"ˮ������"),  
    Array(222000000,0,"ͯ����"), 
    Array(220000000,0,"��߳�"),
    Array(701000000,0,"��������"),
    Array(250000000,0,"����"), 
    Array(702000000,0,"������"), 
    Array(500000000,0,"̩��"),
    Array(260000000,0,"ɳĮ֮��"), 
    Array(252000000,0,"�ƽ���Ժ"), 
    Array(600000000,0,"��Ҷ��"), 
    Array(240000000,0,"��ľ��"), 
    Array(261000000,0,"�������"), 

    Array(221000000,0,"�����������"), 
    Array(251000000,0,"�ٲ���"),

    Array(550000000,0,"��¡����"),
    Array(130000000,0,"ʥ��"),

    Array(551000000,0,"�ʰ��"),

    Array(801000000,0,"�Ѻʹ�"), 
    Array(540010000,0,"�¼��»���"),
    Array(541000000,0,"�¼�����ͷ"),
    Array(300000000,0,"����ɭ��"), 

    Array(270000100,0,"ʱ�����"), 
    Array(702100000,0,"�ؾ���"), 

    Array(800000000,0,"����"), 

    Array(930000000,0,"����ɭ��"),
    Array(802000100,0,"�Ŵ�ɭ��"),

    Array(193000000,0,"����")
							);
var chosenMap = -1;
var monsters = 0;
var towns = 0;
var bosses = 0;

importPackage(net.sf.odinms.client);

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
            if (mode == -1) {
                cm.dispose();
            }
            else {
                if (status >= 3 && mode == 0) {
			cm.sendOk("�´��ټ�!.");
			cm.dispose();
			return;                    
                }
                if (mode == 1) {
			status++;
		}
		else {
			status--;
		}

               if (status == 0) {
                   cm.sendSimple("\r\n#L1#�������߻�ȡ#l\r\n#L0#����#l");
               }
               else if (status == 1) {

                       

                   if (selection == 0) {
                       cm.sendSimple("#fUI/UIWindow.img/QuestIcon/3/0#\r\n#L0#��ͨ��ͼ#l\r\n#L1#Ұ��boss��ͼ#l\r\n#L2#Զ����boss#l");
                   }
                   else if (selection == 1) {
       cm.dispose();
 cm.openNpc(9030000,4);
                   }
               }
               else if (status == 2) {
                   if (selection == 0) {
                        var selStr = "ѡ�����Ŀ�ĵذ�.#b";
			for (var i = 0; i < townmaps.length; i++) {
				selStr += "\r\n#L" + i + "#" + townmaps[i][2] + "";
			}
                        cm.sendSimple(selStr);
                        towns = 1;
                   }
                   if (selection == 1) {
                       var selStr = "ѡ�����Ŀ�ĵذ�.#b";
                       for (var i = 0; i < monstermaps.length; i++) {
				selStr += "\r\n#L" + i + "#" + monstermaps[i][2] + "";
                       }
                       cm.sendSimple(selStr);
                       monsters = 1;
                   }
                   if (selection == 2) {
                       var selStr = "Զ����boss��Ҫͨ��npc�볡#b";
                       for (var i = 0; i < bossmaps.length; i++) {
				selStr += "\r\n#L" + i + "#" + bossmaps[i][2] + "";
                       }
                       cm.sendSimple(selStr);
                       bosses = 1;
                   }
               }
            else if (status == 3) {
                if (towns == 1) {
                cm.sendYesNo("��ȷ��Ҫȥ " + townmaps[selection][2] + "? �۸�:#r"+townmaps[selection][1]+"#k���");
		chosenMap = selection;
                towns = 2;
                }
                else if (monsters == 1) {
                cm.sendYesNo("��ȷ��Ҫȥ " + monstermaps[selection][2] + "? �۸�:#r"+monstermaps[selection][1]+"#k���");
                chosenMap = selection;
                monsters = 2;
                }
                else if (bosses == 1) {
                cm.sendYesNo("��ȷ��Ҫȥ " + bossmaps[selection][2] + "? �۸�:#r"+bossmaps[selection][1]+"#k���");
                chosenMap = selection;
                bosses = 2;
                }
            }
            else if (status == 4) {
                if (towns == 2) {
                	if(cm.getMeso()>=townmaps[chosenMap][1]){
                		cm.warp(townmaps[chosenMap][0], 0);
                		cm.gainMeso(-townmaps[chosenMap][1]);
                	}else{
                		cm.sendOk("��û���㹻�Ľ��Ŷ!");
                	}
                    cm.dispose();
                }
                else if (monsters == 2) {
                    if(cm.getMeso()>=monstermaps[chosenMap][1]){
                		cm.warp(monstermaps[chosenMap][0], 0);
                		cm.gainMeso(-monstermaps[chosenMap][1]);
                	}else{
                		cm.sendOk("��û���㹻�Ľ��Ŷ!");
                	}
                    cm.dispose();
                }
                else if (bosses == 2) {
                    if(cm.getMeso()>=bossmaps[chosenMap][1]){
                		cm.warp(bossmaps[chosenMap][0], 0);
                		cm.gainMeso(-bossmaps[chosenMap][1]);
                	}else{
                		cm.sendOk("��û���㹻�Ľ��Ŷ!");
                	}
                    cm.dispose();
                }
            }
              
            }
}
