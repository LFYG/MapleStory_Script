/* 
 * [2430426] - [����˹�Ĳ�Ȯ]����ȯ
 */
var period = 7;
var mountSkillId = 80001319;

function start() {
    im.giveMountSkill(im.getItem(), mountSkillId, period);
    im.dispose();
}