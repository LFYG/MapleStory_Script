var aaa ="#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";

var status = 0;
var typed=0;
var rmb = 0;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 0 && status == 0) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			var selStr = "#d#e��ӭʹ�ð�è��ҹ�����Ʒ����ѡ������Ҫ�ģ�#n#k\r\n";
			selStr +="\t#b����ǰ��è���Ϊ��  #r" + cm.getPlayerPoints() + " #b ��#n#k\r\n\r\n";
			selStr +="- #eװ�������������棩#n\r\n"
			selStr +="#L16##b"+aaa+" ����ר�� #rWELCOME��Ч#k #b��Ҫ #r10000000#k #b�󶨱�#l#k\r\n";
			selStr +="#L1##b"+aaa+" ����սʿ #r#t1122122##k #b��Ҫ #r6000000#k #b�󶨱�#l#k\r\n";
			selStr +="#L2##b"+aaa+" ����ʦ #r#t1122123##k #b��Ҫ #r6000000#k #b�󶨱�#l#k\r\n";
			selStr +="#L3##b"+aaa+" ������ #r#t1122124##k #b��Ҫ #r6000000#k #b�󶨱�#l#k\r\n";
			selStr +="#L4##b"+aaa+" ������� #r#t1122125##k #b��Ҫ #r6000000#k #b�󶨱�#l#k\r\n";
			selStr +="#L5##b"+aaa+" ���򺣵� #r#t1122126##k #b��Ҫ #r6000000#k #b�󶨱�#l#k\r\n";
			selStr +="#L6##b"+aaa+" �������� #r#t1142210##k #b��Ҫ #r500000#k #b�󶨱�#l#k\r\n"; 
			selStr +="#L7##b"+aaa+" �������� #r#t1142178##k #b��Ҫ #r300000#k #b�󶨱�#l#k\r\n"; 
			selStr +="#L8##b"+aaa+" ��ȫְ #r#t1132245##k #b��Ҫ #r1500000#k #b�󶨱�#l#k\r\n"; 
			selStr +="#L9##b"+aaa+" ��ȫְ #r#t1113074##k #b��Ҫ #r1000000#k #b�󶨱�#l#k\r\n";
			selStr +="#L10##b"+aaa+" ��ȫְ #r#t1122266##k #b��Ҫ #r1000000#k #b�󶨱�#l#k\r\n";
			selStr +="#L11##b"+aaa+" ��ȫְ #r#t1032222##k #b��Ҫ #r1000000#k #b�󶨱�#l#k\r\n";
			selStr +="#L12##b"+aaa+" ��ȫְ #r#t1132246##k #b��Ҫ #r3000000#k #b�󶨱�#l#k\r\n";
			selStr +="#L13##b"+aaa+" ��ȫְ #r#t1113075##k #b��Ҫ #r3000000#k #b�󶨱�#l#k\r\n";
			selStr +="#L14##b"+aaa+" ��ȫְ #r#t1122267##k #b��Ҫ #r2000000#k #b�󶨱�#l#k\r\n";
			selStr +="#L15##b"+aaa+" ��ȫְ #r#t1032223##k #b��Ҫ #r3000000#k #b�󶨱�#l#k\r\n";
			//selStr +=""
			//selStr +="- #e����150������#n\r\n"
			//selStr +="#L20##b"+aaa+" ˫�ֽ� #r#t1402196##k #b�� #r1500000#k #b�󶨱�#l#k\r\n";
			//selStr +="#L21##b"+aaa+" սʿǹ #r#t1432167##k #b�� #r1500000#k #b�󶨱�#l#k\r\n";
			//selStr +="#L22##b"+aaa+" ���ֹ� #r#t1452205##k #b�� #r1500000#k #b�󶨱�#l#k\r\n";
			//selStr +="#L23##b"+aaa+" ������ #r#t1462193##k #b�� #r1500000#k #b�󶨱�#l#k\r\n";
			//selStr +="#L24##b"+aaa+" ˫��ǹ #r#t1522094##k #b�� #r1500000#k #b�󶨱�#l#k\r\n";
			//selStr +="#L25##b"+aaa+" ��ȭ�� #r#t1472214##k #b�� #r1500000#k #b�󶨱�#l#k\r\n";
			//selStr +="#L26##b"+aaa+" �����̵� #r#t1332225##k #b�� #r1500000#k #b�󶨱�#l#k\r\n";
			//selStr +="#L27##b"+aaa+" �������� #r#t1342082##k #b�� #r1500000#k #b�󶨱�#l#k\r\n";
			//selStr +="#L28##b"+aaa+" ��Ӱ���� #r#t1362090##k #b�� #r1500000#k #b�󶨱�#l#k\r\n";
			//selStr +="#L29##b"+aaa+" ��ʦ���� #r#t1382208##k #b�� #r1500000#k #b�󶨱�#l#k\r\n";
			//selStr +="#L30##b"+aaa+" ��ʦ���� #r#t1372177##k #b�� #r1500000#k #b�󶨱�#l#k\r\n";
			//selStr +="#L31##b"+aaa+" ҹ��˫ͷ�� #r#t1212063##k #b�� #r1500000#k #b�󶨱�#l#k\r\n";
			//selStr +="#L32##b"+aaa+" ��������� #r#t1242060##k #b�� #r1500000#k #b�󶨱�#l#k\r\n";
			//selStr +="#L33##b"+aaa+" ��ħ������ #r#t1232057##k #b�� #r1500000#k #b�󶨱�#l#k\r\n";
			//selStr +="#L34##b"+aaa+" սʿ���ָ� #r#t1312153##k #b�� #r1500000#k #b�󶨱�#l#k\r\n";
			//selStr +="#L35##b"+aaa+" սʿ���ֶ��� #r#t1322203##k #b�� #r1500000#k #b�󶨱�#l#k\r\n";
			//selStr +="#L36##b"+aaa+" սʿ���ֽ� #r#t1302275##k #b�� #r1500000#k #b�󶨱�#l#k\r\n";
			//selStr +="#L37##b"+aaa+" ����ָ�� #r#t1482168##k #b�� #r1500000#k #b�󶨱�#l#k\r\n";
			//selStr +="#L38##b"+aaa+" ���������ͳ #r#t1222058##k #b�� #r1500000#k #b�󶨱�#l#k\r\n";
			//selStr +="#L39##b"+aaa+" սʿս��ì #r#t1442223##k #b�� #r1500000#k #b�󶨱�#l#k\r\n";
			selStr +=" \r\n\r\n";
                        cm.sendSimple(selStr);	
		} else if (status == 1) {
			if (selection == 1) {
				typed=1;
				cm.sendYesNo("ȷ������ #r#t1122122##k ����ʹ�õ��� #r6000000#k ��è���. ������� #r������50 ����20 ħ�� 20 #kսʿ #t1122122#��");
			} else if (selection == 2) {
				typed=2;
				cm.sendYesNo("ȷ������ #r#t1122123##k ����ʹ�õ��� #r6000000#k ��è���. ������� #rħ����50 ����20 ħ�� 20 #k��ʦ #t1122123#��");
                        } else if (selection == 3) {
				typed=3;
				cm.sendYesNo("ȷ������ #r#t1122124##k ����ʹ�õ��� #r6000000#k ��è���. ������� #r������50 ����20 ħ�� 20 #k���� #t1122124#��");
                        } else if (selection == 4) {
				typed=4;
				cm.sendYesNo("ȷ������ #r#t1122125##k ����ʹ�õ��� #r6000000#k ��è���. ������� #r������50 ����20 ħ�� 20 #k���� #t1122125#��");
                        } else if (selection == 5) {
				typed=5;
				cm.sendYesNo("ȷ������ #r#t1122126##k ����ʹ�õ��� #r6000000#k ��è���. ������� #r������50 ����20 ħ�� 20 #k���� #t1122126#��");
                        } else if (selection == 6) {
				typed=6;
				cm.sendYesNo("ȷ������ #r#t1142210##k ����ʹ�õ��� #r500000#k ��è���. ������� #rȫ����+7 ����ħ��+8#k �� #t1142210#��");
                        } else if (selection == 7) {
				typed=7;
				cm.sendYesNo("ȷ������ #r#t1142178##k ����ʹ�õ��� #r300000#k ��è���. ������� #rȫ����+5 �ƶ�+7 ��Ծ+3#k �� #t1142178#��");	
                        } else if (selection == 8) {
				typed=8;
				cm.sendYesNo("ȷ������ #r#t1132245##k ����ʹ�õ��� #r1500000#k ��è���. ������� #rȫ����+30 ����ħ��+20#k �� #t1132245#��");	
                        } else if (selection == 9) {
				typed=9;
				cm.sendYesNo("ȷ������ #r#t1113074##k ����ʹ�õ��� #r1000000#k ��è���. ������� �� #t1113074#��");	
                        } else if (selection == 10) {
				typed=10;
				cm.sendYesNo("ȷ������ #r#t1122266##k ����ʹ�õ��� #r1000000#k ��è���. ������� #rȫ����+20 ����ħ��+3#k �� #t1122266#��");
                        } else if (selection == 11) {
				typed=11;
				cm.sendYesNo("ȷ������ #r#t1032222##k ����ʹ�õ��� #r1200000#k ��è���. ������� #rȫ����+12 ����ħ��+5#k �� #t1032222#��");
						} else if (selection == 12) {
				typed=12;
				cm.sendYesNo("ȷ������ #r#t1132246##k ����ʹ�õ��� #r3000000#k ��è���. �������  �� #t1132246#��");
						} else if (selection == 13) {
				typed=13;
				cm.sendYesNo("ȷ������ #r#t1113075##k ����ʹ�õ��� #r3000000#k ��è���. �������  �� #t1113075#��");
						} else if (selection == 14) {
				typed=14;
				cm.sendYesNo("ȷ������ #r#1122267##k ����ʹ�õ��� #r3000000#k ��è���. �������  �� #t1122267#��");
						} else if (selection == 15) {
				typed=15;
				cm.sendYesNo("ȷ������ #r#t1032223##k ����ʹ�õ��� #r3000000#k ��è���. �������  �� #t1032223#��");
						} else if (selection == 16) {
				typed=16;
				cm.sendYesNo("ȷ������ #rWELCOME��Ч#k ����ʹ�õ��� #r10000000#k ��è���. ������� #rȫ����+100 ����ħ��+100#k �� WELCOME��Ч��.");
						} else if (selection == 17) {
				typed=17;
				cm.sendYesNo("ȷ������ #r150������#k ����ʹ�õ��� #r1500000#k ��è���. ������� #r150����һ�ѣ��뿴�����ְҵ����#k .");
						} else if (selection == 18) {
				typed=18;
				cm.sendYesNo("ȷ������ #r150������#k ����ʹ�õ��� #r1500000#k ��è���. ������� #r150����һ�ѣ��뿴�����ְҵ����#k .");
						} else if (selection == 19) {
				typed=19;
				cm.sendYesNo("ȷ������ #r150������#k ����ʹ�õ��� #r1500000#k ��è���. ������� #r150����һ�ѣ��뿴�����ְҵ����#k .");
						} else if (selection == 20) {
				typed=20;
				cm.sendYesNo("ȷ������ #r150������#k ����ʹ�õ��� #r1500000#k ��è���. ������� #r150����һ�ѣ��뿴�����ְҵ����#k .");
						} else if (selection == 21) {
				typed=21;
				cm.sendYesNo("ȷ������ #r150������#k ����ʹ�õ��� #r1500000#k ��è���. ������� #r150����һ�ѣ��뿴�����ְҵ����#k .");
						} else if (selection == 22) {
				typed=22;
				cm.sendYesNo("ȷ������ #r150������#k ����ʹ�õ��� #r1500000#k ��è���. ������� #r150����һ�ѣ��뿴�����ְҵ����#k .");
						} else if (selection == 23) {
				typed=23;
				cm.sendYesNo("ȷ������ #r150������#k ����ʹ�õ��� #r1500000#k ��è���. ������� #r150����һ�ѣ��뿴�����ְҵ����#k .");
						} else if (selection == 24) {
				typed=24;
				cm.sendYesNo("ȷ������ #r150������#k ����ʹ�õ��� #r1500000#k ��è���. ������� #r150����һ�ѣ��뿴�����ְҵ����#k .");
						} else if (selection == 25) {
				typed=25;
				cm.sendYesNo("ȷ������ #r150������#k ����ʹ�õ��� #r1500000#k ��è���. ������� #r150����һ�ѣ��뿴�����ְҵ����#k .");
						} else if (selection == 26) {
				typed=26;
				cm.sendYesNo("ȷ������ #r150������#k ����ʹ�õ��� #r1500000#k ��è���. ������� #r150����һ�ѣ��뿴�����ְҵ����#k .");
						} else if (selection == 27) {
				typed=27;
				cm.sendYesNo("ȷ������ #r150������#k ����ʹ�õ��� #r1500000#k ��è���. ������� #r150����һ�ѣ��뿴�����ְҵ����#k .");
						} else if (selection == 28) {
				typed=28;
				cm.sendYesNo("ȷ������ #r150������#k ����ʹ�õ��� #r1500000#k ��è���. ������� #r150����һ�ѣ��뿴�����ְҵ����#k .");
						} else if (selection == 29) {
				typed=29;
				cm.sendYesNo("ȷ������ #r150������#k ����ʹ�õ��� #r1500000#k ��è���. ������� #r150����һ�ѣ��뿴�����ְҵ����#k .");
						} else if (selection == 30) {
				typed=30;
				cm.sendYesNo("ȷ������ #r150������#k ����ʹ�õ��� #r1500000#k ��è���. ������� #r150����һ�ѣ��뿴�����ְҵ����#k .");
						} else if (selection == 31) {
				typed=31;
				cm.sendYesNo("ȷ������ #r150������#k ����ʹ�õ��� #r1500000#k ��è���. ������� #r150����һ�ѣ��뿴�����ְҵ����#k .");
						} else if (selection == 32) {
				typed=32;
				cm.sendYesNo("ȷ������ #r150������#k ����ʹ�õ��� #r1500000#k ��è���. ������� #r150����һ�ѣ��뿴�����ְҵ����#k .");
						} else if (selection == 33) {
				typed=33;
				cm.sendYesNo("ȷ������ #r150������#k ����ʹ�õ��� #r1500000#k ��è���. ������� #r150����һ�ѣ��뿴�����ְҵ����#k .");
						} else if (selection == 34) {
				typed=34;
				cm.sendYesNo("ȷ������ #r150������#k ����ʹ�õ��� #r1500000#k ��è���. ������� #r150����һ�ѣ��뿴�����ְҵ����#k .");
						} else if (selection == 35) {
				typed=35;
				cm.sendYesNo("ȷ������ #r150������#k ����ʹ�õ��� #r1500000#k ��è���. ������� #r150����һ�ѣ��뿴�����ְҵ����#k .");
				    	} else if (selection == 36) {
				typed=36;
				cm.sendYesNo("ȷ������ #r150������#k ����ʹ�õ��� #r1500000#k ��è���. ������� #r150����һ�ѣ��뿴�����ְҵ����#k .");
						} else if (selection == 37) {
				typed=37;
				cm.sendYesNo("ȷ������ #r150������#k ����ʹ�õ��� #r1500000#k ��è���. ������� #r150����һ�ѣ��뿴�����ְҵ����#k .");
				    	} else if (selection == 38) {
				typed=38;
				cm.sendYesNo("ȷ������ #r150������#k ����ʹ�õ��� #r1500000#k ��è���. ������� #r150����һ�ѣ��뿴�����ְҵ����#k .");
				    	} else if (selection == 39) {
				typed=39;
				cm.sendYesNo("ȷ������ #r150������#k ����ʹ�õ��� #r1500000#k ��è���. ������� #r150����һ�ѣ��뿴�����ְҵ����#k .");
			}
		} else if (status == 2) {
			if(typed==1){
                if (cm.getPlayerPoints() >= 6000000 && cm.getSpace(1) >= 1) {
			cm.gainPlayerPoints(-6000000);
			cm.gainItem(1122122, 1);
			cm.sendOk("��ϲ���ɹ�����#t1122122#.");
			cm.getMap().startMapEffect("��ϲ��� "+cm.getChar().getName()+" �ɹ�����������һ����", 5120012);
			cm.worldSpouseMessage(0x20, "���󶨱��̳ǡ� : ��ϲ " + cm.getChar().getName() + " �ð�è��ҹ���սʿ������һ��.");
			cm.dispose();
				} else {
			cm.sendOk("����ʧ�ܣ�\r\n\r\n#r1). ��ǰ��è���δ�ﵽ����.\r\n2). ����װ����λ����,������.");
			cm.dispose();
				}
			}else if(typed==2){
                if (cm.getPlayerPoints() >= 6000000 && cm.getSpace(1) >= 1) {
			cm.gainPlayerPoints(-6000000);
			cm.gainItem(1122123, 1);
			cm.sendOk("��ϲ���ɹ�����#t1122123#.");
			cm.getMap().startMapEffect("��ϲ��� "+cm.getChar().getName()+" �ɹ�����������һ����", 5120012);
			cm.worldSpouseMessage(0x20, "���󶨱��̳ǡ� : ��ϲ " + cm.getChar().getName() + " �ð�è��ҹ���ʦ������һ��.");
			cm.dispose();
				} else {
			cm.sendOk("����ʧ�ܣ�\r\n\r\n#r1). ��ǰ��è���δ�ﵽ����.\r\n2). ����װ����λ����,������.");
			cm.dispose();
				}
			}else if(typed==3){
                if (cm.getPlayerPoints() >= 6000000 && cm.getSpace(1) >= 1) {
			cm.gainPlayerPoints(-6000000);
			cm.gainItem(1122124, 1);
			cm.sendOk("��ϲ���ɹ�����#t1122123#.");
			cm.getMap().startMapEffect("��ϲ��� "+cm.getChar().getName()+" �ɹ�����������һ����", 5120012);
			cm.worldSpouseMessage(0x20, "���󶨱��̳ǡ� : ��ϲ " + cm.getChar().getName() + " �ð�è��ҹ�����������һ��.");
			cm.dispose();
				} else {
			cm.sendOk("����ʧ�ܣ�\r\n\r\n#r1). ��ǰ��è���δ�ﵽ����.\r\n2). ����װ����λ����,������.");
			cm.dispose();
				}
			}else if(typed==4){
                if (cm.getPlayerPoints() >= 6000000 && cm.getSpace(1) >= 1) {
			cm.gainPlayerPoints(-6000000);
			cm.gainItem(1122125, 1);
			cm.sendOk("��ϲ���ɹ�����#t1122125#.");
			cm.getMap().startMapEffect("��ϲ��� "+cm.getChar().getName()+" �ɹ�����������һ����", 5120012);
			cm.worldSpouseMessage(0x20, "���󶨱��̳ǡ� : ��ϲ " + cm.getChar().getName() + " �ð�è��ҹ������������һ��.");
			cm.dispose();
				} else {
			cm.sendOk("����ʧ�ܣ�\r\n\r\n#r1). ��ǰ��è���δ�ﵽ����.\r\n2). ����װ����λ����,������.");
			cm.dispose();
				}
			}else if(typed==5){
                if (cm.getPlayerPoints() >= 6000000 && cm.getSpace(1) >= 1) {
			cm.gainPlayerPoints(-6000000);
			cm.gainItem(1122126, 1);
			cm.sendOk("��ϲ���ɹ�����#t1122126#.");
			cm.getMap().startMapEffect("��ϲ��� "+cm.getChar().getName()+" �ɹ�����������һ����", 5120012);
			cm.worldSpouseMessage(0x20, "���󶨱��̳ǡ� : ��ϲ " + cm.getChar().getName() + " �ð�è��ҹ�����������һ��.");
			cm.dispose();
				} else {
			cm.sendOk("����ʧ�ܣ�\r\n\r\n#r1). ��ǰ��è���δ�ﵽ����.\r\n2). ����װ����λ����,������.");
			cm.dispose();
				}
			}else if(typed==6){
                if (cm.getPlayerPoints() >= 500000 && cm.getSpace(1) >= 1) {
			cm.gainPlayerPoints(-500000);
			cm.gainItem(1142210, 1);
			cm.sendOk("��ϲ���ɹ�����#t1142210#.");
			cm.getMap().startMapEffect("��ϲ��� "+cm.getChar().getName()+" �ɹ����������ղؼ�һ����", 5120012);
			cm.worldSpouseMessage(0x20, "���󶨱��̳ǡ� : ��ϲ " + cm.getChar().getName() + " �ð�è��ҹ��������ղؼ�һ��.");
			cm.dispose();
				} else {
			cm.sendOk("����ʧ�ܣ�\r\n\r\n#r1). ��ǰ��è���δ�ﵽ����.\r\n2). ����װ����λ����,������.");
			cm.dispose();
				}
			}else if(typed==7){
                if (cm.getPlayerPoints() >= 300000 && cm.getSpace(1) >= 1) {
			cm.gainPlayerPoints(-300000);
			cm.gainItem(1142178, 1);
			cm.sendOk("��ϲ���ɹ�����#t1142178#.");
			cm.getMap().startMapEffect("��ϲ��� "+cm.getChar().getName()+" �ɹ�����ð�յ������ʹһ����", 5120012);
			cm.worldSpouseMessage(0x20, "���󶨱��̳ǡ� : ��ϲ " + cm.getChar().getName() + " �ð�è��ҹ���ð�յ������ʹһ��.");
			cm.dispose();
				} else {
			cm.sendOk("����ʧ�ܣ�\r\n\r\n#r1). ��ǰ��è���δ�ﵽ����.\r\n2). ����װ����λ����,������.");
			cm.dispose();
				}
			}else if(typed==8){
                if (cm.getPlayerPoints() >= 1500000 && cm.getSpace(1) >= 1) {
			cm.gainPlayerPoints(-1500000);
			cm.gainItem(1132245, 1);
			cm.sendOk("��ϲ���ɹ�����#t1132245#.");
			cm.getMap().startMapEffect("��ϲ��� "+cm.getChar().getName()+" �ɹ�����߼����յ¿�ӡ����һ����", 5120012);
			cm.worldSpouseMessage(0x20, "���󶨱��̳ǡ� : ��ϲ " + cm.getChar().getName() + " �ð�è��ҹ���߼����յ¿�ӡ����һ��.");
			cm.dispose();
				} else {
			cm.sendOk("����ʧ�ܣ�\r\n\r\n#r1). ��ǰ��è���δ�ﵽ����.\r\n2). ����װ����λ����,������.");
			cm.dispose();
				}
			}else if(typed==9){
                if (cm.getPlayerPoints() >= 1000000 && cm.getSpace(1) >= 1) {
			cm.gainPlayerPoints(-1000000);
			cm.gainItem(1113074, 1);
			cm.sendOk("��ϲ���ɹ�����#t1113074#.");
			cm.getMap().startMapEffect("��ϲ��� "+cm.getChar().getName()+" �ɹ�����߼����յ¿�ӡ��ָһ����", 5120012);
			cm.worldSpouseMessage(0x20, "���󶨱��̳ǡ� : ��ϲ " + cm.getChar().getName() + " �ð�è��ҹ���߼����յ¿�ӡ��ָһ��.");
			cm.dispose();
				} else {
			cm.sendOk("����ʧ�ܣ�\r\n\r\n#r1). ��ǰ��è���δ�ﵽ����.\r\n2). ����װ����λ����,������.");
			cm.dispose();
				}
			}else if(typed==10){
                if (cm.getPlayerPoints() >= 1000000 && cm.getSpace(1) >= 1) {
			cm.gainPlayerPoints(-1000000);
			cm.gainItem(1122266, 1);
			cm.sendOk("��ϲ���ɹ�����#t1122266#.");
			cm.getMap().startMapEffect("��ϲ��� "+cm.getChar().getName()+" �ɹ�����߼����յ¿�ӡ��׹һ����", 5120012);
			cm.worldSpouseMessage(0x20, "���󶨱��̳ǡ� : ��ϲ " + cm.getChar().getName() + " �ð�è��ҹ���߼����յ¿�ӡ��׹һ��.");
			cm.dispose();
				} else {
			cm.sendOk("����ʧ�ܣ�\r\n\r\n#r1). ��ǰ��è���δ�ﵽ����.\r\n2). ����װ����λ����,������.");
			cm.dispose();
				}
			}else if(typed==11){
                if (cm.getPlayerPoints() >= 1000000 && cm.getSpace(1) >= 1) {
			cm.gainPlayerPoints(-1000000);
			cm.gainItem(1032222, 1);
			cm.sendOk("��ϲ���ɹ�����#t1032222#.");
			cm.getMap().startMapEffect("��ϲ��� "+cm.getChar().getName()+" �ɹ�����߼����յ¿�ӡ����һ����", 5120012);
			cm.worldSpouseMessage(0x20, "���󶨱��̳ǡ� : ��ϲ " + cm.getChar().getName() + " �ð�è��ҹ�����߼����յ¿�ӡ����һ��.");
			cm.dispose();
				} else {
			cm.sendOk("����ʧ�ܣ�\r\n\r\n#r1). ��ǰ��è���δ�ﵽ����.\r\n2). ����װ����λ����,������.");
			cm.dispose();
				}
			}else if(typed==12){
                if (cm.getPlayerPoints() >= 3000000 && cm.getSpace(1) >= 1) {
			cm.gainPlayerPoints(-3000000);
			cm.gainItem(1132246, 1);
			cm.sendOk("��ϲ���ɹ�����#t1132246#.");
			cm.getMap().startMapEffect("��ϲ��� "+cm.getChar().getName()+" �ɹ�������߼����յ¿�ӡ����һ����", 5120012);
			cm.worldSpouseMessage(0x20, "���󶨱��̳ǡ� : ��ϲ " + cm.getChar().getName() + " �ð�è��ҹ�����߼����յ¿�ӡ����һ��.");
			cm.dispose();
				} else {
			cm.sendOk("����ʧ�ܣ�\r\n\r\n#r1). ��ǰ��è���δ�ﵽ����.\r\n2). ����װ����λ����,������.");
			cm.dispose();
				}
			}else if(typed==13){
                if (cm.getPlayerPoints() >= 3000000 && cm.getSpace(1) >= 1) {
			cm.gainPlayerPoints(-3000000);
			cm.gainItem(1113075, 1);
			cm.sendOk("��ϲ���ɹ�����#t1113075#.");
			cm.getMap().startMapEffect("��ϲ��� "+cm.getChar().getName()+" �ɹ�������߼����յ½�ָһ����", 5120012);
			cm.worldSpouseMessage(0x20, "���󶨱��̳ǡ� : ��ϲ " + cm.getChar().getName() + " �ð�è��ҹ�����߼����յ½�ָһ��.");
			cm.dispose();
				} else {
			cm.sendOk("����ʧ�ܣ�\r\n\r\n#r1). ��ǰ��è���δ�ﵽ����.\r\n2). ����װ����λ����,������.");
			cm.dispose();
				}
			}else if(typed==14){
                if (cm.getPlayerPoints() >= 2000000 && cm.getSpace(1) >= 1) {
			cm.gainPlayerPoints(-2000000);
			cm.gainItem(1122267, 1);
			cm.sendOk("��ϲ���ɹ�����#t1122267#.");
			cm.getMap().startMapEffect("��ϲ��� "+cm.getChar().getName()+" �ɹ����������߼����յ¿�ӡ��׹һ����", 5120012);
			cm.worldSpouseMessage(0x20, "���󶨱��̳ǡ� : ��ϲ " + cm.getChar().getName() + " �ð�è��ҹ�����߼����յ¿�ӡ��׹һ��.");
			cm.dispose();
				} else {
			cm.sendOk("����ʧ�ܣ�\r\n\r\n#r1). ��ǰ��è���δ�ﵽ����.\r\n2). ����װ����λ����,������.");
			cm.dispose();
				}
			}else if(typed==15){
                if (cm.getPlayerPoints() >= 3000000 && cm.getSpace(1) >= 1) {
			cm.gainPlayerPoints(-3000000);
			cm.gainItem(1032223, 1);
			cm.sendOk("��ϲ���ɹ�����#t1032223#.");
			cm.getMap().startMapEffect("��ϲ��� "+cm.getChar().getName()+" �ɹ�������߼����յ¶���һ����", 5120002);
			cm.worldSpouseMessage(0x20, "���󶨱��̳ǡ� : ��ϲ " + cm.getChar().getName() + " �ð�è��ҹ�����߼����յ¶���һ��.");
			cm.dispose();
				} else {
			cm.sendOk("����ʧ�ܣ�\r\n\r\n#r1). ��ǰ��è���δ�ﵽ����.\r\n2). ����װ����λ����,������.");
			cm.dispose();
				}
	        }else if(typed==16){   // WELCOME��Ч��
                if (cm.getPlayerPoints() >= 10000000 && cm.getSpace(1) >= 1) {
			cm.gainPlayerPoints(-10000000);
			var ii = cm.getItemInfo();				
			var toDrop = ii.randomizeStats(ii.getEquipById(1112941)).copy(); // ����һ��Equip��                    
            toDrop.setStr(100); //װ������
			toDrop.setDex(100); //װ������
			toDrop.setInt(100); //װ������
			toDrop.setLuk(100); //װ������
			toDrop.setMatk(100); //������
			toDrop.setWatk(100); //ħ������ 
			cm.addFromDrop(cm.getC(), toDrop, false);
			cm.gainNX(1, 2);
			cm.sendOk("��ϲ���ɹ�����WELCOME��Ч.");
			cm.getMap().startMapEffect("��ϲ��� "+cm.getChar().getName()+" �ɹ�����WELCOME��Чһ����", 5120002);
			cm.worldSpouseMessage(0x20, "������������ : ��ϲ�桤���� " + cm.getChar().getName() + " ����������ר��WELCOME��Чһ��.");
			cm.worldSpouseMessage(0x20, "������������ : ��ϲ�桤���� " + cm.getChar().getName() + " ����������ר��WELCOME��Чһ��.");
			cm.worldSpouseMessage(0x20, "������������ : ��ϲ�桤���� " + cm.getChar().getName() + " ����������ר��WELCOME��Чһ��.");
			cm.worldSpouseMessage(0x20, "������������ : ��ϲ�桤���� " + cm.getChar().getName() + " ����������ר��WELCOME��Чһ��.");
			cm.worldSpouseMessage(0x20, "������������ : ��ϲ�桤���� " + cm.getChar().getName() + " ����������ר��WELCOME��Чһ��.");
			cm.worldSpouseMessage(0x20, "������������ : ��ϲ�桤���� " + cm.getChar().getName() + " ����������ר��WELCOME��Чһ��.");
			cm.worldSpouseMessage(0x20, "������������ : ��ϲ�桤���� " + cm.getChar().getName() + " ����������ר��WELCOME��Чһ��.");
			cm.worldSpouseMessage(0x20, "������������ : ��ϲ�桤���� " + cm.getChar().getName() + " ����������ר��WELCOME��Чһ��.");
			cm.worldSpouseMessage(0x20, "������������ : ��ϲ�桤���� " + cm.getChar().getName() + " ����������ר��WELCOME��Чһ��.");
			cm.worldSpouseMessage(0x20, "������������ : ��ϲ�桤���� " + cm.getChar().getName() + " ����������ר��WELCOME��Чһ��.");
			cm.dispose();
				} else {
			cm.sendOk("����ʧ�ܣ�\r\n\r\n#r1). ��ǰ��è���δ�ﵽ����.\r\n2). ����װ����λ����,������.");
			cm.dispose();
				}
			}else if(typed==20){
                if (cm.getPlayerPoints() >= 1500000 && cm.getSpace(1) >= 1) {
			cm.gainPlayerPoints(-1500000);
			cm.gainItem(1402196, 1);
			cm.sendOk("��ϲ���ɹ�����150������.");
			cm.getMap().startMapEffect("��ϲ��� "+cm.getChar().getName()+" �ɹ�����150������һ�ѡ�", 5120012);
			cm.worldSpouseMessage(0x20, "���󶨱��̳ǡ� : ��ϲ " + cm.getChar().getName() + " ��150W��è��ҹ���150������һ��.");
			cm.dispose();
				} else {
			cm.sendOk("����ʧ�ܣ�\r\n\r\n#r1). ��ǰ��è���δ�ﵽ����.\r\n2). ����װ����λ����,������.");
			cm.dispose();
				}
			}else if(typed==21){
                if (cm.getPlayerPoints() >= 1500000 && cm.getSpace(1) >= 1) {
			cm.gainPlayerPoints(-1500000);
			cm.gainItem(1432167, 1);
			cm.sendOk("��ϲ���ɹ�����150������.");
			cm.getMap().startMapEffect("��ϲ��� "+cm.getChar().getName()+" �ɹ�����150������һ�ѡ�", 5120012);
			cm.worldSpouseMessage(0x20, "���󶨱��̳ǡ� : ��ϲ " + cm.getChar().getName() + " ��150W��è��ҹ���150������һ��.");
			cm.dispose();
				} else {
			cm.sendOk("����ʧ�ܣ�\r\n\r\n#r1). ��ǰ��è���δ�ﵽ����.\r\n2). ����װ����λ����,������.");
			cm.dispose();
				}
			}else if(typed==22){
                if (cm.getPlayerPoints() >= 1500000 && cm.getSpace(1) >= 1) {
			cm.gainPlayerPoints(-1500000);
			cm.gainItem(1452205, 1);
			cm.sendOk("��ϲ���ɹ�����150������.");
			cm.getMap().startMapEffect("��ϲ��� "+cm.getChar().getName()+" �ɹ�����150������һ�ѡ�", 5120012);
			cm.worldSpouseMessage(0x20, "���󶨱��̳ǡ� : ��ϲ " + cm.getChar().getName() + " ��150W��è��ҹ���150������һ��.");
			cm.dispose();
				} else {
			cm.sendOk("����ʧ�ܣ�\r\n\r\n#r1). ��ǰ��è���δ�ﵽ����.\r\n2). ����װ����λ����,������.");
			cm.dispose();
				}
			}else if(typed==23){
                if (cm.getPlayerPoints() >= 1500000 && cm.getSpace(1) >= 1) {
			cm.gainPlayerPoints(-1500000);
			cm.gainItem(1462193, 1);
			cm.sendOk("��ϲ���ɹ�����150������.");
			cm.getMap().startMapEffect("��ϲ��� "+cm.getChar().getName()+" �ɹ�����150������һ�ѡ�", 5120012);
			cm.worldSpouseMessage(0x20, "���󶨱��̳ǡ� : ��ϲ " + cm.getChar().getName() + " ��150W��è��ҹ���150������һ��.");
			cm.dispose();
				} else {
			cm.sendOk("����ʧ�ܣ�\r\n\r\n#r1). ��ǰ��è���δ�ﵽ����.\r\n2). ����װ����λ����,������.");
			cm.dispose();
				}
			}else if(typed==24){
                if (cm.getPlayerPoints() >= 1500000 && cm.getSpace(1) >= 1) {
			cm.gainPlayerPoints(-1500000);
			cm.gainItem(1522094, 1);
			cm.sendOk("��ϲ���ɹ�����150������.");
			cm.getMap().startMapEffect("��ϲ��� "+cm.getChar().getName()+" �ɹ�����150������һ�ѡ�", 5120012);
			cm.worldSpouseMessage(0x20, "���󶨱��̳ǡ� : ��ϲ " + cm.getChar().getName() + " ��150W��è��ҹ���150������һ��.");
			cm.dispose();
				} else {
			cm.sendOk("����ʧ�ܣ�\r\n\r\n#r1). ��ǰ��è���δ�ﵽ����.\r\n2). ����װ����λ����,������.");
			cm.dispose();
				}
			}else if(typed==25){
                if (cm.getPlayerPoints() >= 1500000 && cm.getSpace(1) >= 1) {
			cm.gainPlayerPoints(-1500000);
			cm.gainItem(1472214, 1);
			cm.sendOk("��ϲ���ɹ�����150������.");
			cm.getMap().startMapEffect("��ϲ��� "+cm.getChar().getName()+" �ɹ�����150������һ�ѡ�", 5120012);
			cm.worldSpouseMessage(0x20, "���󶨱��̳ǡ� : ��ϲ " + cm.getChar().getName() + " ��150W��è��ҹ���150������һ��.");
			cm.dispose();
				} else {
			cm.sendOk("����ʧ�ܣ�\r\n\r\n#r1). ��ǰ��è���δ�ﵽ����.\r\n2). ����װ����λ����,������.");
			cm.dispose();
				}
			}else if(typed==26){
                if (cm.getPlayerPoints() >= 1500000 && cm.getSpace(1) >= 1) {
			cm.gainPlayerPoints(-1500000);
			cm.gainItem(1332225, 1);
			cm.sendOk("��ϲ���ɹ�����150������.");
			cm.getMap().startMapEffect("��ϲ��� "+cm.getChar().getName()+" �ɹ�����150������һ�ѡ�", 5120012);
			cm.worldSpouseMessage(0x20, "���󶨱��̳ǡ� : ��ϲ " + cm.getChar().getName() + " ��150W��è��ҹ���150������һ��.");
			cm.dispose();
				} else {
			cm.sendOk("����ʧ�ܣ�\r\n\r\n#r1). ��ǰ��è���δ�ﵽ����.\r\n2). ����װ����λ����,������.");
			cm.dispose();
				}
			}else if(typed==27){
                if (cm.getPlayerPoints() >= 1500000 && cm.getSpace(1) >= 1) {
			cm.gainPlayerPoints(-1500000);
			cm.gainItem(1342082, 1);
			cm.sendOk("��ϲ���ɹ�����150������.");
			cm.getMap().startMapEffect("��ϲ��� "+cm.getChar().getName()+" �ɹ�����150������һ�ѡ�", 5120012);
			cm.worldSpouseMessage(0x20, "���󶨱��̳ǡ� : ��ϲ " + cm.getChar().getName() + " ��150W��è��ҹ���150������һ��.");
			cm.dispose();
				} else {
			cm.sendOk("����ʧ�ܣ�\r\n\r\n#r1). ��ǰ��è���δ�ﵽ����.\r\n2). ����װ����λ����,������.");
			cm.dispose();
				}
			}else if(typed==28){
                if (cm.getPlayerPoints() >= 1500000 && cm.getSpace(1) >= 1) {
			cm.gainPlayerPoints(-1500000);
			cm.gainItem(1362090, 1);
			cm.sendOk("��ϲ���ɹ�����150������.");
			cm.getMap().startMapEffect("��ϲ��� "+cm.getChar().getName()+" �ɹ�����150������һ�ѡ�", 5120012);
			cm.worldSpouseMessage(0x20, "���󶨱��̳ǡ� : ��ϲ " + cm.getChar().getName() + " ��150W��è��ҹ���150������һ��.");
			cm.dispose();
				} else {
			cm.sendOk("����ʧ�ܣ�\r\n\r\n#r1). ��ǰ��è���δ�ﵽ����.\r\n2). ����װ����λ����,������.");
			cm.dispose();
				}
			}else if(typed==29){
                if (cm.getPlayerPoints() >= 1500000 && cm.getSpace(1) >= 1) {
			cm.gainPlayerPoints(-1500000);
			cm.gainItem(1382208, 1);
			cm.sendOk("��ϲ���ɹ�����150������.");
			cm.getMap().startMapEffect("��ϲ��� "+cm.getChar().getName()+" �ɹ�����150������һ�ѡ�", 5120012);
			cm.worldSpouseMessage(0x20, "���󶨱��̳ǡ� : ��ϲ " + cm.getChar().getName() + " ��150W��è��ҹ���150������һ��.");
			cm.dispose();
				} else {
			cm.sendOk("����ʧ�ܣ�\r\n\r\n#r1). ��ǰ��è���δ�ﵽ����.\r\n2). ����װ����λ����,������.");
			cm.dispose();
				}
			}else if(typed==30){
                if (cm.getPlayerPoints() >= 1500000 && cm.getSpace(1) >= 1) {
			cm.gainPlayerPoints(-1500000);
			cm.gainItem(1372177, 1);
			cm.sendOk("��ϲ���ɹ�����150������.");
			cm.getMap().startMapEffect("��ϲ��� "+cm.getChar().getName()+" �ɹ�����150������һ�ѡ�", 5120012);
			cm.worldSpouseMessage(0x20, "���󶨱��̳ǡ� : ��ϲ " + cm.getChar().getName() + " ��150W��è��ҹ���150������һ��.");
			cm.dispose();
				} else {
			cm.sendOk("����ʧ�ܣ�\r\n\r\n#r1). ��ǰ��è���δ�ﵽ����.\r\n2). ����װ����λ����,������.");
			cm.dispose();
				}
			}else if(typed==31){
                if (cm.getPlayerPoints() >= 1500000 && cm.getSpace(1) >= 1) {
			cm.gainPlayerPoints(-1500000);
			cm.gainItem(1212063, 1);
			cm.sendOk("��ϲ���ɹ�����150������.");
			cm.getMap().startMapEffect("��ϲ��� "+cm.getChar().getName()+" �ɹ�����150������һ�ѡ�", 5120012);
			cm.worldSpouseMessage(0x20, "���󶨱��̳ǡ� : ��ϲ " + cm.getChar().getName() + " ��150W��è��ҹ���150������һ��.");
			cm.dispose();
				} else {
			cm.sendOk("����ʧ�ܣ�\r\n\r\n#r1). ��ǰ��è���δ�ﵽ����.\r\n2). ����װ����λ����,������.");
			cm.dispose();
				}
			}else if(typed==32){
                if (cm.getPlayerPoints() >= 1500000 && cm.getSpace(1) >= 1) {
			cm.gainPlayerPoints(-1500000);
			cm.gainItem(1242060, 1);
			cm.sendOk("��ϲ���ɹ�����150������.");
			cm.getMap().startMapEffect("��ϲ��� "+cm.getChar().getName()+" �ɹ�����150������һ�ѡ�", 5120012);
			cm.worldSpouseMessage(0x20, "���󶨱��̳ǡ� : ��ϲ " + cm.getChar().getName() + " ��150W��è��ҹ���150������һ��.");
			cm.dispose();
				} else {
			cm.sendOk("����ʧ�ܣ�\r\n\r\n#r1). ��ǰ��è���δ�ﵽ����.\r\n2). ����װ����λ����,������.");
			cm.dispose();
				}
			}else if(typed==33){
                if (cm.getPlayerPoints() >= 1500000 && cm.getSpace(1) >= 1) {
			cm.gainPlayerPoints(-1500000);
			cm.gainItem(1232057, 1);
			cm.sendOk("��ϲ���ɹ�����150������.");
			cm.getMap().startMapEffect("��ϲ��� "+cm.getChar().getName()+" �ɹ�����150������һ�ѡ�", 5120012);
			cm.worldSpouseMessage(0x20, "���󶨱��̳ǡ� : ��ϲ " + cm.getChar().getName() + " ��150W��è��ҹ���150������һ��.");
			cm.dispose();
				} else {
			cm.sendOk("����ʧ�ܣ�\r\n\r\n#r1). ��ǰ��è���δ�ﵽ����.\r\n2). ����װ����λ����,������.");
			cm.dispose();
				}
			}else if(typed==34){
                if (cm.getPlayerPoints() >= 1500000 && cm.getSpace(1) >= 1) {
			cm.gainPlayerPoints(-1500000);
			cm.gainItem(1312153, 1);
			cm.sendOk("��ϲ���ɹ�����150������.");
			cm.getMap().startMapEffect("��ϲ��� "+cm.getChar().getName()+" �ɹ�����150������һ�ѡ�", 5120012);
			cm.worldSpouseMessage(0x20, "���󶨱��̳ǡ� : ��ϲ " + cm.getChar().getName() + " ��150W��è��ҹ���150������һ��.");
			cm.dispose();
				} else {
			cm.sendOk("����ʧ�ܣ�\r\n\r\n#r1). ��ǰ��è���δ�ﵽ����.\r\n2). ����װ����λ����,������.");
			cm.dispose();
				}
			}else if(typed==35){
                if (cm.getPlayerPoints() >= 1500000 && cm.getSpace(1) >= 1) {
			cm.gainPlayerPoints(-1500000);
			cm.gainItem(1322203, 1);
			cm.sendOk("��ϲ���ɹ�����150������.");
			cm.getMap().startMapEffect("��ϲ��� "+cm.getChar().getName()+" �ɹ�����150������һ�ѡ�", 5120012);
			cm.worldSpouseMessage(0x20, "���󶨱��̳ǡ� : ��ϲ " + cm.getChar().getName() + " ��150W��è��ҹ���150������һ��.");
			cm.dispose();
				} else {
			cm.sendOk("����ʧ�ܣ�\r\n\r\n#r1). ��ǰ��è���δ�ﵽ����.\r\n2). ����װ����λ����,������.");
			cm.dispose();
				}
			}else if(typed==36){
                if (cm.getPlayerPoints() >= 1500000 && cm.getSpace(1) >= 1) {
			cm.gainPlayerPoints(-1500000);
			cm.gainItem(1302275, 1);
			cm.sendOk("��ϲ���ɹ�����150������.");
			cm.getMap().startMapEffect("��ϲ��� "+cm.getChar().getName()+" �ɹ�����150������һ�ѡ�", 5120012);
			cm.worldSpouseMessage(0x20, "���󶨱��̳ǡ� : ��ϲ " + cm.getChar().getName() + " ��150W��è��ҹ���150������һ��.");
			cm.dispose();
				} else {
			cm.sendOk("����ʧ�ܣ�\r\n\r\n#r1). ��ǰ��è���δ�ﵽ����.\r\n2). ����װ����λ����,������.");
			cm.dispose();
				}
			}else if(typed==37){
                if (cm.getPlayerPoints() >= 1500000 && cm.getSpace(1) >= 1) {
			cm.gainPlayerPoints(-1500000);
			cm.gainItem(1482168, 1);
			cm.sendOk("��ϲ���ɹ�����150������.");
			cm.getMap().startMapEffect("��ϲ��� "+cm.getChar().getName()+" �ɹ�����150������һ�ѡ�", 5120012);
			cm.worldSpouseMessage(0x20, "���󶨱��̳ǡ� : ��ϲ " + cm.getChar().getName() + " ��150W��è��ҹ���150������һ��.");
			cm.dispose();
				} else {
			cm.sendOk("����ʧ�ܣ�\r\n\r\n#r1). ��ǰ��è���δ�ﵽ����.\r\n2). ����װ����λ����,������.");
			cm.dispose();
			    }
			}else if(typed==38){
                if (cm.getPlayerPoints() >= 1500000 && cm.getSpace(1) >= 1) {
			cm.gainPlayerPoints(-1500000);
			cm.gainItem(1222058, 1);
			cm.sendOk("��ϲ���ɹ�����150������.");
			cm.getMap().startMapEffect("��ϲ��� "+cm.getChar().getName()+" �ɹ�����150������һ�ѡ�", 5120012);
			cm.worldSpouseMessage(0x20, "���󶨱��̳ǡ� : ��ϲ " + cm.getChar().getName() + " ��150W��è��ҹ���150������һ��.");
			cm.dispose();
				} else {
			cm.sendOk("����ʧ�ܣ�\r\n\r\n#r1). ��ǰ��è���δ�ﵽ����.\r\n2). ����װ����λ����,������.");
			cm.dispose();
			    }
			}else if(typed==39){
                if (cm.getPlayerPoints() >= 1500000 && cm.getSpace(1) >= 1) {
			cm.gainPlayerPoints(-1500000);
			cm.gainItem(1442223, 1);
			cm.sendOk("��ϲ���ɹ�����150������.");
			cm.getMap().startMapEffect("��ϲ��� "+cm.getChar().getName()+" �ɹ�����150������һ�ѡ�", 5120012);
			cm.worldSpouseMessage(0x20, "���󶨱��̳ǡ� : ��ϲ " + cm.getChar().getName() + " ��150W��è��ҹ���150������һ��.");
			cm.dispose();
				} else {
			cm.sendOk("����ʧ�ܣ�\r\n\r\n#r1). ��ǰ��è���δ�ﵽ����.\r\n2). ����װ����λ����,������.");
			cm.dispose();
				}
           }
		}
	  }
	}
