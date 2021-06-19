<template>
    <div class="db-view">
        <header class="header">
            <router-link to="/index/index1">
                <h3>点击进入后台管理</h3>
            </router-link>
        </header>

        <div class="wrapper">
            <div class="container-fluid">
                <div class="row fill-h">
                    <div class="col-lg-3 fill-h">
                        <div class="xpanel-wrapper xpanel-wrapper-3">
                            <div class="xpanel">
                                <div class="fill-h" id="leftTop"></div>
                            </div>
                        </div>
                        <div class="xpanel-wrapper xpanel-wrapper-3">
                            <div class="row fill-h">
                                <div class="col-lg-6 fill-h">
                                    <div class="xpanel-wrapper xpanel-wrapper-1">
                                        <div class="xpanel">
                                            <div class="fill-h" id="leftCenter1"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 fill-h">
                                    <div class="xpanel-wrapper xpanel-wrapper-1">
                                        <div class="xpanel">
                                            <div class="fill-h" id="leftCenter2"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="xpanel-wrapper xpanel-wrapper-3">
                            <div class="xpanel">
                                <div class="fill-h" id="leftBottom"></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 fill-h">
                        <div class="xpanel-wrapper xpanel-wrapper-1">
                            <div class="xpanel">
                                <div class="fill-h" id="centerMap"></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 fill-h">
                        <div class="xpanel-wrapper xpanel-wrapper-2">
                            <div class="xpanel">
                                <div class="fill-h" id="rightTop"></div>
                            </div>
                        </div>
                        <div class="xpanel-wrapper xpanel-wrapper-2">
                            <div class="xpanel">
                                <div class="fill-h" id="rightBottom"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import "@/static/js/lib/china.js";

