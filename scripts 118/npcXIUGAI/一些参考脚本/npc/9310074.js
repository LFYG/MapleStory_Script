function start() {
var s = 1;
if (s==1){
            var FantMap = cm.getMap(910000000);
            FantMap.resetReactors();//���ù���
            FantMap.killAllMonsters(false);//ɾ�����й���
}else{
    cm.spawnMob(8850011,0,0);
}
cm.dispose();
}
