importPackage(net.sf.odinms.server.maps);

var status = 0;
var qty = -1;
var eff = "#fEffect/CharacterEff/1082565/2/0#";
var jl = java.lang.Math.floor(Math.random() * 100);


var item = new Array(1162019,
                     1162020,
					 1162021,
					 1162022,
					 1162011,
					 1162006,
					 1162007,
					 1162013,
					 1162023,
					 1162010,
					 1162016,
					 1190300,
					 1190301,
					 1190302);

var thing = new Array(

Array(Array(4001191, 20)),
Array(Array(4001191, 20)),
Array(Array(4001191, 20)),
Array(Array(4001191, 20)),
Array(Array(4001191, 30)),
Array(Array(4001191, 50)),
Array(Array(4001191, 70)),
Array(Array(4001191, 40)),
Array(Array(4001191, 80)),
Array(Array(4001191, 100)),
Array(Array(4001191, 120)),
Array(Array(4001191, 100)),
Array(Array(4001191, 150)),
Array(Array(4001191, 200))

);


function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status == 0 && mode == 0) {
		    cm.sendOk("�����ؿ��Ǻ��پ���!");
            cm.dispose();
            return;
        } else if (status <= 2 && mode == 0) {
            cm.sendOk("�´������Ҫ����װ����������Ŷ!");
            cm.dispose();
			return;
		} else if (status == 3 && mode == 0) {
            var prompt = "";
            var complete = true;
            for (var i = 0; i < thing[qty].length; i++) {
                if (!cm.haveItem(thing[qty][i][0], thing[qty][i][1])) {
                    complete = false;
                }
            }
            if (!complete || !cm.canHold(item[qty]) || cm.getMeso() < 10000000) {
                prompt += "�Բ�����û����������������ϸ��鱳����\r\n1.ȷ���Ƿ�������������Ĳ��ϡ�\r\n2.ȷ�ϱ����Ƿ����㹻�Ŀռ䡣\r\n3.ȷ���Ƿ���1000W�����ѡ�";
            } else if (jl >= 0 && jl <= 44){
                for (var i = 0; i < thing[qty].length; i++) {
                    cm.gainItem(thing[qty][i][0], -thing[qty][i][1]);
                }
                cm.gainItem(item[qty], 1);
				cm.gainMeso( - 10000000);
                prompt += "������� >> #r#e�ɹ�#n#k\r\n\r\n�����ˣ�#b#v" + item[qty] + "##z" + item[qty] + "#��";
            } else {
			    for (var i = 0; i < thing[qty].length; i++) {
                    cm.gainItem(thing[qty][i][0], -thing[qty][i][1] / 2);
                }
				cm.gainMeso( - 10000000);
			    prompt += "������� >> #eʧ��#n\r\n\r\n����һ����ϡ�";
			}
            cm.sendOk(prompt);
            cm.dispose();
            return;
        }
        if (mode == 1) status++;
        else status--;
		
        if (status == 0) {
            var smed = "";
            for (var i = 0; i < item.length; i++) {
                smed += "\r\n#L" + i + "##b#v" + item[i] + "##z" + item[i] + "##l";
            }
            cm.sendSimple("ÿ��װ����ȡ������#r1000W#k������������Ϊ��������װ��:" + smed);
        } else if (status == 1) {
            var prompt = "";
            prompt += "#v" + item[selection] + "##b#z" + item[selection] + "##k������Ҫ��\r\n";
            for (var m = 0; m < thing[selection].length; m++) {
                prompt += "#v" + thing[selection][m][0] + "##z" + thing[selection][m][0] + "# #b" + thing[selection][m][1] + " #k��\r\n";
            }
            prompt += "#r#v4031988##z4031988##k��������������װ�������ĳɹ��ʣ�";
            qty = selection;
            cm.sendYesNo(prompt);
		} else if (status == 2) {
		    qty = qty;
		    if (cm.haveItem(4031988)) {
            cm.sendYesNo("��⵽��ӵ��#r#e#v4031988##z4031988##n#k�����Ƿ�Ҫʹ������");
	    } else {
            var prompt = "";
            var complete = true;
            for (var i = 0; i < thing[qty].length; i++) {
                if (!cm.haveItem(thing[qty][i][0], thing[qty][i][1])) {
                    complete = false;
                }
            }
            if (!complete || !cm.canHold(item[qty]) || cm.getMeso() < 10000000) {
                prompt += "�Բ�����û����������������ϸ��鱳����\r\n1.ȷ���Ƿ�������������Ĳ��ϡ�\r\n2.ȷ�ϱ����Ƿ����㹻�Ŀռ䡣\r\n3.ȷ���Ƿ���1000W�����ѡ�";
            } else if (jl >= 0 && jl <= 44){
                for (var i = 0; i < thing[qty].length; i++) {
                    cm.gainItem(thing[qty][i][0], -thing[qty][i][1]);
                }
				cm.gainMeso( - 10000000);
                cm.gainItem(item[qty], 1);
                prompt += "������� >> #r#e�ɹ�#n#k\r\n\r\n�����ˣ�#b#v" + item[qty] + "##z" + item[qty] + "#��";
            } else {
			    for (var i = 0; i < thing[qty].length; i++) {
                    cm.gainItem(thing[qty][i][0], -thing[qty][i][1] / 2);
                }
				cm.gainMeso( - 10000000);
			    prompt += "������� >> #eʧ��#n\r\n\r\n����һ����ϡ�";
			}
            cm.sendOk(prompt);
            cm.dispose();
			}
        } else if (status == 3) {
            var prompt = "";
            var complete = true;
            for (var i = 0; i < thing[qty].length; i++) {
                if (!cm.haveItem(thing[qty][i][0], thing[qty][i][1])) {
                    complete = false;
                }
            }
            if (!complete || !cm.canHold(item[qty]) || cm.getMeso() < 10000000) {
                prompt += "�Բ�����û����������������ϸ��鱳����\r\n1.ȷ���Ƿ�������������Ĳ��ϡ�\r\n2.ȷ�ϱ����Ƿ����㹻�Ŀռ䡣\r\n3.ȷ���Ƿ���1000W�����ѡ�";
            } else if (jl >= 0 && jl <= 90){
                for (var i = 0; i < thing[qty].length; i++) {
                    cm.gainItem(thing[qty][i][0], -thing[qty][i][1]);
                }
                cm.gainItem(item[qty], 1);
				cm.gainMeso( - 10000000);
				cm.gainItem(4031988,-1);
                prompt += "������� >> #r#e�ɹ�#n#k\r\n\r\n�����ˣ�#b#v" + item[qty] + "##z" + item[qty] + "#��";
            } else {
			    for (var i = 0; i < thing[qty].length; i++) {
                    cm.gainItem(thing[qty][i][0], -thing[qty][i][1] / 2);
                }
				cm.gainMeso( - 10000000);
				cm.gainItem(4031988,-1);
			    prompt += "������� >> #eʧ��#n\r\n\r\n����һ����ϡ�";
			}
            cm.sendOk(prompt);
            cm.dispose();
        }
    }
}