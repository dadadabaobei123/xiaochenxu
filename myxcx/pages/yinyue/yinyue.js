Page({
    data: {
        arr: [],
        wh: 0,
        page: 1
    },
    onLoad(){
        var self = this;
        // 得到系统的高度
        wx.getSystemInfo({
            success(data){
                self.setData({
                    wh: data.windowHeight
                });
            }
        });

        // Ajax不用axios，自带
        wx.request({
            url: 'http://www.aiqianduan.com:7897/cars?page=1',
            success(data){
                self.setData({
                    arr: data.data.results
                });
            }
        });
    },
    lowerHan(){
        console.log('到底了');
        var self = this;
        this.setData({
            page: this.data.page + 1
        });
        // Ajax不用axios，自带
        wx.request({
            url: 'http://www.aiqianduan.com:7897/cars?page=' + this.data.page,
            success(data) {
             
                self.setData({
                    arr: [...self.data.arr, ...data.data.results]
                });
            }
        });
    },
    tz (e) {
        console.log(e);
        wx.navigateTo({
            url: '/pages/detail/detail?id=' + e.currentTarget.dataset.id,
        })
    }
});