export default {
    mounted() {
        this.leftTop();
        this.rightTop();
        this.centerMap();
        this.leftCenter1();
        this.leftCenter2();
        this.leftBottom();
        this.rightBottom();
    },
    methods: {
        leftTop: function () {
            var yearData = [
                {
                    year: "2020", // 年份
                    data: [
                        // 两个数组是因为有两条线
                        [
                            24,
                            40,
                            101,
                            134,
                            90,
                            230,
                            210,
                            230,
                            120,
                            230,
                            210,
                            120,
                        ],
                        [
                            40,
                            64,
                            191,
                            324,
                            290,
                            330,
                            310,
                            213,
                            180,
                            200,
                            180,
                            79,
                        ],
                    ],
                },
                {
                    year: "2021", // 年份
                    data: [
                        // 两个数组是因为有两条线
                        [123, 175, 112, 197, 121, 67, 98, 21, 43, 64, 76, 38],
                        [143, 131, 165, 123, 178, 21, 82, 64, 43, 60, 19, 34],
                    ],
                },
            ];
            // 1. 实例化对象
            var leftTop = this.$echarts.init(
                document.querySelector("#leftTop")
            );
            // 2.指定配置
            var leftTopOption = {
                // 通过这个color修改两条线的颜色
                color: ["#00f2f1", "#ed3f35"],
                tooltip: {
                    trigger: "axis",
                },
                legend: {
                    // 如果series 对象有name 值，则 legend可以不用写data
                    // 修改图例组件 文字颜色
                    textStyle: {
                        color: "rgba(255,255,255,1)",
                    },
                    // 这个10% 必须加引号, legend 位置
                    // right: "10%",
                },
                grid: {
                    top: "20%",
                    left: "3%",
                    right: "4%",
                    bottom: "3%",
                    show: true, // 显示边框
                    borderColor: "#012f4a", // 边框颜色
                    containLabel: true, // 包含刻度文字在内
                },

                xAxis: {
                    type: "category",
                    boundaryGap: false,
                    data: [
                        "1月",
                        "2月",
                        "3月",
                        "4月",
                        "5月",
                        "6月",
                        "7月",
                        "8月",
                        "9月",
                        "10月",
                        "11月",
                        "12月",
                    ],
                    axisTick: {
                        show: false, // 去除刻度线
                    },
                    axisLabel: {
                        color: "rgba(255,255,255,1)", // 文本颜色
                    },
                    axisLine: {
                        show: false, // 去除轴线
                    },
                },
                yAxis: {
                    type: "value",
                    axisTick: {
                        show: false, // 去除刻度线
                    },
                    axisLabel: {
                        color: "rgba(255,255,255,1)", // 文本颜色
                    },
                    axisLine: {
                        show: false, // 去除轴线
                    },
                    splitLine: {
                        lineStyle: {
                            color: "#012f4a", // 分割线颜色
                        },
                    },
                },
                series: [
                    {
                        name: "新增粉丝",
                        type: "line",
                        // true 可以让我们的折线显示带有弧度
                        smooth: true,
                        data: yearData[0].data[0],
                    },
                    {
                        name: "新增游客",
                        type: "line",
                        smooth: true,
                        data: yearData[0].data[1],
                    },
                ],
            };

            // 3. 把配置给实例对象
            leftTop.setOption(leftTopOption);
            // 4. 让图表跟随屏幕自动的去适应
            window.addEventListener("resize", function () {
                leftTop.resize();
            });

            // 5.点击切换效果
            $(".line h2").on("click", "a", function () {
                // console.log($(this).index());
                // 点击 a 之后 根据当前a的索引号 找到对应的 yearData的相关对象
                // console.log(yearData[$(this).index()]);
                var obj = yearData[$(this).index()];
                option.series[0].data = obj.data[0];
                option.series[1].data = obj.data[1];
                // 需要重新渲染
                myChart.setOption(option);
            });
        },
        rightTop: function () {
            var rightTop = this.$echarts.init(
                document.querySelector("#rightTop")
            );
            var rightTopOption = {
                tooltip: {
                    trigger: "axis",
                },
                legend: {
                    top: "0%",
                    data: [
                        "邮件营销",
                        "联盟广告",
                        "视频广告",
                        "直接访问",
                        "搜索引擎",
                    ],
                    textStyle: {
                        color: "rgba(255,255,255,1)",
                        fontSize: "12",
                    },
                },

                grid: {
                    left: "10",
                    top: "30",
                    right: "10",
                    bottom: "10",
                    containLabel: true,
                },
                xAxis: [
                    {
                        type: "category",
                        boundaryGap: false,
                        // x轴更换数据
                        data: [
                            "01",
                            "02",
                            "03",
                            "04",
                            "05",
                            "06",
                            "07",
                            "08",
                            "09",
                            "10",
                            "11",
                            "12",
                            "13",
                            "14",
                            "15",
                            "16",
                            "17",
                            "18",
                            "19",
                            "20",
                            "21",
                            "22",
                            "23",
                            "24",
                            "25",
                            "26",
                            "26",
                            "28",
                            "29",
                            "30",
                        ],
                        // 文本颜色为rgba(255,255,255,.6)  文字大小为 12
                        axisLabel: {
                            textStyle: {
                                color: "rgba(255,255,255,1)",
                                fontSize: 12,
                            },
                        },
                        // x轴线的颜色为   rgba(255,255,255,.2)
                        axisLine: {
                            lineStyle: {
                                color: "rgba(255,255,255,.2)",
                            },
                        },
                    },
                ],
                yAxis: [
                    {
                        type: "value",
                        axisTick: { show: false },
                        axisLine: {
                            lineStyle: {
                                color: "rgba(255,255,255,.1)",
                            },
                        },
                        axisLabel: {
                            textStyle: {
                                color: "rgba(255,255,255,1)",
                                fontSize: 12,
                            },
                        },
                        // 修改分割线的颜色
                        splitLine: {
                            lineStyle: {
                                color: "rgba(255,255,255,.1)",
                            },
                        },
                    },
                ],
                series: [
                    {
                        name: "邮件营销",
                        type: "line",
                        smooth: true,
                        // 单独修改当前线条的样式
                        lineStyle: {
                            color: "#0184d5",
                            width: "2",
                        },
                        // 填充颜色设置
                        areaStyle: {
                            color: new this.$echarts.graphic.LinearGradient(
                                0,
                                0,
                                0,
                                1,
                                [
                                    {
                                        offset: 0,
                                        color: "rgba(1, 132, 213, 0.4)", // 渐变色的起始颜色
                                    },
                                    {
                                        offset: 0.8,
                                        color: "rgba(1, 132, 213, 0.1)", // 渐变线的结束颜色
                                    },
                                ],
                                false
                            ),
                            shadowColor: "rgba(0, 0, 0, 0.1)",
                        },
                        // 设置拐点
                        symbol: "circle",
                        // 拐点大小
                        symbolSize: 8,
                        // 开始不显示拐点， 鼠标经过显示
                        showSymbol: false,
                        // 设置拐点颜色以及边框
                        itemStyle: {
                            color: "#0184d5",
                            borderColor: "rgba(221, 220, 107, .1)",
                            borderWidth: 12,
                        },
                        data: [
                            30,
                            40,
                            30,
                            40,
                            30,
                            40,
                            30,
                            60,
                            20,
                            40,
                            30,
                            40,
                            30,
                            40,
                            30,
                            40,
                            30,
                            60,
                            20,
                            40,
                            30,
                            40,
                            30,
                            40,
                            30,
                            40,
                            20,
                            60,
                            50,
                            40,
                        ],
                    },
                    {
                        name: "联盟广告",
                        type: "line",
                        smooth: true,
                        lineStyle: {
                            normal: {
                                color: "#00d887",
                                width: 2,
                            },
                        },
                        areaStyle: {
                            normal: {
                                color: new this.$echarts.graphic.LinearGradient(
                                    0,
                                    0,
                                    0,
                                    1,
                                    [
                                        {
                                            offset: 0,
                                            color: "rgba(0, 216, 135, 0.4)",
                                        },
                                        {
                                            offset: 0.8,
                                            color: "rgba(0, 216, 135, 0.1)",
                                        },
                                    ],
                                    false
                                ),
                                shadowColor: "rgba(0, 0, 0, 0.1)",
                            },
                        },
                        // 设置拐点 小圆点
                        symbol: "circle",
                        // 拐点大小
                        symbolSize: 5,
                        // 设置拐点颜色以及边框
                        itemStyle: {
                            color: "#00d887",
                            borderColor: "rgba(221, 220, 107, .1)",
                            borderWidth: 12,
                        },
                        // 开始不显示拐点， 鼠标经过显示
                        showSymbol: false,
                        data: [
                            130,
                            10,
                            20,
                            40,
                            30,
                            40,
                            80,
                            60,
                            20,
                            40,
                            90,
                            40,
                            20,
                            140,
                            30,
                            40,
                            130,
                            20,
                            20,
                            40,
                            80,
                            70,
                            30,
                            40,
                            30,
                            120,
                            20,
                            99,
                            50,
                            20,
                        ],
                    },
                ],
            };
            rightTop.setOption(rightTopOption);
            // 4. 让图表跟随屏幕自动的去适应
            window.addEventListener("resize", function () {
                rightTop.resize();
            });
        },
        centerMap: function () {
            //初始化echarts实例
            var centerMap = this.$echarts.init(
                document.querySelector("#centerMap")
            );
            //城市经纬度
            var scatterGeo = {
                海门: [121.15, 31.89],
                鄂尔多斯: [109.781327, 39.608266],
                招远: [120.38, 37.35],
                舟山: [122.207216, 29.985295],
                齐齐哈尔: [123.97, 47.33],
                盐城: [120.13, 33.38],
                赤峰: [118.87, 42.28],
                青岛: [120.33, 36.07],
                乳山: [121.52, 36.89],
                金昌: [102.188043, 38.520089],
                泉州: [118.58, 24.93],
                莱西: [120.53, 36.86],
                日照: [119.46, 35.42],
                胶南: [119.97, 35.88],
                南通: [121.05, 32.08],
                拉萨: [91.11, 29.97],
                云浮: [112.02, 22.93],
                梅州: [116.1, 24.55],
                文登: [122.05, 37.2],
                上海: [121.48, 31.22],
                攀枝花: [101.718637, 26.582347],
                威海: [122.1, 37.5],
                承德: [117.93, 40.97],
                厦门: [118.1, 24.46],
                汕尾: [115.375279, 22.786211],
                潮州: [116.63, 23.68],
                丹东: [124.37, 40.13],
                太仓: [121.1, 31.45],
                曲靖: [103.79, 25.51],
                烟台: [121.39, 37.52],
                福州: [119.3, 26.08],
                瓦房店: [121.979603, 39.627114],
                即墨: [120.45, 36.38],
                抚顺: [123.97, 41.97],
                玉溪: [102.52, 24.35],
                张家口: [114.87, 40.82],
                阳泉: [113.57, 37.85],
                莱州: [119.942327, 37.177017],
                湖州: [120.1, 30.86],
                汕头: [116.69, 23.39],
                昆山: [120.95, 31.39],
                宁波: [121.56, 29.86],
                湛江: [110.359377, 21.270708],
                揭阳: [116.35, 23.55],
                荣成: [122.41, 37.16],
                连云港: [119.16, 34.59],
                葫芦岛: [120.836932, 40.711052],
                常熟: [120.74, 31.64],
                东莞: [113.75, 23.04],
                河源: [114.68, 23.73],
                淮安: [119.15, 33.5],
                泰州: [119.9, 32.49],
                南宁: [108.33, 22.84],
                营口: [122.18, 40.65],
                惠州: [114.4, 23.09],
                江阴: [120.26, 31.91],
                蓬莱: [120.75, 37.8],
                韶关: [113.62, 24.84],
                嘉峪关: [98.289152, 39.77313],
                广州: [113.23, 23.16],
                延安: [109.47, 36.6],
                太原: [112.53, 37.87],
                清远: [113.01, 23.7],
                中山: [113.38, 22.52],
                昆明: [102.73, 25.04],
                寿光: [118.73, 36.86],
                盘锦: [122.070714, 41.119997],
                长治: [113.08, 36.18],
                深圳: [114.07, 22.62],
                珠海: [113.52, 22.3],
                宿迁: [118.3, 33.96],
                咸阳: [108.72, 34.36],
                铜川: [109.11, 35.09],
                平度: [119.97, 36.77],
                佛山: [113.11, 23.05],
                海口: [110.35, 20.02],
                江门: [113.06, 22.61],
                章丘: [117.53, 36.72],
                肇庆: [112.44, 23.05],
                大连: [121.62, 38.92],
                临汾: [111.5, 36.08],
                吴江: [120.63, 31.16],
                石嘴山: [106.39, 39.04],
                沈阳: [123.38, 41.8],
                苏州: [120.62, 31.32],
                茂名: [110.88, 21.68],
                嘉兴: [120.76, 30.77],
                长春: [125.35, 43.88],
                胶州: [120.03336, 36.264622],
                银川: [106.27, 38.47],
                张家港: [120.555821, 31.875428],
                三门峡: [111.19, 34.76],
                锦州: [121.15, 41.13],
                南昌: [115.89, 28.68],
                柳州: [109.4, 24.33],
                三亚: [109.511909, 18.252847],
                自贡: [104.778442, 29.33903],
                吉林: [126.57, 43.87],
                阳江: [111.95, 21.85],
                泸州: [105.39, 28.91],
                西宁: [101.74, 36.56],
                宜宾: [104.56, 29.77],
                呼和浩特: [111.65, 40.82],
                成都: [104.06, 30.67],
                大同: [113.3, 40.12],
                镇江: [119.44, 32.2],
                桂林: [110.28, 25.29],
                张家界: [110.479191, 29.117096],
                宜兴: [119.82, 31.36],
                北海: [109.12, 21.49],
                西安: [108.95, 34.27],
                金坛: [119.56, 31.74],
                东营: [118.49, 37.46],
                牡丹江: [129.58, 44.6],
                遵义: [106.9, 27.7],
                绍兴: [120.58, 30.01],
                扬州: [119.42, 32.39],
                常州: [119.95, 31.79],
                潍坊: [119.1, 36.62],
                重庆: [106.54, 29.59],
                台州: [121.420757, 28.656386],
                南京: [118.78, 32.04],
                滨州: [118.03, 37.36],
                贵阳: [106.71, 26.57],
                无锡: [120.29, 31.59],
                本溪: [123.73, 41.3],
                克拉玛依: [84.77, 45.59],
                渭南: [109.5, 34.52],
                马鞍山: [118.48, 31.56],
                宝鸡: [107.15, 34.38],
                焦作: [113.21, 35.24],
                句容: [119.16, 31.95],
                北京: [116.46, 39.92],
                徐州: [117.2, 34.26],
                衡水: [115.72, 37.72],
                包头: [110, 40.58],
                绵阳: [104.73, 31.48],
                乌鲁木齐: [87.68, 43.77],
                枣庄: [117.57, 34.86],
                杭州: [120.19, 30.26],
                淄博: [118.05, 36.78],
                鞍山: [122.85, 41.12],
                溧阳: [119.48, 31.43],
                库尔勒: [86.06, 41.68],
                安阳: [114.35, 36.1],
                开封: [114.35, 34.79],
                济南: [117, 36.65],
                德阳: [104.37, 31.13],
                温州: [120.65, 28.01],
                九江: [115.97, 29.71],
                邯郸: [114.47, 36.6],
                临安: [119.72, 30.23],
                兰州: [103.73, 36.03],
                沧州: [116.83, 38.33],
                临沂: [118.35, 35.05],
                南充: [106.110698, 30.837793],
                天津: [117.2, 39.13],
                富阳: [119.95, 30.07],
                泰安: [117.13, 36.18],
                诸暨: [120.23, 29.71],
                郑州: [113.65, 34.76],
                哈尔滨: [126.63, 45.75],
                聊城: [115.97, 36.45],
                芜湖: [118.38, 31.33],
                唐山: [118.02, 39.63],
                平顶山: [113.29, 33.75],
                邢台: [114.48, 37.05],
                德州: [116.29, 37.45],
                济宁: [116.59, 35.38],
                荆州: [112.239741, 30.335165],
                宜昌: [111.3, 30.7],
                义乌: [120.06, 29.32],
                丽水: [119.92, 28.45],
                洛阳: [112.44, 34.7],
                秦皇岛: [119.57, 39.95],
                株洲: [113.16, 27.83],
                石家庄: [114.48, 38.03],
                莱芜: [117.67, 36.19],
                常德: [111.69, 29.05],
                保定: [115.48, 38.85],
                湘潭: [112.91, 27.87],
                金华: [119.64, 29.12],
                岳阳: [113.09, 29.37],
                长沙: [113, 28.21],
                衢州: [118.88, 28.97],
                廊坊: [116.7, 39.53],
                菏泽: [115.480656, 35.23375],
                合肥: [117.27, 31.86],
                武汉: [114.31, 30.52],
                大庆: [125.03, 46.58],
            };
            //城市数据
            var scatterVal = [
                { name: "海门", value: 9 },
                { name: "鄂尔多斯", value: 12 },
                { name: "招远", value: 12 },
                { name: "舟山", value: 12 },
                { name: "齐齐哈尔", value: 14 },
                { name: "盐城", value: 15 },
                { name: "赤峰", value: 16 },
                { name: "青岛", value: 18 },
                { name: "乳山", value: 18 },
                { name: "金昌", value: 19 },
                { name: "泉州", value: 21 },
                { name: "莱西", value: 21 },
                { name: "日照", value: 21 },
                { name: "胶南", value: 22 },
                { name: "南通", value: 23 },
                { name: "拉萨", value: 24 },
                { name: "云浮", value: 24 },
                { name: "梅州", value: 25 },
                { name: "文登", value: 25 },
                { name: "上海", value: 25 },
                { name: "攀枝花", value: 25 },
                { name: "威海", value: 25 },
                { name: "承德", value: 25 },
                { name: "厦门", value: 26 },
                { name: "汕尾", value: 26 },
                { name: "潮州", value: 26 },
                { name: "丹东", value: 27 },
                { name: "太仓", value: 27 },
                { name: "曲靖", value: 27 },
                { name: "烟台", value: 28 },
                { name: "福州", value: 29 },
                { name: "瓦房店", value: 30 },
                { name: "即墨", value: 30 },
                { name: "抚顺", value: 31 },
                { name: "玉溪", value: 31 },
                { name: "张家口", value: 31 },
                { name: "阳泉", value: 31 },
                { name: "莱州", value: 32 },
                { name: "湖州", value: 32 },
                { name: "汕头", value: 32 },
                { name: "昆山", value: 33 },
                { name: "宁波", value: 33 },
                { name: "湛江", value: 33 },
                { name: "揭阳", value: 34 },
                { name: "荣成", value: 34 },
                { name: "连云港", value: 35 },
                { name: "葫芦岛", value: 35 },
                { name: "常熟", value: 36 },
                { name: "东莞", value: 36 },
                { name: "河源", value: 36 },
                { name: "淮安", value: 36 },
                { name: "泰州", value: 36 },
                { name: "南宁", value: 37 },
                { name: "营口", value: 37 },
                { name: "惠州", value: 37 },
                { name: "江阴", value: 37 },
                { name: "蓬莱", value: 37 },
                { name: "韶关", value: 38 },
                { name: "嘉峪关", value: 38 },
                { name: "广州", value: 38 },
                { name: "延安", value: 38 },
                { name: "太原", value: 39 },
                { name: "清远", value: 39 },
                { name: "中山", value: 39 },
                { name: "昆明", value: 39 },
                { name: "寿光", value: 40 },
                { name: "盘锦", value: 40 },
                { name: "长治", value: 41 },
                { name: "深圳", value: 41 },
                { name: "珠海", value: 42 },
                { name: "宿迁", value: 43 },
                { name: "咸阳", value: 43 },
                { name: "铜川", value: 44 },
                { name: "平度", value: 44 },
                { name: "佛山", value: 44 },
                { name: "海口", value: 44 },
                { name: "江门", value: 45 },
                { name: "章丘", value: 45 },
                { name: "肇庆", value: 46 },
                { name: "大连", value: 47 },
                { name: "临汾", value: 47 },
                { name: "吴江", value: 47 },
                { name: "石嘴山", value: 49 },
                { name: "沈阳", value: 50 },
                { name: "苏州", value: 50 },
                { name: "茂名", value: 50 },
                { name: "嘉兴", value: 51 },
                { name: "长春", value: 51 },
                { name: "胶州", value: 52 },
                { name: "银川", value: 52 },
                { name: "张家港", value: 52 },
                { name: "三门峡", value: 53 },
                { name: "锦州", value: 54 },
                { name: "南昌", value: 54 },
                { name: "柳州", value: 54 },
                { name: "三亚", value: 54 },
                { name: "自贡", value: 56 },
                { name: "吉林", value: 56 },
                { name: "阳江", value: 57 },
                { name: "泸州", value: 57 },
                { name: "西宁", value: 57 },
                { name: "宜宾", value: 58 },
                { name: "呼和浩特", value: 58 },
                { name: "成都", value: 58 },
                { name: "大同", value: 58 },
                { name: "镇江", value: 59 },
                { name: "桂林", value: 59 },
                { name: "张家界", value: 59 },
                { name: "宜兴", value: 59 },
                { name: "北海", value: 60 },
                { name: "西安", value: 61 },
                { name: "金坛", value: 62 },
                { name: "东营", value: 62 },
                { name: "牡丹江", value: 63 },
                { name: "遵义", value: 63 },
                { name: "绍兴", value: 63 },
                { name: "扬州", value: 64 },
                { name: "常州", value: 64 },
                { name: "潍坊", value: 65 },
                { name: "重庆", value: 66 },
                { name: "台州", value: 67 },
                { name: "南京", value: 67 },
                { name: "滨州", value: 70 },
                { name: "贵阳", value: 71 },
                { name: "无锡", value: 71 },
                { name: "本溪", value: 71 },
                { name: "克拉玛依", value: 72 },
                { name: "渭南", value: 72 },
                { name: "马鞍山", value: 72 },
                { name: "宝鸡", value: 72 },
                { name: "焦作", value: 75 },
                { name: "句容", value: 75 },
                { name: "北京", value: 79 },
                { name: "徐州", value: 79 },
                { name: "衡水", value: 80 },
                { name: "包头", value: 80 },
                { name: "绵阳", value: 80 },
                { name: "乌鲁木齐", value: 84 },
                { name: "枣庄", value: 84 },
                { name: "杭州", value: 84 },
                { name: "淄博", value: 85 },
                { name: "鞍山", value: 86 },
                { name: "溧阳", value: 86 },
                { name: "库尔勒", value: 86 },
                { name: "安阳", value: 90 },
                { name: "开封", value: 90 },
                { name: "济南", value: 92 },
                { name: "德阳", value: 93 },
                { name: "温州", value: 95 },
                { name: "九江", value: 96 },
                { name: "邯郸", value: 98 },
                { name: "临安", value: 99 },
                { name: "兰州", value: 99 },
                { name: "沧州", value: 100 },
                { name: "临沂", value: 103 },
                { name: "南充", value: 104 },
                { name: "天津", value: 105 },
                { name: "富阳", value: 106 },
                { name: "泰安", value: 112 },
                { name: "诸暨", value: 112 },
                { name: "郑州", value: 113 },
                { name: "哈尔滨", value: 114 },
                { name: "聊城", value: 116 },
                { name: "芜湖", value: 117 },
                { name: "唐山", value: 119 },
                { name: "平顶山", value: 119 },
                { name: "邢台", value: 119 },
                { name: "德州", value: 120 },
                { name: "济宁", value: 120 },
                { name: "荆州", value: 127 },
                { name: "宜昌", value: 130 },
                { name: "义乌", value: 132 },
                { name: "丽水", value: 133 },
                { name: "洛阳", value: 134 },
                { name: "秦皇岛", value: 136 },
                { name: "株洲", value: 143 },
                { name: "石家庄", value: 147 },
                { name: "莱芜", value: 148 },
                { name: "常德", value: 152 },
                { name: "保定", value: 153 },
                { name: "湘潭", value: 154 },
                { name: "金华", value: 157 },
                { name: "岳阳", value: 169 },
                { name: "长沙", value: 175 },
                { name: "衢州", value: 177 },
                { name: "廊坊", value: 193 },
                { name: "菏泽", value: 194 },
                { name: "合肥", value: 229 },
                { name: "武汉", value: 273 },
                { name: "大庆", value: 279 },
            ];
            //数据转换，转换后的格式：[{name: 'cityName', value: [lng, lat, val]}, {...}]
            var convertScatterData = function (data) {
                let res = [];
                for (let i = 0; i < data.length; i++) {
                    let geoCoord = scatterGeo[data[i].name];
                    if (geoCoord) {
                        res.push({
                            name: data[i].name,
                            value: geoCoord.concat(data[i].value),
                        });
                    }
                }
                return res;
            };

            //地图配置项
            var centerMapOpt = {
                title: {
                    text: "全国主要城市空气质量",
                    x: "center",
                    textStyle: {
                        color: "#fff",
                    },
                },
                legend: {
                    data: ["PM2.5"], //与series的name属性对应
                    orient: "vertical",
                    y: "bottom",
                    x: "right",
                    textStyle: {
                        color: "#fff",
                    },
                },
                tooltip: {
                    trigger: "item",
                    formatter: function (params) {
                        return params.name + " : " + params.value[2];
                    },
                },
                visualMap: {
                    min: 0,
                    max: 200,
                    calculable: true,
                    inRange: {
                        color: ["#50a3ba", "#eac736", "#d94e5d"],
                    },
                    textStyle: {
                        color: "#fff",
                    },
                },
                geo: {
                    map: "china",
                    roam: false, //开启鼠标缩放和漫游
                    zoom: 1, //地图缩放级别
                    selectedMode: false, //选中模式：single | multiple
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0,
                    layoutCenter: ["50%", "50%"], //设置后left/right/top/bottom等属性无效
                    layoutSize: "100%",
                    label: {
                        emphasis: {
                            show: false,
                        },
                    },
                    itemStyle: {
                        normal: {
                            areaColor: "#101f32",
                            borderWidth: 1.1,
                            borderColor: "#43d0d6",
                        },
                        emphasis: {
                            areaColor: "#069",
                        },
                    },
                },
                series: [
                    {
                        name: "PM2.5",
                        type: "scatter",
                        coordinateSystem: "geo",
                        symbolSize: 12,
                        label: {
                            normal: {
                                show: false,
                            },
                            emphasis: {
                                show: false,
                            },
                        },
                        itemStyle: {
                            emphasis: {
                                borderColor: "#fff",
                                borderWidth: 1,
                            },
                        },
                        data: convertScatterData(scatterVal),
                    },
                ],
            };

            //渲染报表
            centerMap.setOption(centerMapOpt);
            window.addEventListener("resize", function () {
                centerMap.resize();
            });
        },
        leftCenter1: function () {
            var leftCenter1 = this.$echarts.init(
                document.querySelector("#leftCenter1")
            );

            var demoData = {
                name: "",
                value: 90,
                pos: ["50%", "50%"],
            };

            var leftCenter1Option = {
                // backgroundColor: "#212121",
                series: [
                    // 外侧光线
                    {
                        name: demoData.name,
                        type: "gauge",
                        center: demoData.pos,
                        radius: "60%",
                        startAngle: 225,
                        endAngle: -45,
                        min: 0,
                        max: 100,
                        axisLine: {
                            show: true,
                            lineStyle: {
                                width: 2,
                                color: [
                                    [
                                        demoData.value / 100,
                                        new this.$echarts.graphic.LinearGradient(
                                            0,
                                            0,
                                            1,
                                            0,
                                            [
                                                {
                                                    offset: 0,
                                                    color:
                                                        "rgba(255,255,255,0)",
                                                },
                                                {
                                                    offset: 1,
                                                    color: "#0CD7F0",
                                                },
                                            ]
                                        ),
                                    ],
                                    [1, "rgba(255,255,255,0)"],
                                ],
                            },
                        },
                        axisTick: {
                            show: 0,
                        },
                        splitLine: {
                            show: 0,
                        },
                        axisLabel: {
                            show: 0,
                        },
                        pointer: {
                            show: 0,
                        },
                        detail: {
                            show: 0,
                        },
                        data: [
                            {
                                value: demoData.value,
                            },
                        ],
                    },
                    // 内圆
                    {
                        name: "内圆",
                        type: "pie",
                        hoverAnimation: false,
                        legendHoverLink: false,
                        radius: "90%",
                        z: 0,

                        labelLine: {
                            normal: {
                                show: false,
                            },
                        },
                        data: [
                            {
                                value: 0,
                            },
                            {
                                value: 10,

                                itemStyle: {
                                    normal: {
                                        color: "rgba(110,182,255,0.22)",
                                    },
                                    emphasis: {
                                        color: "rgba(110,182,255,0.22)",
                                    },
                                },
                            },
                        ],
                    },
                    // 圆环
                    {
                        name: "小圆形",
                        type: "pie",
                        hoverAnimation: false,
                        legendHoverLink: false,
                        radius: ["5%", "6%"],
                        z: 0,
                        labelLine: {
                            normal: {
                                show: false,
                            },
                        },
                        data: [
                            {
                                value: 0,
                            },
                            {
                                value: 10,

                                itemStyle: {
                                    normal: {
                                        color: "#0BD9F6",
                                    },
                                    emphasis: {
                                        color: "#0BD9F6",
                                    },
                                },
                            },
                        ],
                    },
                    // 内侧指针、数值显示
                    {
                        name: demoData.name,
                        type: "gauge",
                        center: demoData.pos,
                        radius: "54%",
                        startAngle: 226,
                        endAngle: -46,
                        min: 0,
                        max: 100,
                        axisLine: {
                            show: true,
                            lineStyle: {
                                width: 30,
                                color: [
                                    [
                                        1,
                                        new this.$echarts.graphic.LinearGradient(
                                            0,
                                            0,
                                            1,
                                            0,
                                            [
                                                {
                                                    offset: 0,
                                                    color:
                                                        "rgba(38, 211, 166, 1)",
                                                },
                                                {
                                                    offset: 0.333,
                                                    color:
                                                        "rgba(38, 211, 166, 1)",
                                                },

                                                {
                                                    offset: 0.666,
                                                    color:
                                                        "rgba(24, 179, 254, 1)",
                                                },

                                                {
                                                    offset: 1,
                                                    color:
                                                        "rgba(255, 54, 162, 1)",
                                                },
                                            ]
                                        ),
                                    ],
                                ],
                            },
                        },
                        axisTick: {
                            show: 0,
                        },
                        splitLine: {
                            show: 0,
                        },
                        axisLabel: {
                            show: 0,
                        },
                        pointer: {
                            show: true,
                            length: "102%",
                            width: 3,
                        },
                        title: {
                            show: true,
                            offsetCenter: [0, "65%"],
                            color: "white",
                            fontSize: 20,
                            // backgroundColor: "#D8d8d8",
                            borderRadius: 21,
                            padding: 5,
                        },
                        detail: {
                            show: true,
                            offsetCenter: [0, 60],
                            textStyle: {
                                fontSize: 25,
                                color: "#fff",
                            },
                            formatter: ["{value}"].join("\n"),

                            rich: {
                                name: {
                                    fontSize: 20,
                                    lineHeight: 10,
                                    color: "#ddd",
                                    padding: [30, 0, 0, 0],
                                },
                            },
                        },
                        itemStyle: {
                            normal: {
                                color: "#FFED8B",
                            },
                        },
                        data: [
                            {
                                value: demoData.value,
                                name: demoData.name,
                            },
                        ],
                    },
                    // 外围刻度
                    {
                        type: "gauge",
                        center: demoData.pos,
                        radius: "50%",
                        splitNumber: 10,
                        min: 0,
                        max: 100,
                        startAngle: 225,
                        endAngle: -45,
                        axisLine: {
                            show: true,
                            lineStyle: {
                                width: 1,
                                color: [[1, "rgba(0,0,0,0)"]],
                            },
                        }, //仪表盘轴线

                        //刻度样式
                        splitLine: {
                            show: true,
                            length: 6,
                            lineStyle: {
                                width: 1,
                            },
                        }, //分隔线样式
                        axisLabel: {
                            show: false,
                            distance: 10,
                            textStyle: {
                                color: "#fff",
                                fontSize: "12",
                                fontWeight: "bold",
                            },
                        },
                        pointer: {
                            show: 0,
                        },
                        detail: {
                            show: 0,
                        },
                    },
                ],
            };

            leftCenter1.setOption(leftCenter1Option);
            window.addEventListener("resize", function () {
                leftCenter1.resize();
            });
        },
        leftCenter2: function () {
            var leftCenter2 = this.$echarts.init(
                document.querySelector("#leftCenter2")
            );

            let data = {
                value: 66,
                name: "完成率",
            };

            var leftCenter2Option = {
                // backgroundColor: "#04243E",

                title: {
                    text: data.value + "%",
                    x: "49%",
                    y: "45%",
                    textAlign: "center",
                    textStyle: {
                        fontWeight: "bold",
                        fontSize: 30,
                        color: "white",
                    },
                },

                data: [
                    {
                        name: data.name,
                    },
                ],

                series: [
                    {
                        // 主圆环
                        name: data.name,
                        type: "pie",
                        radius: ["90%", "70%"],
                        startAngle: 225,
                        color: [
                            {
                                type: "linear",
                                x: 1,
                                y: 0,
                                x2: 0,
                                y2: 0,
                                colorStops: [
                                    {
                                        offset: 0,
                                        color: "rgba(47,172,234,1)", // 0% 处的颜色
                                    },
                                    {
                                        offset: 1,
                                        color: "rgba(47,172,234,.1)", // 100% 处的颜色
                                    },
                                ],
                            },
                            "transparent",
                        ],
                        hoverAnimation: true,
                        legendHoverLink: false,
                        z: 10,
                        labelLine: {
                            normal: {
                                show: false,
                            },
                        },
                        data: [
                            {
                                value: (75 * data.value) / 100,
                            },
                            {
                                value: 100 - (75 * data.value) / 100,
                            },
                        ],
                    },
                    {
                        // 背景圆环
                        name: "",
                        type: "pie",
                        radius: ["50%", "70%"],
                        silent: true,
                        startAngle: 225,
                        labelLine: {
                            normal: {
                                show: false,
                            },
                        },
                        z: 5,
                        data: [
                            {
                                value: 75,
                                itemStyle: {
                                    color: "gold",
                                    borderWidth: 2,
                                    borderColor: "#1E90FF",
                                },
                            },
                            {
                                value: 25,
                                itemStyle: {
                                    color: "transparent",
                                },
                            },
                        ],
                    },
                    {
                        // 底部
                        name: "",
                        type: "pie",
                        radius: ["40%", "70%"],
                        startAngle: 230,
                        labelLine: {
                            show: false,
                        },
                        z: 15,
                        silent: true,
                        label: {
                            show: true,
                            rich: {
                                a: {
                                    color: "#fff",
                                    fontSize: 32,
                                    padding: [0, -50, -180, 0],
                                },
                                b: {
                                    color: "#fff",
                                    fontSize: 32,
                                    padding: [0, 0, -180, -50],
                                },
                            },
                        },
                        data: [
                            {
                                // 底部两条线
                                value: 1,
                                itemStyle: {
                                    color: "#0096e0",
                                },
                            },
                            {
                                value: 800,
                                itemStyle: {
                                    color: "transparent",
                                },
                            },
                            {
                                value: 1,
                                itemStyle: {
                                    color: "#0096e0",
                                },
                            },
                            {
                                value: 230,
                                itemStyle: {
                                    color: "transparent",
                                },
                            },
                        ],
                    },
                    {
                        // 背景
                        name: "",
                        type: "pie",
                        cursor: "default",
                        radius: ["0", "80%"],
                        hoverAnimation: false,
                        legendHoverLink: false,
                        itemStyle: {
                            color: {
                                type: "linear",
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [
                                    {
                                        offset: 0,
                                        color: "rgba(38,64,76,0.8)", // 0% 处的颜色
                                    },
                                    {
                                        offset: 1,
                                        color: "rgba(38,64,76,0)", // 100% 处的颜色
                                    },
                                ],
                            },
                        },
                        labelLine: {
                            normal: {
                                show: false,
                            },
                        },
                        data: [
                            {
                                value: 1,
                            },
                        ],
                    },
                    {
                        // 中间圈
                        name: "",
                        z: 5,
                        type: "pie",
                        cursor: "default",
                        radius: ["32%", "32%"],
                        hoverAnimation: false,
                        legendHoverLink: false,
                        labelLine: {
                            normal: {
                                show: false,
                            },
                        },
                        data: [
                            {
                                value: 1,
                                itemStyle: {
                                    normal: {
                                        borderWidth: 2,
                                        borderColor: {
                                            type: "linear",
                                            x: 0,
                                            y: 0,
                                            x2: 0,
                                            y2: 1,
                                            colorStops: [
                                                {
                                                    offset: 0,
                                                    color:
                                                        "rgba(2,144,214,0.8)", // 0% 处的颜色
                                                },
                                                {
                                                    offset: 1,
                                                    color: "rgba(2,144,214,0)", // 100% 处的颜色
                                                },
                                            ],
                                        },
                                    },
                                },
                            },
                        ],
                    },
                ],
            };

            leftCenter2.setOption(leftCenter2Option);
            window.addEventListener("resize", function () {
                leftCenter2.resize();
            });
        },
        leftBottom: function () {
            var leftBottom = this.$echarts.init(
                document.querySelector("#leftBottom")
            );
            var leftBottomOption = {
                // backgroundColor: "#323a5e",
                tooltip: {
                    trigger: "axis",
                    axisPointer: {
                        // 坐标轴指示器，坐标轴触发有效
                        type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
                    },
                },
                grid: {
                    left: "2%",
                    right: "4%",
                    bottom: "14%",
                    top: "16%",
                    containLabel: true,
                },
                legend: {
                    data: ["1", "2", "3"],
                    right: 10,
                    top: 12,
                    textStyle: {
                        color: "#fff",
                    },
                    itemWidth: 12,
                    itemHeight: 10,
                    // itemGap: 35
                },
                xAxis: {
                    type: "category",
                    data: [
                        "2012",
                        "2013",
                        "2014",
                        "2015",
                        "2016",
                        "2017",
                        "2018",
                        "2019",
                    ],
                    axisLine: {
                        lineStyle: {
                            color: "white",
                        },
                    },
                    axisLabel: {
                        // interval: 0,
                        // rotate: 40,
                        textStyle: {
                            fontFamily: "Microsoft YaHei",
                        },
                    },
                },

                yAxis: {
                    type: "value",
                    max: "1200",
                    axisLine: {
                        show: false,
                        lineStyle: {
                            color: "white",
                        },
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: "rgba(255,255,255,0.3)",
                        },
                    },
                    axisLabel: {},
                },
                dataZoom: [
                    {
                        show: true,
                        height: 12,
                        xAxisIndex: [0],
                        bottom: "5%",
                        left: "7%",
                        start: 10,
                        end: 90,
                        handleIcon:
                            "path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z",
                        handleSize: "110%",
                        handleStyle: {
                            color: "#d3dee5",
                        },
                        textStyle: {
                            color: "#fff",
                        },
                        borderColor: "#90979c",
                    },
                    {
                        type: "inside",
                        show: true,
                        height: 15,
                        start: 1,
                        end: 35,
                    },
                ],
                series: [
                    {
                        name: "1",
                        type: "bar",
                        barWidth: "15%",
                        itemStyle: {
                            normal: {
                                color: new this.$echarts.graphic.LinearGradient(
                                    0,
                                    0,
                                    0,
                                    1,
                                    [
                                        {
                                            offset: 0,
                                            color: "#fccb05",
                                        },
                                        {
                                            offset: 1,
                                            color: "#f5804d",
                                        },
                                    ]
                                ),
                                barBorderRadius: 12,
                            },
                        },
                        data: [400, 400, 300, 300, 300, 400, 400, 400, 300],
                    },
                    {
                        name: "2",
                        type: "bar",
                        barWidth: "15%",
                        itemStyle: {
                            normal: {
                                color: new this.$echarts.graphic.LinearGradient(
                                    0,
                                    0,
                                    0,
                                    1,
                                    [
                                        {
                                            offset: 0,
                                            color: "#8bd46e",
                                        },
                                        {
                                            offset: 1,
                                            color: "#09bcb7",
                                        },
                                    ]
                                ),
                                barBorderRadius: 11,
                            },
                        },
                        data: [400, 500, 500, 500, 500, 400, 400, 500, 500],
                    },
                    {
                        name: "3",
                        type: "bar",
                        barWidth: "15%",
                        itemStyle: {
                            normal: {
                                color: new this.$echarts.graphic.LinearGradient(
                                    0,
                                    0,
                                    0,
                                    1,
                                    [
                                        {
                                            offset: 0,
                                            color: "#248ff7",
                                        },
                                        {
                                            offset: 1,
                                            color: "#6851f1",
                                        },
                                    ]
                                ),
                                barBorderRadius: 11,
                            },
                        },
                        data: [400, 600, 700, 700, 1000, 400, 400, 600, 700],
                    },
                ],
            };

            var app = {
                currentIndex: -1,
            };
            setInterval(function () {
                var dataLen = leftBottomOption.series[0].data.length;

                // 取消之前高亮的图形
                leftBottom.dispatchAction({
                    type: "downplay",
                    seriesIndex: 0,
                    dataIndex: app.currentIndex,
                });
                app.currentIndex = (app.currentIndex + 1) % dataLen;
                //console.log(app.currentIndex);
                // 高亮当前图形
                leftBottom.dispatchAction({
                    type: "highlight",
                    seriesIndex: 0,
                    dataIndex: app.currentIndex,
                });
                // 显示 tooltip
                leftBottom.dispatchAction({
                    type: "showTip",
                    seriesIndex: 0,
                    dataIndex: app.currentIndex,
                });
            }, 1000);

            leftBottom.setOption(leftBottomOption);
            window.addEventListener("resize", function () {
                leftBottom.resize();
            });
        },
        rightBottom: function () {
            var rightBottom = this.$echarts.init(
                document.querySelector("#rightBottom")
            );
            var rightBottomOption = {
                // backgroundColor: "rgba(011, 023, 059)",
                tooltip: {
                    trigger: "axis",
                    axisPointer: {
                        // 坐标轴指示器，坐标轴触发有效
                        type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
                    },
                    formatter: function (list) {
                        var msg = "";
                        for (let i in list) {
                            if (i == 0) {
                                msg += list[i].name + "<br>";
                            }
                            msg +=
                                list[i].seriesName +
                                "：" +
                                list[i].data +
                                "万元<br>";
                            if (
                                i > 0 &&
                                list[i].seriesName == "不可用余额" &&
                                list[i - 1].seriesName == "可用余额"
                            ) {
                                msg +=
                                    "总存款余额" +
                                    "：" +
                                    (list[i].data + list[i - 1].data) +
                                    "万元<br>";
                            }
                            if (
                                i > 0 &&
                                list[i].seriesName == "支出" &&
                                list[i - 1].seriesName == "收入"
                            ) {
                                msg +=
                                    "净收入" +
                                    "：" +
                                    (list[i - 1].data - list[i].data) +
                                    "万元<br>";
                            }
                        }
                        return msg;
                    },
                },
                legend: {
                    textStyle: {
                        color: "rgba(255,255,255,1)",
                    },
                    data: ["可用余额", "不可用余额", "收入", "支出"],
                },
                grid: {
                    left: "3%",
                    right: "4%",
                    bottom: "3%",
                    containLabel: true,
                },
                xAxis: {
                    type: "category",
                    axisLine: {
                        lineStyle: {
                            color: "rgba(255,255,255,1)",
                            width: 2,
                        },
                    },
                    data: [
                        "周一",
                        "周二",
                        "周三",
                        "周四",
                        "周五",
                        "周六",
                        "周日",
                    ],
                },
                yAxis: {
                    axisLine: {
                        lineStyle: {
                            color: "rgba(255,255,255,1)",
                            width: 2,
                        },
                    },
                    splitLine: {
                        //分割线配置
                        lineStyle: {
                            color: "#AAAAAA56",
                        },
                    },
                },
                series: [
                    {
                        name: "可用余额",
                        type: "bar",
                        stack: "余额",
                        barMaxWidth: 30,
                        data: [120, 132, 101, 134, 90, 230, 210],
                        itemStyle: {
                            normal: {
                                color: new this.$echarts.graphic.LinearGradient(
                                    0,
                                    1,
                                    0,
                                    0,
                                    [
                                        {
                                            offset: 1,
                                            color: "#00ffff", // 0% 处的颜色
                                        },
                                        {
                                            offset: 0,
                                            color: "#3893e5", // 100% 处的颜色
                                        },
                                    ],
                                    false
                                ),
                            },
                        },
                    },
                    {
                        name: "不可用余额",
                        type: "bar",
                        stack: "余额",
                        barMaxWidth: 30,
                        data: [220, 182, 191, 234, 290, 330, 310],
                        itemStyle: {
                            normal: {
                                color: new this.$echarts.graphic.LinearGradient(
                                    0,
                                    1,
                                    0,
                                    0,
                                    [
                                        {
                                            offset: 1,
                                            color: "#bab3bd69", // 0% 处的颜色
                                        },
                                        {
                                            offset: 0,
                                            color: "#bab3bd69", // 100% 处的颜色
                                        },
                                    ],
                                    false
                                ),
                            },
                        },
                    },
                    {
                        name: "收入",
                        data: [220, 453, 301, 354, 290, 330, 320],
                        type: "line",
                        itemStyle: {
                            normal: {
                                color: "#0088D4",
                            },
                        },
                    },
                    {
                        name: "支出",
                        data: [213, 356, 123, 225, 78, 123, 354],
                        type: "line",
                        itemStyle: {
                            normal: {
                                color: "#DB3233",
                            },
                        },
                    },
                ],
            };

            rightBottom.setOption(rightBottomOption);
            window.addEventListener("resize", function () {
                rightBottom.resize();
            });
        },
    },
};
</script>

