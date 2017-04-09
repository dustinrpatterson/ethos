export default {
  intro(){
    try{
      console.group(`%c HIVEX.js 🐝 \t\t\t`, `font-size:16px; background-color:black; color:white; padding:5px; width:100%;`)
      console.groupEnd()
    }catch(error){}
  },

  log(...args){
    try{
      console.log(`🍯 `, ...args)
    }catch(error){}
  },

  error(...args){
    try{
      console.group(`%c🍯 Hivex Error`, `font-size:12px;`)
      console.error(...args);
      console.groupEnd()
    }catch(error){}
  }
}