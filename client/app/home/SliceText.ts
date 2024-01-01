export const SliceText=(str:String)=>{
        if(str.length<25)return str
        else(str.substring(0,25)+'...')
} 