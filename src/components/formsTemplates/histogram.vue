<template>
    <div class="report_forms"></div>
</template>

<script>

  export default {
    props:{
      option:Object,
      theme:[String,Object],
      initOptions:String,
      group:String,
      autoResize:Boolean
    },
    data(){
      return {

      }
    },
    methods:{

    },
    mounted(){
      let echarts = this.$echarts.init(this.$el)
      console.log(this.$el)
      console.log(this.option)
      echarts.setOption(this.option)
    }
  }

</script>

<style scoped>
  .report_forms{
    width: 600px;
    height: 400px;
    margin: 0 auto;
  }
</style>
