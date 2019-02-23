/* 
 This file is part of the OdinMS Maple Story Server 
    Copyright (C) 2008 Patrick Huy <patrick.huy@frz.cc>  
        Matthias Butz <matze@odinms.de> 
        Jan Christian Meyer <vimes@odinms.de> 
    This program is free software: you can redistribute it and/or modify 
    it under the terms of the GNU Affero General Public License as 
    published by the Free Software Foundation version 3 as published by 
    the Free Software Foundation. You may not use, modify or distribute 
    this program under any other version of the GNU Affero General Public 
    License. 
    This program is distributed in the hope that it will be useful, 
    but WITHOUT ANY WARRANTY; without even the implied warranty of 
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the 
    GNU Affero General Public License for more details. 
    You should have received a copy of the GNU Affero General Public License 
    along with this program.  If not, see <http://www.gnu.org/licenses/>. 
*/ 
/* Assistant Nancy 
 Warp to bottom (910000000) 
 located in Amoria (680000000) 
*/ 
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
   cm.sendOk("�ټ�,�װ��ı���!"); 
   cm.dispose(); 
   return; 
  } 
  if (mode == 1) 
   status++; 
  else 
   status--; 
  if (status == 0) { 
   cm.sendNext(""+cm.mxdmz()+"ð�յ����ϵͳ.\r\n��ã�����ר��Ϊ�������ߵ��������Ŵ�Ҷ���ʶ�Ұɣ������������İɣ������˽�鿨�İɣ�����������ĺ���Ů������ร�Ҫ���͵������ɣ�"); 
  } else if (status == 1) { 
   cm.sendNextPrev("�Ǻ�,��������׼�����Ѿ��ܳ���ˣ����ǿ϶�����һ�Ž�����#v5220001#����ô��Ȼ���ˣ��͵���һ����."); 
  } else if (status == 2) { 
   if (cm.haveItem(5220001)) { 
    cm.sendNext("�ܺ�, �����л���. �ҽ������ǽ�ȥ.\r\nףԸ���ǵĻ���Բ���ɹ�.�ɲ�Ҫ���ǺͶԷ������."); 
    cm.gainItem(5220001,-1); 
     
   } else { 
    cm.sendOk("����û�л���,���ܾ��л���!�´�����ϻ�����������!"); 
    status = 9; 
   } 
  } else if (status == 3) {  
    cm.gainItem(5220001,-1);
    cm.serverNotice("����鹫�桻����������,��������,�������С���,�����������˽�Ϊ�Ϸ��򸾡�С����Բ��������֮�ࡢ�����˼�,�����Ÿ߰˶���ѧ���峵���ָ�»ԧ��Ե����������ż��ɣ������ںϡ�ף���ˣ�����ͬ�ģ�����úϡ�����ǧ��,���۸���ƶ��ͬ��ͬ�ġ���ɪ�������ྴ������������֮��,�ش�����֮��,���벻������ͷ���ϣ�"); 
cm.warp(700000101);
   cm.dispose(); 
		}else{
		cm.warp(910000000);
		cm.dispose();
}
} 
}  
