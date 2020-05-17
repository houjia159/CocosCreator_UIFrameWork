import { ShowType, ShowMode } from "../UIFrame/config/SysDefine";
import { FormType } from "../UIFrame/FormType";
import UIBase from "../UIFrame/UIBase";

const {ccclass, property} = cc._decorator;

@ccclass
export default class UILoading extends UIBase {

    formType = new FormType(ShowType.Tips, ShowMode.Tips);

    
    
    start () {

    }

    // update (dt) {}
}
