var KEY = "key1";

// ローカルストレージをセットします。
function localStorageSetItem() {
    var obj = $("date-deadline").text();
    localStorage.setItem(KEY, JSON.stringify(obj));
    alert("Local Storage: データーをセットしました。");
}

// ローカルストレージの値を取得します。。document文書
function localStorageGetItem() {
    var item = localStorage.getItem(KEY);
    var obj = JSON.parse(item);
    document.getElementById("content").innerHTML = obj;
}
    
// ローカルストレージの全データを消去します。ここまで
function localStorageClear() {
    localStorage.clear();
    document.getElementById("content").innerHTML = "";
}