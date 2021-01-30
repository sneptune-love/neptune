
# 标签转换

## @click替换

    @click -> bindtap
    
## @click.stop替换

    @click.stop -> catchtap="true"


## v-if替换

    v-if="([^ ]*)"  -> wx:if="{{$1}}"
    
## v-show替换

   v-show="([^ ]*)" -> hidden="{{!$1}}"

    
## v-for替换

    v-for="(.*)" -> wx:for="{{$1}}"


## image src替换

    :src="([^ ]*)" -> src="{{$1}}"
    
## img标签替换

    <img(.*)/?> -> <image$1/>
    

## i标签替换

    <i(.*)i> -> <view$1view>

## p标签替换

    <p(.*)p> -> <view$1view>

## div标签替换

    <div(.*)div> -> <view$1view>

## span标签替换

    <span(.*)span> -> <view$1view>
