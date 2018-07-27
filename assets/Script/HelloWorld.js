cc.Class({
    extends: cc.Component,

    properties: {
        label: {
            default: null,
            type: cc.Label
        },
        btn_a: {
            default: null,
            type: cc.Button
        },
        // defaults, set visually when attaching this script to the Canvas
        text: 'Hello, World!'
    },

    // use this for initialization
    onLoad: function () {
        this.label.string = this.text;
        let self = this
        this.node.on('touchend',event => {
            let location = event.touch.getLocation()
            let location2 = self.btn_a.node.parent.convertToNodeSpaceAR(location)
            cc.log(location,location2)
            let action = cc.moveTo(2, location2.x, location2.y)
            // 执行动作
            self.btn_a.node.stopAllActions()
            self.btn_a.node.runAction(action)

            // cc.log('print jump')
            // this.node.emit('jump', {
            //     msg: 'jump',
            // });

            // this.dispatchEvent( new cc.Event.EventCustom('walk', true) );
        })

        this.node.on('jump',event => {

            let button = self.getComponentInChildren("ButtonScript")
            if (button!=null) {
                button.onCustomEvent(event)
            }
        })
    },

    // called every frame
    update: function (dt) {

    },
    onButton_a: function (event, customEventData) {
        // cc.log(event,customEventData)
        // event.stopPropagation()
        // this.node.setScale(2, 2)
    }
});
