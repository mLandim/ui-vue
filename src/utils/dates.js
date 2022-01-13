// Util > String(Date Format 103) to Date (JS)
const stringToDate = (data) => {

    //console.log('StringToDate :: '+ data)
    
    let dataArr = data.split("/")
    let year = parseInt(dataArr[2])
    let month = parseInt(dataArr[1]) - 1
    let day = parseInt(dataArr[0])

    return  new Date(year, month, day)

}  

// Util > Diff in days 
const diffDates = (data1, data2) => {

    let diferenca = Math.abs(data1 - data2)
    let diferencaEmDias = Math.ceil(diferenca / (1000 * 60 * 60 * 24))

    return diferencaEmDias
}


export {stringToDate, diffDates}