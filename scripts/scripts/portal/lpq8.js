function enter(pi) {
    var eim = pi.getEventManager("LudiPQ").getInstance("LudiPQ");

    // only let people through if the eim is ready
    if (eim.getProperty("8stageclear") == null) { // do nothing; send message to player
        pi.playerMessage(5, "���ڻ����ܽ��롣");
    } else {
        pi.warp(pi.getMapId() + 100, "st00");
    }
}