const storeService = (function () {

    let storeArr = []

    function loadData(url, callback){
        fetch(url)
            .then(response => response.json())
            .then(data => {
                // console.log(data)
                storeArr = data  // 바꿔치기
                callback(data) // data: 맛집 배열
            })

    }

    function getDataByIndex(index) {
        return storeArr[index]
    }

    return {loadData, getDataByIndex}

})()