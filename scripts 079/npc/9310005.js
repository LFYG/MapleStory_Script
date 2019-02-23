/*
	This file is part of the OdinMS Maple Story Server
    Copyright (C) 2008 Patrick Huy <patrick.huy@frz.cc> 
                       Matthias Butz <matze@odinms.de>
                       Jan Christian Meyer <vimes@odinms.de>

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License version 3
    as published by the Free Software Foundation. You may not use, modify
    or distribute this program under any other version of the
    GNU Affero General Public License.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

/* Pison
	Warp NPC to Lith Harbor (104000000)
	located in Florina Beach (110000000)
*/

importPackage(net.sf.odinms.server.maps);

var status = 0;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (status >= 2 && mode == 0) {
			cm.sendOk("�Ǻð�,�����е�����ս����ʱ���������Ұɣ�");
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			cm.sendNext("��Ҫ��ȥ���ҿ��԰������ȥ��");
		} else if (status == 1) {
			cm.sendNextPrev("���������ȥ #bͨ��#k��.")
		} else if (status == 2) {
			if (cm.haveItem(4000194) < 1) {
				cm.sendOk("d �Բ�����û�л��1��#b����ë#k")
				cm.dispose();
			} else {
				cm.sendYesNo("��ȷ������ #bͨ��#k? �ðɣ��������ȥ��");
			}
		} else if (status == 3) {
			//var map = cm.getChar().getSavedLocation(SavedLocationType.FLORINA);
			//if (map == -1) {
				map = 701010322;
			//}
			cm.warp(map, 0);
                        cm.gainItem(4000194,-1);
			cm.dispose();
		}
	}
}