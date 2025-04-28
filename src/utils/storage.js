import { Capacitor } from "@capacitor/core"
import { Preferences } from "@capacitor/preferences"

export const isFirstLogin=async()=>{
    if(Capacitor.isNativePlatform()){
        const {value}=await Preferences.get({key:'isFirstLogin'})
        if(value===null){
            await Preferences.set({key:'isFirstLogin',value:'false'})
            return true
        }
        return false
    }else {
        const firstLogin=localStorage.getItem(isFirstLogin)
        if(!firstLogin){
            localStorage.setItem('isFirstLogin','false')
            return true
        }
        return false
    }
}