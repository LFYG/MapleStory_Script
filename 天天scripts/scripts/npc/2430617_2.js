
var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
        if (status == -1) {
            cm.dispose();
        } else if (status == 0) {

if(cm.getChar().getAccountID()==1){


cm.sendSimple("#r#e���������T����ѡ������Ҫ�������͡�T��������\r\n#L0##v5120008##l#L1##v5120003##l#L2##v5120005##l#L3##v5120009##L4##v5121009#");


 } else {

cm.sendOk("�Բ����Ҳ���Ϊ�����"); 
cm.dispose();
}

        } else if (status == 1) {
if(selection==0){
typedd=5120008;
}else if(selection==1){
typedd=5120003;
}else if(selection==2){
typedd=5120005;
}else if(selection==3){
typedd=5120009;
}else if(selection==4){
typedd=5121009;
}
cm.sendGetText("#r#r#e\r\n���������������T�������(ף��)��T��������������\r\n#d��������Ҫ���͵���Ϣ��"); 

} else if (status == 2) {
selected = cm.getText();
cm.superlaba(selected,typedd);
cm.dispose();

        }
    }
}

