function action(mode, type, selection) {
    if (cm.getPlayer().getProfessionLevel(92030000) > 0) {
        cm.sendProfessionWindow();
    } else {
        cm.playerMessage( - 9, "未学习饰品制作，无法使用。");
    }
    cm.dispose();
}