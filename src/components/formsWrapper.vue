<template>
  <div>
    <big>hello Echarts</big>
    <figure>
      <report-forms :option="histogram"></report-forms>
    </figure>

    <figure>
      <report-forms :option="pie"></report-forms>
    </figure>

  </div>
</template>
<script>
  import reportForms from './formsTemplates/histogram'
  export default {
    components:{
      reportForms
    },
    data(){

      return {
        // todo 后期报表每个图表对应一个配置对象
        histogram: {
          title : {
            text: '直方图',
            subtext: '纯属虚构'
          },
          tooltip : {
            trigger: 'axis'
          },
          legend: {
            type:'scroll', // note 可翻滚的图例
            data:['蒸发量',{
              name:'降水量',
              icon: 'circle',
              textStyle:{
                color:'red'
              }
            }]
          },
          toolbox: {  // note 工具栏
            show : true,
            feature : {
              mark : {show: true},
              dataView : {show: true, readOnly: true},
              magicType : {show: true, type: ['line', 'bar']},
              restore : {show: true},
              saveAsImage : {show: true}
            }
          },
          calculable : true,
          xAxis : [  // X轴
            {
              type : 'category',
              data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
            }
          ],
          yAxis : [  // Y轴
            {
              type : 'value'
            }
          ],
          series : [   //系列列表 type决定报表类型
            {
              name:'蒸发量',
              type:'line',
              data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
              markPoint : {
                data : [
                  {type : 'max', name: '最大值'},
                  {type : 'min', name: '最小值'}
                ]
              },
              markLine : {
                data : [
                  {type : 'average', name: '平均值'}
                ]
              }
            },
            {
              name:'降水量',
              type:'bar',
              data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
              markPoint : {
                data : [
                  {name : '年最高', value : 182.2, xAxis: 7, yAxis: 183, symbolSize:18},
                  {name : '年最低', value : 2.3, xAxis: 11, yAxis: 3}
                ]
              },
              markLine : {
                data : [
                  {type : 'average', name : '平均值'}
                ]
              }
            }
          ]
        },
        pie: {
          title : {
            text: '饼图',
            subtext: '纯属虚构',
            x:'left'  //位置
          },
          tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          legend: {
            type:'scroll',
            x : 'center',
            y : 'bottom',
            data:['rose1','rose2','rose3','rose4','rose5','rose6','rose7','rose8']
          },
          toolbox: {
            show : true,
            feature : {
              mark : {show: true},
              dataView : {show: true, readOnly: false},
              magicType : {
                show: true,
                type: ['pie', 'funnel']
              },
              restore : {show: true},
              saveAsImage : {show: true}
            }
          },
          calculable : true,
          series : [
            {
              name:'半径模式',
              type:'funnel',
              radius : [20, 110],
              center : ['25%', 200],
              roseType : 'radius',
              width: '40%',       // for funnel
              max: 40,            // for funnel
              itemStyle : {
                normal : {
                  label : {
                    show : false
                  },
                  labelLine : {
                    show : false
                  }
                },
                emphasis : {
                  label : {
                    show : true,

                  },
                  labelLine : {
                    show : true,

                  }
                }
              },
              data:[
                {value:10, name:'rose1'},
                {value:5, name:'rose2'},
                {value:15, name:'rose3'},
                {value:25, name:'rose4'},
                {value:20, name:'rose5'},
                {value:35, name:'rose6'},
                {value:30, name:'rose7'},
                {value:40, name:'rose8'}
              ]
            },
            {
              name:'面积模式',
              type:'pie',
              radius : [30, 110],
              center : ['75%', 200],
              roseType : 'area',
              x: '50%',               // for funnel
              max: 40,                // for funnel
              sort : 'ascending',     // for funnel
              data:[
                {value:10, name:'rose1'},
                {value:5, name:'rose2'},
                {value:15, name:'rose3'},
                {value:25, name:'rose4'},
                {value:20, name:'rose5'},
                {value:35, name:'rose6'},
                {value:30, name:'rose7'},
                {value:40, name:'rose8'}
              ]
            }
          ]
        }
      }
    },
    method:{

    },
    mounted(){
    }
  }
</script>
<style scoped>

</style>
