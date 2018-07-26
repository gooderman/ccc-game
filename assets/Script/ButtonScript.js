// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
        isStart: false
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        // this.node.on('mousemove',function(event) {
        //     cc.log(event)
        //     event.stopPropagation()
        // })
        // this.node.on('mousedown',function(event) {
        //     cc.log(event)
        //     event.stopPropagation()
        // })
        // this.node.on('mouseup',function(event) {
        //     cc.log(event)
        //     event.stopPropagation()
        // })
    },

    start () {
        this.isStart = true
        let self = this;
        this.node.on('touchend',function(event,customEventData) {
            // cc.log(event,customEventData)
            // event.stopPropagation()
            // self.node.setScale(2, 2)
            let parent = this.parent
            let location = event.touch.getLocation()
            cc.log(location,parent.convertToNodeSpace(location),this.convertToNodeSpace(location))
            cc.log(location,parent.convertToNodeSpaceAR(location),this.convertToNodeSpaceAR(location))
            // this.emit('walk', {
            //     msg: 'Hello, this is Cocos Creator',
            // });
        })
        // this.node.on('walk',this.onCustomEvent)
        this.node.on('jump',this.onCustomEvent)
    },

    onCustomEvent(event) {
        cc.log('onCustomEvent',event,this)
        // if (event.name=='walk'){

        // }
    },

    update (dt) {
        // let x = cc.randomMinus1To1() * cc.director.getWinSize().width/2
        // let y = cc.randomMinus1To1() * cc.director.getWinSize().height/2
        // this.node.setPosition(x,y)
    },
});