<style scoped lang="scss">
.header:hover {
    cursor: pointer;
}

.db-view {
    width: 100vw;
    height: 100vh;
    min-height: 635px;
    background-color: #0f1c30;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url(~@/assets/img/bg01.png);
    background-size: cover;
}

.header {
    margin: 0 auto;
    width: 100%;
    height: 65px;
    max-width: 1920px;
    background: url(~@/assets/img/header.png) center no-repeat;
    h3 {
        margin: 0;
        padding: 0;
        line-height: 50px;
        text-align: center;
        font-size: 24px;
        color: #5dc2fe;
    }
}

.wrapper {
    position: absolute;
    top: 80px;
    bottom: 0;
    left: 0;
    right: 0;
    min-height: 555px;
    .container-fluid {
        width: 100%;
        height: 100%;
        min-height: 100%;
        padding-right: 15px;
        padding-left: 15px;
        margin-right: auto;
        margin-left: auto;

        .row {
            margin-left: -7.5px;
            margin-right: -7.5px;
        }

        .row > div {
            padding-left: 7px;
            padding-right: 8px;
        }

        .xpanel-wrapper {
            padding-bottom: 15px;
            box-sizing: border-box;
        }

        .xpanel-wrapper-1 {
            height: 100%;
        }

        .xpanel-wrapper-2 {
            height: 50%;
        }

        .xpanel-wrapper-3 {
            height: 33.33333%;
        }

        .xpanel {
            padding: 15px;
            height: 100%;
            min-height: 170px;
            background: url(~@/assets/img/panel.png) center no-repeat;
            background-size: 100% 100%;
            box-sizing: border-box;
        }
    }
}

/* tool */
.fill-h {
    height: 100%;
    min-height: 100%;
}
.no-margin {
    margin: 0 !important;
}
.no-padding {
    padding: 0 !important;
}

/* scrollbar */
::-webkit-scrollbar {
    width: 0;
    height: 0;
}
::-webkit-scrollbar-track {
    background-color: transparent;
}
::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: rgba(0, 0, 0, 0.3);
}
</style>
