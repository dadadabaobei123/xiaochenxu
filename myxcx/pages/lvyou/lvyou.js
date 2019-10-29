// pages/lvyou/lvyou.js
Page({
    data: {
        a: 10
    },
    add(e){
        this.setData({
            a: this.data.a + Number(e.target.dataset.n)
        });
    },
    minus() {
        this.setData({
            a: this.data.a - 1
        });
    },
    changeHandler(e){
        this.setData({
            a: e.detail.value
        });
    },
    takePhoto() {
        const ctx = wx.createCameraContext()
        ctx.takePhoto({
            quality: 'high',
            success: (res) => {
                this.setData({
                    src: res.tempImagePath
                });
            }
        })
    },
    error(e) {
        console.log(e.detail)
    }
})