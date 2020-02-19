export const getDate = () =>{
    const currentTimes = new Date();
    const time = currentTimes.toGMTString()
    return time
}
/*
export const setLogsADD = (msg) =>{			
    let log ={}			
    log.id = Math.random()
    log.logAction = msg
    log.logtime = getDate()
    logsData.concat([ ...logsData, log ])
}
*/
