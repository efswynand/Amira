xui.Class('App.ColumnsNone30', 'xui.Module',{
    Instance:{
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.Div")
                .setHost(host,"ctl_pane10")
                .setDock("fill")
            );
            
            host.ctl_pane10.append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block38")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("66.66666666666667em")
                .setHeight("50em")
            );
            
            host.xui_ui_block38.append(
                xui.create("xui.UI.MenuBar")
                .setHost(host,"xui_ui_menubar4")
                .setItems([
                    {
                        "id":"menu1",
                        "caption":"menu1",
                        "sub":[
                            {
                                "id":"newbooking",
                                "caption":"New Booking"
                            },
                            {
                                "id":"printbooking",
                                "caption":"Print Booking",
                                "disabled":true
                            },
                            {
                                "id":"exit",
                                "caption":"Exit",
                                "imageClass":"xui-icon-xui"
                            }
                        ]
                    }
                ])
                .setTop("26.666666666666668em")
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        }
    }
});