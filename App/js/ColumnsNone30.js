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
                        "sub":[
                            {
                                "id":"normal",
                                "caption":"normal"
                            },
                            {
                                "id":"disabled",
                                "caption":"disabled",
                                "disabled":true
                            },
                            {
                                "id":"image",
                                "caption":"image",
                                "imageClass":"xui-icon-xui"
                            },
                            {
                                "type":"split"
                            },
                            {
                                "id":"checkbox 1",
                                "caption":"checkbox 1",
                                "type":"checkbox"
                            },
                            {
                                "id":"checkbox 2",
                                "caption":"checkbox 2",
                                "type":"checkbox"
                            }
                        ],
                        "caption":"menu1"
                    },
                    {
                        "id":"menu2",
                        "sub":[
                            {
                                "id":"sub menu 1",
                                "caption":"sub menu 1",
                                "add":"[Ctrl+F]",
                                "sub":[
                                    {
                                        "id":"sub 1",
                                        "type":"radiobox"
                                    },
                                    {
                                        "id":"sub 2",
                                        "type":"radiobox"
                                    },
                                    {
                                        "id":"sub 3"
                                    }
                                ]
                            },
                            {
                                "id":"sub menu 2",
                                "caption":"sub menu 2",
                                "add":"[Ctrl+T]",
                                "sub":[
                                    "sub 3",
                                    "sub 4"
                                ]
                            }
                        ],
                        "caption":"menu2"
                    }
                ])
                .setTop("26.666666666666668em")
            );
            
            host.xui_ui_block38.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label21")
                .setLeft("14.166666666666666em")
                .setTop("20.833333333333332em")
                .setCaption("Test")
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        }
    }
});