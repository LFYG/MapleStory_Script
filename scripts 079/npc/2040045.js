importPackage(net.sf.odinms.client);
var status = 0;
var ttt ="#fUI/UIWindow/Quest/icon2/7#";//"+ttt+"//����1
var ttt2 ="#fUI/UIWindow/Quest/icon6/7#";//"+ttt2+"//����2
var ttt3 ="#fUI/UIWindow/Quest/icon3/6#";//"+ttt3+"//����Բ
var ttt4 ="#fUI/UIWindow/Quest/icon5/1#";//"+ttt4+"//����New
var ttt5 ="#fUI/UIWindow/Quest/icon0#";//"+ttt5+"//����!
var ttt6 ="#fUI/Basic/BtHide3/mouseOver/0#";//"+ttt6+"//������Ա

//////////////////////////////////////////////////////////
function start() {
status = -1;
action(1, 0, 0);
}

function action(mode, type, selection) {
if (mode == -1) {
cm.dispose();
} else {
if (status >= 0 && mode == 0) {
cm.dispose();
return;
}
if (mode == 1)
status++;
else
status--;
if (status == 0) {
if(cm.getChar().getVip() <= 0){
var vipstr = "��ͨ���";					
}else if(cm.getChar().getVip() == 1){
var vipstr = ""+ttt6+" "+cm.mxdmz()+"��Ա��";					
}else if(cm.getChar().getVip() == 2){
var vipstr = ""+ttt6+" "+cm.mxdmz()+"��Ա��";					
}else if(cm.getChar().getVip() == 3){
var vipstr = ""+ttt6+" "+cm.mxdmz()+"��Ա��";
}else if(cm.getChar().getVip() == 4){
var vipstr = ""+ttt6+" "+cm.mxdmz()+"��Ա��";	
}else if(cm.getChar().getVip() == 5){
var vipstr = ""+ttt6+" "+cm.mxdmz()+"��Ա��";					
}else{
var vipstr = ""+ttt6+" "+cm.mxdmz()+"��Ա��";					
}
var textz = "#r"+cm.mxdmz()+"ð�յ�#k,Ԫ���̳�.\r\n#r"+ttt2+"#k������#r"+ttt2+"#k������#r"+ttt2+"#k������\r\n#b  ��Ա�ȼ�:#r"+vipstr+"  #bʣ��Ԫ��:#r" + cm.getChar().getzb() + "#k#b ��  \r\n  #bת��:#r" + cm.getChar().getReborns() + "#k#b ��#b����:#r" + cm.getChar().getRw15() + "#k#b ��\r\n ";
//textz += "#b--------------------#r����һֱ��Ŭ��#b--------------------\r\n ";

textz += "#L1#"+ttt+" Ԫ������ #e>>>>#n#r ��ӱ���#d [���ֱر�]#b#l\r\n ";

textz += "#L2#"+ttt+" Ԫ������ #e>>>>#n#r ��������#d [���ֱر�]#b#l\r\n ";

textz += "#L3#"+ttt+" Ԫ������ #e>>>>#n#r �������#d [���ֱر�]#b#l\r\n ";

//textz += "#L4#"+ttt+" Ԫ������ #e>>>>#n#r ����ѫ��#d #l\r\n ";

textz += "#L5#"+ttt+" Ԫ������ #e>>>>#n#r Ư��ñ��#d [���ֱر�]#b#l\r\n ";

//textz += "#L6#"+ttt+" Ԫ������ #e>>>>#n#r ������׹#d #l\r\n ";

textz += "#L7#"+ttt+" Ԫ������ #e>>>>#n#r �Դ�װ��#d [ǿ���Ƽ�]#b#l\r\n ";

textz += "#L8#"+ttt+" Ԫ������ #e>>>>#n#r �سɾ���#d [ǿ�߱���]#b#l\r\n ";

textz += "#L9#"+ttt+" Ԫ������ #e>>>>#n#r ��������#d [ǿ���Ƽ�]#b#l\r\n ";

//textz += "#L10#"+ttt+" Ԫ������ #e>>#n#r ����װ��#d #l\r\n\r\n";

//textz += "#L11#"+ttt+" Ԫ������ #e>>#n#r �̳ǵ��#d #l\r\n ";

textz += "#L12#"+ttt+" Ԫ������ #e>>>>#n#r PK��Ѫ��#d [���߱ر�]#b#l\r\n ";

textz += "#L13#"+ttt+" Ԫ������ #e>>>>#n#r ת������#d [��ת����]#b#l\r\n ";

//textz += "#L14#"+ttt+" Ԫ������ #e>>>>#n#r ľ����Ʊ#b #l\r\n ";

//textz += "\r\n#b--------------------#r��֧��5Ԫð�յ�#b-------------------";

cm.sendSimple (textz);   

}else if (status == 1) {
var viplevel = cm.getChar().getVip();
if  (selection == 1) { 
cm.sendSimple("#r"+cm.mxdmz()+"ð�յ�#b������Ʒÿ��10Ԫ��.\r\n#L32#"+ttt+" ������Ϧ��Ϸ��� #l  #L33#"+ttt+" �����Ҷ������ #l\r\n#L34#"+ttt+" �����ɫ������ #l  #L35#"+ttt+" ����ʥ��������� #l\r\n#L36#"+ttt+" �������������� #l  #L37#"+ttt+" ������·�Ƶ���� #l\r\n#L38#"+ttt+" ������ս������ #l  #L39#"+ttt+" �����Ϲϵ������ #l\r\n#L40#"+ttt+" �����¶ȼƵ���� #l  #L41#"+ttt+" ���������е���� #l\r\n#L42#"+ttt+" ����ȼ�յĻ��浶 #l  #L43#"+ttt+" ��������Ϸ��� #l\r\n#L44#"+ttt+" ��������Ϸ��� #l  #L45#"+ttt+" �����߲��޺���� #l\r\n#L46#"+ttt+" ����ӣ��ɡ����� #l  #L47#"+ttt+" �������͵���� #l\r\n#L48#"+ttt+" ���򶳶������� #l  #L49#"+ttt+" ����ʥ��������� #l");


}else if  (selection == 2) { 
//cm.sendSimple("#r"+cm.mxdmz()+"ð�յ�#b������Ʒÿ��10Ԫ��.\r\n#L50#"+ttt+" ���������ʵ����� #l  #L51#"+ttt+" ����ڻ��ʵ����� #l\r\n#L52#"+ttt+" ����컷�ʵ����� #l  #L53#"+ttt+" ����ƻ��ʵ����� #l\r\n#L54#"+ttt+" �����̻��ʵ����� #l  #L55#"+ttt+" ���򺣵���²���� #l\r\n#L56#"+ttt+" ����ůů�������� #l  #L57#"+ttt+" ����������ǧ���� #l\r\n#L58#"+ttt+" ����ħŮ�ķ�ɨ�� #l  #L59#"+ttt+" ����ͬһɡ������ #l\r\n#L60#"+ttt+" ������ല������ #l  #L61#"+ttt+" ����Ѫɫõ������ #l\r\n#L62#"+ttt+" ��������ĩ������ #l  #L63#"+ttt+" ����¶ˮ�������� #l\r\n#L64#"+ttt+" ������ް�Ʒ���� #l  #L65#"+ttt+" ����СƷ�������� #l\r\n#L66#"+ttt+" ����Ϊ���ֿ����� #l  #L67#"+ttt+" ����èͷӥ������ #l\r\n#L68#"+ttt+" �������լ������ #l  #L69#"+ttt+" ��������������� #l\r\n#L70#"+ttt+" ���򻢻��������� #l  #L71#"+ttt+" ���������������� #l\r\n#L72#"+ttt+" ����ԡͰ�������� #l  #L73#"+ttt+" �������������� #l\r\n#L74#"+ttt+" ����紵�������� #l  #L75#"+ttt+" �����ɿ˵������� #l");
cm.openNpc(9310023);

}else if  (selection == 3) { 
cm.sendSimple("#rע:#b������ﴩ���ˣ�ʹ����輼�ܣ��޷���������������ʹ�����·���\r\n���һ����˹���#v1902000#��#v1912000#����������ٰ�#v1902000#��#v1912000#���ϼ��ɡ�\r\n#L76##v1902028#[15Ԫ��]#L77##v1902061#[15Ԫ��]#L78##v1902059#[15Ԫ��]\r\n#L79##v1902060#[15Ԫ��]#L80##v1902056#[15Ԫ��]#L81##v1902044#[15Ԫ��]\r\n#L82##v1902043#[15Ԫ��]#L83##v1902047#[15Ԫ��]#L84##v1902034#[15Ԫ��]\r\n#L85##v1902037#[15Ԫ��]#L86##v1902055#[15Ԫ��]#L87##v1902040#[15Ԫ��]\r\n#L88##v1902041#[15Ԫ��]#L89##v1902042#[15Ԫ��]#L90##v1902057#[10Ԫ��]\r\n#L91##v1902049#[10Ԫ��]#L92##v1902050#[10Ԫ��]#L93##v1902051#[10Ԫ��]\r\n#L94##v1902024#[10Ԫ��]#L163##v1902053#[10Ԫ��]#L164##v1902054#[10Ԫ��]");


}else if  (selection == 5) { 
cm.sendSimple("#b\r\n#L121#"+ttt+" [#r5Ԫ��#b]����#v1002424##l  #L122#"+ttt+" [#r5Ԫ��#b]����#v1002425##l\r\n#L123#"+ttt+" [#r5Ԫ��#b]����#v1002663##l  #L124#"+ttt+" [#r5Ԫ��#b]����#v1002677##l\r\n#L125#"+ttt+" [#r5Ԫ��#b]����#v1002699##l  #L126#"+ttt+" [#r5Ԫ��#b]����#v1002723##l\r\n#L127#"+ttt+" [#r5Ԫ��#b]����#v1002728##l  #L128#"+ttt+" [#r5Ԫ��#b]����#v1002798##l\r\n#L129#"+ttt+" [#r5Ԫ��#b]����#v1002850##l  #L130#"+ttt+" [#r5Ԫ��#b]����#v1002851##l\r\n#L131#"+ttt+" [#r5Ԫ��#b]����#v1002799##l  #L132#"+ttt+" [#r10Ԫ��#b]����#v1002926##l\r\n#L133#"+ttt+" [#r10Ԫ��#b]����#v1002357##l  #L134#"+ttt+" [#r10Ԫ��#b]����#v1002743##l\r\n#L135#"+ttt+" [#r10Ԫ��#b]����#v1002744##l  #L136#"+ttt+" [#r10Ԫ��#b]����#v1002745##l\r\n#L137#"+ttt+" [#r10Ԫ��#b]����#v1002746##l  #L138#"+ttt+" [#r10Ԫ��#b]����#v1002742##l\r\n#L139#"+ttt+" [#r5Ԫ��#b]����#v1002901##l  #L140#"+ttt+" [#r5Ԫ��#b]����#v1002902##l\r\n#L141#"+ttt+" [#r5Ԫ��#b]����#v1002939##l  #L142#"+ttt+" [#r5Ԫ��#b]����#v1002980##l\r\n#L143#"+ttt+" [#r5Ԫ��#b]����#v1003032##l  #L144#"+ttt+" [#r5Ԫ��#b]����#v1003033##l\r\n#L145#"+ttt+" [#r5Ԫ��#b]����#v1003034##l  #L146#"+ttt+" [#r5Ԫ��#b]����#v1003035##l");


}else if  (selection == 7) { 
cm.openNpc( 9201081);

}else if  (selection == 8) { 
cm.sendSimple("#r"+cm.mxdmz()+"ð�յ�#k,Ԫ���̳�,һ�ž���#k1Ԫ��.#b\r\n#b  		ʣ��Ԫ��:#r" + cm.getChar().getzb() + "#k#b ��  #bת��:#r" + cm.getChar().getReborns() + "#k#b ��\r\n#b\r\n#L16#"+ttt+" �������׹������� #l  #L17#"+ttt+" ����ȭ�׹������� #l\r\n#L18#"+ttt+" ����սǹ�������� #l  #L19#"+ttt+" ����˫�ֽ������� #l\r\n#L20#"+ttt+" �����ֽ������� #l  #L21#"+ttt+" ����ì���������� #l\r\n#L22#"+ttt+" �������ħ������ #l  #L23#"+ttt+" ������ħ������ #l\r\n#L24#"+ttt+" ��������������� #l  #L25#"+ttt+" ����Ь����Ծ���� #l\r\n#L26#"+ttt+" ����̽��������� #l  #L27#"+ttt+" ���򹭼��������� #l");

}else if  (selection == 9) { 
cm.sendSimple("#r"+cm.mxdmz()+"ð�յ�#k,��Ԫ���̳�.\r\n#b  		ʣ��Ԫ��:#r" + cm.getChar().getzb() + "#k#b ��  #bת��:#r" + cm.getChar().getReborns() + "#k#b ��\r\n#b\r\n#L95#"+ttt+" [#r10Ԫ��#b]����12000������#l  \r\n#L96#"+ttt+" [#r25Ԫ��#b]����37500������#l  \r\n#L97#"+ttt+" [#r50Ԫ��#b]����75000������#l    \r\n#L98#"+ttt+" [#r100Ԫ��#b]����150000������#l  \r\n#L99#"+ttt+" [#r200Ԫ��#b]����300000������#r[hot]#l");


}else if  (selection == 10) { 
cm.sendSimple("#r"+cm.mxdmz()+"ð�յ�#k,Ԫ���̳�,.\r\n#b  		ʣ��Ԫ��:#r" + cm.getChar().getzb() + "#k#b ��  #bת��:#r" + cm.getChar().getReborns() + "#k#b ��\r\n#b\r\n#L100#"+ttt+" [#r50Ԫ��#b]����սʿ����װ����װ#l  \r\n#L101#"+ttt+" [#r50Ԫ��#b]�����������װ����װ#l  \r\n#L102#"+ttt+" [#r50Ԫ��#b]����������װ����װ#l    \r\n#L103#"+ttt+" [#r50Ԫ��#b]����ʦ����װ����װ#l  \r\n#L104#"+ttt+" [#r50Ԫ��#b]���򺣵�����װ����װ#l");


}else if  (selection == 11) { 
cm.sendSimple(""+cm.mxdmz()+"ð�յ�#k,Ԫ���̳�,.\r\n#b  		ʣ��Ԫ��:#r" + cm.getChar().getzb() + "#k#b ��  #bת��:#r" + cm.getChar().getReborns() + "#k#b ��\r\n#b\r\n#L147#"+ttt+" ����10����[#r10Ԫ��#b]#l#L148#"+ttt+" ����20����[#r15Ԫ��#b]#l\r\n#L149#"+ttt+" ����30����[#r20Ԫ��#b]#l#L150#"+ttt+" ����50����[#r40Ԫ��#b] #l");

}else if  (selection == 12) { 
cm.sendSimple(""+cm.mxdmz()+"ð�յ�#k,Ԫ���̳�,.\r\n#b  		ʣ��Ԫ��:#r" + cm.getChar().getzb() + "#k#b ��  #bת��:#r" + cm.getChar().getReborns() + "#k#b ��\r\n#b\r\n#L151#"+ttt+" ����˫��PK��PK��Ѫ3000�ϳɿ�[#r20Ԫ��#b]#l\r\n#L152#"+ttt+" �����ı�PK��PK��Ѫ5000�ϳɿ�[#r50Ԫ��#b]#l");

}else if  (selection == 13) { 
cm.sendSimple(""+cm.mxdmz()+"ð�յ�#k,Ԫ���̳�,.\r\n#b  		ʣ��Ԫ��:#r" + cm.getChar().getzb() + "#k#b ��  #bת��:#r" + cm.getChar().getReborns() + "#k#b ��\r\n#b\r\n#L155#"+ttt+" �������ʥ��[#r1Ԫ��#b]#l#L156#"+ttt+" ����ʮ��ʥ��[#r2Ԫ��#b]#l\r\n#L157#"+ttt+" ����ʮ��ʥ��[#r3Ԫ��#b]#l#L158#"+ttt+" ����ʮ��ʥ��[#r4Ԫ��#b] #l");

}else if  (selection == 14) { 
cm.sendSimple(""+cm.mxdmz()+"ð�յ�#k,Ԫ���̳�,.\r\n#b  		ʣ��Ԫ��:#r" + cm.getChar().getzb() + "#k#b ��  #bת��:#r" + cm.getChar().getReborns() + "#k#b ��\r\n#b\r\n#L159#"+ttt+" ���������Ʊ[#r15Ԫ��#b]#l#L160#"+ttt+" ����ʮ����Ʊ[#r30Ԫ��#b]#l\r\n#L161#"+ttt+" ����ʮ����Ʊ[#r50Ԫ��#b]#l#L162#"+ttt+" ����ʮ����Ʊ[#r70Ԫ��#b] #l");

}






}else if  (selection == 16) { 
if(cm.getzb() >= 1) { 
cm.setzb(-1); 
cm.gainItem(2040807,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}

}else if  (selection == 17) { 
if(cm.getzb() >= 1) { 
cm.setzb(-1); 
cm.gainItem(2044703,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}

}else if  (selection == 18) { 
if(cm.getzb() >= 1) { 
cm.setzb(-1); 
cm.gainItem(2044303,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}

}else if  (selection == 19) { 
if(cm.getzb() >= 1) { 
cm.setzb(-1); 
cm.gainItem(2044003,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}

}else if  (selection == 20) { 
if(cm.getzb() >= 1) { 
cm.setzb(-1); 
cm.gainItem(2043003,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}


}else if  (selection == 21) { 
if(cm.getzb() >= 1) { 
cm.setzb(-1); 
cm.gainItem(2044403,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}


}else if  (selection == 22) { 
if(cm.getzb() >= 1) { 
cm.setzb(-1); 
cm.gainItem(2043703,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}



}else if  (selection == 23) { 
if(cm.getzb() >= 1) { 
cm.setzb(-1); 
cm.gainItem(2043803,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}


}else if  (selection == 24) { 
if(cm.getzb() >= 1) { 
cm.setzb(-1); 
cm.gainItem(2040303,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}


}else if  (selection == 25) { 
if(cm.getzb() >= 1) { 
cm.setzb(-1); 
cm.gainItem(2040710,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}


}else if  (selection == 26) { 
if(cm.getzb() >= 1) { 
cm.setzb(-1); 
cm.gainItem(2043303,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}

}else if  (selection == 27) { 
if(cm.getzb() >= 1) { 
cm.setzb(-1); 
cm.gainItem(2044503,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}


//���

}else if  (selection == 32) { 
if(cm.getzb() >= 10) { 
cm.setzb(-10); 
cm.gainItem(1322051,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}


}else if  (selection == 33) { 
if(cm.getzb() >= 10) { 
cm.setzb(-10); 
cm.gainItem(1432037,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}


}else if  (selection == 34) { 
if(cm.getzb() >= 10) { 
cm.setzb(-10); 
cm.gainItem(1092022,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}


}else if  (selection == 35) { 
if(cm.getzb() >= 10) { 
cm.setzb(-10); 
cm.gainItem(1332032,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}

}else if  (selection == 36) { 
if(cm.getzb() >= 10) { 
cm.setzb(-10); 
cm.gainItem(1332021,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}

}else if  (selection == 37) { 
if(cm.getzb() >= 10) { 
cm.setzb(-10); 
cm.gainItem(1372017,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}


}else if  (selection == 38) { 
if(cm.getzb() >= 10) { 
cm.setzb(-10); 
cm.gainItem(1402013,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}


}else if  (selection == 39) { 
if(cm.getzb() >= 10) { 
cm.setzb(-10); 
cm.gainItem(1402044,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}


}else if  (selection == 40) { 
if(cm.getzb() >= 10) { 
cm.setzb(-10); 
cm.gainItem(1402014,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}


}else if  (selection == 41) { 
if(cm.getzb() >= 10) { 
cm.setzb(-10); 
cm.gainItem(1402037,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}


}else if  (selection == 42) { 
if(cm.getzb() >= 10) { 
cm.setzb(-10); 
cm.gainItem(1302063,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}


}else if  (selection == 43) { 
if(cm.getzb() >= 10) { 
cm.setzb(-10); 
cm.gainItem(1302084,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}


}else if  (selection == 44) { 
if(cm.getzb() >= 10) { 
cm.setzb(-10); 
cm.gainItem(1302087,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}


}else if  (selection == 45) { 
if(cm.getzb() >= 10) { 
cm.setzb(-10); 
cm.gainItem(1302080,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}


}else if  (selection == 46) { 
if(cm.getzb() >= 10) { 
cm.setzb(-10); 
cm.gainItem(1402063,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}


}else if  (selection == 47) { 
if(cm.getzb() >= 10) { 
cm.setzb(-10); 
cm.gainItem(1432039,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}


}else if  (selection == 48) { 
if(cm.getzb() >= 10) { 
cm.setzb(-10); 
cm.gainItem(1442018,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}


}else if  (selection == 49) { 
if(cm.getzb() >= 10) { 
cm.setzb(-10); 
cm.gainItem(1702166,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}



//���ӿ�ʼ

}else if  (selection == 50) { 
if(cm.getzb() >= 10) { 
cm.setzb(-10); 
cm.gainItem(3010029,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}

}else if  (selection == 51) { 
if(cm.getzb() >= 10) { 
cm.setzb(-10); 
cm.gainItem(3010030,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}


}else if  (selection == 52) { 
if(cm.getzb() >= 10) { 
cm.setzb(-10); 
cm.gainItem(3010031,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}


}else if  (selection == 53) { 
if(cm.getzb() >= 10) { 
cm.setzb(-10);  
cm.gainItem(3010032,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}



}else if  (selection == 54) { 
if(cm.getzb() >= 10) { 
cm.setzb(-10); 
cm.gainItem(3010033,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}



}else if  (selection == 55) { 
if(cm.getzb() >= 10) { 
cm.setzb(-10); 
cm.gainItem(3010028,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}


}else if  (selection == 56) { 
if(cm.getzb() >= 10) { 
cm.setzb(-10); 
cm.gainItem(3010021,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}


}else if  (selection == 57) { 
if(cm.getzb() >= 10) { 
cm.setzb(-10);  
cm.gainItem(3010036,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}


}else if  (selection == 58) { 
if(cm.getzb() >= 10) { 
cm.setzb(-10); 
cm.gainItem(3010043,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}


}else if  (selection == 59) { 
if(cm.getzb() >= 10) { 
cm.setzb(-10); 
cm.gainItem(3010044,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}

}else if  (selection == 60) { 
if(cm.getzb() >= 10) { 
cm.setzb(-10); 
cm.gainItem(3010054,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}

}else if  (selection == 61) { 
if(cm.getzb() >= 10) { 
cm.setzb(-10);  
cm.gainItem(3010057,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}

}else if  (selection == 62) { 
if(cm.getzb() >= 10) { 
cm.setzb(-10); 
cm.gainItem(3010058,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}

}else if  (selection == 63) { 
if(cm.getzb() >= 10) { 
cm.setzb(-10);  
cm.gainItem(3010068,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}


}else if  (selection == 64) { 
if(cm.getzb() >= 10) { 
cm.setzb(-10);  
cm.gainItem(3010070,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}


}else if  (selection == 65) { 
if(cm.getzb() >= 10) { 
cm.setzb(-10); 
cm.gainItem(3010073,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}


}else if  (selection == 66) { 
if(cm.getzb() >= 10) { 
cm.setzb(-10); 
cm.gainItem(3010075,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}


}else if  (selection == 67) { 
if(cm.getzb() >= 10) { 
cm.setzb(-10); 
cm.gainItem(3010077,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}



}else if  (selection == 68) { 
if(cm.getzb() >= 10) { 
cm.setzb(-10); 
cm.gainItem(3010098,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}

}else if  (selection == 69) { 
if(cm.getzb() >= 10) { 
cm.setzb(-10); 
cm.gainItem(3010100,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}

}else if  (selection == 70) { 
if(cm.getzb() >= 10) { 
cm.setzb(-10); 
cm.gainItem(3010111,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}


}else if  (selection == 71) { 
if(cm.getzb() >= 10) { 
cm.setzb(-10); 
cm.gainItem(3012001,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}

}else if  (selection == 72) { 
if(cm.getzb() >= 10) { 
cm.setzb(-10); 
cm.gainItem(3012002,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}

}else if  (selection == 73) { 
if(cm.getzb() >= 10) { 
cm.setzb(-10); 
cm.gainItem(3012003,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}

}else if  (selection == 74) { 
if(cm.getzb() >= 10) { 
cm.setzb(-10); 
cm.gainItem(3012006,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}

}else if  (selection == 75) { 
if(cm.getzb() >= 10) { 
cm.setzb(-10); 
cm.gainItem(3012010,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}

//���￪ʼ

}else if  (selection == 76) { 
if(cm.getzb() >= 15) { 
cm.setzb(-15); 
cm.gainItem(1902028,1); 
cm.gainItem(1912021,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}

}else if  (selection == 77) { 
if(cm.getzb() >= 15) { 
cm.setzb(-15); 
cm.gainItem(1902061,1); 
cm.gainItem(1912054,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}

}else if  (selection == 78) { 
if(cm.getzb() >= 15) { 
cm.setzb(-15); 
cm.gainItem(1902059,1); 
cm.gainItem(1912052,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}

}else if  (selection == 79) { 
if(cm.getzb() >= 15) { 
cm.setzb(-15); 
cm.gainItem(1902060,1); 
cm.gainItem(1912053,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}


}else if  (selection == 80) { 
if(cm.getzb() >= 15) { 
cm.setzb(-15); 
cm.gainItem(1902056,1); 
cm.gainItem(1912049,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}

}else if  (selection == 81) { 
if(cm.getzb() >= 15) { 
cm.setzb(-15); 
cm.gainItem(1902044,1); 
cm.gainItem(1912037,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}

}else if  (selection == 82) { 
if(cm.getzb() >= 15) { 
cm.setzb(-15);
cm.gainItem(1902043,1); 
cm.gainItem(1912036,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}

}else if  (selection == 83) { 
if(cm.getzb() >= 15) { 
cm.setzb(-15);
cm.gainItem(1902047,1); //ֱ���ɻ�
cm.gainItem(1912040,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}


}else if  (selection == 84) { 
if(cm.getzb() >= 15) { 
cm.setzb(-15); 
cm.gainItem(1902034,1); //������
cm.gainItem(1912027,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}


}else if  (selection == 85) { 
if(cm.getzb() >= 15) { 
cm.setzb(-15);
cm.gainItem(1902037,1); //�����ɴ�
cm.gainItem(1912030,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}

}else if  (selection == 86) { 
if(cm.getzb() >= 15) { 
cm.setzb(-15);
cm.gainItem(1902055,1); //����
cm.gainItem(1912048,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}

}else if  (selection == 87) { 
if(cm.getzb() >= 15) { 
cm.setzb(-15);
cm.gainItem(1902040,1); //��еʦ
cm.gainItem(1912033,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}

}else if  (selection == 88) { 
if(cm.getzb() >= 15) { 
cm.setzb(-10); 
cm.gainItem(1902041,1); //����
cm.gainItem(1912034,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}

}else if  (selection == 89) { 
if(cm.getzb() >= 15) { 
cm.setzb(-10);
cm.gainItem(1902042,1); //����
cm.gainItem(1912035,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}

}else if  (selection == 90) { 
if(cm.getzb() >= 10) { 
cm.setzb(-10);
cm.gainItem(1902057,1); //����˹�Ĳ�Ȯ
cm.gainItem(1912050,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}

}else if  (selection == 91) { 
if(cm.getzb() >= 10) { 
cm.setzb(-10);
cm.gainItem(1902049,1); //Сţ
cm.gainItem(1912042,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}

}else if  (selection == 92) { 
if(cm.getzb() >= 10) { 
cm.setzb(-10);
cm.gainItem(1902050,1); //Ħ��
cm.gainItem(1912043,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}

}else if  (selection == 93) { 
if(cm.getzb() >= 10) { 
cm.setzb(-10);
cm.gainItem(1902051,1); //�ɴ�
cm.gainItem(1912044,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}


}else if  (selection == 94) { 
if(cm.getzb() >= 10) { 
cm.setzb(-10);
cm.gainItem(1902052,1); //����
cm.gainItem(1912045,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}

}else if  (selection == 163) { 
if(cm.getzb() >= 10) { 
cm.setzb(-10);
cm.gainItem(1902053,1); //����
cm.gainItem(1912046,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}

}else if  (selection == 164) { 
if(cm.getzb() >= 10) { 
cm.setzb(-10);
cm.gainItem(1902054,1); //������
cm.gainItem(1912047,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}


//���㿪ʼ


}else if  (selection == 95) { 
if(cm.getzb() >= 10) { 
cm.setzb(-10);
cm.gainrw15(12000);
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}

}else if  (selection == 96) { 
if(cm.getzb() >= 25) { 
cm.setzb(-25);
cm.gainrw15(37500);
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}

}else if  (selection == 97) { 
if(cm.getzb() >= 50) { 
cm.setzb(-50);
cm.gainrw15(75000);
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}

}else if  (selection == 98) { 
if(cm.getzb() >= 100) { 
cm.setzb(-100); 
cm.gainrw15(150000);
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}

}else if  (selection == 99) { 
if(cm.getzb() >= 200) { 
cm.setzb(-200);
cm.gainrw15(300000);
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}

//����װ��

}else if  (selection == 100) { 
if(cm.getzb() >= 50) { 
cm.setzb(-50);
cm.gainItem(1002790,1); 
cm.gainItem(1052160,1); 
cm.gainItem(1082239,1); 
cm.gainItem(1072361,1); 
cm.gainItem(1032031,1); 
cm.gainItem(1402047,1); 
cm.gainItem(1432049,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}

}else if  (selection == 101) { 
if(cm.getzb() >= 50) { 
cm.setzb(-50);
cm.gainItem(1002793,1); 
cm.gainItem(1052163,1); 
cm.gainItem(1082242,1); 
cm.gainItem(1072364,1); 
cm.gainItem(1032031,1); 
cm.gainItem(1332076,1); 
cm.gainItem(1472071,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}

}else if  (selection == 102) { 
if(cm.getzb() >= 50) { 
cm.setzb(-50); 
cm.gainItem(1002792,1); 
cm.gainItem(1052162,1); 
cm.gainItem(1082241,1); 
cm.gainItem(1072363,1); 
cm.gainItem(1032031,1); 
cm.gainItem(1452059,1); 
cm.gainItem(1462051,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}

}else if  (selection == 103) { 
if(cm.getzb() >= 50) { 
cm.setzb(-50); 
cm.gainItem(1002791,1); 
cm.gainItem(1052161,1); 
cm.gainItem(1082240,1); 
cm.gainItem(1072362,1); 
cm.gainItem(1382059,1); 
cm.gainItem(1372045,1); 
cm.gainItem(1032031,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}

}else if  (selection == 104) { 
if(cm.getzb() >= 50) { 
cm.setzb(-50);
cm.gainItem(1002794,1); 
cm.gainItem(1052164,1); 
cm.gainItem(1082243,1); 
cm.gainItem(1072365,1); 
cm.gainItem(1482024,1); 
cm.gainItem(1492025,1); 
cm.gainItem(1032031,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}


//�ƽ�����

}else if  (selection == 105) { 
if(cm.getzb() >= 20) { 
cm.setzb(-20); 
cm.gainItem(1302142,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}

}else if  (selection == 106) { 
if(cm.getzb() >= 20) { 
cm.setzb(-20); 
cm.gainItem(1312056,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}

}else if  (selection == 107) { 
if(cm.getzb() >= 20) { 
cm.setzb(-20); 
cm.gainItem(1322084,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}

}else if  (selection == 108) { 
if(cm.getzb() >= 20) { 
cm.setzb(-20); 
cm.gainItem(1332114,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}

}else if  (selection == 109) { 
if(cm.getzb() >= 20) { 
cm.setzb(-20); 
cm.gainItem(1372071,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}

}else if  (selection == 110) { 
if(cm.getzb() >= 20) { 
cm.setzb(-20); 
cm.gainItem(1382093,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}

}else if  (selection == 111) { 
if(cm.getzb() >= 20) { 
cm.setzb(-20); 
cm.gainItem(1402085,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}

}else if  (selection == 112) { 
if(cm.getzb() >= 20) { 
cm.setzb(-20); 
cm.gainItem(1412055,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}

}else if  (selection == 113) { 
if(cm.getzb() >= 20) { 
cm.setzb(-20); 
cm.gainItem(1422057,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}

}else if  (selection == 114) { 
if(cm.getzb() >= 20) { 
cm.setzb(-20); 
cm.gainItem(1432075,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}

}else if  (selection == 115) { 
if(cm.getzb() >= 20) { 
cm.setzb(-20); 
cm.gainItem(1442104,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}

}else if  (selection == 116) { 
if(cm.getzb() >= 20) { 
cm.setzb(-20); 
cm.gainItem(1452100,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}

}else if  (selection == 117) { 
if(cm.getzb() >= 20) { 
cm.setzb(-20); 
cm.gainItem(1462085,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}

}else if  (selection == 118) { 
if(cm.getzb() >= 20) { 
cm.setzb(-20); 
cm.gainItem(1472111,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}

}else if  (selection == 119) { 
if(cm.getzb() >= 20) { 
cm.setzb(-20); 
cm.gainItem(1482073,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}

}else if  (selection == 120) { 
if(cm.getzb() >= 20) { 
cm.setzb(-20); 
cm.gainItem(1492073,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}

//ñ�ӿ�ʼ

}else if  (selection == 121) { 
if(cm.getzb() >= 5) { 
cm.setzb(-5); 
cm.gainItem(1002424,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}

}else if  (selection == 122) { 
if(cm.getzb() >= 5) { 
cm.setzb(-5); 
cm.gainItem(1002425,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}

}else if  (selection == 123) { 
if(cm.getzb() >= 5) { 
cm.setzb(-5); 
cm.gainItem(1002663,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}

}else if  (selection == 124) { 
if(cm.getzb() >= 5) { 
cm.setzb(-5); 
cm.gainItem(1002677,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}

}else if  (selection == 125) { 
if(cm.getzb() >= 5) { 
cm.setzb(-5); 
cm.gainItem(1002699,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}

}else if  (selection == 126) { 
if(cm.getzb() >= 5) { 
cm.setzb(-5); 
cm.gainItem(1002723,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}

}else if  (selection == 127) { 
if(cm.getzb() >= 5) { 
cm.setzb(-5); 
cm.gainItem(1002728,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}

}else if  (selection == 128) { 
if(cm.getzb() >= 5) { 
cm.setzb(-5); 
cm.gainItem(1002798,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}

}else if  (selection == 129) { 
if(cm.getzb() >= 5) { 
cm.setzb(-5); 
cm.gainItem(1002850,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}

}else if  (selection == 130) { 
if(cm.getzb() >= 5) { 
cm.setzb(-5); 
cm.gainItem(1002851,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}

}else if  (selection == 131) { 
if(cm.getzb() >= 5) { 
cm.setzb(-5); 
cm.gainItem(1002799,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}

}else if  (selection == 132) { 
if(cm.getzb() >= 5) { 
cm.setzb(-5); 
cm.gainItem(1002894,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}

}else if  (selection == 133) { 
if(cm.getzb() >= 5) { 
cm.setzb(-5); 
cm.gainItem(1002895,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}

}else if  (selection == 134) { 
if(cm.getzb() >= 5) { 
cm.setzb(-5); 
cm.gainItem(1002896,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}

}else if  (selection == 135) { 
if(cm.getzb() >= 5) { 
cm.setzb(-5); 
cm.gainItem(1002897,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}

}else if  (selection == 136) { 
if(cm.getzb() >= 5) { 
cm.setzb(-5); 
cm.gainItem(1002898,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}

}else if  (selection == 137) { 
if(cm.getzb() >= 5) { 
cm.setzb(-5); 
cm.gainItem(1002899,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}

}else if  (selection == 138) { 
if(cm.getzb() >= 5) { 
cm.setzb(-5); 
cm.gainItem(1002900,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}

}else if  (selection == 139) { 
if(cm.getzb() >= 5) { 
cm.setzb(-5); 
cm.gainItem(1002901,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}

}else if  (selection == 140) { 
if(cm.getzb() >= 5) { 
cm.setzb(-5); 
cm.gainItem(1002902,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}

}else if  (selection == 141) { 
if(cm.getzb() >= 5) { 
cm.setzb(-5); 
cm.gainItem(1002939,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}

}else if  (selection == 142) { 
if(cm.getzb() >= 5) { 
cm.setzb(-5); 
cm.gainItem(1002980,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}


}else if  (selection == 143) { 
if(cm.getzb() >= 5) { 
cm.setzb(-5); 
cm.gainItem(1003032,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}

}else if  (selection == 144) { 
if(cm.getzb() >= 5) { 
cm.setzb(-5); 
cm.gainItem(1003033,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}

}else if  (selection == 145) { 
if(cm.getzb() >= 5) { 
cm.setzb(-5); 
cm.gainItem(1003034,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}

}else if  (selection == 146) { 
if(cm.getzb() >= 5) { 
cm.setzb(-5); 
cm.gainItem(1003035,1); 
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}

//�����

}else if  (selection == 147) { 
if(cm.getzb() >= 10) { 
cm.setzb(-10); 
cm.gainNX(100000);
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}

}else if  (selection == 148) { 
if(cm.getzb() >= 15) { 
cm.setzb(-15); 
cm.gainNX(200000);
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}

}else if  (selection == 149) { 
if(cm.getzb() >= 20) { 
cm.setzb(-20); 
cm.gainNX(300000);
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}

}else if  (selection == 150) { 
if(cm.getzb() >= 40) { 
cm.setzb(-40); 
cm.gainNX(500000);
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}

//PK���߿�

}else if  (selection == 151) { 
if(cm.getzb() >= 20) { 
cm.setzb(-20); 
cm.gainItem(5220010,1);
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}

}else if  (selection == 152) { 
if(cm.getzb() >= 50) { 
cm.setzb(-50); 
cm.gainItem(5220000,1);
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}

}else if  (selection == 153) { 
if(cm.getzb() >= 0) { 
cm.setzb(-0); 
//cm.gainNX(300000);
cm.sendOk("#b�ȴ�����.");
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}

}else if  (selection == 154) { 
if(cm.getzb() >= 0) { 
cm.setzb(-0); 
//cm.gainNX(500000);
cm.sendOk("#b�ȴ�����.");
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}

//����ʥ��

}else if  (selection == 155) { 
if(cm.getzb() >= 1) { 
cm.setzb(-1); 
cm.gainItem(4031454,5);
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}

}else if  (selection == 156) { 
if(cm.getzb() >= 2) { 
cm.setzb(-2); 
cm.gainItem(4031454,10);
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}

}else if  (selection == 157) { 
if(cm.getzb() >= 3) { 
cm.setzb(-3); 
cm.gainItem(4031454,20);
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}

}else if  (selection == 158) { 
if(cm.getzb() >= 4) { 
cm.setzb(-4); 
cm.gainItem(4031454,30);
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}

//������Ʊ

}else if  (selection == 159) { 
if(cm.getzb() >= 15) { 
cm.setzb(-15); 
cm.gainItem(4002002,5);
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}

}else if  (selection == 160) { 
if(cm.getzb() >= 30) { 
cm.setzb(-30); 
cm.gainItem(4002002,10);
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}

}else if  (selection == 161) { 
if(cm.getzb() >= 50) { 
cm.setzb(-50); 
cm.gainItem(4002002,20);
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}

}else if  (selection == 162) { 
if(cm.getzb() >= 70) { 
cm.setzb(-70); 
cm.gainItem(4002002,30);
cm.sendOk("#b��ϲ����ɹ�."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��û���㹻��Ԫ��������ϵ�ͷ���ֵ."); 
cm.dispose();   
}



					
}
}
}


